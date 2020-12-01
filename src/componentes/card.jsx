import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';



const AppCard = ({ pokemon }) => {
    const { name, url } = pokemon;
    const id = url.split('/')[url.split('/').length - 2];
    const [imagen, setImagen] = useState([]);

    useEffect(() => {
        traerImg();
    }, [])

    const traerImg = async () => {
        try {
            const api = await fetch(url);
            const info = await api.json();
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

    return (
        <div className="pokeCard">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagen} style={{ width: '7em', height: '7em', margin: 'auto' }} />
                <Card.Body>
                    <Card.Title>{id}- {name}</Card.Title>
                    <Button variant="primary">Ver Mas</Button>
                </Card.Body>
            </Card>
        </div>

    );

}

export default AppCard;