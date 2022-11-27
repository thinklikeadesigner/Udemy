Implement Trie	medium
```cpp
/*
    Implement trie (store/retrieve keys in dataset of strings)

    Each node contains pointer to next letter & is word flag

    Time: O(n) insert, O(n) search, O(n) startsWith
    Space: O(n) insert, O(1) search, O(1) startsWith
*/

class TrieNode {
public:
    TrieNode* children[26];
    bool isWord;
    
    TrieNode() {
        for (int i = 0; i < 26; i++) {
            children[i] = NULL;
        }
        isWord = false;
    }
};

class Trie {
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        int curr = 0;
        
        for (int i = 0; i < word.size(); i++) {
            curr = word[i] - 'a';
            if (node->children[curr] == NULL) {
                node->children[curr] = new TrieNode();
            }
            node = node->children[curr];
        }
        
        node->isWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        int curr = 0;
        
        for (int i = 0; i < word.size(); i++) {
            curr = word[i] - 'a';
            if (node->children[curr] == NULL) {
                return false;
            }
            node = node->children[curr];
        }
        
        return node->isWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode* node = root;
        int curr = 0;
        
        for (int i = 0; i < prefix.size(); i++) {
            curr = prefix[i] - 'a';
            if (node->children[curr] == NULL) {
                return false;
            }
            node = node->children[curr];
        }
        
        return true;
    }
private:
    TrieNode* root;
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
 ```

Design Add and Search Word Data Structure	medium
```cpp
/*
    Design add & search words data structure

    Implement trie, handle wildcards: traverse all children & search substrings

    Time: O(m x 26^n) -> m = # of words, n = length of words
    Space: O(n)
*/

class TrieNode {
public:
    TrieNode* children[26];
    bool isWord;
    
    TrieNode() {
        for (int i = 0; i < 26; i++) {
            children[i] = NULL;
        }
        isWord = false;
    }
};

class WordDictionary {
public:
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        TrieNode* node = root;
        int curr = 0;
        
        for (int i = 0; i < word.size(); i++) {
            curr = word[i] - 'a';
            if (node->children[curr] == NULL) {
                node->children[curr] = new TrieNode();
            }
            node = node->children[curr];
        }
        
        node->isWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        return searchInNode(word, 0, node);
    }
private:
    TrieNode* root;
    
    bool searchInNode(string& word, int i, TrieNode* node) {
        if (node == NULL) {
            return false;
        }
        if (i == word.size()) {
            return node->isWord;
        }
        if (word[i] != '.') {
            return searchInNode(word, i + 1, node->children[word[i] - 'a']);
        }
        for (int j = 0; j < 26; j++) {
            if (searchInNode(word, i + 1, node->children[j])) {
                return true;
            }
        }
        return false;
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary* obj = new WordDictionary();
 * obj->addWord(word);
 * bool param_2 = obj->search(word);
 */
 ```

Word Search II hard
```cpp
/*
    Given a board of characters & a list of words, return all words on the board

    Implement trie, for search: iterate thru children until isWord, add to result

    Time: O(m x (4 x 3^(l - 1))) -> m = # of cells, l = max length of words
    Space: O(n) -> n = total number of letters in dictionary (no overlap in Trie)
*/

class TrieNode {
public:
    TrieNode* children[26];
    bool isWord;
    
    TrieNode() {
        for (int i = 0; i < 26; i++) {
            children[i] = NULL;
        }
        isWord = false;
    }
};

class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        for (int i = 0; i < words.size(); i++) {
            insert(words[i]);
        }
        
        int m = board.size();
        int n = board[0].size();
        
        TrieNode* node = root;
        vector<string> result;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                search(board, i, j, m, n, node, "", result);
            }
        }
        
        return result;
    }
private:
    TrieNode* root = new TrieNode();
    
    void insert(string word) {
        TrieNode* node = root;
        int curr = 0;
        
        for (int i = 0; i < word.size(); i++) {
            curr = word[i] - 'a';
            if (node->children[curr] == NULL) {
                node->children[curr] = new TrieNode();
            }
            node = node->children[curr];
        }
        
        node->isWord = true;
    }
    
    void search(vector<vector<char>>& board, int i, int j, int m, int n, TrieNode* node, string word, vector<string>& result) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] == '#') {
            return;
        }
        
        char c = board[i][j];
        
        node = node->children[c - 'a'];
        if (node == NULL) {
            return;
        }
        
        word += board[i][j];
        if (node->isWord) {
            result.push_back(word);
            node->isWord = false;
        }
        
        board[i][j] = '#';
        
        search(board, i - 1, j, m, n, node, word, result);
        search(board, i + 1, j, m, n, node, word, result);
        search(board, i, j - 1, m, n, node, word, result);
        search(board, i, j + 1, m, n, node, word, result);
        
        board[i][j] = c;
    }
};

```