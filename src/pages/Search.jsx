import data from "../Shopdata";
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Search = (props) => {
    const location=useLocation();
    // console.log(location)
    let res=data.filter((item)=>{
        return item.name.toLowerCase().includes(location.state.text)
      })
      const handleCart=(item)=>{
        props.add(item)
      }
  return (
    <div>Search Results:
        <div className="row">
          {res.map((item, index) => {
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
                          <h5 className="card-title text-nowrap">{item.name}</h5>
                          <h5>Rs. {item.price}</h5>
                          <button  className="button align-item-center" onClick={()=>handleCart(item)}>Add to cart</button>
                          <Link to={`/${item.id}`}>View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
            );
          })}
        </div>
    </div>
  )
}

export default Search;