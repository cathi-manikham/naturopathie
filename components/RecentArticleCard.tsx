"use client";

import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import useIsHovered from "../hooks/useIsHovered";
import { NotionArticle } from "../types/notion";
import { ScalingImage } from "./ScalingImage";

interface Props {
  data: NotionArticle;
}

export const RecentArticleCard = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const isHovered = useIsHovered(ref);

  return (
    <Link href={`/blog/${data.slug}`}>
      <VStack align='flex-start' w={"200px"} h='auto' spacing='12px'>
        <ScalingImage src={data.cover} isParentHovered={isHovered} />
        <Text
          fontWeight={600}
          noOfLines={2}
          overflowWrap='anywhere'
          as='h5'
          fontSize='md'
          color='blackAlpha.800'
        >
          {data.title}
        </Text>
      </VStack>
    </Link>
  );
};
