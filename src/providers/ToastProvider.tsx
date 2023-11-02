"use client";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToastProvider;
