"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { NotionArticle } from "../types/notion";
import { BlogArticleMeta } from "./BlogArticleMeta";

interface Props {
  data: NotionArticle;
  markDown: string;
}

export const BlogArticle = ({ data, markDown }: Props) => {
  return (
    <Container minH={"80vh"} py={{ base: 12, md: 20 }} maxW={"800px"}>
      <Flex direction='column'>
        <Button
          size='sm'
          variant={"outline"}
          as={Link}
          href={"/blog"}
          leftIcon={<FaArrowLeftLong size={16} color='black' />}
          iconSpacing={2}
          colorScheme='gray'
          my={2}
          fontWeight={500}
          w='fit-content'
        >
          Tous les articles
        </Button>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          mb='12px'
        >
          {data.title}
        </Heading>
        <BlogArticleMeta data={data} />
      </Flex>
      <Box
        px='4px'
        as={ReactMarkdown}
        remarkPlugins={[remarkGfm]}
        sx={{
          "& > *": {
            padding: "6px 2px",
          },
        }}
      >
        {markDown}
      </Box>
      {data.tags?.length &&
        data.tags.map((tag) => (
          <HStack my='12px' align='center' wrap='wrap' key={tag}>
            <Text fontWeight={700}>Tags:</Text>
            <Tag colorScheme={"pink"}>{tag}</Tag>
          </HStack>
        ))}
    </Container>
  );
};
