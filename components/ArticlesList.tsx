"use client";

import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { NotionArticle } from "../types/notion";
import { ArticleCard } from "./ArticleCard";

interface Props {
  data: NotionArticle[];
}

export const ArticlesList = ({ data }: Props) => {
  return (
    <Container maxW={"7xl"} p={{ base: "4", md: "8", lg: "12" }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", lg: "4xl" }}
        color={"gray.600"}
        mb={4}
      >
        Tous les articles
      </Heading>
      <Divider mb={12} />
      <SimpleGrid
        gridAutoRows='1fr'
        columns={{ base: 1, sm: 2, md: 3 }}
        gap='46px'
        justifyContent='stretch'
      >
        {data.map((article) => (
          <ArticleCard key={article.slug} data={article} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
