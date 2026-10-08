---
layout: page
title: Wave-based computing
description: 
img: assets/img/publication_preview/2026Arxiv_Xi_CrossPlatform_Fig1.png
importance: 1
category: Microwave acoustics
related_publications: true
---



Analogue computing uses the physical behaviours of devices to provide energy-efficient arithmetic operations. However, scaling up analogue computing platforms by simply increasing the number of devices leads to challenges such as device-to-device variation. 

We have pioneered the development of phononic analog computing architectures {% cite ji2025synthetic %} that use surface acoustic wave (SAW) and phononic crystal (PnC) resonators as information carriers for low-power, near-sensor processing. These devices exploit frequency-domain interference and nonlinear transduction to perform analog multiplication, filtering, and activation—enabling energy-efficient computation without digital conversion.

Here we report scalable analogue computing and neural networks in the synthetic frequency domain using an integrated nonlinear phononic platform on lithium niobate . Our synthetic-domain computing is robust to device variations, as vectors and matrices are concurrently encoded at different frequencies within a single device, achieving a high throughput per area. Leveraging inherent nonlinearities, our device-aware neural network can perform a four-class classification task with an accuracy of 98.2%. Our synthetic-domain computing combines single-device parallelism, inherent nonlinearity and environmental stability, and could be of use in edge computing applications in which power efficiency and environmental resilience are crucial.

Our cross-platform frequency-domain physical neural networks {% cite xi2026crossplatform %} extend this approach to optical, microwave, and acoustic-wave platforms using identical models and pre-trained parameters. Shared second-order nonlinear processes enable the same network to operate across these platforms without parameter fine-tuning. On a unified four-class classification task, the networks achieve inference accuracies of 97.6% in optics, 98.4% in electronics, and 98.2% in mechanics.

#### Our phononic device to implement analog computing and neural networks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025NE_Figure2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    
</div>


#### Demonstration of neural networks in the synthetic frequency domain using our device.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025NE_Figure4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    
</div>





