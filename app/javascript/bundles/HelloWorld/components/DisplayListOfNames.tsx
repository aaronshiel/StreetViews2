import React from 'react';

function DisplayListOfNames(props:{
  names: string[]
}): JSX.Element {
  return(
    <div>
      <br/>
      Hello from TypeScript!
      {props.names.map(function(d, idx){
         return (<li key={idx}>{d}</li>)
       })}
    </div>
  )
}

export default DisplayListOfNames;
