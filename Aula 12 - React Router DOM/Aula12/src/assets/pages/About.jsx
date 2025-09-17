import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate() 

    const handleNavigate = () => {
        alert("TESTE")
        navigate('/')
    }

    return (
        <>
        <h1>Componente About</h1>
        <button onClick={handleNavigate}>Clique em mim para navegar para Home</button>
        </>
    )
}