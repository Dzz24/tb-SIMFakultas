import Navbar from "../components/Navbar";
function Profile (){
    return (
        <div className="flex">
            <Navbar/>
            <div className=" rounded-md shadow-sm">
                <input type="text" className="bg-transparent ring-opacity-20 block w-full rounded-md border-0 py-1.5 pl-7  text-white text-opacity-60 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
            </div>
        </div>
    )
}
export default Profile;