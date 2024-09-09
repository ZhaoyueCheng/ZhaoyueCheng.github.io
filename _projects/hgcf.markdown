---
layout: page
title: >
    HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering (WWW 2021)
description: >
    Code and Paper for project HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering (WWW 2021)
img: assets/img/projects/hgcf.png
importance: 2
category: Research
---

### HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering (**WWW 2021**) [Paper](/assets/pdf/www2021_hgcf.pdf) [Code](https://github.com/layer6ai-labs/HGCF)

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/projects/hgcf.png title: "Model Architecture" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    HGCF Model Architecture
</div>

***Abstract:*** Hyperbolic spaces offer a rich setup to learn embeddings with superior properties that have been leveraged in areas such as computer vision, natural language processing and computational biology. Recently, several hyperbolic approaches have been proposed to learn robust representations for users and items in the recommendation setting. However, these approaches don’t capture the higher order relationships that typically exist in the recommendation domain.

Graph convolutional neural networks (GCNs) on the other hand excel at capturing higher order information by applying multiple levels of aggregation to local representations. In this paper we combine these frameworks in a novel way, by proposing a hyperbolic GCN model for collaborative filtering. We demonstrate that our
model can be effectively learned with a margin ranking loss, and show that hyperbolic space has desirable properties under the rank margin setting. 

At test time, inference in our model is done using the hyperbolic distance which preserves the structure of the learned space. We conduct extensive empirical analysis on three public benchmarks and compare against a large set of baselines. Our approach achieves highly competitive results and outperforms leading baselines including the Euclidean GCN counterpart. We further study the properties of the learned hyperbolic embeddings and show that they offer meaningful insights into the data.