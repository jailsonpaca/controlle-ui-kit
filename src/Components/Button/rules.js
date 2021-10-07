import styles from "./styles";

export const getClassName = (type, className) =>
  `btnComponent ${
    (type === "link" || type === "text") && "btnText"
  } ${className}`;

export const getDefaultStyles = (type, disabled, style) => ({
  ...((type === "link" || type === "text") && styles.transparent),
  ...(disabled && styles.disabled),
  ...style,
});

export const getStyle = (type, textStyle, bgStyle, style) => ({
  ...(type !== "link" && type !== "text" && bgStyle),
  ...((type === "link" || type === "text") && textStyle),
  ...style,
});
