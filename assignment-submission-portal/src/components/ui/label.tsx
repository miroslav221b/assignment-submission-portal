import React, { cloneElement } from "react";
import { twMerge } from "tailwind-merge";

export default function Label({
  children,
  text,
  errorText,
  id,
}: {
  children: JSX.Element;
  text: string;
  errorText?: string;
  id: string;
}) {
  return (
    <div>
      <label
        className={twMerge("text-xs", errorText && "text-destructive")}
        htmlFor={id}
      >
        {errorText ?? text}
      </label>
      {cloneElement(children, { id })}
    </div>
  );
}
