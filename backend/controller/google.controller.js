const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { queryAsync } = require("../dbmysql");

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
const port = 6969;
let currentURL = `http://localhost:${port}`;

passport.deserializeUser(async function (userId, done) {
  try {

    const user = await queryAsync(`SELECT id, ten_tai_khoan as username FROM taikhoan_nguoidung WHERE id= '${userId}'`);

    done(null, { ...user[0] });
  } catch (err) {
    done(err);
  }
});

//////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////

// const storage = NodePersist.create({
//   dir: ".credentials",
// });

// // Function to initialize storage asynchronously
// const initStorage = async () => {
//   await storage.init();
// };
// let credentials;
// const initGoogle = async () => {
//   await initStorage();
//   credentials = await storage.getItem("certgoogle");
//   return credentials;
//   /*/.credentials/1866203e7cb0464532af9841f77e9ae9*/
// };

passport.use(
  new GoogleStrategy(
    {
      clientID: "483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: currentURL + "/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        // console.log(accessToken);
        // console.log(refreshToken);
        // console.log(request);
        // Kiểm tra xem thông tin người dùng đã tồn tại chưa
        await queryAsync(`
		INSERT INTO taikhoan_nguoidung (id, ten_tai_khoan, email, mat_khau, login_way)
		VALUES ('${profile.id}','${profile.id}', '${profile.emails[0].value}', null, 'google')
		ON DUPLICATE KEY UPDATE
			email = '${profile.emails[0].value}'
		`);

        await queryAsync(`
		INSERT INTO thongtin_nguoidung (id, id_tai_khoan, ten_hien_thi, anh_dai_dien)
		VALUES ('${profile.id}', '${profile.id}', '${profile.displayName}', '${profile.photos[0].value}')
		ON DUPLICATE KEY UPDATE
			ten_hien_thi = '${profile.displayName}',
			anh_dai_dien = '${profile.photos[0].value}'
		`);

        // Fetch the user data from the database
        const user = {
          id: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          photo: profile.photos[0].value,
        };

        // Pass the user data to the done function
        return done(null, user);
        // const existingUser = await server.find_one_Data("tt_nguoi_dung", {
        //   _id: profile.id,
        // });
        // if (existingUser) {
        //   // update new data for tt_nguoi_dung database

        //   await server.update_one_Data(
        //     "tt_nguoi_dung",
        //     { _id: profile.id },
        //     {
        //       $set: {
        //         email: profile.emails[0].value,
        //         displayName: profile.displayName,
        //         avatarUrl: profile.photos[0].value,
        //       },
        //     }
        //   );

        //   return done(null, existingUser);
        // } else {
        //   // Tạo mới một người dùng
        //   const newUser = {
        //     _id: profile.id,
        //     email: profile.emails[0].value,
        //     displayName: profile.displayName,
        //     avatarUrl: profile.photos[0].value,
        //     sex: "unknown",
        //     likeNovels: [],
        //     mynovel: [],
        //   };

        //   // taikhoan_nguoidung database:
        //   await server.add_one_Data("dang_nhap", {
        //     _id: profile.id,
        //     lgway: "google",
        //   });

        //   // thongtin_nguoidung database:
        //   await server.add_one_Data("tt_nguoi_dung", newUser);

        //   /// set cookie cho vào tài khoảng
        //   return done(null, newUser);
        // }
      } catch (err) {
        return done(err);
      }
    }
  )
);

// const gg_login = () => {
//   return passport.authenticate("google", {
//     scope: ["profile", "email"],
//   });
// };

// const gg_call_back = () => {
//   passport.authenticate("google", { failureRedirect: "/api/login" });
// };

const open_window = (req, res) => {
  // req.user = {
  // 	_id: '113263126602180653712',
  // 	email: 'binhminh19112003@gmail.com',
  // 	displayName: 'Dawn Nguyen',
  // 	avatarUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdoUcqqaX6Kqqxfujnio9LmL2J_SIYjDaxcb8kf=s96-c',
  // 	sex: 'unknown',
  // 	likeNovels: [],
  // 	monitorNovels: [],
  // 	commentIds: []
  //  }
  //set cookies
  // func.set_cookies(res, req.user._id, "");

  // Đóng tab hiện tại và reload main window
  res.write("<script>");
  res.write("window.close();");
  res.write("window.opener.location.reload();");
  res.write("</script>");
  // dùng chung
  res.end("Login thanh cong!");
  // res.sendStatus(404);
};

module.exports = {
  passport,
  open_window,
};
