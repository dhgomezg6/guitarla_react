import {
    Meta,
    Links
} from '@remix-run/react'
import styles from './syltes/index.css'

export function meta() {
    return (
        {
           charset: 'utf-8',
           title: 'GuitarLA - Remix',
           viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'https://fonts.gstatic.com',
            href: styles,
            crossOrigin: "true"
        },{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

function Document({children}){
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default function App(){
    return(
        <Document>
            <h2>Hola Mundo</h2>
        </Document>
    )
}