import "./Display.css";

type Props = {
  value: any;
};

const Display = (props: Props) => {
  return <div className="display">{props.value}</div>;
};

export default Display;
