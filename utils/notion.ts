import { NotionArticle } from "../types/notion";

export const getPageMetaData = (post: any): NotionArticle => {
  const getTags = (tags: Array<any>) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    cover: getCover(post.cover),
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.description?.rich_text[0]?.plain_text,
    date: getToday(post.properties.Created.created_time),
    slug: post.properties.slug.formula.string,
  };
};

export function getToday(dateString: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (dateString) {
    date = new Date(dateString);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}

export function getCover(cover: any) {
  if (!cover) return "/no-image.png";
  switch (cover.type) {
    case "file":
      return cover.file.url;

    case "external":
      return cover.external.url;

    default:
      return "/no-image.png";
  }
}
