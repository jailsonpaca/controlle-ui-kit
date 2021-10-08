export const argTypes = {
  disabled: {
    control: { type: "boolean" },
  },
  type: {
    options: ["link", "contained", "outlined"],
    control: { type: "radio" },
  },
  icon: {
    control: { type: "text" },
  },
  loading: {
    control: { type: "boolean" },
  },
};
