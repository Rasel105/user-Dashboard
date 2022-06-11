import React from 'react';
import { toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';

const ManageAllProduct = ({ item, index, setReload }) => {

    const { _id, price, img, quantity, name } = item;

    const hanldeDelete = (id) => {
        const deleteConfirm = window.confirm("Are you sure want to delete the item?");
        if (deleteConfirm) {
            fetch(`https://evening-island-26002.herokuapp.com/item/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res => {
                    setReload(true);
                    toast.success("Item Deleted");
                })
        }
    }

    return (
        <Fade left>
            <tr>
                <th>{index + 1}</th>
                <td><div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button onClick={() => hanldeDelete(_id)} className="btn btn-sm btn-error text-white">Delete</button></td>
            </tr>
        </Fade>
    );
};

export default ManageAllProduct;