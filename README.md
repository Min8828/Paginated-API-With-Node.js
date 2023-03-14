# Paginated API With Node.js

## 特點
* 創建分頁API，可以接受不同類型的 model 作為參數，並回傳請求 (request) 所需的資料，如: users?page=2&limit=5 回傳 第 (2-1)^5 個到第 2^5 個資料，以及第一頁和下一頁資訊
* 回傳資料包含: 上一頁 (previous) 起始位置資訊 (除了第一頁外)，下一頁 (next) 起始位置資訊 (除了最後一頁外)，及請求頁面的資料

### 學習項目
* 如何讓 API 接受 model 參數回傳正確資料
* 如何使用 Promise.all() 建立多筆資料儲存至資料庫
* 如何找出請求的頁面資料 => 使用 find().limit().skip() 

### 使用工具
* express.js
* mongoDB + mongoose
* REST Client (測試 API 功能性)
