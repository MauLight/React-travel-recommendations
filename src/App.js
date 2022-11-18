import './App.css';
import React, { useEffect, useState } from 'react';

const URL_API = "https://rickandmortyapi.com/api";
export const URL_CHARACTERS = URL_API + "/character";
const getFetch = (url = "", options = {}) => {
  return fetch(url, options);
}

const style = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

//563492ad6f9170000100000167d81d8c57d0444188568902267487d1

const CardBody = ({ id, name, status, image }) => {
  return (
        <div className="card mb-5">
          <img src={image} className="card-img-top" alt="..." style={style} />
          <div className="card-body">
            <h3 className="card-text">{name}</h3>
            <p className="card-text">{status}</p>
          </div>
        </div>
  )
};

const Loading = () => {
  return (
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
};

export default function RecommendationCard() {

  const [trips, setTrips] = useState(null);

  useEffect(() => {

    getTrips(URL_CHARACTERS)

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
    <div className="container">
      <div className="row">
        {
          !!trips &&
            trips.results.length > 0 ?
            trips.results.map((trip) => {
              return (
                <div className="col-md-4 col-sm-4 col-12" key={trip.id}>
                  <CardBody {...trip} />
                </div>
              )
            }) :
            (
              <div className="col-md-12 text-center">
                <Loading />
              </div>
            )
        }
      </div>
    </div>
  );
};



