import xLogo from "../assets/X_logo_2023_original.svg";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="main">
      <div className="left">
        <img src={xLogo} alt="" />
      </div>
      <div className="right">
        <h1 className="heading">Happening now</h1>
        <h3>Join today.</h3>
        <div>
          <div className="gLogin"></div>
          <div className="aLogin"></div>
        </div>
        <div>
          <hr />
          <span>or</span>
          <hr />
        </div>
        <button>Create account</button>
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <div>
          <p>Already have an account?</p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
}
