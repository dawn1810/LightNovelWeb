-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2023 lúc 07:34 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `wtf_novel`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuong`
--

CREATE TABLE `chuong` (
  `id` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL,
  `ten_chuong` varchar(255) NOT NULL,
  `noi_dung_chuong` text NOT NULL,
  `thu_tu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `chuong`
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
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('2zjBRvhbPYgW34mMlpip3_4GkrDIfa-j', 1700906537, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":0}}'),
('5gpqouL63TVYoTzO4XyZYYNQ6kT9wCkG', 1700803193, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('BZweOC08HTxPL3XRkRLl4E6qXUW9Nf9L', 1700914750, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('CDOthl-lOV2yjDAk7flf4hoeQczIADYt', 1700891617, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('Qx8F-zUVaDCAQaiXiJs9ylqa8IRmS-HM', 1700980300, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('R8g7ArIQUxhxBBAQLQM8nrA_1dctpol3', 1700645947, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('RRBDviyEv6D8f1SL7ywmoS5xy3zdKMmJ', 1700882808, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('_j5cr0Emowy3WZj4ZRJEEVGMwbDMAD-t', 1700887914, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('btVYSRqDwGLNzWFB3SiLHIsC1qIa11Pk', 1700914619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('dltf6Q_jLc_zfSZF9xLXBR_IMFY5dKso', 1700845696, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('gZs8wAAlDk5xXk_JcS3plmRv7mtcDw0v', 1700979242, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('lL5ScBPwpSEbGaHNBXHVrlTQYpU3CnDr', 1700802118, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('odW4kpCzvTgzN1uf6Y1IEWrnPgZp_r6H', 1700890951, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":0}}'),
('z-veyCbNlRGuWYX3d-Gfq3t1WZueJvm-', 1700578589, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"110152635823665920356\"},\"user\":{\"id\":\"110152635823665920356\",\"username\":\"110152635823665920356\"}}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tacgia`
--

CREATE TABLE `tacgia` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `ten_tac_gia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tacgia`
--

INSERT INTO `tacgia` (`id`, `id_nguoi_dung`, `ten_tac_gia`) VALUES
('1', '1', 'HT90'),
('10', '10', 'Author 10'),
('113263126602180653712', '113263126602180653712', 'Minhdz'),
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
-- Cấu trúc bảng cho bảng `taikhoan_dangky`
--

CREATE TABLE `taikhoan_dangky` (
  `ten_tai_khoan` varchar(100) DEFAULT NULL,
  `mat_khau` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `thoi_gian_tao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan_dangky`
--

INSERT INTO `taikhoan_dangky` (`ten_tai_khoan`, `mat_khau`, `email`, `thoi_gian_tao`) VALUES
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:17'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:21'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:23:25'),
('262', '45455141515', '262626@d.com', '2023-11-14 12:27:54'),
('hia', '[value-2]', 'chandoralong@gmail.com', '2023-11-14 12:28:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan_nguoidung`
--

CREATE TABLE `taikhoan_nguoidung` (
  `id` varchar(50) NOT NULL,
  `ten_tai_khoan` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `login_way` varchar(50) NOT NULL DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan_nguoidung`
--

INSERT INTO `taikhoan_nguoidung` (`id`, `ten_tai_khoan`, `email`, `mat_khau`, `login_way`) VALUES
('1', 'nht', 'naruto9090@gmail.com', '123456', 'normal'),
('10', 'user10', 'user10@gmail.com', 'password10', 'normal'),
('11', 'hungthinh', 'ht90@gmail.com', '321', 'normal'),
('110152635823665920356', '110152635823665920356', 'chandoralong@gmail.com', NULL, 'google'),
('113263126602180653712', '113263126602180653712', 'binhminh19112003@gmail.com', NULL, 'google'),
('156263e4-940f-48d8-b540-0a2a98b4d974', 'naruto', 'nhthinh2101518@student.ctuet.edu.vn', '111111', 'normal'),
('18', 'ha', '', '[value-2]', 'normal'),
('19', 'hi', '', '[value-2]', 'normal'),
('2', 'user2', 'user2@gmail.com', 'password2', 'normal'),
('22', '1', 'chandoralong@gmail.com', '000000', 'normal'),
('3', 'user3', 'user3@gmail.com', 'password3', 'normal'),
('3141bc23-09c4-4fa8-83a9-23247d7ed232', 'hiem2', 'x@c2.xc', '000000', 'normal'),
('4', 'user4', 'user4@gmail.com', 'password4', 'normal'),
('5', 'user5', 'user5@gmail.com', 'password5', 'normal'),
('6', 'user6', 'user6@gmail.com', 'password6', 'normal'),
('66916025-3af1-4716-9a6a-7109bf7f82ac', 'admin', 'haha@gmail.com', '123456', 'normal'),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', '1@g.co', '0000000', 'normal'),
('7', 'user7', 'user7@gmail.com', 'password7', 'normal'),
('8', 'user8', 'user8@gmail.com', 'password8', 'normal'),
('9', 'user9', 'user9@gmail.com', 'password9', 'normal');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `the_loai`
--

CREATE TABLE `the_loai` (
  `id` varchar(50) NOT NULL,
  `ten_the_loai` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `the_loai`
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
-- Cấu trúc bảng cho bảng `the_loai_truyen`
--

CREATE TABLE `the_loai_truyen` (
  `id` varchar(50) NOT NULL,
  `id_the_loai` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `the_loai_truyen`
--

INSERT INTO `the_loai_truyen` (`id`, `id_the_loai`, `id_truyen`) VALUES
('', '1', '3'),
('1', '4', '1'),
('11', '1', '10'),
('2', '10', '1'),
('3', '1', '1'),
('6', '10', '2'),
('7', '2', '2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtin_nguoidung`
--

CREATE TABLE `thongtin_nguoidung` (
  `id` varchar(50) NOT NULL,
  `id_tai_khoan` varchar(50) NOT NULL,
  `ten_hien_thi` varchar(255) NOT NULL,
  `anh_dai_dien` varchar(255) DEFAULT 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg',
  `gioi_tinh` tinyint(1) NOT NULL DEFAULT 1,
  `role` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `thongtin_nguoidung`
--

INSERT INTO `thongtin_nguoidung` (`id`, `id_tai_khoan`, `ten_hien_thi`, `anh_dai_dien`, `gioi_tinh`, `role`) VALUES
('1', '1', 'Hung Thinh', NULL, 1, 0),
('10', '10', 'User 10', '', 1, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://drive.google.com/uc?export=view&id=1Zg_HqKTS4xK0l6eZ-qquWpXlWKuVgASO', 1, 0),
('156263e4-940f-48d8-b540-0a2a98b4d974', '156263e4-940f-48d8-b540-0a2a98b4d974', 'naruto', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0),
('18', '18', 'ha', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0),
('19', '19', 'hi', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0),
('2', '2', 'User 2', '', 1, 0),
('3', '3', 'User 3', '', 0, 0),
('3141bc23-09c4-4fa8-83a9-23247d7ed232', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'hiem2', 'https://drive.google.com/uc?export=view&id=1bMciTnPl4ST4hjmevPJAq0tEhplHDJGy', 1, 0),
('4', '4', 'User 4', '', 1, 0),
('5', '5', 'User 5', '', 0, 0),
('6', '6', 'User 6', '', 1, 0),
('66916025-3af1-4716-9a6a-7109bf7f82ac', '66916025-3af1-4716-9a6a-7109bf7f82ac', 'admin', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 100),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', '6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0),
('7', '7', 'User 7', '', 0, 0),
('8', '8', 'User 8', '', 1, 0),
('9', '9', 'User 9', '', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `truyen`
--

CREATE TABLE `truyen` (
  `id` varchar(50) NOT NULL,
  `id_tac_gia` varchar(50) NOT NULL,
  `ten_truyen` varchar(255) NOT NULL,
  `so_luong_chuong` int(11) NOT NULL,
  `tom_tat_noi_dung` text NOT NULL,
  `anh_dai_dien` varchar(500) NOT NULL,
  `luot_xem` int(11) NOT NULL,
  `luot_thich` int(11) NOT NULL,
  `ngay_cap_nhat` date NOT NULL,
  `trang_thai` varchar(18) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `truyen`
--

INSERT INTO `truyen` (`id`, `id_tac_gia`, `ten_truyen`, `so_luong_chuong`, `tom_tat_noi_dung`, `anh_dai_dien`, `luot_xem`, `luot_thich`, `ngay_cap_nhat`, `trang_thai`) VALUES
('1', '1', 'naruto', 10, 'cu giả', '', 2, 1, '2023-11-12', 'Đang ra'),
('10', '10', 'Truyen 10', 28, 'Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10', '', 0, -1, '2023-07-30', '1'),
('2', '1', 'sasuke', 10, 'đồ sát', '', 2, 2, '2023-11-12', '1'),
('3', '3', 'Truyen 3', 15, 'Tom tat noi dung truyen 3', '', 0, 0, '2023-11-12', '1'),
('4', '4', 'Truyen 4', 25, 'Tom tat noi dung truyen 4', '', 0, 0, '2023-11-12', '1'),
('5', '5', 'Truyen 5', 18, 'Tom tat noi dung truyen 5', '', 1000, 0, '2023-11-12', '1'),
('6', '6', 'Truyen 6', 22, 'Tom tat noi dung truyen 6', '', 0, 0, '2023-11-12', '1'),
('7', '7', 'Truyen 7', 30, 'Tom tat noi dung truyen 7', '', 0, 0, '2023-11-12', '1'),
('8', '8', 'Truyen 8', 17, 'Tom tat noi dung truyen 8', '', 0, 0, '2023-11-12', '1'),
('9', '9', 'Truyen 9', 19, 'Tom tat noi dung truyen 9', '', 0, 0, '2023-11-12', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `truyen_yeu_thich`
--

CREATE TABLE `truyen_yeu_thich` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `truyen_yeu_thich`
--

INSERT INTO `truyen_yeu_thich` (`id`, `id_nguoi_dung`, `id_truyen`) VALUES
('1', '1', '1'),
('19', '113263126602180653712', '8');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chuong`
--
ALTER TABLE `chuong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Chỉ mục cho bảng `tacgia`
--
ALTER TABLE `tacgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tacgia_ibfk_1` (`id_nguoi_dung`);

--
-- Chỉ mục cho bảng `taikhoan_nguoidung`
--
ALTER TABLE `taikhoan_nguoidung`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ten_tai_khoan` (`ten_tai_khoan`),
  ADD UNIQUE KEY `uc_ten_tai_khoan` (`ten_tai_khoan`);

--
-- Chỉ mục cho bảng `the_loai`
--
ALTER TABLE `the_loai`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `the_loai_truyen`
--
ALTER TABLE `the_loai_truyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_the_loai` (`id_the_loai`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- Chỉ mục cho bảng `thongtin_nguoidung`
--
ALTER TABLE `thongtin_nguoidung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tai_khoan` (`id_tai_khoan`);

--
-- Chỉ mục cho bảng `truyen`
--
ALTER TABLE `truyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tac_gia` (`id_tac_gia`);

--
-- Chỉ mục cho bảng `truyen_yeu_thich`
--
ALTER TABLE `truyen_yeu_thich`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_nguoi_dung` (`id_nguoi_dung`),
  ADD KEY `id_truyen` (`id_truyen`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chuong`
--
ALTER TABLE `chuong`
  ADD CONSTRAINT `chuong_ibfk_1` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Các ràng buộc cho bảng `tacgia`
--
ALTER TABLE `tacgia`
  ADD CONSTRAINT `tacgia_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `thongtin_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `the_loai_truyen`
--
ALTER TABLE `the_loai_truyen`
  ADD CONSTRAINT `the_loai_truyen_ibfk_1` FOREIGN KEY (`id_the_loai`) REFERENCES `the_loai` (`id`),
  ADD CONSTRAINT `the_loai_truyen_ibfk_2` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Các ràng buộc cho bảng `thongtin_nguoidung`
--
ALTER TABLE `thongtin_nguoidung`
  ADD CONSTRAINT `thongtin_nguoidung_ibfk_1` FOREIGN KEY (`id_tai_khoan`) REFERENCES `taikhoan_nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `truyen`
--
ALTER TABLE `truyen`
  ADD CONSTRAINT `truyen_ibfk_1` FOREIGN KEY (`id_tac_gia`) REFERENCES `tacgia` (`id`);

--
-- Các ràng buộc cho bảng `truyen_yeu_thich`
--
ALTER TABLE `truyen_yeu_thich`
  ADD CONSTRAINT `truyen_yeu_thich_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `thongtin_nguoidung` (`id`),
  ADD CONSTRAINT `truyen_yeu_thich_ibfk_2` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

DELIMITER $$
--
-- Sự kiện
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
