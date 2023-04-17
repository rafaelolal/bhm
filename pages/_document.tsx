import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head />
      <link rel='icon' href='/bhm/favicon.ico' />
      <body className="backdrop">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
