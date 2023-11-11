const server = require("../vip_pro_lib");
// const { connectToDatabase } = require('../dbmysql');
const { ObjectId } = require('mongodb');
const func_controller = require("../controller/func.controller");

const renderReviews = async (req, res) => {
  try {
    const account = req.cookies.account;
    console.log("SYSTEM | REVIEWS |", account);
    // Get novel information:
    let result = await server.find_all_Data({
      table: "truyen",
      query: { _id: new ObjectId(req.params.id) },
      projection: {
        name: 1,
        author: 1,
        no_chapters: 1,
        genres: 1,
        summary: 1,
        image: 1,
        name_chaps: 1,
        views: 1,
        likes: 1,
        update_date: 1,
        status: 1,
      },
      limit: 1,
    });

    //paste here
    // default if they don't have an account
    result[0].liked = 0; ///here
    const maybeulike = await server.find_all_Data({
      table: "truyen",
      query: { genres: { $in: result[0].genres } },
      projection: {
        name: 1,
        author: 1,
        image: 1,
        no_chapters: 1,
        status: 1,
        likes: 1,
        views: 1,
        update_date: 1,
      },
      sort: { update_date: -1, views: -1, likes: -1, name: 1 },
      limit: 6,
    });

    for (let i = 0; i < maybeulike.length; i++) {
      maybeulike[i].update_date = func_controller.calTime(maybeulike[i].update_date);
    }
    if (account) {
      const decode = decrypt(account, authenticationKey);
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
