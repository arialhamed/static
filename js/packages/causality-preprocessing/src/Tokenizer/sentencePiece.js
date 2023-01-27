/**
 * This code origin from 
 * https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder
 * 
 * Tokenizer.encode() is a port of `EncodeAsIds` from the SentencePiece library
 * (https://github.com/google/sentencepiece). Encode uses the Viterbi algorithm
 * to find the most likely sequence of tokens that comprise the input. For more
 * details, refer to https://arxiv.org/pdf/1804.10959.pdf.
 */

import { default as stringToChars } from './utils';

import { default as Trie } from './trie';

const separator = '\u2581';  // This is the unicode character 'lower one eighth block'.

function processInput(str) {
  const normalized = str.normalize('NFKC');
  return separator + normalized.replace(/ /g, separator);
}

// The first tokens are reserved for unk, control symbols, and user-defined
// symbols.
const RESERVED_SYMBOLS_COUNT = 6;

// type Vocabulary = Array<[string, number]>;

// type Score = {
//   key: string[],
//   score: number,
//   index: number
// };

export default class SentencePieceTokenizer {

  constructor(Vocabulary) {
    this.vocabulary = Vocabulary;
    this.trie = new Trie();

    for (let i = RESERVED_SYMBOLS_COUNT; i < this.vocabulary.length; i++) {
      this.trie.insert(this.vocabulary[i][0], this.vocabulary[i][1], i);
    }
  }

  encode(input){
    const nodes = [];
    const words = [];
    const best = [];

    input = processInput(input);

    const symbols = stringToChars(input);

    for (let i = 0; i <= symbols.length; i++) {
      nodes.push({});
      words.push(0);
      best.push(0);
    }

    // Construct the lattice.
    for (let i = 0; i < symbols.length; i++) {
      const matches = this.trie.commonPrefixSearch(symbols.slice(i));

      for (let j = 0; j < matches.length; j++) {
        const piece = matches[j];
        const obj = {key: piece[0], score: piece[1], index: piece[2]};

        const endPos = piece[0].length;
        if (nodes[i + endPos][i] == null) {
          nodes[i + endPos][i] = [];
        }

        nodes[i + endPos][i].push(obj);
      }
    }

    for (let endPos = 0; endPos <= symbols.length; endPos++) {
      for (const startPos in nodes[endPos]) {
        const arr = nodes[endPos][startPos];

        for (let j = 0; j < arr.length; j++) {
          const word = arr[j];
          const score = word.score + best[endPos - word.key.length];

          if (best[endPos] === 0 || score >= best[endPos]) {
            best[endPos] = score;
            words[endPos] = arr[j].index;
          }
        }
      }
    }

    const results = [];

    // Backward pass.
    let iter = words.length - 1;
    while (iter > 0) {
      results.push(words[iter]);
      iter -= this.vocabulary[words[iter]][0].length;
    }

    // Merge consecutive unks.
    const merged = [];
    let isPreviousUnk = false;
    for (let i = 0; i < results.length; i++) {
      const id = results[i];
      if (!(isPreviousUnk && id === 0)) {
        merged.push(id);
      }

      isPreviousUnk = id === 0;
    }
    
    return merged.reverse();
  }
}