import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import GifAnimation from "./Animations/GifAnimation";
import styled from "styled-components";
import bowserImage from "../assets/bowserImage.jpeg";

const Styles = styled.div`
    .navigate {
        background: url(${bowserImage}) no-repeat fixed bottom;
        background-size: cover;
    }
`;

export default function NavbarDisplay(){
    return(
        <Styles>
            <Navbar className="navigate" variant="dark">
                <Container>
                        <GifAnimation />
                    <Nav className="main" activeKey="/home">
                        <Nav.Link href="/home" as={Link} to="/transactions">
                           <h1>Bowser's Budget App</h1> 
                        </Nav.Link>
                    </Nav>
                    <Nav className="justify-content-center" activeKey="/middle"></Nav>
                </Container>
                <Button variant="navigate">
                    <Navbar.Text>
                        <Nav.Link href="/new" as={Link} to="/transactions/new">
                            New Transaction
                        </Nav.Link>
                    </Navbar.Text> 
                </Button>
            </Navbar>
        </Styles>
    );
}