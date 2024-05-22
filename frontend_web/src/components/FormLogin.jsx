import gambar3 from '../assets/logoipsum-249.svg';
function FormLogin (){
    return (
        <div className="">
            <div className='flex justify-between'>
                <div className='flex gap-4 mt-8 ml-8'>
                    <img src={gambar3} className='w-12 h-12' alt="" />
                    <p className='font-bold text-3xl m-1'>SIMADA</p>
                </div>
                <div className='mt-8 mr-8 space-y-6 bg'>
                    <form action="">
                    <h1 className='font-bold text-5xl'>Welcome to SIMADA</h1>
                    <p className='text-xl text'>login with ur account</p>
                    <p className='text-xl '>Nama</p>
                    <input type="text" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border-0 py-3 pl-7 pr-44  text-white ring-1 ring-inset ring-black-300  sm:text-sm sm:leading-6"/>
                    <p className='text-xl'>Role</p>
                    <input type="password" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border-0 py-3 pl-7 pr-44  text-white ring-1 ring-inset ring-black-300  sm:text-sm sm:leading-6"/>
                    <p className='text-xl'>Password</p>
                    <input type="text" className=" bg-transparent text-opacity-60 ring-opacity-20 block rounded-md border-0 py-3 pl-7 pr-44  text-white ring-1 ring-inset ring-black-300  sm:text-sm sm:leading-6"/>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default FormLogin;