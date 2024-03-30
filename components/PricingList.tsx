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
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { pricing } from "../data/pricing";

interface PackageTierProps {
  title: string;
  features: Array<{ id: number; desc: string; isValid: boolean }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  features,
  typePlan,
  checked = false,
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
      <Heading w={"314px"} size={"md"}>
        {title}
      </Heading>
      <List spacing={3} textAlign='start'>
        {features.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon
              size={"lg"}
              as={desc.isValid ? FaCheckCircle : AiFillCloseCircle}
              color={desc.isValid ? "green.500" : "red.500"}
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
          href={"https://calendly.com/catherinemanikham/30min"}
          size='md'
          color={"green.500"}
          bgColor={"green.100"}
          _hover={{ bgColor: "green.50" }}
        >
          Prendre rendez-vous
        </Button>
      </Stack>
    </Stack>
  );
};
const PricingList = () => {
  return (
    <Box py={{ base: 10, md: 20 }} px={5} width='full'>
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
              <Text color='green.400'>convient le mieux</Text>
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
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingList;
