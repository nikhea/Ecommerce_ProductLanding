import style from "./styles/footer.module.css";
import Link from "next/link";

const footerItem = ({ data: { links } }) => {
  const footerLink = () => (
    <div className={style.footerItem}>
      {links.map((data, index) => (
        <Link href={data.href} key={index} className={style.footerItem__link}>
          {/* <a className={style.footerItem__link} > */}
          {data.title}
          {/* </a> */}
        </Link>
      ))}
    </div>
  );
  return <div>{footerLink()}</div>;
};

export default footerItem;
