"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc: string;
}

export function SafeImage({ src, fallbackSrc, alt, sizes, ...props }: SafeImageProps) {
  const [imgUrl, setImgUrl] = useState(src);

  return (
    <Image
      {...props}
      src={imgUrl}
      alt={alt}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      onError={() => {
        setImgUrl(fallbackSrc);
      }}
    />
  );
}
