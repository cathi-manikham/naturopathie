"use client";

import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { pricing } from "../data/pricing";
import { Colors } from "@/theme/colors";

interface PackageTierProps {
  title: string;
  description: string;
  features: Array<{ id: number; desc: string; isValid: boolean }>;
  typePlan: string;

}
const PackageTier = ({
  title,
  description,
  features,
  typePlan,
}: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <VStack
        justify={{ base: "flex-start", md: "center" }}
        alignItems={{ md: "center" }}
        w='fit-content'
        gap='6px'
      >
        <Heading w={{ base: "100%", md: "314px" }} size={"md"}>
          {title}
        </Heading>
        <Text fontSize='sm' w={{ base: "100%", md: "314px" }} color='gray.400' whiteSpace="pre-line">
          {description}
        </Text>
        {title.includes("Massage") && (
          <Button
            as={"a"}
            href="/massages#massages-a-domicile"
            size='sm'
            variant="ghost"
            color={Colors.darkPink500}
            _hover={{ 
              bgColor: Colors.lightPink100,
              textDecoration: "underline"
            }}
            rightIcon={<FaArrowRight size="12px" />}
            alignSelf="flex-start"
          >
            Informations sur les massages
          </Button>
        )}
      </VStack>
      <List spacing={3} textAlign='start'>
        {features.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon
              as={desc.isValid ? FaCheckCircle : AiFillCloseCircle}
              color={desc.isValid ? Colors.darkPink500 : "red.500"}
            />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          as={"a"}
          target='_blank'
          href={"https://calendly.com/cath-manikham/consultation"}
          size='md'
          color={Colors.darkPink500}
          bgColor={Colors.lightPink100}
          _hover={{ bgColor: Colors.lightPink50 }}
        >
          Prendre rendez-vous
        </Button>
      </Stack>
    </Stack>
  );
};
const PricingList = () => {
  return (
    <Box pt={{ base: 10, md: 20 }} pb={2} px={5} width='full'>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Choisissez ce qui vous{" "}
              <Text color={Colors.darkPink400}>convient le mieux</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text fontWeight='700' textAlign={"center"}>
              Consultations à domicile dans un périmètre de 10 km autour de
              Châtenay-Malabry et à Paris.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        {pricing.map((tier) => (
          <PackageTier
            key={tier.id}
            title={tier.title}
            typePlan={tier.price}
            features={tier.features}
            description={tier.description}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingList;
