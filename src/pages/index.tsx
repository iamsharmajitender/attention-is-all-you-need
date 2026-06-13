import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        Systems Design, Multicloud Architecture, AI & LLM Systems
        </Heading>

        <p className="hero__subtitle">
        I break down how modern systems actually work — from distributed architectures and cloud platforms to LLMs, RAG, and agentic AI.
        <br/> Practical insights on building scalable, reliable, and AI-native systems.
         </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            About Me
          </Link>

          {/* <Link className="button button--primary button--lg" to="/blogs">
            Read Insights
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
