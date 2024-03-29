import { useEffect } from "react";

import { setMetadata } from "../../utils";

import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const About = () => {
  useEffect(() => {
    setMetadata([
      {
        property: "title",
        content: `About | ${import.meta.env.VITE_APP_TITLE}`,
      },
    ]);
  }, []);

  return (
    <div className={cx("about")}>
      <div className={cx("head")}>
        <h1>About</h1>
      </div>
      <div className={cx("contents")}>
        <p>Hello there, I'm Dain Ham. 👋</p>
        <p>
          I'm a front-end developer. I mainly work with React to develop web
          applications.
        </p>
        <p>
          I'm passionate about creating engaging and interactive web
          experiences. I'm interested in the latest web technologies and trends.
        </p>
        <p>
          I enjoy collaborating to create better software together. So, Let's
          collaborate and create amazing web applications together! 😎
        </p>
      </div>
      <div className={cx("links")}>
        <a
          className={cx("github")}
          href="https://github.com/hdain"
          target="_blank"
          aria-label="hdain's github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;
