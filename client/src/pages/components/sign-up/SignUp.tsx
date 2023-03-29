import { ChangeEvent, useCallback, useState } from "react";
import Input from "../../../components/input/Input";
import "./SignUp.scss";
import validation from "../../../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../../services/Api";
import notif from "../../../services/notif";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  userName: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [saveData , setSaveData] = useState<boolean>(false)
  const [loading , setLoading] = useState<boolean>(false)
  const [state, setState] = useState(initialState);
  const [errorlist, setErrorList] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
  });

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
      const error = validation(name, value);
      setErrorList({ ...errorlist, [name]: error });
    },
    [state]
  );
  const onsubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      setLoading(true)
      try {
        await Api.post("/register", { ...state });
        setLoading(false)
        notif("You registerd", 'success');
        navigate("/login");
      } catch (error:any) {
        setLoading(false)
        notif(error.response.data.err.message, "danger");
      }
    },
    [state]
  );
  return (
    <section  className="signUp-container">
      <img className="signUp-logo" src="./assets/logo.png" alt="rapfa" />
      <form onSubmit={onsubmit} className="signUp-box">
        <h2 className="signUp-box-title">Sign up for free account</h2>
        <Input
          onChange={onChangeHandler}
          name="fullName"
          placeholder="Full name"
          width={400}
          style={{ height: "48px" }}
          error={errorlist?.fullName && errorlist?.fullName}
        />
        <Input
          onChange={onChangeHandler}
          name="email"
          placeholder="Email"
          width={400}
          style={{ height: "48px" }}
          error={errorlist?.email && errorlist?.email}
        />
        <Input
          onChange={onChangeHandler}
          name="password"
          placeholder="Password"
          width={400}
          style={{ height: "48px" }}
          error={errorlist?.password && errorlist?.password}
        />
        <Input
          onChange={onChangeHandler}
          name="userName"
          placeholder="Username"
          width={400}
          style={{ height: "48px" }}
          error={errorlist?.userName && errorlist?.userName}
        />
        <p className="signUp-box-text">
          By signing up, you agree to our Term of Use and Privacy Policy
        </p>
        <button
          type="submit"
          className="signUp-box-btn"
          disabled={
            errorlist.email !== undefined ||
            errorlist.fullName !== undefined ||
            errorlist.password !== undefined ||
            errorlist.userName !== undefined
          }
        >
          {loading ? <div className="loading-container"><LoadingIcon width={20} height={20} color={pallet.purple.purple7}/></div> : 'Sign up'}
        </button>
        <p className="signUp-box-text">Have an account?</p>
        <Link to="/login" className="signUp-box-btn2">
          Log in
        </Link>
      </form>
    </section>
  );
};

export default SignUp;
