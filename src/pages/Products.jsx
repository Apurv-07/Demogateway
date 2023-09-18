import data from "../Shopdata";
import { Link, useNavigate } from "react-router-dom";
// import './Home.css'
export default function Products(props) {
  //console.log(data)
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  function handleCart(item) {
    // eslint-disable-next-line react/prop-types
    props.add(item);
  }
  return (
    <div>
      <div className="row">
          {data.map((item, index) => {
            return (
              <>
                  <div className="col-lg-3 col-md-6 col-6 mt-5 p-0 px-1">
                    <div className="content-box col">
                      <div className="card h-100">
                        <img
                          src={item.photo}
                          className="card-img-top"
                          style={{ height: "20vh" }}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-nowrap text-truncate">{item.name}</h5>
                          <h5>Rs. {item.price}</h5>
                          <button  className="button align-item-center" onClick={()=>handleCart(item)}>Add to cart</button>
                          <button  className="button align-item-center mt-2" onClick={()=>navigate(`/${item.id}`)}>View</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
            );
          })}
        </div>
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
