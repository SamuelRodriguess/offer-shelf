import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text, className = "" }: TitleProps) {
  return <h1 className={`w-80 p-3 ${className}`}>{text}</h1>;
}
