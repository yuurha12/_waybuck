// dependencies
import { useNavigate, useParams } from "react-router-dom";
import Rupiah from "rupiah-format";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";

// style
import productModules from "../style/css/product.module.css"

// file
import checkToping from "../assets/images/icon/green-check.svg";

// component
import NavBar from "../components/navbar/Navbar";

export default function DetailProductPage() {
  document.title = "Waysbucks | Product";

  const navigate = useNavigate();
  // check
  const [show, setShow] = useState(false);

  const handleCheck = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // toping
  const [toping, setToping] = useState([]); //price
  const [topping_id, setIdToping] = useState([]); //id

  // check mark
  const handleChange = (e) => {
    let updateToping = [...toping];
    if (e.target.checked) {
      updateToping = [...toping, e.target.value];
    } else {
      updateToping.splice(toping.indexOf(e.target.value));
    }
    setToping(updateToping);

    let toppingId = [...topping_id];
    if (e.target.checked) {
      toppingId = [...topping_id, parseInt(e.target.id)];
    } else {
      toppingId.splice(topping_id.indexOf(e.target.id));
    }

    setIdToping(toppingId);
  };

  // fetching
  let { id } = useParams();
  let { data: product } = useQuery("productCache", async () => {
    const response = await API.get("/product/" + id);
    return response.data.data;
  });

  let { data: toppings } = useQuery("toppingsCache", async () => {
    const response = await API.get("/toppings");
    return response.data.data;
  });

  // price sum
  let resultTotal = toping.reduce((a, b) => {
    return a + parseInt(b);
  }, 0);

  let subtotal = product?.price + resultTotal;
  let qty = 1;

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      await API.post("/transaction", config);

      const body = JSON.stringify({
        topping_id: topping_id,
        subtotal: subtotal,
        product_id: parseInt(id),
        qty: qty,
      });

      await API.post("/cart", body, config);

      setIdToping([]);
      setToping([]);
      navigate("/payment")
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY; // Get REACT_APP_MIDTRANS_CLIENT_KEY from ENV here ...

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);


  return (
    <>
      <NavBar />
      <div>
        <section>
          <div className={productModules.wrap}>
            <div className={productModules.left}>
              <img src={product?.image} alt="ProductImage" />
            </div>
            <div className={productModules.right}>
              <span className={productModules.name}>
                <p className={productModules.titleProduct}>{product?.title}</p>
                <p className={productModules.priceBrown}>
                  {Rupiah.convert(product?.price)}
                </p>
                <div className={productModules.toppings}>
                  {toppings?.map((item, index) => (
                    <div className={productModules.topping} key={index}>
                      <label
                        htmlFor={item?.id}
                        className={productModules.checkContainer}
                      >
                        <input
                          type="checkbox"
                          id={item?.id}
                          onChange={handleChange}
                          value={item?.price}
                          name="toping"
                          className={productModules.testCheck}
                        />

                        <img
                          src={checkToping}
                          alt="check"
                          className={productModules.checkmark}
                        />
                        <img
                          src={item?.image}
                          alt="ToppingImage"
                          onClick={handleCheck}
                          className={productModules.imageTopping}
                        />
                      </label>
                      <p>{item?.title.substring(0, 17)}</p>
                    </div>
                  ))}
                </div>
              </span>
              <div className={productModules.price}>
                <p>Total</p>
                <p>{Rupiah.convert(product?.price + resultTotal)}</p>
              </div>
              <div className={productModules.btn_grp}>
                <button
                  className={productModules.btn}
                  onClick={(e) => handleSubmit.mutate(e)}
                >
                  {" "}
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}