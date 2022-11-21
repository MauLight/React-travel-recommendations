import React, { useEffect, useState } from 'react';
import { savedActivities } from './activitiesArr';
import { activities } from './activitiesArr2';
import { User } from './user';


const RecommendationCard = () => {

    //CCS STYLES

    const style = {
        width: "18rem",
        height: '410px'
    };

    const img_style = {
        width: 'auto',
        height: '200px',
        objectFit: 'cover'
    }

    const rounded = {
        borderRadius: '100%',
        objectFit: 'cover',
        width: '100px',
        height: 'auto',
        objectPosition: 'top'
    }

    //ACTIVITY STATE:

    const [activity, setActivity] = useState(activities);
    const [savedActivity, setSavedActivity] = useState([]);
    const [saved, setSaved] = useState('');
    const [select, setSelect] = useState('Select');

    //USER FILTER FUNCTION

    const userFilter = (elem) => {
        if (elem.city_id === User.city) {
            return elem;
        }
    };

    const userActivity = activity.filter(userFilter);
    const userAllActivity = activities.filter(userFilter);

    //ACTIVITIES FILTER FUNCTION

    const handleActType = (e) => {

        const value = e.target.value;

        const filterFunction = (elem) => {
            if (elem.activity === value) {
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
        else if (value === 'all') {
            console.log('all');
            setActivity(userAllActivity);
            console.log(activity.length);
            console.log(userAllActivity.length);

        }
    };

    //SAVE ACTIVITY FUNCTION

    const handleSelected = (id) => {
        //console.log('Hey!');
        //console.log(savedActivities);
        //console.log(id);
        const chosenActivity = activities.filter(elem => elem.id === id);
        //console.log(chosenActivity);
        savedActivities.push(chosenActivity[0]);
        console.log(savedActivities);
    }

    const showSelected = () => {
        setActivity(savedActivities);
    }

    const handleSubmit = () => {
        console.log('saved!');
        setSaved('saved!')
        setActivity(userAllActivity);
    }


    return (
        <div className='container justify-content-center'>
            <h1 className='activities_title'>Activities</h1>
            <div>
                <button className="filters_btn btn mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Filters
                </button>
            </div>
            <div className='row mx-auto'>
                {
                    !!userActivity && userActivity.length > 0 && userActivity.map((elem, i) => {
                        return (
                            <div className='col-4 mb-5 mx-3' key={i} style={style}>
                                <div className="activity_card card border-0 justify-content-center" style={style}>

                                    <img src={elem.img_url} className="card-img-top" alt="..." style={img_style} />

                                    <div className="card-body">
                                        <div className='w-100'>
                                            <h6 className='float-end'>{elem.activity}</h6>
                                            <h6>{elem.city}, {elem.country}</h6>
                                        </div>

                                        <h5 className="activity_title card-title">{elem.name}</h5>
                                        <p className="card-text">{elem.description}</p>
                                        <a href="https://rr.noordstar.me/test-109ddae8" className="activity_btn btn w-100">Details</a>
                                        <button className="activity_btn btn w-100" onClick={() => handleSelected(elem.id)}>{select}</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="img-card card border-0 my-3 justify-content-center">

                    <img src={User.user_img} className="p-0 mx-auto" alt="..." style={rounded} />

                </div>
                <div className='description-card text-center'>
                    <a className="mx-auto" href="https://rr.noordstar.me/test-109ddae8">
                        <h3>{User.firstname} {User.lastname}</h3>
                    </a>
                    <p>From {User.countryofresidence}</p>
                </div>
                <div className="offcanvas-body">
                    <div className="col mb-3">
                        <h6>Activity Type</h6>
                        <div className='form-check'>
                            <input className='form-check-input' key={1} type='radio' onChange={handleActType} name='act-type' id='inlineRadio1' value={'trekking'} />
                            <label className='form-check-label' htmlFor='inlineRadio1'>Trekking</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' key={2} type='radio' onChange={handleActType} name='act-type' id='inlineRadio2' value={'restaurants'} />
                            <label className='form-check-label' htmlFor='inlineRadio2'>Restaurant</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' key={3} type='radio' onChange={handleActType} name='act-type' id='inlineRadio3' value={'museums'} />
                            <label className='form-check-label' htmlFor='inlineRadio3'>Museum</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' key={4} type='radio' onChange={handleActType} name='act-type' id='inlineRadio4' value={'disco'} />
                            <label className='form-check-label' htmlFor='inlineRadio4'>Disco</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' key={5} type='radio' onChange={handleActType} name='act-type' id='inlineRadio5' value={'malls'} />
                            <label className='form-check-label' htmlFor='inlineRadio5'>Mall</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' key={5} type='radio' onChange={handleActType} name='act-type' id='inlineRadio6' value={'all'} />
                            <label className='form-check-label' htmlFor='inlineRadio6'>All</label>
                        </div>

                    </div>
                    <div className='mx-auto d-flex justify-content-center'>
                        <button className="activity_btn btn w-50" onClick={showSelected}>Show selected items</button>
                    </div>
                    <div className='mx-auto d-flex justify-content-center'>
                        <button className="save_btn btn w-50" onClick={handleSubmit}>Save selected items</button>

                    </div>
                    <div className='mx-auto d-flex justify-content-center'>
                        <p>{saved}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecommendationCard;

