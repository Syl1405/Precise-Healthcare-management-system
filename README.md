
# 生理數據與疾病風險視覺化管理系統


照護機構在過去往往是透過手寫在紀錄被照護者的狀況，資料的繁雜易造成個人照護資料管理上的困難，且在面對要調閱訪談紀錄時，往往需要費時聆聽音檔抓取重點。
因此我們希望改良以往的照護模式，讓護理人員能夠快速地找到問題，並加以防範以減少憾事發生，也減少醫療資源的消耗。

本作品會蒐集使用者的個人病史及臨床觀察資料，並結合穿戴式裝置，偵測使用者的生理數據，最後綜合以上資料來估計當日病發機率，供照護機構的管理者參考。

## 功能簡介

### 管理儀錶板

這個頁面可以看見每個受照護者當下的狀況，只要受照護者有數據偏離正常值，就會以不同燈號表示，點擊卡片即可進入個人頁面，
此外左上角還有搜尋功能，可以快速尋找其中一種數值偏離正常值的受照護者

![](https://i.imgur.com/OZpgnFm.jpg =500x300)


### 語音分析
透過API將音檔轉成文字，取得關鍵字出現頻率，以文字雲的方式呈現，
照護者只須點選語音分析訪談功能，系統即會以視覺立即呈顯談話重點

![](https://i.imgur.com/98mSfY1.png =500x300)

  #文字雲圖

### 風險評估

基於Framingham Risk Score估計心血管相關疾病的風險，我們會每日統計受照護人的健康資料作統計並視覺化

![](https://i.imgur.com/smXi3iH.png =500x300)

### 資料視覺化

使用HighChart.js精選適合的圖表來傳達各式即時與歷史生理數據，包含心跳，血壓，血糖等等。

![](https://i.imgur.com/TnwYeIs.jpg =500x300)

## 開發流程

我們遵循完整的軟體開發流程，從最一開始的[user story](https://drive.google.com/file/d/1z7V2q-Y4YtiDV1KeeHV1wEInJGR_NIXG/view?usp=sharing),[function map, flowchart](https://drive.google.com/file/d/1s54lWls3S8VSwLZEZzNNAoL53RSv7FxL/view?usp=sharing) ,UI的設計 都有經過完整的討論以及修正

前端採用的框架為 React.js & Redux , 並搭配highchart.js作為資料視覺化的套件
後端串接node.js，資料庫使用mySQL
文字雲的部分則是使用python資料處理及語音辨識，使用t3cloud呈現
