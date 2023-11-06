import style from "./footer.module.css";
import brand1 from "./footer_images/img1.svg";
import brand2 from "./footer_images/img2.svg";
import brand3 from "./footer_images/img3.svg";
import brand4 from "./footer_images/img4.svg";
import brand5 from "./footer_images/img5.svg";
import brand6 from "./footer_images/img6.svg";
import fLogo from "./footer_images/Google icon.svg";
import stars from "./footer_images/Rating.svg";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.brends}>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
      </div>
      <div className={style.footerEnd}>
        <div className={style.raiting}>
          <div>
            <img src={fLogo} alt="" />
          </div>
          <div className={style.star}>
            <div className={style.grade}>
              <div className={style.gradeP}>
                <p>5.0</p>
              </div>
              <div className={style.gradeI}>
                <img src={stars} alt="" />
              </div>
            </div>
            <p>Based on 106 reviews</p>
          </div>
        </div>

        <div className={style.footerText}>
          <div className="txtleft">
            <p>
              Grow your career <br />
              Build a team
            </p>
          </div>
          <div className="txtRight">
            <p>Meet the founders</p>
            <p>Mentorship</p>
            <p>Say hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
