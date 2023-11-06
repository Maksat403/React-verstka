import style from "./header.module.css";
import header_image from "./header_image/IMAGE.png";
import header_image1 from "./header_image/IMAGE (1).png";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerInfo}>
        <p>
          Discover,
          <br /> Nurtur, Bloom
        </p>
        <span>
          Product & Engineering Recruitment
          <br /> va va bloom, , with a human touch and a dash of
        </span>
      </div>
      <div className={style.headerImg}>
        <img className={style.header_image} src={header_image1} alt="" />
        <img className={style.header_image1} src={header_image} alt="" />
      </div>
    </div>
  );
}
