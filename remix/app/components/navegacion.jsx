import { Link, useLocation } from '@remix-run/react'

function NavegacionItem ({to, text, index}) {

    const location = useLocation()

    return (
        <Link
            to={to}
            className={location.pathname === to ? 'active' : ''}>
            {text}
        </Link>
    )
}

function Navegacion() {

    const routes = [
        {to:'/', text: 'Inicio'},
        {to:'/nosotros', text: 'Nosotros'},
        {to:'/blog', text: 'Blog'},
        {to:'/tienda', text: 'Tienda'},
    ]

    return (
        <nav className="navegacion">
            {
                routes.map((route, index) => 
                    <NavegacionItem 
                        to={route.to} 
                        text={route.text} 
                        key={index} 
                    />
                )
            }
        </nav>
    )
}

export default Navegacion