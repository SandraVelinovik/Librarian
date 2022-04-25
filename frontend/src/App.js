import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import AllBooksComponent from "./Components/Books/AllBooksComponent";
import HomeComponent from "./Components/Home/HomeComponent";
import BooksEditComponent from "./Components/Books/BooksEditComponent";
import BooksAddComponent from "./Components/Books/BooksAddComponent";
import CategoriesComponent from "./Components/Categories/CategoriesComponent";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <NavBar/>
                <main>
                    <div className="container">
                        <Route
                            path="/"
                            exact>
                            {<Redirect to="/books"/>}
                        </Route>
                        <Route
                            path="/home"
                            exact
                            render={() => <HomeComponent/>}
                        />
                        <Route
                            path={"/books"}
                            exact
                            render={() => <AllBooksComponent/>}
                        />
                        <Route
                            path={"/add"}
                            exact
                            render={() => <BooksAddComponent/>}
                        />
                        <Route
                            path={"/edit"}
                            exact
                            render={() => <BooksEditComponent/>}
                        />
                        <Route
                            path={"/categories"}
                            exact
                            render={() => <CategoriesComponent/>}
                        />
                    </div>
                </main>

            </Router>
        );
    }
}

export default App;
