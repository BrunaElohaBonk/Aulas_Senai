import { useNavigate } from "react-router-dom"

export const Produtos = () => {

    const navigate = useNavigate() 

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <>
        <h1>Produtos</h1>    
        <button onClick={handleNavigate}>Navegar para Home</button>
        </>        
    )
}