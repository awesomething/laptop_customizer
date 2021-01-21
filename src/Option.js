import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function Option(props){
    const {feature, item} = props
    const itemHash = slugify(JSON.stringify(item));
    return (
        <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
    );
}

export default Option;