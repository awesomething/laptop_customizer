import React from 'react';
import Item from './Item';
import Total from './Total'


function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
      return <Item feature={feature} idx={idx}
      {...props}
      />
      });
  
    return <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total
        {...props}
        />
    </section>
}

export default Cart;