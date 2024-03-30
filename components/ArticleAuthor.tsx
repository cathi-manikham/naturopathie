"use client";

import { Avatar, HStack, Text } from "@chakra-ui/react";

interface Props {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

export const ArticleAuthor = ({ size }: Props) => {
  return (
    <HStack gap={2}>
      <Avatar size={size} name={"Catherine Manikham"} src={"/profile.jpg"} />
      <Text fontSize={"sm"} color='gray.500' noOfLines={1}>
        Catherine Manikham
      </Text>
    </HStack>
  );
};
