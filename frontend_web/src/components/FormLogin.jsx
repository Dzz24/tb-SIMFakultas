function FormLogin (){
    return (
        <div className="flex justify-center mt-40">
            <div>

            </div>
            <div className="w-96 h-96 bg-indigo-50 rounded-3xl">
                <div className="relative rounded-md shadow-sm">
                        <div className="mt-12 ml-9">
                            <label htmlFor="Username">Username</label>
                            <input type="text" className=" mt-2 bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border border-indigo-400 py-3 pl-7 pr-24  "/>
                        </div>
                        <div className="mt-6 ml-9">
                            <label htmlFor="Password">Password</label>
                            <input type="text" className=" mt-2 bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border border-indigo-400 py-3 pl-7 pr-24  "/>
                        </div>
                        <div className=" mt-12 w-72 h-12 bg-indigo-400 rounded-lg text-center ml-11 ">
                            <p className=" text-white ">LOGIN</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default FormLogin;