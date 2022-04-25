import React from "react"
import axios from "../Axios/CustomAxios";
import {Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import BookCard from "./BookCard"
import AllBooksComponentStyle from "./AllBooksComponentStyle.css"
import BooksHolderComponent from "./BooksHolderComponent";
import {Link, withRouter} from "react-router-dom";

class AllBooksComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books : []
        }
    }

    getAllBooks = () => {
        return axios.get("/books");
    }

    addWindow = () => {
        return window.location = "/add";
    }

    componentDidMount() {
        this.getAllBooks().then(data => {
            this.setState({books: data.data})
        });
    }



    render() {
        if(this.state.books === []){
            return(<div>Loading...</div>);
        } else {
            return(
                <div className="AllBooksComponent">
                    <div className={AllBooksComponentStyle.container}>
                        <h1 className={AllBooksComponentStyle.center}>List of all books in the library</h1>
                        <br/>
                            <button className="btn btn-outline-success btn-block" onClick={this.addWindow}>Add new book</button>
                        <br/>
                        <div className={AllBooksComponentStyle.booksList}>
                            <BooksHolderComponent books={this.state.books} type={"card"}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default AllBooksComponent;