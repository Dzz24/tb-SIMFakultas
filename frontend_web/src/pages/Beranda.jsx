
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getUserData } from "../utils/utils";
import { useNavigation } from "react-router-dom";
function Beranda (){

    // const navigate = useNavigation();
    const [isLogin, setIsLogin] = useState(false)

    useEffect(()=>{
        const userData = getUserData()
        if(userData){
            console.log(userData)
        } else {
            // navigate("/login")
            window.location.pathname = "/login"
        }
    },[])

    return (
        <>
        <Navbar/>
        </>
    )
}
export default Beranda;