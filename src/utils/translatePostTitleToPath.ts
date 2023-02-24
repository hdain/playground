const translatePostTitleToPath = (title: string): string => {
  const regex = /[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/g;
  return title.replace(regex, "").split(" ").join("-");
};

export default translatePostTitleToPath;
