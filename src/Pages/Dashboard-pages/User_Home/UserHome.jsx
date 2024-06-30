import UseAuth from "../../../Hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth();
    return (
        <div>
        <h2 className="text-3xl"></h2>
        <span>Hi, Welcome</span>
        {
         user?.displayName ? user.displayName : 'Back'
        }
     </div>
 );
};

export default UserHome;