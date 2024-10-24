import Avatar from 'react-avatar';

const Client = ({ username }) => {
  return (
    <div className=" transition-all duration-300">
      <div className='flex gap-5 items-center justify-start text-neutral-300'>
      <Avatar className='h-10 w-10  rounded-full overflow-hidden' name={username} size={50} round="14px" />
      <span className="userName">{username}</span>

      </div>
    </div>
  );
};

export default Client;
