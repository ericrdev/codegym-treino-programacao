const fs = require('fs'); const path = require('path');
const file = path.join(__dirname, '..', 'data', 'progress.json');
const initial = { xp: 120, level: 2, streak: 4, studiedMinutes: 95, attempts: [], solved: [], hintFreeSolved: 0 };
function read() { try { return { ...initial, ...JSON.parse(fs.readFileSync(file, 'utf8')) }; } catch { return { ...initial }; } }
function save(progress) { fs.writeFileSync(file, JSON.stringify(progress, null, 2)); return progress; }
function record({ exercise, passed, usedHints }) {
  const p = read(); const firstSolve = passed && !p.solved.includes(exercise.id);
  const earned = firstSolve ? 20 + (exercise.difficulty === 'Médio' ? 10 : 0) + (!usedHints ? 10 : 0) : 0;
  if (firstSolve) p.solved.push(exercise.id); if (firstSolve && !usedHints) p.hintFreeSolved++;
  p.xp += earned; p.level = Math.max(1, Math.floor(p.xp / 100) + 1);
  p.attempts.unshift({ exerciseId: exercise.id, category: exercise.category, passed, at: new Date().toISOString() });
  p.attempts = p.attempts.slice(0, 100); save(p); return { progress: p, earned };
}
function stats() { const p = read(); const total = p.attempts.length, correct = p.attempts.filter(a => a.passed).length; const topics = {}; p.attempts.forEach(a => { const t = topics[a.category] ||= { attempts: 0, correct: 0 }; t.attempts++; if(a.passed) t.correct++; }); return { ...p, attemptsCount: total, accuracy: total ? Math.round(correct / total * 100) : 0, topics }; }
module.exports = { read, record, stats };
