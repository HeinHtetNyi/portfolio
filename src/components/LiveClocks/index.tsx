import Clock from "react-live-clock";
import styles from "./styles.module.css";

export default function LiveClock() {
  return (
    <div
      style={{
        display: "flex",
        gap: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
        }}
      >
        {/* <h4>Rangoon: </h4>
        <h3>
          <span className={styles.clock}>
            <Clock
              format="HH:mm:ss"
              interval={1000}
              ticking={true}
              timezone="Asia/Rangoon"
            />
          </span>
        </h3> */}
      </div>
      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
        }}
      >
        <h4>Taipei: </h4>
        <h3>
          <span className={styles.clock}>
            <Clock
              format="HH:mm:ss"
              interval={1000}
              ticking={true}
              timezone="Asia/Taipei"
            />
          </span>
        </h3>
      </div>
    </div>
  );
}
