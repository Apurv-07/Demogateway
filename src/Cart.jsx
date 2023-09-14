import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
    console.log("Props", props)
    // eslint-disable-next-line react/prop-types
    const {list, remove}=props;
  var [total, setTotal] = useState(0);
  var price = 0;
  console.log("List", list)
  list.map((item) => {
    console.log(item, "Item")
    price = price + item.price;
  });

  useEffect(() => {
    setTotal(price);
  }, [price]);
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/payment')
  }
  //Is it possible with reduce?
  // var ko=yo.reduce((item, sum)=>{

  // })
  // console.log(ko)
  return (
    <>
     <h1>Cart</h1>
      {list.map((item) => {
        return (
            <div className="cart" key={item.id}>
              <img src={item.photo} height="200" width="200" />
              <h2>{item.name}</h2>
              <h3>Rs {item.price}</h3>
              <button onClick={()=>remove(item)}>Remove</button>
            </div>
        );
      })}
      <h2>Total: Rs {total}</h2>
      <button style={{background: 'black !important'}} onClick={handleClick}>Buy now</button>
    </>
  );
}
