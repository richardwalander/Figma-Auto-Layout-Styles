import * as React from "react";
import styles from "./styles.module.scss";

import Icon from "../Icon";

interface Props {
  className?: any;
  text?: string;
  icon?: string;
  reference?: React.Ref<HTMLButtonElement>;
  type?: string;
  iconWidth?: boolean;
  fullWidth?: boolean;
  lightStyle?: boolean;
  style?: React.CSSProperties;
  onClick?: (e) => void;
  onBlur?: (e) => void;
  onMouseUp?: (e) => void;
  onMouseDown?: (e) => void;
  onFocus?: (e) => void;
  onFileChange?: (e) => void;
}

const Button: React.FunctionComponent<Props> = props => {
  const handleOnFileChange = e => {
    props.onFileChange(e);
  };

  return (
    <button
      onClick={props.onClick}
      onBlur={props.onBlur}
      onMouseUp={props.onMouseUp}
      onMouseDown={props.onMouseDown}
      onFocus={props.onFocus}
      className={`${styles.button} ${props.className} ${
        props.lightStyle ? styles.darkStyle : styles.lightStyle
      }`}
      ref={props.reference}
      style={{
        flex: props.iconWidth && !props.fullWidth ? "0 1 auto" : "1",
        ...props.style
      }}
    >
      {props.type === "file" ? (
        <input
          type="file"
          className={styles.input}
          accept="application/JSON"
          onClick={e => (e.currentTarget.value = null)}
          multiple={false}
          onChange={handleOnFileChange}
        />
      ) : null}
      {props.text ? <span className={styles.text}>{props.text}</span> : null}
      {props.icon ? <Icon className={styles.icon} name={props.icon} /> : null}
    </button>
  );
};

Button.defaultProps = {
  text: null,
  icon: null,
  type: "button",
  iconWidth: false,
  fullWidth: false,
  lightStyle: false,
  style: {}
} as Partial<Props>;

export default Button;
