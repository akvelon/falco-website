---
title: Why falco
---

{{< blocks/content wrap="col" >}}
## Why Falco?
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/highly_scalable.svg" alt="highly scalable" index="1 md-1 lg-1 xl-1" header="Highly Scalable" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco is highly scalable due to its containerized architecture and its compatibility with container orchestration tools like Kubernetes.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco runs as a daemon set, ensuring every node in the cluster runs an instance of Falco.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco leverages Kubernetes and its API to dynamically update its configuration as new pods are added or removed from the cluster.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco's integration with cloud-native technologies like Prometheus and Grafana provides users with the ability to visualize and analyze Falco alerts at scale.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/highly_perfomant.svg" alt="highly performant" index="1 md-0 lg-0 xl-0" header="Highly Performant" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco is highly performant due to its low overhead, event-driven architecture, and the ability to leverage kernel-level instrumentation to capture system events.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco's low overhead is achieved by using a minimal set of resources, including CPU, memory, and I/O, while monitoring system events.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco's event-driven architecture allows it to monitor only the relevant events, reducing the amount of noise generated and increasing its efficiency.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco uses kernel-level instrumentation to capture system events, which provides a low-level view of the system and enables it to detect a wide range of security issues.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/single_policy.svg" alt="single policy language" index="1 md-1 lg-1 xl-1" header="Single Policy Language" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
A single policy language ensures consistency and reduces complexity.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
A single policy language promotes collaboration between security and operations teams.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Falco's single policy language provides flexibility and extensibility.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
A single policy language simplifies compliance and auditing.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/custom_deployment.svg" alt="custom deployment options" index="1 md-0 lg-0 xl-0" header="Custom Deployment Options" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Custom install options allow users to tailor the install process to their specific needs.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
When deploying Falco in a Cloud-Native way, it is typically installed as a containerized application using a container orchestration tool such as Kubernetes.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
The installation can include deploying additional components, such as Prometheus or Grafana.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
An optional eBPF probe improves the performance, maintainability, and user experience. Now delivered as a unique, powerful, self-contained Falco executable.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/customizable.svg" alt="Customizable" index="1 md-1 lg-1 xl-1" header="Customizable" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Define your own custom rules to meet specific security requirements
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Create your own custom plugins to handle events from additional sources.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
Configure alerts to trigger specific actions, such as executing custom scripts.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#" >}}
By using Kubernetes annotations, users can define custom metadata that can be used in Falco rules to provide context-specific alerts.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="text" color="light">}}
##### Ensures Consistency & Reduces Complexity

Falco's rule language is used to define security policies for detecting and alerting on potential threats, and its use across the entire platform ensures a uniform approach to security monitoring. This means that all team members can understand the policies and alerts, regardless of their role or the context in which they are used.

<hr style="width: 100%"/>

##### Promotes Collaboration between Security & Ops teams

Since everyone is working with the same set of rules and policies, it becomes easier for these teams to share insights and work together to solve security issues. This can help to reduce the time it takes to identify and resolve security incidents.

{{< /blocks/content >}}

{{< blocks/content content="html" wrap="col">}}
{{< footer_nav
prev="/about/falco"
prevTitle="About Falco"
next="/docs"
nextTitle="Documentation" >}}
<!-- TODO: uncomment when ecosystems section is ready -->
<!-- {{< footer_nav 
  prev="/about/ecosystem"
  prevTitle="Ecosystem"
  next="/about/docs" 
  nextTitle="Documentation" >}} -->
{{< /blocks/content >}}
