/* eslint-disable @typescript-eslint/no-explicit-any */
import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

declare global {
    interface Window {
        gtag: any
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-TC5MEN8H66'

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            window.gtag('config', NEXT_PUBLIC_GOOGLE_ANALYTICS, {
                page_path: url,
            })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <Script
                id="first-line-google-analyticss"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-TC5MEN8H66`}
            />

            <Script id="second-line-google-analyticss" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          //this defaults to denying
          gtag('consent', 'default', {
              'analytics_storage': 'denied'
          });
          gtag('js', new Date());
          //este función es la que nos devuelve el valor de la cookie de preferencias
          function getCookie() {
              const value = "; " + document.cookie;
              const parts = value.split("; CookieConsent=");
              if (parts.length === 2) return parts.pop().split(';').shift();
          }
          //únicamente si el valor es true, se cargan los scripts de Google Analytics.
          if(getCookie() === "true"){
              gtag('consent', 'update', {
                  'analytics_storage': 'granted'
              });
          }
          gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
          });
    `}
            </Script>
            {/* <CookieConsent
      location="bottom"
      buttonText="Todas las cookies"
      onAccept={() => location.reload()}
      cookieName="CookieConsent"
      expires={150}
      enableDeclineButton={true}
      declineButtonText="Sólo funcional">
      Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio
      <Link href="/privacy-policies">
        <a className={styles.link}> - Políticas de privacidad</a>
      </Link>
    </CookieConsent> */}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
