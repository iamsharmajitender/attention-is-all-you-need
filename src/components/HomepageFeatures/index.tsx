import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'LLM',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A statistical engine trained on vast amounts of text to predict the next token and generate human-like language.
      </>
    ),
  },
  {
    title: 'RAG',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A technique that grounds an LLM with external knowledge, allowing it to answer using up-to-date and organization-specific information.
      </>
    ),
  },
  {
    title: 'Agentic AI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Agentic AI is AI that can reason, plan, and take actions to achieve a goal—not just generate a response.
      </>
    ),
  },
  {
    title: 'MCP',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A standardized way for AI models to securely connect to tools, data sources, and applications through a common interface.
      </>
    ),
  },
    {
    title: 'Governance, Risk & Compliance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The framework that ensures AI systems operate responsibly, manage risks effectively, and comply with regulatory and organizational requirements.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
