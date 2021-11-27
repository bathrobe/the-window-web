import Link from "next/link";
import { useState } from "react";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import ListCard from "../components/elements/ListCard";
import Heading from "../components/atoms/Heading";
import Card from "../components/elements/Card";
import Text from "../components/atoms/Text";
import Icon from "../components/atoms/Icon";
import ImageAtom from "../components/atoms/ImageAtom";
export default function Home({ posts }) {
  const post = posts[0];
  let ticker = posts.slice(0, 3);
  let features = posts.slice(3, 8);
  let secondaries = posts.slice(8, 12);
  let tertiaries = posts.slice(12);
  let leftFeatures = [features[0], features[2]];
  let rightFeatures = [features[1], features[3]];
  let mainFeature = [features[4]];
  const [activeDisplay, setActiveDisplay] = useState("frontPage");

  return (
    <div>
      <header className="">
        <div className="flex justify-between">
          <Icon type="search" />
          <div>
            {/* <img src="/window.png" alt="logo" className="max-h-md" /> */}
            <h1 className="text-2xl text-gray-300 font-bold">The Window</h1>
          </div>

          <Icon type="menu" />
        </div>
        <nav className="py-4 flex justify-center"></nav>
      </header>

      <main className="max-w-container mx-auto grid grid-cols-12 justify-evenly text-gray-200">
        {/* top box region */}
        {ticker.map((p) => (
          <ListCard post={p} type="ticker" />
        ))}
        {/* top box region over */}

        {/* main feature layout region */}
        {/* left side */}
        <aside className="col-span-3 flex flex-col justify-between">
          {leftFeatures.map((p) => (
            <Card size="m" post={p} />
          ))}
        </aside>
        {/* center */}
        <section className="col-span-6">
          <Card size="xl" post={mainFeature[0]} />
        </section>
        {/* right side */}
        <aside className="col-span-3">
          {rightFeatures.map((p) => (
            <Card size="m" post={p} />
          ))}
        </aside>
        {/* main feature layout region over */}

        {/* secondary layout grid region */}
        {secondaries.map((p) => (
          <article key={p._id} className="py-8 col-span-3">
            <Card size="m" post={p} />
          </article>
        ))}
        {/* secondary layout grid region over*/}

        {/* final scroll section */}
        <div className="col-span-8">
          {tertiaries.map((p) => (
            <ListCard type="tert" post={p} />
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
