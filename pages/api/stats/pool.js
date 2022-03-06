import db from '../../../db.js'

export default async function handler(req, res) {
  const data = await db()("delegations");

  res.status(200).json(data);
}