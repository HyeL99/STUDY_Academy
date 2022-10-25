import React from 'react'
import Avata from './Avata'

// const Profile = (props) => {
const Profile = ({img,name,job,isNew}) => {
    return (
        <div className='profile'>
            <Avata img={img} isNew={isNew}></Avata>
            {/*<h2>{props.name}</h2>*/}
            <h2>{name}</h2>
            {/*<p>{props.job}</p>*/}
            <p>{job}</p>
        </div>
    )
}

Profile.defaultProps = {
    name : '...',
    job: '...',
}
export default Profile;