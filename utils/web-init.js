// Init your Web SDK
import { Appwrite } from "appwrite";

export const sdk = new Appwrite();
sdk
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("DocsID"); // Your project ID
//   .setJWT()

export const createAnonymousSession = async () => {
  try {
    // await sdk.account.createJWT().then(({ jwt }) => sdk.setJWT(jwt));
    await sdk.account.createAnonymousSession();
  } catch (err) {
    console.log(err);
  }
};
