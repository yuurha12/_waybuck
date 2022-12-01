import { useContext, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { API, setAuthToken } from './config/api';

//components
// import NavBar from "./components/Navbar";

//page
import Home from "./pages/Home";
import ProdDetail from "./pages/productDetail";
import Profile from "./pages/Userprofile";
import Income from "./pages/incometransaction";
import CartDigan from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import {AppContexts} from "./components/contexts/AppContexts";
import LoginForm from './components/auth/Login';

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(AppContexts);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Redirect Auth
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false && !isLoading) {
      navigate(<LoginForm />);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      console.log("response check auth", response)

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      console.log("ini data state", state)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      {isLoading ? null :
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-detail/:id" element={<ProdDetail />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/income-transaction" element={<Income />} />
        <Route exact path="/payment" element={<CartDigan />} />
        <Route exact path="/add-product" element={<AddProduct />} />
      </Routes>
}
    </>
  );
}

export default App;
