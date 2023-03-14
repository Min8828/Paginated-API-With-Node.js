# Paginated API With Node.js

## 特點
* 創建分頁middleware，可以接受不同類型的 model 作為參數，並回傳請求 (request) 所需的資料，如: users?page=2&limit=5 回傳 第 (2-1)^5 個到第 2^5 個資料，以及第一頁和下一頁資訊
* 回傳資料包含: 上一頁 (previous) 資料起始位置 (除了第一頁外)，下一頁 (next) 資料起始位置 (除了最後一頁外)，及當下頁面的資料

### 學習項目
* 使用 Promise.all() 建立多筆資料儲存至資料庫
* 
