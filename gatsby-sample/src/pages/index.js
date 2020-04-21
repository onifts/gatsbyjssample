import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <br/>
    <br/>

    <Link to="/test">[1] Sample Component (input)</Link><br/>
    <Link to="/test2">[2] Pop (input)</Link><br/>
    <Link to="/test3">[3] Multi Language</Link><br/>
    <Link to="/TestF">[4] Counter : Class Component + Redux</Link><br/>
    <Link to="/TestFunc">[5] Counter : Functional Component + Redux</Link><br/>
    <Link to="/TestFuncAsync">[6] Counter : Functional Component + Redux + Thunk</Link><br/>
    <Link to="/test5">[7] Chat : Functional Component + Redux + Thunk + Pender + Axios</Link><br/>

    <Link to="/test6">[8] Animated Ellipsis : Loading... </Link><br/>
    <Link to="/test7">[9] Animated Ellipsis : Loading... (Start and hold 8s)</Link><br/>
    <Link to="/test8">[10] Emoji</Link><br/>
    <Link to="/test9">[11] GIF</Link><br/>

    <br/>

  </Layout>
)

export default IndexPage
