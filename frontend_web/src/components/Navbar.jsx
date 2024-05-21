import { Gauge } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { Settings } from 'lucide-react';


function Navbar (){
    return (
        <div className="flex ">
            <div className="bg-indigo-50 px-12 pb-20">
            <div>
                <p className=" mt-24 text-center text-black text-4xl font-extrabold font-['Outfit']">Logo</p>
            </div>
            <div className=" mt-16">
                <div className=" my-4 flex gap-6">
                    <Gauge className='w-6 h-6' />
                    <p className="text-center text-black text-xl font-extrabold font-['Outfit']">Dashboard</p>
                </div>
                <div className="flex  gap-6 my-6">
                    <UsersRound className='w-6 h-6'/>
                    <p className="text-center text-black text-xl font-bold font-['Outfit']">Kepegawaian</p>
                </div>
                <div className="flex gap-6 my-4 mb-96">
                    <HandCoins className='w-6 h-6'/>
                    <p className="text-center text-black text-xl font-bold font-['Outfit']">Keuangan</p>
                </div>
                <div className='flex gap-6'>
                    <Settings className='w-6 h-6'/>
                    <p className="text-center text-black text-xl font-bold font-['Outfit']">Pengaturan</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Navbar;