import { useLocation, useNavigate } from "react-router-dom";
import './Personagem.css'

function Personagem() {
    const location  = useLocation();
    const { personagem } = location.state || {};

    const navigate = useNavigate()

    if (!personagem) return <p>Nenhum personagem selecionado.</p>

    const openList = (personagem) => {
        navigate('/', { state: { personagem }})
    }

    return (
        <div>
            <h2>{personagem.name}</h2>
            <img src={personagem.imageUrl}/>
            <p className="negrito">Atrações</p>
            {
                personagem.films == "" ? "" : <p>Filmes: {personagem.films}</p> 
            }

            {
                personagem.shortFilms == "" ? "" : <p>Curtas-metragens: {personagem.shortFilms}</p>
            }

            {
                personagem.tvShows == "" ? "" : <p>Programas de TV: {personagem.tvShows}</p>
            }
            <button onClick={() => openList(personagem)} className="button">Voltar à lista</button>
        </div>
    );
}

export default Personagem