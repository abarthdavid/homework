class BasePage{

    get usernameTextBox(){
        return $(".header-search__panel");
    }
}
module.exports = new BasePage();