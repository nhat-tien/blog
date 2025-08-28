+++
title = "Tối Ưu Hóa Hàm Mất Mát Trong Logistic Regression"
date = "2025-08-23"
lastmod = "2025-08-23"
side_toc = true
description = ""
math = true
tags = [
    "machine learning",
    "vietnamese"
]
draft = false
+++


## Kỹ thuật Gradient Descent

Gradient Descent là thuật toán tối ưu phổ biến trong máy học, dùng để tìm
điểm cực tiểu của loss function, hay nói cách khác là tìm điểm tham số tối ưu
để cho ra sai số nhỏ nhất.

Công thức chung cho các dạng Gradient Descent là:

$$
  \textbf{w}_{new} = \textbf{w}_{old} - \alpha \cdot \nabla J(\textbf{w})
$$

Với: 
- \(\textbf{w}\) : vector hệ số.
- \(\alpha\) : tốc độ học (learning rate).
- \(\nabla J(\textbf{w})\) : đạo hàm của loss function theo hệ số.

## Đạo hàm của loss function

Ta có loss function tại một điểm dữ liệu

$$
   J(\textbf{w}; \textbf{x}_i, y_i) = - (y_i\log(\hat{y_i}) + (1 - y_i)\log(1 - \hat{y_i}))
$$

tính đạo hàm, áp dụng Chain Rule:

$$
\frac{\partial J(\textbf{w}; \textbf{x}_i, y_i)}{\partial \textbf{w}} = 
\frac{\partial J(\textbf{w}; \textbf{x}_i, y_i)}{\partial \hat{y}} 
\cdot \frac{\partial \hat{y}}{\partial z} 
\cdot \frac{\partial z}{\partial \textbf{w}}
$$

> Trong đó:
>
> \(\hat{y} = \frac{1}{1 + e^{-z}}\)
>
> \(z = \textbf{w}^T\textbf{x}\)

Ta tính từng phần

$$
\begin{align*}
\frac{\partial J(\textbf{w}; \textbf{x}_i, y_i)}{\partial \hat{y}} 
&= - \frac{y}{\hat{y}} + \frac{1-y}{1-\hat{y}} \\\\
\frac{\partial \hat{y}}{\partial z} &= \frac{e^{-z}}{(1 + e^{-z})^2} =\hat{y}(1 - \hat{y}) \\\\
\frac{\partial z}{\partial \textbf{w}} &= \textbf{x}
\end{align*}
$$

Ghép lại được

$$
\frac{\partial J(\textbf{w}; \textbf{x}_i, y_i)}{\partial \textbf{w}} = (\hat{y}_i - y_i)\textbf{x}_i
$$

Ta được công thức cập nhật cho Gradient Descent là

$$
  \textbf{w} = \textbf{w} - \alpha (\hat{y}_i - y_i)\textbf{x}_i
$$

## Các thuật toán biến thể Gradient Descent

### 1. Batch Gradient Descent

Trong thuật toán này, với mỗi epoch, \(\textbf{w}\) sẽ được cập nhật với gradient của tất
cả các điểm dữ liệu có trong bộ training.

### 2. Stochastic Gradient Descent

Thay vì xử lí tất cả điểm dữ liệu trong mỗi epoch, thuật toán *Stochastic Gradient Descent*
lại có một cách tiếp cận khác. Mỗi epoch sẽ ứng với \(N\) lần cập nhật \(\textbf{w}\) với \(N\)
là số điểm dữ liệu.

### 3. Mini-batch Gradient Descent

## Những phương pháp tối ưu khác

### Gradient Descent với Momentum

### Phương pháp Newton

### Regularization

## Triển khai trong Python

## Ref

- [Machine Learning Cơ Bản | Gradient Descent](https://machinelearningcoban.com/2017/01/16/gradientdescent2/)


