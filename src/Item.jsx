import { useParams } from "react-router-dom";
import data from "./Shopdata";
//import Cart from "./Cart";
//var context = createContext();
export default function Item(props) {
  var k = useParams();
  //console.log(k);
  var theItem = data.filter((item) => {
    return item.id == k.id;
  });
  //console.log(theItem);
  function handleCart() {
    // eslint-disable-next-line react/prop-types
    props.click(theItem[0]);
  }
  return (
    <>
      <img src={theItem[0].photo} />
      <h1>{theItem[0].name}</h1>
      <h2>Rs {theItem[0].price}</h2>
      <h3>
        {" "}
        Color: {theItem[0].color} ------ Size: {theItem[0].size}
      </h3>
      <button onClick={handleCart}>Add to Cart</button>
      {/* <context.Provider value={"Kuhu"}>
        <Cart />
      </context.Provider> */}
    </>
  );
}
//export { context };
