import React from 'react';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is your category detail </h4>
            <h6>Selected Category: {name} </h6>
        </div>
    );
};

export default CategoryDetail;