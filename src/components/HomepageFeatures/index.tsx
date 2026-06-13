import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  to?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'LLM',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    to: '/library/llm',
    description: (
      <>
How large language models work under the hood — training, inference, tokenization, memory, and limitations.      </>
    ),
  },
  {
    title: 'RAG',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    to: '/library/rag',
    description: (
      <>
How retrieval augments generation through grounding, retrieval pipelines, and context orchestration for enterprise AI systems.
  </>
    ),
  },
  {
    title: 'Agentic AI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
How AI systems plan, reason, use tools, and execute multi-step workflows.      </>
    ),
  },
  {
    title: 'MCP',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
A protocol layer for standardizing how models connect to tools, data, and enterprise applications.  
   </>
    ),
  },
  {
    title: 'Governance, Risk & Compliance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Designing trustworthy AI systems with security, risk controls, and operational governance.   </>
    ),
  },
    {
    title: 'System Design & Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Distributed systems, multicloud platforms, integration patterns, and enterprise architecture at scale.
   </> ),
  },
];

function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {to ? (
          <Link to={to}>
            <Heading as="h3">{title}</Heading>
          </Link>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
