module.exports = async(req, res, next) => {
    console.log("Accessed midlewares");
    next();
}