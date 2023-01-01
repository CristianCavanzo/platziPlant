import { NextApiHandler } from 'next'
import type { NextApiResponse } from 'next'
const exitPreview: NextApiHandler = (_, res: NextApiResponse) => {
  res.clearPreviewData()
  res.redirect('/')
  res.end()
}
export default exitPreview
