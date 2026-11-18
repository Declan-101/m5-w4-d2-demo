// Example 1: an empty separator splits this ASCII string into characters.
const characters = 'abcde'.split('');

// Example 2: split at !, ? or . while preserving the leading spaces.
const paragraph = 'Spring Break! Are you ready? Will be out of town. Looking forward to spending time on the beach.';
const sentences = paragraph.split(/[!?.]/).filter(part => part !== '');
// The final period produces an empty last element; filter removes it.
console.log('Example 1:', characters);
console.log('Example 2:', sentences);

if (typeof document !== 'undefined') {
  document.getElementById('characters').textContent = JSON.stringify(characters, null, 2);
  document.getElementById('sentences').textContent = JSON.stringify(sentences, null, 2);
}

if (typeof module !== 'undefined') module.exports = { characters, sentences };
