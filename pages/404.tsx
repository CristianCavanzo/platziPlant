import { Layout } from '@components/Layout'
import { Typography } from '@material-ui/core'
import React from 'react'

const NotFound = () => {
  return (
    <Layout>
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Lo lamentamos
        </Typography>
      </div>
    </Layout>
  )
}

export default NotFound
