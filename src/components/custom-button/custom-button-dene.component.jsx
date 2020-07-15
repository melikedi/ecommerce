import React from 'react';
import './custom-button.styles.scss';


function CustomButtonDene({ children, ...otherprops }) {
    console.log(children);
    console.log(otherprops);
    return (
        <button className='custom-button' { ...otherprops }>
            { children }
        </button>
    )

}

export default CustomButtonDene;