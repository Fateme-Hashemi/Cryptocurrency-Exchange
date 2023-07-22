import React from 'react';
import { getapi } from '../services/api';
import { useEffect, useState } from 'react';



const Landing = () => {

 useEffect(()=> {
    const fetchapi =async ()=> {
        const data = await getapi();
        console.log(data);
    }

    fetchapi();
 }, [])



    return (
        <div>
          
            Landing ...
        </div>
    );
};

export default Landing;