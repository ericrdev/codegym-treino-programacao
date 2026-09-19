const test=require('node:test'),assert=require('node:assert/strict');const {run}=require('../runners/pythonRunner');
const tests=[{args:[2,3],expected:5}];
test('executa uma função Python permitida',async()=>{const r=await run('def resolver(a,b):\n return a+b',tests);assert.equal(r.results[0].passed,true)});
test('bloqueia imports',async()=>{const r=await run('import os\ndef resolver(a,b):\n return 5',tests);assert.match(r.error,/recurso não é permitido/)});
