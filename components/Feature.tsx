"use client";

import { Colors } from "@/theme/colors";
import { Container, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { MdEmojiNature, MdNaturePeople } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={Colors.lightPink50}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: "sm", md: "md", lg: "lg" }}>{title}</Text>
      <Text color={"gray.600"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container py={{ base: 12, md: 24 }} maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon color={Colors.darkPink300} as={MdEmojiNature} w={10} h={10} />}
          title={"Médecine traditionnelle occidentale"}
          text={
            "La prévention est le leitmotiv de la naturopathie. Le retour à une hygiène de vie simple est garant d’une bonne santé. Le naturopathe insère dans la cure proposée des moyens naturels pour soutenir l’organisme."
          }
        />
        <Feature
          icon={<Icon color={Colors.darkPink300} as={RiMentalHealthFill} w={10} h={10} />}
          title={"Approche holistique"}
          text={
            "La naturopathie prend en compte tous les aspects de la santé : physique, mentale, émotionnelle, et spirituelle. Elle considère l’individu comme un tout, où chacune de ces quatre dimensions ne peut être abordée séparément les unes des autres."
          }
        />
        <Feature
          icon={<Icon color={Colors.darkPink300} as={MdNaturePeople} w={10} h={10} />}
          title={"Individualisation"}
          text={
            "Les cures sont personnalisées selon l’individu, en considérant son histoire, ses antécédents, et son mode de vie."
          }
        />
      </SimpleGrid>
    </Container>
  );
}
