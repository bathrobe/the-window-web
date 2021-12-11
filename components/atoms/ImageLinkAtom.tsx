import React from "react";
import Image from "next/image";
import urlFor from "../../lib/sanity/urlFor";
import Link from "next/link";
import ImageAtom from "./ImageAtom"
export default function ImageLinkAtom({ slug, children}) {
    return <Link href={slug}>
          <a>{children}</a>
        </Link>
}
