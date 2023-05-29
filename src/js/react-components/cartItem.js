import React, {StrictMode} from 'react';
import axios from 'axios';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const cartItem = this.props;

        return (
            <div className="cart-item">
                <div className="item-thumbnail">
                    <img src={cartItem.image}/>
                </div>
                <div className="item-details">
                    <p className="item-title">{cartItem.title}</p>
                    <p className="item-price">{formatMoney(cartItem.price, window.theme.moneyFormat)}</p>
                </div>
            </div>
        );
    }
}

export default CartItem;