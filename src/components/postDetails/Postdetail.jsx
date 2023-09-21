import { useLoaderData, useNavigate } from "react-router-dom";


const Postdetail = () => {
    const detail = useLoaderData();
    const navigate = useNavigate();
    const {id,title,body} = detail;

    const handelGoback = () => {
        navigate(-1)
    }
    return (
        <div className="text-center">
            <h3>Post Detail About :{id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button className='bg-blue-800 px-6 py-2 font-bold text-white rounded-full' onClick={handelGoback}>Go Back</button>
        </div>
    );
};

export default Postdetail;