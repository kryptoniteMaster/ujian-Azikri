import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Card from './components/card'
import Footer from "./components/footer";


const App = () => {
  const [Api, setApi] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => setApi(data))
    }, [])
  
  return ( 
    <div className="bg-slate-900">
      <Navbar/>
      <Hero/>
      <div className="w-full px-85 h-full grid grid-cols-3 gap-3 bg-slate-900">

        {Api.map((item) => (
          <Card key={item} title={item.title} body={item.body} id={item.id}/>
        ))}
          
      </div>
      <Footer/>
    </div>
    
   );
}
 
export default App;