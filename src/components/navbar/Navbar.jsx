import images from "./images/Frame.png";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={images} alt="" />
      </div>
      <div className={style.info}>
        <ul>
          <li>Grow your career</li>
          <li>Build a team</li>
          <li>Meet a founders</li>
          <li>Mentoship</li>
          <li>Say hello</li>
        </ul>
      </div>
    </div>
  );
}
