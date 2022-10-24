import React from 'react'

const Avata = ({img, isNew}) => {
    return (
        <div>
            <div className="photo">
                {/*<img src={props.img} alt="avata" />*/}
                <img src={img} alt="avata" />
            </div>
            {/*isNew ? <span className="new">NEW</span> :null*/}
            {isNew && <span className="new">NEW</span>}
        </div>
    )
}

Avata.defaultProps = {
    img : 'https://w.namu.la/s/dc3751ffeceb57dce747772687e305ffbe76136a2f1efbb44ddbd71afb6511fcae43e26da7b82076e980ad5e10b2d8414a63f3e708dfe81adf7fffbd04f8bd056d57abe854da80711db24e73c4548c61dc54586e2a5ad501872658882d455962',
    isNew : false,
}

export default Avata