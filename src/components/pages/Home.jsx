import "./home.css";
import Navbar from "../navBar/navbar";
import Logo from "../../assets/newLogo.png";
import ProfilePic from "../../assets/profilePic.png";
import icons from "../../assets/icons.png";

const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="picContainer">
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic" />
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <h1 className="about">HI, I'm Garrett.</h1>
      <h2 className="aboutSub">
        I’m a digital designer and front-end developer. I specialize in React
        and web UI design. I know a vast amount of coding languages. Take a look
        at my portfolio to see my past projects. For fun I also create 3D hard
        surface assets, shoot photography and cook gourmet dishes.
      </h2>
      <h3 className="aboutSubTwo">
        Take a look at the different languages I’ve learned below!
      </h3>
      <div>
        <img src={icons} alt="icons" className="icons" />
      </div>
    </div>
  );
};
export default Home;
