import { userParams } from 'react-router-dom';

export const UserPage = () => {
    const { id } = userParams();
    return <h3>Você está na página do Usuário {id}</h3>
}