import LoginForm from "@/components/layout/login-form";

import styles from "@/styles/pages/login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Login() {
  return (
    <div className={cx("login")}>
      <LoginForm />
    </div>
  );
}
