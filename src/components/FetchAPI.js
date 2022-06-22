import React, {useEffect, useState} from 'react';
import './App.css';
import arrow from '../images/arrow.png'

function FetchAPI() {
    const [data, setData] = useState([]);

    const apiGet = () => {
    fetch('https://fakestoreapi.com/products?sort=asc')
    .then(res=>res.json())
    .then(json=> {
        console.log(json);
        setData(json)
    });
    }

    useEffect(() => {
        apiGet();
    },[])

    return (
        <div className="row">
        {data.slice(0,6).map(item =>
            <div key={item.id} className="col-md-4 p-2">
                <div className="product-list">
                    <div className="product-list-img">
                        <img src={item.image} className="w-100" alt={item.title}/>
                    </div>
                    <div className="product-list-detail">
                        <p>{item.category}</p>
                        <h4>{item.title.split(' ').slice(0,2).join(' ')}</h4>
                        <a href="product-detail.html"><img src={arrow}/></a>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

export default FetchAPI;
