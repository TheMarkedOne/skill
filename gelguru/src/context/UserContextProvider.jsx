import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


import toast from "react-hot-toast";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true)
    const [image, setImage] = useState('')


    let loginUser = async (loginData) => {
        try {
            setLoading(true)
            let response = await fetch(`http://127.0.0.1:8000/api/token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'email': loginData.email, 'password': loginData.password })
            })
            let data = await response.json()

            console.log(data)
            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
            } else {
                toast.error('Something went wrong')
            }
            console.log('response', response)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }

        console.log('data', data)
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    let updateToken = async () => {
        console.log('Update token called')
        setLoading(true)
        let response = await fetch(`http://127.0.0.1:8000/api/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens.refresh })
        })

        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }
        setLoading(false)
    }

    let contextData = {
        loginUser: loginUser,
        user: user,
        logoutUser: logoutUser,
        authTokens: authTokens,
        setImage: setImage,
        image: image
    }


    useEffect(() => {

        let fourMinute = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinute)

        return () => clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider
