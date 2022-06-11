import React from 'react';

const ManageAllProduct = ({ item }) => {

    const { price, img, quantity, name } = item;

    return (
        <tr>
            <th>3</th>
            <td>{name}</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>Red</td>
        </tr>
    );
};

export default ManageAllProduct;