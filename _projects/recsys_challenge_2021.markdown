---
layout: page
title: >
    ACM Twitter RecSys Challenge 2021 3rd Place Solution
description: >
    Paper for project User Engagement Modeling with Deep Learning and Language
    Models (ACM Twitter RecSys Challenge 2021 3rd place Solution)
img: assets/img/projects/recsys_challenge2021.png
importance: 5
category: Applied Research
---

### User Engagement Modeling with Deep Learning and Language Models (ACM **Twitter** RecSys Challenge 2021 **3nd** place Solution) [Paper](/assets/pdf/recsys2021_challenge.pdf) 

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/recsys_challenge2021.png" title="Model Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Model Pipeline Overview
</div>

***Abstract:*** Twitter is one of the main information sharing platforms in the world with millions of tweets created daily. To ensure that users get relevant content in their feeds Twitter extensively leverages machine learning-based recommender systems. However, given the large volume of data, all production systems must be both memory and CPU efficient. In the 2021 ACM RecSys challenge Twitter simulates the production environment with a large dataset of almost 1 bilion user-tweet engagements that span a 4 week period. The goal is to accurately predict engagement type, and all models are subject to strict run-time constraints during inference. 

In this paper we present our approach to the 2021 ACM Recsys challenge. We use a hybrid pipeline and leverage gradient boosting, neural network classifiers and multi-lingual language models to maximize performance. Our approach achieves strong results placing **3rd** on the public leaderboard. We further explore the complexity of language model inference, and show that through distillation it can be possible to run such models in highly constrained production environments.