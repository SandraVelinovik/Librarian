import React from "react"
import BookCard from "./BookCard";
import ReactPaginate from "react-paginate"

class BooksHolderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 4
        }

    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getProductsPage(offset, nextPageOffset);

        return(
            <div>
                <div className="btn-toolbar" role="toolbar">
                    {books}
                </div>
            <ReactPaginate previousLabel={"back"}
                       nextLabel={"next"}
                       breakLabel={<a href="/#">...</a>}
                       breakClassName={"break-me"}
                       pageClassName={"ml-1"}
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination m-4 justify-content-center"}
                       activeClassName={"active"}/>
            </div>
        );
    }

        handlePageClick = (data) => {
            let selected = data.selected;
            this.setState({
                page: selected
            })
        }

        getProductsPage = (offset, nextPageOffset) => {
            return this.props.books.map((term, index) => {
                return (
                    <BookCard book={term}/>
                );
            }).filter((book, index) => {
                return index >= offset && index < nextPageOffset;
            })
        }
}

export default BooksHolderComponent;