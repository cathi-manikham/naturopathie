"use client";

import { Colors } from "@/theme/colors";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const CancellationText = () => {
  return (
    <Flex
      direction='column'
      align='start'
      justify='center'
      px={{ base: 5, lg: 16 }}
      pt={6}
      pb={{ base: 10, md: 20 }}
      width='full'
      gap={2}
			paddingTop={20}
    >
      <Heading
        as='h2'
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        lineHeight={1.2}
        fontWeight='bold'
        color={Colors.darkPink400}
      >
        REMBOURSEMENTS
      </Heading>
      <Text color='gray.500' fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Les consultations de Naturopathie ne sont pas remboursées par la
        Sécurité Sociale. Cependant de nombreuses mutuelles et complémentaires
        santé proposent un remboursement partiel ou total des séances.
      </Text>
      <Text color='gray.500' fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Je vous invite à vous renseigner préalablement à la prise de
        rendez-vous. Une facture vous sera transmise par e-mail après la
        consultation.
      </Text>
    </Flex>
  );
};
