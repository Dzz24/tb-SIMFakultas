
const userDataString = localStorage.getItem("user_data");

export const getUserData= () => {
    if(userDataString){
        return JSON.parse(userDataString)
    }
}

