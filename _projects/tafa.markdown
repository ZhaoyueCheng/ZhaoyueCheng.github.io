---
layout: page
title: >
    TAFA (RecSys 2020)
description: >
    Code and Paper for project TAFA: two-headed attention fused autoencoder for context-aware recommendations (RecSys 2020)
img: /assets/img/projects/tafa.png
importance: 1
category: Research
---

### TAFA: two-headed attention fused autoencoder for context-aware recommendations (**RecSys 2020**) [Paper](/assets/pdf/recsys2020_tafa.pdf) [Code](https://github.com/layer6ai-labs/HGCF)

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/tafa.png' | relative_url }}" alt="" title="Model Architecture"/>
    </div>
</div>
<div class="caption">
    TAFA Model Architecture
</div>

***Abstract:*** Collaborative filtering with implicit feedback is a ubiquitous class of recommendation problems where only positive interactions such as purchases or clicks are observed. Autoencoder-based recommendation models have shown strong performance on many implicit feedback benchmarks. However, these models tend to suffer from popularity bias making recommendations less personalized. User-generated reviews contain a rich source of preference information, often with specific details that are important to each user, and can help mitigate the popularity bias. Since not all reviews are equally useful, existing work has been exploring various forms of attention to distill relevant information. In the majority of proposed approaches, representations from implicit feedback and review branches are simply concatenated at the end to generate predictions. This can prevent the model from learning deeper correlations between the two modalities and affect prediction accuracy. 

To address these problems, we propose a novel Two-headed Attention Fused Autoencoder (TAFA) model that jointly learns representations from user reviews and implicit feedback to make recommendations. We apply early and late modality fusion which allows the model to fully correlate and extract relevant information from both input sources. To further combat popularity bias, we leverage the Noise Contrastive Estimation (NCE) objective to
“de-popularize” the fused user representation via a two-headed decoder architecture. Empirically, we show that TAFA outperforms leading baselines on multiple real-world benchmarks. Moreover, by tracing attention weights back to reviews we can provide explanations for the generated recommendations and gain further insights into user preferences