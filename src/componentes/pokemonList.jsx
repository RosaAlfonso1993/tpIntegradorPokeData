import React, { useEffect, useState, Fragment } from 'react';
import { Row } from "react-bootstrap";
import AppCard from "./card";
import AppNavbar from "./navbar";

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    const [findPokemon, setFindPokemon] = useState([]);

    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = async () => {
        try {
            const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0');
            const datoApi = await api.json();
            setPokemon(datoApi.results);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = async (e) => {
        await setFindPokemon(await pokemon.filter(function (poke) {
            return poke.name.lastIndexOf(e.target.value.toLowerCase()) === 0;
        }));
        console.log(findPokemon);
    };

    const listaAUsar = findPokemon.length === 0 ? pokemon : findPokemon;

    return (
        <div>
            <Fragment>
                <AppNavbar 
                handleChange = {handleChange}
                />
                <Row>
                    {listaAUsar.map((pokemon, i) =>
                        <AppCard
                            pokemon={pokemon}
                            key={i}
                        />
                    )
                    }

                </Row>
            </Fragment>
        </div>
    );
}

export default PokemonList;