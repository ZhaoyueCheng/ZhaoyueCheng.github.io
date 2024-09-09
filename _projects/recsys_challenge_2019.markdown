---
layout: page
title: >
    ACM Trivago RecSys Challenge 2019 2nd Place Solution
description: >
    Paper for project Robust Contextual Models for In-Session Personalization (ACM Trivago RecSys Challenge 2019 2nd place Solution)
img: assets/img/projects/recsys_challenge2019.png
importance: 5
category: Applied Research
---

### Robust Contextual Models for In-Session Personalization (ACM **Trivago** RecSys Challenge 2021 **2nd** place Solution) [Paper](/assets/pdf/recsys2019_challenge.pdf)

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path: assets/img/projects/recsys_challenge2019.png title: "Data Partition" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Forward in time data partitioning and challenge re-ranking task
</div>

***Abstract:*** Most online activity happens in the context of a session; to enable better user experience many online platforms aim to dynamically refine their recommendations as sessions progress. A popular approach is to continuously re-rank recommendations based on current session activity and past session logs. This motivates
the 2019 ACM RecSys Challenge organised by Trivago. Using the session log dataset released by Trivago, the challenge aims to benchmark models for in-session re-ranking of hotel recommendations. In this paper we present our approach to this challenge where we first contextualize sessions in a global and local manner, and then train gradient boosting and deep learning models for re-ranking. Our team achieved **2nd** place out of over 570 teams, with less than 0.3% relative difference in Mean Reciprocal Rank from the 1st place team.