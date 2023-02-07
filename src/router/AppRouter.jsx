import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuthStore } from "../hooks"



export const AppRouter = () => {

    //const authState ='not-authenticated'   // 'authenticated' 'checking'
    const { status, checkAuthToken } =useAuthStore()

    useEffect( ()=>{
        checkAuthToken()
    },[])

    if( status === 'checking' ) return <h1> Cargando... </h1>

    return (
        <Routes>

            {
                ( status === 'no-authenticated' )
                    ?
                        (
                            <>
                                <Route  path='/auth/*' element={ <LoginPage /> } />
                                <Route  path='/*' element={ <Navigate to='/auth/login' /> }  />
                            </>
                        ) 
                    : 
                        (
                            <>
                                <Route  path='/' element={ <CalendarPage /> } />
                                <Route  path='/*' element={ <Navigate to='/' /> }  />
                            </>
                        )

            } 

        
        </Routes>
    )
}
