import React from 'react';


export const WindIcon: React.FC<any> = ({...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
    </svg>
  )
}
