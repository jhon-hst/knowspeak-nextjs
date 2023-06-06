import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Landing.module.scss'
import Image from 'next/image'
import { FacebookIcon, TelegramIcon } from '@assets/Svg'

const Home: NextPage = () => {
    return (
        <div className={styles.landing}>
            <div className={'container-fluid'}>
                <Head>
                    <title>KnowSpeak</title>
                    <meta
                        name="description"
                        content="Aprende inglés viendo videos, Que mejor manera de aprender un idioma que escuchando y analizando a los nativos."
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="facebook-domain-verification"
                        content="4efx3wwjb593q3maranyl90twdobpo"
                    />
                    <meta
                        name="yandex-verification"
                        content="8cfeb02380ee8615"
                    />
                </Head>

                <main className="">
                    <div className={`row ${styles.header} pb-md-3`}>
                        <h1 className={'titleLogo'}>
                            Know<span>Speak</span>
                        </h1>
                        <div className="col-12 col-md-7 ">
                            <h2 className={`${styles.title} mt-3 mt-md-5`}>
                                Aprende inglés viendo videos ✈
                            </h2>
                            <div
                                className={`${styles.containerImageHeader} d-md-none`}
                            >
                                <Image
                                    src={
                                        'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Finicial.png?alt=media&token=345f0501-b668-4b16-9c97-ef06ee3487a3'
                                    }
                                    width={1}
                                    height={2}
                                    layout="responsive"
                                    alt=""
                                />
                            </div>
                            <p
                                className={`mt-2 mb-4 mt-md-3 ${styles.description}`}
                            >
                                La mejor manera de aprender un idioma es
                                escuchando y analizando a los nativos.{' '}
                            </p>
                            <p
                                className={`mt-2 mb-4 mt-md-3 ${styles.description}`}
                            >
                                Esta App es una excelente herramienta que te
                                hará la vida muy fácil para analizar palabras o
                                frases a través de los subtítulos de un video.
                                🏁
                            </p>
                            <div className="row">
                                <div
                                    className={`${styles.containerStoreImage} mb-3 mt-5`}
                                >
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://play.google.com/store/apps/details?id=com.knowspeak&hl=es_CO&gl=US"
                                    >
                                        <Image
                                            src={
                                                'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fgoogle-play-badge.png?alt=media&token=8506c016-5d88-43bf-8438-559676e2c3c1'
                                            }
                                            width={100}
                                            height={30}
                                            layout="responsive"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div
                                    className={`${styles.containerStoreImage} mb-3 mt-5`}
                                >
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://apps.apple.com/us/app/id1667114593"
                                    >
                                        <Image
                                            src={
                                                'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fapp-store-badge.png?alt=media&token=f5b27476-9f98-4813-8723-2d8cc844d6f3'
                                            }
                                            width={100}
                                            height={30}
                                            layout="responsive"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 d-none d-md-block">
                            <div className={styles.containerImageHeader}>
                                <Image
                                    src={
                                        'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Finicial.png?alt=media&token=345f0501-b668-4b16-9c97-ef06ee3487a3'
                                    }
                                    width={1}
                                    height={2}
                                    layout="responsive"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.whiteSection} justify-content-center row`}
                    >
                        <div
                            className={`${styles.waveContainer} px-0 p-0 py-0`}
                        >
                            <svg
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none"
                                style={{ height: '100%', width: '100%' }}
                            >
                                <path
                                    d="M0.00,49.99 C148.14,146.55 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                                    style={{ stroke: 'none', fill: '#263859' }}
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`${styles.whiteSection} justify-content-center row pb-5`}
                    >
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="embed-responsive youtube-video">
                                <iframe
                                    className={`embed-responsive-item ${styles.youtubeVideo}`}
                                    src="https://www.youtube.com/embed/vABuCwhQgnA?rel=0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.whiteSection} justify-content-center row pb-5`}
                    >
                        <div className="col-12 col-md-8 col-lg-6">
                            <p className={`${styles.subtitles}`}>
                                Lo mejor es que los videos que puedes ver son
                                ilimitados, ya que eres tu mismo quien lo escoge
                                desde las plataformas más populares como
                                YouTube. 🎥
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${styles.whiteSection} justify-content-center row pb-5`}
                    >
                        <div className="col-12 col-md-8 col-lg-6">
                            <Image
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fpartes-del-traductor.png?alt=media&token=2547d67a-79c4-4b6c-bbbf-81a13ca0ed64'
                                }
                                alt=""
                                width={2}
                                height={1.8}
                                layout="responsive"
                            />
                            <p className={`${styles.subtitles} mt-5`}>
                                Nuestra App te permite hacer un análisis de cada
                                palabra o de cada frase, traduciendo en el
                                momento y sin salir de la app esas palabras que
                                aún desconoces, escuchándolas en varias
                                velocidades para entender su correcta
                                pronunciación.
                            </p>
                        </div>
                        <h2 className={`text-center mt-5 mb-3`}>
                            ¿Cómo funciona?{' '}
                        </h2>
                    </div>
                    <div
                        className={`row mt-5 justify-content-center align-items-center`}
                    >
                        <div className="col-12 col-md-5 mt-5 col-lg-4 mb-3 order-md-2">
                            <h3>1) Selecciona un video ✅</h3>
                            <p>Accede a tu galería o agrega el link. </p>
                            <p>
                                Para videos de YouTube solo debes copiar y pegar
                                el link que usas para compartir y agregarlo en
                                el formulario. Y así de fácil, solamente ten en
                                cuanta que el video debe tener subtítulos.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center order-md-1 ">
                            <div className={styles.containerVerticalCellphone}>
                                <Image
                                    src={
                                        'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fborder-in-field-video.png?alt=media&token=807c563c-b412-4116-8f54-619474b0631a'
                                    }
                                    alt=""
                                    width={1}
                                    height={2}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${styles.whiteSection} align-items-center justify-content-center row mt-5 py-5`}
                    >
                        <div className="col-12 col-md-5 col-lg-4 mb-3">
                            <h3>2) Agrega los subtítulos ✅ </h3>
                            <p>
                                <strong>Nota:</strong> Para videos de YouTube no
                                es necesario hacer este paso, los subtítulos ya
                                vienen incluidos en el video.
                            </p>
                            <p>
                                Puedes cargar un archivo .srt o .vtt los cuales
                                son por lo general donde se guardan los
                                subtítulos de un video o también puedes agregar
                                el link donde se alojan.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
                            <div className={styles.containerVerticalCellphone}>
                                <Image
                                    src={
                                        'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fborder-in-field-to-subtitles.png?alt=media&token=f7c2157b-b2dc-46af-8008-34503cd8c2d8'
                                    }
                                    alt=""
                                    width={1}
                                    height={2}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`row mt-5 justify-content-center  align-items-center pb-5`}
                    >
                        <div className="col-12 col-md-5 col-lg-4 mb-3 order-md-2">
                            <h3>3) Eso es todo, Disfruta viendo el video 🎊</h3>
                            <p>
                                Una vez empiezas a ver el video los subtítulos
                                aparecerán, si no entiendes una palabra puedes
                                presionar sobre ella y se abrirá una ventana
                                donde la puedes analizar, viendo la traducción
                                al español o escuchándola en distintas
                                velocidades.
                            </p>
                            <p>
                                Puedes seleccionar más de una palabra para
                                analizar la frase completa.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6 order-md-1">
                            <Image
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Finicial-video.png?alt=media&token=72300b56-7903-4a61-b9d7-638610b71025'
                                }
                                alt=""
                                width={2}
                                height={1}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    <div
                        className={`${styles.whiteSection} justify-content-center row pt-5 pb-5`}
                    >
                        <div className="col-12 col-md-8 col-lg-6">
                            <Image
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/knowspeak-fdec6/o/knowspeak-assets%2Fplayer-buttons.png?alt=media&token=727b7934-fcf7-40f6-ac40-1ea7f2769b05'
                                }
                                alt=""
                                width={2}
                                height={1.3}
                                layout="responsive"
                            />
                            <p className={`${styles.subtitles} mt-5`}>
                                Retroceder o adelantar el video en cortos plazos
                                para escuchar en repetidas ocasiones la frase.
                            </p>
                        </div>
                    </div>
                    <div className={`justify-content-center row pb-5`}>
                        <div className="col-12 col-md-8 col-lg-6">
                            <p className={`${styles.subtitles} mt-5`}>
                                Estamos en pleno desarrollo de la app, pronto
                                vendrán nuevas funcionalidades que te harán la
                                vida aún más fácil para aprender inglés.{' '}
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <footer className={`${styles.footer} `}>
                <Link href="/privacy-policies">
                    <a className={styles.link}>Políticas de privacidad</a>
                </Link>
                <div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="me-2"
                        href="https://www.facebook.com/KnowSpeak"
                    >
                        <Image
                            priority
                            src={FacebookIcon}
                            height={40}
                            width={40}
                            alt=""
                        />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/knowspeakoficial"
                    >
                        <Image
                            priority
                            src={TelegramIcon}
                            height={40}
                            width={40}
                            alt=""
                        />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home
