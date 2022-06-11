import React, { useEffect, useState } from 'react';
import Item from './Item';
const axios = require('axios');

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://evening-island-26002.herokuapp.com/items');
            setItems(data);
        })();
    }, []);

    return (
        <div className='container mx-auto px-4 pt-32'>
            <h1 className='text-center text-3xl font-bold my-5 uppercase'>Latest All Products</h1>

            {items.length > 0 &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>}
        </div>
    );

};

export default Home;