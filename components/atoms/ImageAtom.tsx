import React from "react";
import Image from "next/image";
import urlFor from "../../lib/sanity/urlFor";
import Link from "next/link";
export default function ImageAtom({ url, size, orientation }) {
  let w;
  let h;
  switch (orientation) {
    case "square":
      switch (size) {
        case "s":
          w = 125;
          h = 125;
          break;
        case "m":
          w = 225;
          h = 225;
          break;
      }
      break;
    case "landscape":
      w = 700;
      h = 525;
      break;
    case "portrait":
      w = 250;
      h = 100;
      break;
  }
  let src = urlFor(url).fit("crop").crop("entropy").width(w).height(h).url();
  let srcBlur = urlFor(url)
    .fit("crop")
    .crop("entropy")
    .width(w)
    .height(h)
    .blur(75)
    .url();
  return (
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={srcBlur}
      width={w}
      height={h}
    />
  )
}
