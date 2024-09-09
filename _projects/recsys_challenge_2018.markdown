---
layout: page
title: >
    ACM Spotify RecSys Challenge 2018 1st Place Solution
description: >
    Code and Paper for project Two-stage Model for Automatic Playlist Continuation at Scale (ACM Spotify RecSys Challenge 2018 1st place Solution)
img: assets/img/projects/recsys_challenge2018.png
importance: 3
category: Applied Research
---

### Two-stage Model for Automatic Playlist Continuation at Scale (ACM **Spotify** RecSys Challenge 2018 **1st** place Solution) [Paper](/assets/pdf/recsys2018_challenge.pdf) [Code](https://github.com/layer6ai-labs/RecSys2018)

<br />

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/projects/recsys_challenge2018.png title: "Model Pipeline" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Two-Stage Model Pipeline
</div>

***Abstract:*** Automatic playlist continuation is a prominent problem in music recommendation. Significant portion of music consumption is now done online through playlists and playlist-like online radio stations.
Manually compiling playlists for consumers is a highly time consuming task that is difficult to do at scale given the diversity of tastes and the large amount of musical content available. Consequently, automated playlist continuation has received increasing attention recently. The 2018 ACM RecSys Challenge is dedicated to evaluating and advancing current state-of-the-art in automated playlist continuation using a large scale dataset released by Spotify. 

In this paper we present our approach to this challenge. We use a two-stage model where the first stage is optimized for fast retrieval, and the second stage re-ranks retrieved candidates maximizing the accuracy at the top of the recommended list. Our team vl6 achieved **1st** place in both main and creative tracks out
of over 100 teams.