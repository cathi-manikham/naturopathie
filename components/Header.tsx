"use client";

import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg='white' position='sticky' top={0} zIndex={10}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <IoIosClose size={"24px"} />
              ) : (
                <CiMenuBurger size={"16px"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          align='center'
          justify={{ base: "center", md: "start" }}
        >
          <Link href='/'>
            <Image boxSize='40px' src='/logo.png' alt='logo' />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            display='inline-flex'
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.400"}
            href={"https://calendly.com/catherinemanikham/30min"}
            target='_blank'
            _hover={{
              bg: "green.300",
            }}
            size={{ base: "xs", md: "sm" }}
          >
            Prendre rendez-vous
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClick={() => onToggle()} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as={Link}
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

interface MobileNavProps {
  onClick: () => void;
}

const MobileNav = ({ onClick }: MobileNavProps) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          onClick={() => onClick()}
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href, onClick }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as={Link}
        href={href ?? "#"}
        justifyContent='space-between'
        alignItems='center'
        _hover={{
          textDecoration: "none",
        }}
        onClick={() => onClick?.()}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Naturopathie",
    href: "/naturopathie",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Tarifs & contact",
    href: "/pricing",
  },
];
