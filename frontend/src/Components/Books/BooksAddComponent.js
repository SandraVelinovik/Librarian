import React, {useEffect, useState} from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "../Axios/CustomAxios";

const BooksAddComponent = () => {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState(1);
    const [category, setCategory] = useState("NOVEL");
    const [availableCopies, setAvailableCopies] = useState(null);
    const [allAuthors, setAllAuthors] = useState([]);
    const [enums, setEnums] = useState([]);

    const getAuthors = () => {
        axios.get("/authors")
            .then((data) => setAllAuthors(data.data))
    }

    const getEnums = () => {
        axios.get("/books/enums")
            .then((data) => setEnums(data.data))
    }

    useEffect( () => {
        getAuthors();
    },[])

    useEffect( () => {
        getEnums();
    },[])


    const add = (e) => {
        e.preventDefault();
        console.log(author);
        axios.post("/books/add", {
            "name": name,
            "author": author,
            "category": category,
            "availableCopies": availableCopies
        }).then(response => {
            window.location = "/books";
        })
    }

    return (<div>
        <div>
            <div className="row mt-5">
                <div className="col-md-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Book name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select name="author" className="form-control" onChange={(e) => setAuthor(e.target.value)}>
                                {allAuthors.map((term) => {
                                   return <option value={term.id}>{term.name + " " + term.surname}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                {enums.map((term) => {
                                    return <option value={term}>{term}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Available copies</label>
                            <input type="text"
                                   className="form-control"
                                   id="availableCopies"
                                   name="availableCopies"
                                   onChange={(e) => setAvailableCopies(e.target.value)}
                            />
                        </div>

                        <button id="submit" type="submit" className="btn btn-outline-success" onClick={add}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}
export default withRouter(BooksAddComponent);