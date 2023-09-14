import data from "./Shopdata";
import { useNavigate, } from "react-router-dom";
import './Home.css'
export default function Home() {
  //console.log(data)
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="container">
  {data.map((item, index) => {
    return (
      <div key={index} className="content">
          <img src={item.photo} alt="" />
          <h3>{item.name}</h3>
          <p>our product</p>
          <h6>{item.price}</h6>
          {/* <button className="buy-1">Buy Now</button> */}
          <button className="buy-1" onClick={()=>{handleClick(item.id)}}>View</button>
      </div>
    );
  })}
</div>

  );
}
//   <div className="card" key={item.id}>
//     <img src={item.photo} height="200" width="200" />
//     <h2>
//       {item.name} : Rs {item.price}
//     </h2>
//     <Link to={`/${item.id}`}>View</Link>
//     <h1></h1>
//   </div>
