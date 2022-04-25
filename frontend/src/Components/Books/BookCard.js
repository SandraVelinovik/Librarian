import React, {useState} from "react"
import {Button, Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import AllBooksComponentStyle from "./AllBooksComponentStyle.css";
import {withRouter, Link} from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import axios from "../Axios/CustomAxios";

const BookCard = (props) => {

    const [id, setId] = useState(props.book.id);
    const [name, setName] = useState(props.book.name);
    const [author, setAuthor] = useState(props.book.author.name);
    const [category, setCategory] = useState(props.book.category);
    const [availableCopies, setAvailableCopies] = useState(props.book.availableCopies);

    const deleteFunction = () => {
        axios.delete(`/books/delete/${id}`)
            .then(response => {
                window.location = "/books";
            })
    }

    const takenFunction = () => {
        axios.get(`/books/taken/${id}`)
            .then(response => {
                window.location = "/books";
            })
    }

    return(
        <div className={AllBooksComponentStyle.cardHolder}>
            <Card  border="info" style={{ width: '267px'}} className={AllBooksComponentStyle.card}>
                <Card.Header>Book ID: {props.book.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.book.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Author: {props.book.author.name + " " + props.book.author.surname}</ListGroup.Item>
                        <ListGroup.Item>Category: {props.book.category}</ListGroup.Item>
                        <ListGroup.Item>Available copies: {props.book.availableCopies}</ListGroup.Item>
                    </ListGroup>
                    <div className={AllBooksComponentStyle.buttons}>
                        <Link to={{
                            pathname: "/edit",
                            state: {
                                book : props.book
                            }
                        }}>
                            <button type="button" className="btn btn-outline-secondary">Edit</button>
                        </Link>
                        <br/><br/>
                        <button type="button" className="btn btn-outline-danger" onClick={deleteFunction}>Delete</button>
                        <br/><br/>
                        <button type="button" className="btn btn-outline-info" onClick={takenFunction}>Mark as taken</button>
                    </div>
                </Card.Body>
            </Card>
            <span>&nbsp;</span>
        </div>

    );
}

export default withRouter(BookCard);