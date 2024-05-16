import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    console.log(post);
    const {id,title}=post;

    const navigate=useNavigate();
    const handleShowDetail=()=>{
       navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>Id:{id}</h2>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}><button className='btn'>Show post Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;