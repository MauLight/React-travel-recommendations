//import "./App.css";
import React, { useEffect, useState } from "react";
import { Trip } from "./matrix";


const URL_API = "https://3001-kpaezastudi-finalprojec-i6y7tjepxn2.ws-us73.gitpod.io/trip";

console.log(Trip[0][0][0][0]);


const getFetch = (url = "", options = {}) => {
  return fetch(url, options);
};

const style = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const CardBody = ({ url_img, name, description }) => {
  return (
    <div className="card mb-5">
      <img src={url_img} className="card-img-top" alt="..." style={style} />
      <div className="card-body">
        <h3 className="card-text">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default function RecommendationCard() {
  const [trips, setTrips] = useState(null);
  //const [imgs, setImgs] = useState(null);

  useEffect(() => {
    getTrips(URL_API);
  }, []);

  const getTrips = (
    url,
    options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ) => {
    getFetch(url, options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setTrips(response);
      });
  };


  return (
    <div className="container">
      <h1 className="mb-5">
        Beautiful place! we'll give you some recommendations for your trip:
      </h1>
      <div className="row">
        {!!trips && trips.length > 0 ? (
          trips.map((trip) => {
            return (
              <div className="col-md-4 col-sm-4 col-12" key={trip.id}>
                <CardBody {...trip} />
              </div>
            );
          })
        ) : (
          <div className="col-md-12 text-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}


//   return (
//     <div className="container">
//       <h1 className="mb-5">
//         Beautiful place! we'll give you some recommendations for your trip:
//       </h1>
//       <div className="row">
//         {
//           !!Trip && Trip.length > 0 ? (
//             Trip.map((act, i) => {
//               return (
//                 <div className="col-md-4 col-sm-4 col-12" key={act[i]}>
//                   <img src={act[0][0][i]} style={style} />
//                 </div>
//               );
//             })
//           ) : (
//             <div className="col-md-12 text-center">
//               <Loading />
//             </div>
//           )
//         }
//       </div>
//     </div>
//   )

// }
