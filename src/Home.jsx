// eslint-disable-next-line no-unused-vars
import React from 'react'
// import copper from '../public/image/copper_bottle.css'
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RedeemIcon from '@mui/icons-material/Redeem';
import './Home.css'
const Home = () => {
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
                <button style={{marginRight: '20px'}} className="mbtn1 mt-4">Read More</button>
                <button className="mbtn2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      {/* anout */}
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
        <div className="col-lg-4">
          <div className="card py-3">
            <div style={{height:'18.5vh'}} className="card-dody">
              <StorefrontIcon style={{ fontSize: 50 }}/>
              <h3>BEST DEAL</h3>
              <p>ALL TIME</p>
            </div>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card py-3">
            <div style={{height:'18.5vh'}}  className="card-dody">
              <FilterVintageIcon style={{ fontSize: 50 }} />
              <h3>100% Organic</h3>
              <p>ALL</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card py-3">
            <div style={{height:'18.5vh'}}  className="card-dody">
              <RedeemIcon style={{ fontSize: 50 }}/>
              <h3> OUR PRODUCT</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Home