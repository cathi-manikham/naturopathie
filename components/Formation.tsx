"use client";

import { Colors } from "@/theme/colors";
import { Box, Container, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcAssistant, FcCollaboration, FcDonate, FcManager } from "react-icons/fc";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CardProps {
  heading: string;
  description: Array<string>;
  icon: ReactElement;
  href: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      minH="340px"
      w={"fit-content"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex w={"150px"} h={"110px"} align={"center"} justify={"center"}>
          <Image w="100%" h="100%" objectFit="contain" src={href} alt={"formation_image"} />
        </Flex>
        <Box mt={2}>
          <Heading size="md" maxWidth={200}>
            {heading}
          </Heading>
          {description.map((e, i) => {
            return (
              <Text w="200px" mt={1} fontSize={"sm"} key={i}>
                {e}
              </Text>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default function Formation() {
  return (
    <Container py={{ base: 12, md: 24 }} h="fit-content" w="100%" maxW="7xl">
      <Stack align={"flex-start"} spacing={{ base: 2 }} direction={{ base: "column" }} wrap="wrap" mb="12">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          color={Colors.darkPink400}
        >
          Mes formations
        </Heading>
      </Stack>

      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4500} transitionDuration={600} >
        <Card
          description={[
            "Formation à l’ISUPNAT",
            "Octobre 2021",
            "Obtention de la Certification de Praticien Naturopathe",
          ]}
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          heading={"2018-2021"}
          href={"/formation/2.svg"}
        />
        <Card
          description={["Membre de l’OMNES depuis cette date"]}
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          heading={"Novembre 2021"}
          href={"/formation/4.png"}
        />
        <Card
          description={["Obtention de la Certification de la Féna"]}
          icon={<Icon as={FcDonate} w={10} h={10} />}
          heading={"Décembre 2021"}
          href={"/formation/3.png"}
        />
        <Card
          description={[
            "Formation massages naturopathique drainant & relaxant",
            "Depuis décembre 2021: prestations récurrentes au Centre",
          ]}
          icon={<Icon as={FcManager} w={10} h={10} />}
          heading={"Décembre 2021"}
          href={"/formation/1.jpg"}
        />
        <Card
          description={[
            "Formation massages Drainage manuel de bien-être et Chi Nei Tsang",
            "Obtention de la Certification Praticien en Massages bien-être",
          ]}
          icon={<Icon as={FcManager} w={10} h={10} />}
          heading={"Février 2025"}
          href={"/formation/5.webp"}
        />
      </Carousel>
    </Container>
  );
}
