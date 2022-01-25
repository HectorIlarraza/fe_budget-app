import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import bowserImage from "../assets/bowserImage.jpeg";

const Styles = styled.div`
    .jumbo {
        background: url(${bowserImage}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export default function Jumbotron({ totalArr }){
    let currencyFormat = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(totalArr);
    
  return (
    <Styles>
        <div className="jumbo">
            <div className="pb-5 mb-4 rounded-3">
                <div className="container-fluid py-5">
                    <div className="overlay">
                        <Container>
                            <h2 className="fw-bold">Bank Account Total: {currencyFormat} </h2>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    </Styles>
  )
}