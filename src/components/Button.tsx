import "./Button.css";

type Props = {
  operation: boolean;
  double: boolean;
  triple: boolean;
  click: any;
  label: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`
      button 
      ${props.operation ? "operation" : ""} 
      ${props.double ? "double" : ""} 
      ${props.triple ? "triple" : ""}
    `}
      onClick={(e) => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  );
};

export default Button;
