function FormLogin (){
    return (
        <div className="flex justify-center mt-24">
            <div>

            </div>
            <div className="px-72 py-36 bg-indigo-50 rounded-xl">
                <h1 className=" text-3xl font-bold text-center">SIMADA</h1>
                <div className="relative shadow-sm">
                        <div className="mt-12 ">
                            <label htmlFor="Username">Username</label>
                            <input type="text" className=" mt-2 bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border border-indigo-400 py-3 pl-7 pr-24  "/>
                        </div>
                        <div className="mt-6 ">
                            <label htmlFor="Password">Password</label>
                            <input type="text" className=" mt-2 bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border border-indigo-400 py-3 pl-7 pr-24  "/>
                        </div>
                        <div className="flex justify-center">
                        <div className=" mt-12 px-32 py-3 bg-indigo-400 rounded-lg text-center ">
                            <p className=" text-white font-bold ">LOGIN</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default FormLogin;