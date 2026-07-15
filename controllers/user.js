const User = require("../models/user.js")


module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email })
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser)
        req.login(registeredUser, (err) => {
            if (err) { next(err) }
            req.flash("success", "Welcome the WanderLust")
            res.redirect("/listings")
        })
    }
    catch (error) {
        req.flash("error", error.message)
    }
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to WanderLust")
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl)
}

module.exports.loginForm = (req, res) => {
    res.render("users/login.ejs")

}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err)
        } else {
            req.flash("success", "Succesfully logged out")
            res.redirect("/listings")
        }
    })
}