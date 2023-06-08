import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("head")}>
        <h3>About</h3>
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
    </div>
  );
};

export default About;
