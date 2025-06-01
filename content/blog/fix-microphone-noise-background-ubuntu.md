---
title: Fix Microphone Noise Background on Ubuntu
date: 2024-03-26 
lastmod: 2024-03-26 
description: 
img: 
stage: budding 
draft: false
toc: false
tags:
  - linux
  - fix
---

## Solution

- Add below script to `/etc/pulse/default.pa`


```txt
load-module module-echo-cancel source_name=noechosource sink_name=noechosink
set-default-source noechosource
set-default-sink noechosink
```

> the `noechosource` and `noechosink` are just name, you can rename it to whatever you want

- Reload pulseAudio by `pulseaudio -k` 
- Choose new device in settings of pulseAudio

## Ref
- [https://askubuntu.com/questions/18958/realtime-noise-removal-with-pulseaudio](https://askubuntu.com/questions/18958/realtime-noise-removal-with-pulseaudio)
- [https://www.youtube.com/watch?v=UNhJCD9H8Uw](https://www.youtube.com/watch?v=UNhJCD9H8Uw)
