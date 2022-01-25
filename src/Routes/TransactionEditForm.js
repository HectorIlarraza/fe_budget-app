import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Nav } from "react-bootstrap";
import axios from "axios";

function TransactionEditForm() {
  const API_URL = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions`))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label className="text-white" htmlFor="date">
              Date
            </Form.Label>
            <Form.Control id="date" type="date" onChange={handleTextChange} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="text-white" htmlFor="itemName">
              Name
            </Form.Label>
            <Form.Control
              id="itemName"
              type="text"
              onChange={handleTextChange}
              placeholder="Name of transaction"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label className="text-white" htmlFor="amount">
              Amount
            </Form.Label>
            <Form.Control
              id="amount"
              type="number"
              onChange={handleTextChange}
              placeholder="0"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="text-white" htmlFor="from">
              From
            </Form.Label>
            <Form.Control
              id="from"
              type="text"
              onChange={handleTextChange}
              placeholder="Location of transaction"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="text-white" htmlFor="category">
              Category
            </Form.Label>
            <Form.Control
              id="category"
              type="text"
              onChange={handleTextChange}
              placeholder="Type of transaction"
            />
          </Form.Group>
        </Row>
        <br />
        <Button variant="secondary" size="lg" type="submit">
          Submit
        </Button>
          <Button variant="warning" size="lg" as={Link} to={`/transactions/${index}`}>
            Back
          </Button>
      </Form>
    </div>
  );
}

export default TransactionEditForm;
