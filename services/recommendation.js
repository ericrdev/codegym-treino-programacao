const { exercises } = require('../data/exercises');
function recommend(stats) {
  const weak = Object.entries(stats.topics).filter(([,v]) => v.attempts >= 2 && v.correct / v.attempts < .5).sort((a,b) => a[1].correct/a[1].attempts-b[1].correct/b[1].attempts)[0];
  const unsolved = exercises.filter(e => !stats.solved.includes(e.id));
  const preferred = weak ? unsolved.find(e => e.category === weak[0]) : unsolved.find(e => e.level <= stats.level) || unsolved[0];
  return { exercise: preferred || exercises[0], weakTopic: weak?.[0] };
}
module.exports = { recommend };
