import React from 'react';

const Coin = ({name, symbol, price, priceChange, marketcap,image}) => {
    return (
        <div>
           <img src={image} />
           <span>{name}</span>
           <span>{symbol.toUpperCase()}</span>
           <span>{price.toLocaleString()}</span>
           <span>{priceChange}</span>
           <span>{marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;