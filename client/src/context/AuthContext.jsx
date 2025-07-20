import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

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

    return (
        <AuthContext.Provider
        value={{
            signup,
            user,
            isAuthenticated,
            errors,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};
