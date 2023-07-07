import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("home")}>
      <h1>
        Hi, I'm Dain,
        <br />A Front-End Developer.
      </h1>
      <p>
        Welcome to my playground. This is my personal blog where I share what
        I'm learning about web technologies, becoming a better developer and
        growing a career in tech.
      </p>
      <span className={cx("tag")}>@daaaa__in</span>
      <div className={cx("circle-area")}>
        <svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text>
            <textPath xlinkHref="#circle">
              WELCOME TO DAIN'S PLAYGROUND-! WELCOME TO DAIN'S PLAYGROUND-!
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Home;
