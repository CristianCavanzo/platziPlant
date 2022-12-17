import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

// Not directly exported by NextJS (next/types). May change across versions.

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="text-gray-900 leading-tight">
        <Head />
        <body className="min-h-screen bg-gray-100 overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// Get Server Styles
// @see: https://material-ui.com/styles/advanced/#next-js

export default MyDocument
