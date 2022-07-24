import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-TC5MEN8H66'
  return <>

    <Script
      id="first-line-google-analyticss"
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-TC5MEN8H66`}
    />

    <Script
      id="second-line-google-analyticss"
      strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-TC5MEN8H66');
    `}
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
