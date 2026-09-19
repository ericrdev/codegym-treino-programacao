const { spawn } = require('child_process');
const PYTHON_HARNESS = String.raw`
import ast,json,sys
code=sys.stdin.read()
blocked={'open','exec','eval','compile','__import__','input','globals','locals','vars','getattr','setattr','delattr','help','dir','breakpoint'}
try:
 tree=ast.parse(code)
 for node in ast.walk(tree):
  if isinstance(node,(ast.Import,ast.ImportFrom,ast.With,ast.AsyncWith,ast.Lambda,ast.ClassDef,ast.Global,ast.Nonlocal)):
   raise ValueError('Este recurso não é permitido no ambiente de treino.')
  if isinstance(node,ast.Name) and (node.id in blocked or node.id.startswith('__')): raise ValueError('Uso de '+node.id+' não permitido.')
  if isinstance(node,ast.Attribute) and node.attr.startswith('__'): raise ValueError('Acesso interno não permitido.')
 allowed={'abs':abs,'all':all,'any':any,'bool':bool,'enumerate':enumerate,'float':float,'int':int,'len':len,'list':list,'max':max,'min':min,'range':range,'reversed':reversed,'round':round,'sorted':sorted,'str':str,'sum':sum,'zip':zip,'True':True,'False':False}
 scope={'__builtins__':allowed}
 exec(compile(tree,'solucao.py','exec'),scope,scope)
 fn=scope.get('resolver')
 if not callable(fn): raise ValueError('Crie uma função chamada resolver.')
 tests=json.loads(sys.argv[1]); results=[]
 for test in tests:
  try:
   actual=fn(*test['args']); expected=test['expected']; ok=actual==expected
   results.append({'passed':ok,'input':test['args'],'expected':expected,'actual':actual if isinstance(actual,(str,int,float,bool,list,dict,type(None))) else str(actual)})
  except Exception as e: results.append({'passed':False,'input':test['args'],'expected':test['expected'],'actual':'Erro: '+str(e)})
 print(json.dumps({'results':results}))
except Exception as e: print(json.dumps({'error':str(e)}))
`;
function run(code, tests) { return new Promise(resolve => {
  const child = spawn('python', ['-I', '-c', PYTHON_HARNESS, JSON.stringify(tests)], { windowsHide: true, stdio: ['pipe','pipe','pipe'] }); let out='', err='';
  const timer=setTimeout(() => { child.kill(); resolve({ error: 'Tempo limite excedido (2 segundos). Verifique loops infinitos.' }); }, 2000);
  child.stdout.on('data', d => out += d); child.stderr.on('data', d => err += d);
  child.on('error', () => { clearTimeout(timer); resolve({ error: 'Python 3 não foi encontrado no PATH.' }); });
  child.on('close', () => { clearTimeout(timer); try { resolve(JSON.parse(out)); } catch { resolve({ error: err || 'Não foi possível executar o código.' }); } }); child.stdin.end(code);
 }); }
module.exports = { run };
