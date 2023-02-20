---
title: About falco page
aliases:
  - /about/
  - /test/
---

## Falco — the de facto Cloud and Kubernetes threat detection engine cloud-native runtime security

{{< card classNames="shadow" >}}
### What is runtime security and why it matters
In an organization’s security posture, it is important to have security practices at multiple levels. Robust code review processes, dependency audits, and multi-factor authentication are examples of security policies.

Security measures like supply chain security are vital to safeguarding your organization, however, they don't cover all potential attack surfaces. Real-world scenarios have demonstrated that significant vulnerabilities can go undetected and can be exploited for prolonged periods of runtime in the software supply chain.

![What is runtime security and why it matters](/img/about/runtime_security.png)

With the increasing number of cyber-attacks and breaches, it's crucial to have real-time monitoring and protection for your systems. Runtime security provides a layer of protection that helps to identify and respond to security incidents as they happen, minimizing the impact of breaches, including those relying on vulnerabilities that may not have been discovered yet. 

By promptly detecting and responding to any potential threats, organizations can protect themselves against financial loss and reputational damage, and ensure that they can continue to operate smoothly and efficiently.
{{< /card >}}

{{< two_column_block_img src="/img/about/what_is_falco.png" alt="what is falco" index=1 header="What is Falco" >}}
Created by Sysdig, Falco was contributed to the Cloud Native Computing Foundation (CNCF) in 2018 and moved to the incubating level in 2020.

At the highest level, you can think of Falco like a network of security cameras for your infrastructure. You deploy Falco across a distributed infrastructure. Falco collects data (from the local machine or by talking to some API), runs a set of rules against it, and notifies you if something bad happens.

Falco makes it easy to consume Linux kernel syscalls, and enrich those events with information from Kubernetes and the rest of the cloud native stack. Falco has a rich set of security rules specifically built for Kubernetes, Linux and cloud-native. Since its inception, Falco has been downloaded more than 50 million times, with more than 480% growth in the last two years.
{{< /two_column_block_img >}}

{{< two_column_block_img img-aligned="left" src="/img/about/how_it_works.png" alt="how it works" index=0 header="How it works" >}}
Falco collects event data from a source and compares each event against a set of rules. New data sources can be added to Falco by developing plugins. Some examples of sources for Falco events are:
- System calls
- Kubernetes audit logs
- Cloud events (e.g. AWS CloudTrail)
- Events from other systems (GitHub, Okta)
  Rules help the Falco engine identify security events. Falco comes pre-loaded with a comprehensive set of rules that cover host, container, Kubernetes and cloud security, and you can easily create your own rules to customize it.

System calls are one of the most important data sources for Falco. If an application has been compromised, Falco is able to detect malicious or suspicious behavior based on the system calls that it performs.
{{< /two_column_block_img >}}

{{< two_column_block_img img-aligned="right" src="/img/about/instrumenting_system_calls.png" alt="Instrumenting system calls" index=1 header="Instrumenting system calls" >}}
There are multiple ways in which Falco can capture an application’s system calls (also referred to as syscalls). The process is performance-critical, and there are two ways in which Falco instruments this: an eBPF probe or a Kernel Module.

eBPF is a revolutionary technology that allows us to run sandboxed programs inside an operating system. eBPF scripts are flexible and safe, and run extremely fast, making them perfect for capturing runtime security. This makes it ideal to instrument system calls for Falco.

Before eBPF, Kernel modules have been the norm for extending functionality in the Linux kernel. They run in privileged mode, and are written in C, making them very efficient and therefore a great option for performance-critical work. Falco also implements a driver as a kernel module.

Falcosidekick is another project of the Falco organization that connects Falco to a large ecosystem. Acting like a router, it allows you to distribute your events to more than 50 systems, such as email, Slack.
{{< /two_column_block_img >}}


{{< two_column_block_img img-aligned="left" src="/img/about/response_to_threats.png" alt="response to threats" index=0 header="Response to threats" >}}
With Falco and Falcosidekick, you can forward the suspicious events to your serverless/FaaS systems to trigger actions and answer to threats. It creates a full Response Engine to protect your environments.
{{< /two_column_block_img >}}

### Falco FAQs

{{< card_faq title="How do you ship my orders?" index=1 >}}
The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Their blood alcohol level was measured by gas chromatography 30 minutes after the last application.
An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose the same amount of alcohol as in a 150 lb adult, that might amount to 3.1 to 6.0 mg/L in the child’s body—still far below an intoxicating effect.
{{< /card_faq >}}

{{< card_faq title="How long will it take for my order to arrive after I make payment?" index=2 >}}

{{< /card_faq >}}

{{< card_faq title="How do I cancel my orders before I make a payment?" index=3 >}}

{{< /card_faq >}}

{{< card_faq title="Can I pay using Paypal without a Paypal account?" index=4 >}}

{{< /card_faq >}}

{{< card_faq title="How many free samples can I redeem?" index=5 >}}

{{< /card_faq >}}

{{< feedback >}}

{{< footer_nav next="/about/why-falco" nextTitle="Why Falco?" >}}
