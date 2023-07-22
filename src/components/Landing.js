import React from 'react';
import { getapi } from '../services/api';
import { useEffect, useState } from 'react';
import Loading from "./Loading";

const Landing = () => {

    const [coins, setCoins] = useState([]);



 useEffect(()=> {
    const fetchapi =async ()=> {
        const data = await getapi();
        setCoins(data);
    }

    fetchapi();
 }, [])



    return (
   <>

        
        <input type='text' placeholder='Search ...' />

      

            {
                coins.length ?
                <div>
                {
                    coins.map(coin => <p key={coin.id}>{coin.name}</p>)
                }
    
            </div> :

                <Loading />


            }



       





   </>
    );
};

export default Landing;