"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import { NotionArticle } from "../types/notion";
import { RecentArticleCard } from "./RecentArticleCard";

interface Props {
  data: NotionArticle[];
}

export const RecentArticles = ({ data }: Props) => {
  const childRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  if (data.length < 3) return null;

  return (
    <Box
      position='relative'
      boxSizing='border-box'
      mx='auto'
      p={{ base: "24px", md: "32px", lg: "60px" }}
      w='100%'
      maxW='1260px'
      borderRadius='4px'
      bgColor={"gray.50"}
      ref={parentRef}
    >
      <Heading
        fontWeight='bold'
        as='h1'
        fontSize={{ base: "2xl", lg: "4xl" }}
        mb={6}
        color={"gray.600"}
      >
        Articles récents{" "}
      </Heading>

      <Flex
        ref={childRef}
        overflow='scroll'
        flexDirection='row'
        justifyContent='start'
        gap='30px'
      >
        {data.map((article) => (
          <RecentArticleCard key={article.id} data={article} />
        ))}
      </Flex>
    </Box>
  );
};
