"use client";

import { useState, useCallback } from "react";

import { useRouter } from "next/navigation";

import { signIn } from "@/lib/firebase/auth";

import styles from "@/styles/components/layout/login-form.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function LoginForm() {
  const router = useRouter();
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { result, error } = await signIn(values.email, values.password);

      if (error) {
        alert(`Invalid email or password ${error}`);
        return;
      }

      console.log("success login", result);
      return router.back();
    },
    [values]
  );

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
}
