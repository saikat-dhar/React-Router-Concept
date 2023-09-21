import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="text-center">
            <h3>Posts: {posts.length}</h3>
            <div  className="grid grid-cols-3 mx-16 gap-6">
                {
                    posts.map( post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;