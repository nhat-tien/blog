+++
title = "Giới Thiệu Về Hồi Qui Logistic"
date = "2025-07-17"
lastmod = "2025-07-17"
side_toc = true
description = ""
math = true
tags = [ 
    "machine learning"
]
draft = false 
image = "https://images.unsplash.com/photo-1648201637025-1c77b9be3013?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
+++

## Odds là gì?

Odds là **tỉ số giữa xác suất xảy ra với xác xuất không xảy ra** của một biến cố mà chúng ta cần xét 

Cho \(p\) là xác suất xảy ra của biến cố, ta được Odds của biến cố

$$
   Odds = \frac{p}{1 - p}
$$

*Ví dụ*: Xác suất hôm nay trời sẽ mưa là 0.75 (75%), còn xác suất không mưa là 0.25 (25%). Vậy Odds của trời mưa là \(0.75/0.25 = 3\). Điều đó có nghĩa khả năng mưa cao hơn gấp ba lần khả năng trời không mưa.


## Logit = log(Odds)

\(\log(Odds)\) tức là

$$
   \log(Odds) = \log(\frac{p}{1 - p})
$$

### Vì sao lại dùng log(Odds) thay vì Odds

- Nếu ta đặt \(p\) là xác suất, là biến liên tục có khoảng giá trị từ \([0; 1]\). Và \(Odds\) liên 
biến iên tục có khoảng giá trị từ \([0; +\infty]\). \(p\) càng gần 1 thì giá trị của \(Odds\) càng
lớn đến vô cùng. Điều này dẫn đến Odds[^1] cldnsk

- 



## Implement in program 

## How to enhance 

### 

$$
  \sigma(z) = \frac{1}{1 + e^{-z}}
$$

## Further reading

### Youtube video

- [Machine Learning Cơ Bản | Thuật Toán Hồi Quy Logistic (Logistic Regression)](https://www.youtube.com/watch?v=0OEkXMAnKu4) 

[^1]: [An Introduction to Log Odds | Medium](https://medium.com/@matthewjacobholliday/an-introduction-to-log-odds-86d364fa6630) 


