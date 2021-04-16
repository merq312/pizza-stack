// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { menu } from '../../data/data'

export default (req, res) => {
  res.status(200).json(menu)
}
