const userProfileBaseUrl = "http://gmausermanagement-env-1.eba-kjs6rw3r.ap-south-1.elasticbeanstalk.com";
const productDetails = "http://catalog.ap-south-1.elasticbeanstalk.com";
const cardManagement = "http://cart-env.eba-vwx5vupq.ap-south-1.elasticbeanstalk.com";
const orderManagement = "http://gma-order.ap-south-1.elasticbeanstalk.com";

const version1 = "/api/v1/account";
const productCommon = "/api/products";
const store = "/api/Stores";
const mdm = "/api/mdm/products";
const cardCommon = "/api/v1/cart";
const cartCommon = "/api/orders";
const file = "/api/upload";
const categories = "/api/categories";

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
    categories: productDetails + categories + "/child",
    createCategories: productDetails + categories,
    getCart: cardManagement + cardCommon,
    addCart: cardManagement + cardCommon +"/add",
    removeCart: cardManagement + cardCommon + "/remove",
    updateCart: cardManagement + cardCommon + "/update",
    resetPassword: userProfileBaseUrl + version1 + "/reset-password",
    forgotPassword: userProfileBaseUrl + version1 + "/forgot-password",
    verifyOtp: userProfileBaseUrl + version1 + "/verify-otp",
    storeSeller: productDetails + productCommon + "/store",
    storeOrder: cardManagement + cardCommon,
    fileUpload: productDetails + file,
    placeOrder: orderManagement + cartCommon,
    storeDatebyLocation: orderManagement + cartCommon + "/delivary-location",
}
