import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const previewStatus: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.json({
    preview: req.preview ?? false,
    context: req.previewData,
  })
}

export default previewStatus
