export const getClassName = (type) =>
  `btnComponent ${(type === "link" || type === "text") && "btnText"}`;

export const getDefaultStyles = (type, style) => ({
  ...((type === "link" || type === "text") && styles.transparent),
  ...style,
});

export const getStyle = (type, textStyle, bgStyle, style) => ({
  ...(type !== "link" && type !== "text" && bgStyle),
  ...((type === "link" || type === "text") && textStyle),
  ...style,
});
