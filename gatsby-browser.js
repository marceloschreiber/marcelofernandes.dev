import React from "react"
import "typeface-inter"
import "typeface-inconsolata"

import Layout from "./src/components/layout"

export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}
