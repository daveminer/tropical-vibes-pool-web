// import { Flex, Img, Text } from "@chakra-ui/react";
// import PoolToolWidget from "./PoolToolWidget";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet" />
      <div className={{ position: 'relative' }}>
        <div className={styles.navbar}></div>
        <div className={styles.landing}></div>
        <div className={styles.landingCenter}></div>
        <div className={styles.titleBox}>
          <div>
            <div className={styles.titleTextHeader}>
              Invest in a balanced
            </div>
            <div className={styles.titleText}>
              Open and Sustainable Financial World with Cardano
            </div>
          </div>
          <div className="v2_26">
            <div className="v2_27">
            </div>
            <span className="v2_28"> Delegate Now</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
