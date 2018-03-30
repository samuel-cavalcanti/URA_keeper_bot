const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const objects = new FileSync('objects.json');
const itens_buttonsJSON = new FileSync('itens_buttons.json');
const event_buttonsJSON = new FileSync('event_buttons.json');
const dbObjects = low(objects);
const itens_Buttons = low(itens_buttonsJSON);
const event_buttons = low(event_buttonsJSON);
const event_dbButtons = event_buttons.value();
const itens_dbButtons = itens_Buttons.value();
var all_buttons = {};



var Menu = function (options, nextMenu, previousMenu) {
    this.options = options;
    this.next = nextMenu;
    this.previous = previousMenu;
}

var MenuList = function (itens_dbButtons,event_dbButtons){
    
    this.list = createMenuList(itens_dbButtons,event_dbButtons);

};


function mergeButtons(itens_dbButtons, event_dbButtons) {


    Object.keys(itens_dbButtons).forEach(function (b) {

        all_buttons[b] = itens_dbButtons[b];

    })

    Object.keys(event_dbButtons).forEach(function (b) {

        all_buttons[b] = event_dbButtons[b];

    })

    return all_buttons;

}

function createOptionsList() {

    let optionsList = [];
  

    for (let i = 0; i < Object.keys(itens_dbButtons).length;) {
        let options = [];

    
        for (let j = 0; j < 6 && i < Object.keys(itens_dbButtons).length; j++) {
            options.push(itens_dbButtons[Object.keys(itens_dbButtons)[i]]);
            i++;
        }

        optionsList.push(options);

    }

    return optionsList;


}

function createMenuList(){
    let optionsList = createOptionsList();

    var menu  = new Menu(optionsList[0],null, null);

    for ( let i = 0; i < optionsList.length; i++ ){
       

    }


}

function makeList(options,)







export {
    all_buttons
};