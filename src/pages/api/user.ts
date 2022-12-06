export default async function handler(req, res) {
  const data = await (await fetch(`https://halocn.top/album?id=${req.query.id}`)).json()
  res.status(200).json(data)
}
