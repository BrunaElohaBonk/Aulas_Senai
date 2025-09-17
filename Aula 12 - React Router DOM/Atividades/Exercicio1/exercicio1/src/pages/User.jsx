import { useParams } from "react-router-dom"

export const User = () => {
    const { id } = useParams();

    return (
        <>
        <h1>User {id}</h1>
        <h1 style={{fontSize: "15px"}}>Para vizualizar o id, digite-o na URL</h1>
        </>
    )
}