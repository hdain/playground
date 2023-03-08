const slugify = (title: string): string => {
  const regex = /[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/g;
  return title.toLowerCase().replace(regex, "").split(" ").join("-");
};

export default slugify;
