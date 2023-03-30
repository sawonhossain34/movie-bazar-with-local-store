import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
 const [time,setTime] = useState(watchTime);
    useEffect(() => {
        const getWatchTimeFromStorage = JSON.parse(localStorage.getItem("watchTime"));
        setTime(getWatchTimeFromStorage);
    }  ,[watchTime]);


    return (
        <div className='text-center position-sticky top-0'>
           <h1>My Cart</h1>
           <div className='mt-5 text-center'>
            <p>Total Watch Time</p>
            <input type="text" value={time} disabled/>
           </div>
           <h5 className='mt-5'>Add Breake Time</h5>
           <button className='w-25 btn-circle m-1 btn btn-info'>15</button>
           <button className='w-25 btn-circle m-1 btn bg-warning btn-info'>20</button>
           <button className='w-25 btn-circle m-1 btn bg-danger btn-info'>20</button>
           <input type="text" value={0} disabled/>
           <button className=' btn-circle mt-5 btn bg-info w-100'>20</button>


        </div>
    );
};

export default SideCart;