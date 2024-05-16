import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid yellow',
        padding:'15px',
        margin:'15px',
        borderRadius:'5px'
    }
    return (
        <div style={userStyle}>
           <h3>Name:{name}</h3>
           <p>Email: {email}</p> 
           <p>Phone:{phone}</p>
           <Link to={`/user/${id}`}>Show Details</Link>

           <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;