import React from 'react';
import Option from'./Option';

function Feature(props) {
const {feature, idx} = props
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
        return <Option item={item}
        {...props}
        />
    });

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
}

export default Feature;