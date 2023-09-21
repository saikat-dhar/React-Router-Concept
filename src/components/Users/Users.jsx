import { useLoaderData } from "react-router-dom";
import Use from "../use/Use";


const Users = () => {
    const users = useLoaderData();

    return (
        <div className="text-center">
            <h3>Our Users: {users.length}</h3>
           <div className="grid grid-cols-3 mx-16 gap-6">
            {
                users.map( user => <Use key={user.id} user={user}></Use>)
            }
           </div>
        </div>
    );
};

export default Users;