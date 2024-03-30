import { Metadata } from "next/types";
import { ArticlesList } from "../../components/ArticlesList";
import BlogHero from "../../components/BlogHero";
import NotFoundPage from "../../components/NotFound";
import { RecentArticles } from "../../components/RecentArticles";
import { getAllPublished, getIsFeatured } from "../../libs/notion";
import styles from "../Layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/blog"),
  title: "Blog - Catherine Manikham | Naturopathe",
  description: `Découvrez les secrets de la naturopathie pour une vie saine et équilibrée. Des conseils naturels pour nourrir votre bien-être et revitaliser votre corps.`,
  keywords:
    "naturopathie, naturopathie blog, blog, Approche holistique, Médecines naturelles, Soins individualisés,Catherine Manikham, Catherine, Manikham, bien-être, guérison naturelle",
  openGraph: {
    title: "Blog - Catherine Manikham | Naturopathe",
    url: "https://naturopathie.vercel.app/blog",
    type: "website",
    description: `Découvrez les secrets de la naturopathie pour une vie saine et équilibrée. Des conseils naturels pour nourrir votre bien-être et revitaliser votre corps.`,
    images: "/blog.png",
  },
};

export default async function Page() {
  const data = await getAllPublished();
  const featuredArticle = await getIsFeatured();

  if (!data || !featuredArticle) {
    return (
      <div className={styles.layout}>
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <BlogHero data={featuredArticle} />
      <RecentArticles data={data?.slice(1, 6)} />
      <ArticlesList data={data} />
    </div>
  );
}
