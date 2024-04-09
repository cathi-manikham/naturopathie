"use client";

import { Colors } from "@/theme/colors";
import {
  Box,
  Image as ChakraImage,
  Circle,
  Container,
  Heading,
  HStack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { NotionArticle } from "../types/notion";
import { ArticleAuthor } from "./ArticleAuthor";

interface Props {
  data: NotionArticle;
}

const BlogHero = ({ data }: Props) => {
  const descriptionColor = useColorModeValue("gray.700", "gray.200");
  const gradientColor = useColorModeValue(
    `radial(${Colors.darkPink600} 1px, transparent 1px)`,
    `radial(${Colors.darkPink500} 1px, transparent 1px)`
  );
  if (!data || typeof data === "undefined") {
    return null;
  }

  return (
    <Container maxW={"7xl"} py='12'>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display='flex'
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent='space-between'
        as={Link}
        href={`/blog/${data.slug}`}
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex='2'
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop='5%'
          >
            <Box textDecoration='none' _hover={{ textDecoration: "none" }}>
              <ChakraImage
                borderRadius='lg'
                src={data.cover}
                alt='hero_image'
                objectFit='contain'
              />
            </Box>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={gradientColor}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: "3", sm: "0" }}
        >
          {data.tags?.length !== 0 && (
            <HStack>
              <Tag colorScheme={"pink"}>{data.tags[0]}</Tag>
            </HStack>
          )}
          <Heading fontSize={{ base: "3xl", lg: "4xl" }} marginTop='1'>
            <Text textDecoration='none' _hover={{ textDecoration: "none" }}>
              {data.title}
            </Text>
          </Heading>
          {data.description && (
            <Text
              as='p'
              marginTop='2'
              noOfLines={3}
              color={descriptionColor}
              fontSize={{ base: "md", lg: "lg" }}
            >
              {data.description}
            </Text>
          )}
          <HStack wrap='wrap' marginTop='8px' spacing='4px' alignItems='center'>
            <Box>
              <ArticleAuthor size='xs' />
            </Box>
            <Circle size='4px' bg='gray.200'></Circle>
            <Text fontSize='xs' color='gray.500'>
              {data.date}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogHero;
