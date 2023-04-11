CREATE DATABASE  IF NOT EXISTS `segurosdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `segurosdb`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: segurosdb
-- ------------------------------------------------------
-- Server version	5.7.34

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Oro'),(2,'Platino'),(3,'Zafiro');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Cliente');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguros`
--

DROP TABLE IF EXISTS `seguros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `icono` varchar(45) NOT NULL,
  `categoria_Id` varchar(45) NOT NULL,
  `precio` int(11) NOT NULL,
  `tipo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguros`
--

LOCK TABLES `seguros` WRITE;
/*!40000 ALTER TABLE `seguros` DISABLE KEYS */;
INSERT INTO `seguros` VALUES (1,'Automoviles  ','El presente seguro te brinda cobertura contra terceros, para que puedas usar tu vehiculo y disfrutar del mismo','fa-solid fa-car  ','1',2000,1),(2,'Automoviles','El presente seguro te brinda, ademas de la cobertura básica, un completa asistencia en caso de sufrir averías y una proteccion parcial por destrucción del rodado','fa-solid fa-car','2',2500,1),(3,'Automoviles','El presente seguro te brinda, la mas completa protección, contra terceros y contra todo riesgo, incluido el robo de cubiertas y el daño por granizo u avenimientos naturales','fa-solid fa-car','3',5000,1),(4,'Vida ','El presente seguro cubre el riesgo de fallecimiento prematuro antes de la finalización del contrato, dejando a salvo las obligaciones hipotecarias, garantía de cancelación de deudas ','fa-solid fa-heart ','1',25000,2),(5,'Vida','El presente seguro extiende su cobertura durante toda la vida del asegurado de forma permanente, sin plazo. La indemnización se paga inmediatamente después de la mearte del asegurado, cualquiera que sea el momento en que esto ocurra.','fa-solid fa-heart','2',35000,2),(6,'Vida','El presente seguro, ademas de extender su cobertura durante toda la vida del asegurado añade la opcion de restitucion del capital asegurado si este ha sobrevivido a determinada edad','fa-solid fa-heart','3',50000,2),(7,'Riesgo Civil','El presente seguro, cubre las pérdidas económicas que puede sufrir un tercero afectado por el daño causado por tu actividad.','fa-solid fa-scale-balanced','1',25000,3),(8,'Riesgo Civil','El presente seguro cubre, ademas de las pérdidas económicas que puede sufrir un tercero afectado por el daño causado por tu actividad, los daños personales que en consecuencia puedan suceder.','fa-solid fa-scale-balanced','2',35000,3),(9,'Riesgo Civil','El presente seguro cubre, no solo las perdidas economicas y los daños personales que pueda sufrir un tercero por tu actividad sino que te da proteccion total contra los daños materiales que resultende la misma.','fa-solid fa-scale-balanced','3',70000,3),(10,'Riesgo de Trabajo','El presente seguro cubre los accidentes personales que las personas en relacion de dependencia puedan sufrir en su zona laboral, durante el horario de trabajo.','fa-solid fa-suitcase','1',35000,4),(11,'Riesgo de Trabajo','El presente seguro cubre, ademas de los accidentes personales que las personas en relacion de dependencia puedan sufrir en su zona laboral, durante el horario de trabajo, aquellos que sucedan durante el traslado del trabajador.','fa-solid fa-suitcase','2',45000,4),(12,'Riesgo de Trabajo','El presente seguro cubre, no solo los accidentes personale que el trabajador pueda sufrir, en su zona laboral o de camino a la misma, sino aquellos que puedan surgir en torno a sus bienes personales.','fa-solid fa-suitcase','3',75000,4),(13,'Incendio','El presente seguro curbre, los daños directos que haya sufrido la propiedad por la acción directa del fuego','fa-solid fa-fire','1',1000000,5),(14,'Incendio','El presente seguro cubre, no solo los daños directos propios de la accion del fuego, sino todos los daños colaterales que pueda sufrir la propiedad y sus cimientos.','fa-solid fa-fire','2',1500000,5),(15,'Incendio','El presente seguro cubre, ademas de la totalidad de la propiedad (estructura y cimientos) los daños de los objetos personales declarados y brinda una asistencia temporal al asegurado.','fa-solid fa-fire','3',2000000,5),(16,'Tecnologia','El presente seguro cubre tus pertenencias electronicas por robo, hurto o extravio.','fa-solid fa-mobile','1',15000,6),(17,'Tecnoogia','El presente seguro cubre tus pertenencias electronicas por robo, hurto o extravio y te brinda asistencia y reposicion de equipos de similares caractersiticas en un plazo de 72 hs.','fa-solid fa-mobile','2',30000,6),(18,'Riesgo Cibernetico','El presente seguro cubre los daños que puedan suceder a raiz de peridas de informacion, extorsiones virutales o vulnearbilidad de los sistemas internos informaticos de tu empresa.','fa-solid fa-sitemap','1',35000,7),(19,'Riesgo Cibernetico','El presente seguro cubre los daños que pueda suceder en la matriz interna de tu compañia y además los daños de dicha circunstancia pueda ocacionarle a tus clientes y empleados.','fa-solid fa-sitemap','2',70000,7),(20,'Cauciones','El presente seguro cubre al asegurado en el marco de las obligaciones de caracter civil o comercial que requieran este tipo de garantía.','fa-solid fa-scroll ','1',150000,8),(21,'Cauciones','El presente seguro cubre ademas de las obligaciones de caracter civil o comercial contraida por el asegurado, los daños potenciales que pudieran ocurrir por el retraso o mora en su cumplimiento','fa-solid fa-scroll','2',200000,8);
/*!40000 ALTER TABLE `seguros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos`
--

LOCK TABLES `tipos` WRITE;
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` VALUES (1,'Automoviles'),(2,'Vida'),(3,'Riesgo Civil'),(4,'Riesgo Trabajo'),(5,'Incendio'),(6,'Tecnologia'),(7,'Riesgo Cibernetico'),(8,'Cauciones');
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `documento` int(11) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `fecha_Nacimiento` date NOT NULL,
  `rol_Id` varchar(45) NOT NULL DEFAULT '2',
  `seguro_id` int(11) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Axel ','O\'Durnin','odurninaxel@gmail.com','Diego+10',3549379,'CABA','1990-10-12','1',1,NULL),(2,'Manuel','Perez','manuperez@gmail.com','Manu123',36589654,'CABA','1991-01-21','2',2,NULL),(3,'Pedro','Gomez','pedrogomez@gmail.com','Pedro1263',32565879,'Florencio Varela','1990-10-10','2',3,NULL),(4,'Manuel','Lopez','example@example.com.ar','1234',34576876,'La Plata','2020-03-12','1',NULL,NULL),(5,'Leonardo ','Mastone','example2@example.com.ar','12345',45987009,'madrin','2023-11-16','1',NULL,'avatar-1675171969950.jpg'),(6,'Ramiro','Gordon','ramirogordon2@gmail.com','$2a$10$CjeoSQvJCi4aQY072XBIlucshvorQP1GBcNJe947NmDIW/l0H/5ci',34554445,'La Plata','2023-01-07','1',NULL,'avatar-1675173434126.jpg'),(7,'Eugenio','zubeldia','hola@quetal.com','$2a$10$YjlNN706QbT7D7F..wpMQewTt28cShB8w.mR61puTQYen2lNHOfzS',345444354,'La Plata','2023-02-22','2',NULL,'avatar-1675369277336.webp');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_seguros`
--

DROP TABLE IF EXISTS `usuarios_seguros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_seguros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `seguro_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_seguros`
--

LOCK TABLES `usuarios_seguros` WRITE;
/*!40000 ALTER TABLE `usuarios_seguros` DISABLE KEYS */;
INSERT INTO `usuarios_seguros` VALUES (1,2,2),(2,3,3);
/*!40000 ALTER TABLE `usuarios_seguros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 20:41:48
