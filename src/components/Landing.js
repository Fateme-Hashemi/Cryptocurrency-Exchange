import React from 'react';
import { getapi } from '../services/api';
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import Coin from './Coin';



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
                    coins.map(coin => <Coin 
                    key={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange={coin.price_change_24h}
                    marketcap={coin.market_cap}
                    image={coin.image}
                    
                    />)
                }
    
            </div> :

                <Loading />


            }



       





   </>
    );
};

export default Landing;