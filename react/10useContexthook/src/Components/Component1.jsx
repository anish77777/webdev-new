import React, { useContext } from 'react';
import { CounterContext, NameContext } from '../context/context';
// why ../? cause context.js is in parent folder of Components folder and components folder is in current folder
// cant we just ./context/context ? yes we can so why ../ .. it just an example 
// and also if components is in parent folder then we need to use ../ ../ to reach the file so just .. means parent folder no matter how deep file  nested it is 
// .. just for folder navigation not for file navigation 
const Component1 = () => {
    const countobj = useContext(CounterContext);
    const name = useContext(NameContext);
    return (
        <div>
        <div>Component1 and count of app.jsx is {countobj.count} and name is {name}</div>
        <button onClick={() => countobj.setCount(countobj.count + 1)}>Increment</button>
        </div>
    );
};

export default Component1;