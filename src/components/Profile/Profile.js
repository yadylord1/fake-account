import React from 'react';
import './Profile.css';

const Profile = (props) => {
    console.log(props);
    const {cell,email,gender,name,picture,location}=props.person
    return (
        <div className='main'>
            <div className='img-holder'>
                <img src={picture.large} alt="" />
            </div>
            <div className='text'>
    <h2>{name.title} {name.first} {name.last}</h2>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Country:</strong><small> {location.country}</small></p>
                <p><strong>Email:</strong><small> {email}</small></p>
                <h2> {cell}</h2>

            </div>
            
        </div>
    );
};

export default Profile;