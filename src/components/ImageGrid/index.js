import Image from "next/image";
import styles from "./styles/images.module.css";
import {
  GridMenOne,
  GridMenTwo,
  GridMenThree,
  GridWomenOne,
  GridWomenTwo,
  GridWomenThree,
} from "./images";
const ImageGrid = () => {
  // const grid = [
  //   GridMenOne,
  //   GridMenTwo,
  //   GridMenThree,
  //   GridWomenOne,
  //   GridWomenTwo,
  //   GridWomenThree,
  // ];
  return (
    <div className={styles.Imagegrid}>
      <div className={styles.ItemFlex}>
        <div className={styles.container}>
          <h1>best online store</h1>
          <Image
            src={GridWomenOne}
            alt={GridWomenOne.src}
            title={GridWomenOne.src}
            className={styles.img}
          />
        </div>

        <div className={styles.container}>
          <h1>top sellers</h1>
          <Image
            src={GridWomenThree}
            alt={GridWomenThree.src}
            title={GridWomenThree.src}
            className={styles.img}
          />
        </div>
      </div>

  {/* <div className={styles.I}> */}
  <div className={styles.container}>
        <h1>best collection</h1>
        <Image
          className={styles.img}
          src={GridWomenTwo}
          alt={GridWomenTwo.src}
          title={GridWomenTwo.src}
        />
      </div>
  {/* </div> */}
      {/* <div className={styles.ItemFlex}>
        <div className={styles.container}>
          <h1>best online store</h1>
          <Image
            src={GridMenThree}
            alt={GridMenThree.src}
            title={GridMenThree.src}
            className={styles.img}
          />
        </div>

        <div className={styles.container}>
          <h1>top sellers</h1>
          <Image
            src={GridMenTwo}
            alt={GridMenTwo.src}
            title={GridMenTwo.src}
            className={styles.img}
          />
        </div>
      </div> */}
    </div>
  );
};
// {grid.map((img, index) => (
//   <div key={index} style={{width: '100px'}}>
//       <Image src={img.src} alt={img.src} height={img.height} width={img.width} blurDataURL={img.blurDataURL}/>
//   </div>
// ))}
export default ImageGrid;

<div className={styles.ItemFlex}>
  <div className={styles.container}>
    <Image
      src={GridWomenOne}
      alt={GridWomenOne.src}
      title={GridWomenOne.src}
      className={styles.img}
    />
  </div>

  <div className={styles.container}>
    <Image
      src={GridWomenThree}
      alt={GridWomenThree.src}
      title={GridWomenThree.src}
      className={styles.img}
    />
  </div>
</div>;
