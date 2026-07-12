"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc: string;
}

export function SafeImage({ src, fallbackSrc, alt, ...props }: SafeImageProps) {
  const [imgUrl, setImgUrl] = useState(src);

  return (
    <Image
      {...props}
      src={imgUrl}
      alt={alt}
      onError={() => {
        setImgUrl(fallbackSrc);
      }}
    />
  );
}
