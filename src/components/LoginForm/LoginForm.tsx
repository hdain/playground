import styles from "./LoginForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginForm = () => {
  return (
    <form className={cx("login-form")}>
      <div className={cx("form-control")}>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" />
      </div>
      <div className={cx("form-control")}>
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" />
      </div>
      <div className={cx("btn-wrap")}>
        <button>LOGIN</button>
      </div>
    </form>
  );
};

export default LoginForm;
