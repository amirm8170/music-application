import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";
import Api from "../../../services/Api";
import validation from "../../../utils/validation";
import { setAuth, setId } from "../../../redux/authSlice";
import "./Login.scss";
import notif from "../../../services/notif";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";

const initialState = {
  fullName: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: any) => state.auth);
  const [saveData, setSaveData] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState(initialState);
  const [errorList, setErrorList] = useState<{fullName:string,password:string}>({ fullName: "", password: "" });
  const navigate = useNavigate();
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
      const error = validation(name, value);
      setErrorList({ ...errorList, [name]: error });
    },
    [state]
  );
  useEffect(()=>{
    const fName = localStorage.getItem("fullName");
    const pass = localStorage.getItem("password");
    if(fName && pass){
      setState({fullName:fName , password:pass})
    }
  },[])

  const setTokenValue = useCallback(
    (res: any) => {
      const { accessToken, id } = res.data;
      Cookies.set("Token", accessToken);
      Cookies.set("id", id);
      dispatch(setAuth(accessToken));
      dispatch(setId(id));
    },
    [dispatch]
  );
  const onSubmitHandler = useCallback(
    async (e: any) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await Api.post("/login", { ...state });
        console.log(saveData)
        if (saveData) {
          console.log('ok')
          localStorage.setItem("fullName", state.fullName);
          localStorage.setItem("password", state.password);
        }
        setLoading(false);
        setTokenValue(response);
        navigate("/");
      } catch (error: any) {
        setLoading(false);
        notif(error.response.data.err.message, "danger");
      }
    },
    [state,saveData]
  );
  const saveDataHandler = useCallback(
    (e: any) => {
      setSaveData(e.target.checked);
    },
    [saveData]
  );
  console.log(saveData)
  return (
    <section className="login-container">
      <img className="login-logo" src="./assets/logo.png" alt="rapfa" />
      <form onSubmit={onSubmitHandler} className="login-box">
        <h2 className="login-box-title">To continue, log in to Rapfa </h2>
        <Input
          onChange={onChangeHandler}
          name="fullName"
          value={state.fullName}
          placeholder="Full name"
          width={400}
          style={{ height: "48px" }}
          error={errorList.fullName && errorList.fullName}
        />
        <Input
          onChange={onChangeHandler}
          value={state.password}
          name="password"
          placeholder="Password"
          width={400}
          style={{ height: "48px" }}
          error={errorList.password && errorList.password}
        />
        <Link to="/" className="login-box-text selfStart">
          Forget your password?
        </Link>
        <div className="login-rememberbox-container">
          <input
            className="login-checkBox"
            type="checkbox"
            onChange={saveDataHandler}
          />
          <span className="login-checkBox-text">Remember me</span>
        </div>
        <button type="submit" className="login-box-btn">
          {loading ? (
            <div className="loading-container">
              <LoadingIcon
                width={20}
                height={20}
                color={pallet.purple.purple7}
              />
            </div>
          ) : (
            "Log in"
          )}
        </button>
        <p className="login-box-text">Don’t have an account?</p>
        <Link to="/sign-up" className="login-box-btn2">
          Sign up
        </Link>
      </form>
    </section>
  );
};

export default Login;
