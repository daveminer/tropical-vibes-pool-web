import db from '../../../db.js'

const API = process.env.BLOCKFROST_API_URL;
const AUTH_HEADER = { headers: { 'project_id': process.env.BLOCKFROST_PROJECT_ID } };
const STAKE_POOL_ID = '7447913be564ff4e2505fb21ca5de980517f3b1575e006ce2d754b74';

export default async function handler(req, res) {
  try {
    const apiEpochResponse = await apiEpoch();

    if (apiEpochResponse.error) {
      return internalServerError(apiEpochResponse)
    }

    const lastRecordedEpoch = await fetchLastRecordedEpoch();
    if (lastRecordedEpoch >= apiEpochResponse.epoch) {
      return okResponse(`epoch ${lastRecordedEpoch} data already saved.`);
    }

    const saveDelegationResponse = await saveDelegations(latestApiEpoch.epoch);
    if (saveDelegationResponse.error) {
      return internalServerError(saveDelegationResponse)
    }

    return okResponse(`epoch ${lastRecordedEpoch} written.`);
  } catch (e) {
    console.log(`Error while writing delegation records: ${e.toString()}`);
  }
}

// Fetch data about the latest epoch.
const fetchEpoch = () => fetch(`${API}/epochs/latest`, AUTH_HEADER);

// Fetch delegation data to the pool about a specific epoch
const fetchDelegations = (epoch) =>
  fetch(`${API}/epochs/${epoch}/stakes/${STAKE_POOL_ID}`, AUTH_HEADER);

// Get the last epoch saved in the database
const fetchLastRecordedEpoch = async () => {
  const result = await db()('delegation_snapshots').max('epoch');
  return result[0].max;
};

// Latest epoch according to the API
const apiEpoch = async () => {
  const epochResult = await fetchEpoch();
  const epochInfo = await epochResult.json();

  if (epochInfo.error && !epochInfo.epoch) {
    return {
      error: 'Error while trying to talk to API for latest epoch.',
      reason: epochInfo.message
    }
  }

  return {
    ok: true,
    epoch: epochInfo.epoch
  }
}

// Save the delegation records to the db
const saveDelegations = async (epoch) => {
  // TODO: handle pages; only 100 per page. check next page until length = 0
  const delegationResult = await fetchDelegations(epoch - 1);
  const delegationInfo = await delegationResult.json();

  if (delegationInfo.error) {
    return {
      error: 'Error while trying to talk to API for epoch delgation info.',
      reason: delegationInfo.message
    }
  }

  const insertStatement = delegationInfo.map(deleg => (
    {
      live_stake: BigInt(deleg.amount),
      stake_address: deleg.stake_address
    }
  ));

  let insertResult = await db()('delegations').insert(insertStatement);

  if (insertResult.command === 'INSERT' && insertResult.rowCount >= 0) {
    return {
      ok: true,
      rowsUpdated: rowCount
    }
  } else {
    return {
      error: 'Error while inserting delegations',
      reason: insertResult.toString()
    }
  }
}

// HTTP response helpers

const okResponse = (message) => {
  return res.status(200).json({
    result: 'ok',
    reason: message
  });
}

const internalServerError = (response) => {
  return res.status(500).json({
    error: response.error,
    reason: response.reason
  });
}
