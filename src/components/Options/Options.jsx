import s from "./Options.module.css";

const Options = ({ onClick, total, onReset }) => {
  return (
    <div className={s.optionsWrapper}>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {total ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
};

export default Options;
