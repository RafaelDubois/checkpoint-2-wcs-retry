import React from 'react';

export default function Header(props){
    const {name} = props;
    return(
    <h1 className="uk-heading-line uk-text-center">Retry of {name}</h1>
    )
}