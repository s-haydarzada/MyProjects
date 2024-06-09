import React, { useContext } from 'react';
import style from "./style.module.scss";
import { Outlet, Link } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { UserContext } from './../../Context/UserContext/index';
import { signOutUser } from "../../utils/Firebase/firebase";
import { CartContext } from './../../Context/CardContext/index';
import CartDropDown from '../../Components/CartDropDown';



const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const {totalCartCount}=useContext(CartContext)

    const handleSignOutClick = () => signOutUser();
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


    return (
        <>
            <div className={style.Navigation}>
                <div>
                    <Link className={style.logo} to="/">
                        <FaCrown />
                    </Link>
                </div>
                <div className={style.navContainer}>
                    <Link to="/shop" className={style.navLink}>Shop</Link>
                    {
                        currentUser ? (
                            <Link onClick={handleSignOutClick} className={style.navLink}>Sign out</Link>
                        )
                            :
                            (
                                <Link to="/signin" className={style.navLink}>Sign in</Link>
                            )
                    }
                    <div onClick={toggleIsCartOpen} style={{cursor:"pointer"}} className={style.bag}>
                        <div className={style.container}>
                        <span className={style.badge}>{totalCartCount}</span>
                        <BsBag />
                        </div>
                    </div>

                    {
                        isCartOpen && <CartDropDown />
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
