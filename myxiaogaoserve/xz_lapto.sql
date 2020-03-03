#功能二:完成商品分页显示
#复制从18~
#1:添加列 pic 为xz_laptop
USE xz;
ALTER TABLE xz_laptop ADD pic VARCHAR(255);
#2:更新pic
UPDATE xz_laptop SET pic="01.png"
WHERE lid=1;
UPDATE xz_laptop SET pic="02.png"
WHERE lid>1;



#功能三:完成购物车任务 
#id     编号
#uid    用户编号
#lid    商品编号
#count  购买数量 
#price  价格
#lname  商品名称 35~42

USE xz;
CREATE TABLE xz_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  lid  INT,
  pirce DECIMAL(10,2),
  lname VARCHAR(255)
);
ALTER TABLE xz_cart count INT;