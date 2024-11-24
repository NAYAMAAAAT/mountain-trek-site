import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const nid = parseInt(id);
    const data = useLoaderData();
    const place = data.find(place => place.id === nid);
    const { image, shortDescription, adventureCost, bookingAvailability, location, duration, adventureLevel, title, maxGroupSize, specialInstructions } = place;

    return (
        <div className='my-12 flex flex-col md:flex-row'>
            <div className='flex justify-center'>
                <img className='w-full h-auto max-w-xs md:max-w-md lg:max-w-lg my-12' src={image} alt={title} />
            </div>
            <div className='my-12 pt-9 pr-10 pl-5 md:pl-20 bg-blue-300 flex-1'>
                <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
                <h1 className='font-bold'>Description: {shortDescription}</h1>
                <h1 className='font-bold'>Adventure Cost: {adventureCost}</h1>
                <h1 className='font-bold'>Booking Availability: {bookingAvailability}</h1>
                <h1 className='font-bold'>Location: {location}</h1>
                <h1 className='font-bold'>Duration: {duration}</h1>
                <h1 className='font-bold'>Adventure Level: {adventureLevel}</h1>
                <h1 className='font-bold'>Max Group Size: {maxGroupSize}</h1>
                <div className='mt-4'>
                    <h2 className='font-bold'>Special Instructions:</h2>
                    {specialInstructions.map((specialInstruction, index) => (
                        <h1 key={index} className="font-bold">{specialInstruction}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;