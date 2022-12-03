import React, { useContext } from 'react';
import { AppContexts } from '../contexts/AppContexts';
import { Nav, Image, NavDropdown, Badge } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import userIcon from "../../assets/images/icon/usericon.png";
import Cart from "../../assets/images/icon/shopping-basket.svg"
import userAvatar from "../../assets/images/icon/user.svg";

export default function ModalAuth() {

    const userAva = <Image src={userIcon} alt="" roundedCircle />;

  const [state, dispatch] = useContext(AppContexts)

    let navigate = useNavigate()

    const logout = () => {
        console.log(state)
        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }
  const profile = () => {
    navigate("/profile");
    

  };


    return (
        <>
                <nav className="Cart">
                  <Link to={"/payment"}>
                    <img src={Cart} alt="" />
                      <Badge className="counter" bg="danger">
                        
                      </Badge>
                  </Link>
                </nav>
                <NavDropdown title={userAva} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={profile}>
                    <img src={userAvatar} alt="" />
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    <img src={userAvatar} alt="" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
    )
}