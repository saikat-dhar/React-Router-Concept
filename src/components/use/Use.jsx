import PropTypes from 'prop-types';

const Use = ({user}) => {
    // console.log(user);
    const {name,email,phone,website} = user;
    return (
        <div className='border-solid border-green-800 border-2 p-6 rounded-lg'>
            <h3 className='text-3xl'>{name}</h3>
            <p className='text-xl'>email: {email}</p>
            <p className='text-xl'> phone: {phone}</p>
            <p className='text-sm'> website: {website}</p>
        </div>
    );
};

Use.propTypes = {
    user: PropTypes.object
}
export default Use;