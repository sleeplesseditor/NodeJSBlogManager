import * as React from 'react';
import { Link } from "@tanstack/react-router";

const Header = () => {
    const renderContent = () => {
        switch (this.props.auth) {
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
                        <a href={'/auth/logout'}>Logout</a>
                    </li>
                </React.Fragment>
            );
        }
    }
    
    return (
        <nav className="indigo">
            <div className="nav-wrapper">
            <Link
                to={this.props.auth ? '/blogs' : '/'}
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
