"use client";

import { Colors } from "@/theme/colors";
import { Box, BoxProps, Container, Flex, Heading, keyframes, Stack, Text, VStack } from "@chakra-ui/react";

export const Biography = () => {
  return (
    <Container h="fit-content" w="100%" maxW="7xl">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 24 }}
        direction={{ base: "column", xl: "row" }}
        wrap="wrap"
      >
        <Stack justify="center" align="start" flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            color={Colors.darkPink400}
          >
            Qui suis-je?
          </Heading>
          <VStack spacing={2} align="start">
            <Text color={"gray.500"}>
              Je travaille depuis une dizaine d’année dans le commerce international. Dès mes premiers pas dans le monde
              du travail, j’ai eu la sensation qu’il me manquait quelque chose pour me sentir totalement épanouie.
            </Text>
            <Text color={"gray.500"}>
              2017 est l’année qui a marqué le début de ma quête de sens. Après avoir pris une année sabbatique à
              voyager de l’autre côté du globe,
              <b>
                c’est loin de mes repères que j’ai réalisé que je voulais passer le reste de mes jours à faire quelque
                chose qui me fasse vibrer.
              </b>
            </Text>
            <Text color={"gray.500"}>
              Jusqu’ici je n’avais jamais songé à transformer et combiner ma passion pour les lectures de santé
              naturelle et mon envie d’aider les autres, en une réalité dont je serai fière.
              <b>La Naturopathie était devenue une évidence.</b>
            </Text>
            <Text color={"gray.500"}>
              {" "}
              A mon retour en France, je me suis inscrite à <b>l’ISUPNAT</b> (Institut Supérieur de Naturopathie) membre
              de la <b>FENA</b> (Fédération Française de Naturopathie). Ma formation a duré un week-end sur deux pendant
              trois ans. Ce temps m’a permis de <b>faire l’expérience de ce que j’apprenais en cours </b>, et de mettre
              en place des outils dans mon mode de vie pour <b>prendre soin de moi et de ma santé.</b>
            </Text>
            <Text color={"gray.500"}>
              <b>Les divers petits maux qui ponctuaient mon quotidien ont disparu depuis</b>: éternuements et nez
              encombré tous les matins, maux de gorge récurrents, inconforts digestifs presque tous les jours,
              hypoglycémie réactionnelle dès que je ne mangeais pas à des heures précises, cystites, piqûres de
              moustiques en été, réactions cutanées dès exposition au soleil même avec une crème solaire indice 50,
              rhumes et/ou gastro systématiques en hiver, acné dans le dos, etc.
            </Text>
            <Text color={"gray.500"}>
              Aujourd’hui{" "}
              <b>
                titulaire d’un certificat de Naturopathe, mon objectif est de mettre à profit mes connaissances, pour
                vous guider sur le chemin de la santé!
              </b>
            </Text>
          </VStack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"} mt="40px">
          <Blob />
        </Flex>
      </Stack>
    </Container>
  );
};

const animate = keyframes`
    0%, 100%{
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50%{
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
`;

const Blob = (props: BoxProps) => {
  return (
    <Box
      {...props}
      backgroundImage={`url(/profile.jpg)`}
      width={{ base: "280px", md: "380px", lg: "500px" }}
      height={{ base: "280px", md: "380px", lg: "600px" }}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      margin={"20px"}
      boxShadow={"0 5px 5px 5px #F0FFF4"}
      animation={`${animate} 5s ease-in-out infinite`}
      transition={"all 1s ease-in-out"}
    ></Box>
  );
};
