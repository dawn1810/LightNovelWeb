-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 30, 2023 lúc 02:08 PM
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
('10', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 2: The First Performance Has Begun\'', '1_0RlRe3Bn-A_6hj12k68QS-1oVTvZm3x', 1),
('100', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 3: My Bed Is Very Big And Soft\'', '1gSwxqfqILsa-ezkXy7Iad3s-x4IJTHSR', 2),
('101', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 4: Something Is Wrong With This Female Protagonist!\'', '14ajkXJ_q9FgaNyUX0dLCVrRiziBcAYBi', 3),
('102', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 5: I\'m a Villain But The Female Protagonist Kisses Me?\'', '1Kv9rFD_Ysy3yjGHMleUrF9U8K5Kw1vPc', 4),
('103', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 6: Get down on your knees and Admit Your Mistakes To Me!\'', '1gSFAtZL5iqVeSbxmfQtGYwxez3_ZaN-P', 5),
('104', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 7: What Went Wrong?\'', '11RiA1YNIfPLllF5Y3-FCKQyAFfwt1P1e', 6),
('105', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1eiKpLxPlP0MuS_oQAkZWCXvzj1OkGFn2', 7),
('106', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1pC_v1jZHeWctDKitzu4PvqEt2y71gbgH', 8),
('107', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-mLkd0CzhvB_KjeGwJYfF7aPBjgLzC3r', 9),
('108', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Y9ozjJ58Omu__qxwUtokYQz79-KygpT4', 10),
('109', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '12iZIEF-Kw2UjI7coA3U4s-sOaZN4pZg7', 11),
('11', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_rjzuhFurILgZ44HZOmLAF6QWkiDQh87', 12),
('110', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '18wA4Ee-r7fuGFHqfneBaXvglOxfTa8X5', 13),
('111', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1H4VET54WeiARwgAsvWt-vbnCLjKS-kVy', 14),
('112', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '12bCRCwjkOdrwzTuw5QpLmdyyrXkFrTRG', 15),
('113', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1vAsWGTz2iSA9FbKWBrl9mAd26j-4Umrk', 16),
('114', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1VaTNLzaB_kZ9wBgAD19G3V7O-6jzv_Nk', 17),
('115', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Q1XK4NrocK2ZwXyAMSwsfsKV465VW6i-', 18),
('116', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1RQrACWrjcewaCLK0YN901vcRa8K5SDPd', 19),
('117', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ZeqV3uyjiXQJs4G7APwyRM5X62LsDgKt', 20),
('118', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1iS4dK1wVkDp-c-dsZ5S0LFrGXqfDhWjb', 21),
('119', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '11XSL6n31cvweFodonRKBqtUTQiHEXd52', 22),
('12', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rUyhTlThV6J7vt_PsUJMY894iIunzzwf', 23),
('120', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Wu7nDd3SGZv7M4MDSglyncziQRPnWVu1', 24),
('121', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_qjMugzArDcryOnWT0Bp1PJj_5RWZr4A', 25),
('122', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1L3huyY4Cz_pNU0rHAE7Jf-Jn01TXkVIa', 26),
('123', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1C0iu9-QhUaJ1H4AuEXSbmoD1tbsebpne', 27),
('124', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1BaOaAKaYaMlIvauzvH669Z-06NFKFWHl', 28),
('125', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1l_dFDkYC7GKw-kfALGBPWxJt_CHAF0cP', 29),
('126', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1lQLq4i9RkszwLAQrPuKKkshg8tlEBPTQ', 30),
('127', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '12S1GoCuaS8wTtmQ1QURn_ywy4JSTWyTs', 31),
('128', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1o8yVI8uHwio8UZNAxN_dxGuyfrOxSz1R', 32),
('129', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1aQ8Y_LSyYgpA_jS3x4DjwNdTWgHsZzXE', 33),
('13', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1DXhV5slGlpMQupwWUcbkH_3rQQtuKZ57', 34),
('130', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1dJavjQrCYBW4J4LfYK3hk3GcIvznCOEe', 35),
('131', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1WVS5-bh-RhiEsrczEM_LRsxaKg3EGkpa', 36),
('132', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MVxMrrvPes1H5GvIyg8TkbOeFgbRTwqa', 37),
('133', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ptmlledY9DQMzdDxDH6LnQJtU1EPMatJ', 38),
('134', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1A5uw5aB7k1SN47JV9cAx9SpSKo1pKOMN', 39),
('135', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Hh6C0PucNfscTCJG7OIL9KokeLi5CiR1', 40),
('136', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1OWYxeWNDAOW861JJ-UH_VTmUYW4URQgy', 41),
('137', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1mTSOfoOKgICbPPUKAcL4j44Nv0zQcg4U', 42),
('138', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1FBdXyhJ4DxNs14ubNXkCfSKw78jqxoGv', 43),
('139', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ku4eWBeM3JKf0MZfH-Nj4ZTJ4_lFpJ8I', 44),
('14', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '14luHDfDp9hgIN8vtUC0SL8f-LYODb3yx', 45),
('140', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1aknPBq2W2soGOHpLzEgJidG7eT57JSQ3', 46),
('141', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '146wpvuUl37ESnSsbTtoSB-cBtCOCH2zk', 47),
('142', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1cUm6dKQtot3MNiWqEnrtGc4iIkplOiim', 48),
('143', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1PdhKrz3nM4WELYXbT_H8SzqUK5xQgoO6', 49),
('144', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ElmnuYmstQIHfwWyX4TCXH-H0QnmyNU7', 50),
('145', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1FJAwyBTBufo9Skhu7ABPGG7ONQTNn3Hq', 51),
('146', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '12Okjaw9SIZoRMkseMBKsW44cgdTGzbGw', 52),
('147', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1vWuGVZx-G3QAR3-tkCp4yJe8GoNtoyxT', 53),
('148', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1DLg-ZmhWOaW9LueDl7ucY-VHLvmNOrOL', 54),
('149', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1NdeDLf19SQ24yu2rc5hoN0VsrbC4rxhG', 55),
('15', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1XpEdbDgqGHdIWQBLHkIfHU7gm5gAwJv4', 56),
('150', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '19FUm7SUzLlGqvyZjG93oc4CJgg4OgCa5', 57),
('151', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1nee9sb0VG-K1_3nbIZNWGs8yz7pwgRV-', 58),
('152', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wYZsxbT65jEQW_6FH8OzTwImunD3N5Tu', 59),
('153', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1iGXiyyJLUxiJysHkcrYCftb2BKAJHBXG', 60),
('154', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1z9UOHyeDgHZuLYdgVwhvoD-UgpTsHt3H', 61),
('155', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '13CS40HJsiGS784saL1WGypsp5GcoqcqJ', 62),
('156', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rBc0WWLcMB2yATM4RQlMne471blQ4a8F', 63),
('157', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_sqqftxD23XIexs3fuHdXFaX0lZZaaG7', 64),
('158', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1pPr5TnIZPNsmOtQ5sE7Apjorl0VKSEZw', 65),
('159', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-qefceacCglFabIulkgTI2EDJbJv4hMj', 66),
('16', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1FM1lSIBcYVnNbYyh826uCJH6KneYe8kG', 67),
('160', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1TjDKLHpC2NXaWv9twFGUBIaIxbGZ2_7a', 68),
('161', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '15yD5jfY1Q-FrtEdjy4DMk5PQi8AUalCG', 69),
('162', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1JedPkqIoye7hK2bj2Fioid2vBZ4IKniy', 70),
('163', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wGaEEogOL-IXcUiWNm-EJY3bEiNyz3Wp', 71),
('164', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MAs9g4_L8QEpX6PViEbQ7jEhjiPKAe8Q', 72),
('165', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '15PW86cS4Y2SZ0JibLjOdEkApVqL46knV', 73),
('166', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Z8EgESMs6BuhNUggTJnxxCWWjs_RJt-p', 74),
('167', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1kSyzPPfhUOkgr814xJdSNfsup0IE6lc-', 75),
('168', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1tcVtTZoLZdUb8Sj21wQhIuKqUT07x_ut', 76),
('169', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1qyOYad41ob3PHI8aQtcREHlswlKkfQ_r', 77),
('17', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wicHB80lUS37DLJ5AkCUdv6fcKtdatXU', 78),
('170', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1q0yC_pMtRA8i9Y02gpom56OUsfdQo-XU', 79),
('171', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1IAgaxEOHTl3mfxz4fOwjCTx9xWETKSVs', 80),
('172', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1V7wEsz8k59Zdx8RmJN36knjPZus-FKvv', 81),
('173', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-y5jjlqnb0rWoguUzSwi3znOa-9wrbeu', 82),
('174', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1SMUasFyNKbevYtM86vx9Ee-8tpc9nq4o', 83),
('175', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1GljwinawIZPRzB4o3cxUnEk4A3nsVOX_', 84),
('176', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rgaUWSVTFeRuZzgsOIJ5O7AzDL3CB18b', 85),
('177', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1tKXvpU4O2uxMt8z2UETrv1tslmLRiUuP', 86),
('178', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Ef3oZSoUIEPes8PXUSqXej7pYEw90Gzk', 87),
('179', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1fR8cYwPWYJSEw82y9ie7RukQOp_xw_S-', 88),
('18', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_LYj0KISkreOp0E2sH8ySwnmakBay5Ho', 89),
('180', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1SN1cYoTcJyGb-e-BJOHyTqHF5UPAOrue', 90),
('181', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1TelVeyrceGBv-RRT0Ozf_7SQgxA5zPbZ', 91),
('182', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rsGpjsLdJaEGk3_X1y-JA2ytZbsUQry2', 92),
('183', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1PCcQaryl7uCbBLKIIgmL_b-2SXLdr3d-', 93),
('184', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1FOKBp7RVlpqYMyVlxUZkDS__lSlgtzEO', 94),
('185', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Ja-q2T1w7c1mrEgDlq3fCix8-snwamDI', 95),
('186', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '153uIUO6HZ9RTLg6VWsMoOMxLwT6WKQXz', 96),
('187', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MfrTTuI0Hn2OEWss5jTDlQQ85HS32eH_', 97),
('188', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1biFZWSd6gUMI5RZSloFPkiQmXMDShC8P', 98),
('189', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1kwv1LkHYVZhjK2wT5G8Yq8xsvu54Fbez', 99),
('19', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1KDgift6bHd5CVOdg8rr8zPuFZJGglQhx', 100),
('190', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ycXLNVyRow_BnkV8r7tZtsHCxDUJ8YS1', 101),
('191', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '132TBbfHMM-5U_ervUs-Bq_Z5PMNHcseL', 102),
('192', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1WA0gFDCOlsXWO3sXctHzTplaPTAEKTld', 103),
('193', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '10zQZTAdVWiqH1hvUszLXMvsO6lKdSUqP', 104),
('194', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1AO7-3cdnQh6r2x385W63y1pq-2MTwmjq', 105),
('195', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1c0_5IsXXEnw4m95IS3cY3BuCh6hf_6MI', 106),
('196', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1sCxGZR0VzwRzz62r7HVL16spLeBJyeYx', 107),
('197', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1sIAc4xuhkXsaMsIZoGsF0S4rEupQKs0_', 108),
('198', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wZEQ5SRZsRW68O5Cji4gXYJUPRDqYVXp', 109),
('199', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '19winW7N80--ATNGSpQ_S_HJIoHyFj9As', 110),
('2', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MifIh22oTbAwkcZ0U2NEFM6-A-OC-6Wt', 111),
('20', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1I_GrGLmHAsesKsT3yodkyv1K1JkU4XK-', 112),
('200', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MM6JMRoOYBTUhLDyxm3Uw7YjMq5u9GgF', 113),
('201', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1hvM9pb8wMxOVqLPC2sM0I8a44aWq3eiA', 114),
('202', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1xHND1p6pj-r4EyJExM0dgz9AmSzIyXgd', 115),
('203', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ykt3B2zj-6Yc_IIHX56Kdl5UyOSm35sD', 116),
('21', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1sr9BQkTP-caMWPG7iK9tYG0jXyh6v9QM', 117),
('22', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1AFOLNGtzZZz85bVSHpGmAaRKbgu_phiF', 118),
('23', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1t13wr5eIQ4GIBDuu4urNnWM-ZVQOg1pA', 119),
('24', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1GhiPay_mcqbNhOwurWBJrQeRh2issHsO', 120),
('25', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1kNjafu4fIAIMfePMtC6xKtIM1TDDAbCm', 121),
('26', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1zKyIbRGWffo_taK-rmtTg9Fij7h2U_0z', 122),
('27', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1EekIokzxOT3dTMvUYYtAiIhfbMlYIV0u', 123),
('28', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Tb58gYyno8Cv5loilmDvo7GZmo7MIuvQ', 124),
('29', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-PhMAjhx1Qymx8ShvXfZ_5LpEhWWjTMD', 125),
('2b474f4c-4d18-4c27-87cd-19ed04d3165b', 'a77d3931-d347-410d-88af-71cb223b8df2', 'Chương 3: My Bed Is Very Big And Soft\'', '1cxmZ9EL2fREH8h_cehvz2nyvEQeSbOKb', 2),
('2b5561a3-764b-4fcc-a382-ff74432af86a', '89969950-e767-4e33-9e0f-d25b6d17a34f', 'Chương 1: hiem ', '1VGKypA7BU3iffZ1isjOqklwUMWn__RcU', 1),
('2e6d1623-8465-41d6-bc09-1e59d8198424', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8', 'Chương 2: zx ', '1Zv9kd7yWtD2ygzRG582j7xXWNThh2OJ3', 2),
('2f945476-52da-4abc-b0e9-b30bf842a351', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 2: Long ma Bắc Giang ra tay', '1lh7E3XSHBl2K8QiJscAzDQ6igVLJR5o4', 2),
('3', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1h0catYazGPmuOKIab_oItETrqbbHf2pH', 126),
('30', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Oe0Vya_t9Ly5ndV--arX41qTVZFqppSc', 127),
('31', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1OJtTs8SfEYlXrS3GtwtCnjbtL3avM53Y', 128),
('32', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1jRoNuf2rHvgi6u39gJAdfM7IqIuoycWv', 129),
('33', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1I3DwZp_lf1u7OPZK6ucZfALqU979-0Rm', 130),
('34', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1gKIuTPTMVJwtmnydbp8exI2iRVfQvm8f', 131),
('35', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1tf1f95fl1T3kfC4I91JLxgWWT0Eif4by', 132),
('36', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wExfp0FzURPUofuGlcjDyPw_NUfR-tCU', 133),
('37', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_crSkwlguBe_sBHTlnSX0KX3NFLTiQEr', 134),
('38', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1q2bpC99vfW01COfwqGuI854oVWJjf6sp', 135),
('39', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Bkq7trgGWUiLqaHbYEAXWIxpwKthYx2r', 136),
('39d3de91-2aaa-4ce2-958c-bf59e67ddde5', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 1: Sự xuất hiện của 4 tỷ tên cướp', '15c415Vl4HC7lU9zSvnwqHk8d5oJSDcdi', 1),
('3f1b3d40-9799-4e58-95f1-6084ef28096e', '2f3d11b4-cfd8-48bc-948f-d930af062ac0', 'Chương 2: Kết thúc ', '1qrnxquYCveEuhtj8Qc-f1ibAN5XtmI98', 2),
('4', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1gFYJcb4c737pZ1AmJHS8gmtDz5JSItYe', 137),
('40', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '17Oae6Kd6sqr_hIsjRFWqbdegHz-Fn4IE', 138),
('41', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wcpw9jDw5kaq4NM09shnLVKeNTlOvuMx', 139),
('42', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '12BFaWj2q_UWSg89z8Svh6WkfqBx_FL1I', 140),
('43', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wpD1LlIN8O92OjrKYRe-imgwJtLf0mC4', 141),
('44', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1dU7Zp_z65BUKbolfLOcOeWGAgzTxNdZX', 142),
('45', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '13sN-OSIwo3rE2y9h5xNvPhPhxhCB75Oh', 143),
('46', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1pOC9k2duGIexbk5Vw2efTKrf8fkq_11U', 144),
('47', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1HISBZAT81hRhSPO3346y8QyrUWPIIZNx', 145),
('48', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1FFIObl32nI75tQvuhrFAEflGHbUV-67G', 146),
('49', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1fx2F973Ie5JvPyKOQOu4hsxvBtj241lm', 147),
('5', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1_2rkuuXDSAq-Lh71_EXXRGEzLGQ2OPUO', 148),
('50', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1fRrkj98vPxKQPLLZGOllT3-Vnvw94hgj', 149),
('51', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '16CvsdBXvLvj4FCz0pfQHT_JvkCBIE3aN', 150),
('52', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1YnRZsOXi6t2HEIaBLqGfS4762CtjMWG2', 151),
('53', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '170f1l_3r66N_CgzogYUUE22nVMAQd4aF', 152),
('54', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1vM5_G0vnJ5mTvO4YIPdsu7IKcLLppJ8K', 153),
('55', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1YelxU0sekz2RJAfjEhZ_Q_G-m7Uf-dW6', 154),
('56', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1d1Jybe9zeWk_jgaPGqDC-ES-1aVMmVoX', 155),
('57', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Vq_Imo5MqA52W0B5XpsmPfV4F9Ig4-zw', 156),
('58', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1GbdQ7hlAShw72KQYcaVnPtC0V9UGtlVx', 157),
('59', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1EoxGKY2WAiEE42L7owo2XmfIZeZWbIlG', 158),
('6', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1p_Mhfl5dkA3RF1K9oWuDhBp5OXFbIl--', 159),
('60', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1DCDxo9y_-i5qU1l4nPU_hcPZTbEp8lO9', 160),
('61', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ZdTfzqeiJsbYNcgTTzf9NUYYq1FatMM6', 161),
('62', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wA9MRo8as7zJZjpYLlv9VR9iA3-JblMH', 162),
('63', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1COMSkCHhY4GVey_aoJiMEdjkiHR0kGlg', 163),
('64', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ReZW1lr_e9U_WSZ5U-UDZZI0eBw8scTg', 164),
('65', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1mrpjL9mTZYey6_GpiQ_USmjh14uRCazD', 165),
('66', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1RjmAtE4x7iwdxDmHlqRIUqnr2Rjc26LY', 166),
('67', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '13ZrpTI-Db65gg6DQnWxxackVNkb4fyL5', 167),
('68', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1BkjNJAgmCUC2v0RP2TL-RVmmXnMewhbr', 168),
('69', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1hVvzGyf6kNN0CgECb7jsOFs2cSuFAjsC', 169),
('7', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1ONBc4QXGa_6Gonl_AdStAs6RJdYtL4Cf', 170),
('70', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Xz0rXMOzk8PYneUPfk5Bks5vb50ogNkK', 171),
('71', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1CxdvdJIViWD_jDh8EiBeKKTF36sYdDDq', 172),
('72', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1cg2GwG3vWJnMD5Qy6cFH5F5bXMIBt4TY', 173),
('73', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1sF85WMaNgxl04GvItuf7Qm7tJIwKN6om', 174),
('74', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1hgPQUhGoWNZSm3uRz6EfOzM1LtE3UmAf', 175),
('75', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1NDhZFZNqMC1dL6C-LqAeyuHEtOxzL0Wf', 176),
('76', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1SzHfatndEnO_KkAFI7DGuA-d9-8zqE3l', 177),
('77', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '19xzRRtdw0z1xiGS4MhLhVhgvHtYxCc4P', 178),
('78', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1LqRd7wL77ztjtAhxZUfpoI48xurGY5Mo', 179),
('79', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1J-EW-0mPxE4Zc9AzglQHmCnzf6IZXGAX', 180),
('8', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1yXeJE3rqcozdlilljxgyLQHbaulBXqh1', 181),
('80', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-cKVn7SmVF9NGkhw2jY5tOerdpDbcRzx', 182),
('81', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '183tqMYE6cVQ05WZqIvAmkNYEzsyBynlr', 183),
('82', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1HkwDGFqwKV_GU7tl9n6NV6UNCS2EoyCG', 184),
('83', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Jlu5140wHZjW1mnglI0YMOD1LThICD8G', 185),
('83f05502-9b0b-4a91-b3f5-570dd4772b80', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8', 'Chương 1: NGUYEN TRAN HOANG LONG ', '1uxB7v3bNXB9LHX3OzS6GZYjg5CZyM-Li', 1),
('84', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1spTBCGeE65dVUfhBAquCB1So_GcW_F5P', 186),
('85', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '14MVDi5x9tPb45hqbNK2ZqMOkzIMvLoac', 187),
('86', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1wyp1SWj8Y-PtGQqIQaG-PoylMkmjw0dn', 188),
('87', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1T45uJ2O8zHW_v9FlufsrdnYWONZlF7Uu', 189),
('877aff06-3415-4167-849b-e2f400b52982', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 4: Long ma Bắc Giang chiến thắng', '1bx4fTQoTJPyvel3FC_ny7nAjn1JVE3wB', 4),
('88', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1MCA3cAI0CsuuzaHeWuWu7EfFaDFp7J_y', 190),
('89', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1O7ICX-OEfHDUmf8B46_QC1MVvhILFxsX', 191),
('9', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1bBYP9ayZtHJgwnXZT9OmWKyl0HSO69Oz', 192),
('90', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1-IR0RkcmcVzhUtyvTzRb10vn2PDbYiuk', 193),
('91', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1VperQut35Jn9m8ji5BReuHgAEMOXPRRu', 194),
('92', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1PnjPDiVMH8eaoBivq114L4m0wOMYLGwE', 195),
('93', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rexYnK5o2xTxYFt1E2CdE56WX1DE1fo-', 196),
('94', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1Qq_7uJ1BiGpRT0R0Dv8b7eag7tP3EZ_U', 197),
('95', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1rmg_0OI1L4nwQ6eMcGDCgt0daQC9kDH4', 198),
('96', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1vcPE0qMThfAQl2lefrb2rlWApDMAppBD', 199),
('97', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '1vBHTJvpCTNC42WPxeX__FtVpB1vF1oZu', 200),
('98', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '18gK8ag6YvywE2AzYkoYFlBL4G-QaL842', 201),
('99', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', '', '11BY3jB-nQx2IfbpXAzAin3C42jER5HYe', 202),
('ac8e3e3b-5482-4c20-b28c-cdda4c2015c3', '66d6816c-180a-409e-8a0a-05f0502ddffe', 'Chương 1: ngày mới ', '1KMvJsb6dw_XO7_GrcYnJB5AftRvkuvFB', 1),
('bf57804c-08c3-4eb7-86d1-6faaf3ddfed0', 'a77d3931-d347-410d-88af-71cb223b8df2', 'Chương 2: The First Performance Has Begun\'', '11FVSTLnlr91QE1BTdQTts1Rxpd7Xx7cl', 1),
('d929f1e6-b376-4763-a893-0c53cff84933', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 3: Long ma Bắc Giang gặp nguy hiểm', '1mooeH5wwxdOAZLx7rRhojFUcoUKgiFmD', 3),
('f10a7786-aeb0-4347-956c-971cc68051f5', '2f3d11b4-cfd8-48bc-948f-d930af062ac0', 'Chương 1: Sự bắt đầu cũng như kết thúc ', '16Al7UQjemvdz6ImKme0u-Ko_ZEBTIzRQ', 1),
('fbf7f6b8-647f-45da-93b1-13e09f5700a2', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 5: Kết thúc', '1QXETOEdBPkAkJkMb-OuVELUMj2i519AX', 5);

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
('-UUXenvmcJDpLvxB2foT7WUTjyJP6JH6', 1701954466, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('80pV0ad7xhon3zmUvoBr-MiiDTYg-atr', 1701839995, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"109632126491025897743\"},\"user\":{\"id\":\"109632126491025897743\",\"username\":\"109632126491025897743\"}}'),
('Guf02UoIaa2_dF8r2p6wvyuSXZg0pqVi', 1701834511, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"110152635823665920356\"},\"user\":{\"id\":\"110152635823665920356\",\"username\":\"110152635823665920356\"}}'),
('Htk7aslQZaMhIuLsSJ4Ufb1b2MnDCNXW', 1701860914, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('MoKbECdOg6krP8_rJrUyTmJVqp4ppH9W', 1701775662, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('TKQgNFZfzjWCx48DznJtURWkwTcM-DR9', 1701838614, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('XWsaY8JbgHXRdu3XlFZYwkdnT9J513NY', 1701836540, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('blQ-u57ixYn1iWsVBaS77xZ7oIuDFZch', 1701859036, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"8a7db9fa-a51f-4e3d-88a7-cd960588aa59\",\"username\":\"hiem\",\"role\":0}}'),
('k648GuJDP94-B-k1C0DkwdGIEKjR3eUO', 1701935292, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('m93DU841T2hx7keWIevS-0kL4t8nvm69', 1701774379, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('nriwwvjLNsa2K4kPA42yyBEPQ3iwHxL5', 1701859923, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('qFAdg87VH299e_UY9f4yK79wDgWvLMy7', 1701952997, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('rjU9SHvQXc9HomNXszW_cSuk8I8ueSag', 1701775688, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"109632126491025897743\"},\"user\":{\"id\":\"109632126491025897743\",\"username\":\"109632126491025897743\"}}'),
('uTmqjJOZN23EiyxEid8y4APfKSUtVe_-', 1701880940, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('vD00eXhD_5cBac2vfxBiFJR8wyZLHjfa', 1701954281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"bdbd15ad-50eb-40fb-a0d0-f141321e6fd0\",\"username\":\"admin\",\"role\":100}}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `anh` varchar(255) NOT NULL,
  `id_truyen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `slider`
--

INSERT INTO `slider` (`id`, `anh`, `id_truyen`) VALUES
(1, 'https://drive.google.com/uc?export=view&id=1L6l_gLPnpSchVmD6zKS0XHiffQggP-H9', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8'),
(2, 'https://drive.google.com/uc?export=view&id=1jcnlY4Izehr9Xo1rRrQelMrDKDrml5bx', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
(3, 'https://drive.google.com/uc?export=view&id=1um0R2TJe2WdYD3QBVBWB7V0LC10MuVeu', 'f7363ce1-1a26-4338-b9e6-99c5c9988ebb'),
(4, 'https://drive.google.com/uc?export=view&id=1Lx5qaQQvg0LaQzrmPcmaB9t_RNvTDH2V', 'a77d3931-d347-410d-88af-71cb223b8df2'),
(5, 'https://drive.google.com/uc?export=view&id=11mNwK8WsG4wHZ4uRYNUdYDgefI2DlhMv', '66d6816c-180a-409e-8a0a-05f0502ddffe');

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
('100489975828441695411', '100489975828441695411', 'Dragonccm'),
('109632126491025897743', '109632126491025897743', 'Admin Quyền Năng'),
('110152635823665920356', '110152635823665920356', 'bá'),
('113263126602180653712', '113263126602180653712', 'Bingchiling'),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan_dangky`
--

CREATE TABLE `taikhoan_dangky` (
  `ten_tai_khoan` varchar(100) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `thoi_gian_tao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan_dangky`
--

INSERT INTO `taikhoan_dangky` (`ten_tai_khoan`, `mat_khau`, `email`, `thoi_gian_tao`) VALUES
('d', '737f9acd778182b34d75ab3dc03c1f6dae3fd1f3bb68b0d72c9db2101dc6f21b37836239417be21b73f5b02750dc6aa4166a', '1@g.co', '2023-11-30 06:52:22'),
('dx', '737f9acd778182b34d75ab3dc03c1f6dae3fd1f3bb68b0d72c9db2101dc6f21b37836239417be21b73f5b02750dc6aa4166aced576bc8ba486f83aaff752d7cd', '1@g.co', '2023-11-30 06:56:24');

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
('100489975828441695411', '100489975828441695411', 'nguyenngoclong5511@gmail.com', NULL, 'google'),
('109632126491025897743', '109632126491025897743', 'hungthinhh2003@gmail.com', NULL, 'google'),
('110152635823665920356', '110152635823665920356', 'chandoralong@gmail.com', NULL, 'google'),
('113263126602180653712', '113263126602180653712', 'binhminh19112003@gmail.com', NULL, 'google'),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem', '1@g.co', '123456', 'normal'),
('bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'dx', '1@g.co', '123456', 'normal'),
('bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'admin', 'admin10101001@gmail.com', '7b31eed16d1ae60f54187b2c7a50c2cccb255b3cdfcd5b2f60265aabb5bcd32468ea2dd1ea1cf97ea8197adc964a104683ae84ad97e6e64193e4e9149308bf5e', 'normal');

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
('Action', 'Action'),
('Adventure', 'Adventure'),
('Animation', 'Animation'),
('Comedy', 'Comedy'),
('Crime', 'Crime'),
('Drama', 'Drama'),
('Family', 'Family'),
('Fantasy', 'Fantasy'),
('Historical', 'Historical'),
('Horror', 'Horror'),
('Mystery', 'Mystery'),
('Romance', 'Romance'),
('Sci-Fi', 'Sci-Fi'),
('Thriller', 'Thriller'),
('War', 'War');

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
('17918f5d-3865-42c3-996b-c81cc5def6ea', 'Comedy', '2f3d11b4-cfd8-48bc-948f-d930af062ac0'),
('27c2fa8d-ee64-4432-8c1e-eb8e5a136478', 'Comedy', '66d6816c-180a-409e-8a0a-05f0502ddffe'),
('2e5b9890-d4f6-441a-9f4b-ff514f93d7f3', 'Fantasy', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8'),
('44620042-72d5-4e01-ac39-3353f2dc53a0', 'Mystery', 'f7363ce1-1a26-4338-b9e6-99c5c9988ebb'),
('59858889-e5b2-4adb-ac12-3ca863aab887', 'Drama', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
('7812da67-bd3b-49d4-a7a5-12b520c1aa63', 'Adventure', 'a77d3931-d347-410d-88af-71cb223b8df2'),
('7970f9bf-97d4-4790-9783-b1edd5048cf2', 'Action', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
('7cfeb0a0-4455-4962-bdc2-213836b67bf2', 'Comedy', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe'),
('7f67425a-cd87-41fc-9fe5-5133a1f168e6', 'Action', '89969950-e767-4e33-9e0f-d25b6d17a34f'),
('91e52ed7-4144-4434-ae56-9984ce7729dc', 'Fantasy', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
('a65bc844-018d-429d-b244-c7c96b3eb930', 'Comedy', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8'),
('ab0a2c21-7881-4f60-a45d-0d874fd7601d', 'Horror', 'f7363ce1-1a26-4338-b9e6-99c5c9988ebb'),
('ad79121c-eba7-431c-a7e4-ac6870bae21c', 'Crime', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe'),
('bd345637-6bde-47c9-a086-59fd1f901bce', 'Horror', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8'),
('d5c01f45-240a-4e1b-9320-bfe1856b04df', 'Drama', '66d6816c-180a-409e-8a0a-05f0502ddffe'),
('e7da29c1-0036-4dd4-b97b-b5a8b18c976f', 'Adventure', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe'),
('ebc68677-cc02-42b2-9f0a-a3863246b78c', 'Adventure', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
('eda1d5a1-652a-4b9d-9813-ec13c1ca9ca8', 'Action', 'a77d3931-d347-410d-88af-71cb223b8df2'),
('f78c5485-3896-41ee-a072-cb5a25b141fc', 'Fantasy', 'a77d3931-d347-410d-88af-71cb223b8df2');

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
  `role` int(11) NOT NULL DEFAULT 0,
  `last_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `thongtin_nguoidung`
--

INSERT INTO `thongtin_nguoidung` (`id`, `id_tai_khoan`, `ten_hien_thi`, `anh_dai_dien`, `gioi_tinh`, `role`, `last_role`) VALUES
('100489975828441695411', '100489975828441695411', 'Ngoc Long', 'https://lh3.googleusercontent.com/a/ACg8ocIIb0HY0aqShFhxx-BrcDuB_9iTKfjdudBqsOfCuLCbs18=s96-c', 1, 0, 0),
('109632126491025897743', '109632126491025897743', 'Hưng Thịnh Nguyễn', 'https://lh3.googleusercontent.com/a/ACg8ocIOLB-fbztSnwyBHnyuYg_cpwsxJwxrBJ7DkcMrJnX2=s96-c', 1, 0, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 0, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://lh3.googleusercontent.com/a/ACg8ocLYq5vVCCCNuPkBLcU1GVRtVvlwtp2NnRv15Rei3u03jiA=s96-c', 1, 0, 0),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0, 0),
('bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'dx', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0, 0),
('bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'admin', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 100, 0);

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
  `anh_dai_dien` varchar(500) NOT NULL DEFAULT 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg',
  `luot_xem` int(11) NOT NULL,
  `luot_thich` int(11) NOT NULL,
  `ngay_cap_nhat` date NOT NULL,
  `trang_thai` varchar(18) DEFAULT NULL,
  `ban` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `truyen`
--

INSERT INTO `truyen` (`id`, `id_tac_gia`, `ten_truyen`, `so_luong_chuong`, `tom_tat_noi_dung`, `anh_dai_dien`, `luot_xem`, `luot_thich`, `ngay_cap_nhat`, `trang_thai`, `ban`) VALUES
('2d48dea0-e550-473c-8ca5-cb86a15f2dc8', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'zxz', 2, 'zx', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('2f3d11b4-cfd8-48bc-948f-d930af062ac0', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'sa', 2, 'sda', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('66d6816c-180a-409e-8a0a-05f0502ddffe', '100489975828441695411', 'ngày dài', 1, 'NaN', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 2, '2023-11-29', 'Đang ra', 0),
('89969950-e767-4e33-9e0f-d25b6d17a34f', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'test', 1, 'hiem', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('a27e55c3-9468-4860-baa5-85cf42d5f7fe', '113263126602180653712', 'Long ma Bắc Giang và 4 tỷ tên cướp', 5, 'Truyện là cuộc đối đầu đầy gây cấn giữa thế lực bất diệt Long ma Bắc Giang aka trai đẹp Phú Quốc với 4 tỷ tên cướp aka creeps tuy biết đây là cuộc chiến vô cùng không cân sức nhưng trai đẹp Phú Quốc kết liểu 4 tỷ con creeps thế nào mới đáng nói, đọc để quạt anh Long ma Bắc Giang.', 'https://drive.google.com/uc?export=view&id=1gNcu0TAzq7Lf2e6V2xwNGt6ylrbYnGcc', 0, 0, '2023-11-29', 'Đang ra', 0),
('a77d3931-d347-410d-88af-71cb223b8df2', '113263126602180653712', 'Dế mèn phiêu lưu kí', 2, 'Truyện là chuyến hành trình trải qua vô vàn cuộc phiêu lưu của chú dế mèn từ xứ sở thần tiên choáng ngợp ngay lần đầu tiên nhìn thấy tới đại hải trình đầy thách thức. Qua nhưng cuộc hành trình đó cũng là quá trình thay đổi của chú dế mèn của chúng ta từ một kẻ kiêu ngạo, tự mãn về bản thân đã không ngừng học hỏi và kết vô số người bạn. Để thấy rõ hơn những cuộc hành trình và quá trình ấy, tại sao không đọc và đám chìm và chiếc truyện này.', 'https://drive.google.com/uc?export=view&id=14ABgUuYPuf0CN-aUeGfjOUaFM4luydB_', 0, 2, '2023-11-28', 'Đang ra', 0),
('da13d5bf-51e2-4598-9d22-31ff3027e33d', '100489975828441695411', 'Big Order', 154, 'Vì đây là một tập phim hại não nên sẽ không có tóm tắt nội dung... hãy dùng não, mặc dù sau khi dùng cũng chả hiểu gì cả. Bản TV series được phát hành vào tháng 4/2016.', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 1000, 1, '2023-11-30', 'Đang ra', 0),
('f7363ce1-1a26-4338-b9e6-99c5c9988ebb', '110152635823665920356', 'Nodejs', 1, 'rất kinh dị', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 3, 0, '2023-11-28', 'Hoàn thành', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `truyen_yeu_thich`
--

CREATE TABLE `truyen_yeu_thich` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL,
  `chuong_hien_tai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `truyen_yeu_thich`
--

INSERT INTO `truyen_yeu_thich` (`id`, `id_nguoi_dung`, `id_truyen`, `chuong_hien_tai`) VALUES
('3c893d02-058f-4d37-b5a3-15fb583a942c', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'a77d3931-d347-410d-88af-71cb223b8df2', 1),
('7059a773-0559-443a-b34a-9ef213af8075', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '66d6816c-180a-409e-8a0a-05f0502ddffe', 1),
('bf21e1cc-1bed-48bc-ae3c-420ef0d04c70', '113263126602180653712', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 1),
('c7cf504e-2a67-42dc-8fe6-0c1a650e00ae', '110152635823665920356', '66d6816c-180a-409e-8a0a-05f0502ddffe', 1),
('f03233bf-bdc1-4a9c-b93e-25d35effc589', '110152635823665920356', 'a77d3931-d347-410d-88af-71cb223b8df2', 1);

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
-- Chỉ mục cho bảng `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_truyen_slider` (`id_truyen`);

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
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chuong`
--
ALTER TABLE `chuong`
  ADD CONSTRAINT `chuong_ibfk_1` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Các ràng buộc cho bảng `slider`
--
ALTER TABLE `slider`
  ADD CONSTRAINT `fk_truyen_slider` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

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
