import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
    };

    export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
        const res = await registerRequest(user);
        console.log("Registro exitoso:", res.data);
        setUser(res.data);
        setIsAuthenticated(true);
        setErrors([]); // limpia errores si todo sale bien
        } catch (error) {
        const data = error.response?.data;

        // Manejo robusto de múltiples formatos de error
        const extractedErrors = Array.isArray(data)
            ? data
            : data?.errors || data?.message || ["Ocurrió un error inesperado"];

        setErrors(extractedErrors);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log("Inicio de sesión exitoso:", res.data);
        setUser(res.data);
        setIsAuthenticated(true);
        setErrors([]); // limpia errores si todo sale bien
        } catch (error) {
        const data = error.response?.data;

        // Manejo robusto de múltiples formatos de error
        const extractedErrors = Array.isArray(data)
            ? data
            : data?.errors || data?.message || ["Ocurrió un error inesperado"];

        setErrors(extractedErrors);
        }
    }

    useEffect(()=>{
        if (errors.length > 0){
            const timer = setTimeout(()=> {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return (
        <AuthContext.Provider
        value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};
