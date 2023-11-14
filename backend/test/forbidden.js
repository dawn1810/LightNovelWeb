const NodePersist = require("node-persist");

// Initialize the NodePersist storage
const storage = NodePersist.create({
  dir: ".credentials",
});

// Function to initialize storage asynchronously
const initStorage = async () => {
  await storage.init();
  await storage.setItem("certgoogle", {
    web: {
      client_id:
        "483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com",
      project_id: "centered-effort-390018",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_secret: "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",
      redirect_uris: [
        "http://localhost",
        "http://localhost:6969/auth/google/callback",
      ],
      javascript_origins: ["http://localhost"],
    },
  });
  return true
};
initStorage().then(resual=> {console.log(resual)})
