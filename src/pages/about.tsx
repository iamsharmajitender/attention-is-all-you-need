import React from 'react';
import Layout from '@theme/Layout';

export default function About(): React.ReactElement {
  return (
    <Layout title="About Me">
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <h1>About Me</h1>

        <p> I love designing software systems that scale — from clean architecture to enterprise-wide platforms that support millions of users.</p>
        <p> I’m an <strong>Enterprise Technology Leader and Architect</strong> with 18+ years of experience across <strong>banking, aviation, and critical infrastructure</strong> in Australia, UAE, and India. My work sits at the intersection of <strong>system architecture & design, technology strategy, cloud architecture, and AI-driven transformation</strong>.</p>

        <p> I specialise in translating complex business and regulatory environments into <strong>secure, scalable, and future-ready architectures</strong>. My focus is on building platforms that are not just technically sound, but operationally resilient and aligned with real-world constraints like compliance, risk, and performance at scale.</p>

        <h2>Focus Areas</h2>
        <ul>
          <li>Enterprise Architecture & Technology Strategy</li>
          <li>Cloud & Platform Modernization (AWS, Azure, Hybrid)</li>
          <li>Microservices, Event-Driven & API-led Architectures</li>
          <li>AI / GenAI Integration in Enterprise Systems</li>
          <li>Digital Transformation in Regulated Industries</li>
          <li>Architecture Governance, Standards & Operating Models</li>
          <li>Developer Enablement & Engineering Productivity</li>
          <li>System Design (this one is closer to my heart!)</li>
        </ul>
        <br/>
        <h2>Core Philosophy</h2>
        <p>
            Great architecture is not just about systems — it’s about enabling change safely at scale.     
        </p>

        I believe in:
        <ul>
          <li>Simplicity over complexity</li>
          <li>Scalable patterns over one-off solutions(with constraints)</li>
          <li>Security by design</li>
          <li>Empowering teams through standards and clarity</li>
          <li>Always take a step back and think why we're doing this</li>
        </ul>
        
        <br/>

        <h2>Certifications</h2>
        <p>TOGAF®, AWS & Azure Architect certifications, Kubernetes (CKA/CKAD), and Generative AI programs across Databricks, Google, and Azure. </p>

        <br/>

        <h2>Contact</h2>
        <p>jitender.sharma@outlook.com </p>
        <p>+61 405 009 600</p>

      </div>
    </Layout>
  );
}