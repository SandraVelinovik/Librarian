import React, {useState} from "react"
import {Button, Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import AllBooksComponentStyle from "../Books/AllBooksComponentStyle.css";
import {withRouter, Link} from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import axios from "../Axios/CustomAxios";

const CategoryCard = (props) => {

    return(
        <div className={AllBooksComponentStyle.cardHolder}>
            <Card  border="info"  style={{ width: '267px'}} className={AllBooksComponentStyle.card}>
                <Card.Header>{props.category}</Card.Header>
            </Card>
        </div>

    );
}

export default withRouter(CategoryCard);