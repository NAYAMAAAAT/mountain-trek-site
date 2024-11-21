import { useEffect, useState } from "react";
import Place from "./Place";


const Places = () => {
    const [places,setPlaces] = useState([]);
    useEffect(()=>{
        fetch('/public/placeData.json')
        .then(res=>res.json())
        .then(data=> setPlaces(data))

    },[])
    return (
        <div  class="animate__animated animate__bounce animate__repeat-2">
        <h1  className="font-bold text-center mb-10 text-6xl mt-5">Mountain</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {
            places.map(place => <Place place={place} key={place.id}></Place>)
         }
        </div>
     
     </div>
    );
};

export default Places;