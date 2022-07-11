import { useState } from 'react';
import Seo from '../components/Seo'

function Home(){
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <Seo title="Home" />
            <h1>Hello! {counter}</h1>
            <button onClick={()=>setCounter((prev)=>prev+1)}>+</button>
        </div>
    );
}

export default Home;