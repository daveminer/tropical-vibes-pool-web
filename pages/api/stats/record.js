import db from '../../../db.js'

export default async function handler(req, res) {

  // Can only be called from the same server; hide it otherwise
  if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    return res.status(404);
  }

  /*   const response = await fetch(process.env.DELEGATOR_QUERY_URL, {
      headers: {
        'project_id': process.env.BLOCKFROST_PROJECT_ID
      },
    });
  
    const body = await response.json();
    console.log(body, "BODY"); */

  console.log(req, "REQ");

  let body = JSON.parse("[{\"address\": \"stake1u8jgfjh8lhjwq75lv62pnt3p3l4u82ypgr73aqk7ygj4f0sx4hyrf\",\"live_stake\": \"2521774962\"}]");

  const insertStatement = body.map(deleg => {
    return {
      live_stake: BigInt(deleg.live_stake),
      stake_address: deleg.address,
      date_credited: new Date().toISOString().slice(0, 10)
    }
  });

  //let insertResult = await db()('daily_delegations').insert(insertStatement);

  res.status(200).json({
    result: "ok"
  });
}