import { createContext, useState } from "react";

interface IAuthData {
    token: string,
    email: string,
    name: string,
}

interface IAuthContextData {
    authData?: IAuthData 
    signIn: (email: string, password: string) => Promise<IAuthData>;
    singOut: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }: any) => {
    const [authData, setAuthData] = useState<IAuthData>();

    function signIn(): Promise<IAuthData> {
        console.log("singIn");
    }

    function signOut() {
        console.log("singOut");
    }


    return (
        <AuthContext.Provider value={{authData, signIn, singOut}}>
            {children}
        </AuthContext.Provider>
    )
}