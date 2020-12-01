import React, { useEffect, useState, Fragment } from 'react';
import { Row } from "react-bootstrap";
import AppCard from "./card";
import Paginacion from "./pagination";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
// import AppNavbar from "./navbar";

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    // const [currentPage] = useState(1);
    // const [postPerPage] = useState(50);
    const [findPokemon, setFindPokemon] = useState([]);

    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = async () => {
        try {
            const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=899&offset=0');
            const datoApi = await api.json();
            setPokemon(datoApi.results);
        } catch (error) {
            console.log(error);
        }
    };

    // const buscarPokemon = async (nombre) => {
    //     const promesas = await pokemon.filter(function (poke) {
    //         return poke.name.lastIndexOf(nombre.toLowerCase()) === 0;
    //     });
    //     console.log(promesas);
    //     // const newList = await promesas.Promise;
    //     // console.log(newList);
    //     return promesas;
    // }

    const handleChange = async (e) => {
        // await setFindPokemon(buscarPokemon(e.target.value));
        await setFindPokemon(await pokemon.filter(function (poke) {
            return poke.name.lastIndexOf(e.target.value.toLowerCase()) === 0;
        }));
        console.log(findPokemon);
    };

    const listaAUsar = findPokemon.length === 0 ? pokemon : findPokemon;

    // const indexOfLastPost = currentPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;

    return (
        <div>
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">PokeData</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Pokemon"
                                className="mr-sm-2"
                                onChange={handleChange}
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    {
                        listaAUsar.map((pokemon, i) =>
                            // listaAUsar[pokemon].name.includes(filter) &&
                            <AppCard
                                pokemon={pokemon}
                                key={i}
                            />
                        )
                    }

                </Row>
                <Paginacion
                // postPerPage={postPerPage}
                // totalPost={pokemon.length}
                />
            </Fragment>
        </div>
    );
}

export default PokemonList;