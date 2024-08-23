# aqi-analysis
輔仁大學統計資訊學系 111學年度 智慧決策資訊系統實作 期末作業 (December 2022)

# Usage
## Set Up XAMPP
1. Install XAMPP (Do not install under `C:\Program Files`)
2. Start Apache and MySQL on the XAMPP control panel
3. Modify phpMyAdmin password `mysqladmin --user=root password "{your password}"`
4. On the XAMPP control panel, click config at the Apache row, select phpMyAdmin (config.inc.php) and modify `$cfg['Servers'][$i]['password'] = '{your password}';`
5. Head to `localhost`, User > root > Permission > change password

## Change Apache Root Folder (Optional)
1. On the XAMPP control panel, click config at the Apache row, select Apache (httpd.conf)
2. Modify the path to your desired one at `DocumentRoot`

## Run the Program
1. Clone this repository under the Apache root folder
2. Enable Apache from the XAMPP control panel
3. Head to `localhost/phpmyadmin` and create a database named `final` (encoding=utf8_unicode_ci)
4. Import `final.sql` from phpmyadmin
5. Visit `localhost/final/main.html`, there are two black buttons, they direct you to `WekaDT.html` and `KNNCA.html` respectively
    - for `WekaDT.html`, input all values at the left side and hit 送出, the result will be shown on the right side and the results will be added into the `record` table 
    - for `KNNCA.html`, input all values at the left side and hit 計算, 交叉分析 and KNN respectively, the result will be shown on the right side and the results will be added into the `recordk` table

# Dataset
[日空氣品質指標(AQI)](https://data.gov.tw/dataset/40507) (2022-11-22)
