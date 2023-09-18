import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="main_about">
      <section className="about text-center">
        <div className="container py-5 ">
          {/* <div className="row py-5">
                <div className="col-lg-7 m-auto">
                    <h2>ABOUT US</h2>
                    <div className="line2 my-1"></div>
                </div>
            </div> */}

          <div className="row">
            <div className="col-lg-6">
              <div className="img">
                <img
                  src="https://i.etsystatic.com/27702180/r/il/cfba83/2940791374/il_1140xN.2940791374_br3k.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <h2>Welcome our Website</h2>
              <p>
                {" "}
                MALIK TRADERS Experience the beauty and benefits of copper
                firsthand with MALIK TRADERS. Elevate your hydration game, make
                a statement for sustainability, and enjoy the numerous health
                benefits of copper. Browse our collections, find the perfect
                bottle for your lifestyle, and embark on a journey to a
                healthier, more sustainable you. Join us in sipping with style
                and purpose! Choose MALIK TRADERS and elevate your hydration
                game today.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="about-container mt-5">
      <section className="about-company">
        <div className="company-info">
          <h2>Our Company Values</h2>
          <p>
            Welcome to Malik Traders, your trusted source for high-quality copper bottles. We are committed to providing eco-friendly and health-conscious products to our customers.
          </p>
          <p>
            Our copper bottles are crafted with precision and designed to offer the numerous health benefits associated with copper water. We take pride in offering sustainable solutions to enhance your well-being.
          </p>
        </div>
      </section>
      <br /> <br />
        <h1>What our customers say: </h1>
      <section className="customer-testimonials">
        <div className="testimonial">
          <p>
            "I love my copper bottle from Malik Traders. It's not only stylish but also keeps my water fresh and pure. Highly recommended!"
          </p>
          <p className="testimonial-author">- Sakshi Mandal</p>
        </div>
        <div className="testimonial">
          <p>
            "Malik Traders provides excellent customer service. Their copper bottles are top-notch, and I've noticed a positive impact on my health."
          </p>
          <p className="testimonial-author">- Sunil Pawar</p>
        </div>
        <div className="testimonial">
          <p>
            "The quality of the copper bottles from Malik Traders is outstanding. I've been using mine for months, and it still looks brand new."
          </p>
          <p className="testimonial-author">- Suraj Thakur</p>
        </div>
      </section>
    </div>
    </div>
  );
}

export default About