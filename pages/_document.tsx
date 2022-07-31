import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" class="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <body className="bg-gradient-to-r from-green-400 to-blue-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}