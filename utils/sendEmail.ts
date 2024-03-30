"use server";

import { Toast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Dispatch, FormEvent, SetStateAction } from "react";

export const sendEmail = async (
  event: FormEvent<HTMLFormElement>,
  setIsSubmitting: Dispatch<SetStateAction<boolean>>,
  toast: typeof Toast
) => {
  event.persist();
  event.preventDefault();
  await emailjs
    .sendForm(
      process.env.APP_SERVICE_ID ?? "",
      process.env.APP_TEMPLATE_ID ?? "",
      event.target as HTMLFormElement,
      process.env.APP_PUBLIC_KEY ?? ""
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "I will get back to you as soon as possible",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setIsSubmitting(false);
      },
      () => {
        toast({
          title: "Something went wrong, please try again later!",
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
