-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2023 lúc 04:52 PM
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
('', 'a665d83f-dd81-421b-85f9-45caae620d90', 'Chương 3: Liệu đây là kết thúc ', '1Ed-skiKUo1vcaFOPrg7WoWrXe7i4Pwrg', 3),
('1', '1', 'hay lắm', 'OMAE CỐ TÌNH CHỬI WATASHI DESU KA? TỪ TANJOUBI ĐẾN KONNICHI, WATASHI ĐÃ ĐƯỢC OSOWARU NÊN HITO, WATASHI KHÔNG BAO GIỜ XÚC PHẠM DARE CẢ, OMAE LÀM VẬY LÀ TONDEMONAI DAYO.TUY WATASHI CÓ HƠI WIBU SUKOSHI, DEMO WATASHI LUÔN ĐẶT NIỀM TIN VÀO ANIME VÀ SỐNG ĐÚNG KIỂU TRONG ANIME, ANIME LÀ 1 THỨ GÌ ĐÓ CAO CẢ HƠN CẢ GENJITSU, WATASHI ĐÃ LÀM THEO VÀ HỌC TẬP THEO TỪ ANIME, WATASHI ĐÃ ĂN UỐNG NGỦ NGHĨ THEO ĐÚNG GIỜ CỦA ANIME MÀ KHÔNG LÀM PHIỀN DARE, ĐÔI LÚC WATASHI CÓ CHỬI VÀO OMAE NO KAO NHƯ INU, DEMO SAU ĐÓ BLOCK NÓ THÌ WATASHI KHÔNG LÀM VIỆC ĐÓ NỮA, MAIKAI MAIKAI WATASHI MUỐN CHỬI DARE WATASHI ĐỀU COI ANIME VÀ GHI NHỚ RẰNG KHÔNG NÊN CHỬI NGƯỜI ĐÓ NỮA !! WATASHI ĐÃ CỐ GẮNG HIỀN HẬU ĐẾN MỨC MUỐN THÀNH HOTOKE RỒI MÀ KARERA VẪN KHÔNG ĐỂ WATASHI YÊN LÀ SAO, YABAI WATASHI KHÔNG NÊN GHI RA NHỮNG TỪ NÀY DEMO THẰNG YAROU SÚC VẬT NÓ LÔI WATASHI NO NA RA ĐỂ CHỬI, THỨ AHO SHUKU SEIBUTSUGAKU KAGAKU BUNGAKU, VẬY LÀ ĐỦ, ĐỪNG ĐỂ WATASHI TRIGGERED VÀ WATASHI DẠY OMAE CÁCH ĐỂ HỌC TẬP VÀ LÀM THEO TẤM GƯƠNG CỦA ANIME NỮA!, THẾ NHÉ INU WA KUSO O TABERU', 1),
('100', '9', 'Xiao Ran was perplexed. Su Xuelan continued her interventi…', '1hVvzGyf6kNN0CgECb7jsOFs2cSuFAjsC', 70),
('101', '9', 'Xiao Ran was perplexed. Su Xuelan continued her interventi…', '1Xz0rXMOzk8PYneUPfk5Bks5vb50ogNkK', 71),
('102', '9', 'He wore a mask. He was aggrieved.', '1CxdvdJIViWD_jDh8EiBeKKTF36sYdDDq', 72),
('103', '9', 'This time, he took the initiative.', '1cg2GwG3vWJnMD5Qy6cFH5F5bXMIBt4TY', 73),
('104', '9', '70% is mine, and 30% is yours.', '1sF85WMaNgxl04GvItuf7Qm7tJIwKN6om', 74),
('105', '9', 'I can only find you to vent my anger…', '1hgPQUhGoWNZSm3uRz6EfOzM1LtE3UmAf', 75),
('106', '9', 'Let Xiao Ran take the initiative to stretch his face over …', '1NDhZFZNqMC1dL6C-LqAeyuHEtOxzL0Wf', 76),
('107', '9', 'Why...why let me watch this scene with my own eyes!', '1SzHfatndEnO_KkAFI7DGuA-d9-8zqE3l', 77),
('108', '9', 'Su Xuelan is feeling bitter…', '19xzRRtdw0z1xiGS4MhLhVhgvHtYxCc4P', 78),
('109', '9', 'I was teased by a bad woman and even my heart pounded viol…', '1LqRd7wL77ztjtAhxZUfpoI48xurGY5Mo', 79),
('11', '2', 'gặp gỡ', 'chơi naruto', 5),
('110', '9', 'The Person Leaning In My Arms Is… You', '1J-EW-0mPxE4Zc9AzglQHmCnzf6IZXGAX', 80),
('111', '9', 'Mingyuan, you seem to be different from that night?', '1-cKVn7SmVF9NGkhw2jY5tOerdpDbcRzx', 81),
('112', '9', 'Shouldn\'t you have been… acting before?', '183tqMYE6cVQ05WZqIvAmkNYEzsyBynlr', 82),
('113', '9', 'Finished? Was it guessed? Xia Xueqi, now you are the prey!…', '1HkwDGFqwKV_GU7tl9n6NV6UNCS2EoyCG', 83),
('114', '9', 'Finished? Was it guessed? Xia Xueqi, now you are the prey!…', '1Jlu5140wHZjW1mnglI0YMOD1LThICD8G', 84),
('115', '9', 'Xia Xueqi throws herself in his arms? The accident happene…', '1spTBCGeE65dVUfhBAquCB1So_GcW_F5P', 85),
('116', '9', 'I, Su Mingyuan, am indeed the final winner!', '14MVDi5x9tPb45hqbNK2ZqMOkzIMvLoac', 86),
('117', '9', 'Xuelan, don\'t be angry, you have to take care of the overa…', '1wyp1SWj8Y-PtGQqIQaG-PoylMkmjw0dn', 87),
('118', '9', 'I changed from an actor to a director?', '1T45uJ2O8zHW_v9FlufsrdnYWONZlF7Uu', 88),
('119', '9', 'Does Xiao Ruoruo have that charm?', '1MCA3cAI0CsuuzaHeWuWu7EfFaDFp7J_y', 89),
('11cd5e17-ef26-4f18-b982-3b32b39b9d61', '6f393334-13ef-45d4-b373-7c9ddfdbc1b4', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('12', '2', 'tha naruto', 'bỏ qua tất cả', 8),
('120', '9', 'Murong Hongxue wants to curse', '1O7ICX-OEfHDUmf8B46_QC1MVvhILFxsX', 90),
('121', '9', 'If you want, I don\'t mind… (1)', '1-IR0RkcmcVzhUtyvTzRb10vn2PDbYiuk', 91),
('122', '9', 'If you want, I don\'t mind… (2)', '1VperQut35Jn9m8ji5BReuHgAEMOXPRRu', 92),
('123', '9', 'Patience (1)', '1PnjPDiVMH8eaoBivq114L4m0wOMYLGwE', 93),
('124', '9', 'Patience (2)', '1rexYnK5o2xTxYFt1E2CdE56WX1DE1fo-', 94),
('125', '9', 'If I get a failing evaluation again, I, Su Mingyuan, will……', '1Qq_7uJ1BiGpRT0R0Dv8b7eag7tP3EZ_U', 95),
('126', '9', 'If I get a failing evaluation again, I, Su Mingyuan, will……', '1rmg_0OI1L4nwQ6eMcGDCgt0daQC9kDH4', 96),
('127', '9', 'Woohoo, I, Su Mingyuan, also encountered a day when I got …', '1vcPE0qMThfAQl2lefrb2rlWApDMAppBD', 97),
('128', '9', 'Woohoo, I, Su Mingyuan, also encountered a day when I got …', '1vBHTJvpCTNC42WPxeX__FtVpB1vF1oZu', 98),
('129', '9', 'The Rebellious Son! The Rebellious Son! (1)', '18gK8ag6YvywE2AzYkoYFlBL4G-QaL842', 99),
('13', '1', 'uchiha1', 'bỏ qua sasuke', 0),
('130', '9', 'The Rebellious Son! The Rebellious Son! (2)', '11BY3jB-nQx2IfbpXAzAin3C42jER5HYe', 100),
('131', '9', 'Your final evaluation is..(1)', '1gSwxqfqILsa-ezkXy7Iad3s-x4IJTHSR', 101),
('132', '9', 'Your final evaluation is..(2)', '14ajkXJ_q9FgaNyUX0dLCVrRiziBcAYBi', 102),
('133', '9', 'Your final evaluation is..(3)', '1Kv9rFD_Ysy3yjGHMleUrF9U8K5Kw1vPc', 103),
('134', '9', 'Son, your Dad, I\'m here to comfort you!', '1gSFAtZL5iqVeSbxmfQtGYwxez3_ZaN-P', 104),
('135', '9', 'Junior Brother, no one has ever treated me so well since I…', '11RiA1YNIfPLllF5Y3-FCKQyAFfwt1P1e', 105),
('135d9561-d162-4f29-ab4b-606215203f79', 'b810773c-32b3-4fa9-bdcf-47b3d6cc3400', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('136', '9', 'Do you know who I wrote this poem for? (1)', '1eiKpLxPlP0MuS_oQAkZWCXvzj1OkGFn2', 106),
('137', '9', 'Do you know who I wrote this poem for? (2)', '1pC_v1jZHeWctDKitzu4PvqEt2y71gbgH', 107),
('138', '9', 'Who made you the light that illuminates me in the dark? (1…', '1-mLkd0CzhvB_KjeGwJYfF7aPBjgLzC3r', 108),
('139', '9', 'Who made you the light that illuminates me in the dark? (2…', '1Y9ozjJ58Omu__qxwUtokYQz79-KygpT4', 109),
('14', '1', 'uchiha2', 'giết dòng họ', 0),
('140', '9', 'Knight, do you like me?', '12iZIEF-Kw2UjI7coA3U4s-sOaZN4pZg7', 110),
('141', '9', 'Hongxue, You Are the Star, You Are the Lotus', '18wA4Ee-r7fuGFHqfneBaXvglOxfTa8X5', 111),
('142', '9', 'Xia Xueqi is always one step late (1)', '1H4VET54WeiARwgAsvWt-vbnCLjKS-kVy', 112),
('143', '9', 'Xia Xueqi is always one step late (2)', '12bCRCwjkOdrwzTuw5QpLmdyyrXkFrTRG', 113),
('144', '9', 'Traces and smells of Mingyuan are mine! (1)', '1vAsWGTz2iSA9FbKWBrl9mAd26j-4Umrk', 114),
('145', '9', 'Traces and smells of Mingyuan are mine! (2)', '1VaTNLzaB_kZ9wBgAD19G3V7O-6jzv_Nk', 115),
('146', '9', 'Son, daddy can only help you here (1)', '1Q1XK4NrocK2ZwXyAMSwsfsKV465VW6i-', 116),
('147', '9', 'Son, daddy can only help you here (2)', '1RQrACWrjcewaCLK0YN901vcRa8K5SDPd', 117),
('148', '9', 'Between us... who will fall in love with whom first? (1)', '1ZeqV3uyjiXQJs4G7APwyRM5X62LsDgKt', 118),
('149', '9', 'Between us... who will fall in love with whom first? (2)', '1iS4dK1wVkDp-c-dsZ5S0LFrGXqfDhWjb', 119),
('14b00227-f163-4ad5-9708-68172ee6925a', 'dea7016b-4a48-4ffb-8e0e-6efc770e0b54', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('15', '1', 'Chuong 4', 'Noi dung chuong 4', 0),
('150', '9', 'Ruoruo, who began to become more active (1)', '11XSL6n31cvweFodonRKBqtUTQiHEXd52', 120),
('151', '9', 'Ruoruo, who began to become more active (2)', '1Wu7nDd3SGZv7M4MDSglyncziQRPnWVu1', 121),
('152', '9', 'Why is the soup she\'s drinking so delicious?', '1_qjMugzArDcryOnWT0Bp1PJj_5RWZr4A', 122),
('153', '9', 'So I am the prey?', '1L3huyY4Cz_pNU0rHAE7Jf-Jn01TXkVIa', 123),
('154', '9', 'Xiao Ran, Xueqi is also a name you can call? (1)', '1C0iu9-QhUaJ1H4AuEXSbmoD1tbsebpne', 124),
('155', '9', 'Xiao Ran, Xueqi is also a name you can call? (2)', '1BaOaAKaYaMlIvauzvH669Z-06NFKFWHl', 125),
('156', '9', 'I know that Xueqi is protecting me! (1)', '1l_dFDkYC7GKw-kfALGBPWxJt_CHAF0cP', 126),
('157', '9', 'I know that Xueqi is protecting me! (2)', '1lQLq4i9RkszwLAQrPuKKkshg8tlEBPTQ', 127),
('158', '9', 'Xia Xueqi and Su Mingyuan are in love, Xiao Ran is...', '12S1GoCuaS8wTtmQ1QURn_ywy4JSTWyTs', 128),
('159', '9', 'Your evaluation in my heart has become higher again! (1)', '1o8yVI8uHwio8UZNAxN_dxGuyfrOxSz1R', 129),
('16', '1', 'Chuong 5', 'Noi dung chuong 5', 0),
('160', '9', 'Your evaluation in my heart has become higher again! (2)', '1aQ8Y_LSyYgpA_jS3x4DjwNdTWgHsZzXE', 130),
('161', '9', 'Someone stole my baby, so I went to play with them (1)', '1dJavjQrCYBW4J4LfYK3hk3GcIvznCOEe', 131),
('162', '9', 'Someone stole my baby, so I went to play with them (2)', '1WVS5-bh-RhiEsrczEM_LRsxaKg3EGkpa', 132),
('163', '9', 'It belongs to me, why ......(1)', '1MVxMrrvPes1H5GvIyg8TkbOeFgbRTwqa', 133),
('164', '9', 'It belongs to me, why ......(2)', '1ptmlledY9DQMzdDxDH6LnQJtU1EPMatJ', 134),
('165', '9', 'Xia Xueqi wait! (1)', '1A5uw5aB7k1SN47JV9cAx9SpSKo1pKOMN', 135),
('166', '9', 'Xia Xueqi wait! (2)', '1Hh6C0PucNfscTCJG7OIL9KokeLi5CiR1', 136),
('167', '9', 'Xia Xueqi wait! (3)', '1OWYxeWNDAOW861JJ-UH_VTmUYW4URQgy', 137),
('168', '9', 'Then… What about mine?', '1mTSOfoOKgICbPPUKAcL4j44Nv0zQcg4U', 138),
('169', '9', 'Digging a hole and burying myself', '1FBdXyhJ4DxNs14ubNXkCfSKw78jqxoGv', 139),
('17', '1', 'Chuong 6', 'Noi dung chuong 6', 0),
('170', '9', 'You have stopped pretending and choose to show your sharp…', '1ku4eWBeM3JKf0MZfH-Nj4ZTJ4_lFpJ8I', 140),
('171', '9', 'I wish you and Mingyuan to become a couple (1)', '1aknPBq2W2soGOHpLzEgJidG7eT57JSQ3', 141),
('172', '9', 'I wish you and Mingyuan to become a couple (2)', '146wpvuUl37ESnSsbTtoSB-cBtCOCH2zk', 142),
('173', '9', 'Tonight\'s moonlight... so beautiful', '1cUm6dKQtot3MNiWqEnrtGc4iIkplOiim', 143),
('174', '9', 'Different people watching the same fireworks', '1PdhKrz3nM4WELYXbT_H8SzqUK5xQgoO6', 144),
('175', '9', 'He has begun to look like a villain (1)', '1ElmnuYmstQIHfwWyX4TCXH-H0QnmyNU7', 145),
('176', '9', 'He has begun to look like a villain (2)', '1FJAwyBTBufo9Skhu7ABPGG7ONQTNn3Hq', 146),
('177', '9', 'My knight, what if my love for you is seen by her?', '12Okjaw9SIZoRMkseMBKsW44cgdTGzbGw', 147),
('178', '9', 'I have become like Su Xuelan?', '1vWuGVZx-G3QAR3-tkCp4yJe8GoNtoyxT', 148),
('179', '9', 'She is your love, and became an outsider?', '1DLg-ZmhWOaW9LueDl7ucY-VHLvmNOrOL', 149),
('18', '1', 'Chuong 7', 'Noi dung chuong 7', 0),
('180', '9', 'Xiao Ran is still on his way (1)', '1NdeDLf19SQ24yu2rc5hoN0VsrbC4rxhG', 150),
('181', '9', 'Xiao Ran is still on his way (2)', '19FUm7SUzLlGqvyZjG93oc4CJgg4OgCa5', 151),
('182', '9', 'You just said... no one can save her? (1)', '1nee9sb0VG-K1_3nbIZNWGs8yz7pwgRV-', 152),
('183', '9', 'You just said... no one can save her? (2)', '1wYZsxbT65jEQW_6FH8OzTwImunD3N5Tu', 153),
('184', '9', 'You are unfilial son! (1)', '1iGXiyyJLUxiJysHkcrYCftb2BKAJHBXG', 154),
('185', '9', 'You are unfilial son! (2)', '1z9UOHyeDgHZuLYdgVwhvoD-UgpTsHt3H', 155),
('186', '9', 'She was just thanking her junior brother (1)', '13CS40HJsiGS784saL1WGypsp5GcoqcqJ', 156),
('187', '9', 'She was just thanking her junior brother (2)', '1rBc0WWLcMB2yATM4RQlMne471blQ4a8F', 157),
('188', '9', 'I\'m not painting, I\'m just fishing (1)', '1_sqqftxD23XIexs3fuHdXFaX0lZZaaG7', 158),
('189', '9', 'I\'m not painting, I\'m just fishing (2)', '1pPr5TnIZPNsmOtQ5sE7Apjorl0VKSEZw', 159),
('19', '1', 'Chuong 8', 'Noi dung chuong 8', 0),
('190', '9', 'Do you know that a father\'s love is like a mountain? (1)', '1-qefceacCglFabIulkgTI2EDJbJv4hMj', 160),
('191', '9', 'Do you know that a father\'s love is like a mountain? (2)', '1TjDKLHpC2NXaWv9twFGUBIaIxbGZ2_7a', 161),
('192', '9', 'I want to save her (1)', '15yD5jfY1Q-FrtEdjy4DMk5PQi8AUalCG', 162),
('193', '9', 'I want to save her (2)', '1JedPkqIoye7hK2bj2Fioid2vBZ4IKniy', 163),
('194', '9', 'Why did you go to my junior brother?', '1wGaEEogOL-IXcUiWNm-EJY3bEiNyz3Wp', 164),
('195', '9', 'Why are you unwilling to look at me! (1)', '1MAs9g4_L8QEpX6PViEbQ7jEhjiPKAe8Q', 165),
('196', '9', 'Why are you unwilling to look at me! (2)', '15PW86cS4Y2SZ0JibLjOdEkApVqL46knV', 166),
('197', '9', 'Who is in control? (1)', '1Z8EgESMs6BuhNUggTJnxxCWWjs_RJt-p', 167),
('198', '9', 'Who is in control? (2)', '1kSyzPPfhUOkgr814xJdSNfsup0IE6lc-', 168),
('199', '9', 'Liu Mengning? How can my home be so fragrant!', '1tcVtTZoLZdUb8Sj21wQhIuKqUT07x_ut', 169),
('1bf31787-4875-4317-95b5-5c58fa1bda70', '6f56d8f7-8d68-49f8-a2cc-306b25d7e898', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('2', '1', 'dở lắm', 'lần sau', 3),
('20', '1', 'Chuong 9', 'Noi dung chuong 9', 0),
('200', '9', 'Tomorrow, I will completely wash away the shame!', '1qyOYad41ob3PHI8aQtcREHlswlKkfQ_r', 170),
('201', '9', 'Do you just want to be my friend?', '1q0yC_pMtRA8i9Y02gpom56OUsfdQo-XU', 171),
('202', '9', 'In front of my move, you will have to fall down obedientl…', '1IAgaxEOHTl3mfxz4fOwjCTx9xWETKSVs', 172),
('203', '9', 'I want you to always remember this taste.', '1V7wEsz8k59Zdx8RmJN36knjPZus-FKvv', 173),
('204', '9', 'I will definitely get the perfect evaluation!', '1-y5jjlqnb0rWoguUzSwi3znOa-9wrbeu', 174),
('205', '9', 'This is awesome!', '1SMUasFyNKbevYtM86vx9Ee-8tpc9nq4o', 175),
('206', '9', 'Mingyuan, my Mingyuan...', '1GljwinawIZPRzB4o3cxUnEk4A3nsVOX_', 176),
('207', '9', 'Look at me, you can\'t even say half a word with this litt…', '1rgaUWSVTFeRuZzgsOIJ5O7AzDL3CB18b', 177),
('208', '9', 'Look at me, you can\'t even say half a word with this litt…', '1tKXvpU4O2uxMt8z2UETrv1tslmLRiUuP', 178),
('209', '9', 'Su Mingyuan revealing his temper?', '1Ef3oZSoUIEPes8PXUSqXej7pYEw90Gzk', 179),
('21', '1', 'Chuong 10', 'Noi dung chuong 10', 0),
('210', '9', 'Is this the aura of cold queen? (1)', '1fR8cYwPWYJSEw82y9ie7RukQOp_xw_S-', 180),
('211', '9', 'Is this the aura of cold queen? (2)', '1SN1cYoTcJyGb-e-BJOHyTqHF5UPAOrue', 181),
('212', '9', 'Who is she looking at and Who is she smiling at?', '1TelVeyrceGBv-RRT0Ozf_7SQgxA5zPbZ', 182),
('213', '9', 'Who is that sweet smell coming from? (1)', '1rsGpjsLdJaEGk3_X1y-JA2ytZbsUQry2', 183),
('214', '9', 'I will be the one that Mengning chose!', '1PCcQaryl7uCbBLKIIgmL_b-2SXLdr3d-', 184),
('215', '9', 'Will you be my hero? (1)', '1FOKBp7RVlpqYMyVlxUZkDS__lSlgtzEO', 185),
('216', '9', 'Will you be my hero? (2)', '1Ja-q2T1w7c1mrEgDlq3fCix8-snwamDI', 186),
('217', '9', 'Liu Mengning, you are so vicious! (1)', '153uIUO6HZ9RTLg6VWsMoOMxLwT6WKQXz', 187),
('218', '9', 'Liu Mengning, you are so vicious! (2)', '1MfrTTuI0Hn2OEWss5jTDlQQ85HS32eH_', 188),
('219', '9', 'Liu Mengning, you are so vicious! (3)', '1biFZWSd6gUMI5RZSloFPkiQmXMDShC8P', 189),
('22', '1', 'uchiha1', 'bỏ qua sasuke', 0),
('220', '9', 'My big Hero, the cherry scent on your body really smells …', '1kwv1LkHYVZhjK2wT5G8Yq8xsvu54Fbez', 190),
('221', '9', 'My big Hero, the cherry scent on your body really smells …', '1ycXLNVyRow_BnkV8r7tZtsHCxDUJ8YS1', 191),
('222', '9', 'She is the only person in his eyes (1)', '132TBbfHMM-5U_ervUs-Bq_Z5PMNHcseL', 192),
('223', '9', 'She is the only person in his eyes (2)', '1WA0gFDCOlsXWO3sXctHzTplaPTAEKTld', 193),
('224', '9', 'So, he took the initiative to kiss the princess (1)', '10zQZTAdVWiqH1hvUszLXMvsO6lKdSUqP', 194),
('225', '9', 'So, he took the initiative to kiss the princess (2)', '1AO7-3cdnQh6r2x385W63y1pq-2MTwmjq', 195),
('226', '9', 'Am I not a trespasser? (1)', '1c0_5IsXXEnw4m95IS3cY3BuCh6hf_6MI', 196),
('227', '9', 'Am I not a trespasser? (2)', '1sCxGZR0VzwRzz62r7HVL16spLeBJyeYx', 197),
('228', '9', 'Shameless (1)', '1sIAc4xuhkXsaMsIZoGsF0S4rEupQKs0_', 198),
('229', '9', 'Shameless (2)', '1wZEQ5SRZsRW68O5Cji4gXYJUPRDqYVXp', 199),
('23', '1', 'uchiha2', 'giết dòng họ', 0),
('230', '9', 'You were able to entice me? (1)', '19winW7N80--ATNGSpQ_S_HJIoHyFj9As', 200),
('231', '9', 'You were able to entice me? (2)', '1MM6JMRoOYBTUhLDyxm3Uw7YjMq5u9GgF', 201),
('232', '9', 'Can\'t my sister be with him for the rest of my life? (1)', '1hvM9pb8wMxOVqLPC2sM0I8a44aWq3eiA', 202),
('233', '9', 'Can\'t my sister be with him for the rest of my life? (2)', '1xHND1p6pj-r4EyJExM0dgz9AmSzIyXgd', 203),
('234', '9', 'Good People Should Be Pointed by Guns? (1)', '1ykt3B2zj-6Yc_IIHX56Kdl5UyOSm35sD', 204),
('24', '1', 'Chuong 4', 'Noi dung chuong 4', 0),
('24189ef1-0b56-4b1b-9a99-738d709b20cf', '82966195-fdb3-4f77-97ec-d3fa73cfde4d', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('25', '1', 'Chuong 5', 'Noi dung chuong 5', 0),
('26', '1', 'Chuong 6', 'Noi dung chuong 6', 0),
('27', '1', 'Chuong 7', 'Noi dung chuong 7', 0),
('277b6892-dbd1-47f8-a052-5fd29218d932', '2a2f427e-5ea0-42b9-bdcf-34ff4969267a', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('27b5cce5-0276-4742-a3a8-6100e18831bc', 'dd3f62c6-f3d0-46ed-ab6a-ab322d3b9629', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('28', '1', 'Chuong 8', 'Noi dung chuong 8', 0),
('29', '1', 'Chuong 9', 'Noi dung chuong 9', 0),
('2c1793cd-5ad9-4ff3-994b-5679e3873678', 'b9612f76-7812-4136-8118-999f9c911f3f', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('2df683ae-91d5-4612-81b4-b731b030e4c8', 'bff8846a-76c6-4343-a21c-e88871475146', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('2eac80f9-c6bf-45ec-961c-a6b67e090710', '0d7b2789-adce-4081-87d0-69987d329461', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('2ed45734-7cc5-45a6-9ef2-b2e7f1b481b5', '3e8d0b79-de34-475f-a5b8-ac6a002bac57', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('2f704bc0-6898-403d-8576-4600c5508469', '9eba3bc5-c1e0-42c6-8ff6-84071b9cf9f8', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('30', '1', 'Chuong 10', 'Noi dung chuong 10', 0),
('31', '9', 'y Acting Skills Are Very Professional', '1dIaDiwxuTm0Vtoj6D-IPuAO7wOgQyqCH', 1),
('31872541-cc39-4b13-a4b6-90c8d8f6100c', '93179960-ed55-415d-9c03-a1c931fd4aa6', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('32', '9', 'The First Performance Has Begun', '156sAHcnZY7yG4X4y6lLgkX6G8h185h5b', 2),
('323844ff-9c88-41ae-b80a-aed70c8ffbde', '7d2b6bf1-1c24-4b6d-aef5-99423b264212', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('33', '9', 'My Bed Is Very Big And Soft', '1MifIh22oTbAwkcZ0U2NEFM6-A-OC-6Wt', 3),
('34', '9', 'Something Is Wrong With This Female Protagonist!', '1h0catYazGPmuOKIab_oItETrqbbHf2pH', 4),
('35', '9', 'I\'m a Villain But The Female Protagonist Kisses Me?', '1gFYJcb4c737pZ1AmJHS8gmtDz5JSItYe', 5),
('3501df42-2342-4542-b738-9256bf4b8ad9', 'dd64a43d-b087-45cd-a031-28d33c9d9c37', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('36', '9', 'Get down on your knees and Admit Your Mistakes To Me!', '1_2rkuuXDSAq-Lh71_EXXRGEzLGQ2OPUO', 6),
('37', '9', 'What Went Wrong?', '10bKPgyluUY3LLZC_yKOIwkty3DVscqOG', 7),
('38', '9', 'He Will Not Disappoint Me', '1n8V9ULeQH380mJPSLNm2w2cuDzTMBjy0', 8),
('39', '9', 'Everything is a Mess', '1yXeJE3rqcozdlilljxgyLQHbaulBXqh1', 9),
('3a85d364-7ced-45b5-8f09-1a0501f7c822', '3885ae5d-fb82-4c28-a398-3ef75fcfe92b', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('3ec5aff3-d6ec-4901-b831-56a8fc0e6810', '3e4d0ffd-d797-493a-a32f-701ca0860ee0', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('40', '9', 'The Diary, The Origin Of Everything', '1bBYP9ayZtHJgwnXZT9OmWKyl0HSO69Oz', 10),
('41', '9', 'I Don\'t Want A Sister Who Is So Gentle!', '1_0RlRe3Bn-A_6hj12k68QS-1oVTvZm3x', 11),
('42', '9', 'Big Sister\'s Selfishness', '1_rjzuhFurILgZ44HZOmLAF6QWkiDQh87', 12),
('43', '9', 'Ruoruo Is Not Stupid!', '1rUyhTlThV6J7vt_PsUJMY894iIunzzwf', 13),
('43f60c41-db45-4cd2-be23-6c40b4e8d0a5', '0c4a2c5d-f1c1-419b-94b9-cd7840da78dc', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('44', '9', 'Kneel Before Me Xiao Ruoruo!', '1DXhV5slGlpMQupwWUcbkH_3rQQtuKZ57', 14),
('45', '9', 'I Am Helpless, I Can\'t Do It!', '14luHDfDp9hgIN8vtUC0SL8f-LYODb3yx', 15),
('46', '9', 'I Actually Made A Lot Of Money!', '1XpEdbDgqGHdIWQBLHkIfHU7gm5gAwJv4', 16),
('47', '9', 'Ruoruo\'s Temptation', '1FM1lSIBcYVnNbYyh826uCJH6KneYe8kG', 17),
('471f7d6c-534c-42fd-92d3-b87382a8361c', 'e481d07c-db57-4a2f-88e0-3c1d0b46d36f', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('48', '9', 'Because I Love You', '1wicHB80lUS37DLJ5AkCUdv6fcKtdatXU', 18),
('48ab8308-c473-488b-9b71-a98658b2748e', '8615c72f-e041-4e95-b6f0-fec4efe66945', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('49', '9', 'Won\'t You Feel Sorry For Him?', '1_LYj0KISkreOp0E2sH8ySwnmakBay5Ho', 19),
('49fd7879-8fe1-4830-a44b-0bd6d07d2d50', 'aa3987ea-8634-4465-96fb-8887864acfc1', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('50', '9', 'What An Exciting Scene That Would Be!', '1KDgift6bHd5CVOdg8rr8zPuFZJGglQhx', 20),
('51', '9', 'He Is So Kind, But Had To Act So Evil And Arrogant ......', '1I_GrGLmHAsesKsT3yodkyv1K1JkU4XK-', 21),
('52', '9', 'Cherish Your Time As A Dog, Xiao Ran!', '1sr9BQkTP-caMWPG7iK9tYG0jXyh6v9QM', 22),
('53', '9', 'New Skill', '1AFOLNGtzZZz85bVSHpGmAaRKbgu_phiF', 23),
('530b9f69-bd0d-485c-8a02-055b619a044f', '9a686987-736c-40f3-9f1e-3d6314d0ea16', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('54', '9', 'You are the dog, Su Mingyuan', '1t13wr5eIQ4GIBDuu4urNnWM-ZVQOg1pA', 24),
('55', '9', 'After You Marry Into My House, Let\'s See What I Do...', '1GhiPay_mcqbNhOwurWBJrQeRh2issHsO', 25),
('56', '9', 'What A Perfect Performance!', '1kNjafu4fIAIMfePMtC6xKtIM1TDDAbCm', 26),
('57', '9', 'My Mental State Collapsed!', '1zKyIbRGWffo_taK-rmtTg9Fij7h2U_0z', 27),
('58', '9', 'He Was About To Give Up', '1EekIokzxOT3dTMvUYYtAiIhfbMlYIV0u', 28),
('58c501f7-e366-4b13-830b-9a519ef88181', '76edf324-d5bd-470d-9eb9-9f913ef47a86', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('59', '9', 'I Did It For You…..', '1Tb58gYyno8Cv5loilmDvo7GZmo7MIuvQ', 29),
('5e73f993-ff09-4ac3-a1d6-8d76381df656', '6020c790-b0bf-4eec-9f9b-4aaaa8e9378f', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('60', '9', 'She Was Not Like This...', '1-PhMAjhx1Qymx8ShvXfZ_5LpEhWWjTMD', 30),
('61', '9', 'She Is Indeed My Good Sister', '1Oe0Vya_t9Ly5ndV--arX41qTVZFqppSc', 31),
('61a72f16-42e4-4904-9358-e82f4a57bc7f', '457cca38-ea18-4ab8-83a7-9c0c0e5d60b6', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('62', '9', 'How Can I Doubt Ruoruo!', '1OJtTs8SfEYlXrS3GtwtCnjbtL3avM53Y', 32),
('63', '9', 'I Can\'t Let Those Bad Women Succeed', '1jRoNuf2rHvgi6u39gJAdfM7IqIuoycWv', 33),
('64', '9', 'Aren\'t you disappointed that the person you were expecting…', '1I3DwZp_lf1u7OPZK6ucZfALqU979-0Rm', 34),
('64d1caba-7580-44f8-9200-14528222aec2', '88b38bdb-76da-4885-bd2d-df95efe04bd3', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('65', '9', 'Xia Xueqi, you also have days like this!', '1gKIuTPTMVJwtmnydbp8exI2iRVfQvm8f', 35),
('66', '9', 'It Seems I Made Things… Worse?', '1tf1f95fl1T3kfC4I91JLxgWWT0Eif4by', 36),
('67', '9', 'It was just a slip of my hand...', '1wExfp0FzURPUofuGlcjDyPw_NUfR-tCU', 37),
('68', '9', 'Xia Xueqi, the person who took your first kiss was me!', '1_crSkwlguBe_sBHTlnSX0KX3NFLTiQEr', 38),
('69', '9', 'I found the breakthrough!', '1q2bpC99vfW01COfwqGuI854oVWJjf6sp', 39),
('6b608a3d-5203-4785-9933-f0d199ff33aa', '689479cd-6334-4dc2-9526-2915702af9c0', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('70', '9', 'Give you a pleasant surprise!', '1Bkq7trgGWUiLqaHbYEAXWIxpwKthYx2r', 40),
('71', '9', 'Su Xuelan, can you do it?', '17Oae6Kd6sqr_hIsjRFWqbdegHz-Fn4IE', 41),
('72', '9', 'Ruoruo, you act so well!', '1wcpw9jDw5kaq4NM09shnLVKeNTlOvuMx', 42),
('73', '9', 'Come and see me!', '12BFaWj2q_UWSg89z8Svh6WkfqBx_FL1I', 43),
('74', '9', 'I have a task for you in', '1wpD1LlIN8O92OjrKYRe-imgwJtLf0mC4', 44),
('75', '9', 'How about you call him while I kiss your lips', '1dU7Zp_z65BUKbolfLOcOeWGAgzTxNdZX', 45),
('76', '9', 'Everything is already in my hands!', '13sN-OSIwo3rE2y9h5xNvPhPhxhCB75Oh', 46),
('77', '9', 'Su Mingyuan? He’s a joke!', '1pOC9k2duGIexbk5Vw2efTKrf8fkq_11U', 47),
('772fd70d-bfc1-4ec4-b4e8-85472f78381d', 'e0ba0c55-b7b3-451e-b6fc-4fd4ac2a5552', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('78', '9', 'The upcoming third show!', '1HISBZAT81hRhSPO3346y8QyrUWPIIZNx', 48),
('79', '9', 'I will have great success!', '1FFIObl32nI75tQvuhrFAEflGHbUV-67G', 49),
('7a751abd-4de5-4256-8e59-b138fec96cf2', 'd8706ce2-7266-4d95-8196-e2dbbfe929bd', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('7c0c0314-ad5f-4b93-9157-beec5e7a0259', '858aaf29-5d05-4d4f-a138-eceda08469f8', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('7f268244-f12f-487a-9c87-c30d732e7b38', 'bcf419d8-8e44-4558-850a-6dfff0182f57', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('80', '9', 'The general is out', '1fx2F973Ie5JvPyKOQOu4hsxvBtj241lm', 50),
('81', '9', 'It is my turn to perform', '1fRrkj98vPxKQPLLZGOllT3-Vnvw94hgj', 51),
('82', '9', 'A perfect evaluation, isn\'t it about to lie firmly in the …', '16CvsdBXvLvj4FCz0pfQHT_JvkCBIE3aN', 52),
('83', '9', 'I want you to accompany me for the night!', '1YnRZsOXi6t2HEIaBLqGfS4762CtjMWG2', 53),
('84', '9', 'My chance is here!', '170f1l_3r66N_CgzogYUUE22nVMAQd4aF', 54),
('85', '9', 'It\'s just that I\'m a little, a little ...... too happy', '1vM5_G0vnJ5mTvO4YIPdsu7IKcLLppJ8K', 55),
('86', '9', 'No, I can turn the tables! He couldn\'t win anymore...', '1YelxU0sekz2RJAfjEhZ_Q_G-m7Uf-dW6', 56),
('87', '9', 'I want you to give yourself a slap in the face!', '1d1Jybe9zeWk_jgaPGqDC-ES-1aVMmVoX', 57),
('87aaeaf9-3b77-4735-8e22-3a8186147ea9', '67a8923b-a001-48a7-8d2e-bab7034c1f18', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('88', '9', 'Son, I\'ll create an opportunity for you!', '1Vq_Imo5MqA52W0B5XpsmPfV4F9Ig4-zw', 58),
('89', '9', 'System, you wouldn\'t want to mess with me, right?', '1GbdQ7hlAShw72KQYcaVnPtC0V9UGtlVx', 59),
('89dbc388-8fb8-4e42-9ba2-49ea4310ec06', 'd28df9a5-a306-47e3-b49f-d3905fe808b1', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('8cbc14e2-a160-4088-8121-301fd8ba0498', 'dee3ba66-3eb3-4e0f-8052-55833ff1ef46', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('90', '9', 'Sister, if you are still waiting for me at home...', '1EoxGKY2WAiEE42L7owo2XmfIZeZWbIlG', 60),
('91', '9', 'Mingyuan, you like her?', '1DCDxo9y_-i5qU1l4nPU_hcPZTbEp8lO9', 61),
('92', '9', 'I, Xia Xueqi, am confident in winning the first place in h…', '1ZdTfzqeiJsbYNcgTTzf9NUYYq1FatMM6', 62),
('93', '9', 'My good sister, did you call me?', '1wA9MRo8as7zJZjpYLlv9VR9iA3-JblMH', 63),
('94', '9', 'Ruoruo, is really awesome!', '1COMSkCHhY4GVey_aoJiMEdjkiHR0kGlg', 64),
('95', '9', 'Su Mingyuan is once again full of confidence', '1ReZW1lr_e9U_WSZ5U-UDZZI0eBw8scTg', 65),
('96', '9', 'The white-robed knight, Su Mingyuan, came out again today!', '1mrpjL9mTZYey6_GpiQ_USmjh14uRCazD', 66),
('963912dc-c43b-479b-b612-6284537dfcc2', 'd655b1ae-cfc4-459e-911a-208ed9ff6060', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('97', '9', 'It is precisely the same time [1]', '1RjmAtE4x7iwdxDmHlqRIUqnr2Rjc26LY', 67),
('98', '9', 'It is precisely the same time [2]', '13ZrpTI-Db65gg6DQnWxxackVNkb4fyL5', 68),
('99', '9', 'This….is it allowed?', '1BkjNJAgmCUC2v0RP2TL-RVmmXnMewhbr', 69),
('a31e9013-8f49-4d56-9312-d07d663267fc', '7be01681-74f4-493b-9f87-e2e8cf9e3125', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('a944e837-ce5f-46fe-9ff9-1d5583c9881a', '42cf6cb0-e16d-47bd-b02b-210a87545bd3', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('b09ed88e-08e8-4bd6-abcb-2a224b150eae', '46badd48-4780-4cad-a4aa-8b9035154097', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('b56d0f1f-32c7-4099-b7f3-2e372d9c9a9e', '750f75ac-312b-4b57-9882-4a436fb4344c', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('ba67cc63-46fc-437f-80c9-1325b08f3682', 'a665d83f-dd81-421b-85f9-45caae620d90', 'Chương 2: Rừng đại ngàn tempet ', '1eWk6456Dqbol2W-Gt6MBA3_rH92CMkmE', 2),
('bab021de-0415-4065-9a14-4335e8ba919c', '2e7f5ea3-4abc-484f-a2d6-d647a9084737', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('bac03904-eb19-403d-b51d-0cf596078018', '363604ba-bb70-480f-a33a-b01daae70d76', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('bc22775e-328f-4de9-a686-95f133f6be7d', '6fe20c53-6d8a-4c21-bfb6-c8cf65a58295', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('cad54a84-5daf-4906-b7bc-3a4ffd986469', '74e30706-d555-4593-bc7d-721d728591be', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('d0b33c36-be46-4d27-ae8c-63ee49e98a9b', '50ee6076-b996-44e4-a7ee-a603b5b44c8b', 'Chương 1: Gặp ma thiếu nữ Bích Phương ', '1LMJNtjE2OO2Y421fJmozq1iLav-7notg', 1),
('d44685aa-8e01-44ca-a108-c334020d38d8', '6ddbadb3-642e-4c9b-87bb-9c314ee30c38', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('d5f918f9-3642-40bc-b1d4-486b61fa4c6f', '39412aee-eb25-4b83-8ca3-213b0151c8b2', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('d94cf4ab-465a-43dc-8a9f-e036c6c02b15', 'c3d59322-d23c-499d-bcb7-7f13944f4483', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('de778df6-fe0d-44f1-887e-beb48e2b142d', 'bce4e037-75d8-4a07-ab5f-ccd22a436b7d', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('df6288bd-dc87-4d86-9152-2e03f6f5a2f4', '50ee6076-b996-44e4-a7ee-a603b5b44c8b', 'Chương 2: Gặp bé elf BM ', '1V5GlXe3V2uEyz4ZT1Ap6ICuBq1vR_aSS', 2),
('e1383145-21f5-47c1-8154-270365233f3d', '5d61955f-647d-4df5-92c6-9e171ac8f0f2', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('e24d6799-4ee7-41bf-beae-8d41831df653', '7c32f8cc-e62b-43f9-8703-d6a0d7cdb7ee', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('e3a4cf5f-3008-4885-8a7f-4040dbfb18d0', 'f24ab5ac-513e-4eff-b859-7e934b5f3944', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('ecd7ecf8-275e-4ac4-a7ae-b1c56749f8c8', 'be4d050b-3869-4721-bc0e-45345496f872', 'Chương 1: sda ', '1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP', 1),
('f3b81297-0295-4e61-9d8f-5f0b92f169d7', 'a665d83f-dd81-421b-85f9-45caae620d90', 'Chương 1: Cuộc hành trình bắt đầu ', '14j_L-HN47B-VqE15UYK3X6ZWOymL1aY0', 1);

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
('6W1dTT-Rx1C7gSdxRJdWGicFywtX5Pwh', 1701062325, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('F9B09z5Z7w-Dr_S_GvdL9kkN3YU0nX2i', 1700992476, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('FRwW0NaaUcbNnNvkF3QDRH8IknEWg4VX', 1700993842, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('Iyr2vMfDskgJs74mhqm0Fsp3rmmX_dU1', 1701166906, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":1}}'),
('KQ0zmYH1vqbiRBGJtzcPSkbX-YyiXO5s', 1701530729, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('KkeCMfZWUNGvqKjlBLTLFsgRX_zH2DTY', 1701177123, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":1}}'),
('Nf0qQavPLhPa2GvBml7P08oXJOTOYz_P', 1701445381, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":1}}'),
('O_EIjFcwxQPT_MPFAnNx9efo1vS7T2Ri', 1701441158, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":1}}'),
('Qx8F-zUVaDCAQaiXiJs9ylqa8IRmS-HM', 1700999954, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('S_5gt-59BzzCcfnPr3QuSX0gvB1uMtg8', 1701442960, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":1}}'),
('T8degyXQR_ak637FixTNMFyxEwEiJB5G', 1701061225, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('VcEhCEWPZcu120Jjggow3Dy-isH1ZNVq', 1701061758, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('WHN_xU2FV2frbmQi7OPK53K0FxHLh60Z', 1701170487, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":1}}'),
('XFqi5ONF6ELoeABrLw-Sq5xFrl4ZCjep', 1701443015, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"156263e4-940f-48d8-b540-0a2a98b4d974\",\"username\":\"naruto\",\"role\":1}}'),
('YJZILHwh5N9L4Ud9CoIKs03_sLOrF6z-', 1700998613, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('_i2Bnh6-uYyfTxyApz513Nxu8z-MEOAh', 1700998585, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":0}}'),
('gZs8wAAlDk5xXk_JcS3plmRv7mtcDw0v', 1700979242, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('g_XWh1LXTSW9bUalFlPWuuhc_HZFjl_b', 1701445329, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":1}}'),
('jy9IzCNeYAHyM8J-tbQtDG_bU4GJ5xlT', 1701178592, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('kmTibXwjFL7a3I_Ge-FhrE5yUJ448qK3', 1700998886, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('nLf_S-Nsfv9HidH0L7WA1SPmo8Euv71-', 1700993840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('uvlg2jUHFqPttMwDtoLQs0no6QnAFQK_', 1701178576, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('uyfUwXlG-3jGL6aFlfi0AvApMTlDEgee', 1701178536, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('y_fbvdCXRCSa2VHg6B4MET45ypcxv4rg', 1700993840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}');

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
('3141bc23-09c4-4fa8-83a9-23247d7ed232', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'hu'),
('4', '4', 'Author 4'),
('5', '5', 'Author 5'),
('6', '6', 'Author 6'),
('7', '7', 'Author 7'),
('8', '8', 'Author 8'),
('9', '9', 'LONG ĐẠI ĐẾ');

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
('109632126491025897743', '109632126491025897743', 'hungthinhh2003@gmail.com', NULL, 'google'),
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
('0841e38e-798e-4725-8f98-cc6af25c1628', 'Horror', '2a2f427e-5ea0-42b9-bdcf-34ff4969267a'),
('092751e0-3f1f-4f64-bed8-022e324a371d', 'Horror', '5d61955f-647d-4df5-92c6-9e171ac8f0f2'),
('0face499-d3a9-438f-9c09-1da2e991a7f4', 'Horror', '457cca38-ea18-4ab8-83a7-9c0c0e5d60b6'),
('1', 'Sci-Fi', '1'),
('10', 'Horror', '10'),
('12738897-7e62-44d0-8b2d-afd5698f4964', 'Horror', '0d7b2789-adce-4081-87d0-69987d329461'),
('1555785c-85a7-48a9-9ff3-d99700c5b552', 'Horror', '7be01681-74f4-493b-9f87-e2e8cf9e3125'),
('18ba2565-16bf-4239-9614-b86d244dd3e2', 'Horror', '3885ae5d-fb82-4c28-a398-3ef75fcfe92b'),
('2', 'Comedy', '2'),
('236595c3-bebd-487b-92c9-9949c1a2afdb', 'Horror', '76edf324-d5bd-470d-9eb9-9f913ef47a86'),
('23ba2923-3bbb-4039-8269-badf5e9affd6', 'Horror', '93179960-ed55-415d-9c03-a1c931fd4aa6'),
('276746d6-4bb9-4728-85f6-1dfaa3418bb3', 'Horror', '2e7f5ea3-4abc-484f-a2d6-d647a9084737'),
('293d6ec1-46b3-4156-920f-8fba7c2b8617', 'Horror', '7d2b6bf1-1c24-4b6d-aef5-99423b264212'),
('3', 'Family', '3'),
('33af1666-c160-46e9-aca7-ac9fce872315', 'Horror', '7c32f8cc-e62b-43f9-8703-d6a0d7cdb7ee'),
('3838b24b-536f-4b0c-a61f-6ddbccce23da', 'Horror', 'dd3f62c6-f3d0-46ed-ab6a-ab322d3b9629'),
('38b1e084-6b03-4761-90e4-ed2a7b14a0ef', 'Horror', '9a686987-736c-40f3-9f1e-3d6314d0ea16'),
('4', 'War', '4'),
('402fa90e-b566-4988-a123-886ec07b28c6', 'Horror', 'bcf419d8-8e44-4558-850a-6dfff0182f57'),
('4850b0c1-60da-4658-886b-427b226e2304', 'Horror', '39412aee-eb25-4b83-8ca3-213b0151c8b2'),
('4edcd9b2-5698-4233-b75f-9171e9d6416b', 'Horror', '6ddbadb3-642e-4c9b-87bb-9c314ee30c38'),
('5', 'Romance', '5'),
('551579aa-3060-4e91-907d-5962a7fc5cc5', 'Horror', '82966195-fdb3-4f77-97ec-d3fa73cfde4d'),
('5cb7b4c3-6a64-4312-a5cd-0b4deb17433f', 'Horror', '6f393334-13ef-45d4-b373-7c9ddfdbc1b4'),
('6', 'Historical', '6'),
('6178cffa-13e3-47af-a4c7-5cd39c21de1b', 'Horror', 'e481d07c-db57-4a2f-88e0-3c1d0b46d36f'),
('62c53322-6913-4c6f-8295-d05b31935182', 'Horror', 'f24ab5ac-513e-4eff-b859-7e934b5f3944'),
('655c6485-ec57-4f0e-9256-e4f7d397c78d', 'Horror', '9eba3bc5-c1e0-42c6-8ff6-84071b9cf9f8'),
('67cb4b70-04b5-4580-8b42-337c1b6f97d5', 'Horror', '88b38bdb-76da-4885-bd2d-df95efe04bd3'),
('7', 'Adventure', '7'),
('70595108-9829-4eae-a786-c504e991e137', 'Horror', 'e0ba0c55-b7b3-451e-b6fc-4fd4ac2a5552'),
('76703511-51b3-4bab-a9ef-e25b8e62ef2e', 'Horror', 'aa3987ea-8634-4465-96fb-8887864acfc1'),
('7848054a-73d9-4af1-9927-e7e380ff7bd6', 'Horror', 'dee3ba66-3eb3-4e0f-8052-55833ff1ef46'),
('7d0c6b26-4b27-457e-956f-8e843646b5d3', 'Horror', 'dea7016b-4a48-4ffb-8e0e-6efc770e0b54'),
('8', 'Family', '8'),
('88b506c3-29d0-4834-aef0-4ed62bb53909', 'Horror', '50ee6076-b996-44e4-a7ee-a603b5b44c8b'),
('895aa4c9-a4a0-4429-bde2-fe3f43849d7c', 'Adventure', '50ee6076-b996-44e4-a7ee-a603b5b44c8b'),
('8c107c62-2946-48a2-93a9-5eee3f35460f', 'Horror', 'bff8846a-76c6-4343-a21c-e88871475146'),
('9', 'Mystery', '9'),
('917a3cf2-c8cb-424f-818b-a4bae79a9335', 'Horror', '8615c72f-e041-4e95-b6f0-fec4efe66945'),
('937cf4ac-7eef-44c3-ab38-ce06a779677b', 'Horror', '3e4d0ffd-d797-493a-a32f-701ca0860ee0'),
('94667a72-2f73-4ea4-9dc8-6c403ba97cc0', 'Horror', '689479cd-6334-4dc2-9526-2915702af9c0'),
('94a2a45d-fa6e-4d1c-8e6a-c6727fbd9282', 'Horror', 'c3d59322-d23c-499d-bcb7-7f13944f4483'),
('9599e8cc-497f-4907-adad-001f6d32805b', 'Horror', '858aaf29-5d05-4d4f-a138-eceda08469f8'),
('97bcfc0c-9a72-4752-99a2-85fe35ca5218', 'Horror', '0c4a2c5d-f1c1-419b-94b9-cd7840da78dc'),
('98b4804d-aa6c-4071-b5e9-daf0a3bd5d0b', 'Horror', '46badd48-4780-4cad-a4aa-8b9035154097'),
('9c2cb721-3c10-4b9d-a2ee-7902d16312e4', 'Horror', '74e30706-d555-4593-bc7d-721d728591be'),
('9e4de78b-d388-4e43-9282-6cfb7af74c2e', 'Mystery', '50ee6076-b996-44e4-a7ee-a603b5b44c8b'),
('9f889c1a-c2b5-4361-8bbc-f8f2eb94d56b', 'Horror', 'dd64a43d-b087-45cd-a031-28d33c9d9c37'),
('a00c671a-a93f-450f-9dcb-e2277823207b', 'Comedy', 'a665d83f-dd81-421b-85f9-45caae620d90'),
('a6abe180-44a1-4a7f-a163-7f6df47c52ab', 'Horror', 'be4d050b-3869-4721-bc0e-45345496f872'),
('abd2e331-4ef7-48cb-9577-670c0fa9f42a', 'Action', 'a665d83f-dd81-421b-85f9-45caae620d90'),
('ae102334-a90f-4868-9ebf-3e98b52bf373', 'Adventure', 'a665d83f-dd81-421b-85f9-45caae620d90'),
('b387c9e1-eba5-4adc-9af5-d30b4d46278d', 'Horror', 'd8706ce2-7266-4d95-8196-e2dbbfe929bd'),
('b46153b7-5eca-4549-a5bd-d0b8c19a375a', 'Horror', '3e8d0b79-de34-475f-a5b8-ac6a002bac57'),
('cdbb0f4b-6c68-49dd-947d-30d571896985', 'Horror', '6020c790-b0bf-4eec-9f9b-4aaaa8e9378f'),
('d32cc055-d492-4446-b1b7-f0015533a5e8', 'Horror', 'b810773c-32b3-4fa9-bdcf-47b3d6cc3400'),
('d53d6951-4f87-4022-8704-843eeea3ab0c', 'Horror', 'bce4e037-75d8-4a07-ab5f-ccd22a436b7d'),
('d62f8418-f12f-4e8c-8b69-0039ac4d68b9', 'Horror', '6f56d8f7-8d68-49f8-a2cc-306b25d7e898'),
('d78725dc-4f1d-4213-a8ea-179df94a6050', 'Horror', '67a8923b-a001-48a7-8d2e-bab7034c1f18'),
('e66470e5-89c8-438f-a41f-5f2e66d0c57b', 'Horror', '363604ba-bb70-480f-a33a-b01daae70d76'),
('ed310957-ad97-4ef7-bebd-32e74b3048a5', 'Horror', 'b9612f76-7812-4136-8118-999f9c911f3f'),
('edc71958-bfc4-4465-a835-d3ac72711371', 'Horror', '750f75ac-312b-4b57-9882-4a436fb4344c'),
('eed30c38-3fa8-4a1d-bdde-f2f73ccd2431', 'Horror', '42cf6cb0-e16d-47bd-b02b-210a87545bd3'),
('f70bb2a4-4ebc-4134-b1b6-f2df6993bf56', 'Horror', 'd655b1ae-cfc4-459e-911a-208ed9ff6060'),
('f8fda2c6-c1a9-4304-a494-48ed980f3a74', 'Horror', 'd28df9a5-a306-47e3-b49f-d3905fe808b1'),
('fada8fc0-e743-40fc-af9d-b41a141d707f', 'Horror', '6fe20c53-6d8a-4c21-bfb6-c8cf65a58295');

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
('1', '1', 'Hung Thinh', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 2, 0),
('10', '10', 'User 10', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 2, 0),
('109632126491025897743', '109632126491025897743', 'Hưng Thịnh Nguyễn', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 1, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://lh3.googleusercontent.com/a/ACg8ocLYq5vVCCCNuPkBLcU1GVRtVvlwtp2NnRv15Rei3u03jiA=s96-c', 1, 1, 0),
('156263e4-940f-48d8-b540-0a2a98b4d974', '156263e4-940f-48d8-b540-0a2a98b4d974', 'naruto', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('18', '18', 'ha', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 2, 0),
('19', '19', 'hi', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('2', '2', 'User 2', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('3', '3', 'User 3', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 0, 1, 0),
('3141bc23-09c4-4fa8-83a9-23247d7ed232', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'hiem2', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('4', '4', 'User 4', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('5', '5', 'User 5', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 0, 1, 0),
('6', '6', 'User 6', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('66916025-3af1-4716-9a6a-7109bf7f82ac', '66916025-3af1-4716-9a6a-7109bf7f82ac', 'admin', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 100, 0),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', '6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('7', '7', 'User 7', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 0, 1, 0),
('8', '8', 'User 8', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('9', '9', 'User 9', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 0, 1, 0);

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
('0c4a2c5d-f1c1-419b-94b9-cd7840da78dc', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 21', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 1),
('0d7b2789-adce-4081-87d0-69987d329461', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 39', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('1', '1', 'naruto', 10, 'cu giả', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 999999, 1, '2023-11-12', 'Đang ra', 0),
('10', '10', 'Truyen 10', 28, 'Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, -1, '2023-07-30', 'block', 0),
('2', '1', 'sasuke', 10, 'đồ sát', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 2, 2, '2023-11-12', 'Đang ra', 0),
('2a2f427e-5ea0-42b9-bdcf-34ff4969267a', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 37', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('2e7f5ea3-4abc-484f-a2d6-d647a9084737', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 18', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('3', '3', 'Truyen 3', 15, 'Tom tat noi dung truyen 3', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-12', 'đang ra', 0),
('363604ba-bb70-480f-a33a-b01daae70d76', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 1', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('3885ae5d-fb82-4c28-a398-3ef75fcfe92b', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 12', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('39412aee-eb25-4b83-8ca3-213b0151c8b2', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 19', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('3e4d0ffd-d797-493a-a32f-701ca0860ee0', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 5', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('3e8d0b79-de34-475f-a5b8-ac6a002bac57', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 42', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('4', '4', 'Truyen 4', 25, 'Tom tat noi dung truyen 4', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-12', 'block', 0),
('42cf6cb0-e16d-47bd-b02b-210a87545bd3', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 35', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('457cca38-ea18-4ab8-83a7-9c0c0e5d60b6', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 48', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('46badd48-4780-4cad-a4aa-8b9035154097', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 34', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('5', '5', 'Truyen 5', 18, 'Tom tat noi dung truyen 5', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 1000, 0, '2023-11-12', 'block', 0),
('50ee6076-b996-44e4-a7ee-a603b5b44c8b', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Ngọc Long tại dị giới cùng Hưng Thịnh p3', 2, 'rất tuyệt với', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('5d61955f-647d-4df5-92c6-9e171ac8f0f2', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 33', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('6', '6', 'Truyen 6', 22, 'Tom tat noi dung truyen 6', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-12', 'block', 0),
('6020c790-b0bf-4eec-9f9b-4aaaa8e9378f', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 25', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('67a8923b-a001-48a7-8d2e-bab7034c1f18', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 40', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('689479cd-6334-4dc2-9526-2915702af9c0', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 46', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('6ddbadb3-642e-4c9b-87bb-9c314ee30c38', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 23', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('6f393334-13ef-45d4-b373-7c9ddfdbc1b4', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 16', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('6f56d8f7-8d68-49f8-a2cc-306b25d7e898', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 7', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('6fe20c53-6d8a-4c21-bfb6-c8cf65a58295', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 41', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('7', '7', 'Truyen 7', 30, 'Tom tat noi dung truyen 7', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-12', 'đang ra', 0),
('74e30706-d555-4593-bc7d-721d728591be', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 6', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('750f75ac-312b-4b57-9882-4a436fb4344c', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 10', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('76edf324-d5bd-470d-9eb9-9f913ef47a86', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 26', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('7be01681-74f4-493b-9f87-e2e8cf9e3125', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 44', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('7c32f8cc-e62b-43f9-8703-d6a0d7cdb7ee', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 29', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('7d2b6bf1-1c24-4b6d-aef5-99423b264212', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 28', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('8', '8', 'Truyen 8', 17, 'Tom tat noi dung truyen 8', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-12', 'đang ra', 0),
('82966195-fdb3-4f77-97ec-d3fa73cfde4d', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 22', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('858aaf29-5d05-4d4f-a138-eceda08469f8', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 3', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'đang ra', 0),
('8615c72f-e041-4e95-b6f0-fec4efe66945', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 43', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('88b38bdb-76da-4885-bd2d-df95efe04bd3', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 31', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('9', '9', 'Long Ngoại Đạo', 19, 'Tom tat noi dung truyen 9', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 1, 1, '2023-11-12', 'đang ra', 0),
('93179960-ed55-415d-9c03-a1c931fd4aa6', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 36', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('9a686987-736c-40f3-9f1e-3d6314d0ea16', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 49', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('9eba3bc5-c1e0-42c6-8ff6-84071b9cf9f8', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 9', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('a665d83f-dd81-421b-85f9-45caae620d90', '113263126602180653712', 'Dế mèn phiêu lưu kí', 3, 'Câu chuyện là chuyến chu du khắp nơi của một chú dế mèn dũng cảm. Chuyến hành trình đó đi qua vô số cùng đất từ xứ sở thần tiên, địa ngục helhem, đỉnh olympus,... gặp vô số người bạn trên chuyến hành trình đó, liệu điều thú vị nào sẽ xẩy ra?', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 1),
('aa3987ea-8634-4465-96fb-8887864acfc1', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 2', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('b810773c-32b3-4fa9-bdcf-47b3d6cc3400', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 47', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('b9612f76-7812-4136-8118-999f9c911f3f', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 11', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('bce4e037-75d8-4a07-ab5f-ccd22a436b7d', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 32', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('bcf419d8-8e44-4558-850a-6dfff0182f57', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 14', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'block', 0),
('be4d050b-3869-4721-bc0e-45345496f872', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'áasa', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('bff8846a-76c6-4343-a21c-e88871475146', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 45', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('c3d59322-d23c-499d-bcb7-7f13944f4483', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 50', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('d28df9a5-a306-47e3-b49f-d3905fe808b1', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 38', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('d655b1ae-cfc4-459e-911a-208ed9ff6060', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 17', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('d8706ce2-7266-4d95-8196-e2dbbfe929bd', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 4', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('dd3f62c6-f3d0-46ed-ab6a-ab322d3b9629', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 24', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('dd64a43d-b087-45cd-a031-28d33c9d9c37', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 20', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('dea7016b-4a48-4ffb-8e0e-6efc770e0b54', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 13', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('dee3ba66-3eb3-4e0f-8052-55833ff1ef46', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 15', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('e0ba0c55-b7b3-451e-b6fc-4fd4ac2a5552', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 8', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('e481d07c-db57-4a2f-88e0-3c1d0b46d36f', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 30', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0),
('f24ab5ac-513e-4eff-b859-7e934b5f3944', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'Story 27', 1, 'sdsad', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg', 0, 0, '2023-11-21', 'Đang ra', 0);

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
('19', '113263126602180653712', '8'),
('dc403368-e4a4-47fc-b284-17f2a8bbe1b7', '3141bc23-09c4-4fa8-83a9-23247d7ed232', '9');

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
