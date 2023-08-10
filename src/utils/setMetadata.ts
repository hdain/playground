const setMetadata = (
  metadata: Array<{ property: string; content: string }>
) => {
  if (!metadata) {
    return;
  }

  metadata.forEach(({ property, content }) => {
    document
      .querySelector(`meta[property="${property}"]`)
      ?.setAttribute("content", content);
  });
};

export default setMetadata;
