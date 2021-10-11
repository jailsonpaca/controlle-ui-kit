export const getSizeByParam = (size) => {
  switch (size) {
    case "small":
      return { width: 443 };
    case "medium":
      return { width: 483 };
    default:
      return { width: 703 };
  }
};
