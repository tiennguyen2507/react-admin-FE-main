import { useNavigate } from "react-router";

const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignIn = (): void => {
    navigate("/");
  };
  return (
    <div className="sign-in">
      <div>
        <label>usename</label>
        <input id="123" type="text" />
      </div>
      <div>
        <label>password</label>
        <input id="123" type="text" />
      </div>
      <button onClick={onSignIn}>Sign-in</button>
    </div>
  );
};

export default SignIn;
