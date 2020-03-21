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

    <Link to="/test">Sample Component (input)</Link><br/>
    <Link to="/test2">Pop (input)</Link><br/>
    <Link to="/test3">Multi Language</Link><br/>
    <Link to="/testF">Counter : Class Component + Redux</Link><br/>
    <Link to="/testFunc">Counter : Functional Component + Redux</Link><br/>
    <Link to="/testFuncAsync">Counter : Functional Component + Redux + Pender</Link><br/>
    <Link to="/test5">Chat : Functional Component + Redux + thunk + Axios</Link><br/>

    <br/>

  </Layout>
)

export default IndexPage
