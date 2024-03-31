"use client";

import {
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Naturopathie = () => {
  return (
    <Container
      py={{ base: "10", md: "14" }}
      h='fit-content'
      w='100%'
      maxW='7xl'
      overflowX='hidden'
    >
      <Flex
        gap={4}
        w='100%'
        direction='column'
        justify='center'
        align='flex-start'
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
        >
          Qu’est ce que la Naturopathie?
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          La Naturopathie est la
          <b> médecine traditionnelle préventive occidentale</b>, au même titre
          qu’est la Médecine Traditionnelle Chinoise pour la Chine, et
          l’Ayurvéda pour l’Inde. Elle découle notamment de l’enseignement
          d’Hippocrate de Cos, médecin Grec (-460 av. JC, -377 av. JC).
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          L’Organisation Mondiale de la Santé définit la Naturopathie comme « un
          ensemble de méthodes de soins visant à
          <b>renforcer les défenses de l’organisme </b> par des moyens
          considérés comme naturels et biologiques ».
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          L’Association professionnelle de naturopathes qu’est l’OMNES
          (Organisation de la Médecine Naturelle et de l’Education Sanitaire)
          complète cette définition en stipulant que la Naturopathie est{" "}
          <b> « l’art de rester en bonne santé</b> , d’être à nouveau acteur et
          responsable de sa santé et de prendre soin de soi par des moyens
          naturels ».
        </Text>

        {/*           En quoi consiste la pratique?
         */}

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
          mt='12px'
        >
          En quoi consiste la pratique?
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          En Naturopathie, on considère que <b> la norme est la santé</b>, et
          que c’est <b>la force vitale </b> (ou énergie) qui<b>nous anime. </b>{" "}
          C’est elle, qui permet à notre organisme de se défendre et de guérir.
        </Text>

        {/*           Quel est le rôle du naturopathe?
         */}

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
          mt='12px'
        >
          Quel est le rôle du naturopathe?
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Lors du <b>Bilan de Vitalité</b>, le naturopathe évalue votre
          <b> énergie vitale</b>, et met au point une <b>cure</b>, qui vous sera
          personnalisée.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Différentes <b> techniques naturelles</b> s’y inséreront :
        </Text>
        <UnorderedList colorScheme='gray' styleType='-'>
          <ListItem color='gray.500'>
            Les trois piliers : l’alimentation, l’exercice physique, la gestion
            du mental et du stress
          </ListItem>
          <ListItem color='gray.500'>
            Les autres (mais non des moindres) : les techniques respiratoires,
            les techniques manuelles (massages naturopathiques), la
            réflexologie, l’hydrologie, la phytologie / l’aromatologie et les
            techniques vibratoires et énergétiques.
          </ListItem>
        </UnorderedList>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Ces techniques ne sont pas guérisseuses, mais font partie d’une
          <b> boîte à outils</b> que le naturopathe va utiliser{" "}
          <b> en fonction de vos besoins</b> , pour guider votre organisme vers
          l’auto-guérison.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Le naturopathe est <b> éducateur de santé</b>, il explique toujours
          les mécanismes anatomiques et physiologiques qui ont amenés aux
          dérèglements rencontrés, donnant les clés pour <b> comprendre </b>ce
          qui se « joue », se prendre en main et{" "}
          <b> (re)devenir acteur de sa santé</b>.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Si les difficultés que vous rencontrez se trouvent en dehors du champs
          d’application du naturopathe, celui-ci vous orientera vers d’autres
          praticiens compétents.
        </Text>

        {/*           Comment se déroule une consultation avec un naturopathe?
         */}

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
          mt='12px'
        >
          Comment se déroule une consultation avec un naturopathe?{" "}
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          La première séance dure environ une heure trente. Grâce à{" "}
          <b> une analyse morphologique</b> (appréciation des différents volumes
          du corps) <b> et iridologique </b>(analyse des signes des iris), ainsi
          qu’un entretien détaillé, votre <b> bilan de vitalité</b> sera dressé.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Il permettra d’avoir une idée de votre « terrain » (forces et
          faiblesses organiques hérités ou acquises), ainsi que de votre niveau
          d’énergie, afin de <b> vous proposer une cure</b> et mettre en place
          <b> une hygiène de vie qui vous correspond.</b>
        </Text>

        {/*           Pourquoi consulter un naturopathe?
         */}

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
          mt='12px'
        >
          Pourquoi consulter un naturopathe?{" "}
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Toute personne souhaitant faire de la <b>prévention</b> et soucieuse
          de <b> maintenir sa santé</b> peut consulter un naturopathe.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Il vous guidera pour<b> (re)trouver un équilibre</b> selon les
          améliorations que vous cherchez à atteindre. Les maux de votre
          quotidien s’atténueront voire disparaîtront, grâce à la{" "}
          <b> réforme de vie</b>
          qui vous sera proposée.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Les conseils d’un naturopathe ne constituent{" "}
          <p> pas une alternative à un traitement médical.</p>
        </Text>

        {/*           Et après la première séance?
         */}
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          color={"green.400"}
          mt='12px'
        >
          Et après la première séance?{" "}
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          L’objectif est qu’en une séance, vous repartiez avec les{" "}
          <b> outils pour prendre en main votre santé.</b>
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Si vous le souhaitez, une <b>consultation de suivi </b> peut avoir
          lieu (environ une heure), un mois, trois mois ou six mois après la
          première séance, pour faire le point de ce qui a pu être mis en place
          et ce qui peut être amélioré.
        </Text>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Votre bien-être nécessite votre <b>participation active !</b>
        </Text>
      </Flex>
    </Container>
  );
};
