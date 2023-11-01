import images from "./images/Frame.png";
import style from "./navbar.module.css";

export default function () {
  return (
    <div className={style.navbar}>
      <div className="logo">
        <img src={images} alt="" />
      </div>
      <div className="info">
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
