import React from 'react';
import { Person } from '../../../types';

function DisplayListOfNames(props:{
  people: Person[]
}): JSX.Element {
  console.log(props.people)
  return(
    <div>
      <br/>
      Hello from TypeScript!
      {props.people.map(function(d, idx){
         return (<li key={idx}>{d.name}</li>)
       })}
    </div>
  )
}

export default DisplayListOfNames;
