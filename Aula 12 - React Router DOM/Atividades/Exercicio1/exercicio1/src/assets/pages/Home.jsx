import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Componente Home</h1>
            <Link  to={'/user'}>Navegar para User</Link>
        </>        
    )
}