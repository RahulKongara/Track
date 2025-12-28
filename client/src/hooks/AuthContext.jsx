import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("token", token);
        setUser(userData);
        setIsLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);