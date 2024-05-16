import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts=useLoaderData();
    // console.log(posts);
    const {id,title}=posts;
    return (
        <div>
           <h2>This is post page</h2> 
           <div>
            {posts.map(post => <Post post={post}></Post>)}
           </div>
        </div>
    );
};

export default Posts;