import react from 'react';


const Navbar= () =>{
    return (
        <>
            <Nav>
                <NavLink to="/"> 
                    {/* <img src="" alt="logo"/> */}
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle >
                        About
                    </NavLink>

                    <NavLink to="/services" activeStyle >
                        Services
                    </NavLink>

                    <NavLink to="/contact-us" activeStyle >
                        Contact Us
                    </NavLink>

                    <NavLink to="/sign-up" activeStyle >
                        Sign Up
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;