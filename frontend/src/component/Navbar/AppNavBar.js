// import { useState } from 'react';
// import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
// import './appnavbar.css';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import UserIcon from '../../assets/images/user.png';
// import Logo from '../../assets/images/logo.png';

// const AppNavBar = (props) => {
//     let navigate = useNavigate();
//     const [showMenu, setShowMenu] = useState(false);

//     const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail } = props;
//     const storedUseremail = localStorage.getItem('useremail');

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         setName(null);
//         setEmail(null);
//         localStorage.clear();
//         navigate('/login');
//         toast.success('You are successfully logged out!');
//     };

//     const handleMenuToggle = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <>
//             <Navbar expand="md" className='px-4 justify-content-between'>
//                 <Navbar.Brand href="#">
//                     <img src={Logo} className="me-2 h-6 sm:h-15 logo" alt="interview-Logo" />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuToggle} />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto">
//                         {!storedUseremail && (
//                             <>
//                                 <Link to={'/'} className="nav-link navbar-links">
//                                     Home
//                                 </Link>
//                                 <Link to={'/faq'} className="nav-link navbar-links">
//                                     Faq
//                                 </Link>
//                                 <Link to={'/contact'} className="nav-link navbar-links">
//                                     Contact
//                                 </Link>
//                                 <Link to={'/login'} className="nav-link navbar-links">
//                                     Login
//                                 </Link>
//                             </>
//                         )}
//                     </Nav>
//                     {storedUseremail && (
//                         <Dropdown align="end" show={showMenu} onClick={handleMenuToggle}>
//                             <Dropdown.Toggle as={Button} variant="outline-dark">
//                                 <img src={UserIcon} className="avatar" alt="User settings" />
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Header>
//                                     <span className="block font-medium text-center dropdown-name">{name}</span>
//                                     <span className="block truncate text-sm font-medium">{email}</span>
//                                 </Dropdown.Header>
//                                 <hr className="py-0 my-0" />
//                                 <Dropdown.Item>Settings</Dropdown.Item>
//                                 <Dropdown.Item>Profile</Dropdown.Item>
//                                 <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     )}
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     );
// };

// export default AppNavBar;




// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import './appnavbar.css'
// import { Link } from 'react-router-dom';
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "../../assets/images/user.png";
// import Logo from '../../assets/images/logo.png';

// const AppNavBar = () => {
//     const navigate = useNavigate();

//     // Retrieve user data from localStorage
//     const storedUseremail = localStorage.getItem('useremail');
//     const storedName = localStorage.getItem('name');
//     const isLoggedIn = !!storedUseremail; // Check if user is logged in

//     const handleLogout = () => {
//         // Clear user data from localStorage
//         localStorage.clear();
//         localStorage.clear();
//         // Redirect to login page
//         navigate("/login");
//         toast.success("You are successfully logged out!");
//     };

//     return (
//         <>
//             <Navbar fluid>
//                 <Navbar.Brand href="#">
//                     <img src={Logo} className="me-2 logo" alt="interview Logo" />
//                 </Navbar.Brand>
//                 {/* Conditionally render based on login status */}
//                 {isLoggedIn ? (
//                     <div className="flex md:order-2">
//                         <Dropdown arrowIcon={false} inline
//                             label={<Avatar alt="User settings" img={UserIcon} rounded  className="avatar" />}>
//                             <Dropdown.Header>
//                                 <span className="block  font-medium text-center dropdown-name">{storedName}</span>
//                                 <span className="block truncate text-sm font-medium">{storedUseremail}</span>
//                             </Dropdown.Header>
//                             <hr className="py-0 my-0"/>
//                             <Dropdown.Item>Settings</Dropdown.Item>
//                             <Dropdown.Item>Profile</Dropdown.Item>
//                             <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
//                         </Dropdown>
//                     </div>
//                 ) : (
//                     <Navbar className="listing">
//                         <Link to={"/"} className="text-lg mx-2">Home</Link>
//                         <Link to={"/faq"} className="text-lg mx-2">Faq</Link>
//                         <Link to={"/contact"} className="text-lg mx-2">Contact</Link>
//                         <Link to={"/login"} className="text-lg mx-2">Login</Link>
//                     </Navbar>
//                 )}
//             </Navbar>
//         </>
//     );
// };

// export default AppNavBar;


import { Avatar, Dropdown, Navbar } from "flowbite-react";
import './appnavbar.css'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserIcon from "../../assets/images/user.png";
import Logo from '../../assets/images/logo.png';

const AppNavBar = () => {
    const navigate = useNavigate();

    // Retrieve user data from localStorage
    const storedUseremail = localStorage.getItem('useremail');
    const storedName = localStorage.getItem('name');
    const isLoggedIn = !!storedUseremail; // Check if user is logged in

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.clear();
        localStorage.clear();
        // Redirect to login page
        navigate("/login");
        toast.success("You are successfully logged out!");
    };

    return (
        <>
            <Navbar fluid>
                <Navbar.Brand href="#">
                    <img src={Logo} className="me-2 logo" alt="interview Logo" />
                </Navbar.Brand>
                {/* Conditionally render based on login status */}
                {isLoggedIn ? (
                    <div className="flex md:order-2 user-menu">
                        <Dropdown arrowIcon={false} inline
                            label={<Avatar alt="User settings" img={UserIcon} rounded  className="avatar" />}>
                            <Dropdown.Header>
                                <span className="block  font-medium text-center dropdown-name">{storedName}</span>
                                <span className="block truncate text-sm font-medium">{storedUseremail}</span>
                            </Dropdown.Header>
                            <hr className="py-0 my-0"/>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Profile</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                        </Dropdown>
                    </div>
                ) : (
                    <>
                     <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-bar" />
                     <Navbar.Collapse  id="responsive-navbar-nav"  >
                        <Navbar className="listing">
                        <Link to={"/"} className="text-lg mx-2 nav-links">Home</Link>
                        <Link to={"/faq"} className="text-lg mx-2 nav-links">Faq</Link>
                        <Link to={"/contact"} className="text-lg mx-2 nav-links">Contact</Link>
                        <Link to={"/login"} className="text-lg mx-2 nav-links">Login</Link>
                        </Navbar>
                        </Navbar.Collapse>
                        <Navbar className="listing2">
                        <Link to={"/"} className="text-lg mx-2 nav-links">Home</Link>
                        <Link to={"/faq"} className="text-lg mx-2 nav-links">Faq</Link>
                        <Link to={"/contact"} className="text-lg mx-2 nav-links">Contact</Link>
                        <Link to={"/login"} className="text-lg mx-2 nav-links">Login</Link>
                        </Navbar>
                    </> )}
            </Navbar>
        </>
    );
};

export default AppNavBar;
