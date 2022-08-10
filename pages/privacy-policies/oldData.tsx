import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Private-policies.module.scss'

const PrivatePolicies: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>KnowSpeak - Políticas de Privacidad</title>
                <meta name="description" content="KnowSpeak - Políticas de Privacidad - Aprende inglés viendo videos, Que mejor manera de aprender un idioma que escuchando y analizando a los nativos." />
                <link rel="icon" href="/knowspeakicon.png" />
            </Head>

            <main className={'container'}>
                <Link href={'/'}>
                    <a>
                        <h1 className={`mt-5 titleLogo`}>Know<span>Speak</span></h1>
                    </a>
                </Link>
                <h1 className={'my-5 text-center'}>
                    Políticas de Privacidad
                </h1>

                <p className={styles.description}>
                    Knowspeak te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio o app.<br /><br />

                    En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).<br /><br />

                    El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.<br /><br />
                </p>
                <h2>Principios aplicados en el tratamiento de datos</h2>
                <p>
                    En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:<br /><br />
                    Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.<br /><br />
                    Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.<br /><br />
                    Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento.<br /><br />
                    El Titular te informará del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.<br /><br />
                    Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.<br /><br />
                </p>
                <h2>Obtención de datos personales</h2>
                <p>

                    Para usar knowspeak no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los siguientes:<br /><br />

                    Al contactar a través de los formularios de contacto o enviar un correo electrónico.<br /><br />
                    Al realizar un comentario en un artículo o página.<br /><br />
                    Al inscribirte en un formulario de suscripción o un boletín que el Titular gestiona con MailChimp.<br /><br />
                    Al inscribirte en un formulario de suscripción o un boletín que el Titular gestiona con MailRelay.<br /><br />
                    Al inscribirte en un formulario de suscripción o un boletín que el Titular gestiona con SendinBlue.<br /><br />
                </p>
                <h2>Tus derechos</h2>
                <p>

                    El Titular te informa que sobre tus datos personales tienes derecho a:<br /><br />

                    Solicitar el acceso a los datos almacenados.<br /><br />
                    Solicitar una rectificación o la cancelación.<br /><br />
                    Solicitar la limitación de su tratamiento.<br /><br />
                    Oponerte al tratamiento.<br /><br />
                    Solicitar la portabilidad de tus datos.<br /><br />
                    El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.<br /><br />

                    Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a soporte@knowspeak.io junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.<br /><br />

                    Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.<br /><br />
                </p>
            </main>
        </div>
    )
}

export default PrivatePolicies
