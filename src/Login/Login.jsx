import xLogo from "../assets/X_logo_2023_original.svg";
export default function Login() {
  return (
    <div>
      <img src={xLogo} alt="" />
      <h3>Sign in to X</h3>
      <div>
        <div className="gLogin"></div>
        <div className="aLogin"></div>
      </div>
      <div>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Email or username" />
          <input type="password" placeholder="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button>Forgot password?</button>
      </div>
      <div>
        <button>
          {"Don't"} have an account? <a href="">Sign up</a>
        </button>
      </div>
    </div>
  );
}
