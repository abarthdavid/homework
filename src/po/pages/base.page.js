
class BasePage{

    async open(){
        await browser.url('https://epam.com');
    }
}

module.exports = BasePage;