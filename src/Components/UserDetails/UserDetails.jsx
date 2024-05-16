import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
        const user=useLoaderData();
        const {name,website}=user;
        // console.log(user);
    return (
        <div>
            <h2>Details for user:{name}</h2>
            <p>WebSite: {website}</p>
        </div>
    );
};

export default UserDetails;