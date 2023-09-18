// eslint-disable-next-line no-unused-vars
import React from 'react'
// import copper from '../src/assets/copper_bottle.jpg'
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RedeemIcon from '@mui/icons-material/Redeem';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import data from './Homedata';
import FeaturedProducts from './pages/FeaturedProducts';
const Home = (props) => {
  console.log(props)
  // style={{background:`url(${copper})`}} 
  const iconMapping = {
    RedeemIcon,
    StorefrontIcon,
    FilterVintageIcon,
  };
  const navigate=useNavigate()
  return (
    <div>
        <section className="main px-5">
        <div>
          <div className="row py-5">
            <div className="col-lg-5 py-5 offset-lg-7 col-md-6 col-sm-12 col-12 " style={{marginTop: "100px"}}>
              <h1> MALIK TRADERS</h1>
              <div className="line">
                <p>If you have a specific copper water bottle in mind or need more detailed information about a particular product, it's a good idea to check the our website MALIK TRADERS
                </p>
                <button style={{marginRight: '20px'}} className="mbtn1 mt-4" onClick={()=>navigate('/about')}>Read More</button>
                <button className="mbtn2" onClick={()=>navigate('/products')}>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      {/* anout */}
      <div>
        <FeaturedProducts addTocart={props.add} />
      </div>
      <section className="welcome text-center pb-5">
    <div className="py-5">
      <div className="row py-5">
        <div className="col-lg-6 m-auto">
          <h1>WELCOME TO MALIK TRADERS</h1>
          <div className="line2 my-4"></div>
          <p>It is important to note that while some people believe in the potential health benefits of drinking water from copper vessels, the scientific evidence supporting these claims is limited.</p>
        </div>
      </div>
      <div className="row h-25">
      {data.map((item)=>{
        const IconComponent = iconMapping[item.icon]
        return(
          <div key={item.h} className="col-lg-4">
          <div className="card py-3">
            <div style={{height:'18.5vh'}} className="card-dody">
              <IconComponent style={{ fontSize: 50 }}/>
              <h3>{item.h}</h3>
              <p>{item.p}</p>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Home