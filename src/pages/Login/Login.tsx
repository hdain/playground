import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { LoginForm } from "../../components";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx("login")}>
      <LoginForm />
    </div>
  );
};

export default Login;
