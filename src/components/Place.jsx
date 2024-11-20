import { Link } from 'react-router-dom';
const Place = ({place}) => {
    const {image,title,location,bookingAvailability,id} =place;
    return (
    
       <Link to={`places/${id}`}>
          
            <div className="card bg-base-100 w-96 shadow-xl p-6 mb-5">
  <figure className='bg-slate-400 py-2 rounded-2xl'>
    <img
      src={image}  className='h-[250px] rounded-2xl w-full object-cover' />
  </figure>
 
    <h2 className="card-title">
      {title}
  
    </h2>
    <h2 >location:{location}</h2>
    <h2>bookingAvailability:{bookingAvailability}</h2>
    <button className="btn btn-warning badge badge-outline ">Explore Now</button>
    
    
    </div>
 </Link>
    );
};

export default Place;