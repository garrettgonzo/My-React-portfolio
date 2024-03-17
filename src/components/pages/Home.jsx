import "./home.css";
import Navbar from "../navBar/navbar";
import Logo from "../../assets/newLogo.png";
import ProfilePic from "../../assets/profilePic.png";

const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="picContainer">
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic" />
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <h1 className="about">HI Im Garrett.</h1>
      <h2 className="aboutSub">
        Im a react developer in that does react, node and other stuff. I also
        create 3D assets, photography and edit videos. Im a cool guy and im
        monke.
      </h2>
    </div>
  );
};
export default Home;
