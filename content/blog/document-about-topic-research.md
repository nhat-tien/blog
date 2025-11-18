+++
title = "Phân tích đề tài"
date = "2025-11-15"
lastmod = "2025-11-18"
side_toc = true
description = ""
math = true
tags = [ ]
draft = false 
image = ""
+++

Em không tìm thấy có dự án hay bài báo nghiên cứu giống với đề tài của em, 
nên em chỉ tìm được những bài nói về mỗi khía cạnh của đề tài: 
**Declarative**, **Functional Programming** và **FCIS**[^FCIS]

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
các số chẵn (`if i % 2 == 0`) từ 1 đến 10 (`i for i in range(1, 11)`).

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

Còn đối với đề tài của em, em chọn thiết kế một *ngôn ngữ lập trình hàm* để đạt 
được tính khai báo trong lập trình khai báo. 

## Functional Programming - Lập Trình Hàm

Functional Programming (FP) là một mô hình lập trình, có bốn trụ cột triết lý nền tảng 
của mô hình này phân biệt nó với các mô hình khác.

- *Hàm thuần túy (pure function) là những hàm mà khi thực thi nó không tạo 
ra bất kì một hiệu ứng phụ (side effect) nào*.

- *Tính bất biến của dữ liệu là quan trọng nhất*.

- *Hàm số là công dân hạng nhất (first-class citizens), hàm có thể được truyền làm tham số, trả về từ hàm khác, lưu trữ trong cấu trúc dữ liệu.*

- *Tư duy khai báo, mô tả điều mong muốn hơn là liệt kê các bước thực hiện.*

Bởi vì những triết lý trên, những ngôn ngữ lập trình hàm thường được đánh giá là code 
dễ đọc, dễ kiểm thử và ít lỗi hơn, đặc biệt trong môi trường đa luồng hoặc bất đồng bộ.

Những ngôn ngữ lập trình hàm nổi tiếng là F#, Haskell, Elixir, Elm.

Luận văn Thạc sĩ của Enni Salmi[^5] so sánh ba phiên bản của một ứng
dụng web (React/Redux Saga ít hướng hàm, React/Ramda hướng hàm và Elm thuần túy hướng
hàm) để đánh giá các mức độ khác nhau của lập trình hàm (FP) trong
phát triển ứng dụng web hiện đại. Kết quả cho thấy, ngôn ngữ FP thuần
túy như Elm mang lại nhiều ưu điểm vượt trội về tốc độ biên dịch,
kiến trúc rõ ràng và đặc biệt là khả năng kiểm thử đơn vị dễ
dàng hơn (do source code thuần túy không có hiệu ứng phụ). Tuy nhiên, Elm
vẫn còn hạn chế về tính sẵn có của thư viện và cộng đồng hỗ
trợ cho các tính năng phức tạp, khiến việc triển khai trong dự án lớn
gặp khó khăn. Tác giả kết luận rằng việc <mark>áp dụng cách tiếp cận càng
hướng hàm càng tốt là lựa chọn tốt nhất cho các dự án mới</mark>, và
đề xuất sử dụng ngôn ngữ TypeScript (hướng hàm với định kiểu tĩnh) như một
giải pháp cân bằng giữa độ tin cậy và tính phổ biến.

## Functional Core Imperative Shell

Functional Core Imperative Shell là một mẫu thiết kế kiến trúc phần mềm. Trong đó, phần mềm được 
chia thành hai phần. Phần lõi (Core) chứa bussiness logic, được viết code theo hướng 
lập trình hàm nhằm giảm thiểu lỗi, dễ kiểm thử. 
Phần vỏ (Shell) xử lí các tác vụ IO, Database, HTTP request/response. 

![](/images/flow.png "Mô hình FCIS")

Khái niệm này thì em không tìm được bài nghiên cứu, chỉ có từ nhiều bài viết, blog.

Trong sách *Clean Architecture*[^ca] của Uncle Bob tuy không trực tiếp đề cập đến khái niệm này, 
nhưng mô hình FCIS cũng rất phù hợp triết lý *kiến trúc sạch* mà ông theo đuổi. Đó là sự tách biệt giữa bussiness logic và framework.

Em tìm được một bài nói khá hay trên youtube. Đây là bài thuyết trình của Scott Wlaschin tại
hội thảo NDC. [Link youtube](https://www.youtube.com/watch?v=P1vES9AgfC4&t=3119s)

## Cách Tiếp Cận Của Em

#### Xây dựng một ngôn ngữ lập trình chuyên biệt (DSL) đóng vai trò là Functional Core

- Ngôn ngữ này mang tính khai báo.
- Ngôn ngữ này là Functional Programming Language.
- Dùng để khai báo các thành phần của Web service.
- Em đặt tên là Angi.

#### Phát triển Web Service Application đóng vai trò là Imperative Shell, phụ thuộc vào Core

- Xây dựng dựa trên framework Axum - ngôn ngữ Rust, rất mạnh về hiệu năng.
[Kết quả Benchmark](https://www.techempower.com/benchmarks/#section=data-r23) 
cho thấy axum luôn đứng top so với các framework truyền thống trong bài kiểm tra chịu tải.
- Sử dụng ngôn ngữ Angi như một ngôn ngữ nhúng (embedded language).

#### Đơn giản hóa toolchain cho Developer: một single-binary compiler

- Không cần Rustc, cargo (các tool cho Rust ecosystem).

#### Đơn giản hóa quá trình triển khai: standalon binary, không cần runtime bên ngoài

- Mà là runtime nhúng bên trong server.

[Link dự án đang được triển khai trên Github](https://github.com/nhat-tien/angi). Chi tiết triển khai kỹ thuật sẽ được cập nhật trên Github. 

![](/images/angi.png "Minh họa đơn giản flow hoạt động của phần mềm")


## Ưu Điểm/Khuyết Điểm So Với Các Đề Tài/Phần Mềm Đã Có

### Ưu điểm

- **Về mặt hiệu năng**: Tận dụng được sức mạnh của Axum - ngôn ngữ Rust, rất mạnh về hiệu năng.
[Kết quả Benchmark](https://www.techempower.com/benchmarks/#section=data-r23) 
cho thấy axum luôn đứng top so với các framework truyền thống trong bài kiểm tra chịu tải.
- **Về mặt phát triển ứng dụng**: triển khai kiến trúc FCIS, functional code logic nên code ít, ít bug, dễ bảo trì, dễ kiểm thử.

### Khuyết điểm

- Cần thời gian làm quen với mô hình lập trình mới, lập trình hàm.
- Hiện tại còn ít chức năng (nhưng tương lai hoàn toàn có thể mở rộng).

## Chứng Minh Tối Ưu

- Dẫn chứng nghiên cứu khoa học → mô hình đúng ✅
- So sánh kiến trúc → ưu điểm rõ ràng ✅
- Benchmark thực nghiệm → số liệu *(đang tiến hành)*
- Phân tích độ phức tạp → lý thuyết hiệu năng *(đang tiến hành)*
- Case study thực tế → tính áp dụng *(đang tiến hành)*
- Giảm chi phí bảo trì → lợi ích lâu dài *(đang tiến hành)*
- Khả năng mở rộng → phù hợp hệ thống lớn *(đang tiến hành)*

## Những Phần Mềm Có Triết Lý Phát Triển Tương Tự

Những sản phẩm này không trực tiếp triển khai pattern FCIS, nhưng nó truyền cảm hứng cho em thiết kế một hệ thống tương tự

### Wasp 
![wasp](/images/1/wasp.png)
[Wasp](https://wasp.sh/) là một framework giúp xây dựng fullstack web
- Nó sử dụng một ngôn ngữ DSL khá giống JSON. 
- Công nghệ đằng sau: React, NodeJs, Prisma.
- Tuy nhiên DSL không trực tiếp xử lí logic, phải dùng custom script bằng Javascript.

### NixOS

![nixos](/images/1/nixos.png)
[NixOS](https://nixos.org/) là một hệ điều hành phân phối của Linux, tập trung vào tính khai 
báo, khả năng tái sản xuất (reproducible).
- Sử dụng ngôn ngữ Nix (lập trình khai báo, lập trình hàm) để cấu hình mọi thứ, từ hệ thống đến 
phần mềm.


### Neovim
![neovim](/images/1/neovim.png)
[Neovim](https://neovim.io/) là trình editor nổi tiếng với khả năng mở rộng vô hạn nhờ vào cộng 
đồng phát triển plugin đông đảo.
- Sử dụng lua là ngôn ngữ cấu hình.
- Chức năng gốc dựng sẵn rất ít, nhưng nhờ lua mà mở rộng rất nhiều tính năng nâng cao.

### Phoenix framework

![phoenixframework](/images/1/phoenix.png)
[Phoenix framework](https://www.phoenixframework.org/) là một web framework dựa trên ngôn ngữ lập trình hàm Elixir

### Terraform - HashiCorp

![terraform](/images/1/terraform.png)
[Terraform](https://developer.hashicorp.com/terraform) là một tool sử dụng Terraform - ngôn 
ngữ cấu hình gần giống JSON - để cấu hình cơ sở hạ tầng cloud.

[^FCIS]: Functional Core Imperative Shell

[^ca]: R. C. Martin, *Clean Architecture: A Craftsman's Guide to Software Structure and Design*. Prentice Hall, 2017.
[^1]: Arjun Singh Saud, Tenish Shrestha, "Template based Program synthesis with Declarative
Programming for RESTful APIs", *Recent Trends in Cloud Computing and Web Engineering*, vol. 7, no. 1, 2024. Available: [link to pdf](https://www.researchgate.net/profile/Arjun-Saud-2/publication/385666877_Template_based_Program_synthesis_with_Declarative_Programming_for_RESTful_APIs/links/672f1bdd77b63d1220e6fc0c/Template-based-Program-synthesis-with-Declarative-Programming-for-RESTful-APIs.pdf)
[^2]: Stacy E. Finkelstein, Peter Freyd, and James Lipton, "A new framework for declarative programming", *Theoretical Computer Science*, vol. 300, no. 1, pp. 91–160, 2003. Available: [link](https://www.sciencedirect.com/science/article/pii/S0304397501003085)
[^3]: TRẦN, Trung Hà. *Nghiên cứu ngôn ngữ đặc tả yêu cầu theo hướng chuyên biệt miền*. 2019. PhD Thesis. Available: [link](https://doc.edu.vn/tai-lieu/luan-van-nghien-cuu-ngon-ngu-dac-ta-yeu-cau-theo-huong-chuyen-biet-mien-136121/)
[^4]: S. P. De Rosso, "Declarative Assembly of Web Applications from Predefined Concepts", Ph.D. dissertation, Dept. Elect. Eng. Comput. Sci., Massachusetts Inst. Technol., Cambridge, MA, 2020. Available: [link](https://dspace.mit.edu/handle/1721.1/128295)

[^5]: SALMI, Enni. "Comparing the use of a purely functional programming language to event-driven javascript in modern web application development", 2020, PhD Thesis, Master’s Thesis, Tampere University, 2020.[Online]. Available: [link](https://trepo.tuni.fi/bitstream/handle/10024/121287/SalmiEnni.pdf)
