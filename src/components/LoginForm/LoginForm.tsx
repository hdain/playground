import styles from "./LoginForm.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      sessionStorage.setItem("email", values.email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={cx("login-form")} onSubmit={handleSubmit} method="POST">
      <div className={cx("form-control")}>
        <label htmlFor="email">ID</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className={cx("form-control")}>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div className={cx("btn-wrap")}>
        <button type="submit">LOGIN</button>
      </div>
    </form>
  );
};

export default LoginForm;
