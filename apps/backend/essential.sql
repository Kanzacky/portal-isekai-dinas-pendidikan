-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Portal Isekai Dinas Pendidikan - Database Setup
-- Standard: Enterprise Architecture (PascalCase Columns, snake_case Tables)
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 1. Table untuk Logging API (Standard Enterprise Audit Trail)
CREATE TABLE IF NOT EXISTS `log` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `Tgl` date DEFAULT NULL,
  `Controller` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Function` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Request` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Response` text COLLATE utf8mb4_unicode_ci,
  `Stack` text COLLATE utf8mb4_unicode_ci,
  `User` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table Security Access Token
CREATE TABLE IF NOT EXISTS `access_token` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `Expired` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `Datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table Master User Credential (Target Seeding)
CREATE TABLE IF NOT EXISTS `user_credential` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `UniqueId` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fullname` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Telp` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Role` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `CreatedAt` timestamp NULL DEFAULT NULL,
  `UpdatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `uq_username` (`Username`),
  UNIQUE KEY `uq_uniqueid` (`UniqueId`),
  CONSTRAINT `chk_status` CHECK ((`Status` in ('0','1')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table Master Navigation (Template Menu per Role)
CREATE TABLE IF NOT EXISTS `mst_navigation` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Menu` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `Role` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping Data Master Navigation untuk 4 Role Isekai
INSERT INTO `mst_navigation` (`Menu`, `Role`, `CreatedAt`) VALUES
  -- Menu untuk Admin
  ('[{"label":"ADMIN PANEL","items":[{"label":"Dashboard","icon":"pi pi-home","to":"/admin/dashboard"},{"label":"Kelola User","icon":"pi pi-users","to":"/admin/users"}]}]', 'admin', NOW()),
  -- Menu untuk Guru
  ('[{"label":"GURU PANEL","items":[{"label":"Dashboard","icon":"pi pi-home","to":"/guru/dashboard"},{"label":"Input Nilai","icon":"pi pi-file-edit","to":"/guru/nilai"}]}]', 'guru', NOW()),
  -- Menu untuk Siswa
  ('[{"label":"SISWA PANEL","items":[{"label":"Dashboard","icon":"pi pi-home","to":"/siswa/dashboard"},{"label":"Lihat Raport","icon":"pi pi-book","to":"/siswa/raport"}]}]', 'siswa', NOW()),
  -- Menu untuk Masyarakat
  ('[{"label":"LAYANAN PUBLIK","items":[{"label":"Beranda","icon":"pi pi-home","to":"/public/dashboard"},{"label":"Pengajuan Layanan","icon":"pi pi-envelope","to":"/public/service"}]}]', 'masyarakat', NOW());

-- 5. Table User Navigation (Menu Spesifik User)
CREATE TABLE IF NOT EXISTS `user_navigation` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UniqueId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Menu` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `uq_user_navigation_uniqueid` (`UniqueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Table Konfigurasi System
CREATE TABLE IF NOT EXISTS `config` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Kode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Keterangan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;