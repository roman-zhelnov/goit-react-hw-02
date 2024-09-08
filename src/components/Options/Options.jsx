import s from "./Options.module.css";
import { AiOutlineSmile } from "react-icons/ai";
import { PiSmileyNervous } from "react-icons/pi";
import { PiSmileyAngry } from "react-icons/pi";
import { RxReset } from "react-icons/rx";

const Options = ({ onClick, total, onReset }) => {
  return (
    <div className={s.optionsWrapper}>
      <button onClick={() => onClick("good")}>
        Good <AiOutlineSmile />
      </button>
      <button onClick={() => onClick("neutral")}>
        Neutral <PiSmileyNervous />
      </button>
      <button onClick={() => onClick("bad")}>
        Bad <PiSmileyAngry />
      </button>
      {total ? (
        <button onClick={onReset}>
          Reset
          <RxReset />
        </button>
      ) : null}
    </div>
  );
};

export default Options;
