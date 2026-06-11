
import {useState,useEffect} from 'react';
import Loader from "./loader.jsx";
import Home from "./Home.jsx";

function App() {
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
        setLoading(false);
    },6000);

    return ()=> clearTimeout(timer);
    },[]);
return loading? <Loader/> :<Home/>;
}

export default App;