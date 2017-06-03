import React, { Children, PropTypes } from 'react';

const DefaultNotAllowedComponent = () => null; 

export default function Allowed({ 
  isAllowed = () => true,
  isAllowedArgs = [],
  notAllowedElement = <DefaultNotAllowedComponent />,
  children
})  {
  return isAllowed.apply(this, isAllowedArgs) ? Children.only(children) : notAllowedElement; 
}

