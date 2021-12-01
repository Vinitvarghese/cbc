import Style from "./AboutUs.module.scss";
import aboutusImg from "../../Assets/Img/aboutus.jpg";
const AboutUs = () => {
  return (
    <div className="container">
      <div className={Style.wrap}>
        <img src={aboutusImg} alt="" />
        <h1>Wembley company</h1>
        <p>
          Wembly started its venture into facility management service since
          1980's. And we initially started with serving Hotels and Tourism
          sectors and from 2000 we expanded to serve commercial centers, Oil and
          Gas, Education and other sectors.
        </p>
        <p>
          Wembly is providing best facility management services to its clients
          since past 4 decades.
        </p>
        <p>
          Wembly is in facility management that allows the businesses to focus
          on their core business which are the primary activity of the
          organization. Wembly ensures productive and safe environment for the
          organization's employees, customers and visitors.
        </p>
        <div>
          OUR CERTIFACATE:
          <br />
          <p
            style={{
              display: "flex",
              alignItems: "space-around",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <span> * Pestcontrol</span>
            <span>* Construction control</span>
            <span> * Fire and Safety.</span>
          </p>
        </div>
        {/* <div className={Style.about}>
          <h1>Contact Us</h1>
          <h5>24a, 28 may street, Baku, Azerbaijan </h5>
          <a href="mailto: abc@example.com">abc@example.com</a>
          <a href="tel:555-666-7777">555-666-7777</a>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
