"use client";

import {
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
        bg={"green.50"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container py={{ base: 12, md: 24 }} maxW='7xl'>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            <Icon color='green.300' as={RiMentalHealthFill} w={10} h={10} />
          }
          title={"Approche holistique"}
          text={
            "La naturopathie prend en compte tous les aspects de la santé : physique, mentale et émotionnelle..."
          }
        />
        <Feature
          icon={<Icon color='green.300' as={MdEmojiNature} w={10} h={10} />}
          title={"Médecines naturelles"}
          text={
            "Les naturopathes utilisent des remèdes naturels pour soutenir la guérison du corps..."
          }
        />
        <Feature
          icon={<Icon color='green.300' as={MdNaturePeople} w={10} h={10} />}
          title={"Soins individualisés"}
          text={
            "Les traitements sont personnalisés selon l'individu, en considérant son histoire médicale, génétique et son mode de vie...."
          }
        />
      </SimpleGrid>
    </Container>
  );
}
