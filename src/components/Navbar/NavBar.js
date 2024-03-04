import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  InputGroup,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddMovies from "../AddMovie/AddMovies";
//import { useState } from "react";

const NavBar = ({
  setRatingChange,
  setSearchInput,
  ratingChange,
  newMovie,
  setNewMovie,
  handleSave,
  handleClose,
  setShow,
  show,
}) => {
  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark align-items-baseline" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="light" onClick={handleShow}>
              Add New Movie
            </Button>{" "}
          </Nav>
        </Container>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={handleChange}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <ReactStars
            count={5}
            value={ratingChange}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </InputGroup>
      </Navbar>
      <AddMovies
        show={show}
        handleClose={handleClose}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
      />
    </>
  );
};

export default NavBar;
