import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h3>Sign In</h3>
        <p>Enter your email & password to login</p>
        <div className="text-feild">
          <label htmlFor="email">Email Address</label>
          <TextField id="outlined-size-small" size="small" />
        </div>
        <br />
        <div className="text-feild">
          <label htmlFor="password">Password</label>
          <TextField id="outlined-size-small" size="small" />
        </div>
        <div className="checkbox-forget">
          <label htmlFor="remember" className="check-box">
            <input type="checkbox" />
            Remember password
          </label>
          <p>Forgot password?</p>
        </div>
        <Button variant="contained" sx={{ marginLeft: "1rem" }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
