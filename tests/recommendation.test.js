const test=require('node:test'),assert=require('node:assert/strict');const {recommend}=require('../services/recommendation');
test('prioriza assunto com desempenho abaixo de 50%',()=>{const r=recommend({level:5,solved:[],topics:{'Repetição':{attempts:3,correct:1}}});assert.equal(r.weakTopic,'Repetição');assert.equal(r.exercise.category,'Repetição')});
