"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { BsFillSendFill, BsLinkedin, BsPerson } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import useIsHovered from "../hooks/useIsHovered";

export default function ContactForm() {
  const { hasCopied, onCopy } = useClipboard("catherinemanikham@gmail.com");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const ref = useRef<HTMLInputElement>(null);
  const isHovered = useIsHovered(ref);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    event.persist();
    event.preventDefault();
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        event.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_APP_PUBLIC_KEY ?? ""
      )
      .then(
        () => {
          toast({
            title: "Message envoyé!",
            description: "Je vous répondrai dans les plus brefs délais",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Quelque chose c'est mal passé. Merci d'essayer plus tard!",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    (event!.target as any).reset();
  };

  return (
    <Flex w='100%' align='center' justify='center' id='contact'>
      <Box
        borderRadius='lg'
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
        w='100%'
        maxW='800px'
      >
        <Box w='100%'>
          <VStack w='100%' spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Contactez moi{" "}
            </Heading>

            <Stack
              w='100%'
              spacing={{ base: 4, md: 8, lg: 10 }}
              direction={{ base: "column" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius='lg'
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow='base'
                w='100%'
              >
                <form onSubmit={sendEmail}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nom</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          isRequired
                          name='user_name'
                          type='text'
                          placeholder='Votre Nom'
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type='email'
                          name='user_email'
                          placeholder='Votre Email'
                          isRequired
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name='message'
                        placeholder='Votre Message'
                        rows={6}
                        resize='none'
                        isRequired
                      />
                    </FormControl>

                    <Input
                      borderColor='green.500'
                      ref={ref}
                      mt='12px'
                      variant='outline'
                      w='fit-content'
                      leftIcon={
                        isSubmitting ? (
                          <Spinner color={"white"} size='sm' />
                        ) : (
                          <BsFillSendFill size={16} />
                        )
                      }
                      _hover={{ bg: "green.500", color: "#fff" }}
                      as={Button}
                      pointerEvents={isSubmitting ? "none" : "auto"}
                      type='submit'
                      value='Send'
                      bg={isSubmitting ? "green.500" : "transparent"}
                      color={isSubmitting ? "white" : "green.500"}
                      size={"sm"}
                    >
                      Envoyer le message{" "}
                    </Input>
                  </VStack>
                </form>

                <Divider my='8' />

                <Stack
                  align='center'
                  justify='center'
                  direction={{ base: "row" }}
                  spacing={8}
                  wrap='wrap'
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label='email'
                      variant='ghost'
                      size='lg'
                      fontSize='3xl'
                      icon={<MdEmail />}
                      _hover={{
                        bg: "green.100",
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Box
                    as='a'
                    href='https://www.facebook.com/cmanikham/'
                    target='_blank'
                  >
                    <IconButton
                      aria-label='facebook'
                      variant='ghost'
                      size='lg'
                      fontSize='3xl'
                      icon={<FaFacebook />}
                      _hover={{
                        bg: "green.100",
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as='a'
                    href='https://www.instagram.com/cmanikham_naturopathe/'
                    target='_blank'
                  >
                    <IconButton
                      aria-label='instagram'
                      variant='ghost'
                      size='lg'
                      icon={<FaInstagram size='28px' />}
                      _hover={{
                        bg: "green.100",
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as='a'
                    href='https://www.linkedin.com/in/catherine-manikham-569420204/'
                    target='_blank'
                  >
                    <IconButton
                      aria-label='linkedin'
                      variant='ghost'
                      size='lg'
                      icon={<BsLinkedin size='28px' />}
                      _hover={{
                        bg: "green.100",
                      }}
                      isRound
                    />
                  </Box>
                </Stack>
                <HStack
                  fontWeight='bold'
                  mt={4}
                  justify='center'
                  align='center'
                >
                  <FaPhoneFlip size={14} color='black' />
                  <Text> 07 69 74 28 88</Text>
                </HStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
