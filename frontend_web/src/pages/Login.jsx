import FormLogin from "../components/FormLogin";
import Navbar from "../components/Navbar"

function Login (){
    return (
        <>
        <div>
            <div className = "">
                <p className="text-center text-black text-4xl font-extrabold font-['Outfit']">SIMADA</p>
            </div>
            <FormLogin/>
        </div>
        </>
    )
}
export default Login;