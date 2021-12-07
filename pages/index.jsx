import Link from "next/link";
import { useState } from "react";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import ListCard from "../components/elements/ListCard";
import Heading from "../components/atoms/Heading";
import Card from "../components/elements/Card";
import Text from "../components/atoms/Text";
import Icon from "../components/atoms/Icon";
import Header from "../components/organisms/Header";
export default function Home({ posts }) {
  // posts.forEach((p) => (p.slug = `/posts/${p.slug}`));
  const post = posts[0];
  let ticker = posts.slice(0, 3);
  let features = posts.slice(3, 8);
  let secondaries = posts.slice(8, 12);
  let tertiaries = posts.slice(12);
  let leftFeatures = [features[0], features[2]];
  let rightFeatures = [features[1], features[3]];
  let mainFeature = [features[4]];
  console.log(mainFeature[0]);
  const [activeDisplay, setActiveDisplay] = useState("frontPage");
  return (
    <div>
      <Header></Header>
      <main className="max-w-container mx-auto grid grid-cols-12 justify-evenly text-gray-200">
        {/* top box region */}
        {ticker.map((p, idx) => (
          <ListCard post={p} i={idx} type="tiny" />
        ))}
        {/* top box region over */}

        {/* main feature layout region */}
        {/* left side */}
        <aside className="col-span-3 flex flex-col justify-between">
          {leftFeatures.map((p) => (
            <Card type="medium" post={p} slug={p.slug} />
          ))}
        </aside>
        {/* center */}
        <section className="col-span-6">
          <Card type="big" post={mainFeature[0]} slug={mainFeature[0].slug} />
        </section>
        {/* right side */}
        <aside className="col-span-3">
          {rightFeatures.map((p) => (
            <Card type="medium" post={p} slug={p.slug} />
          ))}
        </aside>
        {/* main feature layout region over */}

        {/* secondary layout grid region */}
        {secondaries.map((p) => (
          <article key={p._id} className="py-8 col-span-3">
            <Card type="medium" post={p} slug={p.slug} />
          </article>
        ))}
        {/* secondary layout grid region over*/}

        {/* final scroll section */}
        <div className="col-span-8">
          {tertiaries.map((p) => (
            <ListCard type="medium" post={p} />
          ))}
        </div>
        <div className="col-span-4">
          <Heading size="l">Bounties</Heading>
          <hr className="text-gray-500" />
          <Text size="m">
            Here there will be bounties for wanted pieces of writing. Maybe paid
            out via stablecoin.
          </Text>
        </div>
        {/* final scroll over */}
      </main>
      <footer className="bg-gray-600">
        <div className="flex justify-evenly max-w-4xl mx-auto py-12">
          <section className="px-4">
            <Text size="m">
              <strong>About</strong>
            </Text>
            <Text size="s">Bounties</Text>
            <Text size="s">Budget</Text>
            <Text size="s">Roadmap</Text>
          </section>
          <section className="px-4">
            <Text size="m">
              <strong>Categories</strong>
            </Text>
            <Text size="s">Skills</Text>
            <Text size="s">Phenomenologies</Text>
            <Text size="s">Futurisms</Text>
          </section>
        </div>
        copyright 2021 The Window
      </footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(homeQuery);

  return {
    props: {
      posts,
    },
  };
}
