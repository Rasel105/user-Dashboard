import React from 'react';

const ManageAllProduct = ({ item, index }) => {

    const { price, img, quantity, name } = item;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button class="btn btn-sm btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default ManageAllProduct;