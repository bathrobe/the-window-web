import MetaText from "../atoms/MetaText";
import Heading from "../atoms/Heading";
import ImageAtom from "../atoms/ImageAtom";
import Text from "../atoms/Text";
import Link from "next/link";

export default function Card({ post, type, slug }) {
  const styles = {};
  switch (type) {
    case "big":
      styles.wrapper = `p-4 px-8`;
      styles.size = `xl`;
      styles.showDescription = true;
      break;
    case "medium":
      styles.wrapper = `p-4`;
      styles.size = `m`;
      styles.showDescription = false;
      break;
  }
  return (
    <article key={post._id} className={styles.wrapper}>
      <ImageAtom
        isLink
        slug={`/posts/${post.slug}`}
        orientation="landscape"
        url={post.mainImage}
      />
      <Heading size={styles.size}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </Heading>
      <MetaText size={styles.size} type="primary">
        By <span className="uppercase">{post.author.name}</span>
      </MetaText>
      {styles.showDescription ? (
        <Text size="m">{post.featureDescription}</Text>
      ) : (
        ""
      )}
    </article>
  );
}
