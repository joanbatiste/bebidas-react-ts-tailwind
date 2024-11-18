import { useEffect } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Modal from "../Components/Modal";
import Notification from "../Components/Notifiation";
import { useAppStore } from "../stores/useAppStore";


function Layout() {

    const loadFromStorage = useAppStore((state) => state.loadFromLocalStorage)

    useEffect(() =>{
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />
            <main className="container mx-auto py-16">
                <Outlet />
            </main>

            <Modal />
            <Notification />
        </>    
        
    );
}

export default Layout;