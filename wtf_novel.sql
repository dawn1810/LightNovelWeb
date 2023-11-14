-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2023 at 04:07 PM
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
-- Database: `wtf_novel`
--

-- --------------------------------------------------------

--
-- Table structure for table `chuong`
--

CREATE TABLE `chuong` (
  `id` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL,
  `ten_chuong` varchar(255) NOT NULL,
  `noi_dung_chuong` text NOT NULL,
  `thu_tu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `chuong`
--

INSERT INTO `chuong` (`id`, `id_truyen`, `ten_chuong`, `noi_dung_chuong`, `thu_tu`) VALUES
('1', '1', 'hay lắm', 'OMAE CỐ TÌNH CHỬI WATASHI DESU KA? TỪ TANJOUBI ĐẾN KONNICHI, WATASHI ĐÃ ĐƯỢC OSOWARU NÊN HITO, WATASHI KHÔNG BAO GIỜ XÚC PHẠM DARE CẢ, OMAE LÀM VẬY LÀ TONDEMONAI DAYO.TUY WATASHI CÓ HƠI WIBU SUKOSHI, DEMO WATASHI LUÔN ĐẶT NIỀM TIN VÀO ANIME VÀ SỐNG ĐÚNG KIỂU TRONG ANIME, ANIME LÀ 1 THỨ GÌ ĐÓ CAO CẢ HƠN CẢ GENJITSU, WATASHI ĐÃ LÀM THEO VÀ HỌC TẬP THEO TỪ ANIME, WATASHI ĐÃ ĂN UỐNG NGỦ NGHĨ THEO ĐÚNG GIỜ CỦA ANIME MÀ KHÔNG LÀM PHIỀN DARE, ĐÔI LÚC WATASHI CÓ CHỬI VÀO OMAE NO KAO NHƯ INU, DEMO SAU ĐÓ BLOCK NÓ THÌ WATASHI KHÔNG LÀM VIỆC ĐÓ NỮA, MAIKAI MAIKAI WATASHI MUỐN CHỬI DARE WATASHI ĐỀU COI ANIME VÀ GHI NHỚ RẰNG KHÔNG NÊN CHỬI NGƯỜI ĐÓ NỮA !! WATASHI ĐÃ CỐ GẮNG HIỀN HẬU ĐẾN MỨC MUỐN THÀNH HOTOKE RỒI MÀ KARERA VẪN KHÔNG ĐỂ WATASHI YÊN LÀ SAO, YABAI WATASHI KHÔNG NÊN GHI RA NHỮNG TỪ NÀY DEMO THẰNG YAROU SÚC VẬT NÓ LÔI WATASHI NO NA RA ĐỂ CHỬI, THỨ AHO SHUKU SEIBUTSUGAKU KAGAKU BUNGAKU, VẬY LÀ ĐỦ, ĐỪNG ĐỂ WATASHI TRIGGERED VÀ WATASHI DẠY OMAE CÁCH ĐỂ HỌC TẬP VÀ LÀM THEO TẤM GƯƠNG CỦA ANIME NỮA!, THẾ NHÉ INU WA KUSO O TABERU', 1),
('11', '2', 'gặp gỡ', 'chơi naruto', 5),
('12', '2', 'tha naruto', 'bỏ qua tất cả', 8),
('13', '1', 'uchiha1', 'bỏ qua sasuke', 0),
('14', '1', 'uchiha2', 'giết dòng họ', 0),
('15', '1', 'Chuong 4', 'Noi dung chuong 4', 0),
('16', '1', 'Chuong 5', 'Noi dung chuong 5', 0),
('17', '1', 'Chuong 6', 'Noi dung chuong 6', 0),
('18', '1', 'Chuong 7', 'Noi dung chuong 7', 0),
('19', '1', 'Chuong 8', 'Noi dung chuong 8', 0),
('2', '1', 'dở lắm', 'lần sau', 3),
('20', '1', 'Chuong 9', 'Noi dung chuong 9', 0),
('21', '1', 'Chuong 10', 'Noi dung chuong 10', 0),
('22', '1', 'uchiha1', 'bỏ qua sasuke', 0),
('23', '1', 'uchiha2', 'giết dòng họ', 0),
('24', '1', 'Chuong 4', 'Noi dung chuong 4', 0),
('25', '1', 'Chuong 5', 'Noi dung chuong 5', 0),
('26', '1', 'Chuong 6', 'Noi dung chuong 6', 0),
('27', '1', 'Chuong 7', 'Noi dung chuong 7', 0),
('28', '1', 'Chuong 8', 'Noi dung chuong 8', 0),
('29', '1', 'Chuong 9', 'Noi dung chuong 9', 0),
('30', '1', 'Chuong 10', 'Noi dung chuong 10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('z-veyCbNlRGuWYX3d-Gfq3t1WZueJvm-', 1700578589, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"110152635823665920356\"},\"user\":{\"id\":\"110152635823665920356\",\"username\":\"110152635823665920356\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `tacgia`
--

CREATE TABLE `tacgia` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `ten_tac_gia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `tacgia`
--

INSERT INTO `tacgia` (`id`, `id_nguoi_dung`, `ten_tac_gia`) VALUES
('1', '1', 'HT90'),
('10', '10', 'Author 10'),
('2', '2', 'Author 2'),
('3', '3', 'Author 3'),
('4', '4', 'Author 4'),
('5', '5', 'Author 5'),
('6', '6', 'Author 6'),
('7', '7', 'Author 7'),
('8', '8', 'Author 8'),
('9', '9', 'Author 9');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan_dangky`
--

CREATE TABLE `taikhoan_dangky` (
  `ten_tai_khoan` varchar(100) DEFAULT NULL,
  `mat_khau` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `thoi_gian_tao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `taikhoan_dangky`
--

INSERT INTO `taikhoan_dangky` (`ten_tai_khoan`, `mat_khau`, `email`, `thoi_gian_tao`) VALUES
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:17'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:21'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:25'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:27:54'),
('hia', '[value-2]', 'chandoralong@gmail.com', '2023-11-14 12:28:09');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan_nguoidung`
--

CREATE TABLE `taikhoan_nguoidung` (
  `id` varchar(50) NOT NULL,
  `ten_tai_khoan` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `login_way` varchar(50) NOT NULL DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `taikhoan_nguoidung`
--

INSERT INTO `taikhoan_nguoidung` (`id`, `ten_tai_khoan`, `email`, `mat_khau`, `login_way`) VALUES
('1', 'nht', 'hahaa@gmail.com', '123456', 'normal'),
('10', 'user10', 'user10@gmail.com', 'password10', 'normal'),
('11', 'hungthinh', 'ht90@gmail.com', '321', 'normal'),
('110152635823665920356', '110152635823665920356', 'chandoralong@gmail.com', NULL, 'google'),
('18', 'ha', '', '[value-2]', 'normal'),
('19', 'hi', '', '[value-2]', 'normal'),
('2', 'user2', 'user2@gmail.com', 'password2', 'normal'),
('22', '1', 'chandoralong@gmail.com', '000000', 'normal'),
('3', 'user3', 'user3@gmail.com', 'password3', 'normal'),
('4', 'user4', 'user4@gmail.com', 'password4', 'normal'),
('5', 'user5', 'user5@gmail.com', 'password5', 'normal'),
('6', 'user6', 'user6@gmail.com', 'password6', 'normal'),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', '1@g.co', '0000000', 'normal'),
('7', 'user7', 'user7@gmail.com', 'password7', 'normal'),
('8', 'user8', 'user8@gmail.com', 'password8', 'normal'),
('9', 'user9', 'user9@gmail.com', 'password9', 'normal');

-- --------------------------------------------------------

--
-- Table structure for table `the_loai`
--

CREATE TABLE `the_loai` (
  `id` varchar(50) NOT NULL,
  `ten_the_loai` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `the_loai`
--

INSERT INTO `the_loai` (`id`, `ten_the_loai`) VALUES
('1', 'ngôn tình'),
('10', 'darkin'),
('2', 'hành động'),
('3', 'tâm lý'),
('4', 'elf'),
('5', 'rape'),
('6', 'incest'),
('7', 'guror'),
('8', 'gangbang'),
('9', 'bukkake');

-- --------------------------------------------------------

--
-- Table structure for table `the_loai_truyen`
--

CREATE TABLE `the_loai_truyen` (
  `id` varchar(50) NOT NULL,
  `id_the_loai` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `the_loai_truyen`
--

INSERT INTO `the_loai_truyen` (`id`, `id_the_loai`, `id_truyen`) VALUES
('1', '4', '1'),
('2', '10', '1'),
('3', '1', '1'),
('6', '10', '2'),
('7', '2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `thongtin_nguoidung`
--

CREATE TABLE `thongtin_nguoidung` (
  `id` varchar(50) NOT NULL,
  `id_tai_khoan` varchar(50) NOT NULL,
  `ten_hien_thi` varchar(255) NOT NULL,
  `anh_dai_dien` varchar(255) DEFAULT 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg',
  `gioi_tinh` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `thongtin_nguoidung`
--

INSERT INTO `thongtin_nguoidung` (`id`, `id_tai_khoan`, `ten_hien_thi`, `anh_dai_dien`, `gioi_tinh`) VALUES
('1', '1', 'HT90', NULL, 1),
('10', '10', 'User 10', '', 1),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1),
('18', '18', 'ha', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1),
('19', '19', 'hi', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1),
('2', '2', 'User 2', '', 1),
('3', '3', 'User 3', '', 0),
('4', '4', 'User 4', '', 1),
('5', '5', 'User 5', '', 0),
('6', '6', 'User 6', '', 1),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', '6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1),
('7', '7', 'User 7', '', 0),
('8', '8', 'User 8', '', 1),
('9', '9', 'User 9', '', 0),
('hungthinh', '11', 'Hưng Thịnh 90', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `truyen`
--

CREATE TABLE `truyen` (
  `id` varchar(50) NOT NULL,
  `id_tac_gia` varchar(50) NOT NULL,
  `ten_truyen` varchar(255) NOT NULL,
  `so_luong_chuong` int(11) NOT NULL,
  `tom_tat_noi_dung` text NOT NULL,
  `anh_dai_dien` varchar(255) NOT NULL,
  `luot_xem` int(11) NOT NULL,
  `luot_thich` int(11) NOT NULL,
  `ngay_cap_nhat` date NOT NULL,
  `trang_thai` varchar(18) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `truyen`
--

INSERT INTO `truyen` (`id`, `id_tac_gia`, `ten_truyen`, `so_luong_chuong`, `tom_tat_noi_dung`, `anh_dai_dien`, `luot_xem`, `luot_thich`, `ngay_cap_nhat`, `trang_thai`) VALUES
('1', '1', 'naruto', 10, 'cu giả', '', 1, 1, '2023-11-12', 'Đang ra'),
('10', '10', 'Truyen 10', 28, 'Tom tat noi dung truyen 10', '', 0, 0, '2023-11-12', '1'),
('2', '1', 'sasuke', 10, 'đồ sát', '', 1, 2, '2023-11-12', '1'),
('3', '3', 'Truyen 3', 15, 'Tom tat noi dung truyen 3', '', 0, 0, '2023-11-12', '1'),
('4', '4', 'Truyen 4', 25, 'Tom tat noi dung truyen 4', '', 0, 0, '2023-11-12', '1'),
('5', '5', 'Truyen 5', 18, 'Tom tat noi dung truyen 5', '', 0, 0, '2023-11-12', '1'),
('6', '6', 'Truyen 6', 22, 'Tom tat noi dung truyen 6', '', 0, 0, '2023-11-12', '1'),
('7', '7', 'Truyen 7', 30, 'Tom tat noi dung truyen 7', '', 0, 0, '2023-11-12', '1'),
('8', '8', 'Truyen 8', 17, 'Tom tat noi dung truyen 8', '', 0, 0, '2023-11-12', '1'),
('9', '9', 'Truyen 9', 19, 'Tom tat noi dung truyen 9', '', 0, 0, '2023-11-12', '1');

-- --------------------------------------------------------

--
-- Table structure for table `truyen_yeu_thich`
--

CREATE TABLE `truyen_yeu_thich` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `truyen_yeu_thich`
--

INSERT INTO `truyen_yeu_thich` (`id`, `id_nguoi_dung`, `id_truyen`) VALUES
('1', '1', '1');

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
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `tacgia`
--
ALTER TABLE `tacgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tacgia_ibfk_1` (`id_nguoi_dung`);

--
-- Indexes for table `taikhoan_nguoidung`
--
ALTER TABLE `taikhoan_nguoidung`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ten_tai_khoan` (`ten_tai_khoan`),
  ADD UNIQUE KEY `uc_ten_tai_khoan` (`ten_tai_khoan`);

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
  ADD CONSTRAINT `tacgia_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `thongtin_nguoidung` (`id`);

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

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `delete_old_data_event` ON SCHEDULE EVERY 5 HOUR STARTS '2023-11-14 19:13:03' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN
    -- Thực hiện xoá dữ liệu cũ
    DELETE FROM taikhoan_dangky WHERE thoi_gian_tao < NOW() - INTERVAL 5 HOUR;
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
