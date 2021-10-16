import "./Display.css";

type Props = {
  value: string;
};

const Display = (props: Props) => {
  return <div className="display">{props.value}</div>;
};

export default Display;
