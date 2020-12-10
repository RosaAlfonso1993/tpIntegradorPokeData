import React, { useState } from 'react'
import { Fragment } from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

const AppNavbar = ({handleChange}) => {

    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">PokeData</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Buscar Pokemon"
                            className="mr-sm-2"
                            onChange={handleChange}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default AppNavbar;