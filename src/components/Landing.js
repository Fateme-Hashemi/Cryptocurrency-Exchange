import React from 'react';
import { getapi } from '../services/api';
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import Coin from './Coin';
import styles from './Landing.module.css';
import Header from './Header';
const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchapi = async () => {
            const data = await getapi();
            setCoins(data);
        }
        fetchapi();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchcoins = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className={styles.body}>
            <input type='text' placeholder='Search ...' value={search} onChange={searchHandler} className={styles.input}  />

<Header />
{
    coins.length ?
        <div className={styles.coinContainer}>
            {
                searchcoins.map(coin => (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        priceChange={coin.price_change_24h}
                        marketcap={coin.market_cap}
                        image={coin.image}
                    />
                ))
            }
        </div> :
        <Loading />
}
            </div>
        </>
    );
};

export default Landing;