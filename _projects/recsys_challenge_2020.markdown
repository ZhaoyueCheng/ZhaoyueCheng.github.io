---
layout: page
title: >
    ACM Twitter RecSys Challenge 2020 2nd Place Solution
description: >
    Paper for project Predicting Twitter Engagement With Deep Language Models (ACM Twitter RecSys Challenge 2020 2nd place Solution)
img: assets/img/projects/recsys_challenge2020.png
importance: 5
category: Applied Research
---

### Predicting Twitter Engagement With Deep Language Models (ACM **Twitter** RecSys Challenge 2021 **2nd** place Solution) [Paper](/assets/pdf/recsys2020_challenge.pdf) 

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/projects/recsys_challenge2020.png title: "Model Architecture" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Model Architecture
</div>

***Abstract:*** Twitter has become one of the main information sharing platforms for millions of users world-wide. Numerous tweets are created daily, many with highly time sensitive content such as breaking news,
new multimedia content or personal updates. Consequently, accurately recommending relevant tweets to users in a timely manner is a highly important and challenging problem. The 2020 ACM RecSys Challenge is aimed at benchmarking leading recommendation models for this task. The challenge is based on a large and recent dataset of over 200M tweet engagements released by Twitter with content in over 50 languages. 

In this work we present our approach where we leverage recent advances in deep language modeling and attention architectures, to combine information from extracted features, user engagement history and target tweet content. We first finetune leading multilingual language models M-BERT and XLM-R for Twitter data. Embeddings from these models are used to extract tweet and user history representations. We then combine all components together and jointly train them to maximize engagement prediction accuracy. Our approach achieves highly competitive performance placing **2nd** on the final private leaderboard.