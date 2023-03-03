---
title: Falco Ecosystem
---

{{< blocks/content wrap="col" >}}
  ## Falco Ecosystem
  <p class="-text-700 mt-4 mb-0">Leverage the power of runtime security to detect configuration changes and unexpected behavior in Cloud.</p>
{{< /blocks/content >}}

{{< blocks/content wrap="col" content="html" >}}
  {{< blocks/tabs name="integrations" >}}
  
  {{< tab name="Plugins" >}}
  <p class="-text-700 mt-4 mb-5">Track your applications and containers’ behaviors by collecting their communications with the kernel thanks to eBPF. Falco detects out of the box the context and can enrich all events with metadata from the docker engine.</p>

  {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap="5" class="gallery-vendor">}}
    <div class="d-flex flex-column align-items-center">
      <a class="icon-button shadow" href="https://github.com/falcosecurity/plugins#registered-plugins">
        <img src="/img/icons/box-arrow-up-right.svg"/>
      </a>
      <span class="font-weight-bold mt-2">More plugins...</span>
    </div>
  {{< /blocks/grid >}}

  <!-- {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap=5 class="gallery-vendor">}}
    {{< vendor_gallery_item plugins />}}
    <div class="d-flex flex-column align-items-center">
      <a class="icon-button shadow" href="https://github.com/falcosecurity/plugins#registered-plugins">
        <img src="/img/icons/box-arrow-up-right.svg"/>
      </a>
      <span class="font-weight-bold mt-2">More plugins...</span>
    </div>
  {{< /blocks/grid >}} -->

  <div class="text-center mt-5">
    <a class="btn btn-lg btn-primary" href="https://github.com/falcosecurity/plugin-sdk-go" role="button">Build your own plugin</a>
  </div>
  {{< /tab >}}

  {{< tab name="Integrations" >}}
  <p class="-text-700 mt-4 mb-5">Track your applications and containers’ behaviors by collecting their communications with the kernel thanks to eBPF. Falco detects out of the box the context and can enrich all events with metadata from the docker engine.</p>
  
  {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap=5 class="gallery-vendor">}}
  {{< vendor_gallery_item integrations />}}
    <div class="d-flex flex-column align-items-center">
      <a class="icon-button shadow" href="https://github.com/falcosecurity/falcosidekick#outputs">
        <img src="/img/icons/box-arrow-up-right.svg"/>
      </a>
      <span class="font-weight-bold mt-2">More outputs...</span>
    </div>
  {{< /blocks/grid >}}

  <div class="text-center mt-5">
    <a class="btn btn-lg btn-primary" href="https://github.com/falcosecurity/falcosidekick/issues/new?assignees=&labels=kind%2Ffeature&template=feature_request.md&title=" role="button">Need a new integration?</a>
  </div>
  {{< /tab >}}

  {{< /blocks/tabs >}}


  {{< blocks/tabs name="vendors" class="mt-5">}}
  
  {{< tab name="Vendors" >}}
  <p class="-text-700 mt-4 mb-5">Track your applications and containers’ behaviors by collecting their communications with the kernel thanks to eBPF. Falco detects out of the box the context and can enrich all events with metadata from the docker engine.</p>

  {{< blocks/grid layout="lg-4 md-3 sm-2 2" gap=5 class="gallery-vendor">}}
    {{< vendor_gallery_item vendors />}}
  {{< /blocks/grid >}}

  <div class="text-center mt-5">
    <a class="btn btn-lg btn-primary" href="https://github.com/falcosecurity/falco/blob/master/ADOPTERS.md#adding-a-name" role="button">Add your logo</a>
  </div>

  {{< /tab >}}

  {{< tab name="End-users" >}}
  <p class="-text-700 mt-4 mb-5">Track your applications and containers’ behaviors by collecting their communications with the kernel thanks to eBPF. Falco detects out of the box the context and can enrich all events with metadata from the docker engine.</p>
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