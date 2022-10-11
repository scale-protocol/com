import Head from 'next/head'

function IndexPage() {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-35R4FYLXJV"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-35R4FYLXJV');
      </script>
    </Head>
  )
}

export default IndexPage
