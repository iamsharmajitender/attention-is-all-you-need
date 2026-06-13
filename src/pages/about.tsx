import React from 'react';
import Layout from '@theme/Layout';

export default function About(): React.ReactElement {
  return (
    <Layout title="About Me">
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <h1>About Me</h1>

        <p> I love designing software systems that scale — from <strong>clean architecture to enterprise-wide platforms</strong> supporting millions of users. </p>

        <p> I’m an Enterprise Technology Leader and Architect with 18+ years of experience designing <strong>cloud native and enterprise-grade platforms</strong>. My experience spans banking, aviation, and critical infrastructure across Australia, United Arab Emirates, and India. My work sits at the intersection of enterprise architecture, cloud modernization, platform engineering, and AI-driven transformation.</p>

        <p> I specialize in translating complex business and regulatory environments into <strong>secure, scalable, and resilient architectures</strong>. My focus is on building systems that are not only technically sound, but operationally resilient and aligned with real-world constraints like compliance, risk, and performance at scale.</p>

        <h2>Focus Areas</h2>
        <ul>
          <li>Enterprise Architecture & Technology Strategy</li>  
          <li>Cloud & Platform Modernization (AWS, Azure, Hybrid)</li>
          <li>Microservices, Event-Driven & API-led Architectures</li>
          <li>AI / GenAI Integration for Enterprise Systems</li>
          <li>Digital Transformation in Regulated Industries</li>
          <li>Architecture Governance & Operating Models</li>
          <li>Developer Productivity & Engineering Enablement</li>
          <li>System Design & Distributed Systems</li>
        </ul>
        <br/>
        <h2>Core Philosophy</h2>
        <p>
            Great architecture is not just about systems — it’s about enabling change safely at scale.     
        </p>

        I believe in:
        <ul>
          <li>Simplicity over complexity</li>
          <li>Scalable patterns over one-off solutions</li>
          <li>Security by design</li>
          <li>Empowering teams through standards and clarity</li>
          <li>Understanding the “why” before designing the “how”</li>
        </ul>
        
        <br/>

        <h2>Certifications</h2>
        <p>TOGAF®, AWS & Azure Architect certifications, Kubernetes (CKA/CKAD), and Generative AI programs across Databricks, Google, and Azure. </p>

        <br/>

        <h2>Contact</h2>
        <p>jitender.sharma@outlook.com </p>
      </div>
    </Layout>
  );
}