import { useLocation } from "react-router-dom";

function Profile() {
    const location  = useLocation();
    const { user } = location.state || {};

    if (!user) return <p>Nenhum usuário selecionado.</p>

    return (
        <div>
            <h2>Perfil do usuário</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.telefone}</p>
        </div>
    );
}

export default Profile