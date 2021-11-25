import MetaText from "../atoms/MetaText"
import Heading  from "../atoms/Heading"
import ImageAtom from "../atoms/ImageAtom"
import Text from "../atoms/Text"
import Link from "next/link"

export default function Card({post, size}) {
    return (
        <article key={post._id} className={size == "xl" ? "p-4 px-8" :"p-4"}>

<ImageAtom size="m" orientation="landscape" url={post.mainImage}/>
<Heading size={size}><Link href={`/posts/${post.slug}`}>
  <a>{post.title}</a>
</Link></Heading>
  <MetaText size={size} type="primary">By <span className="uppercase">{post.author.name}</span></MetaText>
{size == "l" || size == "xl"? <Text size="m">{post.featureDescription}</Text> :""}
</ article>
    )
}
