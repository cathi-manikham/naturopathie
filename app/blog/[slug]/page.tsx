import { Metadata } from "next/types";
import { BlogArticle } from "../../../components/BlogArticle";
import NotFoundPage from "../../../components/NotFound";
import { getAllPublished, getSinglePost } from "../../../libs/notion";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPublished();

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.slug;

  const { metadata } = (await getSinglePost(decodeURI(id))) || {};

  if (!metadata)
    return {
      metadataBase: new URL(`https://naturopathie.vercel.app/blog/${id}`),
      title: "sans titre",
      description: "sans description",
      keywords: ["Blog", "naturopathie, ", "Catherine Manikham"],
      openGraph: {
        title: "sans titre",
        type: "article",
        url: `https://naturopathie.vercel.app/blog/${id}`,
        authors: "Catherine Manikham ",
        description: "sans description",
        images: [],
      },
    };

  return {
    metadataBase: new URL(`https://naturopathie.vercel.app/blog/${id}`),
    title: metadata.title ?? "sans titre",
    description: metadata.description ?? "sans description",
    keywords: metadata.tags.flatMap((e) => e.split(",")),
    openGraph: {
      title: metadata.title ?? "sans titre",
      type: "article",
      url: `https://naturopathie.vercel.app/blog/${id}`,
      authors: "Catherine Manikham ",
      description: metadata.description ?? "sans description",
      images: metadata.cover,
    },
  };
}

const Page = async ({ params }: Props) => {
  const post = await getSinglePost(decodeURI(params.slug));

  if (!post) {
    return (
      <div>
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div>
      <BlogArticle data={post.metadata} markDown={post.markdown} />
    </div>
  );
};

export default Page;
