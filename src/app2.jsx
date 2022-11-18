import './App.css';
import React, { useEffect, useState } from 'react';

const URL_API = "https://random-data-api.com/api/v2/users";
export const URL_CHARACTERS = URL_API + "/character";
const image = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1";

const getFetch = (url = "", options = {}) => {
    return fetch(url, options);
}

const style = {
    width: '80px',
    height: 'auto',
    objectFit: 'cover',
    padding: '0% !important'

}

const rounded = {
    borderRadius: '100%',
    objectFit: 'cover',
    width: '300px',
    height: '300px',
    objectPosition: 'top'
}

//563492ad6f9170000100000167d81d8c57d0444188568902267487d1

const CardBody = ({ first_name, last_name, email, avatar }) => {
    return (
        <div className='row justify-content-center px-3'>
            <img src={avatar} className="card-img-top py-3" alt="..." style={rounded} />
            <div className="card mb-5 p-0">
                <div className="card-body d-flex p-0">
                    <img src={avatar} className="rounded-start" alt="..." style={style} />
                    <div className='w-100 text-center'>
                        <h3 className="card-text">{first_name + " " + last_name}</h3>
                        <p className="card-text">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Loading = () => {
    return (
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
};

export default function RecommendationCard() {

    const [trips, setTrips] = useState([]);
    const arr = []

    useEffect(() => {

        getTrips(URL_API);

    }, [])

    const getTrips = (url, options = {
        method: 'GET', // GET, POST, PUT, DELETE
        headers: {
            'Content-Type': 'application/json', // MIME
        }
    }) => {
        getFetch(url, options)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setTrips(response);
            })
    }

    return (
        <div className="container w-25">
            <h1 className='mb-5'>USERNAME'S MATCHES</h1>
            <div className="row">

                <div className='row justify-content-center px-3'>
                    <img src={image} className="card-img-top py-3" alt="..." style={rounded} />
                    <div className="card mb-5 p-0">
                        <div className="card-body d-flex p-0">
                            <img src={image} className="rounded-start" alt="..." style={style} />
                            <div className='w-100 text-center'>
                                <h3 className="card-text">{trips.first_name + " " + trips.last_name}</h3>
                                <p className="card-text">{trips.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



