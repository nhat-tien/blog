#!/usr/bin/env bash

date=$(date +%Y-%m-%d)
git add .
git commit -m "publish: $date"
git push origin main
