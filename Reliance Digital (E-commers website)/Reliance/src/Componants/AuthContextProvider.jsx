import { createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(children){
    const[isLoggedIn, setisLoggedIn] = useState(false);

    function IsLoggedIn(){
        return setisLoggedIn(true);
    }


    return(<AuthContext.Provider>{children}</AuthContext.Provider>);
   
}
