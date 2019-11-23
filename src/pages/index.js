import React from "react"
import { Redirect } from "@reach/router"

export default ({ data }) => {
  return <Redirect noThrow to="/blog" />
}
