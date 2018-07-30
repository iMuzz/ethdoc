import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" type="text/css" />
          <link href="https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css" rel="stylesheet" />
          <script src='https://embed.runkit.com'></script> 
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
