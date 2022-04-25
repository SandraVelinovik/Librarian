import React from "react"
import axios from "../Axios/CustomAxios";
import {Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import AllBooksComponentStyle from "../Books/AllBooksComponentStyle.css"
import {Link, withRouter} from "react-router-dom";
import CategoriesHolderComponent from "./CategoriesHolderComponent";

class CategoriesComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories : []
        }
    }

    getEnums = () => {
        return axios.get("/books/enums");
    }

    componentDidMount() {
        this.getEnums().then(data => {
            this.setState({categories: data.data})
        });
    }

    render() {
        if(this.state.categories === []){
            return(<div>Loading...</div>);
        } else {
            return(
                <div className="AllBooksComponent">
                    <div className={AllBooksComponentStyle.container}>
                        <h1 className={AllBooksComponentStyle.center}>List of all book categories</h1>
                        <div className={AllBooksComponentStyle.booksList}>
                            <CategoriesHolderComponent categories={this.state.categories} type={"card"}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CategoriesComponent;