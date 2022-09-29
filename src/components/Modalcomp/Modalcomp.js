import React from 'react';
import './Modalcomp.css'

const Modalcomp = ({item}) => {
    return (
        <div className='modal-item'>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
        </div>
    );
};

export default Modalcomp;