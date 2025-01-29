import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../components/menu/Header/Header";
import NavBarMenu from "../components/NavBar/NavBarMenu";
import CardMenu from "../components/menu/Card/Card";
import Footer from "../components/Footer/Footer";
import { db } from "../data/db";
import { useState } from "react";

const MenuPage = () => {
    const [data, setData] = useState(db);
    return (
        <div>
            <NavBarMenu />
            <Header />
            <Container>
                <Row xs={1} md={4} className="g-4">  
                    {data.map((hamburgesa) => (
                        <CardMenu 
                            key={hamburgesa.id}
                            hamburgesa={hamburgesa}
                        />
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default MenuPage;
