import * as React from 'react';
import { Link } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBlogUser } from '@modules/auth/selectors';

const Header = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state: any) => state.auth);

    React.useEffect(() => {
        dispatch(getBlogUser() as never);
    }, [dispatch]);

    const renderContent = () => {
        switch (authState.user) {
            case null:
                return;
            case undefined:
                return (
                    <li>
                        <a href={'/auth/google'}>Login With 0Auth</a>
                    </li>
                );
            default:
                return (
                    <React.Fragment>
                        <li key="3" style={{ margin: '0 10px' }}>
                            <Link to="/blogs">My Blogs</Link>
                        </li>
                        <li key="2">
                            <a href={'/auth/logout'}>Log out</a>
                        </li>
                    </React.Fragment>
                );
        }
    }
    
    return (
        <nav className="indigo">
            <div className="nav-wrapper">
            <Link
                to={authState ? '/blogs' : '/'}
                className="left brand-logo"
                style={{ marginLeft: '10px' }}
            >
                Blogster
            </Link>
            <ul className="right">{renderContent()}</ul>
            </div>
        </nav> 
    )
}

export default Header;