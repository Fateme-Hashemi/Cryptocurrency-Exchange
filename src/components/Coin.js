import React from 'react';
import styles from "./Coin.module.css";

const Coin = ({ name, symbol, price, priceChange, marketcap, image }) => {
    const formattedPriceChange = priceChange !== null ? priceChange.toFixed(2) : "N/A";

    return (
        <div className={styles.container}>
            <img className={styles.img} src={image} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={priceChange ? styles.greenPriceChange : styles.redPriceChange}>{formattedPriceChange}</span>
            <span className={styles.marketcap}>$ {marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
