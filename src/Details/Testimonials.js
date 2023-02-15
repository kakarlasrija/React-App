import "./Testimonials.css";
import Mypic from "../StaticFiles/Images/Clients.png";
import Mypic1 from "../StaticFiles/Images/p1.png";
import Mypic2 from "../StaticFiles/Images/p2.png";
import Mypic3 from "../StaticFiles/Images/p3.png";

function Testimonials() {
  return (
    <>
      <section className="TstBdy" id="Testimonials">
        <div className="Tst_head">
          <div>Happy Clients</div>
          <img src={Mypic} alt="MyPic"></img>
        </div>
        <div className="testimonials">
          <div className="inner">
            <h1>Testimonials</h1>
            <div className="border"></div>

            <div className="row">
              <div className="col">
                <div className="testimonial">
                  <img src={Mypic1} alt=""></img>
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={Mypic2} alt=""></img>
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={Mypic3} alt=""></img>
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
