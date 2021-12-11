import Link from "next/link";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "../../lib/sanity/client";
import urlFor from "../../lib/sanity/urlFor";
import { postQuery } from "../../lib/sanity/postQuery";
import Heading from "../../components/atoms/Heading"
import ImageAtom from "../../components/atoms/ImageAtom"
import Header from "../../components/organisms/Header";
export default function Post({ post }) {
  return (
    <>
    <Header></Header>
      <Heading size="l">{post?.title}</Heading>
      <p>{post?.publishedAt}</p>
      <hr />
      <ImageAtom url={post.mainImage} size="m" orientation="landscape"/>
      <BlockContent blocks={post?.body} />
      <Link href="/">
        <a>Back home</a>
      </Link>
    </>
  );
}

export async function getStaticProps({ params }) {
  let slug;
  const post = await client.fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
