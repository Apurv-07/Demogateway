import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
  console.log("Props", props);
  // eslint-disable-next-line react/prop-types
  const { list, remove, empty } = props;
  var [total, setTotal] = useState(0);
  var price = 0;
  console.log("List", list);
  list.map((item) => {
    console.log(item, "Item");
    price = price + item.price;
  });

  useEffect(() => {
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
                    <div className="col-12 mt-3 ">
                      <nav aria-label="breadcrumb" className="second ">
                        <ol className="breadcrumb indigo lighten-6 first  ">
                        <li className="breadcrumb-item font-weight-bold">
                              <button className="black-text text-uppercase" onClick={() => navigate(-1)}>Go back</button>
                            <i
                              className="fa fa-angle-double-right text-uppercase "
                              aria-hidden="true"
                            ></i>
                          </li>
                          <li className="breadcrumb-item font-weight-bold">
                              <button className="black-text text-uppercase" onClick={()=>remove(item)}>Remove</button>
                            <i
                              className="fa fa-angle-double-right text-uppercase "
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ol>
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
                  <div className="d-flex justify-content-between">
      <h2>Total: Rs {total}</h2>
      {list.length>0 && <div>
      <button style={{ background: "black", color:'white' }} onClick={handleClick}>
        Buy now
      </button>
      <button style={{ background: "black", color:'white' }} onClick={empty}>
        Empty cart
      </button>
      </div>}
      </div>
      </div>
      </div></div></div>
    </>
  );
}
