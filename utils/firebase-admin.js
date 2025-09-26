import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import serviceAccount from "./key/serviceAccountKey.json";

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
     storageBucket: "baddarfurniture-ede29.firebasestorage.app",
  });
}

const storage = getStorage().bucket();

export { storage };
