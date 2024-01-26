export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

export function slugify(title: string): string {
  const regex = /[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/g;
  return title.toLowerCase().replace(regex, "").split(" ").join("-");
}

export function decodeSlug(slug: string): string {
  return decodeURIComponent(slug);
}
