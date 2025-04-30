"use client";

import iconView from "@/public/icon-view.svg";
import Image from "next/image";
import { NftImageProps } from "./NftPreviewCard";
import { useState } from "react";

export default function NftImage({ src, alt }: NftImageProps) {
  const [isHidden, setIsHidden] = useState(true);

  const onClickHandler = () => {
    setIsHidden(!isHidden);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  return (
    <>
      <div
        className="relative cursor-pointer select-none transition ease-out duration-150 group"
        onClick={onClickHandler}
        tabIndex={0}
        onKeyDown={onKeyDownHandler}
      >
        <div className="absolute rounded-[0.5rem] bg-[rgba(0,255,247,0.53)] z-10 w-full h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition ease-out duration-150">
          <div className="flex items-center justify-center w-full h-full">
            <Image src={iconView} alt="" />
          </div>
        </div>

        <Image
          src={src}
          alt={alt}
          width={303}
          height={303}
          priority
          className="z-0 rounded-[0.5rem]"
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-svh w-svw bg-very-dark-blue-main-bg z-20 transition-all ease-out duration-150 ${isHidden ? "hidden" : "flex items-center justify-center"}`}
        onClick={onClickHandler}
      >
        <img src={src} alt={alt} className="max-w-full" />
      </div>
    </>
  );
}
