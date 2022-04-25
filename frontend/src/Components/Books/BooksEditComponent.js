import React, {useEffect, useState} from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "../Axios/CustomAxios";

const BooksEditComponent = (props) => {

    const [id, setId] = useState(props.location.state.book.id);
    const [name, setName] = useState(props.location.state.book.name);
    const [author, setAuthor] = useState(props.location.state.book.author.id);
    const [category, setCategory] = useState(props.location.state.book.category);
    const [availableCopies, setAvailableCopies] = useState(props.location.state.book.availableCopies);
    const [allAuthors, setAllAuthors] = useState([]);
    const [enums, setEnums] = useState([]);

    const onFormSubmit = () => {

    }

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


    const edit = (e) => {
        e.preventDefault()
        axios.put(`/books/edit/${id}`, {
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
                                   placeholder={name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select name="author" className="form-control" onChange={(e) => setAuthor(e.target.value)}>
                                {allAuthors.map((term) => {
                                    if(author !== undefined &&
                                        author === term.id)
                                        return <option selected={author} value={term.id}>{term.name + " " + term.surname}</option>
                                    else return <option value={term.id}>{term.name + " " + term.surname}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                {enums.map((term) => {
                                    if(category !== undefined &&
                                        category === term)
                                        return <option selected={category} value={term}>{term}</option>
                                    else return <option value={term}>{term}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Available copies</label>
                            <input type="text"
                                   className="form-control"
                                   id="availableCopies"
                                   name="availableCopies"
                                   placeholder={availableCopies}
                                   onChange={(e) => setAvailableCopies(e.target.value)}
                            />
                        </div>

                        <button id="submit" type="submit" className="btn btn-primary" onClick={edit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}
export default withRouter(BooksEditComponent);