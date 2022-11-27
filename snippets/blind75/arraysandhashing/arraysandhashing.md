# Blind75

## arrays and hasshing

Contains Duplicate	Easy	
```js

//First method using Map() (exit early if true)
var containsDuplicate = function (nums) {
    const numsSet = new Set();
    for (const i of nums) {
        if (numsSet.has(i)) {
            return true;
        }
        numsSet.add(i);
    }
    return false;
};

//Second method using Map() (Has to map entire array but code is more readable)
var containsDuplicate = function (nums) {
    //create a new hashmap with all the items in the array. Any duplicates will be removed.
    const totalWithoutDuplicates = new Map(nums.map((i) => [i]));

    //check if the size of the initial array is larger than the new hashmap.
    return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicate = function (nums) {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
    return new Set(nums).size !== nums.length;
};
```

	Valid Anagram	Easy	

    ```js
    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    for (let k in sMap) {
        if (sMap[k] !== tMap[k]) {
            return false;
        }
    }
    return true;
};
    ```

	Two Sum	Easy		

    ```js
    /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};



    ```

	Group Anagrams	Medium

        ```js
        //////////////////////////////////////////////////////////////////////////////
// Hash Each Word
// Time: O(n*max(w))
// Space: O(n*max(w))
// This solution is faster than sorting each word.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {string[]} words
 * @return {string[][]}
 */
function groupAnagrams(words) {
    const map = Object.create(null);
    for (const word of words) {
        const hash = hashWord(word);
        if (!(hash in map)) {
            map[hash] = [];
        }
        map[hash].push(word);
    }

    const groups = [];
    for (const key in map) {
        groups.push(map[key]);
    }
    return groups;
}

/**
 * @param {string} word
 * @return {string}
 */
function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
        ++hash[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    return hash.toString();
}

//////////////////////////////////////////////////////////////////////////////
// Sort Each Word
// Time: O(n*max(w)*log(max(w)))
// Space: O(n*max(w))
// This solution is slower than hashing each word.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const result = [];
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        //! we are just splitting the string and sorting it and joining it back
        if (map.has(sorted)) {
            map.get(sorted).push(strs[i]); //! if the map has the sorted string, we push the string into the array
        } else {
            map.set(sorted, [strs[i]]); //! we are pushing the string into the map with the sorted string as the key
        }
    }

    for (let [key, value] of map) {
        result.push(value);
    }
    return result;
};
```
    
	Top K Frequent Elements	Medium	
       
```js
        /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    let res = [];
    let bucket = Array.from({ length: nums.length + 1 }, () => []); // to create unique arrays

    // storing frequency of numbers in a map
    for (let n of nums) {
        map.set(n, map.has(n) ? 1 + map.get(n) : 1);
    }

    // Poppulate the bucket with numbers in frequency
    // as the index of the bucket
    for (const [key, value] of map.entries()) {
        bucket[value].push(key);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            for (let n of bucket[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
};
```

	Product of Array Except Self	Medium		

       
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = [];

    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= product;
        product *= nums[j];
    }

    return res;
};



    
```
    


	Encode and Decode Strings	Medium	
    
       
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
    return strs.map((str) => `${str.length}#${str}`).join('');
}

/**
 * @param {string} str
 * @return {string[]}
 */
function decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            ++j;
        }

        const len = Number(str.slice(i, j));
        res.push(str.slice(++j, j + len));
        i = j + len;
    }

    return res;
}



    
```
    

	Longest Consecutive Sequence	 medium

    ```js
    //////////////////////////////////////////////////////////////////////////////
// Linear Search With A Hash Map
// Time: O(n)
// Space: O(n)
// This solution only makes one pass over the `nums` array and is the highest
// performing solution.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    if (!nums.length) {
        return 0;
    }

    const map = Object.create(null);
    let max = 0;

    for (const num of nums) {
        if (num in map) {
            continue;
        }

        const prev = num - 1;
        const next = num + 1;
        let len = 1;

        if (prev in map) {
            if (next in map) {
                len += map[prev] + map[next];
                map[prev - map[prev] + 1] = len;
                map[next + map[next] - 1] = len;
            } else {
                len += map[prev];
                ++map[prev - map[prev] + 1];
            }
        } else if (next in map) {
            len += map[next];
            ++map[next + map[next] - 1];
        }
        map[num] = len;
        max = Math.max(max, len);
    }

    return max;
}

//////////////////////////////////////////////////////////////////////////////
// Linear Search With A Hash Set
// Time: O(n)
// Space: O(n)
// This solution does three passes over the `nums` array. A first pass to
// setup the hash set. A second pass to find the numbers that mark the
// beginning of a sequence. A third pass to calculate the length of each
// sequence. The nested `while` loop does not cause quadratic calculations as
// it is only initiated on the first number of each sequence.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const set = new Set(nums);
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (set.has(num - 1)) {
            continue;
        }

        let currentMax = 1;
        while (set.has(num + currentMax)) {
            currentMax++;
        }

        if (currentMax > max) {
            max = currentMax;
        }
    }

    return max;
}



    
    ```

    