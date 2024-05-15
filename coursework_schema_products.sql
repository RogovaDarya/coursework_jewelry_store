-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coursework_schema
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_ru_0900_as_cs NOT NULL,
  `type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_ru_0900_as_cs NOT NULL,
  `material` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_ru_0900_as_cs NOT NULL,
  `art` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_ru_0900_as_cs NOT NULL,
  `imageurl` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_ru_0900_as_cs NOT NULL,
  `coast` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_ru_0900_as_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (8,'Pandora','Браслет','Серебро','773925-16','/images/1.jpg',286),(9,'Pandora','Браслет','Серебро','643217-17','/images/2.jpg',286),(10,'Pandora','Браслет','Золото','635923С-18','/images/3.jpg',818),(11,'Pandora','Браслет','Золото','792501С65-16','/images/4.jpg',818),(12,'Tous','Браслет','Золото','840300241','/images/5.jpg',1461),(13,'Tous','Браслет','Серебро','643801292','/images/6.jpg',440),(14,'Tous','Браслет','Серебро','662815490','/images/7.jpg',280),(15,'Pandora','Браслет','Серебро','7018026С84-29','/images/8.jpg',382),(16,'Pandora','Браслет','Серебро','416290СZ-3','/images/9.jpg',479),(17,'Pandora','Браслет','Золото','902184С11-18','/images/10.jpg',866),(18,'Pandora','Кольцо','Золото','123498CZ-34','/images/11.jpg',479),(19,'Pandora','Кольцо','Золото','688310С01-54','/images/12.jpg',334),(20,'Pandora','Кольцо','Золото','682927С02-56','/images/13.jpg',286),(21,'Pandora','Кольцо','Серебро','829910С01-50','/images/14.jpg',237),(22,'Pandora','Кольцо','Серебро','094567С01-52','/images/15.jpg',431),(23,'Tous','Кольцо','Золото','036813256','/images/16.jpg',1243),(24,'Tous','Кольцо','Серебро','017935649','/images/17.jpg',275),(25,'Pandora','Кольцо','Серебро','090672С01-50','/images/18.jpg',334),(26,'Pandora','Кольцо','Серебро','034673CZ-54','/images/19.jpg',233),(27,'Pandora','Кольцо','Золото','173529CZ-50','/images/20.jpg',286),(28,'Pandora','Подвеска','Золото','829311С01-45','/images/21.jpg',721),(29,'Pandora','Подвеска','Серебро','739208С01-45','/images/22.jpg',382),(30,'Pandora','Подвеска','Серебро','375602CZ-45','/images/23.jpg',334),(31,'Pandora','Подвеска','Серебро','278304CZ-45','/images/24.jpg',334),(32,'Tous','Подвеска','Серебро','027490322','/images/25.jpg',420),(33,'Tous','Подвеска','Золото','234246478','/images/26.jpg',617),(34,'Tous','Подвеска','Золото','358294792','/images/27.jpg',426),(35,'Tous','Подвеска','Золото','118370024','/images/28.jpg',884),(36,'Tous','Подвеска','Серебро','114467289','/images/29.jpg',266),(37,'Tous','Подвеска','Золото','572519479','/images/30.jpg',1110),(38,'Pandora','Серьги','Золото','0973682С01','/images/31.jpg',431),(39,'Pandora','Серьги','Серебро','055772','/images/32.jpg',237),(40,'Pandora','Серьги','Серебро','9955342СZ','/images/33.jpg',286),(41,'Pandora','Серьги','Серебро','3628673CZ','/images/34.jpg',237),(42,'Pandora','Серьги','Серебро','555328','/images/35.jpg',189),(43,'Tous','Серьги','Золото','332561884','/images/36.jpg',560),(44,'Tous','Серьги','Золото','112683400','/images/37.jpg',795),(45,'Tous','Серьги','Золото','111555789','/images/38.jpg',1772),(46,'Tous','Серьги','Серебро','999653488','/images/39.jpg',289),(47,'Tous','Серьги','Золото','111167340','/images/40.jpg',462);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 17:16:32
