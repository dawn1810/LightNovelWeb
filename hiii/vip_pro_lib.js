const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://binhminh19112003:18102003@cluster0.hgdf1kd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connectMGDB() {
  await client.connect();
}
connectMGDB();
exports.add_one_Data = async function (table, myobj) {
  try {
    // await client.connect();
    // let myobj = { user_name: "Long Khoa Hoc", user_id: "longdd", password: "Nl<3Bp"};
    const resual = await client.db("wtfn").collection(table).insertOne(myobj);
    // console.log('SYSTEM | ADD_ONE_DATA | Add document', myobj, 'successfull');
    return resual;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.add_many_Data = async function (table, myobj) {
  try {
    // await client.connect();
    // let myobj = [
    //   { user_name: "Long Khoa Hoc", user_id: "longpb", password: "29092006"},
    //   { user_name: "Long Nghien", user_id: "longdd", password: "Nl<3Bp"}
    // ];;
    await client.db("wtfn").collection(table).insertMany(myobj);
    // console.log('SYSTEM | ADD_MANY_DATA | Add many documents', myobj, 'successfull');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.delete_one_Data = async function (table, myobj) {
  try {
    // await client.connect();
    // let myobj = { user_name: "Long Khoa Hoc"};
    await client.db("wtfn").collection(table).deleteOne(myobj);
    // console.log('SYSTEM | DELETE_ONE_DATA | Delete document', myobj, 'successfull');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.delete_many_Data = async function (table, myobj) {
  try {
    // await client.connect();
    // let myobj = { user_name: "Long Khoa Hoc"};
    await client.db("wtfn").collection(table).deleteMany(myobj);
    // console.log('SYSTEM | DELETE_MANY_DATA | Delete many documents', myobj, 'successfull');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.find_one_Data = async function (table, myobj = undefined) {
  try {
    // await client.connect();
    // let myobj = { user_name: "Long Khoa Hoc"};
    let result = await client.db("wtfn").collection(table).findOne(myobj);

    // console.log('SYSTEM | FIND_ONE_DATA | Finding document: ', result);

    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.find_all_Data = async function ({
  table,
  query = undefined,
  projection = undefined,
  skip = 0,
  limit = 0,
  sort = undefined,
}) {
  try {
    // await client.connect();
    // let query = { user_name: "Long Khoa Hoc"};
    // sort go here: https://www.w3schools.com/nodejs/nodejs_mongodb_sort.asp
    let result = await client
      .db("wtfn")
      .collection(table)
      .find(query, { projection: projection })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();

    // Chuyển đổi giá trị _id của từng bản ghi sang chuỗi ký tự

    // console.log('SYSTEM | FIND_MANY_DATA | Finding documents: ', result);

    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.update_one_Data = async function (table, myquery, newvalues) {
  try {
    // await client.connect();
    // let myquery = { user_name: "Long Khoa Hoc"};
    // let newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    // có nhiều toán từ  $set, $inc, $push, $pull, tự google
    await client.db("wtfn").collection(table).updateOne(myquery, newvalues);

    // console.log('SYSTEM | UPDATE_ONE_DATA | Update document', myquery, 'to', newvalues, 'successfull');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

exports.update_many_Data = async function (table, myquery, newvalues) {
  try {
    // await client.connect();
    // let myquery = { user_name: "Long Khoa Hoc"};
    // let newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    // có nhiều toán từ  $set, $inc, $push, $pull, tự google
    await client.db("wtfn").collection(table).updateMany(myquery, newvalues);

    // console.log('SYSTEM | UPDATE_MANY_DATA | Update documents', myquery, 'to', newvalues, 'successfull');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

///debug only
exports.atomic = async function (databaseName, password) {
  if (password === "18102003") {
    try {
      // await client.connect();
      const database = client.db(databaseName);

      // Lấy danh sách tên các collection hiện có
      const collections = await database.listCollections().toArray();
      const collectionNames = collections.map((collection) => collection.name);

      // Xoá cơ sở dữ liệu hiện tại
      await database.dropDatabase();
      console.log(
        "SYSTEM | ATOMIC |\n______             _      ______ _            ______         _                   \n| ___ \\           | |     | ___ | |           |  _  \\       | |                  \n| |_/ / __ _ _ __ | |__   | |_/ | |__   ___   | | | |___ ___| |_ _ __ ___  _   _ \n| ___ \\/ _` | '_ \\| '_ \\  |  __/| '_ \\ / _ \\  | | | / _ / __| __| '__/ _ \\| | | |\n| |_/ | (_| | | | | | | | | |   | | | | (_) | | |/ |  __\\__ | |_| | | (_) | |_| |\n\\____/ \\__,_|_| |_|_| |_| \\_|   |_| |_|\\___/  |___/ \\___|___/\\__|_|  \\___/ \\__, |\n                                                                            __/ |\n                                                                           |___/ \n"
      );

      // Tạo lại các collection với tên cũ
      for (const collectionName of collectionNames) {
        await database.createCollection(collectionName);
        console.log(
          "SYSTEM | ATOMIC | Recreate collection:",
          collectionName,
          "successfull"
        );
      }

      // Các công việc khác, ví dụ: tạo các index, khởi tạo dữ liệu, vv.
    } finally {
      // await client.close();
    }
  } else {
    console.log("SYSTEM | ATOMIC | Fail, admin comming to you (╬▔皿▔)╯!!!");
  }
};

exports.atomic_table = async function (databaseName, tableList, password) {
  if (password === "18102003") {
    try {
      // await client.connect();
      const database = client.db(databaseName);
      for (const collectionName of tableList) {
        await database.dropCollection(collectionName);
        console.log(
          "SYSTEM | ATOMIC | Recreate collection:",
          collectionName,
          "successfull"
        );
      }
      // Xoá cơ sở dữ liệu hiện tại
      console.log(
        "SYSTEM | ATOMIC |\n______             _      ______ _            ______         _                   \n| ___ \\           | |     | ___ | |           |  _  \\       | |                  \n| |_/ / __ _ _ __ | |__   | |_/ | |__   ___   | | | |___ ___| |_ _ __ ___  _   _ \n| ___ \\/ _` | '_ \\| '_ \\  |  __/| '_ \\ / _ \\  | | | / _ / __| __| '__/ _ \\| | | |\n| |_/ | (_| | | | | | | | | |   | | | | (_) | | |/ |  __\\__ | |_| | | (_) | |_| |\n\\____/ \\__,_|_| |_|_| |_| \\_|   |_| |_|\\___/  |___/ \\___|___/\\__|_|  \\___/ \\__, |\n                                                                            __/ |\n                                                                           |___/ \n"
      );

      for (const collectionName of tableList) {
        await database.createCollection(collectionName);
        console.log(
          "SYSTEM | ATOMIC | Recreate collection:",
          collectionName,
          "successfull"
        );
      }

      // Các công việc khác, ví dụ: tạo các index, khởi tạo dữ liệu, vv.
    } finally {
      // await client.close();
    }
  } else {
    console.log("SYSTEM | ATOMIC | Fail, admin comming to you (╬▔皿▔)╯!!!");
  }
};

/////////////////////////this is drive....//////////////////////////////
const fs = require("fs");
const { google } = require("googleapis");
const NodePersist = require("node-persist");
const path = require("path");

// Create a new Google Drive instance
const drive = google.drive("v3");

// Initialize the NodePersist storage
const storage = NodePersist.create({
  dir: ".credentials",
});

// Function to initialize storage asynchronously
const initStorage = async () => {
  await storage.init();
};
let auth;
const initGoogle = async () => {
  let credentials = await storage.getItem("certgoogle");

  // Authorize the client
  auth = new google.auth.OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris && credentials.web.redirect_uris.length > 0
      ? credentials.web.redirect_uris[0]
      : "http://localhost"
  );
};
initGoogle()
// để đây t làm
async function getNewAccessTokenUsingRefreshToken(refreshToken) {
  try {
    auth.setCredentials({ refresh_token: refreshToken });
    const refreshedTokens = await auth.getAccessToken();
    return refreshedTokens.res.data;
  } catch (error) {
    console.log("SYSTEM | DRIVE | Lỗi làm mới mã truy cập:", error);
  }
}
// Generate an access token and refresh token if not available
const getAccessToken = async () => {
  let tokens = await storage.getItem("tokens");
  let token;

  if (tokens) {
    const now = new Date().getTime();
    if (tokens.expiry_date && tokens.expiry_date > now) {
      token = tokens.access_token;
    } else if (tokens.refresh_token) {
      try {
        const new_tokens = await getNewAccessTokenUsingRefreshToken(
          tokens.refresh_token
        );
        token = new_tokens.access_token;
        await storage.setItem("tokens", new_tokens);
      } catch (error) {
        console.log("SYSTEM | DRIVE | Error refreshing access token:", error);
      }
    }
  }

  if (!token) {
    const authUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive"],
    });

    console.log(
      "SYSTEM | DRIVE | Authorize this app by visiting this URL:",
      authUrl
    );

    const code = await getCodeFromUser();
    tokens = await getAccessTokenFromCode(code);
    await storage.setItem("tokens", tokens);
  }

  auth.setCredentials(tokens);
};

// Function to get authorization code from user
const getCodeFromUser = () => {
  return new Promise((resolve) => {
    // In this example, we assume the user manually enters the code in the terminal
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("SYSTEM | DRIVE | Enter the authorization code: ", (code) => {
      rl.close();
      resolve(decodeURIComponent(code));
    });
  });
};

// Function to exchange authorization code for access token
const getAccessTokenFromCode = (code) => {
  return new Promise((resolve, reject) => {
    auth.getToken(code, (err, token) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(token);
    });
  });
};

// Upload the file to Google Drive
exports.uploadFileToDrive = async (
  filePath,
  id_folder = "1Tv80lyGA-rYIsN6nT9_A-E6f7tEnLXtV"
) => {
  await initStorage();
  await getAccessToken();
  const fileName = path.basename(filePath);
  const fileMetadata = {
    name: fileName,
    parents: [id_folder],
  };
  // console.log('SYSTEM | DRIVE | Cbi úp lên');

  const media = {
    mimeType: "application/octet-stream",
    body: fs.createReadStream(filePath),
  };

  try {
    const res = await drive.files.create({
      auth,
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    // console.log('SYSTEM | DRIVE | File uploaded successfully! File ID:', res.data.id);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("SYSTEM | DRIVE | ERR |", err);
        return;
      }
      // console.log('SYSTEM | DRIVE | File local deleted successfully');
    });
    return res.data.id;
  } catch (err) {
    console.error("SYSTEM | DRIVE | ERR | uploading file:", err);
  }
};

const getFileName = async (fileId) => {
  const drive = google.drive({ version: "v3", auth });

  try {
    const response = await drive.files.get({
      fileId,
      fields: "name",
    });

    const fileName = response.data.name;
    // console.log('File name:', fileName);
    return fileName;
  } catch (error) {
    console.error("Error retrieving file name:", error);
  }
};

// Download the file from Google Drive
exports.downloadFileFromDrive = async (fileId) => {
  await initStorage();
  await getAccessToken();
  const res = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "stream", auth }
  );

  // let fileName = await getFileName(fileId);
  // const destFilePath = path.join(destDirectory, fileName);
  // const destFile = fs.createWriteStream(destFilePath);

  return new Promise((resolve, reject) => {
    const chunks = [];

    res.data
      .on("data", (chunk) => {
        chunks.push(chunk);
      })
      .on("end", () => {
        // console.log('SYSTEM | DRIVE | File downloaded successfully!');
        const fileContent = Buffer.concat(chunks).toString("utf8");
        resolve(fileContent);
      })
      .on("error", (err) => {
        console.error("SYSTEM | DRIVE | Error downloading file:", err);
        reject(err);
      });
    // .pipe(destFile);

    // console.log('SYSTEM | DRIVE | File reading successfully!');
  });
};

exports.downloadFileFromDriveforUser = async (fileId, res) => {
  await initStorage();
  await getAccessToken();
  const fileStream = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "stream", auth }
  );

  // Get the file name from Google Drive API or use a fixed filename
  let fileName = await getFileName(fileId);
  // Set the Content-Disposition header with the desired filename
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

  // Pipe the file stream to the response object
  fileStream.data
    .on("data", (chunk) => {
      res.write(chunk);
    })
    .on("end", () => {
      // console.log('SYSTEM | DRIVE | File sent successfully!');
      res.end();
    })
    .on("error", (err) => {
      console.error("SYSTEM | DRIVE | Error sending file:", err);
      res.status(500).end(); // Or handle the error in an appropriate way
    });

  // console.log('SYSTEM | DRIVE | File reading successfully!');
};

exports.deleteFileFromDrive = async (fileId) => {
  await initStorage();
  await getAccessToken();
  try {
    await drive.files.delete({
      fileId: fileId,
      auth: auth,
    });
    // console.log('SYSTEM | DRIVE | File deleted successfully!');
  } catch (err) {
    console.error("SYSTEM | DRIVE | Error deleting file:", err);
  }
};
// ------------------------------------------------------------------------------------------------------
