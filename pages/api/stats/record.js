import db from '../../../db.js'

export default async function handler(req, res) {

  console.log(req.headers.host, "REQQQ")
  // Can only be called from the same server; hide it otherwise
  if (!req.headers.host.startsWith("localhost")) {
    return res.status(404);
  }

  const response = await fetch(process.env.DELEGATOR_QUERY_URL, {
    headers: {
      'project_id': process.env.BLOCKFROST_PROJECT_ID
    },
  });

  const body = await response.json();

  const insertStatement = body.map(deleg => (
    {
      live_stake: BigInt(deleg.live_stake),
      stake_address: deleg.address,
      date_credited: new Date().toISOString().slice(0, 10)
    }
  ));

  let insertResult = await db()('daily_delegations').insert(insertStatement);

  if (insertResult.command === 'INSERT' && insertResult.rowCount >= 0) {
    res.status(200).json({
      result: "ok"
    });
  } else {
    res.status(500).json({
      result: "error",
      reason: insertResult.toString()
    });
  }
}