//All the questions in Cracking the Interview version 5

//Section 1 Array & String 

//1.1
// Implement an algorithm to determine if a string has all unique characters. What
// if you cannot use additional data structures?
function uniqueChars(str){
    var map = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        if(map[char] === undefined) map[char] = 1;
        else if(map[char] !== undefined) return false; 
    }
    return true;
}
//With a data structure
//Without a data structure 
function uniqueCharsWithoutDataStructure(str){
    var sorted = str.split("").sort().join("");
    for(var i = 0; i < str.length-1; i++){
        var current = str[i];
        var next = str[i+1];
        if(current === next) return false;
    }
    return true;
}

//1.2
// Implement a function void reverse(char* str) in C or C++ which reverses a nullterminated
// string.
function reverse(str){
    var newStr = str.split("").reverse().join("")
    return newStr;
}
//reverse("abc")

//1.3 Given two strings, write a method to decide if one is a permutation of 
//the other.
function permutation(strA,strB){
    if(strA.length !== strB.length) return false
    var letterCountStrA = {};
    var letterCountStrB = {};
    for(var i = 0; i < strA.length; i++){
        var char = strA[i];
        var secondChar = strB[i]
        if(letterCountStrA[char] === undefined) letterCountStrA[char] = 1;
        else letterCountStrA[char]++;
        if(letterCountStrB[secondChar] === undefined) letterCountStrB[secondChar] = 1;
        else letterCountStrB[secondChar]++;
    }
    for(var key in letterCountStrA){
        if(letterCountStrA[key] !== letterCountStrB[key]) return false;
    }
    return true;
}
//permutation("abcd", "cbad") // true
//permutation("abcd", "abbb") //false

//1.4
// Write a method to replace all spaces in a string with'%20'. You may assume that
// the string has sufficient space at the end of the string to hold the additional
// characters, and that you are given the "true" length of the string. (Note: if implementing
// in Java, please use a character array so that you can perform this operation
// in place.)
// EXAMPLE
// Input: "Mr John Smith
// Output: "Mr%20Dohn%20Smith"
function replace(str){
    var newStr = str.replace(/ /g, "%20");
    return newStr;
}
//replace("Mr John Smith");

//1.5 
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.
function stringCompression(str){
    var map = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        var index = i;
        var count = 0;
        while(str[i] === char){
            count++;
            i++;
        }
        i = i-1;
        var key = char + index;
        map[key] = count;
    }
    var newString = [];
    for(var key in map){
        var letter = key[0];
        var newStringIndex = key[1];
        var number = map[key];
        newString[newStringIndex] = letter + number;
    }
    newString = newString.join("");
    if(newString.length < str.length) return newString;
    else return str;
}
// stringCompression("aabcccccaaa");

//1.6 
// Given an image represented by an NxN matrix, where each pixel
// in the image is 4 bytes, write a method to rotate the image by 90 degrees.
// Can you do this in place?

function rotate90(matrix){
    var newMatrix = [];
    for(var i = 0; i < matrix[0].length; i++){
        var col = [];
        for(var j = 0; j < matrix.length; j++){
            col.push(matrix[j][i])
        }
        var newCol = col.reverse();
        newMatrix.push(newCol);
    }
    return newMatrix
}

rotate90([["aaaa","cccc"],["bbbb","dddd"]])


//1.7 
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row
// and column are set to 0.
function makeZero(arr){
    var zeroes = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[0].length; j++){
            if(arr[i][j] === 0) zeroes.push([i,j])
        }
    }
    for(var k = 0; k < zeroes.length; k++){
        var row = zeroes[k][0];
        var col = zeroes[k][1];
        for(var l = 0; l < arr.length; l++){
            arr[l][col] = 0;
        }
        for(var m = 0; m < arr[0].length; m++){
            arr[row][m] = 0; 
        }
    }
    return arr;
}
// makeZero([[1,2,3],[1,3,4],[1,0,4]])
// makeZero([[1,1,2],[1,0,1],[1,2,3]])

//1.8
// Assume you have a method isSubstring which checks if one word is a
// substring of another. Given two strings, si and s2, write code to check if s2 is
// a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rotation
// of "erbottlewat").

function isRotation(s1,s2){
    if(!permutation(s1,s2)){
        return false;
    }
    var firstLetter = s1[0]
    var index = s2.indexOf(firstLetter)
    for(var i = index; i <s2.length; i++){
        var char = s2[i];
        if(char !== s1[i-index]) return false;
    }
    var start = s1.length - index
    for(var j = 0; j < index; j++){
        var char = s2[j]
        if(char !== s1[j+start]) return false;
    }
    return true;
}
// isRotation("waterbottle", "erbottlewat");