import "./styles.css";
import image from "./fresh.jpg";
import { FaGoogle, FaFacebook, FaTwitter, FaReddit } from "react-icons/fa";

const RightContent = () => (
  <img src={image} alt="signIn" className="flex-right" />
);

const Button = (props) => (
  <button className={props.isLight ? "light" : "solid"}>{props.text}</button>
);

function Terms() {
  return (
    <div>
      <input type="checkbox" id="terms" />
      <label> I agree to the Terms and Privacy Policy.</label>
    </div>
  );
}

function FormField(props) {
  return (
    <div>
      <input
        className="form-item"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

function Form() {
  return (
    <div>
      <FormField placeholder="Name" />
      <FormField placeholder="Email" />
      <FormField placeholder="Password" />
    </div>
  );
}

function Registration() {
  return <p className="registration">or use your email for registration:</p>;
}

function Icons() {
  return (
    <>
      <div className="icon">
        <FaGoogle />
      </div>
      <div className="icon">
        <FaFacebook />
      </div>
      <div className="icon">
        <FaTwitter />
      </div>
      <div className="icon">
        <FaReddit />
      </div>
    </>
  );
}

function Header() {
  return (
    <div>
      <h1 className="header">Create Account</h1>
      <Icons />
      <Registration />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="flex-left">
      <Header />
      <Form />
      <Terms />
      <Button text="Sign Up" />
      <Button text="Sign In" isLight />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
