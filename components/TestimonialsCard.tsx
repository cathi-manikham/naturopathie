"use client";

import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  review: string;
  name: string;
  date: string;
  heading: string;
}

export default function TestimonialsCard({
  review,
  name,
  date,
  heading,
}: Props) {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      h='100%'
      align={"center"}
      justify='center'
      direction={"column"}
      borderRadius='8px'
    >
      <Heading fontSize={{ base: "2xl", md: "4xl" }} as={"h3"}>
        {heading}
      </Heading>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        {review}
      </Text>
      <Box textAlign={"center"}>
        <Avatar name={name} mb={2} />

        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          {date}
        </Text>
      </Box>
    </Stack>
  );
}
