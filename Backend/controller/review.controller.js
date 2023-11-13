const { connection, queryAsync } = require("../dbmysql");
// const { connectToDatabase } = require('../dbmysql');

const func_controller = require("./func.controller");
const secretKey = "5gB#2L1!8*1!0)$7vF@9";
const authenticationKey = Buffer.from(
  secretKey.padEnd(32, "0"),
  "utf8"
).toString("hex");
const renderReviews = async (req, res) => {
  try {
    const account = req.cookies.account;
    console.log("SYSTEM | REVIEWS |", account);
    // Get novel information:
    let result = await queryAsync(`SELECT * FROM truyen WHERE id=${req.params.id}`);

    //paste here
    console.log("hhhihiihih", result);
    // default if they don't have an account
    console.log(result[0].luot_thich)

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

    for (let i = 0; i < maybeulikethat.length; i++) {
      maybeulikethat[i].update_date = func_controller.calTime(
        maybeulikethat[i].update_date
      );
    }
    if (account) {
      const decode = func_controller.decrypt(account, authenticationKey);
      const decodeList = decode.split(":");
      if (decodeList[0] == authenticationKey) {
        // check does novel was liked by current user or not
        // id_nguoidung = ${decodeList[1]}
        const like_list =  await queryAsync(
          `SELECT * FROM truyen_yeu_thich WHERE id_nguoi_dung= 1  AND id_truyen= ${req.params.id}`
        );
        console.log(like_list)

        if (like_list[0]) {
          // liked
          result[0].liked = 1;
        }
      }
    }
console.log(result);
    res.render("reviews.ejs", {
      headerFile: "header",
      footerFile: "footer",
      name: result[0].ten_truyen,
      author: result[0].author,
      name_chaps: result[0].name_chaps,
      no_chapters: result[0].no_chapters,
      genres: genres,
      summary: result[0].tom_tat_noi_dung,
      image: result[0].anh_dai_dien,
      views: result[0].luot_xem,
      likes: result[0].luot_thich,
      update_date: func_controller.calTime(result[0].update_date),
      status: result[0].status,
      liked: result[0].liked,
      maybeulike: maybeulikethat,
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
