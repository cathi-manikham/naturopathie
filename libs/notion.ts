"use server";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionArticle } from "../types/notion";
import { getPageMetaData } from "../utils/notion";
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
});

export const getAllPublished = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Notion-Version", "2022-02-22");

    const raw = JSON.stringify({
      filter: {
        or: [
          {
            property: "isPublished",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    const res = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",

        next: { revalidate: 60 },
      }
    );
    const posts: { results: NotionArticle[] } = await res.json();

    const allPosts = posts.results;

    return allPosts?.map((post: any) => {
      return getPageMetaData(post);
    });
  } catch (error) {
    if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const getIsFeatured = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Notion-Version", "2022-02-22");

    const raw = JSON.stringify({
      filter: {
        or: [
          {
            property: "isFeatured",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    const res = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",

        next: { revalidate: 60 },
      }
    );
    const posts: { results: NotionArticle[] } = await res.json();

    const featuredPost = posts.results[0];

    return getPageMetaData(featuredPost);
  } catch (error) {
    if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getSinglePost = async (slug: string) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Notion-Version", "2022-02-22");

    const raw = JSON.stringify({
      filter: {
        or: [
          {
            property: "slug",
            formula: {
              string: {
                contains: slug,
              },
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    const res = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",

        next: { revalidate: 60 },
      }
    );

    const posts: { results: NotionArticle[] } = await res.json();

    const page = posts.results[0];

    const metadata = getPageMetaData(page);
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    return {
      metadata,
      markdown: mdString.parent,
    };
  } catch (error) {
    if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      console.log(error);
    }
  }
};
