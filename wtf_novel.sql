-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2023 lúc 01:00 PM
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
('25', '1', 'Chuong 5', 'Noi dung chuong 5', 0),
('26', '1', 'Chuong 6', 'Noi dung chuong 6', 0),
('27', '1', 'Chuong 7', 'Noi dung chuong 7', 0),
('28', '1', 'Chuong 8', 'Noi dung chuong 8', 0),
('29', '1', 'Chuong 9', 'Noi dung chuong 9', 0),
('30', '1', 'Chuong 10', 'Noi dung chuong 10', 0),
('31', '9', 'y Acting Skills Are Very Professional', '1dIaDiwxuTm0Vtoj6D-IPuAO7wOgQyqCH', 1),
('32', '9', 'The First Performance Has Begun', '156sAHcnZY7yG4X4y6lLgkX6G8h185h5b', 2),
('33', '9', 'My Bed Is Very Big And Soft', '1MifIh22oTbAwkcZ0U2NEFM6-A-OC-6Wt', 3),
('34', '9', 'Something Is Wrong With This Female Protagonist!', '1h0catYazGPmuOKIab_oItETrqbbHf2pH', 4),
('35', '9', 'I\'m a Villain But The Female Protagonist Kisses Me?', '1gFYJcb4c737pZ1AmJHS8gmtDz5JSItYe', 5),
('36', '9', 'Get down on your knees and Admit Your Mistakes To Me!', '1_2rkuuXDSAq-Lh71_EXXRGEzLGQ2OPUO', 6),
('37', '9', 'What Went Wrong?', '10bKPgyluUY3LLZC_yKOIwkty3DVscqOG', 7),
('38', '9', 'He Will Not Disappoint Me', '1n8V9ULeQH380mJPSLNm2w2cuDzTMBjy0', 8),
('39', '9', 'Everything is a Mess', '1yXeJE3rqcozdlilljxgyLQHbaulBXqh1', 9),
('40', '9', 'The Diary, The Origin Of Everything', '1bBYP9ayZtHJgwnXZT9OmWKyl0HSO69Oz', 10),
('41', '9', 'I Don\'t Want A Sister Who Is So Gentle!', '1_0RlRe3Bn-A_6hj12k68QS-1oVTvZm3x', 11),
('42', '9', 'Big Sister\'s Selfishness', '1_rjzuhFurILgZ44HZOmLAF6QWkiDQh87', 12),
('43', '9', 'Ruoruo Is Not Stupid!', '1rUyhTlThV6J7vt_PsUJMY894iIunzzwf', 13),
('44', '9', 'Kneel Before Me Xiao Ruoruo!', '1DXhV5slGlpMQupwWUcbkH_3rQQtuKZ57', 14),
('45', '9', 'I Am Helpless, I Can\'t Do It!', '14luHDfDp9hgIN8vtUC0SL8f-LYODb3yx', 15),
('46', '9', 'I Actually Made A Lot Of Money!', '1XpEdbDgqGHdIWQBLHkIfHU7gm5gAwJv4', 16),
('47', '9', 'Ruoruo\'s Temptation', '1FM1lSIBcYVnNbYyh826uCJH6KneYe8kG', 17),
('48', '9', 'Because I Love You', '1wicHB80lUS37DLJ5AkCUdv6fcKtdatXU', 18),
('49', '9', 'Won\'t You Feel Sorry For Him?', '1_LYj0KISkreOp0E2sH8ySwnmakBay5Ho', 19),
('50', '9', 'What An Exciting Scene That Would Be!', '1KDgift6bHd5CVOdg8rr8zPuFZJGglQhx', 20),
('51', '9', 'He Is So Kind, But Had To Act So Evil And Arrogant ......', '1I_GrGLmHAsesKsT3yodkyv1K1JkU4XK-', 21),
('52', '9', 'Cherish Your Time As A Dog, Xiao Ran!', '1sr9BQkTP-caMWPG7iK9tYG0jXyh6v9QM', 22),
('53', '9', 'New Skill', '1AFOLNGtzZZz85bVSHpGmAaRKbgu_phiF', 23),
('54', '9', 'You are the dog, Su Mingyuan', '1t13wr5eIQ4GIBDuu4urNnWM-ZVQOg1pA', 24),
('55', '9', 'After You Marry Into My House, Let\'s See What I Do...', '1GhiPay_mcqbNhOwurWBJrQeRh2issHsO', 25),
('56', '9', 'What A Perfect Performance!', '1kNjafu4fIAIMfePMtC6xKtIM1TDDAbCm', 26),
('57', '9', 'My Mental State Collapsed!', '1zKyIbRGWffo_taK-rmtTg9Fij7h2U_0z', 27),
('58', '9', 'He Was About To Give Up', '1EekIokzxOT3dTMvUYYtAiIhfbMlYIV0u', 28),
('59', '9', 'I Did It For You…..', '1Tb58gYyno8Cv5loilmDvo7GZmo7MIuvQ', 29),
('60', '9', 'She Was Not Like This...', '1-PhMAjhx1Qymx8ShvXfZ_5LpEhWWjTMD', 30),
('61', '9', 'She Is Indeed My Good Sister', '1Oe0Vya_t9Ly5ndV--arX41qTVZFqppSc', 31),
('62', '9', 'How Can I Doubt Ruoruo!', '1OJtTs8SfEYlXrS3GtwtCnjbtL3avM53Y', 32),
('63', '9', 'I Can\'t Let Those Bad Women Succeed', '1jRoNuf2rHvgi6u39gJAdfM7IqIuoycWv', 33),
('64', '9', 'Aren\'t you disappointed that the person you were expecting…', '1I3DwZp_lf1u7OPZK6ucZfALqU979-0Rm', 34),
('65', '9', 'Xia Xueqi, you also have days like this!', '1gKIuTPTMVJwtmnydbp8exI2iRVfQvm8f', 35),
('66', '9', 'It Seems I Made Things… Worse?', '1tf1f95fl1T3kfC4I91JLxgWWT0Eif4by', 36),
('67', '9', 'It was just a slip of my hand...', '1wExfp0FzURPUofuGlcjDyPw_NUfR-tCU', 37),
('68', '9', 'Xia Xueqi, the person who took your first kiss was me!', '1_crSkwlguBe_sBHTlnSX0KX3NFLTiQEr', 38),
('69', '9', 'I found the breakthrough!', '1q2bpC99vfW01COfwqGuI854oVWJjf6sp', 39),
('70', '9', 'Give you a pleasant surprise!', '1Bkq7trgGWUiLqaHbYEAXWIxpwKthYx2r', 40),
('71', '9', 'Su Xuelan, can you do it?', '17Oae6Kd6sqr_hIsjRFWqbdegHz-Fn4IE', 41),
('72', '9', 'Ruoruo, you act so well!', '1wcpw9jDw5kaq4NM09shnLVKeNTlOvuMx', 42),
('73', '9', 'Come and see me!', '12BFaWj2q_UWSg89z8Svh6WkfqBx_FL1I', 43),
('74', '9', 'I have a task for you in', '1wpD1LlIN8O92OjrKYRe-imgwJtLf0mC4', 44),
('75', '9', 'How about you call him while I kiss your lips', '1dU7Zp_z65BUKbolfLOcOeWGAgzTxNdZX', 45),
('76', '9', 'Everything is already in my hands!', '13sN-OSIwo3rE2y9h5xNvPhPhxhCB75Oh', 46),
('77', '9', 'Su Mingyuan? He’s a joke!', '1pOC9k2duGIexbk5Vw2efTKrf8fkq_11U', 47),
('78', '9', 'The upcoming third show!', '1HISBZAT81hRhSPO3346y8QyrUWPIIZNx', 48),
('79', '9', 'I will have great success!', '1FFIObl32nI75tQvuhrFAEflGHbUV-67G', 49),
('80', '9', 'The general is out', '1fx2F973Ie5JvPyKOQOu4hsxvBtj241lm', 50),
('81', '9', 'It is my turn to perform', '1fRrkj98vPxKQPLLZGOllT3-Vnvw94hgj', 51),
('82', '9', 'A perfect evaluation, isn\'t it about to lie firmly in the …', '16CvsdBXvLvj4FCz0pfQHT_JvkCBIE3aN', 52),
('83', '9', 'I want you to accompany me for the night!', '1YnRZsOXi6t2HEIaBLqGfS4762CtjMWG2', 53),
('84', '9', 'My chance is here!', '170f1l_3r66N_CgzogYUUE22nVMAQd4aF', 54),
('85', '9', 'It\'s just that I\'m a little, a little ...... too happy', '1vM5_G0vnJ5mTvO4YIPdsu7IKcLLppJ8K', 55),
('86', '9', 'No, I can turn the tables! He couldn\'t win anymore...', '1YelxU0sekz2RJAfjEhZ_Q_G-m7Uf-dW6', 56),
('87', '9', 'I want you to give yourself a slap in the face!', '1d1Jybe9zeWk_jgaPGqDC-ES-1aVMmVoX', 57),
('88', '9', 'Son, I\'ll create an opportunity for you!', '1Vq_Imo5MqA52W0B5XpsmPfV4F9Ig4-zw', 58),
('89', '9', 'System, you wouldn\'t want to mess with me, right?', '1GbdQ7hlAShw72KQYcaVnPtC0V9UGtlVx', 59),
('90', '9', 'Sister, if you are still waiting for me at home...', '1EoxGKY2WAiEE42L7owo2XmfIZeZWbIlG', 60),
('91', '9', 'Mingyuan, you like her?', '1DCDxo9y_-i5qU1l4nPU_hcPZTbEp8lO9', 61),
('92', '9', 'I, Xia Xueqi, am confident in winning the first place in h…', '1ZdTfzqeiJsbYNcgTTzf9NUYYq1FatMM6', 62),
('93', '9', 'My good sister, did you call me?', '1wA9MRo8as7zJZjpYLlv9VR9iA3-JblMH', 63),
('94', '9', 'Ruoruo, is really awesome!', '1COMSkCHhY4GVey_aoJiMEdjkiHR0kGlg', 64),
('95', '9', 'Su Mingyuan is once again full of confidence', '1ReZW1lr_e9U_WSZ5U-UDZZI0eBw8scTg', 65),
('96', '9', 'The white-robed knight, Su Mingyuan, came out again today!', '1mrpjL9mTZYey6_GpiQ_USmjh14uRCazD', 66),
('97', '9', 'It is precisely the same time [1]', '1RjmAtE4x7iwdxDmHlqRIUqnr2Rjc26LY', 67),
('98', '9', 'It is precisely the same time [2]', '13ZrpTI-Db65gg6DQnWxxackVNkb4fyL5', 68),
('99', '9', 'This….is it allowed?', '1BkjNJAgmCUC2v0RP2TL-RVmmXnMewhbr', 69);

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
('F9B09z5Z7w-Dr_S_GvdL9kkN3YU0nX2i', 1700992476, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('FRwW0NaaUcbNnNvkF3QDRH8IknEWg4VX', 1700993842, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('Qx8F-zUVaDCAQaiXiJs9ylqa8IRmS-HM', 1700999954, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('R8g7ArIQUxhxBBAQLQM8nrA_1dctpol3', 1700645947, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('RRBDviyEv6D8f1SL7ywmoS5xy3zdKMmJ', 1700882808, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('YJZILHwh5N9L4Ud9CoIKs03_sLOrF6z-', 1700998613, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('_i2Bnh6-uYyfTxyApz513Nxu8z-MEOAh', 1700998585, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":0}}'),
('_j5cr0Emowy3WZj4ZRJEEVGMwbDMAD-t', 1700887914, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('btVYSRqDwGLNzWFB3SiLHIsC1qIa11Pk', 1700914619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('dltf6Q_jLc_zfSZF9xLXBR_IMFY5dKso', 1700845696, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\"}}'),
('gZs8wAAlDk5xXk_JcS3plmRv7mtcDw0v', 1700979242, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('kmTibXwjFL7a3I_Ge-FhrE5yUJ448qK3', 1700998886, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('lL5ScBPwpSEbGaHNBXHVrlTQYpU3CnDr', 1700802118, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"passport\":{\"user\":\"113263126602180653712\"},\"user\":{\"id\":\"113263126602180653712\",\"username\":\"113263126602180653712\"}}'),
('nLf_S-Nsfv9HidH0L7WA1SPmo8Euv71-', 1700993840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
('odW4kpCzvTgzN1uf6Y1IEWrnPgZp_r6H', 1700890951, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"3141bc23-09c4-4fa8-83a9-23247d7ed232\",\"username\":\"hiem2\",\"role\":0}}'),
('y_fbvdCXRCSa2VHg6B4MET45ypcxv4rg', 1700993840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"},\"user\":{\"id\":\"66916025-3af1-4716-9a6a-7109bf7f82ac\",\"username\":\"admin\",\"role\":100}}'),
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
('1', 'Sci-Fi', '1'),
('10', 'Horror', '10'),
('2', 'Comedy', '2'),
('3', 'Family', '3'),
('4', 'War', '4'),
('5', 'Romance', '5'),
('6', 'Historical', '6'),
('7', 'Adventure', '7'),
('8', 'Family', '8'),
('9', 'Mystery', '9');

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
('1', '1', 'Hung Thinh', NULL, 1, 1, 0),
('10', '10', 'User 10', '', 1, 1, 0),
('110152635823665920356', '110152635823665920356', 'Ruri Meiko', 'https://lh3.googleusercontent.com/a/ACg8ocK8aV6zSthRfH8PZGBBm6Fv9NvJzlGnDc6Lf5Ge0_Fh-1E=s96-c', 1, 1, 0),
('113263126602180653712', '113263126602180653712', 'Dawn Nguyen', 'https://lh3.googleusercontent.com/a/ACg8ocLYq5vVCCCNuPkBLcU1GVRtVvlwtp2NnRv15Rei3u03jiA=s96-c', 1, 1, 0),
('156263e4-940f-48d8-b540-0a2a98b4d974', '156263e4-940f-48d8-b540-0a2a98b4d974', 'naruto', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 1, 0),
('18', '18', 'ha', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 1, 0),
('19', '19', 'hi', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 1, 0),
('2', '2', 'User 2', '', 1, 1, 0),
('3', '3', 'User 3', '', 0, 1, 0),
('3141bc23-09c4-4fa8-83a9-23247d7ed232', '3141bc23-09c4-4fa8-83a9-23247d7ed232', 'hiem2', 'https://drive.google.com/uc?export=view&id=1EOVRJ4tg7vRVjfxAUq5sg2Y1PuXBNB6i', 1, 1, 0),
('4', '4', 'User 4', '', 1, 1, 0),
('5', '5', 'User 5', '', 0, 1, 0),
('6', '6', 'User 6', '', 1, 1, 0),
('66916025-3af1-4716-9a6a-7109bf7f82ac', '66916025-3af1-4716-9a6a-7109bf7f82ac', 'admin', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 100, 0),
('6893aa66-6f86-4397-92ac-12fbbadcaff8', '6893aa66-6f86-4397-92ac-12fbbadcaff8', 'hiem', 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg', 1, 1, 0),
('7', '7', 'User 7', '', 0, 1, 0),
('8', '8', 'User 8', '', 1, 1, 0),
('9', '9', 'User 9', '', 0, 1, 0);

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
('1', '1', 'naruto', 10, 'cu giả', '', 2, 1, '2023-11-12', 'dang ra'),
('10', '10', 'Truyen 10', 28, 'Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10 Tom tat noi dung truyen 10', '', 0, -1, '2023-07-30', 'block'),
('2', '1', 'sasuke', 10, 'đồ sát', '', 2, 2, '2023-11-12', 'block'),
('3', '3', 'Truyen 3', 15, 'Tom tat noi dung truyen 3', '', 0, 0, '2023-11-12', 'block'),
('4', '4', 'Truyen 4', 25, 'Tom tat noi dung truyen 4', '', 0, 0, '2023-11-12', '1'),
('5', '5', 'Truyen 5', 18, 'Tom tat noi dung truyen 5', '', 1000, 0, '2023-11-12', '1'),
('6', '6', 'Truyen 6', 22, 'Tom tat noi dung truyen 6', '', 0, 0, '2023-11-12', '1'),
('7', '7', 'Truyen 7', 30, 'Tom tat noi dung truyen 7', '', 0, 0, '2023-11-12', '1'),
('8', '8', 'Truyen 8', 17, 'Tom tat noi dung truyen 8', '', 0, 0, '2023-11-12', '1'),
('9', '9', 'Long Ngoại Đạo', 19, 'Tom tat noi dung truyen 9', '', 0, 0, '2023-11-12', '1');

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
