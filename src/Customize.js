import React from 'react';
import Feature from './Feature';


//...props is a spread operator
function Customize(props){
    const features = Object.keys(props.features).map((feature, idx) => {
        return <Feature idx={idx} feature={feature} 
        {...props}
        /> 
      });
return <>
    <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
    </form>
</>
}

export default Customize;