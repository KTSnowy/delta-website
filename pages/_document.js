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
        <meta property="og:image" content="https://delta-website-eight.vercel.app/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Delta Informática" />
        <meta name="twitter:description" content="Com mais de 20 anos é a mais antiga recarga de cartuchos de Madureira" />
        <meta name="twitter:image" content="https://delta-website-eight.vercel.app/banner.png" />
        <meta name="theme-color" content="#202020" />
        <meta name="robots" content="Index, Follow" />
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