+++
title = "Giới Thiệu Về Hồi Qui Logistic"
date = "2025-07-17"
lastmod = "2025-08-23"
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


## Logit

Hàm Logit hay Logistic Function được định nghĩa như sau:

$$
   logit(p) = \log(Odds) = \log(\frac{p}{1 - p})
$$

- \(p\) là xác suất và có giá trị trong khoảng \([0, 1]\)
- \(logit(p)\) có miền giá trị \([-\infty, \infty]\)

## Sigmod

Hàm Sigmod lại ngược lại với Logit, khi nó nhận một giá trị liên tục từ \(-\infty\) đến \(\infty\) và có miền giá trị \([0, 1]\)

$$
  \sigma(z) = \frac{1}{1 + e^{-z}}
$$


## Logistic Regression - Hồi qui logistic

**Logistic Regression** là một mô hình hồi qui sử dụng logistic function (hay Logit) để
mô hình hóa mối liên hệ giữa biến phụ thuộc (hay còn gọi biến mục
tiêu) và các biến độc lập, từ đó có thể cho ta biết được nhiều
thông tin như mức độ ảnh hưởng của các yếu tố nguy cơ hoặc đưa
ra dự đoán với dữ liệu hoàn toàn mới.

Biến phụ thuộc thường là biến nhị phân (giá trị 0 hoặc 1), hoặc là
xác suất xảy ra của một sự kiện, hiện tượng mà chúng ta đang cố
gắng nghiên cứu (ta có thể xác định một ngưỡng cố định để biến đổi
từ xác suất sang biến nhị phân như \(p > 0.5\) thì sẽ là 1 và
ngược lại là 0).

Ví dụ trong nghiên cứu y khoa, người ta muốn dự đoán được người 
bệnh có nguy cơ bị gãy xương, các chuyên gia sẽ tiến hành khảo 
sát trên số lượng lớn bệnh nhân. Họ thu thập thông tin về các chỉ
số như độ tuổi, BMI, mật độ chất khoáng trong xương,... và tình trạng thực
tế rằng họ đã từng xảy ra tình trạng gãy xương chưa. Biến \(Y\) đại
diện cho khả năng người được phỏng vấn có nguy cơ gãy xương trong
tương lai, biến \(X\) đại diện cho những tham số như độ tuổi, IPM, vv... 
mà người ta tin rằng nó có góp phần vào nguy cơ gãy xương. Mục
tiêu của hồi qui logistic là tìm ra phương trình đưa ra dự đoán chính
xác nhất giá trị của \(Y\) tương ứng với giá trị \(X\).

Biến \(Y\) là xác suất để thu được một giá trị cụ thể của một
biến định tính. Trong ví dụ trên, giá trị của biến định tính là "gãy
xương" và "không gãy xương". Biến \(Y\) sẽ là xác suất bệnh nhân bị "gãy
xương", biến xác suất này sẽ có giá trị từ \(0\) đến \(1\). Tuy nhiên, 
khoảng giá trị \([0, 1]\) của xác suất không phù hợp để thực hiện hồi qui, 
ta cần một đại lượng có khoảng giá trị \([-\infty, \infty]\) để đại diện. Logarit tự nhiên của 
Odds (\(\log(Odds)\)) phù hợp điều kiện này. Ta được phương trình sau:

$$
  \log(\frac{p}{1 - p}) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_m x_m
$$

Trong đó: \(x_1, x_2, ..., x_m\) là các biến độc lập, \(\beta_1, \beta_2, ..., \beta_m \)
là các hệ số tương ứng với \(x\) và \(\beta_0\) là \(bias\)

Mục tiêu của chúng ta bây giờ là tìm ra bộ giá trị \(\beta\) (\(\beta_0, \beta_1,...,\beta_m\))
để cho phương trình cho ra được kết quả gần giống nhất với số liệu quan sát thực tế.

## Logistic Regression dự đoán kết quả như thế nào

Với hệ số \(\textbf{w} = [\beta_0, \beta_1, ..., \beta_m]\) ta đã tìm được sau
quá trình huấn luyện mô hình (chúng ta sẽ bàn đến cách thực hiện ở
mục sau), đây là bộ giá trị tối ưu nhất. Chúng ta nhân vô hướng hệ số với 
một điểm dữ liệu quan sát mới \(\textbf{x} = [x_1, x_2, ..., x_m]\), được kết quả là \(z\)

$$
 \textbf{w}^T\textbf{x} = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_m x_m = z
$$

Đưa giá trị \(z\) vào hàm **sigmod**, ta được kết quả là p có giá trị 
trong khoảng \([0, 1]\), thể hiện xác suất có xảy ra biến cố 

$$
  \sigma(z) = \frac{1}{1 + e^{-z}} = p
$$

Từ đó, ta xác định điểm dữ liệu quan sát được đó 
thuộc về lớp phân loại 0 hay 1 (với ngưỡng đặt trước là \(p > 0.5\) thì thuộc lớp 1 và ngược lại)

### Cách tìm ra hàm Sigmod

Ta có 

$$
\begin{gather*}
\log(Odds) = \log(\frac{p}{1 - p}) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_m x_m \\\\
\Leftrightarrow \log(\frac{p}{1 - p}) = z \\\\
\Leftrightarrow \frac{p}{1 - p} = e^z \\\\ 
\Leftrightarrow p = e^z(1 - p) \\\\
\Leftrightarrow p = e^z - e^zp \\\\
\Leftrightarrow p (1 + e^z) = e^z \\\\
\Leftrightarrow p = \frac{e^z}{ 1 + e^z }  \\\\
\Leftrightarrow p = \frac{1}{ 1 + e^{-z} }  \\\\
\end{gather*}
$$

Đây chính là hàm **Sigmod** 

$$
  \sigma(z) = \frac{1}{1 + e^{-z}} = p
$$

## Huấn luyện mô hình Logistic Regression

### Likelihood function

Ta biết rằng xác suất để một điểm dữ liệu \(\textbf{x}\) được phân vào lớp 1
là \(\sigma(\textbf{w}^T\textbf{x})\), và phân vào lớp 0 là 
\(1 - \sigma(\textbf{w}^T\textbf{x})\). Với mỗi điểm dữ liệu huấn luyện (đã biết đầu ra \(y\)),
ta có được biểu thức sau:

$$
\begin{align*}
   P(y_i = 1|x_i;\textbf{w}) &=     \sigma(\textbf{w}^T\textbf{x}) &(1)\\
   P(y_i = 0|x_i;\textbf{w}) &= 1 - \sigma(\textbf{w}^T\textbf{x}) &(2)
\end{align*}
$$

Mục tiêu của quá trình huấn luyện chúng ta cần tìm ra hệ số \(\textbf{w}\)
tối ưu sao cho \(\sigma(\textbf{w}^T\textbf{x})\) càng gần với 1 càng tốt với các điểm dữ liệu
thuộc gán nhãn 1, và càng gần 0 càng tốt với các dữ liệu gán nhãn 0.

Ta đặt \(\hat{y} = \sigma(\textbf{w}^T\textbf{x})\), \(\hat{y}\) sẽ là giá trị được dự đoán từ trong
mô hình, phân biệt với \(y\) là giá trị nhãn thực tế. Gộp hai biểu thức \((1) (2)\) được

$$
   P(y_i|x_i;\textbf{w}) = \hat{y}^{y_i}(1 - \hat{y})^{1-y_i}
$$

Muốn mô hình xây dựng được gần với dữ liệu đã cho nhất, ta cần phải tìm cách làm cho xác xuất này
đạt giá trị cao nhất. Bài toán đi tìm tham số để mo hình gần giống với dữ liệu nhất gọi là bài toán
*maximum likelihood estimation*.

Giả sử các điểm dữ liệu là các biến cố độc lập, theo quy tắc nhân xác suất, 
ta tính được likelihood trên tất cả các điểm dữ liệu

$$
   P(\textbf{y}|\textbf{X};\textbf{w}) = \prod_{i = 1}^{N} \hat{y_i}^{y_i}(1 - \hat{y_i})^{1-y_i}
$$

Tuy nhiên có những lý do sau đây khiến chúng ta không làm việc trực tiếp trên likelihood function:
- Tính toán phức tạp do likelihood function là tích các xác suất
- Tích của nhiều số hạng nhỏ hơn 1 sẽ cho ra một số quá nhỏ, dẫn đến sai số trong tính toán
- Trong lĩnh vực machine learning, người ta thường đi tìm tham số theo hướng giải bài toán cực tiểu. 

Một phương pháp thay thế cho *maximum likelihood estimation* đó là *minimize log-loss*

### Hàm mất mát - Loss function

Ta lấy logarit tự nhiên của likelihood function, biến phép nhân thành cộng, đồng thời
thêm dấu âm để thay vì tìm giá trị lớn nhất, ta đi tìm giá trị nhỏ nhất, ta được hàm mất mát
hay loss function.

$$
   J(\textbf{w}) = - \sum_{i = 1}^{N} y_i\log(\hat{y_i}) + (1 - y_i)\log(1 - \hat{y_i})
$$

**Bài viết sau** [Tối ưu hóa hàm mất mát](/)

## Further reading

### Youtube video

- [Machine Learning Cơ Bản | Thuật Toán Hồi Quy Logistic (Logistic Regression)](https://www.youtube.com/watch?v=0OEkXMAnKu4) 

## References
- [Logistic Regression | Machine Learning cơ bản](https://machinelearningcoban.com/2017/01/27/logisticregression/)
- [Multiple Logistic Regression](https://stats.libretexts.org/Bookshelves/Applied_Statistics/Biological_Statistics_(McDonald)/05%3A_Tests_for_Multiple_Measurement_Variables/5.07%3A_Multiple_Logistic_Regression)
