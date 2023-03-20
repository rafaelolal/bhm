import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head />
      <body style={{ backgroundColor: 'black' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
