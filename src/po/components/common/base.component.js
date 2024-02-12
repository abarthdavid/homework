
class BaseComponent{

    constructor(rootSelector){
        this.rootSelector = rootSelector
    }
    get rootEl(){
        return $(this.rootSelector);
    }

    get logo() {
        return $('.desktop-logo');
    }
}

module.exports= BaseComponent;