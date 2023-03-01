---
title: Why falco
---

{{< blocks/content wrap="col" >}}
## Why Falco?
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/highly_scalable.svg" alt="highly scalable" index="1 md-1 lg-1 xl-1" header="Highly Scalable" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#scalability-benefits" >}}
Falco is highly scalable due to its containerized architecture and its compatibility with container orchestration tools like Kubernetes.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#scalability-benefits" >}}
Falco runs as a daemon set, ensuring every node in the cluster runs an instance of Falco.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#scalability-benefits" >}}
Falco leverages Kubernetes and its API to dynamically update its configuration as new pods are added or removed from the cluster.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#scalability-benefits" >}}
Falco's integration with cloud-native technologies like Prometheus and Grafana provides users with the ability to visualize and analyze Falco alerts at scale.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/highly_perfomant.svg" alt="highly performant" index="1 md-0 lg-0 xl-0" header="Highly Performant" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#performance-benefits" >}}
Falco is highly performant due to its low overhead, event-driven architecture, and the ability to leverage kernel-level instrumentation to capture system events.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#performance-benefits" >}}
Falco's low overhead is achieved by using a minimal set of resources, including CPU, memory, and I/O, while monitoring system events.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#performance-benefits" >}}
Falco's event-driven architecture allows it to monitor only the relevant events, reducing the amount of noise generated and increasing its efficiency.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#performance-benefits" >}}
Falco uses kernel-level instrumentation to capture system events, which provides a low-level view of the system and enables it to detect a wide range of security issues.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/single_policy.svg" alt="single policy language" index="1 md-1 lg-1 xl-1" header="Single Policy Language" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#policy-language-benefits" >}}
A single policy language ensures consistency and reduces complexity.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#policy-language-benefits" >}}
A single policy language promotes collaboration between security and operations teams.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#policy-language-benefits" >}}
Falco's single policy language provides flexibility and extensibility.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#policy-language-benefits" >}}
A single policy language simplifies compliance and auditing.
{{< /content_arrow >}}
{{< /card >}}

{{< /two_column_block_img >}}
{{< /blocks/content >}}

{{< blocks/content content="html" >}}
{{< two_column_block_img content="html" src="/img/about/custom_deployment.svg" alt="custom deployment options" index="1 md-0 lg-0 xl-0" header="Custom Deployment Options" >}}

{{< card classNames="card-sm shadow">}}
{{< content_arrow content="html" direction="forward" url="#custom-deployment-benefits" >}}
Custom install options allow users to tailor the install process to their specific needs.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#custom-deployment-benefits" >}}
When deploying Falco in a Cloud-Native way, it is typically installed as a containerized application using a container orchestration tool such as Kubernetes.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#custom-deployment-benefits" >}}
The installation can include deploying additional components, such as Prometheus or Grafana.
{{< /content_arrow >}}
{{< /card >}}

{{< card classNames="card-sm shadow mt-2">}}
{{< content_arrow content="html" direction="forward" url="#custom-deployment-benefits" >}}
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

{{< blocks/content wrap="col" content="text" color="light">}}
{{< icon_header index=0 src="/img/about/file-earmark-check-fill.svg" alt="file-earmark-check-fill" class="mb-5" >}}
### Policy Language Benefits
{{< /icon_header >}}

##### Ensures Consistency & Reduces Complexity

Falco's rule language is used to define security policies for detecting and alerting on potential threats, and its use across the entire platform ensures a uniform approach to security monitoring. This means that all team members can understand the policies and alerts, regardless of their role or the context in which they are used.

<hr class="w-100 my-4"/>

##### Promotes Collaboration between Security & Ops teams

Since everyone is working with the same set of rules and policies, it becomes easier for these teams to share insights and work together to solve security issues. This can help to reduce the time it takes to identify and resolve security incidents.

<hr class="w-100 my-4"/>

##### Provides Flexibility & Extensibility

The language is designed to be easy to use, and it offers a wide range of operators and conditions that can be used to create customized rules for specific security scenarios. This allows teams to create policies that are tailored to their unique needs and requirements.

<hr class="w-100 my-4"/>

##### Simplifies Compliance & Auditing
By using the same language to define all security policies and alerts, it becomes easier to demonstrate compliance with regulations and standards. This is because it is easier to track changes to the policies, identify potential security gaps, and show how security incidents were handled. To better understand how Falco can be used for meeting regulatory compliance in cloud-native environments, check out this video.

{{< /blocks/content >}}

{{< blocks/content wrap="col" content="text" color="light">}}
{{< icon_header index=0 src="/img/about/arrows-fullscreen.svg" alt="arrows-fullscreen" class="mb-5" >}}
### Scalability Benefits
{{< /icon_header >}}

##### Compatibility with Container Orchestration Tools

We could write something related to easily exporting Falco metrics to Prometheus and Grafana. If there’s not a good example resource in place, we can just link prospective users to the kind page for setting-up a test cluster with Falco, Prometheus and Grafana.

<hr class="w-100 my-4"/>

##### Runs as a Daemonset

Like other workload objects, a DaemonSet manages groups of replicated Pods. However, DaemonSets attempt to adhere to a one-Pod-per-node model, either across the entire cluster or a subset of nodes. As you add nodes to a node pool, DaemonSets automatically add Pods to the new nodes as needed. This enables Falco to monitor all containers on all nodes, providing comprehensive security visibility across the entire cluster. To learn how Falco is used as a DaemonSet, check out the below workshop.

<hr class="w-100 my-4"/>

##### Leverages the Kubernetes API

This allows Falco to automatically scale its monitoring capabilities as the cluster grows, without the need for manual intervention.


{{< /blocks/content >}}

{{< blocks/content wrap="col" content="text" color="light">}}
{{< icon_header index=0 src="/img/about/speedometer.svg" alt="speedometer" class="mb-5" >}}
### Performance Benefits
{{< /icon_header >}}

##### Uses a minimal set of resources

This enables Falco to operate efficiently without impacting the performance of the monitored applications.

<hr class="w-100 my-4"/>

##### Only monitor the relevant events

By using filters and rules to define which events to monitor, Falco can avoid processing unnecessary data and concentrate on security-related events.

<hr class="w-100 my-4"/>

##### Kernel-level instrumentation to capture system events

This approach also ensures that Falco is highly performant, as it can intercept and analyze system events before they are processed by the operating system or the applications.

{{< /blocks/content >}}

{{< blocks/content wrap="col" content="text" color="light">}}
{{< icon_header index=0 src="/img/about/stack.svg" alt="stack" class="mb-5" >}}
### Custom Deployment Benefits
{{< /icon_header >}}

##### Tailor the install process to your specific needs

Users can select which components to install. You can configure specific settings for your needs. And you can even choose the deployment environment, whether it be in Kubernetes, on a bare metal VM, an IoT device or Edge computing. More documentation on install options can be seen here.

<hr class="w-100 my-4"/>

##### Deploy in a “Cloud-Native” way

By installing Falco as a containerized pod within Kubernetes, you are allowing for easier scaling, management, and deployment of those Falco instances.

<hr class="w-100 my-4"/>

##### Deploy Additional Components

The value here is that it enhances the monitoring and alerting capabilities of Falco.

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
