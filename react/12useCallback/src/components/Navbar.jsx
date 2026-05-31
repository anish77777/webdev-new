import React, { memo, useRef } from 'react'


const Navbar = ({adjective,getAdjective}) => {
 
  console.log('🔁 Navbar rendered')
  return (
    <div>
      <strong>Navbar</strong>
      <div>
        This is the string passed as a prop to the Navbar component and it is not changing when the count state is changing 
        <br />
        {adjective}
        <br />
        <div>
          This is props adjective  which has cause re render of the Navbar component  eventhough using memo but after 
           useCallback 
           <br />
           {getAdjective()}
          <br />
          
        </div>
      </div>
    </div>
  )
}
// const MemoizedNavbar = React.memo(Navbar)
export default memo(Navbar)
// this means that the navbar will only re-render if the advective prop changes
// if we pass a callback function as a prop to a memoized component