-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 05, 2023 lúc 01:46 PM
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
('0', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 1: My Acting Skills Are Very Professional', '1dIaDiwxuTm0Vtoj6D-IPuAO7wOgQyqCH', 1),
('0527bd2a-0f79-48fb-8746-bdaa1b892467', 'fee10c45-3421-480c-8867-85ff7a0735c2', 'Chương 1 chương 1 nè ', '1s5regI9__xhifbxAeFVr4GS1TTOWmeXe', 1),
('05adac96-3fed-42a4-9508-fb1d4149e3e6', '92578224-a231-4395-80fe-6d0d425c771d', 'Chương 1: Cô gái đáng yêu thứ hai trong lớp ', '10QeJSEhjETexHqA1-AXsnNrZfHt5XmY7', 1),
('0dd29679-9b61-43d2-b096-65597535a300', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'Chương 5: Xung đột ', '1giBqU9AODZLesWIAJ5NhWQ9NcBcS-C2I', 5),
('1', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 2: The First Performance Has Begun', '156sAHcnZY7yG4X4y6lLgkX6G8h185h5b', 2),
('10', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 11: I Don\'t Want A Sister Who Is So Gentle!', '1_0RlRe3Bn-A_6hj12k68QS-1oVTvZm3x', 11),
('100', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 92: Your final evaluation is..(1)', '1gSwxqfqILsa-ezkXy7Iad3s-x4IJTHSR', 101),
('101', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 92: Your final evaluation is..(2)', '14ajkXJ_q9FgaNyUX0dLCVrRiziBcAYBi', 102),
('102', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 92: Your final evaluation is..(3)', '1Kv9rFD_Ysy3yjGHMleUrF9U8K5Kw1vPc', 103),
('103', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 93: Son, your Dad, I\'m here to comfort you!', '1gSFAtZL5iqVeSbxmfQtGYwxez3_ZaN-P', 104),
('104', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 94: Junior Brother, no one has ever treated me so well since I.', '11RiA1YNIfPLllF5Y3-FCKQyAFfwt1P1e', 105),
('105', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 95: Do you know who I wrote this poem for? (1)', '1eiKpLxPlP0MuS_oQAkZWCXvzj1OkGFn2', 106),
('106', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 95: Do you know who I wrote this poem for? (2)', '1pC_v1jZHeWctDKitzu4PvqEt2y71gbgH', 107),
('106530ef-0eef-4ada-aa82-47bd08c4c156', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 3: Lính đánh thuê Rush Nói về quá khứ - Thú nhân ', '1iAEsmKQXjcz9KNtr2wlgrZivnJvjiDPU', 3),
('107', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 96: Who made you the light that illuminates me in the dark? (1.', '1-mLkd0CzhvB_KjeGwJYfF7aPBjgLzC3r', 108),
('108', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 96: Who made you the light that illuminates me in the dark? (2.', '1Y9ozjJ58Omu__qxwUtokYQz79-KygpT4', 109),
('109', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 97: Knight, do you like me?', '12iZIEF-Kw2UjI7coA3U4s-sOaZN4pZg7', 110),
('11', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 12: Big Sister\'s Selfishness', '1_rjzuhFurILgZ44HZOmLAF6QWkiDQh87', 12),
('110', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 98: Hongxue, You Are the Star, You Are the Lotus', '18wA4Ee-r7fuGFHqfneBaXvglOxfTa8X5', 111),
('111', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 99: Xia Xueqi is always one step late (1)', '1H4VET54WeiARwgAsvWt-vbnCLjKS-kVy', 112),
('112', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 99: Xia Xueqi is always one step late (2)', '12bCRCwjkOdrwzTuw5QpLmdyyrXkFrTRG', 113),
('113', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 100: Traces and smells of Mingyuan are mine! (1)', '1vAsWGTz2iSA9FbKWBrl9mAd26j-4Umrk', 114),
('114', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 100: Traces and smells of Mingyuan are mine! (2)', '1VaTNLzaB_kZ9wBgAD19G3V7O-6jzv_Nk', 115),
('115', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 101: Son, daddy can only help you here (1)', '1Q1XK4NrocK2ZwXyAMSwsfsKV465VW6i-', 116),
('116', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 101: Son, daddy can only help you here (2)', '1RQrACWrjcewaCLK0YN901vcRa8K5SDPd', 117),
('117', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 102: Between us... who will fall in love with whom first? (1)', '1ZeqV3uyjiXQJs4G7APwyRM5X62LsDgKt', 118),
('118', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 102: Between us... who will fall in love with whom first? (2)', '1iS4dK1wVkDp-c-dsZ5S0LFrGXqfDhWjb', 119),
('119', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 103: Ruoruo, who began to become more active (1)', '11XSL6n31cvweFodonRKBqtUTQiHEXd52', 120),
('12', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 13: Ruoruo Is Not Stupid!', '1rUyhTlThV6J7vt_PsUJMY894iIunzzwf', 13),
('120', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 103: Ruoruo, who began to become more active (2)', '1Wu7nDd3SGZv7M4MDSglyncziQRPnWVu1', 121),
('121', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 104: Why is the soup she\'s drinking so delicious?', '1_qjMugzArDcryOnWT0Bp1PJj_5RWZr4A', 122),
('122', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 105: So I am the prey?', '1L3huyY4Cz_pNU0rHAE7Jf-Jn01TXkVIa', 123),
('123', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 106: Xiao Ran, Xueqi is also a name you can call? (1)', '1C0iu9-QhUaJ1H4AuEXSbmoD1tbsebpne', 124),
('124', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 106: Xiao Ran, Xueqi is also a name you can call? (2)', '1BaOaAKaYaMlIvauzvH669Z-06NFKFWHl', 125),
('125', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 107: I know that Xueqi is protecting me! (1)', '1l_dFDkYC7GKw-kfALGBPWxJt_CHAF0cP', 126),
('126', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 107: I know that Xueqi is protecting me! (2)', '1lQLq4i9RkszwLAQrPuKKkshg8tlEBPTQ', 127),
('127', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 108: Xia Xueqi and Su Mingyuan are in love, Xiao Ran is...', '12S1GoCuaS8wTtmQ1QURn_ywy4JSTWyTs', 128),
('128', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 109: Your evaluation in my heart has become higher again! (1)', '1o8yVI8uHwio8UZNAxN_dxGuyfrOxSz1R', 129),
('129', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 109: Your evaluation in my heart has become higher again! (2)', '1aQ8Y_LSyYgpA_jS3x4DjwNdTWgHsZzXE', 130),
('13', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 14: Kneel Before Me Xiao Ruoruo!', '1DXhV5slGlpMQupwWUcbkH_3rQQtuKZ57', 14),
('130', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 110: Someone stole my baby, so I went to play with them (1)', '1dJavjQrCYBW4J4LfYK3hk3GcIvznCOEe', 131),
('131', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 110: Someone stole my baby, so I went to play with them (2)', '1WVS5-bh-RhiEsrczEM_LRsxaKg3EGkpa', 132),
('132', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 111: It belongs to me, why ......(1)', '1MVxMrrvPes1H5GvIyg8TkbOeFgbRTwqa', 133),
('133', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 111: It belongs to me, why ......(2)', '1ptmlledY9DQMzdDxDH6LnQJtU1EPMatJ', 134),
('134', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 112: Xia Xueqi wait! (1)', '1A5uw5aB7k1SN47JV9cAx9SpSKo1pKOMN', 135),
('135', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 112: Xia Xueqi wait! (2)', '1Hh6C0PucNfscTCJG7OIL9KokeLi5CiR1', 136),
('136', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 112: Xia Xueqi wait! (3)', '1OWYxeWNDAOW861JJ-UH_VTmUYW4URQgy', 137),
('137', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 113: Then. What about mine?', '1mTSOfoOKgICbPPUKAcL4j44Nv0zQcg4U', 138),
('138', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 114: Digging a hole and burying myself', '1FBdXyhJ4DxNs14ubNXkCfSKw78jqxoGv', 139),
('139', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 115: You have stopped pretending and choose to show your sharp.', '1ku4eWBeM3JKf0MZfH-Nj4ZTJ4_lFpJ8I', 140),
('13f3ac1c-cb2d-418f-af98-b2fad703d8af', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278', 'Chương 3: Lính mới ', '18ZnCb72YRd-_Ys_JvQrevAsQL3eg3ICi', 3),
('14', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 15: I Am Helpless, I Can\'t Do It!', '14luHDfDp9hgIN8vtUC0SL8f-LYODb3yx', 15),
('140', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 116: I wish you and Mingyuan to become a couple (1)', '1aknPBq2W2soGOHpLzEgJidG7eT57JSQ3', 141),
('141', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 116: I wish you and Mingyuan to become a couple (2)', '146wpvuUl37ESnSsbTtoSB-cBtCOCH2zk', 142),
('142', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 117: Tonight\'s moonlight... so beautiful', '1cUm6dKQtot3MNiWqEnrtGc4iIkplOiim', 143),
('143', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 118: Different people watching the same fireworks', '1PdhKrz3nM4WELYXbT_H8SzqUK5xQgoO6', 144),
('144', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 119: He has begun to look like a villain (1)', '1ElmnuYmstQIHfwWyX4TCXH-H0QnmyNU7', 145),
('145', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 119: He has begun to look like a villain (2)', '1FJAwyBTBufo9Skhu7ABPGG7ONQTNn3Hq', 146),
('146', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 120: My knight, what if my love for you is seen by her?', '12Okjaw9SIZoRMkseMBKsW44cgdTGzbGw', 147),
('147', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 121: I have become like Su Xuelan?', '1vWuGVZx-G3QAR3-tkCp4yJe8GoNtoyxT', 148),
('148', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 122: She is your love, and became an outsider?', '1DLg-ZmhWOaW9LueDl7ucY-VHLvmNOrOL', 149),
('149', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 123: Xiao Ran is still on his way (1)', '1NdeDLf19SQ24yu2rc5hoN0VsrbC4rxhG', 150),
('15', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 16: I Actually Made A Lot Of Money!', '1XpEdbDgqGHdIWQBLHkIfHU7gm5gAwJv4', 16),
('150', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 123: Xiao Ran is still on his way (2)', '19FUm7SUzLlGqvyZjG93oc4CJgg4OgCa5', 151),
('151', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 124: You just said... no one can save her? (1)', '1nee9sb0VG-K1_3nbIZNWGs8yz7pwgRV-', 152),
('152', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 124: You just said... no one can save her? (2)', '1wYZsxbT65jEQW_6FH8OzTwImunD3N5Tu', 153),
('153', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 125: You are unfilial son! (1)', '1iGXiyyJLUxiJysHkcrYCftb2BKAJHBXG', 154),
('154', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 125: You are unfilial son! (2)', '1z9UOHyeDgHZuLYdgVwhvoD-UgpTsHt3H', 155),
('155', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 126: She was just thanking her junior brother (1)', '13CS40HJsiGS784saL1WGypsp5GcoqcqJ', 156),
('156', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 126: She was just thanking her junior brother (2)', '1rBc0WWLcMB2yATM4RQlMne471blQ4a8F', 157),
('157', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 127: I\'m not painting, I\'m just fishing (1)', '1_sqqftxD23XIexs3fuHdXFaX0lZZaaG7', 158),
('158', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 127: I\'m not painting, I\'m just fishing (2)', '1pPr5TnIZPNsmOtQ5sE7Apjorl0VKSEZw', 159),
('159', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 128: Do you know that a father\'s love is like a mountain? (1)', '1-qefceacCglFabIulkgTI2EDJbJv4hMj', 160),
('16', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 17: Ruoruo\'s Temptation', '1FM1lSIBcYVnNbYyh826uCJH6KneYe8kG', 17),
('160', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 128: Do you know that a father\'s love is like a mountain? (2)', '1TjDKLHpC2NXaWv9twFGUBIaIxbGZ2_7a', 161),
('161', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 129: I want to save her (1)', '15yD5jfY1Q-FrtEdjy4DMk5PQi8AUalCG', 162),
('162', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 129: I want to save her (2)', '1JedPkqIoye7hK2bj2Fioid2vBZ4IKniy', 163),
('163', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 130: Why did you go to my junior brother?', '1wGaEEogOL-IXcUiWNm-EJY3bEiNyz3Wp', 164),
('164', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 131: Why are you unwilling to look at me! (1)', '1MAs9g4_L8QEpX6PViEbQ7jEhjiPKAe8Q', 165),
('165', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 131: Why are you unwilling to look at me! (2)', '15PW86cS4Y2SZ0JibLjOdEkApVqL46knV', 166),
('166', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 132: Who is in control? (1)', '1Z8EgESMs6BuhNUggTJnxxCWWjs_RJt-p', 167),
('167', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 132: Who is in control? (2)', '1kSyzPPfhUOkgr814xJdSNfsup0IE6lc-', 168),
('168', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 133: Liu Mengning? How can my home be so fragrant!', '1tcVtTZoLZdUb8Sj21wQhIuKqUT07x_ut', 169),
('169', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 134: Tomorrow, I will completely wash away the shame!', '1qyOYad41ob3PHI8aQtcREHlswlKkfQ_r', 170),
('17', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 18: Because I Love You', '1wicHB80lUS37DLJ5AkCUdv6fcKtdatXU', 18),
('170', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 135: Do you just want to be my friend?', '1q0yC_pMtRA8i9Y02gpom56OUsfdQo-XU', 171),
('171', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 136: In front of my move, you will have to fall down obedientl.', '1IAgaxEOHTl3mfxz4fOwjCTx9xWETKSVs', 172),
('172', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 137: I want you to always remember this taste.', '1V7wEsz8k59Zdx8RmJN36knjPZus-FKvv', 173),
('173', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 138: I will definitely get the perfect evaluation!', '1-y5jjlqnb0rWoguUzSwi3znOa-9wrbeu', 174),
('174', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 139: This is awesome!', '1SMUasFyNKbevYtM86vx9Ee-8tpc9nq4o', 175),
('175', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 140: Mingyuan, my Mingyuan...', '1GljwinawIZPRzB4o3cxUnEk4A3nsVOX_', 176),
('176', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 141: Look at me, you can\'t even say half a word with this litt.', '1rgaUWSVTFeRuZzgsOIJ5O7AzDL3CB18b', 177),
('177', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 141: Look at me, you can\'t even say half a word with this litt.', '1tKXvpU4O2uxMt8z2UETrv1tslmLRiUuP', 178),
('178', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 142: Su Mingyuan revealing his temper?', '1Ef3oZSoUIEPes8PXUSqXej7pYEw90Gzk', 179),
('179', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 143: Is this the aura of cold queen? (1)', '1fR8cYwPWYJSEw82y9ie7RukQOp_xw_S-', 180),
('18', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 19: Won\'t You Feel Sorry For Him?', '1_LYj0KISkreOp0E2sH8ySwnmakBay5Ho', 19),
('180', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 143: Is this the aura of cold queen? (2)', '1SN1cYoTcJyGb-e-BJOHyTqHF5UPAOrue', 181),
('181', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 144: Who is she looking at and Who is she smiling at?', '1TelVeyrceGBv-RRT0Ozf_7SQgxA5zPbZ', 182),
('182', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 145: Who is that sweet smell coming from? (1)', '1rsGpjsLdJaEGk3_X1y-JA2ytZbsUQry2', 183),
('183', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 146: I will be the one that Mengning chose!', '1PCcQaryl7uCbBLKIIgmL_b-2SXLdr3d-', 184),
('184', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 147: Will you be my hero? (1)', '1FOKBp7RVlpqYMyVlxUZkDS__lSlgtzEO', 185),
('185', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 147: Will you be my hero? (2)', '1Ja-q2T1w7c1mrEgDlq3fCix8-snwamDI', 186),
('186', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 148: Liu Mengning, you are so vicious! (1)', '153uIUO6HZ9RTLg6VWsMoOMxLwT6WKQXz', 187),
('187', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 148: Liu Mengning, you are so vicious! (2)', '1MfrTTuI0Hn2OEWss5jTDlQQ85HS32eH_', 188),
('188', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 148: Liu Mengning, you are so vicious! (3)', '1biFZWSd6gUMI5RZSloFPkiQmXMDShC8P', 189),
('189', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 149: My big Hero, the cherry scent on your body really smells .', '1kwv1LkHYVZhjK2wT5G8Yq8xsvu54Fbez', 190),
('19', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 20: What An Exciting Scene That Would Be!', '1KDgift6bHd5CVOdg8rr8zPuFZJGglQhx', 20),
('190', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 149: My big Hero, the cherry scent on your body really smells .', '1ycXLNVyRow_BnkV8r7tZtsHCxDUJ8YS1', 191),
('191', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 150: She is the only person in his eyes (1)', '132TBbfHMM-5U_ervUs-Bq_Z5PMNHcseL', 192),
('192', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 150: She is the only person in his eyes (2)', '1WA0gFDCOlsXWO3sXctHzTplaPTAEKTld', 193),
('193', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 151: So, he took the initiative to kiss the princess (1)', '10zQZTAdVWiqH1hvUszLXMvsO6lKdSUqP', 194),
('194', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 151: So, he took the initiative to kiss the princess (2)', '1AO7-3cdnQh6r2x385W63y1pq-2MTwmjq', 195),
('195', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 152: Am I not a trespasser? (1)', '1c0_5IsXXEnw4m95IS3cY3BuCh6hf_6MI', 196),
('196', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 152: Am I not a trespasser? (2)', '1sCxGZR0VzwRzz62r7HVL16spLeBJyeYx', 197),
('197', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 153: Shameless (1)', '1sIAc4xuhkXsaMsIZoGsF0S4rEupQKs0_', 198),
('198', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 153: Shameless (2)', '1wZEQ5SRZsRW68O5Cji4gXYJUPRDqYVXp', 199),
('199', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 154: You were able to entice me? (1)', '19winW7N80--ATNGSpQ_S_HJIoHyFj9As', 200),
('1c1764ce-fbd4-400e-92aa-22660d29e19d', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 4: Lính đánh thuê Rush Nói về quá khứ - Vết sẹo ', '1aijMobm4QtRo84h_nrIwCrE7_XFqeFAT', 4),
('2', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 3: My Bed Is Very Big And Soft', '1MifIh22oTbAwkcZ0U2NEFM6-A-OC-6Wt', 3),
('20', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 21: He Is So Kind, But Had To Act So Evil And Arrogant ......', '1I_GrGLmHAsesKsT3yodkyv1K1JkU4XK-', 21),
('200', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 154: You were able to entice me? (2)', '1MM6JMRoOYBTUhLDyxm3Uw7YjMq5u9GgF', 201),
('201', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 155: Can\'t my sister be with him for the rest of my life? (1)', '1hvM9pb8wMxOVqLPC2sM0I8a44aWq3eiA', 202),
('202', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 155: Can\'t my sister be with him for the rest of my life? (2)', '1xHND1p6pj-r4EyJExM0dgz9AmSzIyXgd', 203),
('203', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 156: Good People Should Be Pointed by Guns? (1)', '1ykt3B2zj-6Yc_IIHX56Kdl5UyOSm35sD', 204),
('21', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 22: Cherish Your Time As A Dog, Xiao Ran!', '1sr9BQkTP-caMWPG7iK9tYG0jXyh6v9QM', 22),
('22', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 22: New Skill', '1AFOLNGtzZZz85bVSHpGmAaRKbgu_phiF', 23),
('22fc9a93-9c42-4a04-a392-19c0f1f82953', 'e3602872-9d06-4821-8a70-d40917e59e5a', 'Chương 2: Witch Life. ', '1jOUrt_dM5F3N9h7GhIwPZr3Hh0mxnC6F', 2),
('23', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 23: You are the dog, Su Mingyuan', '1t13wr5eIQ4GIBDuu4urNnWM-ZVQOg1pA', 24),
('24', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 24: After You Marry Into My House, Let\'s See What I Do...', '1GhiPay_mcqbNhOwurWBJrQeRh2issHsO', 25),
('25', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 25: What A Perfect Performance!', '1kNjafu4fIAIMfePMtC6xKtIM1TDDAbCm', 26),
('26', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 26: My Mental State Collapsed!', '1zKyIbRGWffo_taK-rmtTg9Fij7h2U_0z', 27),
('27', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 27: He Was About To Give Up', '1EekIokzxOT3dTMvUYYtAiIhfbMlYIV0u', 28),
('27ac7eb7-7fdc-4f88-9892-3b2e9335b2ff', '89679880-22b1-4cb2-b639-286e4bb17cb6', 'Chương 2: Gia nhập trường cao trung trú thuật ', '1b5IIWPvrhtUxdbHaCkVTir569YP8mPF_', 2),
('27be4641-4ce6-4e14-bb9a-ab4934ac8a76', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029', 'Chương 2: Naruto to Sasuke ', '1anDGLybV0IYEYYsgqsuxUSDhHmU3QMFD', 2),
('28', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 28: I Did It For You...', '1Tb58gYyno8Cv5loilmDvo7GZmo7MIuvQ', 29),
('29', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 29: She Was Not Like This...', '1-PhMAjhx1Qymx8ShvXfZ_5LpEhWWjTMD', 30),
('3', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 4: Something Is Wrong With This Female Protagonist!', '1h0catYazGPmuOKIab_oItETrqbbHf2pH', 4),
('30', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 30: She Is Indeed My Good Sister', '1Oe0Vya_t9Ly5ndV--arX41qTVZFqppSc', 31),
('3090e27a-f321-45d0-990c-409c614eb7c6', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029', 'Chương 1: Nhân trụ lực ', '1xAQurf722MFhq_wBcqAdV4Q2cBJdHW6X', 1),
('30fcd252-3a4f-40e4-afdb-a5ac999d1e3c', 'f0b49264-445d-4adf-8946-57a168b8bb72', 'Chương 1: Tiếng hát câm lặng ', '1rWQFmRkv2GNNZvuLLrNK53qmLsXwMhhQ', 1),
('31', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 31: How Can I Doubt Ruoruo!', '1OJtTs8SfEYlXrS3GtwtCnjbtL3avM53Y', 32),
('32', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 32: I Can\'t Let Those Bad Women Succeed', '1jRoNuf2rHvgi6u39gJAdfM7IqIuoycWv', 33),
('33', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 33: Aren\'t you disappointed that the person you were expecting.', '1I3DwZp_lf1u7OPZK6ucZfALqU979-0Rm', 34),
('34', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 34: Xia Xueqi, you also have days like this!', '1gKIuTPTMVJwtmnydbp8exI2iRVfQvm8f', 35),
('35', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 35: It Seems I Made Things. Worse?', '1tf1f95fl1T3kfC4I91JLxgWWT0Eif4by', 36),
('35c2075e-4649-4b6e-b969-d9eaab5e2c93', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 5: Hình xăm hoàn mỹ (1) ', '19KuDhiCpvzpCbng6VKP3XOLxiZAMuuOq', 5),
('36', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 36: It was just a slip of my hand...', '1wExfp0FzURPUofuGlcjDyPw_NUfR-tCU', 37),
('37', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 37: Xia Xueqi, the person who took your first kiss was me!', '1_crSkwlguBe_sBHTlnSX0KX3NFLTiQEr', 38),
('38', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 38: I found the breakthrough!', '1q2bpC99vfW01COfwqGuI854oVWJjf6sp', 39),
('39', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 39: Give you a pleasant surprise!', '1Bkq7trgGWUiLqaHbYEAXWIxpwKthYx2r', 40),
('3dbb46a2-ea9e-4f27-855a-2b51e2e1795f', 'e3602872-9d06-4821-8a70-d40917e59e5a', 'Chương 3: Yuki và Honoka (1). ', '1lHbRw0Rgd9ibA85FBrDkj9UGnI6mOH9c', 3),
('3e92c2e3-e2f2-4f64-8b08-e755a3a7642e', 'e3602872-9d06-4821-8a70-d40917e59e5a', 'Chương 5: Yuki và Honoka (3). ', '199S12JFE_mtOP5AP3zagIX-lVw7uH49I', 5),
('4', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 5: I\'m a Villain But The Female Protagonist Kisses Me?', '1gFYJcb4c737pZ1AmJHS8gmtDz5JSItYe', 5),
('40', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 40: Su Xuelan, can you do it?', '17Oae6Kd6sqr_hIsjRFWqbdegHz-Fn4IE', 41),
('41', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 41: Ruoruo, you act so well!', '1wcpw9jDw5kaq4NM09shnLVKeNTlOvuMx', 42),
('42', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 42: Come and see me!', '12BFaWj2q_UWSg89z8Svh6WkfqBx_FL1I', 43),
('42dbdd06-3b26-4068-86bb-d14d95ddcf52', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 8: Lính đánh thuê Rush Nói về quá khứ - Đại rìu ', '1iKHpbjO9baB7LS3xUpIUwGzYi2_NuREd', 8),
('42e40287-b490-4529-8b1c-6c2ee5ab0b70', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 7: Lính đánh thuê Rush Nói về quá khứ - Đá quý và tự do ', '1QmvNuiLwj-0t0Pw_QNDQ8Ex8TNpnpDhW', 7),
('43', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 43: I have a task for you in', '1wpD1LlIN8O92OjrKYRe-imgwJtLf0mC4', 44),
('44', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 44: How about you call him while I kiss your lips', '1dU7Zp_z65BUKbolfLOcOeWGAgzTxNdZX', 45),
('442ddbd8-8b06-4e23-a49e-5d63e7f25566', '01037bad-bd7d-4e5b-b7b9-bf22a3517506', 'Chương 2: Âm mưu ', '1UPdSfGLXxO1dzYF_TNBOJekTcWQ6JIYz', 2),
('45', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 45: Xiao Ran: Everything is already in my hands!', '13sN-OSIwo3rE2y9h5xNvPhPhxhCB75Oh', 46),
('46', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 46: Su Mingyuan? He\'s a joke!', '1pOC9k2duGIexbk5Vw2efTKrf8fkq_11U', 47),
('47', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 47: The upcoming third show!', '1HISBZAT81hRhSPO3346y8QyrUWPIIZNx', 48),
('48', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 48: I will have great success!', '1FFIObl32nI75tQvuhrFAEflGHbUV-67G', 49),
('4853c5a5-c1bd-4cfb-aa3b-05efbd4904cd', '09fd435a-9483-4c54-ad39-c42e4ca3bfbe', 'Chương 1:  Bị triệu hồi bởi Ma vương để bảo vệ Ma vương khỏi Anh hùng ', '1ObtbmR2T2Wb1z3_XXZaxgU0qI09770qR', 1),
('49', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 49: The general is out', '1fx2F973Ie5JvPyKOQOu4hsxvBtj241lm', 50),
('4cfea45f-7a91-43be-a23b-3ec21cc20bbe', 'add1d93f-819a-45ef-afd6-e3267bc6bb1a', 'Chương 1: Lớp 1-A ,', '1YedMettWVg1ryXFkdF9nM9K7FMb10YO-', 1),
('4e3bba44-c72b-4fec-972c-35c128f3515d', 'f25da911-2688-422d-8f60-1ad6363a7f58', 'Chương 1: Cuộc gặp gở được sắp đặt ', '1MpY9TKU-eF3cN45i3e1wXsZmQsD0wwca', 1),
('5', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 6: Get down on your knees and Admit Your Mistakes To Me!', '1_2rkuuXDSAq-Lh71_EXXRGEzLGQ2OPUO', 6),
('50', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 50: It is my turn to perform', '1fRrkj98vPxKQPLLZGOllT3-Vnvw94hgj', 51),
('509912a6-2684-4352-b6a0-03b208f3f26c', 'b16a0928-b756-4ec1-ad98-7697a2d464ca', 'Chương 2: Đi theo kẻ thù ', '189TNx95NlUKXtX_uYzNQBZOHmOHbnACp', 2),
('50e65958-1698-4958-b33c-ba1311e975d5', '390e3f6f-a7f7-4575-8ce3-764da6f6ecf9', 'Chương 1: Một thanh kiếm? ', '1lIQpMx4f1I9qIg6SWM6u33AjW9SiecPu', 1),
('51', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 51: A perfect evaluation, isn\'t it about to lie firmly in the .', '16CvsdBXvLvj4FCz0pfQHT_JvkCBIE3aN', 52),
('52', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 52: I want you to accompany me for the night!', '1YnRZsOXi6t2HEIaBLqGfS4762CtjMWG2', 53),
('525591ed-1e60-47a1-875c-ee992f63f84a', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'Chương 2: ác ma của Lemegeton ', '1QpmN8rcCBLJDtJ0YwnBgh_zau-rOpndO', 2),
('53', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 53: Xiao Ran: My chance is here!', '170f1l_3r66N_CgzogYUUE22nVMAQd4aF', 54),
('54', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 54: It\'s just that I\'m a little, a little ...... too happy', '1vM5_G0vnJ5mTvO4YIPdsu7IKcLLppJ8K', 55),
('55', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 55: No, I can turn the tables! He couldn\'t win anymore...', '1YelxU0sekz2RJAfjEhZ_Q_G-m7Uf-dW6', 56),
('56', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 56: I want you to give yourself a slap in the face!', '1d1Jybe9zeWk_jgaPGqDC-ES-1aVMmVoX', 57),
('57', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 57: Son, I\'ll create an opportunity for you!', '1Vq_Imo5MqA52W0B5XpsmPfV4F9Ig4-zw', 58),
('57c6f423-ad1d-4929-bf64-c725730ae3e6', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 6: Hình xăm hoàn mỹ (2) ', '1oIln09KMS90w4dm7PFX_16PSm_eFt-u0', 6),
('58', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 58: System, you wouldn\'t want to mess with me, right?', '1GbdQ7hlAShw72KQYcaVnPtC0V9UGtlVx', 59),
('59', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 59: Sister, if you are still waiting for me at home...', '1EoxGKY2WAiEE42L7owo2XmfIZeZWbIlG', 60),
('5984061c-cb0c-4469-85f9-a165a38537d0', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 1: Cục gạch phá võ thuật (1) ', '1OPckA-G8KDWgeovBKIVNRViMpHQV4k5X', 1),
('5b01ca16-c76c-4159-bdd7-85d5813f9948', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 6: Lính đánh thuê Rush Nói về quá khứ - Ý nghĩa của tự do ', '114zcZKjPCLIKm-jHURm89lMzE4opH3ax', 6),
('5cb7b10d-1488-42a0-a87b-792bc0a58a4c', 'f25da911-2688-422d-8f60-1ad6363a7f58', 'Chương 2: Vị thần của công lý ', '14tW_bkxrhFbRyX_5ImHqqUxxWRc0KmJp', 2),
('6', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 7: What Went Wrong?', '10bKPgyluUY3LLZC_yKOIwkty3DVscqOG', 7),
('60', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 60: Mingyuan, you like her?', '1DCDxo9y_-i5qU1l4nPU_hcPZTbEp8lO9', 61),
('608ba13b-03e2-41fe-a663-9c3b4584b9f2', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 4: Cục gạch phá võ thuật (4) ', '1qVsxn9ch9LgsRfgKnRfPyQpT1hG6X-7S', 4),
('61', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 61: I, Xia Xueqi, am confident in winning the first place in h.', '1ZdTfzqeiJsbYNcgTTzf9NUYYq1FatMM6', 62),
('62', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 62: My good sister, did you call me?', '1wA9MRo8as7zJZjpYLlv9VR9iA3-JblMH', 63),
('63', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 63: Ruoruo, is really awesome!', '1COMSkCHhY4GVey_aoJiMEdjkiHR0kGlg', 64),
('63b49580-b8ac-422e-a5c7-f81fb81ae6f2', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'Chương 3:  Giao đoạn ', '18RR2RQ129KIe6ZAV6zfGuO6AWF6kps49', 3),
('63c66147-61bd-4896-9664-ceb4a5fb07b8', '01037bad-bd7d-4e5b-b7b9-bf22a3517506', 'Chương 1: Gặp gở Dio ', '17RdJpqCdnJeacf6fyBshnN_vQptDcWqy', 1),
('64', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 64: Su Mingyuan is once again full of confidence', '1ReZW1lr_e9U_WSZ5U-UDZZI0eBw8scTg', 65),
('640b4a97-78cd-4b25-b597-defa35557b0a', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278', 'Chương 2: 1-2 ', '1bdfTs25NXq95BCayh1obmo9KKfXuO4ux', 2),
('65', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 65: The white-robed knight, Su Mingyuan, came out again today!', '1mrpjL9mTZYey6_GpiQ_USmjh14uRCazD', 66),
('66', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 66: It is precisely the same time [1]', '1RjmAtE4x7iwdxDmHlqRIUqnr2Rjc26LY', 67),
('66766974-0c58-4305-88fc-b831e79acebc', '2b0bb84e-a812-4e5b-a69b-2b717b72b0c9', 'Chương 1: ... ', '1fNWUgwyR9kTO1LAGoQ4tTnP9HYrAraKV', 1),
('67', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 66: It is precisely the same time [2]', '13ZrpTI-Db65gg6DQnWxxackVNkb4fyL5', 68),
('68', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 67: This..is it allowed?', '1BkjNJAgmCUC2v0RP2TL-RVmmXnMewhbr', 69),
('69', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 68: Xiao Ran was perplexed. Su Xuelan continued her interventi.', '1hVvzGyf6kNN0CgECb7jsOFs2cSuFAjsC', 70),
('6b686422-dc37-444c-a8bb-e4ede42a98d4', 'ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a', 'Chương 1: Mất gia đình  ', '1z3OEX_s838U__1MHXVo7m2W30-1PjmN0', 1),
('6dd69849-721a-4aaf-bdf7-2f8260f083b2', 'e3602872-9d06-4821-8a70-d40917e59e5a', 'Chương 4: Yuki và Honoka (2). ', '1DvlR42wsYYwWX8OIrqK8GYk1kdzOzdiM', 4),
('6e16f463-22b5-418f-9c5e-e627ec99c92c', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'Chương 1: The Undead King: Mở đầu ', '1a8PwWJiY50xEYIeHpbgLoH5pnZhumtmZ', 1),
('6f6c9452-821c-4437-bf41-f55cfc14920c', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 2: Cục gạch phá võ thuật (2) ', '1HuQqXO6yuY2QNZIuIsjBE46OU9KseR-8', 2),
('6fb8f367-6022-4663-99aa-c438a19d49e1', '89679880-22b1-4cb2-b639-286e4bb17cb6', 'Chương 1: Cậu học sinh đặc biệt - Vật chứa kì lạ ', '11YHUTBAK5PiEWCOeSQmpClYrcviEnbQe', 1),
('7', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 8: He Will Not Disappoint Me', '1n8V9ULeQH380mJPSLNm2w2cuDzTMBjy0', 8),
('70', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 68: Xiao Ran was perplexed. Su Xuelan continued her interventi.', '1Xz0rXMOzk8PYneUPfk5Bks5vb50ogNkK', 71),
('71', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 69: He wore a mask. He was aggrieved.', '1CxdvdJIViWD_jDh8EiBeKKTF36sYdDDq', 72),
('72', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 70: This time, he took the initiative.', '1cg2GwG3vWJnMD5Qy6cFH5F5bXMIBt4TY', 73),
('73', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 71: 70% is mine, and 30% is yours.', '1sF85WMaNgxl04GvItuf7Qm7tJIwKN6om', 74),
('74', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 72: I can only find you to vent my anger.', '1hgPQUhGoWNZSm3uRz6EfOzM1LtE3UmAf', 75),
('75', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 73: Let Xiao Ran take the initiative to stretch his face over .', '1NDhZFZNqMC1dL6C-LqAeyuHEtOxzL0Wf', 76),
('76', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 74: Why...why let me watch this scene with my own eyes!', '1SzHfatndEnO_KkAFI7DGuA-d9-8zqE3l', 77),
('766528b1-b179-4f69-b78a-e377174425c3', 'f0b49264-445d-4adf-8946-57a168b8bb72', 'Chương 3: Tiếng hát câm lặng (3) ', '15JPtNuOHKRSGrjqDIsO5e2yvTk8c_PP0', 3),
('77', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 75: Su Xuelan is feeling bitter.', '19xzRRtdw0z1xiGS4MhLhVhgvHtYxCc4P', 78),
('78', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 76: I was teased by a bad woman and even my heart pounded viol.', '1LqRd7wL77ztjtAhxZUfpoI48xurGY5Mo', 79),
('79', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 77: The Person Leaning In My Arms Is. You', '1J-EW-0mPxE4Zc9AzglQHmCnzf6IZXGAX', 80),
('79d484ef-1a0c-4ec1-aeed-f438a2031f83', '54787fdb-06f3-40ea-b723-491d7b259c60', 'Chương 1: Bức tường của thiên tài ', '1VaoXhhRrfS63ykAlpBANTVa6Fzrqlubu', 1),
('7ab7b953-9c3c-49cc-9a8d-7d9c00d87f58', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 3: Cục gạch phá võ thuật (3) ', '1ZegdohLN6OwM-lVLA-W4xcrgMxh24ooM', 3),
('7c6bec9d-e363-4daf-8d2b-1d455bfb503d', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 5: Lính đánh thuê Rush Nói về quá khứ - Phụ nữ và rượu ', '1SWi59tJJ5lQQkNzcOwy9WEcAdHN37yRS', 5),
('7da6001e-d3e2-4e19-88eb-e608d8b8db52', 'ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a', 'Chương 2: Gia nhập đoàn diệt quỷ ', '1s7srVJK-3uKsnDtvvtBIwSgB-Pexv-9N', 2),
('8', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 9: Everything is a Mess', '1yXeJE3rqcozdlilljxgyLQHbaulBXqh1', 9),
('80', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 78: Mingyuan, you seem to be different from that night?', '1-cKVn7SmVF9NGkhw2jY5tOerdpDbcRzx', 81),
('80fe1ad0-ee12-4ce3-ba56-8beb41c98a84', '38dafb6f-54f8-4339-9adc-a3546206fced', 'Chương 1: thế giới hoà bình ', '1-Ne7xZYaRrNY9m7MUu7AhoZW_V0jhXZB', 1),
('81', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 79: Shouldn\'t you have been. acting before?', '183tqMYE6cVQ05WZqIvAmkNYEzsyBynlr', 82),
('82', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 80: Finished? Was it guessed? Xia Xueqi, now you are the prey!.', '1HkwDGFqwKV_GU7tl9n6NV6UNCS2EoyCG', 83),
('83', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 80: Finished? Was it guessed? Xia Xueqi, now you are the prey!.', '1Jlu5140wHZjW1mnglI0YMOD1LThICD8G', 84),
('8335e7c8-546b-422d-8a0c-c0702a112035', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 2: Lính đánh thuê Rush Nói về quá khứ - Ta ở đây ', '1QQr1SJysDrP7vUQfVS-S2LvUZGxleoEv', 2),
('84', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 81: Xia Xueqi throws herself in his arms? The accident happene.', '1spTBCGeE65dVUfhBAquCB1So_GcW_F5P', 85),
('84ca2dc8-c0d7-4608-9b83-1d696f038512', 'b16a0928-b756-4ec1-ad98-7697a2d464ca', 'Chương 1: Khoảnh khác ấy ', '1WUzLqddI-oOz0MZ1S2_zehsMO2kT7iBH', 1),
('85', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 82: I, Su Mingyuan, am indeed the final winner!', '14MVDi5x9tPb45hqbNK2ZqMOkzIMvLoac', 86),
('86', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 83: Xuelan, don\'t be angry, you have to take care of the overa.', '1wyp1SWj8Y-PtGQqIQaG-PoylMkmjw0dn', 87),
('87', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 84: I changed from an actor to a director?', '1T45uJ2O8zHW_v9FlufsrdnYWONZlF7Uu', 88),
('88', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 85: Does Xiao Ruoruo have that charm?', '1MCA3cAI0CsuuzaHeWuWu7EfFaDFp7J_y', 89),
('886002ee-1cf3-41b5-a0e4-817e700773cd', '5bce2d96-3ad3-4796-9762-50aefa8e0623', 'Chương 1: Lựa chọn ', '1w6bRMPRP3QKDAH_EXbLWZ6zR8Gq_Rbgv', 1),
('89', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 86: Murong Hongxue wants to curse', '1O7ICX-OEfHDUmf8B46_QC1MVvhILFxsX', 90),
('9', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 10: The Diary, The Origin Of Everything', '1bBYP9ayZtHJgwnXZT9OmWKyl0HSO69Oz', 10),
('90', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 87: If you want, I don\'t mind. (1)', '1-IR0RkcmcVzhUtyvTzRb10vn2PDbYiuk', 91),
('90608e92-4d2f-4f48-8277-be475a86b85e', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 1: Lính đánh thuê Rush Nói về quá khứ - Sự khởi đầu của Hắc y ', '1of_c66J3lWaRKtvInPT7VbVqKg9JY54e', 1),
('91', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 87: If you want, I don\'t mind. (2)', '1VperQut35Jn9m8ji5BReuHgAEMOXPRRu', 92),
('92', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 88: Patience (1)', '1PnjPDiVMH8eaoBivq114L4m0wOMYLGwE', 93),
('93', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 88: Patience (2)', '1rexYnK5o2xTxYFt1E2CdE56WX1DE1fo-', 94),
('94', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 89: If I get a failing evaluation again, I, Su Mingyuan, will..', '1Qq_7uJ1BiGpRT0R0Dv8b7eag7tP3EZ_U', 95),
('95', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 89: If I get a failing evaluation again, I, Su Mingyuan, will..', '1rmg_0OI1L4nwQ6eMcGDCgt0daQC9kDH4', 96),
('96', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 90: Woohoo, I, Su Mingyuan, also encountered a day when I got .', '1vcPE0qMThfAQl2lefrb2rlWApDMAppBD', 97),
('97', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 90: Woohoo, I, Su Mingyuan, also encountered a day when I got .', '1vBHTJvpCTNC42WPxeX__FtVpB1vF1oZu', 98),
('98', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 91: The Rebellious Son! The Rebellious Son! (1)', '18gK8ag6YvywE2AzYkoYFlBL4G-QaL842', 99),
('99', 'acfd83ac-2789-40ce-97b5-709675664ec0', 'Chuong 91: The Rebellious Son! The Rebellious Son! (2)', '11BY3jB-nQx2IfbpXAzAin3C42jER5HYe', 100),
('a75dd59e-52d7-49f5-a679-fde42b0d1aa9', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 11: Tăng nhân kỳ dị (2) ', '1i8pmzDUPaoIFHMOgxR5CGgeJ7mRV_gqz', 11),
('b2cfc28c-ad4e-4ae5-85e1-ab3433eaf2eb', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'Chương 4: Cuộc chiến ở làng Carne ', '1LwdkvVAnBtwgJJI6vH0CQ32Se3UhqV1_', 4),
('b312cc9e-e33c-443a-b62f-d0e07b62b151', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b', 'Chương 2: phản bội ', '1P5sVzQIcETpWPW-MFdBbQGALUhED-kaS', 2),
('b4159ded-d4dc-468e-9591-408d45fd4510', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31', 'Chương 1: Kẻ vô năng ', '1fYAps4o_zU-_i33HdOHDJy_GXB31ryjX', 1),
('b5902fe7-97da-42c2-8384-89b921e77ad9', 'bb4a395d-e831-462a-b31e-0b906ac22c6e', 'Chương 1 Mọt truyện ,Chương 2: Quái vật ', '1kFpwyBv7h6DWPV1w7gsLVy_EVAPDT6wT', 1),
('b6d888f3-0303-41a6-afd1-e9f987970d7b', 'e3602872-9d06-4821-8a70-d40917e59e5a', 'Chương 1: Mở đầu. ', '1RRVRdYjV-swbioAmHnrv3qVqJUf_b8e4', 1),
('b97a2100-e864-4ade-a13f-aecd2c559732', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31', 'Chương 2: One for all ', '10_QNkwP1wEp3efiknTUTlySmZ0XdVaGJ', 2),
('bf7a004a-a2c2-4a93-8f83-20727da35555', '46c9965a-ef7d-46c7-b2b2-1b5e3f8321ce', 'Chương 1: Tớ có thể thay thế cậu ấy  ', '16oOqHEy_Wipc_53Ylfp0AUoi5k9IW7J7', 1),
('c12838ed-6707-47fa-b87d-7e25897fae9b', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 8: Hình xăm hoàn mỹ (4) ', '1lgPlDl1fJd_8OLnwFPAOqMkcMNQKWUjj', 8),
('c9d4b239-51e4-4ef7-bf95-4a129ccf221b', 'f0b49264-445d-4adf-8946-57a168b8bb72', 'Chương 2: Tiếng hát câm lặng (2) ', '10Y1ZcBphygNc7ntpxA1VTmaceCQyuy2-', 2),
('d1a6911c-3f4c-495d-a113-e46978795944', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 10: Tăng nhân kỳ dị (1) ', '1RbCgxdwiBSfyADIQ2T9fQ9mK5Jyg7L3t', 10),
('df9d5476-5241-4a0c-a802-224efd1343e6', '9402e162-4293-45b8-b8c9-07ab26c8717d', 'Chương 2: Biết đâu lại thay đổi ', '1oAZp3DJKD2RS0n-Yvv0aU-zs1WSFwyOr', 2),
('dfd16202-4ba3-41dc-88d4-5a2c7ac8ade5', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b', 'Chương 1: CUỘC ĐỜI CỦA GRÜNBELD ', '1b985v2UdfV45dXsEb6ReNBgR36t9mh6B', 1),
('e3a05695-a45d-4e57-ae74-65085ee77fe9', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 7: Hình xăm hoàn mỹ (3) ', '1VM_65GdVwtVEDe-ACh9AnAxWDmmHN8jU', 7),
('e52e1f77-cf59-490a-8bc3-19922f4d1a6c', '5bce2d96-3ad3-4796-9762-50aefa8e0623', 'Chương 2: Sai lầm ', '1K-L0CVRyqa0ZokDZxa9oWmE2fAqlZZss', 2),
('e61be5b8-b7f4-429a-aa62-56d3e4d3e8a7', '46c9965a-ef7d-46c7-b2b2-1b5e3f8321ce', 'Chương 2: Xin lỗi ', '1TEZB7iOWlXqHQYoGYd4uicL13cQAM0uz', 2),
('e6f74921-eef9-4a31-b197-13db91e1444f', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029', 'Chương 3: Đội 7 ', '1ElFc6gT5ecCw-b-oy6lmP3gwkMiKk_TF', 3),
('e72fdf2e-f0cc-4b7a-bacb-be3297a41753', 'ebccfe77-bb3c-48fb-8558-740063c98377', 'Chương 9: Lính đánh thuê Rush Nói về quá khứ - Cái chết khởi đầu ', '1zh5W2-1RIufsl5Y4_El36mTrIHTQjqLH', 9),
('f0feffab-7a84-4d24-883e-06823d612231', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278', 'Chương 1: đoạn dạo đầu  ', '1ZIfXX7TgJICS-igwEjBl-StcHGzHb8zk', 1),
('f6235396-7ef1-40b9-b7bc-0fee182f569a', 'a0b443f5-0b7d-49e8-97c9-77154584055b', 'Chương 1: Mở đầu ', '1l_yufZLE-DjQdoarTDoSumT0jPqAWfA1', 1),
('f8fd35ea-de04-47f2-bcc5-293549d6ef9a', 'c910caa3-01a4-43fa-a596-2748a118554f', 'Chương 9: Hình xăm hoàn mỹ (5) ', '1yyPIXUryEfMKgzhy_N6MojRB2JcLflrM', 9),
('fc8ec0d0-3828-4ac8-a6d3-3629fffc815c', '9402e162-4293-45b8-b8c9-07ab26c8717d', 'Chương 1: Tai nạn bất ngờ ', '1coFPpPu7lQtskp1mOGsGXpT-VULq_w3u', 1);

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
('AkNhts2W1sgSfnjIn8_u45VjFdYDyveb', 1702353304, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{}}'),
('YF9jvIDGGdfR237bwzfF7WHC4JMKb_L5', 1702365072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"100489975828441695411\"},\"user\":{\"id\":\"100489975828441695411\",\"username\":\"100489975828441695411\"}}'),
('ZzLyZE8EBiaIPGJn2FP4ymSD813s6Ytt', 1702365001, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('eKbopxN3v_jSff8bGHW-G5ThxMKLk6aa', 1702363954, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"110152635823665920356\"},\"user\":{\"id\":\"110152635823665920356\",\"username\":\"110152635823665920356\"}}'),
('ftohQWwTGAO0g0YmtpjTATqpNbMWMDFo', 1702364378, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"bdbd15ad-50eb-40fb-a0d0-f141321e6fd0\",\"username\":\"admin\",\"role\":100}}'),
('qsSHsa4mHqH_EJ9uHReCwLmE7mNzFOiJ', 1702365057, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"bdbd15ad-50eb-40fb-a0d0-f141321e6fd0\",\"username\":\"admin\",\"role\":100}}'),
('uHogoeV77VuRKcaMil5EkLYzkxMl6NMf', 1702353283, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{}}');

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
(1, 'https://drive.google.com/uc?export=view&id=1lsi4CPsBWK6sBjfGQ62j8mVJcjzvIQUm', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
(2, 'https://drive.google.com/uc?export=view&id=1vZ7nIlaYU0HFyW1TR9i6ps6gsLqh7SjY', '89679880-22b1-4cb2-b639-286e4bb17cb6'),
(3, 'https://drive.google.com/uc?export=view&id=1SFRkd73juEAc9F9tiAgnB27W4q8ZG_GC', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
(4, 'https://drive.google.com/uc?export=view&id=1Se9BgoszEheaOvvyQQRU6DJ7EiolqdpU', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b'),
(5, 'https://drive.google.com/uc?export=view&id=12mbAAx6YeJ2Ik90b4xPIxlpwHx17v2Y9', 'f25da911-2688-422d-8f60-1ad6363a7f58');

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
('110152635823665920356', '110152635823665920356', 'xx'),
('1378043a-86be-417d-a6b2-a93821bcf625', '1378043a-86be-417d-a6b2-a93821bcf625', 'Dragonccm'),
('2769f0a4-979c-4e47-a833-08853cbc696d', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', ' Takuya Igarashi '),
('2d1b7d4c-da38-4dad-8279-6f359f4938fe', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Sing Shong'),
('2e65ad4c-ed47-4f97-9086-8a9a21d1f0f9', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Oosaki Airu'),
('301885d4-b933-43c1-acd8-b44f0d702bf3', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Bob Kane and Bill Finger'),
('4153018f-30c8-4b0d-9ab5-592bd1901e51', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Hirohiko Araki'),
('46151dd5-70b9-4552-af15-7c6f1ab1f643', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Tsuchiguruma Hajime'),
('55b4f9aa-b206-4410-95f6-42b505390664', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Anikki Burazza'),
('55e4fa89-2503-4e1a-b519-136d17dd61ce', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Hiromu Arakawa'),
('565c5cde-9ba6-4764-96a7-c82bf16d995d', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', ' Nezaki Takeru'),
('715ddcf3-cbfc-4b87-a909-5139acc0330d', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', ' Yuu Tanaka'),
('79de059d-c2ee-4501-ad84-ee331597930d', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Kohei Horikoshi'),
('86387076-e579-4f45-9382-7315abb5b9c0', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Makoto Yukimura'),
('92e1ab4d-5e93-497d-8e5c-77f14f589a0f', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Tuyết Dần'),
('98cb7948-5486-419e-9b44-6c17a528562b', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'べあうるふ-beowulf'),
('9d142816-cf3c-4a7f-b613-b88301c7d2fe', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Gege Akutami'),
('a4a76d2f-cc4a-44aa-8b44-e4eaf134672b', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Jang Sung Lak'),
('a515d2ed-f992-4a25-b73f-0c3f07743d7e', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', ' Takata'),
('bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Nguồn sưu tâm'),
('c5cb71ae-34a0-4032-b246-4a82557de82d', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Kentaro Miura'),
('c730887f-0e49-47f1-9e3d-b61738ad33b8', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Tsukasa'),
('d7b188dd-6986-4c4a-921f-66a00f1d5677', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Tsugumi Ohba and Takeshi Obata'),
('d9a5b163-cf1f-4139-bd1f-323b813a7242', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Koyoharu Gotouge'),
('db5c3f24-6ff9-40f5-b911-b9f204bf2e99', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Naoki Urasawa'),
('de5a08cb-ec66-445f-91ab-6c7d2f17e509', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Maruyama Kugane'),
('fbe68ec7-5224-429b-82fb-2f5a0754c66c', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Goro TANIGUCHI'),
('fcb12278-8515-4a29-811f-58ea287af8f2', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Đường Gia Tam Thiếu');

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
('101638673958112028880', '101638673958112028880', 'nbminh2101381@student.ctuet.edu.vn', NULL, 'google'),
('110152635823665920356', '110152635823665920356', 'chandoralong@gmail.com', NULL, 'google'),
('113263126602180653712', '113263126602180653712', 'binhminh19112003@gmail.com', NULL, 'google'),
('1378043a-86be-417d-a6b2-a93821bcf625', 'dragonccm', 'nguyenngoclong5511@gmail.com', '737f9acd778182b34d75ab3dc03c1f6dae3fd1f3bb68b0d72c9db2101dc6f21b37836239417be21b73f5b02750dc6aa4166aced576bc8ba486f83aaff752d7cd', 'normal'),
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
('03eda9f5-93a2-47cc-8690-4180195b31d5', 'Kinh dị'),
('1c63df98-9836-4b79-bed0-02875bd9c556', 'Thể thao'),
('2136d218-0c81-45d9-947f-0f501a5a0494', 'Ngôn tình'),
('24fbd7e2-18cd-4bd8-9875-dde2e71a452b', 'Tâm lí'),
('2cb243f2-2654-4da0-a5ea-df76f32232e9', 'Chuyển sinh'),
('4d05894b-dbb3-4049-a04c-212b704dc206', 'Khoa học - Viễn tưởng'),
('5a063e3b-801f-471f-b9be-2d8590542d34', 'Trò chơi'),
('5b7a50c7-852d-484c-9f7a-c6a81d5055a5', 'Giáo dục'),
('70b004ed-6bad-4a13-9cdc-caf143ba75a7', 'Huyền ảo'),
('7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'Siêu anh hùng'),
('76b02a19-5471-4cf6-9599-e8c17a036090', 'Trinh thám'),
('8ba108ff-11dc-45a6-99eb-6620758fe834', 'Hài hước'),
('8ce2fc47-1cfb-4a69-9976-70b7b59251ee', 'Viễn tưởng'),
('a06120cd-d31d-4172-a1f1-1b6d53a1169e', 'Gia đình'),
('a7350c56-c587-4d14-b700-484d52826216', 'Học đường'),
('c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'Hành động'),
('cd58d721-cb98-432d-a5ed-4454e0c8b283', 'Cổ trang'),
('d1b9870d-dc6c-4c11-9159-1e6021de28d3', 'Hậu tận thế'),
('e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'Phiêu lưu');

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
('020a0115-1a15-4466-a393-d740a9ede5fe', '5b7a50c7-852d-484c-9f7a-c6a81d5055a5', '2b0bb84e-a812-4e5b-a69b-2b717b72b0c9'),
('0344bca2-57f3-4420-bcc4-dc79de19710c', '2136d218-0c81-45d9-947f-0f501a5a0494', '46c9965a-ef7d-46c7-b2b2-1b5e3f8321ce'),
('0726c6ff-7297-406d-be13-7ebdc09fae7e', '8ba108ff-11dc-45a6-99eb-6620758fe834', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('09fcd172-5d0d-4415-8e47-8d6c6edb4ae4', '8ba108ff-11dc-45a6-99eb-6620758fe834', 'ebccfe77-bb3c-48fb-8558-740063c98377'),
('0c5f8972-866d-459b-b1e2-e8c762035c1f', '1c63df98-9836-4b79-bed0-02875bd9c556', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('0ea15cfb-d742-4ab1-98c2-9d8762d291b5', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b'),
('0ebfda02-8b41-4f6a-bbd5-7b794b3de00c', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740'),
('11a6640c-1ab2-4fc0-b877-4f94e1ce6620', '4d05894b-dbb3-4049-a04c-212b704dc206', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('1220fccb-a4d3-4938-b88c-41dc292585b1', '03eda9f5-93a2-47cc-8690-4180195b31d5', 'f25da911-2688-422d-8f60-1ad6363a7f58'),
('1803603e-d061-47f7-a7b1-daaaf15b2e2b', '2136d218-0c81-45d9-947f-0f501a5a0494', '92578224-a231-4395-80fe-6d0d425c771d'),
('1ebb182f-3da6-4f99-a0b8-fac37dac14ac', '4d05894b-dbb3-4049-a04c-212b704dc206', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278'),
('23e27d63-5530-43d2-92a4-acb3cdc9aa32', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a'),
('2656abe3-8fb1-402d-929c-3123686e16cf', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('26e63f73-fceb-4e8f-8312-0ba34b44d9cd', '76b02a19-5471-4cf6-9599-e8c17a036090', 'f25da911-2688-422d-8f60-1ad6363a7f58'),
('27e456ef-3bde-4539-927c-0b55aece6caf', '2136d218-0c81-45d9-947f-0f501a5a0494', 'e3602872-9d06-4821-8a70-d40917e59e5a'),
('29b74414-8b75-48d8-9716-6f9fb2681b04', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '89679880-22b1-4cb2-b639-286e4bb17cb6'),
('2a643721-ac7b-413e-ba61-4030f3c77656', '76b02a19-5471-4cf6-9599-e8c17a036090', 'fee10c45-3421-480c-8867-85ff7a0735c2'),
('325b3fbf-2eae-4eb9-993c-49f5bcb85578', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', '5bce2d96-3ad3-4796-9762-50aefa8e0623'),
('39d64d8d-76a5-4cd9-93b1-2b19f929f648', '76b02a19-5471-4cf6-9599-e8c17a036090', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('3f548a7a-7116-47cf-b9ef-624594d4c81a', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31'),
('4069484c-1902-4a67-8484-f56d723c5d7a', '2cb243f2-2654-4da0-a5ea-df76f32232e9', 'add1d93f-819a-45ef-afd6-e3267bc6bb1a'),
('4275223a-d66d-45e6-8a72-d2b0a3033c59', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('45b21eb5-2b55-4839-a104-dddbbe6138d5', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', 'ebccfe77-bb3c-48fb-8558-740063c98377'),
('47d114a8-6abc-4cf3-993d-c23d96cce626', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'b16a0928-b756-4ec1-ad98-7697a2d464ca'),
('496068d7-2700-4601-b372-86a8ec09c985', 'a7350c56-c587-4d14-b700-484d52826216', '89679880-22b1-4cb2-b639-286e4bb17cb6'),
('4cedaab1-3d73-4679-aadf-95ea3cb0f4d1', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31'),
('519e9dbc-dd93-4142-9670-c486f11008d4', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', '38dafb6f-54f8-4339-9adc-a3546206fced'),
('5309022f-a8ca-4f49-ae52-a953f3fb85e2', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('55c272d4-3f46-4a83-99cc-d67f0742bcb3', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', '5bce2d96-3ad3-4796-9762-50aefa8e0623'),
('5973da6d-787c-4b55-9b87-1705c887d1b5', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', 'b16a0928-b756-4ec1-ad98-7697a2d464ca'),
('5c5bdd97-ca47-4754-8dfd-fed45f8ecbe2', '5a063e3b-801f-471f-b9be-2d8590542d34', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('5d48f720-d5d6-4c27-a88d-24a68f8eea43', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278'),
('65805afa-550e-490a-bcab-aed375731183', '03eda9f5-93a2-47cc-8690-4180195b31d5', 'f0b49264-445d-4adf-8946-57a168b8bb72'),
('6c241894-b24a-42ef-8784-757766ee0b6f', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('6d3f5665-6dc7-4ce6-bc37-fdf1f96c7377', '2136d218-0c81-45d9-947f-0f501a5a0494', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('709c7fac-b312-439d-9f46-782eaa948cea', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a'),
('76df98d7-a902-4837-9331-b435122f9c75', '2cb243f2-2654-4da0-a5ea-df76f32232e9', '390e3f6f-a7f7-4575-8ce3-764da6f6ecf9'),
('78a2e096-9066-4cb3-a874-4385d104f6b1', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', '01037bad-bd7d-4e5b-b7b9-bf22a3517506'),
('78ab5847-4483-4bfd-aaac-bdeea0c6e560', 'a7350c56-c587-4d14-b700-484d52826216', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31'),
('7a5737a8-1ed7-4753-a094-59f4dbe9ecd1', '03eda9f5-93a2-47cc-8690-4180195b31d5', 'e3602872-9d06-4821-8a70-d40917e59e5a'),
('7b103808-a38f-4036-a827-57e6566fa8e6', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '09fd435a-9483-4c54-ad39-c42e4ca3bfbe'),
('7be09de0-cad5-4fe3-9384-2f13f3f4cca0', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
('7cb31e0f-87dd-4f59-add0-c9939ae78d90', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', 'acfd83ac-2789-40ce-97b5-709675664ec0'),
('82173f71-9189-46d0-b182-357fd7e63cba', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', 'bb4a395d-e831-462a-b31e-0b906ac22c6e'),
('8704bde7-ba69-423c-b1f8-aa731fc8d58f', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', 'add1d93f-819a-45ef-afd6-e3267bc6bb1a'),
('873f1006-4313-4a36-9826-3b6cdbed7be6', 'cd58d721-cb98-432d-a5ed-4454e0c8b283', 'b16a0928-b756-4ec1-ad98-7697a2d464ca'),
('88a3c592-ec83-4727-af04-23de49c9879b', '76b02a19-5471-4cf6-9599-e8c17a036090', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278'),
('8b6e2196-f297-42d9-be5e-c5c030439970', '76b02a19-5471-4cf6-9599-e8c17a036090', 'f0b49264-445d-4adf-8946-57a168b8bb72'),
('910e4bcd-4cd0-4999-8b07-55dd20194563', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'b16a0928-b756-4ec1-ad98-7697a2d464ca'),
('97cb41b1-a020-4cca-9076-7642d0b4360b', '2cb243f2-2654-4da0-a5ea-df76f32232e9', 'bb4a395d-e831-462a-b31e-0b906ac22c6e'),
('9de7eccd-301a-46f8-ac48-539480586121', 'a7350c56-c587-4d14-b700-484d52826216', '46c9965a-ef7d-46c7-b2b2-1b5e3f8321ce'),
('a016cef4-1f09-4005-9e44-0ef2fbfad03c', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', 'b16a0928-b756-4ec1-ad98-7697a2d464ca'),
('a0a0124a-74a9-4da7-abbd-d61a46fdd1d3', '4d05894b-dbb3-4049-a04c-212b704dc206', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740'),
('a221a3ec-5c95-415e-a3f0-12227b0c3364', 'a7350c56-c587-4d14-b700-484d52826216', 'a0b443f5-0b7d-49e8-97c9-77154584055b'),
('aad22c36-bb11-4803-bb3f-e299e97c78d0', '2136d218-0c81-45d9-947f-0f501a5a0494', 'acfd83ac-2789-40ce-97b5-709675664ec0'),
('ac15a554-eec0-4838-a648-532c759711c5', 'a06120cd-d31d-4172-a1f1-1b6d53a1169e', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('ac7ca7e6-c879-43ba-ace4-d149133fe6c3', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
('af2aea1d-eede-4784-b61a-7262f69bfe18', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'f25da911-2688-422d-8f60-1ad6363a7f58'),
('b1cb457e-fa70-40b7-8090-02725cc86a1e', '2cb243f2-2654-4da0-a5ea-df76f32232e9', '09fd435a-9483-4c54-ad39-c42e4ca3bfbe'),
('b2a2e6e6-826f-43e5-a429-bb3ee016d9c5', '4d05894b-dbb3-4049-a04c-212b704dc206', 'bb4a395d-e831-462a-b31e-0b906ac22c6e'),
('b3a1dfcc-3550-4fa1-9434-5626052419ab', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', 'f25da911-2688-422d-8f60-1ad6363a7f58'),
('b3e2fd66-34da-47a4-94fd-a7e468020cda', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', 'c910caa3-01a4-43fa-a596-2748a118554f'),
('b48b106d-443e-4760-944a-e60a2070b995', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'fee10c45-3421-480c-8867-85ff7a0735c2'),
('b4d97073-a0d0-411d-8ec0-11da56601e00', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'afbaa18b-5d6c-4407-8855-4cf099ec6d31'),
('bbccaf49-f49c-45df-933c-be2a2a054c53', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'ebccfe77-bb3c-48fb-8558-740063c98377'),
('bcea1f9f-128e-4be4-8a93-5884dd832ea5', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('bf44a9ba-e52f-4629-8632-72c32eb9e0ea', 'a7350c56-c587-4d14-b700-484d52826216', '92578224-a231-4395-80fe-6d0d425c771d'),
('c04cc6d1-a984-402c-bb77-8fe91bec6f40', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', '89679880-22b1-4cb2-b639-286e4bb17cb6'),
('c1ea51a5-249b-4862-aa4d-f96bc6b8d0a8', 'a06120cd-d31d-4172-a1f1-1b6d53a1169e', 'a0b443f5-0b7d-49e8-97c9-77154584055b'),
('c2b2bb54-22f7-4a8b-9187-7edbfdef96df', '4d05894b-dbb3-4049-a04c-212b704dc206', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b'),
('c443214f-830d-4349-a020-54ba100f9a1b', '24fbd7e2-18cd-4bd8-9875-dde2e71a452b', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740'),
('c8dd66cd-1560-4089-b3e5-742aea471b7e', 'a06120cd-d31d-4172-a1f1-1b6d53a1169e', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
('ca181359-a1f9-4b23-a439-920bad90e922', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', 'acfd83ac-2789-40ce-97b5-709675664ec0'),
('ca58cb6d-231c-42fc-a1e7-f7df0c989b4a', '8ba108ff-11dc-45a6-99eb-6620758fe834', '92578224-a231-4395-80fe-6d0d425c771d'),
('cb8ffa5b-e1e1-41f4-a34f-252c1db4228a', '4d05894b-dbb3-4049-a04c-212b704dc206', '38dafb6f-54f8-4339-9adc-a3546206fced'),
('cccbdc0f-3013-4cba-b536-f8a74b1df91a', '76b02a19-5471-4cf6-9599-e8c17a036090', '5bce2d96-3ad3-4796-9762-50aefa8e0623'),
('d1344611-139a-4de3-8d26-caa5afcb5f4e', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', '9402e162-4293-45b8-b8c9-07ab26c8717d'),
('d2dacaf3-0217-45f3-aa8a-823024293d69', 'c1285b4f-ef00-4ae8-be5b-92a690b354d4', '5bce2d96-3ad3-4796-9762-50aefa8e0623'),
('d6fdd2e6-baf5-4f2f-aa73-45ab02ae0125', '5a063e3b-801f-471f-b9be-2d8590542d34', '54787fdb-06f3-40ea-b723-491d7b259c60'),
('de1dec77-a1ba-4754-90f4-07f3e3b6c400', '70b004ed-6bad-4a13-9cdc-caf143ba75a7', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b'),
('e38485a2-120a-4db6-a210-d0898cba3b5e', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'fee10c45-3421-480c-8867-85ff7a0735c2'),
('e6530f9d-ec97-4e68-9d4d-f7a5ff34340b', '2cb243f2-2654-4da0-a5ea-df76f32232e9', '206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740'),
('e80db1fb-4997-4024-b361-474902f38c92', '8ba108ff-11dc-45a6-99eb-6620758fe834', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
('ea1f3770-a458-4e88-b788-9c2bc1b50195', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', 'c910caa3-01a4-43fa-a596-2748a118554f'),
('f2cfd376-2b32-45b1-91d7-2842b27402f0', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', '89679880-22b1-4cb2-b639-286e4bb17cb6'),
('f3b9e0de-a153-45b5-b99a-4e89ad9c902d', '8ba108ff-11dc-45a6-99eb-6620758fe834', '6aa20a8d-4e1f-4bf9-8333-009aacf0f278'),
('f3cb2d98-5c40-4a33-8f0a-44ee030392b8', '7400383c-3fd7-406a-8f4c-39d7a939f6d6', 'dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029'),
('f4ffb677-897b-48bd-8089-4eafe4f8931f', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a'),
('f594c53d-d89a-46ed-ba62-14d7c20dcd86', '8ce2fc47-1cfb-4a69-9976-70b7b59251ee', '390e3f6f-a7f7-4575-8ce3-764da6f6ecf9'),
('f5ab4831-b016-49dc-878d-4f3bbc2e0381', '03eda9f5-93a2-47cc-8690-4180195b31d5', '5aec5ba1-f946-47ad-bb80-30e5ac45bc2b'),
('fbc6279f-12fa-4d4b-a022-4a90327847ed', '4d05894b-dbb3-4049-a04c-212b704dc206', '54787fdb-06f3-40ea-b723-491d7b259c60'),
('fc58f17d-c1fc-4fd4-baaf-69936324313c', 'e3e06d98-a5b7-4666-9dd6-2e0dc35b6636', 'ebccfe77-bb3c-48fb-8558-740063c98377');

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
  `role` int(11) NOT NULL DEFAULT 1,
  `last_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `thongtin_nguoidung`
--

INSERT INTO `thongtin_nguoidung` (`id`, `id_tai_khoan`, `ten_hien_thi`, `anh_dai_dien`, `gioi_tinh`, `role`, `last_role`) VALUES
('100489975828441695411', '100489975828441695411', 'Ngoc Long', 'https://lh3.googleusercontent.com/a/ACg8ocIIb0HY0aqShFhxx-BrcDuB_9iTKfjdudBqsOfCuLCbs18=s96-c', 1, 1, 0),
('101638673958112028880', '101638673958112028880', 'Minh Nguyen Binh', 'https://lh3.googleusercontent.com/a/ACg8ocLsHMXt4bbrulcYm7T69hJ1LsrGmIdam_gRscykCC0B=s96-c', 1, 1, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 1, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://lh3.googleusercontent.com/a/ACg8ocLYq5vVCCCNuPkBLcU1GVRtVvlwtp2NnRv15Rei3u03jiA=s96-c', 1, 2, 0),
('1378043a-86be-417d-a6b2-a93821bcf625', '1378043a-86be-417d-a6b2-a93821bcf625', 'dragonccm', 'https://drive.google.com/uc?export=view&id=1rjETv-YXPptvSehOsDmImtYGdSXaFYTN', 1, 2, 0),
('bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'admin', 'https://drive.google.com/uc?export=view&id=1mt_GqKP7-OeO6Q0ZMs0aO4ruNDHx4WQR', 1, 100, 0);

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
('01037bad-bd7d-4e5b-b7b9-bf22a3517506', '4153018f-30c8-4b0d-9ab5-592bd1901e51', 'JoJo\'s Bizarre Adventure', 2, 'JoJo\'s Bizarre Adventure xoay quanh cuộc đời của Jonathan Joestar, một cậu bé quý tộc sống ở Anh vào thế kỷ 19. Jonathan là một cậu bé tốt bụng và hào hiệp, nhưng cậu luôn bị bạn bè và gia đình xa lánh vì xuất thân thấp hèn của mình.\n\nMột ngày nọ, Jonathan gặp gỡ Dio Brando, một cậu bé mồ côi được cha của Jonathan nhận nuôi. Dio là một cậu bé tàn nhẫn và tham vọng, cậu luôn tìm cách hãm hại Jonathan.\n\nDio đã sử dụng một chiếc mặt nạ cổ đại để biến mình thành ma cà rồng. Dio trở thành một kẻ thù nguy hiểm, hắn đã giết chết cha của Jonathan và chiếm lấy gia sản của gia đình Joestar.\n\nJonathan quyết tâm đánh bại Dio và trả thù cho cha mình. Cậu đã học cách sử dụng kỹ thuật Hamon, một kỹ thuật sử dụng năng lượng sống để chiến đấu với ma cà rồng.', 'https://drive.google.com/uc?export=view&id=1TNvBSKNoDESf1ohcYzGodTRD32UIf5pw', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('09fd435a-9483-4c54-ad39-c42e4ca3bfbe', '565c5cde-9ba6-4764-96a7-c82bf16d995d', 'Ankoku kishi monogatari~Yuusha wo taosu tameni Maou ni Shoukansaremashita~', 1, 'Đây là huyền thoại về anh main được triệu hồi qua thế giới khác để bảo vệ ma vương khỏi anh hùng.\n\nTóm lại là: Kuroki bị bất ngờ triệu hồi sang thế giới khác. Người(?) triệu hồi Kuroki lại là Ma vương, Modes. Và, lãnh thổ của Ma vương đang trên bờ vực bị sụp đổ vì Anh Hùng.\n\nMa vương Modes, người mang trên mình ấn tượng hung bạo, cuối đầu trước Kuroki: \"XIN HÃY GIÚP CHÚNG TÔI, SAVIOR-DONO!!\"\n\nKuroki quyết định giúp Ma vương bởi một số lí do.....', 'https://drive.google.com/uc?export=view&id=18RkBhlbjgS5PyJlIT6U3QfyK5__UnKY2', 0, 0, '2023-12-05', 'Đang ra', 0),
('206d98a8-bbe7-4d17-a1f0-c9cdb2ef8740', 'de5a08cb-ec66-445f-91ab-6c7d2f17e509', 'Overlord', 5, 'Yggdrasil, một tựa game online khổng lồ sắp chuẩn bị đóng cửa. Vào những phút cuối ấy, Momonga - nhân vật chính trong câu chuyện của chúng ta quyết định gắn bó tới cùng cùng tựa game này và đợi server tắt. Thế nhưng điều kỳ lạ đã xảy ra, Momonga đã mắc kẹt trong thân xác của chính nhân vật trong game của mình và \"xuyên không\" đến một thế giới kỳ lạ. \"Overlord hùng mạnh\" lại một lần bắt nữa bắt đầu hành trình khám phá thế giới và chinh phục những thử thách mới. Với mục tiêu thống trị thế giới mới này, một người đàn ông cực kỳ bình thường, không địa vị, không người thân thiết giúp đỡ, liệu hắn có thể thành công?', 'https://drive.google.com/uc?export=view&id=1SwmRD60In_d2JGr_TtKYfbluwVBQiUPc', 2, 0, '2023-12-05', 'Đang ra', 0),
('2b0bb84e-a812-4e5b-a69b-2b717b72b0c9', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Thầy', 1, 'Tôi chờ chuyến xe cuối ngày để về thành phố. Tháng mười một, trời mưa như khát, hành khách bất tiện trong việc đón xe, nhà xe cũng không mặn mà gì đến hành khách.', 'https://drive.google.com/uc?export=view&id=1rb-Qhf1UphJmhmpE-7HTTzbP6C8IXGEf', 1, 0, '2023-12-05', 'Hoàn thành', 0),
('38dafb6f-54f8-4339-9adc-a3546206fced', 'fbe68ec7-5224-429b-82fb-2f5a0754c66c', 'Code Geass: Hangyaku No Lelouch ', 1, 'Trong cuộc chiến tranh nổ ra giữa mối bất đồng ngoại giao giữa Đế Quốc Britannia và Nhật Bản, sau khi bị đánh bại Nhật đã trở thành một thuộc địa của Britannia và đổi tên thành Khu Vực 11, còn người nhật thì bị gọi Eleven, Lelouch Lamperouge tên thật là Lelouch Vi Britannia cùng em gái Nunnally Vi Britannia bị cha đưa sang Nhật. Trong một lần tình cờ Lelouch đã bị kéo vào một cuộc bạo động, và thoát chết nhờ C.C ban cho sức mạnh của Vua Chúa. Đổi Lại cậu phải thực hiện cho cô ta một nguyện vọng.', 'https://drive.google.com/uc?export=view&id=1CVH6msWDww6Hx51D0SiJ1odWfEmnHrTa', 0, 0, '2023-12-05', 'Đang ra', 0),
('390e3f6f-a7f7-4575-8ce3-764da6f6ecf9', '715ddcf3-cbfc-4b87-a909-5139acc0330d', 'Tensei Shitara Kendeshita', 1, 'Khi nhận ra thì ... tôi đang ở 1 thế giới khác. Tôi đã trở thành 1 thanh kiếm, Dafuq? Chuyện gì thế này? Chỗ tôi tỉnh dậy sao lại toàn quái vật thế này. Tôi liền bay đi kiếm ngay 1 cộng sự cho mình (tuyển gái only, anh hùng đẹp trai mời đi chỗ khác). Một viên ma pháp thạch à? Tôi có được kĩ năng mới nhờ hấp thụ nó? Có vẻ hay đấy, mau đưa tôi thêm nào! Ừ tất nhiên là nhà ngươi sẽ không cho rồi, nhưng ta vẫn sẽ lấy nó, hahaha!\n\nA, bị kẹt rồi. Trò đùa gì thế này? Ha, cô bé tai mèo đằng kia ơi, kéo anh ra với! Hể? Em đang bị ma thú tấn công sao!? Được lắm, cứ để đó cho anh! Cơ mà kéo anh ra cái đã!\n\nĐây là câu chuyện của tôi, người không hiểu do đâu mà tái sinh thành một thanh kiếm, cùng phiêu lưu với một thiếu nữ tai mèo và cùng cô bé trưởng thành hơn từng ngày.', 'https://drive.google.com/uc?export=view&id=1IBBtidSx1k1QgvFKs0qBz2WDK3_DXbYp', 0, 0, '2023-12-05', 'Đang ra', 0),
('46c9965a-ef7d-46c7-b2b2-1b5e3f8321ce', '46151dd5-70b9-4552-af15-7c6f1ab1f643', 'Cô bạn thân nhất của crush đang bí mật tiếp cận tôi', 2, 'Hồi cấp hai, Seko Rento đã phải lòng cô bạn cùng lớp Yosaki Misa, người đã từng giúp đỡ cậu.\n\nRento sau khi lên học cùng cao trung với Misa, đã liên tục thả thính nhưng chẳng thành.\n\nTuy nhiên, Rento không bao giờ bỏ cuộc.\n\nNhững ngày tháng như thế cứ tiếp diễn trong khoảng một năm.\n\nHôm nay, vẫn như thường lệ, Rento lại bày tỏ tình cảm của mình với Misa, và bạn thân nhất của Misa là Hinata Haru tiến đến cản cậu ấy lại để che chở cho Misa.\n\nThế nhưng ba người ấy vẫn trò chuyện bình thường, cũng thường hay về nhà cùng nhau nữa.\n\nTrên đường về nhà, Rento ngồi lại một băng ghế ở công viên gần đó sau khi tách khỏi hai người còn lại tại một ngã rẽ.\n\nKhông lâu sau, Haru, người đáng lẽ phải về rồi lại đến.\n\n\"Vậy thì, hôm nay lại đến nhà tớ nhé.\"\n\nĐây là câu chuyện của ba người họ.', 'https://drive.google.com/uc?export=view&id=1r0SzYGpZy-EejEVwOldk0EXLzEb4ETgz', 2, 0, '2023-12-05', 'Đang ra', 0),
('54787fdb-06f3-40ea-b723-491d7b259c60', '55b4f9aa-b206-4410-95f6-42b505390664', 'Breakthrough with the Forbidden Master', 1, '“So với thời chúng ta, thế hệ bây giờ chả đáng tin chút nào” họ bảo, “Thêm nữa, Chẳng phải nó là con trai của anh hùng sao?” nghe thật phiền phức.\n\nĐã mười năm trôi qua kể từ khi trận chiến giữa con người và ma tộc kết thúc. Tất cả con cái của những người anh hùng đều đã trưởng thành.\nMột trong số họ, Earth, là một thanh niên tài năng, và mọi người đều mong cậu sẽ trở thành một chiến binh như cha cậu và bảo vệ đất nước này, nhưng Earth lúc nào cũng cảnh giác với cái danh hiệu của cha cậu.\n\nMột ngày nọ, Earth đã rất sốc khi tìm thấy thanh kiếm của cha mình, thứ từng được dùng để đánh bại Quỷ Vương, bị giấu kín bên trong căn biệt thự của nhà cậu.\nBởi bên trong nó chính là linh hồn không thể siêu thoát của tên Đại Quỷ Vương và vẫn tiếp tục lang thang khắp thế giới.\n\nVì lí do nào đó, chỉ mình cậu có thể nhìn thấy linh hồn Đại Quỷ Vương và tên Đại Quỷ Vương đã chiếm lấy cậu qua thanh kiếm.\nNgày qua ngày, cậu đều buộc phải cùng chung sống với linh hồn Đại Quỷ Vương, họ đã sống một cuộc đời sẻ chia kì lạ, rồi bỗng nhiên tên Đại Quỷ Vương bảo cậu.\n\n“Ta có mối thù với cha ngươi. Nếu ngươi muốn chống lại cha ngươi và cả thế giới này. Ta sẽ giúp ngươi. Ta rảnh mà.”\n\nEarth nhận được sự chỉ dạy đặc biệt từ Đại Quỷ Vương chỉ để chống lại cha mình và cả thế giới.\nVà rồi, vào một ngày nào đó. Cha mẹ anh hùng, những người anh hùng trong quá khứ, mối tình đầu của cậu, nàng công chúa bạn thuở nhỏ, những thiên tài của thời đại, và cả thế giới đều sẽ chấn động.', 'https://drive.google.com/uc?export=view&id=1MYqPUJcicRZgxDrv81Up7Wekq280kaYD', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('5aec5ba1-f946-47ad-bb80-30e5ac45bc2b', 'c5cb71ae-34a0-4032-b246-4a82557de82d', 'Berserk', 2, 'Trong bối cảnh loạn lạc của chiến tranh, mỗi con người khi sinh ra đều mang một sứ mệnh và vai trò nhất định. Đặc biệt, có những người được xem là có khả năng thay đổi thế giới, họ được gọi là \"God Hand\" và có quyền phán xét mọi việc. Đến một lúc nào đó người mang số mệnh phải đứng trước sự lựa chọn cho cuộc đời mình: đi theo số phận sắp đặt trở thành thành viên của God Hand hay tự tìm cho mình lối đi riêng... Từ đó phát triển ra hai tuyến nhân vật, một đồng ý với những gì số phận sắp đặt, một từ bỏ để đi theo con đường riêng của mình. \n\nNhân vật chính trong truyện là Gatts, từ nhỏ đã bị xem là một đứa bé đem lại xui xẻo vì người ta nói rằng anh sinh ra từ một xác chết. Gatts là một kiếm sĩ với thanh kiếm to bản đeo trên lưng, chỉ với một nhát anh có thể khiến đối phương gãy lìa. Nhưng đồng thời Gatts cũng là một Berserker - những con người chỉ biết chiến đấu điên cuồng với thứ vũ khí khủng khiếp và thường không thể làm chủ được cơn phẫn nộ của bản thân...', 'https://drive.google.com/uc?export=view&id=1TpXCqKJuz_gx0icVklYyfHPo8BBmsTWL', 0, 0, '2023-12-05', 'Đang ra', 0),
('5bce2d96-3ad3-4796-9762-50aefa8e0623', 'db5c3f24-6ff9-40f5-b911-b9f204bf2e99', 'Monster', 2, 'Câu chuyện xoay quanh Johann Liebert, một bác sĩ tài năng nhưng tâm thần không ổn định. Johann đã giết cha mình và bỏ trốn khỏi Đức. Anh ta đến Nhật Bản và bắt đầu một cuộc sống mới dưới cái tên Kenzo Tenma.\n\nTenma, giờ là một bác sĩ phẫu thuật nổi tiếng, cứu sống một cậu bé tên là Johan Liebert, người bị thương nặng trong một vụ tai nạn. Tuy nhiên, anh ta sớm nhận ra rằng Johan không phải là một đứa trẻ bình thường.\n\nJohan bắt đầu gây ra một chuỗi vụ giết người tàn bạo, khiến Tenma phải đuổi theo anh ta trên khắp thế giới. Trong hành trình của mình, Tenma gặp gỡ nhiều người khác, bao gồm Eva Heinemann, một người phụ nữ đang tìm kiếm người chồng đã mất tích của mình; Richard Braun, một thám tử đang điều tra vụ án; và Dieter, một cậu bé bị bỏ rơi.', 'https://drive.google.com/uc?export=view&id=1imu-OaZ1LgWFdIrGkKXZDyWZ5JcxUrY3', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('6aa20a8d-4e1f-4bf9-8333-009aacf0f278', '2769f0a4-979c-4e47-a833-08853cbc696d', 'Bungou Stray Dogs', 3, 'Nakajima Atsushi bị đá đít ra khỏi cái cô nhi viện , không còn nơi nào để đi cũng như không có gì để ăn. Khi đang đứng ở một bờ sông, đang chết đói, anh đã cứu sống được một thằng cha cuồng tự tử. Là Dazai Osamu, và cộng sự của anh ta là Kunikida là thành viên của một tổ chức thám tử đặc biệt. Họ có những năng lực siêu nhiên và chuyên đối phó với những vụ quá nguy hiểm cho cảnh sát và quân đội. Họ đang theo dõi một con hổ xuất hiện dạo gần đây ở nơi đó , và cũng trong khoảng thời gian Atsushi đến thành phố này. Nó dường như là có một sự kết nối nào đó với Atsushi, và khi mọi chuyện đã được giải quyết xong xuôi thì có vẻ như trong tương lai thì Atsushi sẽ gắn bó với Dazai và đội thám tử bí ẩn đó nhiều nữa ...', 'https://drive.google.com/uc?export=view&id=181yy_FzY7wqOydLh005PhXLCgoFy-1lt', 0, 0, '2023-12-05', 'Đang ra', 0),
('89679880-22b1-4cb2-b639-286e4bb17cb6', '9d142816-cf3c-4a7f-b613-b88301c7d2fe', 'Jujutsu Kaisen', 2, 'Câu chuyện xoay quanh Yuji Itadori, một học sinh trung học bình thường. Một ngày nọ, Yuji vô tình nuốt phải ngón tay của Ryomen Sukuna, một chú nguyền mạnh mẽ. Sukuna là một tồn tại đáng sợ, có thể gây ra nhiều tai họa cho thế giới.\n\nYuji quyết định tham gia vào Trường Chú thuật Tokyo để ngăn chặn Sukuna. Tại đây, Yuji gặp gỡ nhiều người khác, bao gồm Megumi Fushiguro, Nobara Kugisaki, và Satoru Gojo.\n\nCùng nhau, họ chiến đấu chống lại các chú nguyền, những sinh vật được tạo ra từ những cảm xúc tiêu cực của con người.', 'https://drive.google.com/uc?export=view&id=1HTBvyulvuC4-6tf5uGdAp-qb0RI6rE-0', 0, 0, '2023-12-05', 'Đang ra', 0),
('92578224-a231-4395-80fe-6d0d425c771d', 'a515d2ed-f992-4a25-b73f-0c3f07743d7e', 'Làm bạn với cô gái đáng yêu thứ hai lớp', 1, 'Một câu chuyện hài lãng mạn ngọt ngào bắt nguồn từ mối quan hệ bạn bè bí mật!\n\nTôi là Maehara Maki, đã không có bạn bè, hay thậm chí là người quen khi bước vào cao trung, cuối cùng bây giờ cũng đã có bạn đi chơi ở ngoài trường. Đó là một cô gái.\n\nCô ấy tên là Asanagi. Đám con trai hay gọi cô ấy là “Cô gái đáng yêu thứ hai trong lớp”.\n\nCứ vào thứ sáu, cô ấy lại từ chối lời mời của bạn thân Amami, và đến nhà tôi chơi.\n\nVừa chơi game, xem phim, đọc manga, vừa uống Coca, ăn Junk Food được ship đến như Hamburger hay Pizza. Đó là khoảng thời gian ăn chơi của tôi và Asanagi-san, nhưng nó cũng là một bí mật rất quan trọng.', 'https://drive.google.com/uc?export=view&id=1tLHroHjqaepr2HRW4LVs5EGtI5cN-qgx', 0, 0, '2023-12-05', 'Đang ra', 0),
('9402e162-4293-45b8-b8c9-07ab26c8717d', '55e4fa89-2503-4e1a-b519-136d17dd61ce', ' Fullmetal Alchemist', 2, 'Câu chuyện xoay quanh hai anh em nhà giả kim, Edward Elric và Alphonse Elric, những người đang cố gắng phục hồi cơ thể của mình sau một nỗ lực thất bại nhằm hồi sinh người mẹ của họ bằng thuật giả kim, một hình thức hóa học cho phép người sử dụng thao túng vật chất ở cấp độ nguyên tử. Cuộc tìm kiếm của họ đưa họ đi khắp thế giới, nơi họ gặp nhiều người và thử thách khác nhau.', 'https://drive.google.com/uc?export=view&id=15CJfkx_oumxYkVSFrF0h5eQnB_wxP1XP', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('a0b443f5-0b7d-49e8-97c9-77154584055b', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Tiếng gà tinh sương', 1, 'Ở cái tuổi sắp về hưu bỗng dưng tính nết suy nghĩ của Nhuận thay đổi khác thường. Chẳng biết khi nào, anh trở nên bảo thủ đến mức ích kỷ, độc đoán tới mức bản thân cũng không chấp nhận được, nhưng ở khía cạnh nào đó anh lại coi trọng tình cảm hơn cả mọi tính toán logic và lý lẽ thông thường. Hay như ngọn nến sắp tắt, con người ta phải sáng lên một lần với giấc mơ bừng sáng, thức tỉnh?', 'https://drive.google.com/uc?export=view&id=1RtUECt_LvQnDGh-rKNxj8ldfQAuBrHzw', 1, 0, '2023-12-05', 'Hoàn thành', 0),
('acfd83ac-2789-40ce-97b5-709675664ec0', '1378043a-86be-417d-a6b2-a93821bcf625', 'Dies irae', 204, 'Những trận chiến ở các vương quốc cổ đại chẳng là gì so với những trận chiến trong lớp học! Thức tỉnh sau tình trạng ngưng trệ ma thuật sau một nghìn năm, Chúa tể bóng tối Leonis đột nhiên thấy mình trong cơ thể của một cậu bé mười tuổi! Anh nhanh chóng gặp Riselia, một cô gái đang đối đầu với Void, những sinh vật gần như đã tiêu diệt loài người. Quyết tâm khám phá những bí ẩn của kỷ nguyên mới kỳ lạ này, Leonis đăng ký vào Học viện Excalibur, một ngôi trường đào tạo học sinh chiến đấu chống lại những con quái vật bí ẩn này. Liệu các Void có thể có mối liên hệ nào đó với quá khứ của Leonis?', 'https://drive.google.com/uc?export=view&id=1jzqvGrORt_a1wpKHyMXagS0Kbg61IBB7', 1000000, 100000, '2023-12-05', 'Hoàn thành', 0),
('add1d93f-819a-45ef-afd6-e3267bc6bb1a', '2e65ad4c-ed47-4f97-9086-8a9a21d1f0f9', 'Phá Đảo Dị Giới Cùng Nữ Thần Không Tín Đồ', 1, 'Makoto Takatsuki là một học sinh trung học bình thường và game thủ RPG hạng nặng. Tuy nhiên, \"sự bình thường\" đó bỗng nhiên biến mất khi cả lớp của cậu dính vào một vụ tai nạn xe buýt và bị dịch chuyển đến thế giới khác! Các vị thần quyền năng cai trị vùng đất kỳ lạ của ma thuật và quái vật này. Tất cả mọi người khi đến đều được ban phước với các chỉ số mạnh mẽ lẫn kỹ năng độc đáo. Chà, không hoàn toàn như vậy. Chỉ số của Makoto hóa ra rất thảm hại và kỹ năng của cậu là siêu yếu so với các bạn cùng lớp... Cậu thậm chí còn bị mắc kẹt với tư cách là một pháp sư tập sự. Tệ hơn nữa, cậu chỉ còn sống được thêm có mười năm! May mắn thay, Makoto sớm gặp một nữ thần nhỏ tên là Noah, người xuất hiện trong những giấc mơ của Makoto và yêu cầu cậu trở thành tín đồ đầu tiên của mình. Với sự giúp đỡ từ chúc phúc của Noah và một thần khí, Makoto tìm cách trở nên đủ mạnh để có thể giải cứu nữ thần khỏi ngục tối nơi cô bị mắc kẹt. Thông qua việc luyện tập chăm chỉ và sử dụng những kỹ năng yếu kém của mình bằng những cách thức \"không chính thống\", Makoto đã chứng minh được rằng, ngay cả khi quẩy ở độ khó cao nhất, một người chơi RPG vẫn sẽ luôn quyết tâm phá đảo game cho bằng được!', 'https://drive.google.com/uc?export=view&id=1pbnBXdRJRAzZEC8MMwZ2F2Xj9YHam26W', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('afbaa18b-5d6c-4407-8855-4cf099ec6d31', '79de059d-c2ee-4501-ad84-ee331597930d', 'My Hero Academia', 2, 'Câu chuyện xoay quanh Izuku Midoriya, một cậu bé sinh ra trong một thế giới nơi 80% dân số đều có siêu năng lực, được gọi là \"Quirks\". Izuku mơ ước trở thành một anh hùng, nhưng cậu không có Quirk.\n\nMột ngày nọ, Izuku gặp All Might, anh hùng vĩ đại nhất thế giới. All Might nhận ra tiềm năng của Izuku và quyết định truyền Quirk của mình cho cậu.\n\nIzuku được nhận vào Học viện U.A., một trường dành cho những người muốn trở thành anh hùng. Tại đây, Izuku gặp gỡ nhiều người khác, bao gồm Katsuki Bakugo, Ochaco Uraraka, và Shoto Todoroki.\n\nCùng nhau, họ chiến đấu chống lại những kẻ xấu và học cách trở thành những anh hùng thực thụ.', 'https://drive.google.com/uc?export=view&id=1gw82bcoq6zD-I-m6PzoPw7gh7bJPQ3mK', 0, 0, '2023-12-05', 'Đang ra', 0),
('b16a0928-b756-4ec1-ad98-7697a2d464ca', '86387076-e579-4f45-9382-7315abb5b9c0', 'Vinland Saga', 2, 'Vinland Saga bắt đầu với việc Thorfinn Karlsefni, một chiến binh trẻ tuổi, chứng kiến cha mình bị giết bởi Askeladd, một thủ lĩnh Viking tàn nhẫn. Thorfinn thề sẽ trả thù cho cha mình và gia nhập băng đảng của Askeladd.\n\nDưới sự dẫn dắt của Askeladd, Thorfinn trở thành một chiến binh mạnh mẽ. Anh cũng gặp gỡ và chiến đấu với nhiều người khác nhau, bao gồm cả người Viking, người Na Uy và người bản địa.\n\nTrong hành trình của mình, Thorfinn dần dần thay đổi. Anh bắt đầu hiểu ra rằng bạo lực không phải là câu trả lời cho mọi vấn đề. Thorfinn cũng bắt đầu mơ về một thế giới hòa bình, nơi mọi người có thể sống cùng nhau trong hòa bình.', 'https://drive.google.com/uc?export=view&id=1V5uIWD6fyX0SQL9Ohqq99MTcYwb1iwHH', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('bb4a395d-e831-462a-b31e-0b906ac22c6e', '2d1b7d4c-da38-4dad-8279-6f359f4938fe', 'SOLO LEVELING - THĂNG CẤP MỘT MÌNH', 1, 'Một cuốn tiểu thuyết mạng có tên \"Ba cách để sống sót trong một thế giới đổ nát\" đã được viết và xuất bản trong suốt một thập kỷ, và Kim Dokja - nhân vật chính của chúng ta là độc giả duy nhất theo dõi nó đến tận cùng. Vào ngày anh đọc được chương cuối cùng của bộ truyện, cũng là ngày thế giới của anh hoà làm một với mở đầu của bộ truyện ấy.\nChuyện gì sẽ xảy ra? Hãy cùng đón xem!', 'https://drive.google.com/uc?export=view&id=1mxxvRTiLzrR63GqaxF17nDSI55W3V0gO', 0, 0, '2023-12-05', 'Đang ra', 0),
('c910caa3-01a4-43fa-a596-2748a118554f', 'fcb12278-8515-4a29-811f-58ea287af8f2', 'Sinh Tiếu Thủ Hộ Thần', 11, 'Truyện kể về năm 2xxx, có một lưu manh tên là Tề Nhạc do ”bị đá” mà đánh người gần chết. Vì sợ tội nên chạy lên Tây Tạng. Ai ngờ được một vị ”tiểu tăng” bảo hắn là một trong 13 Sinh Tiếu Thủ Hộ Thần .\n\nSinh Tiếu Thủ Hộ Thần gồm: Kỳ Lân (đứng đầu trong Sinh Tiếu Thủ Hộ Thần) và 12 con giáp: Tử Thử, Sửu Ngưu, Dần Hổ, Mão Thỏ, Thần Long, Tị Xà, Ngọ Mã, Vị Dương, Thân Hầu, Dậu Kê, Tuất Cẩu và Hợi Trư.\n\nSau khi thức tỉnh năng lực của mình, Tề Nhạc bắt đầu tu luyện và tìm kiếm 12 Sinh Tiếu Thủ Hộ Thần còn lại, chống lại những thế lực muốn xâm lấn phương đông….', 'https://drive.google.com/uc?export=view&id=1JvegrJPc6-mLpH9NrSflRwhPC1kyANf7', 0, 0, '2023-12-05', 'Đang ra', 0),
('dcc13d3d-b9b5-47b3-a86e-5dc62c4b3029', 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0', 'Naruto', 3, 'Naruto là một cậu bé mồ côi, bị chính làng ninja của mình xa lánh vì cậu là vật chứa của Hồ Ly Chín Đuôi, một con quái vật đã từng tấn công làng và giết chết nhiều người. Naruto lớn lên trong sự cô đơn và bị bắt nạt, nhưng cậu vẫn luôn mơ ước trở thành Hokage, người đứng đầu làng.\n\nMười hai năm sau khi Hồ Ly Chín Đuôi tấn công làng, Naruto bắt đầu học tập tại Học viện Ninja. Tại đây, cậu gặp gỡ và kết bạn với Uchiha Sasuke và Haruno Sakura. Sasuke là một thiên tài ninja, luôn khao khát sức mạnh và trả thù cho gia đình mình. Sakura là một cô gái xinh đẹp, thông minh và luôn ngưỡng mộ Sasuke.\n\nBa người bạn cùng nhau học tập và rèn luyện, đồng thời trải qua nhiều cuộc phiêu lưu mạo hiểm. Trong một nhiệm vụ, Naruto đã cứu mạng Sasuke và được cậu coi trọng. Sasuke cũng dần dần mở lòng với Naruto.\n\nTuy nhiên, cuộc phiêu lưu của họ cũng gặp phải nhiều khó khăn. Orochimaru, một ninja phản bội, đã tấn công làng Mộc Diệp và bắt cóc Sasuke. Naruto đã cùng với Sakura và các đồng đội lên đường giải cứu Sasuke.\n\nTrong cuộc chiến với Orochimaru, Naruto đã bị Sasuke đánh bại và bị thương nặng. Sasuke cũng đã quyết định rời bỏ làng Mộc Diệp để theo Orochimaru.\n\nNaruto rất đau lòng khi mất đi Sasuke. Cậu quyết tâm trở nên mạnh mẽ hơn để có thể đưa Sasuke trở về. Naruto bắt đầu luyện tập với Jiraiya, một trong những Sannin huyền thoại.', 'https://drive.google.com/uc?export=view&id=1P6-WHSMENG-sC68hM_lCvL5PxXjl4Sin', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('e3602872-9d06-4821-8a70-d40917e59e5a', 'c730887f-0e49-47f1-9e3d-b61738ad33b8', 'Những Vì Tinh Tú Lấp Lánh Trong Thế Giới Ngày Mai', 5, 'Vì mục tiêu của Honoka, cả hai quyết định hợp tác với nhau, nhưng...', 'https://drive.google.com/uc?export=view&id=1YFLV3Rzre940d5mKDOvJuJbsFx4POr8Q', 1, 0, '2023-12-05', 'Đang ra', 0),
('ebccfe77-bb3c-48fb-8558-740063c98377', '98cb7948-5486-419e-9b44-6c17a528562b', 'Câu chuyện của một lính đánh thuê Thú nhân', 9, 'Trong thế giới vô danh sắp kế, có hai chủng tộc Một là Loài người. Và còn lại là Thú nhân.Rush, một Thú nhân, được sinh ra giữa Chiến tranh Trăm Năm, bắt đầu là hệ quả của cuộc tranh cãi giữa hai anh em.Anh đã chiến đấu không ngừng nghỉ với tư cách là một lính đánh thuê, nhưng đột nhiên người lãnh đạo bang hội như thế cha anh qua đời, và chiến tranh kết thúc trước khi anh học được từ tự do, một đứa trẻ đã xuất hiện trước mặt anh Một câu chuyện khác về Thú nhân đánh thuê bắt đầu từ đây.', 'https://drive.google.com/uc?export=view&id=1ya0Z90_uFsevaNV9oAboAD0z8ML88hu7', 0, 0, '2023-12-05', 'Đang ra', 0),
('f0b49264-445d-4adf-8946-57a168b8bb72', '92e1ab4d-5e93-497d-8e5c-77f14f589a0f', 'Bóng Hình Tội Lỗi', 3, 'Văn án:\n\nÁnh sáng và bóng tối, tội lỗi và đạo đức, thiện và ác, đúng và sai.\n\nBất cứ khi nào nhắc đến hai chữ “nhân tính” thì sẽ không còn cái gọi là ranh giới kia nữa.\n\nCô chính là cái ranh giới mơ hồ kia, là bóng tối sinh ra từ ánh sáng.\n\nCô chưa bao giờ nghĩ rằng bản thân như thế này, một ngày kia, lại phải chịu ảnh hưởng của người đó, quyết tâm muốn làm ánh nắng ban trưa, nỗ lực chiếu sáng tất cả hắc ám.', 'https://drive.google.com/uc?export=view&id=1fYJwq__d556o5Cw3DPtx_cq-zqufMq4Q', 0, 0, '2023-12-05', 'Tạm dừng', 0),
('f25da911-2688-422d-8f60-1ad6363a7f58', 'd7b188dd-6986-4c4a-921f-66a00f1d5677', 'Dead Note', 2, 'Death Note là một bộ truyện trinh thám, tâm lý, siêu nhiên. Câu chuyện xoay quanh cuộc đấu trí giữa Light và L, hai nhân vật có trí tuệ và tài năng xuất chúng.\n\nCốt truyện của Death Note rất hấp dẫn, đầy kịch tính và bất ngờ. Bộ truyện cũng đề cập đến những vấn đề triết học sâu sắc, chẳng hạn như cái thiện, cái ác, và ý nghĩa của cuộc sống.', 'https://drive.google.com/uc?export=view&id=1uC8c73MCVo4pwzBHS2m7mFBGtijzfuz2', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('fee10c45-3421-480c-8867-85ff7a0735c2', '301885d4-b933-43c1-acd8-b44f0d702bf3', 'Batman', 1, 'Anh hùng giấu mặt batman chỉ xuất hiện trong bóng tối.', 'https://drive.google.com/uc?export=view&id=120GDV37lg9a1SJemRSE5rRw_ttggWnu-', 0, 0, '2023-12-05', 'Hoàn thành', 0),
('ffb46d8a-53d2-4c9c-a6b1-d03c8b3b7a2a', 'd9a5b163-cf1f-4139-bd1f-323b813a7242', 'Thành gươm diệt quỷ', 2, 'Truyện bắt đầu với việc gia đình của Tanjirō bị quỷ sát hại, chỉ còn lại Nezuko, em gái của cậu, sống sót nhưng lại bị biến thành quỷ. Tanjirō quyết tâm trở thành kiếm sĩ diệt quỷ để tìm cách chữa lành cho Nezuko và trả thù cho gia đình mình.\n\nTrên hành trình của mình, Tanjirō đã gặp gỡ và sát cánh cùng những kiếm sĩ diệt quỷ khác, cùng nhau chiến đấu với những con quỷ hung ác, bảo vệ con người khỏi sự xâm hại. Truyện mang đến cho người đọc những giây phút hồi hộp, căng thẳng khi theo dõi những trận chiến ác liệt giữa các kiếm sĩ diệt quỷ và quỷ.', 'https://drive.google.com/uc?export=view&id=1aT5H-8ywr1quPyKhZp6Mfg3KQ8EyP1ib', 1, 0, '2023-12-05', 'Đang ra', 0);

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
