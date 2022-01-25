import { Link } from "react-router-dom"
import { Card, Badge, Button } from "react-bootstrap";
import bowserDoom from "../assets/bowserDoom.jpeg";
import styled from "styled-components";

const Styles = styled.div`
    .card {
        color: white;
    }
`;

function TransactionHomeDetails() {

  return (
    <div>
        <Styles className="Home">
            <Card>
                <Card.Img variant="bottom" src={bowserDoom} alt="doom"/>
                <Card.ImgOverlay>
                    <Card.Title>
                        <h3>
                           <Badge>WELCOME!!!!</Badge> 
                        </h3>
                    </Card.Title>
                    <Card.Text>
                        <h4>
                            <Badge>
                                TO BOWSER's BUDGETTING APP, WHERE HE KEEPS TRACK OF
                                HIS BILL'S, EXPENSES AND WHO OWES HIM MONEY IN THE
                                MUSHROOM KINGDOM
                            </Badge>
                        </h4>
                    </Card.Text>
                    <Card.Text>
                        <h4>
                            <Badge>
                                READ IT IF YOU DARE FOR BOWSER IS NEVER TO FAR FROM
                                HIS BUDGETTING APP 😈
                            </Badge>
                        </h4>
                    </Card.Text>
                    <Button as={Link} to={"/transactions"} variant="success" size="lg">
                        ENTER BRAVE SOUL
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </Styles>
    </div>
  );
}

export default TransactionHomeDetails;
