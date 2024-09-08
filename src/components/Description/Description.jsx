import s from "./Description.module.css";
import { SiBuymeacoffee } from "react-icons/si";

const Description = () => {
  return (
    <div className={s.wrapper}>
      <h1>
        Sip <span>Happens</span> Café <SiBuymeacoffee className={s.cup} />
      </h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
