CREATE DATABASE  IF NOT EXISTS `unamonitoria` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `unamonitoria`;
-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: unamonitoria
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrador` (
  `id_administrador` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(30) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'admin','8xKX/PQcG2LZMTR/OL0Zl5II9WPhElGNilBOepxeuSY=','unamonitoria@gmail.com','Administrador'),(2,'admin','8xKX/PQcG2LZMTR/OL0Zl5II9WPhElGNilBOepxeuSY=','unamonitoria@gmail.com','Administrador');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curso` (
  `id_curso` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'Engenharia Civil'),(2,'Medicina'),(3,'Psicologia'),(4,'Nutrição'),(5,'Direito'),(6,'Culinária'),(7,'Física'),(8,'Biologia'),(9,'Matemática'),(10,'Química'),(11,'Educação Física'),(12,'Ciência da Computação'),(13,'Engenharia Elétrica'),(14,'Engenharia de sistemas'),(19,'Medicina'),(20,'Matemática'),(23,'teste');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso_has_disciplina`
--

DROP TABLE IF EXISTS `curso_has_disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curso_has_disciplina` (
  `curso_id_curso` int(10) unsigned NOT NULL,
  `disciplina_id_disciplina` int(10) unsigned NOT NULL,
  PRIMARY KEY (`curso_id_curso`,`disciplina_id_disciplina`),
  KEY `curso_has_disciplina_FKIndex1` (`curso_id_curso`),
  KEY `curso_has_disciplina_FKIndex2` (`disciplina_id_disciplina`),
  CONSTRAINT `curso_has_disciplina_ibfk_1` FOREIGN KEY (`curso_id_curso`) REFERENCES `curso` (`id_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `curso_has_disciplina_ibfk_2` FOREIGN KEY (`disciplina_id_disciplina`) REFERENCES `disciplina` (`id_disciplina`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso_has_disciplina`
--

LOCK TABLES `curso_has_disciplina` WRITE;
/*!40000 ALTER TABLE `curso_has_disciplina` DISABLE KEYS */;
INSERT INTO `curso_has_disciplina` VALUES (1,1),(1,3),(1,4),(1,6),(1,9),(1,13),(2,2),(2,5),(2,8),(19,10),(20,11);
/*!40000 ALTER TABLE `curso_has_disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplina`
--

DROP TABLE IF EXISTS `disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disciplina` (
  `id_disciplina` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplina`
--

LOCK TABLES `disciplina` WRITE;
/*!40000 ALTER TABLE `disciplina` DISABLE KEYS */;
INSERT INTO `disciplina` VALUES (1,'Algebra Linear'),(2,'Anatomia 1'),(3,'Psicanálise'),(4,'Disciplina 4'),(5,'Disciplina 5'),(6,'Disciplina 6'),(8,'Disciplina 8'),(9,'Disciplina 9'),(10,'Anatomia 4'),(11,'Cálculo I'),(13,'Geometria');
/*!40000 ALTER TABLE `disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monitor`
--

DROP TABLE IF EXISTS `monitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monitor` (
  `id_monitor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(100) DEFAULT NULL,
  `ra` varchar(100) DEFAULT NULL,
  `nota_materia` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_monitor`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitor`
--

LOCK TABLES `monitor` WRITE;
/*!40000 ALTER TABLE `monitor` DISABLE KEYS */;
INSERT INTO `monitor` VALUES (23,'mateus lisboa','097.552.356-20','31648281',90),(24,'Vinicius','928.019.849-20','31228491',90);
/*!40000 ALTER TABLE `monitor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monitoria`
--

DROP TABLE IF EXISTS `monitoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monitoria` (
  `id_monitoria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `disciplina_id_disciplina` int(10) unsigned NOT NULL,
  `monitor_id_monitor` int(10) unsigned NOT NULL,
  `horario` datetime NOT NULL,
  `localizacao` varchar(100) NOT NULL,
  `ativo` varchar(1) DEFAULT '1',
  PRIMARY KEY (`id_monitoria`),
  KEY `monitoria_FKIndex1` (`monitor_id_monitor`),
  KEY `monitoria_FKIndex2` (`disciplina_id_disciplina`),
  CONSTRAINT `monitoria_ibfk_1` FOREIGN KEY (`monitor_id_monitor`) REFERENCES `monitor` (`id_monitor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `monitoria_ibfk_2` FOREIGN KEY (`disciplina_id_disciplina`) REFERENCES `disciplina` (`id_disciplina`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitoria`
--

LOCK TABLES `monitoria` WRITE;
/*!40000 ALTER TABLE `monitoria` DISABLE KEYS */;
INSERT INTO `monitoria` VALUES (34,13,23,'2018-01-01 19:30:00','sala 1404','1');
/*!40000 ALTER TABLE `monitoria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-28 19:48:45
