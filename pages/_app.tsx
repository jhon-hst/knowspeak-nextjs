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
    const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-0GZ9Q331XN'

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
                src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}');
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
