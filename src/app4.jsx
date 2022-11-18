import React, { useState } from 'react';
import { activities } from './activitiesArr2';
import { User } from './user';


const RecommendationCard = () => {

    const style = {
        width: "18rem",
        height: '410px'
    };

    const img_style = {
        width: 'auto',
        height: '200px',
        objectFit: 'cover'
    }

    //IMPORTED USER:

    const user = User;
    console.log(user.activities);
    console.log(user.city); // If user.city == city_id in below arrays it returns recommendations.

    //IMPORTED ACTIVITY ARRAYS:

    const [activity, setActivity] = useState(activities);

    //FILTER FUNCTIONS:

    /*
    const filterFunction = (elem) => {
        if (elem.activity == value) {
            return elem;
        }
        else {
            console.log('no matches!')
        }
    };
    
    const filter1 = ageArr.filter(filterFunction);
    const filter2 = genderArr.filter(filterFunction);
    const filter3 = activityArr.filter(filterFunction);
    const filter4 = childrenArr.filter(filterFunction);
    const filter5 = travelArr.filter(filterFunction);
    const filter6 = stayArr.filter(filterFunction);
    const filter7 = budgetArr.filter(filterFunction);
    const filter8 = arr.filter(filterFunction);
    
    */

    const handleActType = (e) => {
        //console.log(e.target.value);
        const value = e.target.value;

        const filterFunction = (elem) => {
            if (elem.activity == value) {
                return elem;
            }
            else {
                console.log('no matches!')
            }
        };

        const filter = activities.filter(filterFunction);

        if (value === 'trekking') {
            console.log('trekking');
            setActivity(filter);
            console.log(filter.length);

        }
        else if (value === 'restaurants') {
            console.log('restaurants');
            setActivity(filter);
            console.log(filter.length);

        }
        else if (value === 'museums') {
            console.log('museums');
            setActivity(filter);
            console.log(filter.length);

        }
        else if (value === 'disco') {
            console.log('disco');
            setActivity(filter);
            console.log(filter.length);

        }
        else if (value === 'malls') {
            console.log('malls');
            setActivity(filter);
            console.log(activity.length);
            console.log(filter.length);

        }
    };

    return (
        <div className='container justify-content-center'>
            <h1 className='activities_title'>Activities</h1>
            <div>
                <button className="activity_btn btn mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Filters
                </button>
            </div>
            <div className='row'>
                {
                    !!activity && activity.length > 0 && activity.map((elem, i) => {
                        return (
                            <div className='col-4 mx-auto mb-5' key={i} style={style}>
                                <div className="activity_card card border-0 justify-content-center" style={style}>
                                    <img src={elem.img_url} className="card-img-top" alt="..." style={img_style} />
                                    <div className="card-body">
                                        <h6>{elem.activity}</h6>
                                        <h5 className="activity_title card-title">{elem.name}</h5>

                                        <p className="card-text">{elem.description}</p>
                                        <a href="https://rr.noordstar.me/test-109ddae8" className="activity_btn btn w-100">Details</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="col">
                        <p>Activity Type</p>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' key={1} type='radio' onChange={handleActType} name='act-type' id='inlineRadio1' value={'trekking'} />
                            <label className='form-check-label' htmlFor='inlineRadio1'>Trekking</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' key={2} type='radio' onChange={handleActType} name='act-type' id='inlineRadio2' value={'restaurants'} />
                            <label className='form-check-label' htmlFor='inlineRadio2'>Restaurant</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' key={3} type='radio' onChange={handleActType} name='act-type' id='inlineRadio3' value={'museums'} />
                            <label className='form-check-label' htmlFor='inlineRadio3'>Museum</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' key={4} type='radio' onChange={handleActType} name='act-type' id='inlineRadio4' value={'disco'} />
                            <label className='form-check-label' htmlFor='inlineRadio3'>Disco</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' key={5} type='radio' onChange={handleActType} name='act-type' id='inlineRadio5' value={'malls'} />
                            <label className='form-check-label' htmlFor='inlineRadio3'>Mall</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard;