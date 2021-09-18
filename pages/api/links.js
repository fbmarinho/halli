// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const date = new Date(Date.now());
  res.status(200).json({ date: date.getUTCDate()})
}
