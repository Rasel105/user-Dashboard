import React from 'react';

const ManageProduct = () => {
    return (
        <div class="overflow-x-auto border px-5 py-24 rounded-lg shadow-lg">
            <table class="table w-full">
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
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td><button class="btn btn-sm btn-error text-white">Small</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;