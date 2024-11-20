import { useLoaderData, useParams } from 'react-router-dom';
const Details = () => {

    const {id} = useParams();
    const nid = parseInt(id);
     const data= useLoaderData();
    const place = data.find(place => place.id === nid);
    const {image,shortDescription,adventureCost,bookingAvailability,location,duration,adventureLevel,title,maxGroupSize,specialInstructions } = place;
    return (
      
  <div className='my-12 flex '>
    <div>
 <img className='w-96 h-96 my-12 ' src={image}/>
 </div>
 <div className='my-12 pt-9 pr-10 pl-20 bg-blue-300'>
 <h1 className='text-3xl' >Title:{title}</h1>
 <h1 className='font-bold'>Description:{shortDescription}</h1>
 <h1 className='font-bold'>Adventure Cost:{adventureCost}</h1>
 <h1 className='font-bold'>Booking Availability:{bookingAvailability}</h1>
 <h1 className='font-bold'>Location:{location}</h1>
 <h1 className='font-bold'>Duration{duration}</h1>
 <h1 className='font-bold'>Adventure Level:{adventureLevel}</h1>
 <h1 className='font-bold'>Max Group Size:{maxGroupSize}</h1>
<div className=''>Special Instructions:
{
specialInstructions.map((specialInstruction,index)=> <h1
key={index} className="font-bold">{specialInstruction}</h1>)
}
</div>
 </div>
 
        </div>
       
    );
};

export default Details;