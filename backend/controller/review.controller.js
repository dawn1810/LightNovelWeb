const { connection, queryAsync } = require("../dbmysql");
// const { connectToDatabase } = require('../dbmysql');

const func_controller = require("./func.controller");
const renderReviews = async (req, res) => {
  try {
    const account = req.session.user;
    // console.log("SYSTEM | REVIEWS |", account);
    // Get novel information:
    let result = await queryAsync(
      `SELECT * FROM truyen WHERE id='${req.params.id}'`
    );
    if (result.length > 0) {
      //paste here
      // default if they don't have an account

      let theloaiID = await queryAsync(
        `SELECT DISTINCT id_the_loai FROM the_loai_truyen WHERE the_loai_truyen.id_truyen = ?`,
        [req.params.id]
      );
      // console.log("the loai:", theloaiID);
      const genres = theloaiID.map((row) => row.id_the_loai);
      const datee_get = await queryAsync("SELECT * FROM the_loai WHERE id IN (?)",[genres])
      const ten_the_loai = datee_get.map((row) => row.ten_the_loai);
      let maybeulikethat = [];
      if (genres.length > 0) {
        maybeulikethat = await queryAsync(
          `SELECT DISTINCT truyen.id as _id, truyen.ten_truyen, tacgia.ten_tac_gia AS author, truyen.anh_dai_dien as image, truyen.so_luong_chuong AS no_chapters, truyen.trang_thai AS status, truyen.luot_thich AS likes, truyen.luot_xem AS views, truyen.ngay_cap_nhat AS update_date
     FROM truyen
     INNER JOIN tacgia ON truyen.id_tac_gia = tacgia.id
     INNER JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen
     INNER JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id
     WHERE the_loai_truyen.id_the_loai IN (?)
     ORDER BY truyen.ngay_cap_nhat DESC, truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ten_truyen ASC
     LIMIT 6;`,
          [genres]
        );

        for (let i = 0; i < maybeulikethat.length; i++) {
          maybeulikethat[i].update_date = func_controller.calTime(
            maybeulikethat[i].update_date
          );
        }
      }

      if (account) {
        // check does novel was liked by current user or not
        // id_nguoidung = ${decodeList[1]}
        const like_list = await queryAsync(
          `
        SELECT * FROM truyen_yeu_thich 
        WHERE id_nguoi_dung = ?
        AND id_truyen= ?`,
          [account.id, req.params.id]
        );

        if (like_list[0]) {
          // liked
          result[0].liked = 1;
          result[0].curr_chap = like_list[0].chuong_hien_tai;
        }
      }
      // console.log(result);
      res.render("reviews.ejs", {
        headerFile: "header",
        footerFile: "footer",
        idtruyen: result[0].id,
        name: result[0].ten_truyen,
        author: result[0].author,
        // name_chaps: result[0].name_chaps,
        // no_chapters: result[0].no_chapters,
        genres: ten_the_loai,
        summary: result[0].tom_tat_noi_dung,
        image: result[0].anh_dai_dien,
        views: result[0].luot_xem,
        likes: result[0].luot_thich,
        update_date: func_controller.calTime(result[0].ngay_cap_nhat),
        status: result[0].trang_thai,
        liked: result[0].liked,
        curr_chap: result[0].curr_chap,
        maybeulike: maybeulikethat,
      });
    } else {
      return res.sendStatus(404);
    }
    // res.send('reviews truyen ở đây')
  } catch (err) {
    console.log("SYSTEM | REVIEWS | ERROR | ", err);
    res.sendStatus(500);
  }
};

module.exports = {
  renderReviews,
};
