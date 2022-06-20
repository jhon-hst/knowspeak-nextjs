import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Landing.module.scss'

const Home: NextPage = () => {

    return (
        <div className={styles.landing}>
            <div className={'container'}>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.titleLogo}>Know<span>speak</span></h1>
                    <div className={`row ${styles.header}`}>
                        <div className='col-12 col-lg-5'>
                            <h2>Aprende ingles viendo videos</h2>
                            <p>Analiza palabra por palabra y frase por frase a través de los subtitulos</p>
                            <img src='/assets/images/google-play-badge.png' className='img-fluid' />
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className={'d-flex flex-row'}>
                                <div className=''>
                                    <img src='/assets/images/inicial.png' className='img-fluid' />
                                </div>
                                <div className=''>
                                    <img src='/assets/images/inicial-video.png' className='img-fluid' />
                                    <img src='/assets/images/window-traductor.png' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src='/assets/images/partes-del-traductor.png' className='img-fluid' />
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-3'>
                            <img src='/assets/images/border-in-field-video.png' className='img-fluid' />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <p>1</p>
                            <h3>Seleciona un video</h3>
                            <p>Accede a tu galería o agrega el link, puedes incluso ver video de Youtube, solo debes agregar el link que usas para compartir y colocarlo en el formulario.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <p>2</p>
                            <h3>Agrega los subtitulos</h3>
                            <p>Puedes cargar un archivo .srt o .vtt que son donde por lo general se guardan los subtitlos de un video o también puedes agregar el link.</p>
                            <p>Nota: Para videos de youtube no es necesario buscar los subtitlos, ya estos vienen incluidos en el video</p>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <img src='/assets/images/border-in-field-to-subtitles.png' className='img-fluid' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <img src='/assets/images/inicial-video.png' className='img-fluid' />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <p>3</p>
                            <h3>Disfruta viendo el video</h3>
                            <p>Una vez empiezes a ver el video los subtitlos apareceran, si no entiendes una palabra pudues precionar sobre ella y se abrirá una ventana donde la puedes analizar, viendo la traducción al español y escuchandola en distintas velocidades</p>
                            <p>Puesdes selecionar más de una palabra para analizar la frase completa.</p>
                        </div>
                    </div>
                    <div>
                        <img src='/assets/images/player-buttons.png' className='img-fluid' />
                    </div>
                </main>

            </div >
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div >
    )
}

export default Home
