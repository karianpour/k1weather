import React from 'react';


export const HomeIcon: React.FC<any> = ({...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  )
}
