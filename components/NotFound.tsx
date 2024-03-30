"use client";

import { Flex, Image, Text } from "@chakra-ui/react";

const NotFoundPage: React.FC = () => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      minH={"80vh"}
      textAlign='center'
    >
      <Image h='400px' src='/broken.svg' alt='404 Error' />
      <Text fontSize='xl' fontWeight='bold' mt={12}>
        {"Désolé, quelque chose s'est mal passé!"}{" "}
      </Text>
      <Text color='gray.500' maxW='700px' mt={2}>
        {
          "Nous sommes désolés, une erreur s'est produite lors de la récupération des données. Veuillez recharger ou réessayer plus tard."
        }
      </Text>
    </Flex>
  );
};

export default NotFoundPage;
