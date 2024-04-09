"use client";

import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import useIsHovered from "../hooks/useIsHovered";
import { NotionArticle } from "../types/notion";
import { ArticleAuthor } from "./ArticleAuthor";
import { ScalingImage } from "./ScalingImage";

interface Props {
  data: NotionArticle;
}
export const ArticleCard = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useIsHovered(ref);
  return (
    <Link href={`/blog/${data.slug}`}>
      <VStack
        ref={ref}
        gap='12px'
        w={"100%"}
        h={"100%"}
        align='start'
        justify='stretch'
      >
        <ScalingImage src={data.cover} isParentHovered={isHovered} />
        <Flex
          direction='row'
          gap='6px'
          w='100%'
          h='fit-content'
          align='center'
          justify='flex-start'
        >
          {data.tags?.length !== 0 && (
            <HStack wrap='wrap'>
              <Tag size='sm' colorScheme={"pink"}>
                {data.tags[0]}
              </Tag>
            </HStack>
          )}
          <Circle size='4px' bg='gray.200'></Circle>
          <Text fontSize='xs' color='gray.500'>
            {data.date}
          </Text>
        </Flex>
        <Heading
          as='h1'
          fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
          lineHeight={1.2}
          fontWeight='bold'
          color='blackAlpha.800'
          noOfLines={2}
        >
          {data.title}
        </Heading>
        <Text
          noOfLines={3}
          color='blackAlpha.600'
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          {data.description}
        </Text>
        <Box mt='4px'>
          <ArticleAuthor size='xs' />
        </Box>
      </VStack>
    </Link>
  );
};
