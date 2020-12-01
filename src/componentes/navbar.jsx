import React, { useState } from 'react'
import { Fragment } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
// import AppCard from "./card";

const AppNavbar = (setFindPokemon) => {
    

    const handleChange = (e) => {
        setFindPokemon(e.target.value);
        console.log(e.target.value);
    };

    return (
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
                            // name="nombre"
                            onChange={handleChange}
                        // value={AppCard.name}
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default AppNavbar;