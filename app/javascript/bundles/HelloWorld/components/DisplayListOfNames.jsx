import PropTypes from 'prop-types';
import React, { useState } from 'react';



const DisplayListOfNames = (props) => {
  const [names, setNames] = useState(props.names);

  return (
    <div style={{borderStyle:"dotted"}}>
      <ul>
        {names.map(function(d, idx){
         return (<li key={idx}>{d}</li>)
       })}
      </ul>
    </div>
  );
};

DisplayListOfNames.propTypes = {
  names: PropTypes.array.isRequired, // this is passed from the Rails view
};

export default DisplayListOfNames;
