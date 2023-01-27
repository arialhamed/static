import {default as stringToChars} from './utils';
// [token, score, index]
// type OutputNode = [string[], number, number];

class TrieNode {

  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  /**
   * Traverse upwards through the trie to construct the token.
   */
  getWord() {
    const output = [];
    let node = this;

    while (node !== null) {
      if (node.key !== null) {
        output.unshift(node.key);
      }
      node = node.parent;
    }

    return [output, this.score, this.index];
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  /**
   * Checks whether a node starts with ss.
   *
   * @param ss The prefix.
   * @param node The node currently being considered.
   * @param arr An array of the matching tokens uncovered so far.
   */
  findAllCommonPrefixes(ss, node, arr) {
    if (node.end) {
      const word = node.getWord();
      if (ss.slice(0, word[0].length).join('') === word[0].join('')) {
        arr.unshift(word);
      }
    }

    for (const child in node.children) {
      this.findAllCommonPrefixes(ss, node.children[child], arr);
    }
  }

  /**
   * Inserts a token into the trie.
   */
  insert(word, score, index) {
    let node = this.root;

    const symbols = stringToChars(word);

    for (let i = 0; i < symbols.length; i++) {
      if (!node.children[symbols[i]]) {
        node.children[symbols[i]] = new TrieNode(symbols[i]);
        node.children[symbols[i]].parent = node;
      }

      node = node.children[symbols[i]];

      if (i === symbols.length - 1) {
        node.end = true;
        node.score = score;
        node.index = index;
      }
    }
  }

  /**
   * Returns an array of all tokens starting with ss.
   *
   * @param ss The prefix to match on.
   */
  commonPrefixSearch(ss){
    const node = this.root.children[ss[0]];
    const output = [];
    if (node) {
      this.findAllCommonPrefixes(ss, node, output);
    } else {
      output.push([[ss[0]], 0, 0]);  // unknown token
    }
    return output;
  }
}
