import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Card, Carousel } from "react-bootstrap";
import axios from "axios";
import bowserImage from "../assets/bowserImage.jpeg";
import bowserDoom from "../assets/bowserDoom.jpeg";
import marioGreg from "../assets/marioGreg.jpeg";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(transaction.amount);

  return (
    <Card className="details">
      <Card.Header as="h4">From: {transaction.from}</Card.Header>
      <Card.Body>
        <Card.Title>Transaction: {transaction.itemName}</Card.Title>
        <Card.Text>Amount: {currencyFormat}</Card.Text>
        <Card.Text>Transaction date: {transaction.date}</Card.Text>
        <Card.Text>Category: {transaction.category}</Card.Text>
      </Card.Body>
      <div className="showNavigation">
        <Link to={`/transactions`}>
          <Button variant="primary">Back</Button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <Button variant="secondary">Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bowserImage} alt="First slide" />
          <Carousel.Caption>
            <h3>YERRRRR</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bowserDoom} alt="Second slide" />
          <Carousel.Caption>
            <h3>GRRRRR!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={marioGreg} alt="Third slide" />
          <Carousel.Caption>
            <h3>Gregalations 3:15</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Card>
  );
}

export default TransactionDetails;
