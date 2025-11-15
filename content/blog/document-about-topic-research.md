+++
title = "Phân tích đề tài"
date = "2025-11-15"
lastmod = "2025-11-15"
side_toc = true
description = ""
math = true
tags = [ ]
draft = false 
image = ""
+++


## Declarative In Programming - Tính khai báo trong lập trình

Lập trình Khai báo là một kiểu viết chương trình theo hướng **mô tả** kết quả mà chương trình cần đạt, hơn là **trình bày từng bước** chương trình thực hiện như trong lập trình mệnh lệnh (Imperative Programming).

Ví dụ, lập trình mệnh lệnh

```python
# Python ví dụ mệnh lệnh
total = 0
for i in range(1, 11):      # bước 1: lặp từ 1 đến 10
    if i % 2 == 0:          # bước 2: kiểm tra số chẵn
        total += i          # bước 3: cộng vào tổng
print(total)                 # bước 4: in ra kết quả
```

lập trình khai báo 
```python
# Python ví dụ khai báo
total = sum(i for i in range(1, 11) if i % 2 == 0)
print(total)
```

Ở cách này, chúng ta mô tả về mặt trừu tượng ta muốn tổng (`sum`) 
các số chẵn (`if i % 2 == 0`) từ 1 đến 10 (`i for i in range(1, 11)`). Nó gần với ngôn ngữ 
tự nhiên hơn, dễ hiểu hơn.

Ngôn ngữ khai báo phổ biến nhất phải nói đến SQL:

```sql
SELECT * from `user` as u WHERE u.id = 3;
```

Nhìn vào ta nhìn thấy ngay kết quả mong đợi của câu lệnh và nó không hề thể 
hiện cách database thực hiện nó như thế nào.

Chủ đề này được nhiều bài nghiên cứu tiếp cận theo nhiều cách.

Một bài nghiên cứu[^1] đưa ra giải pháp kết hợp giữa Lập trình Khai báo và tạo chương trình 
dựa trên template (Template based Program) vào việc phát triển RESTful API. Họ chứng minh 
rằng **áp dụng nguyên lí lập trình khai báo đã giảm được sự phức tạp của coding thủ công và nâng 
cao khả năng bảo trì của hệ thống API**. <mark>Sản phẩm nghiên cứu sử dụng YAML để khai báo
các thành phần của hệ thống</mark> (router và database scheme).

Luận án Tiến sĩ tại MIT[^4] đề xuất một lý
thuyết phát triển ứng dụng web mới: thay vì viết mã thủ tục, ứng dụng
được lắp ráp một cách khai báo (declaratively) bằng cách cấu hình và tổng hợp
các đơn vị "khái niệm" toàn diện (full-stack), có khả năng tái sử dụng. Mỗi
khái niệm đóng gói tất cả logic (client, server, lưu trữ) và hành vi, cho
phép nhà phát triển tạo ứng dụng chỉ bằng cách liên kết dữ liệu và
giao diện mà không cần viết code logic truyền thống. Sản phẩm đạt được là
nền tảng Déjà Vu, giúp thực thi lý thuyết này. Nghiên cứu trường hợp cho
thấy, việc sử dụng Déjà Vu để xây dựng lại 12 ứng dụng phức tạp
đã **giảm 48.13% lượng mã và tiết kiệm công sức đáng kể so với các
công cụ thông thường**, đồng thời nâng cao chất lượng bảo mật và khả năng
sử dụng nhờ vào việc tái sử dụng các khối xây dựng đã được kiểm
chứng. Họ <mark>sử dụng JSON và một ngôn ngữ có cú pháp giống HTML</mark>.

Còn đối với đề tài của em, em chọn thiết kế một *ngôn ngữ lập trình hướng hàm* để đạt 
được tính khai báo trong lập trình khai báo. 

## Functional Programming - Lập Trình Hướng Hàm


## Functional Core Imperative Shell

![](/images/flow.png "Mô hình FCIS")

Trích dẫn sách [^ca] kjcnskdj 

## Những Phần Mềm Có Triết Lý Phát Triển Tương Tự

Những sản phẩm này không trực tiếp triển khai pattern FCIS[^FCIS], nhưng nó truyền cảm hứng cho em thiết kế một hệ thống tương tự [^ca]

### Wasp 
### NixOS
### Neovim
### Phoenix Framework
### Terraform - HashiCorp

## Cách Tiếp Cận Mới Của Em

### Xây dựng một ngôn ngữ lập trình chuyên biệt (DSL) đóng vai trò là Functional Core

- Ngôn ngữ này mang tính khai báo.
- Ngôn ngữ này là Functional Programming Language.
- Dùng để khai báo các thành phần của Web service.
- Em đặt tên là Angi.

### Phát triển Web Service Application đóng vai trò là Imperative Shell, phụ thuộc vào Core

- Xây dựng dựa trên framework Axum - ngôn ngữ Rust, rất mạnh về hiệu năng.
[Kết quả Benchmark](https://www.techempower.com/benchmarks/#section=data-r23) 
cho thấy axum luôn đứng top so với các framework truyền thống trong bài kiểm tra chịu tải.
- Sử dụng ngôn ngữ Angi như một ngôn ngữ nhúng (embedded language).

### Đơn giản hóa toolchain cho Developer: một single-binary compiler

- Không cần Rustc, cargo (các tool cho Rust ecosystem).

### Đơn giản hóa quá trình triển khai: standalon binary, không cần runtime bên ngoài

- Mà là runtime nhúng bên trong server.

![](/images/angi.png "Minh họa quy trình hoạt động của phần mềm")

## Ưu Điểm/Khuyết Điểm

### Ưu điểm
- Tận dụng được sức mạnh của Axum 
- 

## 

[Link dự án đang được triển khai trên github](https://github.com/nhat-tien/angi) 


## Link
- https://declarative.dev/
- https://dspace.mit.edu/handle/1721.1/128295

[^FCIS]: Functional Core Imperative Shell

[^ca]: R. C. Martin, *Clean Architecture: A Craftsman's Guide to Software Structure and Design*. Prentice Hall, 2017.
[^1]: Arjun Singh Saud, Tenish Shrestha, "Template based Program synthesis with Declarative
Programming for RESTful APIs", *Recent Trends in Cloud Computing and Web Engineering*, vol. 7, no. 1, 2024. Available: [link to pdf](https://www.researchgate.net/profile/Arjun-Saud-2/publication/385666877_Template_based_Program_synthesis_with_Declarative_Programming_for_RESTful_APIs/links/672f1bdd77b63d1220e6fc0c/Template-based-Program-synthesis-with-Declarative-Programming-for-RESTful-APIs.pdf)
[^2]: Stacy E. Finkelstein, Peter Freyd, and James Lipton, "A new framework for declarative programming", *Theoretical Computer Science*, vol. 300, no. 1, pp. 91–160, 2003. Available: [link](https://www.sciencedirect.com/science/article/pii/S0304397501003085)
[^3]: TRẦN, Trung Hà. *Nghiên cứu ngôn ngữ đặc tả yêu cầu theo hướng chuyên biệt miền*. 2019. PhD Thesis. Available: [link](https://doc.edu.vn/tai-lieu/luan-van-nghien-cuu-ngon-ngu-dac-ta-yeu-cau-theo-huong-chuyen-biet-mien-136121/)
[^4]: S. P. De Rosso, "Declarative Assembly of Web Applications from Predefined Concepts", Ph.D. dissertation, Dept. Elect. Eng. Comput. Sci., Massachusetts Inst. Technol., Cambridge, MA, 2020. Available: [link](https://dspace.mit.edu/handle/1721.1/128295)
