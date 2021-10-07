import Document, { Html, Head, Main, NextScript } from 'next/document'

class DeltaDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
        <meta property="og:title" content="Delta Informatica" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://delta-website-eight.vercel.app/" />
        <meta property="og:image" content="banner.png" />
        <meta name="theme-color" content="#202020" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DeltaDocument