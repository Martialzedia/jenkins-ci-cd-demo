const assert = require('assert');
const { add } = require('./app');

console.log("Début des tests unitaires...");

assert.strictEqual(add(1, 1), 2);
assert.strictEqual(add(5, 7), 12);

console.log("Tous les tests sont PASS ✅");
