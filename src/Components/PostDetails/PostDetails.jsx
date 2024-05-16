import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetails=useLoaderData();
    console.log(postDetails);
    const {body}=postDetails;
    
    const navigate=useNavigate();
    const handleBackPage=()=>{
       navigate(-1);
    }
    return (
        <div className="post">
            <h3>Details for all Post:  {body}</h3>
            <button onClick={handleBackPage}>Back</button>
        </div>
    );
};

export default PostDetails;