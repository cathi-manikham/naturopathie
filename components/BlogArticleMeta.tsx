"use client";

import { Box, Circle, Flex, HStack, Text } from "@chakra-ui/react";
import { NotionArticle } from "../types/notion";
import { ArticleAuthor } from "./ArticleAuthor";
import { SocialShare } from "./ShareToSocial";

interface Props {
  data: NotionArticle;
}

export const BlogArticleMeta = ({ data }: Props) => {
  return (
    <Flex
      w='100%'
      pb='8'
      direction='row'
      align='center'
      justify='space-between'
      wrap='wrap'
    >
      <HStack wrap='wrap' marginTop='8px' spacing='4px' alignItems='center'>
        <Box>
          <ArticleAuthor size='xs' />
        </Box>
        <Circle size='4px' bg='gray.200'></Circle>
        <Text fontSize='xs' color='gray.500'>
          {data.date}
        </Text>
      </HStack>
      <SocialShare />
    </Flex>
  );
};
