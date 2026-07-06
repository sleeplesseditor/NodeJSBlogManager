import * as React from 'react';
import { Link } from "@tanstack/react-router";
import { useQueryClient } from '@tanstack/react-query';
import { useSelector } from "react-redux";
import { getBlogUser } from '@modules/auth/selectors';

const Header = () => {
    const queryClient = useQueryClient(); 
    
    const authState = useSelector((state: any) => state.auth);

    // React.useEffect(() => {
    //     queryClient.prefetchQuery({
    //         queryKey: ['blogUser', null],
    //         queryFn: () => getBlogUser()
    //     })
    // }, []);

    const renderContent = () => {
        switch (authState) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href={'/auth/google'}>Login With Google</a>
                    </li>
                );
            default:
                return (
                    <React.Fragment>
                        <li key="3" style={{ margin: '0 10px' }}>
                            <Link to="/blogs">My Blogs</Link>
                        </li>,
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

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(mapStateToProps)(Header);
