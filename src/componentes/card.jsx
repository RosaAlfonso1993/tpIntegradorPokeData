import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const AppCard = ({ pokemon }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [imagen, setImagen] = useState('http://1.bp.blogspot.com/-Haewt1s2sZk/TfA3f5QbsII/AAAAAAAAAfQ/SnyvVJcaWXU/s320/Buscando.JPG');
    const { name, url } = pokemon;
    const [habilidades, setHabilidades] = useState([]);
    const [tipoPokemon, settipoPokemon] = useState([])
    const id = url.split('/')[url.split('/').length - 2];


    useEffect(() => {
        traerImg();
    }, [name]);

    const traerImg = async () => {
        try {
            const api = await fetch(url);
            const info = await api.json();
            setHabilidades(info.abilities)
            settipoPokemon(info.types)
            const sprites = await info.sprites;
            if (sprites.front_default === null) {
                setImagen('https://www.casablancasrl.com.ar/images/fotos/640x480/foto-no-disponible.jpg');
            } else {
                setImagen(sprites.front_default);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }


    return (
        <div className="pokeCard">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div>
                    <img src={imagen} alt={name} style={{ width: '7em', height: '7em', margin: 'auto' }} /><br />
                    {name} <br />
                    <button onClick={handleClick} class="styleButton">Ver mas</button>
                </div>

                <div className='pokeCardAtras'>
                    ID Pokemon: {id} <br />
                    Habilidades: {habilidades.map(hab =>
                        " /" + hab.ability.name 
                )} <br/>
                    Tipo: {
                        tipoPokemon.map(tipo => 
                            " /" + tipo.type.name + '\n'
                            )
                    } <br/>
                    <button onClick={handleClick} class="styleButton">Volver</button>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default AppCard;