---
title: About falco page
---

{{< blocks/content wrap="col" >}}
  ## Falco — the de facto Cloud and Kubernetes threat detection engine cloud-native runtime security
{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col" >}}
{{< card classNames="shadow" >}}
  ### What is runtime security and why it matters

  In an organization’s security posture, it is important to have security practices at multiple levels. Robust code review processes, dependency audits, and multi-factor authentication are examples of security policies.

  Security measures like supply chain security are vital to safeguarding your organization, however, they don't cover all potential attack surfaces. Real-world scenarios have demonstrated that significant vulnerabilities can go undetected and can be exploited for prolonged periods of runtime in the software supply chain.

  ![What is runtime security and why it matters](/img/about/runtime_security.png#img-fit)

  With the increasing number of cyber-attacks and breaches, it's crucial to have real-time monitoring and protection for your systems. Runtime security provides a layer of protection that helps to identify and respond to security incidents as they happen, minimizing the impact of breaches, including those relying on vulnerabilities that may not have been discovered yet.

  By promptly detecting and responding to any potential threats, organizations can protect themselves against financial loss and reputational damage, and ensure that they can continue to operate smoothly and efficiently.
{{< /card >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img src="/img/about/what_is_falco.png" alt="what is falco" index="1 md-1 lg-1 xl-1" header="What is Falco" >}}
  Created by Sysdig, Falco was contributed to the Cloud Native Computing Foundation (CNCF) in 2018 and moved to the incubating level in 2020.

  At the highest level, you can think of Falco like a network of security cameras for your infrastructure. You deploy Falco across a distributed infrastructure. Falco collects data (from the local machine or by talking to some API), runs a set of rules against it, and notifies you if something bad happens.

  Falco makes it easy to consume Linux kernel syscalls, and enrich those events with information from Kubernetes and the rest of the cloud native stack. Falco has a rich set of security rules specifically built for Kubernetes, Linux and cloud-native. Since its inception, Falco has been downloaded more than 50 million times, with more than 480% growth in the last two years.
{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img img-aligned="left" src="/img/about/how_it_works.png" alt="how it works" index="1 md-0 lg-0 xl-0" header="How it works" >}}
  Falco collects event data from a source and compares each event against a set of rules. New data sources can be added to Falco by developing plugins. Some examples of sources for Falco events are:

  - System calls
  - Kubernetes audit logs
  - Cloud events (e.g. AWS CloudTrail)
  - Events from other systems (GitHub, Okta)
    Rules help the Falco engine identify security events. Falco comes pre-loaded with a comprehensive set of rules that cover host, container, Kubernetes and cloud security, and you can easily create your own rules to customize it.

  System calls are one of the most important data sources for Falco. If an application has been compromised, Falco is able to detect malicious or suspicious behavior based on the system calls that it performs.
{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img img-aligned="right" src="/img/about/instrumenting_system_calls.png" alt="Instrumenting system calls" index="1 md-1 lg-1 xl-1" header="Instrumenting system calls" >}}
  There are multiple ways in which Falco can capture an application’s system calls (also referred to as syscalls). The process is performance-critical, and there are two ways in which Falco instruments this: an eBPF probe or a Kernel Module.

  eBPF is a revolutionary technology that allows us to run sandboxed programs inside an operating system. eBPF scripts are flexible and safe, and run extremely fast, making them perfect for capturing runtime security. This makes it ideal to instrument system calls for Falco.

  Before eBPF, Kernel modules have been the norm for extending functionality in the Linux kernel. They run in privileged mode, and are written in C, making them very efficient and therefore a great option for performance-critical work. Falco also implements a driver as a kernel module.

  Falcosidekick is another project of the Falco organization that connects Falco to a large ecosystem. Acting like a router, it allows you to distribute your events to more than 50 systems, such as email, Slack.
{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img img-aligned="left" src="/img/about/response_to_threats.png" alt="response to threats" index="1 md-0 lg-0 xl-0" header="Response to threats" >}}
  With Falco and Falcosidekick, you can forward the suspicious events to your serverless/FaaS systems to trigger actions and answer to threats. It creates a full Response Engine to protect your environments.
{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col">}}
<div class=" grid-1 grid-lg-3 gap-4">
  {{< card classNames="shadow">}}
  <div class="d-flex flex-column h-100 align-items-start">
    <h5 class="font-weight-normal flex-grow-1">If you are convinced, and want to learn more check our documentation</h5>
    <a href="/docs/" class="btn btn-primary mt-4">Learn more</a>
  </div>
  {{< /card >}}

  {{< card classNames="shadow">}}
  <div class="d-flex flex-column h-100 align-items-start">
    <h5 class="font-weight-normal flex-grow-1">If you are convinced, and want to learn more check our documentation</h5>
    <a href="/docs/getting-started/" class="btn btn-primary mt-4">Learn more</a>
  </div>
  {{< /card >}}

  {{< card classNames="shadow">}}
  <div class="d-flex flex-column h-100 align-items-start">
    <h5 class="font-weight-normal flex-grow-1">The most common use cases for Falco</h5>
    <a href="/about/use-cases/" class="btn btn-primary mt-4">Learn more</a>
  </div>
  {{< /card >}}
</div>
{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col">}}
  <h3 class="mb-3">Falco FAQs</h3>

  {{< card_faq title="How do you ship my orders?" index=1 >}}
  The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Their blood alcohol level was measured by gas chromatography 30 minutes after the last application.
  An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose the same amount of alcohol as in a 150 lb adult, that might amount to 3.1 to 6.0 mg/L in the child’s body—still far below an intoxicating effect.
  {{< /card_faq >}}

  {{< card_faq title="How long will it take for my order to arrive after I make payment?" index=2 >}}
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  {{< /card_faq >}}

  {{< card_faq title="How do I cancel my orders before I make a payment?" index=3 >}}
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  {{< /card_faq >}}

  {{< card_faq title="Can I pay using Paypal without a Paypal account?" index=4 >}}
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
  {{< /card_faq >}}

  {{< card_faq title="How many free samples can I redeem?" index=5 >}}
  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  {{< /card_faq >}}

  <div class="text-center mt-5">
    <a href="/about/faq/" class="text-center btn btn-primary btn-lg">Go to all FAQs</a>
  </div>
{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col">}}
{{< feedback >}}
{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col">}}
{{< footer_nav next="/about/faq" nextTitle="Frequently Asked Questions" >}}
<!-- TODO: uncomment when WHY FALCO section is ready -->
<!-- {{< footer_nav next="/about/why-falco" nextTitle="Why Falco?" >}} -->
{{< /blocks/content >}}
