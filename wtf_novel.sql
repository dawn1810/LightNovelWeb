-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 09:04 AM
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
('1', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 2: The First Performance Has Begun\'', '156sAHcnZY7yG4X4y6lLgkX6G8h185h5b', 1),
('10', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 11: I Don\'t Want A Sister Who Is So Gentle!\'', '1_0RlRe3Bn-A_6hj12k68QS-1oVTvZm3x', 10),
('100', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 92: Your final evaluation is..(1)\'', '1gSwxqfqILsa-ezkXy7Iad3s-x4IJTHSR', 100),
('101', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 92: Your final evaluation is..(2)\'', '14ajkXJ_q9FgaNyUX0dLCVrRiziBcAYBi', 101),
('102', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 92: Your final evaluation is..(3)\'', '1Kv9rFD_Ysy3yjGHMleUrF9U8K5Kw1vPc', 102),
('103', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 93: Son, your Dad, I\'m here to comfort you!\'', '1gSFAtZL5iqVeSbxmfQtGYwxez3_ZaN-P', 103),
('104', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 94: Junior Brother, no one has ever treated me so well since I.\'', '11RiA1YNIfPLllF5Y3-FCKQyAFfwt1P1e', 104),
('105', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 95: Do you know who I wrote this poem for? (1)\'', '1eiKpLxPlP0MuS_oQAkZWCXvzj1OkGFn2', 105),
('106', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 95: Do you know who I wrote this poem for? (2)\'', '1pC_v1jZHeWctDKitzu4PvqEt2y71gbgH', 106),
('107', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 96: Who made you the light that illuminates me in the dark? (1.\'', '1-mLkd0CzhvB_KjeGwJYfF7aPBjgLzC3r', 107),
('108', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 96: Who made you the light that illuminates me in the dark? (2.\'', '1Y9ozjJ58Omu__qxwUtokYQz79-KygpT4', 108),
('109', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 97: Knight, do you like me?\'', '12iZIEF-Kw2UjI7coA3U4s-sOaZN4pZg7', 109),
('11', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 12: Big Sister\'s Selfishness\'', '1_rjzuhFurILgZ44HZOmLAF6QWkiDQh87', 11),
('110', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 98: Hongxue, You Are the Star, You Are the Lotus\'', '18wA4Ee-r7fuGFHqfneBaXvglOxfTa8X5', 110),
('111', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 99: Xia Xueqi is always one step late (1)\'', '1H4VET54WeiARwgAsvWt-vbnCLjKS-kVy', 111),
('112', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 99: Xia Xueqi is always one step late (2)\'', '12bCRCwjkOdrwzTuw5QpLmdyyrXkFrTRG', 112),
('113', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 100: Traces and smells of Mingyuan are mine! (1)\'', '1vAsWGTz2iSA9FbKWBrl9mAd26j-4Umrk', 113),
('114', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 100: Traces and smells of Mingyuan are mine! (2)\'', '1VaTNLzaB_kZ9wBgAD19G3V7O-6jzv_Nk', 114),
('115', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 101: Son, daddy can only help you here (1)\'', '1Q1XK4NrocK2ZwXyAMSwsfsKV465VW6i-', 115),
('116', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 101: Son, daddy can only help you here (2)\'', '1RQrACWrjcewaCLK0YN901vcRa8K5SDPd', 116),
('117', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 102: Between us... who will fall in love with whom first? (1)\'', '1ZeqV3uyjiXQJs4G7APwyRM5X62LsDgKt', 117),
('118', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 102: Between us... who will fall in love with whom first? (2)\'', '1iS4dK1wVkDp-c-dsZ5S0LFrGXqfDhWjb', 118),
('119', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 103: Ruoruo, who began to become more active (1)\'', '11XSL6n31cvweFodonRKBqtUTQiHEXd52', 119),
('12', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 13: Ruoruo Is Not Stupid!\'', '1rUyhTlThV6J7vt_PsUJMY894iIunzzwf', 12),
('120', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 103: Ruoruo, who began to become more active (2)\'', '1Wu7nDd3SGZv7M4MDSglyncziQRPnWVu1', 120),
('121', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 104: Why is the soup she\'s drinking so delicious?\'', '1_qjMugzArDcryOnWT0Bp1PJj_5RWZr4A', 121),
('122', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 105: So I am the prey?\'', '1L3huyY4Cz_pNU0rHAE7Jf-Jn01TXkVIa', 122),
('123', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 106: Xiao Ran, Xueqi is also a name you can call? (1)\'', '1C0iu9-QhUaJ1H4AuEXSbmoD1tbsebpne', 123),
('124', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 106: Xiao Ran, Xueqi is also a name you can call? (2)\'', '1BaOaAKaYaMlIvauzvH669Z-06NFKFWHl', 124),
('125', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 107: I know that Xueqi is protecting me! (1)\'', '1l_dFDkYC7GKw-kfALGBPWxJt_CHAF0cP', 125),
('126', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 107: I know that Xueqi is protecting me! (2)\'', '1lQLq4i9RkszwLAQrPuKKkshg8tlEBPTQ', 126),
('127', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 108: Xia Xueqi and Su Mingyuan are in love, Xiao Ran is...\'', '12S1GoCuaS8wTtmQ1QURn_ywy4JSTWyTs', 127),
('128', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 109: Your evaluation in my heart has become higher again! (1)\'', '1o8yVI8uHwio8UZNAxN_dxGuyfrOxSz1R', 128),
('129', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 109: Your evaluation in my heart has become higher again! (2)\'', '1aQ8Y_LSyYgpA_jS3x4DjwNdTWgHsZzXE', 129),
('13', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 14: Kneel Before Me Xiao Ruoruo!\'', '1DXhV5slGlpMQupwWUcbkH_3rQQtuKZ57', 13),
('130', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 110: Someone stole my baby, so I went to play with them (1)\'', '1dJavjQrCYBW4J4LfYK3hk3GcIvznCOEe', 130),
('131', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 110: Someone stole my baby, so I went to play with them (2)\'', '1WVS5-bh-RhiEsrczEM_LRsxaKg3EGkpa', 131),
('132', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 111: It belongs to me, why ......(1)\'', '1MVxMrrvPes1H5GvIyg8TkbOeFgbRTwqa', 132),
('133', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 111: It belongs to me, why ......(2)\'', '1ptmlledY9DQMzdDxDH6LnQJtU1EPMatJ', 133),
('134', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 112: Xia Xueqi wait! (1)\'', '1A5uw5aB7k1SN47JV9cAx9SpSKo1pKOMN', 134),
('135', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 112: Xia Xueqi wait! (2)\'', '1Hh6C0PucNfscTCJG7OIL9KokeLi5CiR1', 135),
('136', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 112: Xia Xueqi wait! (3)\'', '1OWYxeWNDAOW861JJ-UH_VTmUYW4URQgy', 136),
('137', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 113: Then. What about mine?\'', '1mTSOfoOKgICbPPUKAcL4j44Nv0zQcg4U', 137),
('138', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 114: Digging a hole and burying myself\'', '1FBdXyhJ4DxNs14ubNXkCfSKw78jqxoGv', 138),
('139', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 115: You have stopped pretending and choose to show your sharp.\'', '1ku4eWBeM3JKf0MZfH-Nj4ZTJ4_lFpJ8I', 139),
('14', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 15: I Am Helpless, I Can\'t Do It!\'', '14luHDfDp9hgIN8vtUC0SL8f-LYODb3yx', 14),
('140', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 116: I wish you and Mingyuan to become a couple (1)\'', '1aknPBq2W2soGOHpLzEgJidG7eT57JSQ3', 140),
('141', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 116: I wish you and Mingyuan to become a couple (2)\'', '146wpvuUl37ESnSsbTtoSB-cBtCOCH2zk', 141),
('142', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 117: Tonight\'s moonlight... so beautiful\'', '1cUm6dKQtot3MNiWqEnrtGc4iIkplOiim', 142),
('143', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 118: Different people watching the same fireworks\'', '1PdhKrz3nM4WELYXbT_H8SzqUK5xQgoO6', 143),
('144', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 119: He has begun to look like a villain (1)\'', '1ElmnuYmstQIHfwWyX4TCXH-H0QnmyNU7', 144),
('145', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 119: He has begun to look like a villain (2)\'', '1FJAwyBTBufo9Skhu7ABPGG7ONQTNn3Hq', 145),
('146', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 120: My knight, what if my love for you is seen by her?\'', '12Okjaw9SIZoRMkseMBKsW44cgdTGzbGw', 146),
('147', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 121: I have become like Su Xuelan?\'', '1vWuGVZx-G3QAR3-tkCp4yJe8GoNtoyxT', 147),
('148', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 122: She is your love, and became an outsider?\'', '1DLg-ZmhWOaW9LueDl7ucY-VHLvmNOrOL', 148),
('149', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 123: Xiao Ran is still on his way (1)\'', '1NdeDLf19SQ24yu2rc5hoN0VsrbC4rxhG', 149),
('15', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 16: I Actually Made A Lot Of Money!\'', '1XpEdbDgqGHdIWQBLHkIfHU7gm5gAwJv4', 15),
('150', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 123: Xiao Ran is still on his way (2)\'', '19FUm7SUzLlGqvyZjG93oc4CJgg4OgCa5', 150),
('151', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 124: You just said... no one can save her? (1)\'', '1nee9sb0VG-K1_3nbIZNWGs8yz7pwgRV-', 151),
('152', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 124: You just said... no one can save her? (2)\'', '1wYZsxbT65jEQW_6FH8OzTwImunD3N5Tu', 152),
('153', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 125: You are unfilial son! (1)\'', '1iGXiyyJLUxiJysHkcrYCftb2BKAJHBXG', 153),
('154', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 125: You are unfilial son! (2)\'', '1z9UOHyeDgHZuLYdgVwhvoD-UgpTsHt3H', 154),
('155', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 126: She was just thanking her junior brother (1)\'', '13CS40HJsiGS784saL1WGypsp5GcoqcqJ', 155),
('156', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 126: She was just thanking her junior brother (2)\'', '1rBc0WWLcMB2yATM4RQlMne471blQ4a8F', 156),
('157', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 127: I\'m not painting, I\'m just fishing (1)\'', '1_sqqftxD23XIexs3fuHdXFaX0lZZaaG7', 157),
('158', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 127: I\'m not painting, I\'m just fishing (2)\'', '1pPr5TnIZPNsmOtQ5sE7Apjorl0VKSEZw', 158),
('159', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 128: Do you know that a father\'s love is like a mountain? (1)\'', '1-qefceacCglFabIulkgTI2EDJbJv4hMj', 159),
('16', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 17: Ruoruo\'s Temptation\'', '1FM1lSIBcYVnNbYyh826uCJH6KneYe8kG', 16),
('160', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 128: Do you know that a father\'s love is like a mountain? (2)\'', '1TjDKLHpC2NXaWv9twFGUBIaIxbGZ2_7a', 160),
('161', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 129: I want to save her (1)\'', '15yD5jfY1Q-FrtEdjy4DMk5PQi8AUalCG', 161),
('162', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 129: I want to save her (2)\'', '1JedPkqIoye7hK2bj2Fioid2vBZ4IKniy', 162),
('163', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 130: Why did you go to my junior brother?\'', '1wGaEEogOL-IXcUiWNm-EJY3bEiNyz3Wp', 163),
('164', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 131: Why are you unwilling to look at me! (1)\'', '1MAs9g4_L8QEpX6PViEbQ7jEhjiPKAe8Q', 164),
('165', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 131: Why are you unwilling to look at me! (2)\'', '15PW86cS4Y2SZ0JibLjOdEkApVqL46knV', 165),
('166', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 132: Who is in control? (1)\'', '1Z8EgESMs6BuhNUggTJnxxCWWjs_RJt-p', 166),
('167', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 132: Who is in control? (2)\'', '1kSyzPPfhUOkgr814xJdSNfsup0IE6lc-', 167),
('168', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 133: Liu Mengning? How can my home be so fragrant!\'', '1tcVtTZoLZdUb8Sj21wQhIuKqUT07x_ut', 168),
('169', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 134: Tomorrow, I will completely wash away the shame!\'', '1qyOYad41ob3PHI8aQtcREHlswlKkfQ_r', 169),
('17', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 18: Because I Love You\'', '1wicHB80lUS37DLJ5AkCUdv6fcKtdatXU', 17),
('170', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 135: Do you just want to be my friend?\'', '1q0yC_pMtRA8i9Y02gpom56OUsfdQo-XU', 170),
('171', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 136: In front of my move, you will have to fall down obedientl.\'', '1IAgaxEOHTl3mfxz4fOwjCTx9xWETKSVs', 171),
('172', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 137: I want you to always remember this taste.\'', '1V7wEsz8k59Zdx8RmJN36knjPZus-FKvv', 172),
('173', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 138: I will definitely get the perfect evaluation!\'', '1-y5jjlqnb0rWoguUzSwi3znOa-9wrbeu', 173),
('174', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 139: This is awesome!\'', '1SMUasFyNKbevYtM86vx9Ee-8tpc9nq4o', 174),
('175', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 140: Mingyuan, my Mingyuan...\'', '1GljwinawIZPRzB4o3cxUnEk4A3nsVOX_', 175),
('176', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 141: Look at me, you can\'t even say half a word with this litt.\'', '1rgaUWSVTFeRuZzgsOIJ5O7AzDL3CB18b', 176),
('177', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 141: Look at me, you can\'t even say half a word with this litt.\'', '1tKXvpU4O2uxMt8z2UETrv1tslmLRiUuP', 177),
('178', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 142: Su Mingyuan revealing his temper?\'', '1Ef3oZSoUIEPes8PXUSqXej7pYEw90Gzk', 178),
('179', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 143: Is this the aura of cold queen? (1)\'', '1fR8cYwPWYJSEw82y9ie7RukQOp_xw_S-', 179),
('18', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 19: Won\'t You Feel Sorry For Him?\'', '1_LYj0KISkreOp0E2sH8ySwnmakBay5Ho', 18),
('180', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 143: Is this the aura of cold queen? (2)\'', '1SN1cYoTcJyGb-e-BJOHyTqHF5UPAOrue', 180),
('181', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 144: Who is she looking at and Who is she smiling at?\'', '1TelVeyrceGBv-RRT0Ozf_7SQgxA5zPbZ', 181),
('182', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 145: Who is that sweet smell coming from? (1)\'', '1rsGpjsLdJaEGk3_X1y-JA2ytZbsUQry2', 182),
('183', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 146: I will be the one that Mengning chose!\'', '1PCcQaryl7uCbBLKIIgmL_b-2SXLdr3d-', 183),
('184', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 147: Will you be my hero? (1)\'', '1FOKBp7RVlpqYMyVlxUZkDS__lSlgtzEO', 184),
('185', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 147: Will you be my hero? (2)\'', '1Ja-q2T1w7c1mrEgDlq3fCix8-snwamDI', 185),
('186', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 148: Liu Mengning, you are so vicious! (1)\'', '153uIUO6HZ9RTLg6VWsMoOMxLwT6WKQXz', 186),
('187', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 148: Liu Mengning, you are so vicious! (2)\'', '1MfrTTuI0Hn2OEWss5jTDlQQ85HS32eH_', 187),
('188', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 148: Liu Mengning, you are so vicious! (3)\'', '1biFZWSd6gUMI5RZSloFPkiQmXMDShC8P', 188),
('189', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 149: My big Hero, the cherry scent on your body really smells .\'', '1kwv1LkHYVZhjK2wT5G8Yq8xsvu54Fbez', 189),
('19', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 20: What An Exciting Scene That Would Be!\'', '1KDgift6bHd5CVOdg8rr8zPuFZJGglQhx', 19),
('190', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 149: My big Hero, the cherry scent on your body really smells .\'', '1ycXLNVyRow_BnkV8r7tZtsHCxDUJ8YS1', 190),
('191', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 150: She is the only person in his eyes (1)\'', '132TBbfHMM-5U_ervUs-Bq_Z5PMNHcseL', 191),
('192', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 150: She is the only person in his eyes (2)\'', '1WA0gFDCOlsXWO3sXctHzTplaPTAEKTld', 192),
('193', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 151: So, he took the initiative to kiss the princess (1)\'', '10zQZTAdVWiqH1hvUszLXMvsO6lKdSUqP', 193),
('194', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 151: So, he took the initiative to kiss the princess (2)\'', '1AO7-3cdnQh6r2x385W63y1pq-2MTwmjq', 194),
('195', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 152: Am I not a trespasser? (1)\'', '1c0_5IsXXEnw4m95IS3cY3BuCh6hf_6MI', 195),
('196', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 152: Am I not a trespasser? (2)\'', '1sCxGZR0VzwRzz62r7HVL16spLeBJyeYx', 196),
('197', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 153: Shameless (1)\'', '1sIAc4xuhkXsaMsIZoGsF0S4rEupQKs0_', 197),
('198', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 153: Shameless (2)\'', '1wZEQ5SRZsRW68O5Cji4gXYJUPRDqYVXp', 198),
('199', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 154: You were able to entice me? (1)\'', '19winW7N80--ATNGSpQ_S_HJIoHyFj9As', 199),
('2', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 3: My Bed Is Very Big And Soft\'', '1MifIh22oTbAwkcZ0U2NEFM6-A-OC-6Wt', 2),
('20', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 21: He Is So Kind, But Had To Act So Evil And Arrogant ......\'', '1I_GrGLmHAsesKsT3yodkyv1K1JkU4XK-', 20),
('200', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 154: You were able to entice me? (2)\'', '1MM6JMRoOYBTUhLDyxm3Uw7YjMq5u9GgF', 200),
('201', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 155: Can\'t my sister be with him for the rest of my life? (1)\'', '1hvM9pb8wMxOVqLPC2sM0I8a44aWq3eiA', 201),
('202', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 155: Can\'t my sister be with him for the rest of my life? (2)\'', '1xHND1p6pj-r4EyJExM0dgz9AmSzIyXgd', 202),
('203', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 156: Good People Should Be Pointed by Guns? (1)\'', '1ykt3B2zj-6Yc_IIHX56Kdl5UyOSm35sD', 203),
('21', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 22: Cherish Your Time As A Dog, Xiao Ran!\'', '1sr9BQkTP-caMWPG7iK9tYG0jXyh6v9QM', 21),
('22', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 22: New Skill\'', '1AFOLNGtzZZz85bVSHpGmAaRKbgu_phiF', 22),
('23', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 23: You are the dog, Su Mingyuan\'', '1t13wr5eIQ4GIBDuu4urNnWM-ZVQOg1pA', 23),
('24', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 24: After You Marry Into My House, Let\'s See What I Do...\'', '1GhiPay_mcqbNhOwurWBJrQeRh2issHsO', 24),
('25', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 25: What A Perfect Performance!\'', '1kNjafu4fIAIMfePMtC6xKtIM1TDDAbCm', 25),
('26', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 26: My Mental State Collapsed!\'', '1zKyIbRGWffo_taK-rmtTg9Fij7h2U_0z', 26),
('27', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 27: He Was About To Give Up\'', '1EekIokzxOT3dTMvUYYtAiIhfbMlYIV0u', 27),
('28', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 28: I Did It For You...\'', '1Tb58gYyno8Cv5loilmDvo7GZmo7MIuvQ', 28),
('29', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 29: She Was Not Like This...\'', '1-PhMAjhx1Qymx8ShvXfZ_5LpEhWWjTMD', 29),
('2b474f4c-4d18-4c27-87cd-19ed04d3165b', 'a77d3931-d347-410d-88af-71cb223b8df2', 'Chương 3: My Bed Is Very Big And Soft\'', '1cxmZ9EL2fREH8h_cehvz2nyvEQeSbOKb', 2),
('2b5561a3-764b-4fcc-a382-ff74432af86a', '89969950-e767-4e33-9e0f-d25b6d17a34f', 'Chương 1: hiem ', '1VGKypA7BU3iffZ1isjOqklwUMWn__RcU', 1),
('2e6d1623-8465-41d6-bc09-1e59d8198424', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8', 'Chương 2: zx ', '1Zv9kd7yWtD2ygzRG582j7xXWNThh2OJ3', 2),
('2f945476-52da-4abc-b0e9-b30bf842a351', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 2: Long ma Bắc Giang ra tay', '1lh7E3XSHBl2K8QiJscAzDQ6igVLJR5o4', 2),
('3', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 4: Something Is Wrong With This Female Protagonist!\'', '1h0catYazGPmuOKIab_oItETrqbbHf2pH', 3),
('30', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 30: She Is Indeed My Good Sister\'', '1Oe0Vya_t9Ly5ndV--arX41qTVZFqppSc', 30),
('31', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 31: How Can I Doubt Ruoruo!\'', '1OJtTs8SfEYlXrS3GtwtCnjbtL3avM53Y', 31),
('32', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 32: I Can\'t Let Those Bad Women Succeed\'', '1jRoNuf2rHvgi6u39gJAdfM7IqIuoycWv', 32),
('33', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 33: Aren\'t you disappointed that the person you were expecting.\'', '1I3DwZp_lf1u7OPZK6ucZfALqU979-0Rm', 33),
('34', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 34: Xia Xueqi, you also have days like this!\'', '1gKIuTPTMVJwtmnydbp8exI2iRVfQvm8f', 34),
('35', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 35: It Seems I Made Things. Worse?\'', '1tf1f95fl1T3kfC4I91JLxgWWT0Eif4by', 35),
('36', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 36: It was just a slip of my hand...\'', '1wExfp0FzURPUofuGlcjDyPw_NUfR-tCU', 36),
('37', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 37: Xia Xueqi, the person who took your first kiss was me!\'', '1_crSkwlguBe_sBHTlnSX0KX3NFLTiQEr', 37),
('38', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 38: I found the breakthrough!\'', '1q2bpC99vfW01COfwqGuI854oVWJjf6sp', 38),
('39', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 39: Give you a pleasant surprise!\'', '1Bkq7trgGWUiLqaHbYEAXWIxpwKthYx2r', 39),
('39d3de91-2aaa-4ce2-958c-bf59e67ddde5', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 1: Sự xuất hiện của 4 tỷ tên cướp', '15c415Vl4HC7lU9zSvnwqHk8d5oJSDcdi', 1),
('3f1b3d40-9799-4e58-95f1-6084ef28096e', '2f3d11b4-cfd8-48bc-948f-d930af062ac0', 'Chương 2: Kết thúc ', '1qrnxquYCveEuhtj8Qc-f1ibAN5XtmI98', 2),
('4', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 5: I\'m a Villain But The Female Protagonist Kisses Me?\'', '1gFYJcb4c737pZ1AmJHS8gmtDz5JSItYe', 4),
('40', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 40: Su Xuelan, can you do it?\'', '17Oae6Kd6sqr_hIsjRFWqbdegHz-Fn4IE', 40),
('41', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 41: Ruoruo, you act so well!\'', '1wcpw9jDw5kaq4NM09shnLVKeNTlOvuMx', 41),
('42', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 42: Come and see me!\'', '12BFaWj2q_UWSg89z8Svh6WkfqBx_FL1I', 42),
('43', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 43: I have a task for you in\'', '1wpD1LlIN8O92OjrKYRe-imgwJtLf0mC4', 43),
('44', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 44: How about you call him while I kiss your lips\'', '1dU7Zp_z65BUKbolfLOcOeWGAgzTxNdZX', 44),
('45', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 45: Xiao Ran: Everything is already in my hands!\'', '13sN-OSIwo3rE2y9h5xNvPhPhxhCB75Oh', 45),
('46', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 46: Su Mingyuan? He\'s a joke!\'', '1pOC9k2duGIexbk5Vw2efTKrf8fkq_11U', 46),
('47', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 47: The upcoming third show!\'', '1HISBZAT81hRhSPO3346y8QyrUWPIIZNx', 47),
('48', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 48: I will have great success!\'', '1FFIObl32nI75tQvuhrFAEflGHbUV-67G', 48),
('49', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 49: The general is out\'', '1fx2F973Ie5JvPyKOQOu4hsxvBtj241lm', 49),
('5', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 6: Get down on your knees and Admit Your Mistakes To Me!\'', '1_2rkuuXDSAq-Lh71_EXXRGEzLGQ2OPUO', 5),
('50', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 50: It is my turn to perform\'', '1fRrkj98vPxKQPLLZGOllT3-Vnvw94hgj', 50),
('51', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 51: A perfect evaluation, isn\'t it about to lie firmly in the .\'', '16CvsdBXvLvj4FCz0pfQHT_JvkCBIE3aN', 51),
('52', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 52: I want you to accompany me for the night!\'', '1YnRZsOXi6t2HEIaBLqGfS4762CtjMWG2', 52),
('53', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 53: Xiao Ran: My chance is here!\'', '170f1l_3r66N_CgzogYUUE22nVMAQd4aF', 53),
('54', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 54: It\'s just that I\'m a little, a little ...... too happy\'', '1vM5_G0vnJ5mTvO4YIPdsu7IKcLLppJ8K', 54),
('55', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 55: No, I can turn the tables! He couldn\'t win anymore...\'', '1YelxU0sekz2RJAfjEhZ_Q_G-m7Uf-dW6', 55),
('56', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 56: I want you to give yourself a slap in the face!\'', '1d1Jybe9zeWk_jgaPGqDC-ES-1aVMmVoX', 56),
('57', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 57: Son, I\'ll create an opportunity for you!\'', '1Vq_Imo5MqA52W0B5XpsmPfV4F9Ig4-zw', 57),
('58', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 58: System, you wouldn\'t want to mess with me, right?\'', '1GbdQ7hlAShw72KQYcaVnPtC0V9UGtlVx', 58),
('59', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 59: Sister, if you are still waiting for me at home...\'', '1EoxGKY2WAiEE42L7owo2XmfIZeZWbIlG', 59),
('6', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 7: What Went Wrong?\'', '10bKPgyluUY3LLZC_yKOIwkty3DVscqOG', 6),
('60', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 60: Mingyuan, you like her?\'', '1DCDxo9y_-i5qU1l4nPU_hcPZTbEp8lO9', 60),
('61', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 61: I, Xia Xueqi, am confident in winning the first place in h.\'', '1ZdTfzqeiJsbYNcgTTzf9NUYYq1FatMM6', 61),
('62', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 62: My good sister, did you call me?\'', '1wA9MRo8as7zJZjpYLlv9VR9iA3-JblMH', 62),
('63', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 63: Ruoruo, is really awesome!\'', '1COMSkCHhY4GVey_aoJiMEdjkiHR0kGlg', 63),
('64', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 64: Su Mingyuan is once again full of confidence\'', '1ReZW1lr_e9U_WSZ5U-UDZZI0eBw8scTg', 64),
('65', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 65: The white-robed knight, Su Mingyuan, came out again today!\'', '1mrpjL9mTZYey6_GpiQ_USmjh14uRCazD', 65),
('66', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 66: It is precisely the same time [1]\'', '1RjmAtE4x7iwdxDmHlqRIUqnr2Rjc26LY', 66),
('67', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 66: It is precisely the same time [2]\'', '13ZrpTI-Db65gg6DQnWxxackVNkb4fyL5', 67),
('68', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 67: This..is it allowed?\'', '1BkjNJAgmCUC2v0RP2TL-RVmmXnMewhbr', 68),
('69', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 68: Xiao Ran was perplexed. Su Xuelan continued her interventi.\'', '1hVvzGyf6kNN0CgECb7jsOFs2cSuFAjsC', 69),
('7', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 8: He Will Not Disappoint Me\'', '1n8V9ULeQH380mJPSLNm2w2cuDzTMBjy0', 7),
('70', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 68: Xiao Ran was perplexed. Su Xuelan continued her interventi.\'', '1Xz0rXMOzk8PYneUPfk5Bks5vb50ogNkK', 70),
('71', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 69: He wore a mask. He was aggrieved.\'', '1CxdvdJIViWD_jDh8EiBeKKTF36sYdDDq', 71),
('72', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 70: This time, he took the initiative.\'', '1cg2GwG3vWJnMD5Qy6cFH5F5bXMIBt4TY', 72),
('73', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 71: 70% is mine, and 30% is yours.\'', '1sF85WMaNgxl04GvItuf7Qm7tJIwKN6om', 73),
('74', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 72: I can only find you to vent my anger.\'', '1hgPQUhGoWNZSm3uRz6EfOzM1LtE3UmAf', 74),
('75', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 73: Let Xiao Ran take the initiative to stretch his face over .\'', '1NDhZFZNqMC1dL6C-LqAeyuHEtOxzL0Wf', 75),
('76', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 74: Why...why let me watch this scene with my own eyes!\'', '1SzHfatndEnO_KkAFI7DGuA-d9-8zqE3l', 76),
('77', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 75: Su Xuelan is feeling bitter.\'', '19xzRRtdw0z1xiGS4MhLhVhgvHtYxCc4P', 77),
('78', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 76: I was teased by a bad woman and even my heart pounded viol.\'', '1LqRd7wL77ztjtAhxZUfpoI48xurGY5Mo', 78),
('79', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 77: The Person Leaning In My Arms Is. You\'', '1J-EW-0mPxE4Zc9AzglQHmCnzf6IZXGAX', 79),
('8', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 9: Everything is a Mess\'', '1yXeJE3rqcozdlilljxgyLQHbaulBXqh1', 8),
('80', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 78: Mingyuan, you seem to be different from that night?\'', '1-cKVn7SmVF9NGkhw2jY5tOerdpDbcRzx', 80),
('81', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 79: Shouldn\'t you have been. acting before?\'', '183tqMYE6cVQ05WZqIvAmkNYEzsyBynlr', 81),
('82', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 80: Finished? Was it guessed? Xia Xueqi, now you are the prey!.\'', '1HkwDGFqwKV_GU7tl9n6NV6UNCS2EoyCG', 82),
('83', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 80: Finished? Was it guessed? Xia Xueqi, now you are the prey!.\'', '1Jlu5140wHZjW1mnglI0YMOD1LThICD8G', 83),
('83f05502-9b0b-4a91-b3f5-570dd4772b80', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8', 'Chương 1: NGUYEN TRAN HOANG LONG ', '1uxB7v3bNXB9LHX3OzS6GZYjg5CZyM-Li', 1),
('84', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 81: Xia Xueqi throws herself in his arms? The accident happene.\'', '1spTBCGeE65dVUfhBAquCB1So_GcW_F5P', 84),
('85', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 82: I, Su Mingyuan, am indeed the final winner!\'', '14MVDi5x9tPb45hqbNK2ZqMOkzIMvLoac', 85),
('86', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 83: Xuelan, don\'t be angry, you have to take care of the overa.\'', '1wyp1SWj8Y-PtGQqIQaG-PoylMkmjw0dn', 86),
('87', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 84: I changed from an actor to a director?\'', '1T45uJ2O8zHW_v9FlufsrdnYWONZlF7Uu', 87),
('877aff06-3415-4167-849b-e2f400b52982', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 4: Long ma Bắc Giang chiến thắng', '1bx4fTQoTJPyvel3FC_ny7nAjn1JVE3wB', 4),
('88', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 85: Does Xiao Ruoruo have that charm?\'', '1MCA3cAI0CsuuzaHeWuWu7EfFaDFp7J_y', 88),
('89', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 86: Murong Hongxue wants to curse\'', '1O7ICX-OEfHDUmf8B46_QC1MVvhILFxsX', 89),
('9', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 10: The Diary, The Origin Of Everything\'', '1bBYP9ayZtHJgwnXZT9OmWKyl0HSO69Oz', 9),
('90', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 87: If you want, I don\'t mind. (1)\'', '1-IR0RkcmcVzhUtyvTzRb10vn2PDbYiuk', 90),
('91', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 87: If you want, I don\'t mind. (2)\'', '1VperQut35Jn9m8ji5BReuHgAEMOXPRRu', 91),
('92', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 88: Patience (1)\'', '1PnjPDiVMH8eaoBivq114L4m0wOMYLGwE', 92),
('93', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 88: Patience (2)\'', '1rexYnK5o2xTxYFt1E2CdE56WX1DE1fo-', 93),
('94', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 89: If I get a failing evaluation again, I, Su Mingyuan, will..\'', '1Qq_7uJ1BiGpRT0R0Dv8b7eag7tP3EZ_U', 94),
('95', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 89: If I get a failing evaluation again, I, Su Mingyuan, will..\'', '1rmg_0OI1L4nwQ6eMcGDCgt0daQC9kDH4', 95),
('96', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 90: Woohoo, I, Su Mingyuan, also encountered a day when I got .\'', '1vcPE0qMThfAQl2lefrb2rlWApDMAppBD', 96),
('97', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 90: Woohoo, I, Su Mingyuan, also encountered a day when I got .\'', '1vBHTJvpCTNC42WPxeX__FtVpB1vF1oZu', 97),
('98', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 91: The Rebellious Son! The Rebellious Son! (1)\'', '18gK8ag6YvywE2AzYkoYFlBL4G-QaL842', 98),
('99', 'da13d5bf-51e2-4598-9d22-31ff3027e33d', 'Chương 91: The Rebellious Son! The Rebellious Son! (2)\'', '11BY3jB-nQx2IfbpXAzAin3C42jER5HYe', 99),
('ac8e3e3b-5482-4c20-b28c-cdda4c2015c3', '66d6816c-180a-409e-8a0a-05f0502ddffe', 'Chương 1: ngày mới ', '1KMvJsb6dw_XO7_GrcYnJB5AftRvkuvFB', 1),
('bf57804c-08c3-4eb7-86d1-6faaf3ddfed0', 'a77d3931-d347-410d-88af-71cb223b8df2', 'Chương 2: The First Performance Has Begun\'', '11FVSTLnlr91QE1BTdQTts1Rxpd7Xx7cl', 1),
('d929f1e6-b376-4763-a893-0c53cff84933', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 3: Long ma Bắc Giang gặp nguy hiểm', '1mooeH5wwxdOAZLx7rRhojFUcoUKgiFmD', 3),
('f10a7786-aeb0-4347-956c-971cc68051f5', '2f3d11b4-cfd8-48bc-948f-d930af062ac0', 'Chương 1: Sự bắt đầu cũng như kết thúc ', '16Al7UQjemvdz6ImKme0u-Ko_ZEBTIzRQ', 1),
('fbf7f6b8-647f-45da-93b1-13e09f5700a2', 'a27e55c3-9468-4860-baa5-85cf42d5f7fe', 'Chương 5: Kết thúc', '1QXETOEdBPkAkJkMb-OuVELUMj2i519AX', 5);

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
('0gzHL0PKw5P6L-_k9qG9LZ7W_9CHie75', 1701936185, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('4VkOLRjz202uYvCNynWJGqpe72P_auNk', 1701935704, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('80pV0ad7xhon3zmUvoBr-MiiDTYg-atr', 1701839995, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"109632126491025897743\"},\"user\":{\"id\":\"109632126491025897743\",\"username\":\"109632126491025897743\"}}'),
('Guf02UoIaa2_dF8r2p6wvyuSXZg0pqVi', 1701834511, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"110152635823665920356\"},\"user\":{\"id\":\"110152635823665920356\",\"username\":\"110152635823665920356\"}}'),
('Htk7aslQZaMhIuLsSJ4Ufb1b2MnDCNXW', 1701860914, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('MoKbECdOg6krP8_rJrUyTmJVqp4ppH9W', 1701775662, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('TKQgNFZfzjWCx48DznJtURWkwTcM-DR9', 1701838614, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('WbbL96N76g298rf6eZAewf61Z6JTTR7o', 1701935945, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"109632126491025897743\"},\"user\":{\"id\":\"109632126491025897743\",\"username\":\"109632126491025897743\"}}'),
('XWsaY8JbgHXRdu3XlFZYwkdnT9J513NY', 1701836540, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('blQ-u57ixYn1iWsVBaS77xZ7oIuDFZch', 1701859036, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"8a7db9fa-a51f-4e3d-88a7-cd960588aa59\",\"username\":\"hiem\",\"role\":0}}'),
('k648GuJDP94-B-k1C0DkwdGIEKjR3eUO', 1701935292, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('m93DU841T2hx7keWIevS-0kL4t8nvm69', 1701774379, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('nriwwvjLNsa2K4kPA42yyBEPQ3iwHxL5', 1701859923, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('rjU9SHvQXc9HomNXszW_cSuk8I8ueSag', 1701775688, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"109632126491025897743\"},\"user\":{\"id\":\"109632126491025897743\",\"username\":\"109632126491025897743\"}}'),
('uTmqjJOZN23EiyxEid8y4APfKSUtVe_-', 1701880940, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `anh` varchar(255) NOT NULL,
  `id_truyen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `anh`, `id_truyen`) VALUES
(1, 'https://drive.google.com/uc?export=view&id=19uMWiteHZ0GH2z2TSgKVjBraPXEwj3vb', '2d48dea0-e550-473c-8ca5-cb86a15f2dc8'),
(2, 'https://images3.alphacoders.com/133/thumbbig-1334920.webp', 'da13d5bf-51e2-4598-9d22-31ff3027e33d'),
(3, 'https://images3.alphacoders.com/133/thumbbig-1334920.webp', 'f7363ce1-1a26-4338-b9e6-99c5c9988ebb'),
(4, 'https://images3.alphacoders.com/133/thumbbig-1334920.webp', 'a77d3931-d347-410d-88af-71cb223b8df2'),
(5, 'https://images3.alphacoders.com/133/thumbbig-1334920.webp', 'da13d5bf-51e2-4598-9d22-31ff3027e33d');

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
('100489975828441695411', '100489975828441695411', 'Dragonccm'),
('109632126491025897743', '109632126491025897743', 'Admin Quyền Năng'),
('110152635823665920356', '110152635823665920356', 'bá'),
('113263126602180653712', '113263126602180653712', 'Bingchiling'),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan_dangky`
--

CREATE TABLE `taikhoan_dangky` (
  `ten_tai_khoan` varchar(100) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `thoi_gian_tao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `taikhoan_dangky`
--

INSERT INTO `taikhoan_dangky` (`ten_tai_khoan`, `mat_khau`, `email`, `thoi_gian_tao`) VALUES
('d', '737f9acd778182b34d75ab3dc03c1f6dae3fd1f3bb68b0d72c9db2101dc6f21b37836239417be21b73f5b02750dc6aa4166a', '1@g.co', '2023-11-30 06:52:22'),
('dx', '737f9acd778182b34d75ab3dc03c1f6dae3fd1f3bb68b0d72c9db2101dc6f21b37836239417be21b73f5b02750dc6aa4166aced576bc8ba486f83aaff752d7cd', '1@g.co', '2023-11-30 06:56:24');

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
('100489975828441695411', '100489975828441695411', 'nguyenngoclong5511@gmail.com', NULL, 'google'),
('109632126491025897743', '109632126491025897743', 'hungthinhh2003@gmail.com', NULL, 'google'),
('110152635823665920356', '110152635823665920356', 'chandoralong@gmail.com', NULL, 'google'),
('113263126602180653712', '113263126602180653712', 'binhminh19112003@gmail.com', NULL, 'google'),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem', '1@g.co', '123456', 'normal'),
('bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'dx', '1@g.co', '123456', 'normal');

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
-- Table structure for table `thongtin_nguoidung`
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
-- Dumping data for table `thongtin_nguoidung`
--

INSERT INTO `thongtin_nguoidung` (`id`, `id_tai_khoan`, `ten_hien_thi`, `anh_dai_dien`, `gioi_tinh`, `role`, `last_role`) VALUES
('100489975828441695411', '100489975828441695411', 'Ngoc Long', 'https://lh3.googleusercontent.com/a/ACg8ocIIb0HY0aqShFhxx-BrcDuB_9iTKfjdudBqsOfCuLCbs18=s96-c', 1, 100, 0),
('109632126491025897743', '109632126491025897743', 'Hưng Thịnh Nguyễn', 'https://drive.google.com/uc?export=view&id=1gvL4vW0GolMHl8V_ekxUwgiMyoaDKltE', 1, 100, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 100, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://drive.google.com/uc?export=view&id=1OggIQ4foMqR8sAWaKsV35UbZy7B0aHHU', 1, 0, 0),
('8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'hiem', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0, 0),
('bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'bb2a3ae5-54d6-4a56-9c6b-67a020d5d140', 'dx', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 0, 0);

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
  `anh_dai_dien` varchar(500) NOT NULL DEFAULT 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg',
  `luot_xem` int(11) NOT NULL,
  `luot_thich` int(11) NOT NULL,
  `ngay_cap_nhat` date NOT NULL,
  `trang_thai` varchar(18) DEFAULT NULL,
  `ban` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `truyen`
--

INSERT INTO `truyen` (`id`, `id_tac_gia`, `ten_truyen`, `so_luong_chuong`, `tom_tat_noi_dung`, `anh_dai_dien`, `luot_xem`, `luot_thich`, `ngay_cap_nhat`, `trang_thai`, `ban`) VALUES
('2d48dea0-e550-473c-8ca5-cb86a15f2dc8', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'zxz', 2, 'zx', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('2f3d11b4-cfd8-48bc-948f-d930af062ac0', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'sa', 2, 'sda', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('66d6816c-180a-409e-8a0a-05f0502ddffe', '100489975828441695411', 'ngày dài', 1, 'NaN', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 2, '2023-11-29', 'Đang ra', 0),
('89969950-e767-4e33-9e0f-d25b6d17a34f', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'test', 1, 'hiem', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-29', 'Đang ra', 0),
('a27e55c3-9468-4860-baa5-85cf42d5f7fe', '113263126602180653712', 'Long ma Bắc Giang và 4 tỷ tên cướp', 5, 'Truyện là cuộc đối đầu đầy gây cấn giữa thế lực bất diệt Long ma Bắc Giang aka trai đẹp Phú Quốc với 4 tỷ tên cướp aka creeps tuy biết đây là cuộc chiến vô cùng không cân sức nhưng trai đẹp Phú Quốc kết liểu 4 tỷ con creeps thế nào mới đáng nói, đọc để quạt anh Long ma Bắc Giang.', 'https://drive.google.com/uc?export=view&id=1gNcu0TAzq7Lf2e6V2xwNGt6ylrbYnGcc', 0, 0, '2023-11-29', 'Đang ra', 0),
('a77d3931-d347-410d-88af-71cb223b8df2', '113263126602180653712', 'Dế mèn phiêu lưu kí', 2, 'Truyện là chuyến hành trình trải qua vô vàn cuộc phiêu lưu của chú dế mèn từ xứ sở thần tiên choáng ngợp ngay lần đầu tiên nhìn thấy tới đại hải trình đầy thách thức. Qua nhưng cuộc hành trình đó cũng là quá trình thay đổi của chú dế mèn của chúng ta từ một kẻ kiêu ngạo, tự mãn về bản thân đã không ngừng học hỏi và kết vô số người bạn. Để thấy rõ hơn những cuộc hành trình và quá trình ấy, tại sao không đọc và đám chìm và chiếc truyện này.', 'https://drive.google.com/uc?export=view&id=14ABgUuYPuf0CN-aUeGfjOUaFM4luydB_', 0, 2, '2023-11-28', 'Đang ra', 0),
('da13d5bf-51e2-4598-9d22-31ff3027e33d', '100489975828441695411', 'Big Order', 1, 'Vì đây là một tập phim hại não nên sẽ không có tóm tắt nội dung... hãy dùng não, mặc dù sau khi dùng cũng chả hiểu gì cả. Bản TV series được phát hành vào tháng 4/2016.', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 1000, 0, '2023-11-28', 'Đang ra', 0),
('f7363ce1-1a26-4338-b9e6-99c5c9988ebb', '110152635823665920356', 'Nodejs', 1, 'rất kinh dị', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 3, 0, '2023-11-28', 'Hoàn thành', 0);

-- --------------------------------------------------------

--
-- Table structure for table `truyen_yeu_thich`
--

CREATE TABLE `truyen_yeu_thich` (
  `id` varchar(50) NOT NULL,
  `id_nguoi_dung` varchar(50) NOT NULL,
  `id_truyen` varchar(50) NOT NULL,
  `chuong_hien_tai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `truyen_yeu_thich`
--

INSERT INTO `truyen_yeu_thich` (`id`, `id_nguoi_dung`, `id_truyen`, `chuong_hien_tai`) VALUES
('3c893d02-058f-4d37-b5a3-15fb583a942c', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', 'a77d3931-d347-410d-88af-71cb223b8df2', 1),
('7059a773-0559-443a-b34a-9ef213af8075', '8a7db9fa-a51f-4e3d-88a7-cd960588aa59', '66d6816c-180a-409e-8a0a-05f0502ddffe', 1),
('c7cf504e-2a67-42dc-8fe6-0c1a650e00ae', '110152635823665920356', '66d6816c-180a-409e-8a0a-05f0502ddffe', 1),
('f03233bf-bdc1-4a9c-b93e-25d35effc589', '110152635823665920356', 'a77d3931-d347-410d-88af-71cb223b8df2', 1);

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
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_truyen_slider` (`id_truyen`);

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
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chuong`
--
ALTER TABLE `chuong`
  ADD CONSTRAINT `chuong_ibfk_1` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

--
-- Constraints for table `slider`
--
ALTER TABLE `slider`
  ADD CONSTRAINT `fk_truyen_slider` FOREIGN KEY (`id_truyen`) REFERENCES `truyen` (`id`);

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
