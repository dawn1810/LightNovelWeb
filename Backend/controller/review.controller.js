const { connection, queryAsync } = require("../dbmysql");
// const { connectToDatabase } = require('../dbmysql');

const func_controller = require("./func.controller");

const renderReviews = async (req, res) => {
  try {
    const account = req.cookies.account;
    console.log("SYSTEM | REVIEWS |", account);
    // Get novel information:
    let result = await queryAsync("SELECT * FROM truyen");

    //paste here
    console.log("hhhihiihih", result);
    // default if they don't have an account
    // result[0].luot_thich = 0; ///here

    let theloaiID = await queryAsync(
      "SELECT id_the_loai FROM the_loai_truyen,truyen WHERE truyen.id = the_loai_truyen.id_truyen "
    );
    console.log("the loai:", theloaiID);
    const genres = theloaiID.map((row) => row.id_the_loai);
    const genreList = genres.map((genre) => `'${genre}'`).join(", ");

    console.log("genreList: ", genreList);
    const maybeulikethat = await queryAsync(
      `SELECT DISTINCT truyen.ten_truyen, tacgia.ten_tac_gia AS author, truyen.anh_dai_dien, truyen.so_luong_chuong AS no_chapters, truyen.trang_thai AS status, truyen.luot_thich AS likes, truyen.luot_xem AS views, truyen.ngay_cap_nhat AS update_date
     FROM truyen
     INNER JOIN tacgia ON truyen.id_tac_gia = tacgia.id
     INNER JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen
     INNER JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id
     WHERE the_loai_truyen.id_the_loai IN (${genreList})
     ORDER BY truyen.ngay_cap_nhat DESC, truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ten_truyen ASC
     LIMIT 6;`
    );
    console.log(maybeulikethat);
    // const maybeulike = await server.find_all_Data({
    //   table: "truyen",
    //   query: { genres: { $in: result[0].genres } },
    //   projection: {
    //     name: 1,
    //     author: 1,
    //     image: 1,
    //     no_chapters: 1,
    //     status: 1,
    //     likes: 1,
    //     views: 1,
    //     update_date: 1,
    //   },
    //   sort: { update_date: -1, views: -1, likes: -1, name: 1 },
    //   limit: 6,
    // });

    for (let i = 0; i < maybeulike.length; i++) {
      maybeulike[i].update_date = func_controller.calTime(
        maybeulike[i].update_date
      );
    }
    if (account) {
      const decode = func_controller.decrypt(account, authenticationKey);
      const decodeList = decode.split(":");
      if (decodeList[0] == authenticationKey) {
        // check does novel was liked by current user or not
        const like_list = await server.find_all_Data({
          table: "tt_nguoi_dung",
          query: { _id: decodeList[1] },
          projection: {
            _id: 0,
            likeNovels: 1,
          },
          limit: 1,
        });

        if (like_list[0].likeNovels.includes(req.params.id)) {
          // liked
          result[0].liked = 1;
        }
      }
    }

    res.render("reviews.ejs", {
      headerFile: "header",
      footerFile: "footer",
      name: result[0].name,
      author: result[0].author,
      name_chaps: result[0].name_chaps,
      no_chapters: result[0].no_chapters,
      genres: result[0].genres,
      summary: result[0].summary,
      image: result[0].image,
      views: result[0].views,
      likes: result[0].likes,
      update_date: func_controller.calTime(result[0].update_date),
      status: result[0].status,
      liked: result[0].liked,
      maybeulike: maybeulike,
    });
    // res.send('reviews truyen ở đây')
  } catch (err) {
    console.log("SYSTEM | REVIEWS | ERROR | ", err);
    res.sendStatus(500);
  }
};

module.exports = {
  renderReviews,
};
