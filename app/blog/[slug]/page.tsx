import { Metadata } from "next/types";
import { Suspense } from "react";
import { BlogArticle } from "../../../components/BlogArticle";
import NotFoundPage from "../../../components/NotFound";
import { getAllPublished, getSinglePost } from "../../../libs/notion";
import styles from "../../Layout.module.css";
interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPublished();

  if (!posts) return [];

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.slug;

  const data = await getSinglePost(decodeURI(id));

  if (!data?.metadata)
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
    title: data.metadata.title ?? "sans titre",
    description: data.metadata?.description ?? "sans description",
    keywords: data.metadata.tags.flatMap((e) => e.split(",")),
    openGraph: {
      title: data.metadata.title ?? "sans titre",
      type: "article",
      url: `https://naturopathie.vercel.app/blog/${id}`,
      authors: "Catherine Manikham ",
      description: data.metadata.description ?? "sans description",
      images: data.metadata.cover,
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
    <Suspense
      fallback={
        <div className={styles.loading}>
          <div className={styles.loader}></div>
        </div>
      }
    >
      <div>
        <BlogArticle data={post.metadata} markDown={post.markdown} />
      </div>
    </Suspense>
  );
};

export default Page;
