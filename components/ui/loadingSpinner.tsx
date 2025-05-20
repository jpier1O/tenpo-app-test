"use client";

import { CircularProgress } from "@mui/material";

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({ message = "Cargando..." }: LoadingSpinnerProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white/80 z-[9999] flex flex-col items-center justify-center gap-3 text-purple text-base">
      <CircularProgress color="primary" size={60} />
      <span>{message}</span>
    </div>
  );
};
