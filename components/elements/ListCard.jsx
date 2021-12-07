import MetaText from "../atoms/MetaText";
import Heading from "../atoms/Heading";
import ImageAtom from "../atoms/ImageAtom";
import Text from "../atoms/Text";
import Link from "next/link";

export default function ListCard({ post, type, i }) {
  let styles = {};
  switch (type) {
    case "tiny":
      styles.wrapper = `p-4 pb-10 flex col-span-4 ${
        i === 1 ? "justify-self-center" : i === 2 ? "justify-self-end" : ""
      }`;
      styles.imgSize = "s";
      styles.headerSize = "s";
      break;
    case "medium":
      styles.wrapper = `p-4 pb-8 flex col-span-9`;
      styles.imgSize = "m";
      styles.headerSize = "xl";
      styles.metaSize = "m";
  }

  return (
    <article key={post._id} className={styles.wrapper}>
      <ImageAtom
        isLink
        size={styles.imgSize}
        orientation="square"
        url={post.mainImage}
        slug={`/posts/${post.slug}`}
      />
      <div className="pl-4">
        <Heading size={styles.headerSize}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </Heading>
        <MetaText size={styles.size} type="primary">
          By <span className="uppercase">{post.author.name}</span>
        </MetaText>
        {type == "medium" ? (
          <Text size={styles.metaSize}>{post.featureDescription}</Text>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
