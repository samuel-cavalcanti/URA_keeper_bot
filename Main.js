const TeleBot = require('telebot');
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
var BUTTONS = mergeButtons(itens_dbButtons, event_dbButtons);



var item;



// const bot = new TeleBot('470001281:AAEJm0YedIc8mRqKGH410Q8QOHRz5VQrTp4');
const bot = new TeleBot({
  token: '470001281:AAEJm0YedIc8mRqKGH410Q8QOHRz5VQrTp4',
  usePlugins: ['namedButtons'],
  pluginConfig: {
    namedButtons: {
      buttons: BUTTONS
    }
  },
  /*
    usePlugins: ['floodProtection'],
    pluginConfig: {
        floodProtection: {
            interval: 2,
            message: 'Too many messages, relax!'
        }
    }
    */
});


bot.on(['/start'], msg => {




  let replyMarkup = bot.keyboard(
    [
      [
        BUTTONS.Ultrassom.label, BUTTONS.CI_L293D.label,
        BUTTONS.Motores_DC.label
      ],
      [
        BUTTONS.Arduíno_Nano.label, BUTTONS.Servos.label,
        BUTTONS.ESP_12F.label
      ],
      [BUTTONS.next.label]


    ], {
      resize: true
    });

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {
    replyMarkup
  });

});



bot.on(["/next1"], msg => {

  let replyMarkup = bot.keyboard(
    [
      [
        BUTTONS.MCS_PCA968.label, BUTTONS.Leitor_de_RFID.label,
        BUTTONS.CNC_Shield.label
      ],
      [
        BUTTONS.NodeMCU.label, BUTTONS.Raspcam.label,
        BUTTONS.Raspbarry_Pi.label
      ],
      [BUTTONS.next2.label],
      [BUTTONS.back.label]


    ], {
      resize: true
    });

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D ', {
    replyMarkup
  });


});






bot.on(["/next2"], msg => {


  let replyMarkup = bot.keyboard(
    [
      [BUTTONS.Acoplador_eixo_Z.label, BUTTONS.Atmega_328P.label],

      [BUTTONS.encoder.label, BUTTONS.MPU_9250.label],

      [BUTTONS.Shield_Motor_DC_p_NodeMCU.label],

      [BUTTONS.back2.label]
    ], {
      resize: true
    });

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {
    replyMarkup
  });


});

bot.on(['/Servos'], msg => {


  let replyMarkup = bot.keyboard(
    [
      [BUTTONS.Servo_HK_15288A.label, BUTTONS.Servo_MG_90S.label],
      [BUTTONS.Servo_mg996r.label, BUTTONS.Servo_sg92r.label],
      [BUTTONS.back.label]
    ], {
      resize: true
    });

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {
    replyMarkup
  });

});


bot.start(init());

function init() {

  //createOptionsList();


  loadItemAnswer();
  //loadEventAnswer();

}

function loadItemAnswer() {


  Object.keys(itens_dbButtons).forEach(b => {

    setItemEvent(itens_dbButtons[b])
  })

}

function loadEventAnswer() {

  Object.keys(BUTTONS[1]).forEach(function (b) {

    //   setAnswerEvent(BUTTONS[1][b])
  })

}






function setItemEvent(button) {


  bot.on([button.command], msg => {


    let item = dbObjects.get(button.label).value();


    let answerBot = 'tem ' + item.users[0].number + " unidades de " + button.label +
      ' no ' + item.users[0].name;

    bot.sendMessage(msg.from.id, answerBot);

    //if (item.users[0].number > 0)
    // lendEvent(item)



  });

}



function setAnswerEvent(event) {

  let firstColumn = getArrayofItens(3);
  let secondColumn = getArrayofItens(3);



  let keyboardButtons = [firstColumn, secondColumn];


  let replyMarkup = bot.keyboard(
    [
      [
        BUTTONS.MCS_PCA968.label, BUTTONS.Leitor_de_RFID.label,
        BUTTONS.CNC_Shield.label
      ],
      [
        BUTTONS.NodeMCU.label, BUTTONS.Raspcam.label,
        BUTTONS.Raspbarry_Pi.label
      ],
      [BUTTONS.MaisItens_2.label],
      [BUTTONS.back.label]


    ], {
      resize: true
    });

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {
    replyMarkup
  });

}


function mergeButtons(itens_dbButtons, event_dbButtons) {
  var all_buttons = {};

  Object.keys(itens_dbButtons).forEach(function (b) {

    all_buttons[b] = itens_dbButtons[b];

  })



  Object.keys(event_dbButtons).forEach(function (b) {

    all_buttons[b] = event_dbButtons[b];

  })

  return all_buttons;

}