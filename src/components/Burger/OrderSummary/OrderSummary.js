import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log('OrderSummery WillUdate');
    }
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igKey => {
            return(
                <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li> );
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price}</strong></p>
        <p>Continue to checkout? </p>
        <Button btnType="Danger" clicked={this.props.orderCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.orderContinued}>CONTINUE</Button>
        </Aux>
     );
    }
}

export default OrderSummary;