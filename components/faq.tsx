"use client";

import { Colors } from "@/theme/colors";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export const FAQ = () => {
  return (
    <Container py={{ base: 12, md: 16 }} maxW='7xl'>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        color={Colors.darkPink400}
        mb='32px'
      >
        Questions fréquemment posées
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                Qu’est ce que la Naturopathie?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              La Naturopathie est la médecine traditionnelle préventive
              occidentale, au même titre qu’est la Médecine Traditionnelle
              Chinoise pour la Chine, et l’Ayurvéda pour l’Inde. Elle découle
              notamment, de l’enseignement d’Hippocrate de Cos, médecin Grec
              (-460 av. JC, -377 av. JC).
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              L’Organisation Mondiale de la Santé définit la Naturopathie comme
              « un ensemble de méthodes de soins visant à renforcer les défenses
              de l’organisme par des moyens considérés comme naturels et
              biologiques ».
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              L’Association professionnelle de naturopathes qu’est l’OMNES
              (Organisation de la Médecine Naturelle et de l’Education
              Sanitaire) complète cette définition en stipulant que la
              Naturopathie est « l’art de rester en bonne santé, d’être à
              nouveau acteur et responsable de sa santé et de prendre soin de
              soi par des moyens naturels ».
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                En quoi consiste la pratique?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              La norme est la santé. En Naturopathie, on considère que c’est la
              force vitale (ou énergie) qui nous anime. C’est elle, qui permet à
              notre organisme de se défendre et de guérir.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                Quel est le rôle du naturopathe?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              Lors du Bilan de Vitalité, le naturopathe évalue votre énergie
              vitale, et met au point une cure, qui vous sera personnalisée.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Différentes techniques naturelles s’y inséreront : l’alimentation,
              l’exercice physique, la gestion du mental et du stress, les
              techniques respiratoires, les techniques manuelles (massages
              naturopathiques), la réflexologie, l’hydrologie, la phytologie /
              l’aromatologie et les techniques vibratoires et énergétiques.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Ces techniques ne sont pas guérisseuses, mais font partie d’une
              boîte à outils que le naturopathe va utiliser en fonction de vos
              besoins, pour guider votre organisme vers l’auto-guérison.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Le naturopathe est éducateur de santé, il explique toujours les
              mécanismes anatomiques et physiologiques qui ont amenés aux
              dérèglements rencontrés, donnant les clés pour comprendre ce qui
              se « joue », se prendre en main et (re)devenir acteur de sa santé.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Si les difficultés que vous rencontrez se trouvent en dehors du
              champs d’application du naturopathe, celui-ci vous orientera vers
              d’autres praticiens compétents.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                Comment se déroule une consultation avec un naturopathe?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              La première séance dure environ une heure trente.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Grâce à une analyse morphologique (appréciation des différents
              volumes du corps) et iridologique (analyse des signes des iris),
              ainsi qu’un entretien détaillé, votre bilan de vitalité sera
              dressé.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Il permettra d’avoir une idée de votre « terrain » (forces et
              faiblesses organiques hérités ou acquises), ainsi que de votre
              niveau d’énergie, afin de vous proposer une cure et mettre en
              place une hygiène de vie qui vous correspond.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                Pourquoi consulter un naturopathe?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              Toute personne souhaitant faire de la prévention et soucieuse de
              maintenir sa santé peut consulter un naturopathe.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Il vous guidera pour (re)trouver un équilibre selon les
              améliorations que vous cherchez à atteindre. Les maux de votre
              quotidien s’atténueront voire disparaîtront, grâce à la réforme de
              vie qui vous sera proposée.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              (Les conseils d’un naturopathe, ne constituent pas une alternative
              à un traitement médical.)
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                fontSize='18px'
                fontWeight={700}
                as='span'
                flex='1'
                textAlign='left'
              >
                Et après la première séance?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={4}>
            <Text pb={2} fontSize='md' color='gray.500'>
              L’objectif est qu’en une séance, vous repartiez avec les outils
              pour prendre en main votre santé.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Une consultation de suivi peut avoir lieu (environ une heure), un
              mois, trois mois ou six mois après la première séance, pour faire
              le point de ce qui a pu être mis en place et ce qui peut être
              amélioré.
            </Text>
            <Text pb={2} fontSize='md' color='gray.500'>
              Votre bien-être nécessite votre participation active !
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
