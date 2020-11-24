import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //Could be a functional Component
    componentDidUpdate(){
        console.log('[Order Summary] WillUpdate');
    }
    render(){
        const ingredientSummary =Object.keys(this.props.ingredients)
        .map(igKey =>{
            return(
                <li key={igKey}>
                    <span>{igKey} : {this.props.ingredients[igKey]}</span>
                </li>
            );
        });

        return(
            <Aux>
            <h2>Order Summary</h2>
            <h5>The Ingredients you have Ordered!</h5>
            <ul>
                {ingredientSummary}
            </ul>

            <h5>Total Price : {this.props.price.toFixed(2)}</h5>
            <h5> Continue to Checkout?</h5>
            <Button btnType="Danger" clicked ={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked ={this.props.purchaseContinued}>CONTINUE</Button>

        </Aux>
        );
    }
} 
export default OrderSummary;