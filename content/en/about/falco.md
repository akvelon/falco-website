---
title: About falco page
aliases:
  - /about/
  - /test/
---

<section class="row">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-12 d-flex flex-column">
        <div class="flex-grow-1" style="background-color: grey;"></div>
      </div>
      <div class="col-md-7 col-12">
        <h3>What is runtime security and why it matters</h3>
        <p>
          In an organization’s security posture, it is important to have security practices at multiple levels. Robust code review processes, dependency audits, and multi-factor authentication are examples of security policies.

Security measures like supply chain security are vital to safeguarding your organization, however, they don't cover all potential attack surfaces. Real-world scenarios have demonstrated that significant vulnerabilities can go undetected and can be exploited for prolonged periods of runtime in the software supply chain.

With the increasing number of cyber-attacks and breaches, it's crucial to have real-time monitoring and protection for your systems. Runtime security provides a layer of protection that helps to identify and respond to security incidents as they happen, minimizing the impact of breaches, including those relying on vulnerabilities that may not have been discovered yet. 

By promptly detecting and responding to any potential threats, organizations can protect themselves against financial loss and reputational damage, and ensure that they can continue to operate smoothly and efficiently.
      </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 col-12">
        <h3>What is Falco</h3>
        <p>
Created by Sysdig, Falco was contributed to the Cloud Native Computing Foundation (CNCF) in 2018 and moved to the incubating level in 2020.

At the highest level, you can think of Falco like a network of security cameras for your infrastructure. You deploy Falco across a distributed infrastructure. Falco collects data (from the local machine or by talking to some API), runs a set of rules against it, and notifies you if something bad happens.

Falco makes it easy to consume Linux kernel syscalls, and enrich those events with information from Kubernetes and the rest of the cloud native stack. Falco has a rich set of security rules specifically built for Kubernetes, Linux and cloud-native. Since its inception, Falco has been downloaded more than 50 million times, with more than 480% growth in the last two years.
        </p>
      </div>
      <div class="col-md-5 col-12">
        <img class="w-100" src="/img/about/what_is_falco.png" alt="what is falco">
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 col-12 d-flex flex-column">
        <div class="flex-grow-1" style="background-color: grey;"></div>
      </div>
      <div class="col-md-7 col-12">
        <h3>What is runtime security and why it matters</h3>
        <p>
Falco collects event data from a source and compares each event against a set of rules. New data sources can be added to Falco by developing plugins. Some examples of sources for Falco events are:
        </p>
        <ul>
          <li>System calls</li>
          <li>Kubernetes audit logs</li>
          <li>Cloud events (e.g. AWS CloudTrail)</li>
          <li>Events from other systems (GitHub, Okta)</li>
        </ul>
        <p>
Rules help the Falco engine identify security events. Falco comes pre-loaded with a comprehensive set of rules that cover host, container, Kubernetes and cloud security, and you can easily create your own rules to customize it.

System calls are one of the most important data sources for Falco. If an application has been compromised, Falco is able to detect malicious or suspicious behavior based on the system calls that it performs.
        </p>
      </div>
    </div>
  </div>
</section>



{{< feedback >}}

{{< footer_nav next="/about/why-falco" nextTitle="Why Falco?" >}}
