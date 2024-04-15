"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f81f2e3a-2440-4a4d-b220-10bb43213220");
  });

  return null;
}

export default CrispChat;
