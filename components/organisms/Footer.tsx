import React from 'react'
import Text from "../atoms/Text"

export default function Footer() {
    return (
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
    )
}
