import { Metadata } from "next/types";
import { BlogArticle } from "../../../components/BlogArticle";
import { getAllPublished, getSinglePost } from "../../../libs/notion";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPublished();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.slug;

  const { metadata } = await getSinglePost(decodeURI(id));

  return {
    title: metadata.title ?? "sans titre",
    description: metadata.description ?? "sans description",
    keywords: metadata.tags.flatMap((e) => e.split(",")),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: metadata.cover ?? "https://via.placeholder.com/800x400",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const Page = async ({ params }: Props) => {
  const post = await getSinglePost(decodeURI(params.slug));

  return (
    <div>
      <BlogArticle data={post.metadata} markDown={post.markdown} />
    </div>
  );
};

export default Page;
