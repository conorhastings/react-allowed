## React Allowed 

a react component that calls a function prop isAllowed to determine whether or not to render childre

### Install

`npm install react-allowed --save`

### Use

#### props
* `isAllowed` - a functiont that returns true or false. receives arguments via .apply from the isAllowedArgs props.
* `isAllowedArgs` - array of arguments to be passed to isAllowed via .apply
* `children` - a single element to be child to be shown if isAllowed returns true
* `notAllowedElement` - what to show if isAllowed() returns false, defaults to nothing. 


```js
import Allowed from 'react-allowed';
const Component = () => {
  return (
  	<Allowed  
  		isAllowed={num => num > 5}
  		isAllowedArgs={[7]}
  		notAllowedElement={<div>number too low</div>}
  	/>
  		<h1>wow what a big number</h1>
  	</Allowed>
}


### License

MIT