export const defaultData = [
  {
    property: "title",
    content: import.meta.env.VITE_APP_TITLE as string,
  },
  {
    property: "og:title",
    content: import.meta.env.VITE_APP_TITLE as string,
  },
  {
    property: "og:description",
    content: import.meta.env.VITE_APP_DESCRIPTION as string,
  },
  {
    property: "og:type",
    content: import.meta.env.VITE_APP_TYPE as string,
  },
];

const setTitle = (title: string) => {
  document.title = title;
};

const setMetadata = (
  metadata: Array<{ property: string; content: string }>
) => {
  if (!metadata) {
    return;
  }

  metadata.forEach(({ property, content }) => {
    if (property === "title") {
      setTitle(content);
    }

    document
      .querySelector(`meta[property="${property}"]`)
      ?.setAttribute("content", content);
  });
};

export default setMetadata;
