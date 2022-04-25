import React from "react"
import CategoryCard from "./CategoryCard";

const CategoriesHolderComponent = (props) => {
    return(
        <div className="btn-toolbar" role="toolbar">
            {
                props.categories.map((term) => {
                    return (
                        <CategoryCard category={term}/>
                    );
                })
            }

        </div>
    );
}

export default CategoriesHolderComponent;