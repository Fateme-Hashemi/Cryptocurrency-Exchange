import React from 'react';
import styles from "./Header.module.css";
const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    Name
                </li>
                <li>
                  Price
                </li>
                <li>
                  PriceChange
                </li>
                <li>
                   MarketCap
                </li>
              
            </ul>
        </div>
    );
};

export default Header;