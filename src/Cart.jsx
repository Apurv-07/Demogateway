import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages/FeaturedProducts.css'

export default function Cart(props) {
  // eslint-disable-next-line react/prop-types
  const { list, remove, empty } = props;
  var [total, setTotal] = useState(0);
  var price = 0;
  list.map((item) => {
    price = price + item.price;
  });

  
  useEffect(() => {
    console.log("The storage on refresh data", list);
    // console.log("See storage", JSON.parse(localStorage.getItem(cart)))
    setTotal(price);
  }, [price]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="container-fluid my-5">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card shadow-lg"></div>
      <h1>Cart: </h1>
      </div></div></div>
      {list.map((item) => {
        return (
          <div key={item.id} className="container-fluid my-5">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card shadow-lg">
                  <div className="row p-2 mt-3 justify-content-between mx-sm-2">
                    <div className="col">
                      <p className="text-muted space mb-0 shop">
                        {" "}
                        {item.name}
                      </p>
                      <p className="text-muted space mb-0 shop">
                        Rs. {item.price}
                      </p>
                    </div>
                    <div className="col">
                      <div className="row justify-content-start">
                        <div className="col">
                          <img
                            className="irc_mi img-fluid cursor-pointer "
                            src={item.photo}
                            width="70"
                            height="70"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <img
                        className="irc_mi img-fluid bell"
                        src="https://i.imgur.com/uSHMClk.jpg"
                        width="30"
                        height="30"
                      />
                    </div>
                  </div>
                  <div className="row  mx-auto justify-content-center text-center">
                    <div className="col-12 mt-3 d-flex">
                      <nav aria-label="breadcrumb" className="second ">
                        <div className="d-flex gap-2">
                        <button style={{minWidth: '150px'}} className="button black-text text-uppercase" onClick={() => navigate(-1)}>Go back</button>
                            {/* */}
                              <button style={{minWidth: '150px'}} className="button black-text text-uppercase" onClick={()=>remove(item)}>Remove</button>
                          
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="container-fluid my-5">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card shadow-lg">
                  <div className="d-flex justify-content-between align-items-center p-lg-2">
      <h2>Total: Rs {total}</h2>
      {list.length>0 && <div>
      <button className="button black-text text-uppercase my-2" onClick={handleClick}>
        Buy now
      </button>
      <br />
      <button className="button black-text text-uppercase my-2" onClick={empty}>
        Empty cart
      </button>
      </div>}
      </div>
      </div>
      </div></div></div>
    </>
  );
}
