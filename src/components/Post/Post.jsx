import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    // console.log(post);

    const handelDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='border-solid border-green-800 border-2 p-6 rounded-lg'>
            <h3>post of : {id}</h3>
            <p>Title: {title}</p>
            <p>{body}</p>
            <Link className="text-blue-800 font-bold text-2xl" to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button className='bg-blue-800 px-6 py-2 font-bold text-white rounded-full'>Show Details</button></Link>
            <button onClick={handelDetail} className='block bg-blue-800 px-6 py-2 font-bold text-white rounded-full'>Click For detail</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}
export default Post;