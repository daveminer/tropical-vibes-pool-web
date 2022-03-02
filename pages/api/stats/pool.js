import db from '../../../db.js'

export default async function handler(req, res) {
  //try {
  const data = await db()("daily_delegations");
  console.log(data, "DATA");

  res.status(200).json(data);
  /*     } catch (err) {
    console.error(err);
      } */
}