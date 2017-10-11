const TeleBot = require('telebot');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const objects = new FileSync('objects.json');
const buttonsJSON = new FileSync('buttons.json');
const dbObjects = low(objects);
const dbButtons = low(buttonsJSON);
const BUTTONS = dbButtons.value();

var item;



// const bot = new TeleBot('470001281:AAEJm0YedIc8mRqKGH410Q8QOHRz5VQrTp4');
const bot = new TeleBot({
  token: '470001281:AAEJm0YedIc8mRqKGH410Q8QOHRz5VQrTp4',
  usePlugins: ['namedButtons'],
  pluginConfig: {
    namedButtons: {
      buttons: BUTTONS
    }
  }, /*
   usePlugins: ['floodProtection'],
   pluginConfig: {
       floodProtection: {
           interval: 2,
           message: 'Too many messages, relax!'
       }
   }
   */
});



bot.on(['/start', '/back'], msg => {
  console.log(BUTTONS);



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
        [BUTTONS.MaisItens_1.label]


      ],
      {resize: true});

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {replyMarkup});

});

bot.on(['/MaisItens_1'], msg => {

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
        [BUTTONS.MaisItens_2.label], [BUTTONS.back.label]


      ],
      {resize: true});

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {replyMarkup});


});

bot.on(['/MaisItens_2'], msg => {


  let replyMarkup = bot.keyboard(
      [
        [BUTTONS.Acoplador_eixo_Z.label, BUTTONS.Atmega_328P.label],
        [BUTTONS.encoder.label, BUTTONS.MPU_9250.label],
        [BUTTONS.Shield_Motor_DC_p_NodeMCU.label], [BUTTONS.back2.label]
      ],
      {resize: true});

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {replyMarkup});


});

bot.on(['/Servos'], msg => {
  console.log('oi');

  let replyMarkup = bot.keyboard(
      [
        [BUTTONS.Servo_HK_15288A.label, BUTTONS.Servo_MG_90S.label],
        [BUTTONS.Servo_mg996r.label, BUTTONS.Servo_sg92r.label]
      ],
      {resize: true});

  return bot.sendMessage(msg.from.id, 'Escolha um Item :D', {replyMarkup});

});

bot.on(['/Ultrassom'], msg => {

  item = dbObjects.get('Ultrassom').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);

});



bot.on(['/CI_L293D'], msg => {

  item = dbObjects.get('CI_L293D').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});

bot.on(['/Motores_DC'], msg => {

  item = dbObjects.get('Motores_DC').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});

bot.on(['/Arduíno_Nano'], msg => {

  item = dbObjects.get('Arduíno_Nano').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});

bot.on(['/Servo_HK_15288A'], msg => {

  item = dbObjects.get('Servo_HK_15288A').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});

bot.on(['/Servo_MG_90S'], msg => {

  item = dbObjects.get('Servo_MG_90S').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});

bot.on(['/Servo_mg996r'], msg => {

  item = dbObjects.get('Servo_mg996r').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Servo_sg92r'], msg => {

  item = dbObjects.get('Servo_sg92r').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/ESP_12F'], msg => {

  item = dbObjects.get('ESP_12F').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/MCS_PCA968'], msg => {

  item = dbObjects.get('MCS_PCA968').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Leitor_de_RFID'], msg => {

  item = dbObjects.get('Leitor_de_RFID').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/CNC_Shield'], msg => {

  item = dbObjects.get('CNC_Shield').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/NodeMCU'], msg => {

  item = dbObjects.get('NodeMCU').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Raspcam'], msg => {

  item = dbObjects.get('Raspcam').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Raspbarry_Pi'], msg => {

  item = dbObjects.get('Raspbarry_Pi').value();

  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Acoplador_eixo_Z'], msg => {

  item = dbObjects.get('Acoplador_eixo_Z').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/Atmega_328P'], msg => {

  item = dbObjects.get('Atmega_328P').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/encoder'], msg => {

  item = dbObjects.get('encoder').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});


bot.on(['/MPU_9250'], msg => {

  item = dbObjects.get('MPU_9250').value();


  return bot.sendMessage(
      msg.from.id, 'tem ' + item.users[0].number + ' no ' + item.users[0].name);



});



bot.start(init());

function init(){
  
}