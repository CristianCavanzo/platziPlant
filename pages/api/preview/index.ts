import { getPlant } from '@api/index'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const enablePreview: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const slug = req.query.slug
  if (
    req.query.secret !== process.env.PREVIEW_SECRET ||
    typeof slug !== 'string' ||
    slug === ''
  ) {
    return res.status(401).json({ message: 'Invalid Token' })
  }
  try {
    const plant = await getPlant(slug, true)

    res.setPreviewData({})
    res.redirect(`/entry/${plant.slug}`)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }
    return res.status(401).json({ message: 'Invalid Slug' })
  }
}

export default enablePreview
