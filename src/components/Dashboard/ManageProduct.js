import React, { useEffect, useState } from 'react';
import ManageAllProduct from './ManageAllProduct';
const axios = require('axios');

const ManageProduct = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/items');
            setItems(data);
        })();
    }, []);

    console.log(items);

    return (
        <div class="overflow-x-auto border px-5 py-24 rounded-lg shadow-lg">
            <table class="table w-full sm:w-full">
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Image</th>
                        <th>P.Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                    {
                        items?.map((item, index) => <ManageAllProduct item={item} index={index}></ManageAllProduct>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;