---
layout: page
title: >
    MCL: Mixed-Centric Loss for Collaborative Filtering (WWW 2022)
description: >
    Code and Paper for project MCL: Mixed-Centric Loss for Collaborative Filtering (WWW 2022)
img: assets/img/projects/mcl.png
importance: 1
category: Research
---

### MCL: Mixed-Centric Loss for Collaborative Filtering (**WWW 2022**) [Paper](/assets/pdf/www2022_mcl.pdf) [Code](https://github.com/layer6ai-labs/MCL)

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path: assets/img/projects/mcl.png title: "Model Component Illustration" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MCL Model Component Illustration
</div>

***Abstract:*** The majority of recent work in latent Collaborative Filtering (CF) has focused on developing new model architectures to learn accurate user and item representations. Typically, a standard pairwise loss function (BPR, Triplet, etc.) is used in these models, and little exploration is done on how to optimally extract signals from the available preference information. In the implicit setting, negative examples are sampled, and these losses allocate weights that solely depend on the difference in user distance between observed (positive) and negative item pairs. This can ignore valuable global information from other users and items, and lead to sub-optimal results. Motivated by this problem, we propose a novel loss which first leverages mining to select the most informative pairs, followed by a weighing process to allocate more weight to harder examples. Our weighting process consists of four different components, and incorporates distance information from other users, enabling the model to better position the learned representations. 

We conduct extensive experiments and demonstrate that our loss can be applied to different types of CF models leading to significant gains with each type. In particular, by applying our loss to the graph convolutional architecture, we achieve new state-of-the-art results on four different datasets. Further analysis shows that through our loss the model is able to learn better user-item representation space compared to other losses. 