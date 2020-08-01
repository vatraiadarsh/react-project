import React from 'react';

const Person = (props) => {
        return ( 
            <div>
                <p onClick={props.click}> I 'm {props.name} and I am {props.age} years old </p>
                <p><b>{props.children}</b></p>
            </div>)
        }
        export default Person;