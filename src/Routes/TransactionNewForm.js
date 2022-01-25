import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import bowserBank from "../assets/bowserBank.jpeg";

function TransactionNewForm() {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/transactions`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="New">
      <Card className="bg-dark text-white">
        <Card.Img src={bowserBank} alt="Card image" object-fit="cover" />
        <Card.ImgOverlay>
          <Card.Title>
            <h1>Add a new coin transaction</h1>
          </Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                  id="date"
                  type="date"
                  onChange={handleTextChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="itemName">Name</Form.Label>
                <Form.Control
                  id="itemName"
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Name of transaction"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="amount">Amount</Form.Label>
                <Form.Control
                  id="amount"
                  min="0.01"
                  step="0.01"
                  max="10000000"
                  type="number"
                  onChange={handleTextChange}
                  placeholder="0"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="from">From</Form.Label>
                <Form.Control
                  id="from"
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Location of transaction"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="category">Category</Form.Label>
                <Form.Control
                  id="category"
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Type of transaction"
                />
              </Form.Group>
              <br />
              <br />
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default TransactionNewForm;
