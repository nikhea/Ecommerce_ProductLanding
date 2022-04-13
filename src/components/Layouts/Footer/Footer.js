import style from "./styles/footer.module.css";
import React, { useState } from "react";
import { footerData } from "./Footerdata";
import FooterItem from "./FooterItem";

const Footer = () => {
  const [placeholder, setPlaceholder] = useState("Your email");
  const footername = (
    <div className={style.footer__grid}>
      {footerData.map((data, index) => (
        <div className={style.footer__content} key={index}>
          <div className={style.content__title}>{data.name}</div>
          <FooterItem data={data} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__form}>
          <h1 className={style.form__title}>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" required placeholder={placeholder} />
            <button>search</button>
          </form>
        </div>
        {footername}
      </div>
    </div>
  );
};

export default Footer;
