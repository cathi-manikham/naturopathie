import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionArticle } from "../types/notion";
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
});

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "",
    filter: {
      property: "isPublished",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

export const getIsFeatured = async (): Promise<NotionArticle> => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "",
    filter: {
      property: "isFeatured",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });

  const featuredPost = posts.results[0];

  return getPageMetaData(featuredPost);
};

const getPageMetaData = (post: any): NotionArticle => {
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

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "",
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];

  const metadata = getPageMetaData(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    metadata,
    markdown: mdString.parent,
  };
};

function getToday(dateString: Date) {
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
