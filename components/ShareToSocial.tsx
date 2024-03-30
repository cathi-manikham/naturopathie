"use client";

import {
  HStack,
  IconButton,
  VStack,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { FaCopy, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

interface Props {
  marginTop?: string;
  isBlog?: boolean;
}

export const SocialShare = ({ marginTop, isBlog }: Props) => {
  const toast = useToast();
  const toastId = "link-copied-toast";

  const { onCopy } = useClipboard(window.location?.href);

  const onClick = (social?: "twitter" | "linkedin" | "facebook") => {
    if (!window) return;

    let url: URL | undefined;
    let title = window.document?.title;
    const pageURL = new URL(window.location?.href);
    pageURL.searchParams.set("lang", "en");
    pageURL.hash = "";
    const pageHref = pageURL.href;

    switch (social) {
      case "twitter":
        url = createURL`https://twitter.com/intent/tweet?text=${title}&url=${pageHref}`;
        break;
      case "linkedin":
        url = createURL`https://www.linkedin.com/shareArticle?mini=true&title=${title}&url=${pageHref}`;
        break;
      case "facebook":
        url = createURL`https://www.facebook.com/sharer/sharer.php?u=${pageHref}`;
        break;
      default:
        onLinkCopy();
    }

    if (url) openURL(url);
  };

  const openURL = (url: string | URL) => {
    if (url != null && typeof url === "object" && "href" in url) {
      window.open(url.href, "_blank");
    } else {
      window.open(url, "_blank");
    }
  };

  const createURL = (strings: TemplateStringsArray, ...values: any[]) => {
    const url = strings.reduce(
      (acc, curr, idx) => acc + curr + encodeURIComponent(values[idx] ?? ""),
      ""
    );
    return new URL(url);
  };

  const onLinkCopy = () => {
    onCopy();
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        title: "Link successfully Copied.",
        description: "We've copied the link to your clipboard.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack
      align='flex-start'
      justify='center'
      mb={"8px"}
      mt={marginTop ?? "8px"}
      w='fit-content'
      spacing={1}
    >
      <HStack spacing={2} justify='center' align='start'>
        <IconButton
          variant='ghost'
          size='xs'
          aria-label='linkedin'
          icon={<FaLinkedin size={16} />}
          filter='grayscale(80%)'
          _hover={{ filter: "grayscale(0%)", bg: "blue.50" }}
          onClick={() => onClick("linkedin")}
        />
        <IconButton
          variant='ghost'
          size='xs'
          aria-label='facebook'
          icon={<FaFacebook size={16} />}
          filter='grayscale(80%)'
          _hover={{ filter: "grayscale(0%)", bg: "blue.50" }}
          onClick={() => onClick("facebook")}
        />
        <IconButton
          variant='ghost'
          size='xs'
          aria-label='twitter'
          icon={<FaTwitter size={16} />}
          filter='grayscale(80%)'
          _hover={{ filter: "grayscale(0%)", bg: "blue.50" }}
          onClick={() => onClick("twitter")}
        />
        <IconButton
          variant='ghost'
          size='xs'
          aria-label='global-web'
          icon={<FaCopy size={16} />}
          filter='grayscale(80%)'
          _hover={{ filter: "grayscale(0%)", bg: "blue.50" }}
          onClick={() => onClick()}
        />
      </HStack>
    </VStack>
  );
};
