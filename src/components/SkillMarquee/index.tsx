import Marquee from "react-fast-marquee";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function SkillMarquee() {
  return (
    <div>
      <Marquee autoFill={true} delay={1} speed={50} pauseOnClick={true}>
        <img
          src={useBaseUrl("/skills/python.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/java.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/java-script.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/typescript.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/sql.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/web.png")}
          width={30}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
      </Marquee>
    </div>
  );
}
