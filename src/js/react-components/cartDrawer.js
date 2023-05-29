import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import {formatMoney} from '@shopify/theme-currency';

class CartDrawer extends React.Component {
    constructor(props) {
        super(props);
        window.cartDrawer = this;
        this.getCartObject = this.getCartObject.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.updateCart = this.updateCart.bind(this);

        this.state = {
            total: window.theme.cart ? Number(window.theme.cart.total_price) : 0,
            cartItems: window.theme.cart ? window.theme.cart.items : [],
        };
    }

    async componentDidMount() {
        this.getCartObject();
        let productThumbnails = document.querySelectorAll('.product-slide a');
        productThumbnails.forEach(productThumb => {
            productThumb.addEventListener('click', function(e) {
                e.preventDefault();
                let thisId = productThumb.getAttribute('data-product-id');
                let prodData = { quantity: 1, id: thisId };
                window.cartDrawer.handleAddToCart(prodData);
            });
        });
    }

    componentWillUnmount() {
    }

    async componentDidUpdate(prevProps, prevState) {
        /**
         * On state change, we see if the cart items have changed. If so we update the
         * CartDrawer state value.
         *
         */
        if (this.state.cartItems.length !== prevState.cartItems.length) {
        }
    }

    getCartObject() {
        // console.log('get cart');
        axios({
            method: 'GET',
            url: `/cart.js`,
            responseType: 'JSON',
        })
        .then(response => {
            console.log('cart', JSON.parse(response.data));
            this.updateCart(JSON.parse(response.data));
        })
        .catch(err => window.console.log(err));
    }

    handleAddToCart(prodData) {
        let thisFunction = this;
        axios({
            method: 'POST',
            url: `/cart/add.js`,
            data: prodData,
            responseType: 'JSON',
        })
        .then(() => {
            axios({
                method: 'GET',
                url: `/cart.js`,
                responseType: 'JSON',
            })
            .then(response => {
                this.updateCart(JSON.parse(response.data));
                document.body.classList.add('cart-active');
                setTimeout(function() {
                    document.body.classList.remove('cart-active');
                }, 2000);
            })
            .catch(err => window.console.log(err));
        })
        .catch(err => window.console.log(err));
    }

    updateCart(cart) {
        this.setState({
            total: cart.total_price,
            cartItems: cart.items,
        });
    }

    render() {
        const {
            total,
            cartItems
        } = this.state;

        return (
            <React.Fragment>
            <div className="cart-drawer-inner-wrapper">
                <div className="close-cart-drawer"></div>
                <h3>Cart</h3>
                <div className="cart-items-wrapper">
                {cartItems.length ? (
                    cartItems.map((cartItem) => {
                        return (
                            <div className="cart-item" key={cartItem.variant_id}>
                                <div className="item-thumbnail">
                                    <img src={cartItem.image}/>
                                </div>
                                <div className="item-details">
                                    <p className="item-title">{cartItem.title}</p>
                                    <p className="item-quantity">{cartItem.quantity}</p>
                                    <p className="item-price">{formatMoney(cartItem.price, window.theme.moneyFormat)}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="cart-empty">
                        <p>Your Cart is empty.</p>
                    </div>
                )}
                    <div className="cart-total">
                        <p className="total-label">TOTAL</p>
                        <p className="total-price">{formatMoney(total, window.theme.moneyFormat)}</p>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

const root = createRoot(document.getElementById('cartDrawer'));
root.render(<CartDrawer />);

export default CartDrawer;