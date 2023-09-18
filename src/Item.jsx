import { useParams } from "react-router-dom";
import data from "./Shopdata";
import "./pages/FeaturedProducts.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import VerifiedIcon from '@mui/icons-material/Verified';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
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
    <section className="view">
            <div className="row">
                <div className="col-lg-6 col-md-6  mt-5">
                    <div className="img">
                        <img src={theItem[0].photo}
                            className="img-fluid pb-3" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6  mt-5">
                    <div className="product-details">
                        <h2>{theItem[0].name}</h2>
                        <h6 className="product-price">Rs. {theItem[0].price}</h6>
                        <p className="product-description">
                            {theItem[0].desc}
                        </p>
                        <div className="d-flex gap-3 mb-5">
                          <div style={{background:'#dce1e9', textAlign:'center', borderRadius:'10px', width:'88px'}}>
                            <LocalShippingIcon style={{ fontSize: 50 }} />
                            <p>Free Delivery</p>
                          </div>
                          <div style={{background:'#dce1e9', textAlign:'center', borderRadius:'10px', width:'88px'}}>
                            <VerifiedIcon style={{ fontSize: 50 }} />
                            <p>Verified Product</p>
                          </div>
                          <div style={{background:'#dce1e9', textAlign:'center', borderRadius:'10px', width:'88px'}}>
                            <Inventory2Icon style={{ fontSize: 50 }} />
                            <p>Good quality</p>
                          </div>
                          <div style={{background:'#dce1e9', textAlign:'center', borderRadius:'10px', width:'88px'}}>
                            <PaidIcon style={{ fontSize: 50 }} />
                            <p>Easy Payment</p>
                          </div>
                          <div style={{background:'#dce1e9', textAlign:'center', borderRadius:'10px', width:'88px'}}>
                            <FindReplaceIcon style={{ fontSize: 50 }} />
                            <p>No return</p>
                          </div>
                        </div>
                        <div className="img-6">
                          {theItem[0].images.length && theItem[0].images.map((item, i)=>{
                            return <img key={i} src={item}
                            alt=""/>
                          })}
                        </div>
                        <div className="product-options">
                            <button className="add-to-cart-button" onClick={handleCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
      {/* <img src={theItem[0].photo} />
      <h1>{theItem[0].name}</h1>
      <h2>Rs {theItem[0].price}</h2>
      <h3>
        {" "}
        Color: {theItem[0].color} ------ Size: {theItem[0].size}
      </h3>
      <button >Add to Cart</button> */}
      {/* <context.Provider value={"Kuhu"}>
        <Cart />
      </context.Provider> */}
    </>
  );
}
//export { context };
