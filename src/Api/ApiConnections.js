const userProfileBaseUrl = "http://gmausermanagement-env-1.eba-kjs6rw3r.ap-south-1.elasticbeanstalk.com";
const productDetails = "http://gma-env.eba-hscm2pi3.ap-south-1.elasticbeanstalk.com";
const cardManagement = "http://cart-env.eba-vwx5vupq.ap-south-1.elasticbeanstalk.com";
const version1 = "/api/v1/account";
const productCommon = "/api/products";
const store = "/api/Stores";
const mdm = "/api/mdm/products";
const cardCommon = "/api/v1/cart";

export const ApiConnections = {
    Account : userProfileBaseUrl+  version1,
    Login: userProfileBaseUrl + version1 + "/authenticate",
    Deactivate: userProfileBaseUrl + version1 + "/deactivate",
    updatePassword: userProfileBaseUrl + version1 + "/update-password",
    Products: productDetails + productCommon,
    getProduct: productDetails + productCommon + "/get",
    store: productDetails + store,
    storeProduct: productDetails + mdm,
    multiProduct: productDetails + productCommon + "/create/multiple",
    getCart: cardManagement + cardCommon,
    addCart: cardManagement + cardCommon +"/add",
    removeCart: cardManagement + cardCommon + "/remove",
    updateCart: cardManagement + cardCommon + "/update",
    forgotPassword: userProfileBaseUrl + version1 + "/forgot-password",
    verifyOtp: userProfileBaseUrl + version1 + "/verify-otp", 
}
