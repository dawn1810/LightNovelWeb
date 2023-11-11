-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2023 at 09:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lightnovels`
--

-- --------------------------------------------------------

--
-- Table structure for table `chuong`
--

CREATE TABLE `chuong` (
  `id` int(11) NOT NULL,
  `id_truyen` int(11) NOT NULL,
  `ten_chuong` varchar(255) NOT NULL,
  `noi_dung_chuong` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tacgia`
--

CREATE TABLE `tacgia` (
  `id` int(11) NOT NULL,
  `id_nguoi_dung` int(11) NOT NULL,
  `ten_tac_gia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan_nguoidung`
--

CREATE TABLE `taikhoan_nguoidung` (
  `id` int(11) NOT NULL,
  `ten_tai_khoan` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mat_khau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `the_loai`
--

CREATE TABLE `the_loai` (
  `id` int(11) NOT NULL,
  `ten_the_loai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `the_loai_truyen`
--

CREATE TABLE `the_loai_truyen` (
  `id` int(11) NOT NULL,
  `id_the_loai` int(11) NOT NULL,
  `id_truyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thongtin_nguoidung`
--

CREATE TABLE `thongtin_nguoidung` (
  `id` int(11) NOT NULL,
  `id_tai_khoan` int(11) NOT NULL,
  `ten_hien_thi` varchar(255) NOT NULL,
  `anh_dai_dien` varchar(255) NOT NULL,
  `gioi_tinh` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `truyen`
--

CREATE TABLE `truyen` (
  `id` int(11) NOT NULL,
  `id_tac_gia` int(11) NOT NULL,
  `ten_truyen` varchar(255) NOT NULL,
  `so_luong_chuong` int(11) NOT NULL,
  `tom_tat_noi_dung` text NOT NULL,
  `anh_dai_dien` varchar(255) NOT NULL,
  `luot_xem` int(11) NOT NULL,
  `luot_thich` int(11) NOT NULL,
  `ngay_cap_nhat` date NOT NULL,
  `trang_thai` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `truyen_yeu_thich`
--

CREATE TABLE `truyen_yeu_thich` (
  `id` int(11) NOT NULL,
  `id_nguoi_dung` int(11) NOT NULL,
  `id_truyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chuong`
--
ALTER TABLE `chuong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- Indexes for table `tacgia`
--
ALTER TABLE `tacgia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taikhoan_nguoidung`
--
ALTER TABLE `taikhoan_nguoidung`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ten_tai_khoan` (`ten_tai_khoan`);

--
-- Indexes for table `the_loai`
--
ALTER TABLE `the_loai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `the_loai_truyen`
--
ALTER TABLE `the_loai_truyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_the_loai` (`id_the_loai`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- Indexes for table `thongtin_nguoidung`
--
ALTER TABLE `thongtin_nguoidung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tai_khoan` (`id_tai_khoan`);

--
-- Indexes for table `truyen`
--
ALTER TABLE `truyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tac_gia` (`id_tac_gia`);

--
-- Indexes for table `truyen_yeu_thich`
--
ALTER TABLE `truyen_yeu_thich`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_nguoi_dung` (`id_nguoi_dung`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chuong`
--
ALTER TABLE `chuong`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tacgia`
--
ALTER TABLE `tacgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taikhoan_nguoidung`
--
ALTER TABLE `taikhoan_nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `the_loai`
--
ALTER TABLE `the_loai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `the_loai_truyen`
--
ALTER TABLE `the_loai_truyen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thongtin_nguoidung`
--
ALTER TABLE `thongtin_nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `truyen`
--
ALTER TABLE `truyen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `truyen_yeu_thich`
--
ALTER TABLE `truyen_yeu_thich`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chuong`
--
ALTER TABLE `chuong`
  ADD CONSTRAINT `chuong_ibfk_1` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Constraints for table `tacgia`
--
ALTER TABLE `tacgia`
  ADD CONSTRAINT `tacgia_ibfk_1` FOREIGN KEY (`id`) REFERENCES `thongtin_nguoidung` (`id`);

--
-- Constraints for table `the_loai_truyen`
--
ALTER TABLE `the_loai_truyen`
  ADD CONSTRAINT `the_loai_truyen_ibfk_1` FOREIGN KEY (`id_the_loai`) REFERENCES `the_loai` (`id`),
  ADD CONSTRAINT `the_loai_truyen_ibfk_2` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Constraints for table `thongtin_nguoidung`
--
ALTER TABLE `thongtin_nguoidung`
  ADD CONSTRAINT `thongtin_nguoidung_ibfk_1` FOREIGN KEY (`id_tai_khoan`) REFERENCES `taikhoan_nguoidung` (`id`);

--
-- Constraints for table `truyen`
--
ALTER TABLE `truyen`
  ADD CONSTRAINT `truyen_ibfk_1` FOREIGN KEY (`id_tac_gia`) REFERENCES `tacgia` (`id`);

--
-- Constraints for table `truyen_yeu_thich`
--
ALTER TABLE `truyen_yeu_thich`
  ADD CONSTRAINT `truyen_yeu_thich_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `thongtin_nguoidung` (`id`),
  ADD CONSTRAINT `truyen_yeu_thich_ibfk_2` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
