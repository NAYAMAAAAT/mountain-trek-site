import { Link } from "react-router-dom";


const Profile = () => {

    
    return (
        <div className="flex justify-center my-20">
            <div>
            <h2 className="text-3xl my-9 mr-6">Update your Profile </h2>
            <input type="text" placeholder="type Name" className="input input-bordered w-full max-w-xs" />
            <input  type="text" placeholder="type photo url" className="input input-bordered w-full max-w-xs mt-7" />
            <button className="btn btn-primary">
                <Link to="/myprofile">Update</Link>
            </button>
            </div>
        </div>
        
    );
};
export default Profile;