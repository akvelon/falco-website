---
title: Falco Ecosystem
---

{{< blocks/content wrap="col" >}}
  ## Falco Ecosystem
  
  Falco’s rich ecosystem of plugins and integrations with the cloud native stack will help you enhance your organization’s security posture. The array of providers who install and manage Falco, and success stories from existing users at scale can guide you to get the most out of your Falco deployment
{{< /blocks/content >}}

{{< blocks/content wrap="col" content="html" >}}
  {{< blocks/tabs name="integrations" >}}
  
<!--  -->

  {{< tab name="Integrations" >}}
  <p class="mt-4 mb-5">You can connect Falco with your ecosystem by forwarding the events as output to 50+ targets with Falcosidekick.</p>
  
  {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap=5 class="gallery-vendor">}}
  {{< docs/vendors_gallery_items integrations />}}
    <div class="d-flex flex-column align-items-center">
      <a class="icon-button shadow" href="https://github.com/falcosecurity/falcosidekick#outputs">
        <img src="/img/icons/box-arrow-up-right.svg"/>
      </a>
      <span class="font-weight-bold mt-2">More outputs...</span>
    </div>
  {{< /blocks/grid >}}

  <div class="text-center mt-4">
    <a class="btn btn-lg btn-primary" href="https://github.com/falcosecurity/falcosidekick/issues/new?assignees=&labels=kind%2Ffeature&template=feature_request.md&title=" role="button">Need a new integration?</a>
  </div>

  <div class="d-flex justify-content-between align-items-center gap-5 mt-5">
  <div>
    <h3>Helm</h3>
    <p>Falco can be used out of the box with gVisor sandboxes, more info 
    <a href="https://falco.org/blog/intro-gvisor-falco/">here</a>.</p>
  </div>
    <img src="/img/falco-gvisor.png" alt="falco-gvisor" loading="lazy" width="300"/>
  </div>

  <div class="d-flex justify-content-between align-items-center gap-5 mt-5">
  <div>
    <h3>gVisor</h3>
    <p>You can smoothly install Falco and its ecosystem components in your Kubernetes clusters with our official Helm charts, more info 
    <a href="https://github.com/falcosecurity/charts">here</a>.</p>
  </div>
    <img src="/img/helm.png" alt="helm" loading="lazy" width="180"/>
  </div>

  {{< /tab >}}

  {{< /blocks/tabs >}}


  {{< blocks/tabs name="vendors" class="mt-5">}}
  
  {{< tab name="Vendors" >}}
  <p class="mt-4 mb-5">Many vendors use Falco as part of their product to offer fully managed security services.</p>

  {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap=5 class="gallery-vendor">}}
    {{< docs/vendors_gallery_items vendors />}}
  {{< /blocks/grid >}}

  <div class="text-center mt-4">
    <a class="btn btn-lg btn-primary" href="https://github.com/falcosecurity/falco/blob/master/ADOPTERS.md#adding-a-name" role="button">Add your logo</a>
  </div>

  {{< /tab >}}

  {{< tab name="End-users" >}}
  <p class="mt-4 mb-5">Falco elevates threat detection and response in companies and organizations around the world.</p>
  {{< /tab >}}

  {{< /blocks/tabs >}}
{{< /blocks/content >}}

<!-- TODO: uncomment this section when the redesign is ready -->
<!-- {{< blocks/content content="html" wrap="col">}}
{{< feedback >}}
{{< /blocks/content >}} -->

{{< blocks/content content="html" wrap="col">}}
{{< footer_nav 
  prev="/about/mitre"
  prevTitle="MITRE ATT&CK Framework"
  next="/about/faq" 
  nextTitle="Frequently Asked Questions" 
>}}
{{< /blocks/content >}}