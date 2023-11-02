"use client";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { useState, useEffect } from "react";
import { ProductWithPrice } from "../../types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}
const ModalProvider = ({ products }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <UploadModal />
      <AuthModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
