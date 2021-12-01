import MetaText from "../atoms/MetaText";
import Heading from "../atoms/Heading";
import ImageAtom from "../atoms/ImageAtom";
import Text from "../atoms/Text";
import Link from "next/link";

export default function ListCard({ post, type }) {
  let styles = {};
  switch (type) {
    case "tiny":
      styles.wrapper = `p-4 pb-10 flex col-span-4`;
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
        size={styles.imgSize}
        orientation="square"
        url={post.mainImage}
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
