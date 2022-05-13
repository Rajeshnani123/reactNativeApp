const userProfileBaseUrl = "http://gmausermanagement-env-1.eba-kjs6rw3r.ap-south-1.elasticbeanstalk.com";
const productDetails = "http://gma-env.eba-hscm2pi3.ap-south-1.elasticbeanstalk.com";
const version1 = "/api/v1/account";
const productCommon = "/api/products";
const store = "/api/Stores";
const mdm = "/api/mdm/products";

export const ApiConnections = {
    Account : userProfileBaseUrl+  version1,
    Login: userProfileBaseUrl + version1 + "/authenticate",
    Deactivate: userProfileBaseUrl + version1 + "/deactivate",
    ForgotPassword: userProfileBaseUrl + version1 + "/update-password",
    Products: productDetails + productCommon,
    store: productDetails + store,
    storeProduct: productDetails + mdm,
}
