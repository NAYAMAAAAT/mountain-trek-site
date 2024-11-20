import { useLoaderData, useParams } from 'react-router-dom';
const Details = () => {

    const {id} = useParams();
    const nid = parseInt(id);
     const data= useLoaderData();
    const place = data.find(place => place.id === nid);
    const {image} = place;
    return (
      
             <div className='my-12  pl-96'>
 <h2>book detail:{id}</h2>
 <img className='w-5/12' src={image}/>

 
        </div>
       
    );
};

export default Details;