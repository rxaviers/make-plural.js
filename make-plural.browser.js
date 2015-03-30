(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "supplemental": {
    "version": {
      "_unicodeVersion": "7.0.0",
      "_number": "$Revision: 11229 $"
    },
    "generation": {
      "_date": "$Date: 2015-02-18 09:11:57 -0600 (Wed, 18 Feb 2015) $"
    },
    "plurals-type-ordinal": {
      "af": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "am": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ar": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "as": {
        "pluralRule-count-one": "n = 1,5,7,8,9,10 @integer 1, 5, 7~10",
        "pluralRule-count-two": "n = 2,3 @integer 2, 3",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-many": "n = 6 @integer 6",
        "pluralRule-count-other": " @integer 0, 11~25, 100, 1000, 10000, 100000, 1000000, …"
      },
      "az": {
        "pluralRule-count-one": "i % 10 = 1,2,5,7,8 or i % 100 = 20,50,70,80 @integer 1, 2, 5, 7, 8, 11, 12, 15, 17, 18, 20~22, 25, 101, 1001, …",
        "pluralRule-count-few": "i % 10 = 3,4 or i % 1000 = 100,200,300,400,500,600,700,800,900 @integer 3, 4, 13, 14, 23, 24, 33, 34, 43, 44, 53, 54, 63, 64, 73, 74, 100, 1003, …",
        "pluralRule-count-many": "i = 0 or i % 10 = 6 or i % 100 = 40,60,90 @integer 0, 6, 16, 26, 36, 40, 46, 56, 106, 1006, …",
        "pluralRule-count-other": " @integer 9, 10, 19, 29, 30, 39, 49, 59, 69, 79, 109, 1000, 10000, 100000, 1000000, …"
      },
      "bg": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "bn": {
        "pluralRule-count-one": "n = 1,5,7,8,9,10 @integer 1, 5, 7~10",
        "pluralRule-count-two": "n = 2,3 @integer 2, 3",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-many": "n = 6 @integer 6",
        "pluralRule-count-other": " @integer 0, 11~25, 100, 1000, 10000, 100000, 1000000, …"
      },
      "bs": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ca": {
        "pluralRule-count-one": "n = 1,3 @integer 1, 3",
        "pluralRule-count-two": "n = 2 @integer 2",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ce": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "cs": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "cy": {
        "pluralRule-count-zero": "n = 0,7,8,9 @integer 0, 7~9",
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-two": "n = 2 @integer 2",
        "pluralRule-count-few": "n = 3,4 @integer 3, 4",
        "pluralRule-count-many": "n = 5,6 @integer 5, 6",
        "pluralRule-count-other": " @integer 10~25, 100, 1000, 10000, 100000, 1000000, …"
      },
      "da": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "de": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "dsb": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "el": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "en": {
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
        "pluralRule-count-two": "n % 10 = 2 and n % 100 != 12 @integer 2, 22, 32, 42, 52, 62, 72, 82, 102, 1002, …",
        "pluralRule-count-few": "n % 10 = 3 and n % 100 != 13 @integer 3, 23, 33, 43, 53, 63, 73, 83, 103, 1003, …",
        "pluralRule-count-other": " @integer 0, 4~18, 100, 1000, 10000, 100000, 1000000, …"
      },
      "es": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "et": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "eu": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "fa": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "fi": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "fil": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "fr": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "fy": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "gl": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "gu": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-two": "n = 2,3 @integer 2, 3",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-many": "n = 6 @integer 6",
        "pluralRule-count-other": " @integer 0, 5, 7~20, 100, 1000, 10000, 100000, 1000000, …"
      },
      "he": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "hi": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-two": "n = 2,3 @integer 2, 3",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-many": "n = 6 @integer 6",
        "pluralRule-count-other": " @integer 0, 5, 7~20, 100, 1000, 10000, 100000, 1000000, …"
      },
      "hr": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "hsb": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "hu": {
        "pluralRule-count-one": "n = 1,5 @integer 1, 5",
        "pluralRule-count-other": " @integer 0, 2~4, 6~17, 100, 1000, 10000, 100000, 1000000, …"
      },
      "hy": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "id": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "in": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "is": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "it": {
        "pluralRule-count-many": "n = 11,8,80,800 @integer 8, 11, 80, 800",
        "pluralRule-count-other": " @integer 0~7, 9, 10, 12~17, 100, 1000, 10000, 100000, 1000000, …"
      },
      "iw": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ja": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ka": {
        "pluralRule-count-one": "i = 1 @integer 1",
        "pluralRule-count-many": "i = 0 or i % 100 = 2..20,40,60,80 @integer 0, 2~16, 102, 1002, …",
        "pluralRule-count-other": " @integer 21~36, 100, 1000, 10000, 100000, 1000000, …"
      },
      "kk": {
        "pluralRule-count-many": "n % 10 = 6 or n % 10 = 9 or n % 10 = 0 and n != 0 @integer 6, 9, 10, 16, 19, 20, 26, 29, 30, 36, 39, 40, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": " @integer 0~5, 7, 8, 11~15, 17, 18, 21, 101, 1001, …"
      },
      "km": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "kn": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ko": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ky": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "lo": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "lt": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "lv": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "mk": {
        "pluralRule-count-one": "i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
        "pluralRule-count-two": "i % 10 = 2 and i % 100 != 12 @integer 2, 22, 32, 42, 52, 62, 72, 82, 102, 1002, …",
        "pluralRule-count-many": "i % 10 = 7,8 and i % 100 != 17,18 @integer 7, 8, 27, 28, 37, 38, 47, 48, 57, 58, 67, 68, 77, 78, 87, 88, 107, 1007, …",
        "pluralRule-count-other": " @integer 0, 3~6, 9~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ml": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "mn": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "mo": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "mr": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-two": "n = 2,3 @integer 2, 3",
        "pluralRule-count-few": "n = 4 @integer 4",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ms": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "my": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "nb": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ne": {
        "pluralRule-count-one": "n = 1..4 @integer 1~4",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "nl": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "pa": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "pl": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "prg": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "pt": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ro": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "root": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ru": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sh": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "si": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sk": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sl": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sq": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-many": "n % 10 = 4 and n % 100 != 14 @integer 4, 24, 34, 44, 54, 64, 74, 84, 104, 1004, …",
        "pluralRule-count-other": " @integer 0, 2, 3, 5~17, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sr": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sv": {
        "pluralRule-count-one": "n % 10 = 1,2 and n % 100 != 11,12 @integer 1, 2, 21, 22, 31, 32, 41, 42, 51, 52, 61, 62, 71, 72, 81, 82, 101, 1001, …",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sw": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ta": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "te": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "th": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "tl": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "tr": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "uk": {
        "pluralRule-count-few": "n % 10 = 3 and n % 100 != 13 @integer 3, 23, 33, 43, 53, 63, 73, 83, 103, 1003, …",
        "pluralRule-count-other": " @integer 0~2, 4~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "ur": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "uz": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "vi": {
        "pluralRule-count-one": "n = 1 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, …"
      },
      "zh": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      },
      "zu": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, …"
      }
    }
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "supplemental": {
    "version": {
      "_unicodeVersion": "7.0.0",
      "_number": "$Revision: 11229 $"
    },
    "generation": {
      "_date": "$Date: 2015-02-18 09:11:57 -0600 (Wed, 18 Feb 2015) $"
    },
    "plurals-type-cardinal": {
      "af": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ak": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "am": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ar": {
        "pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-few": "n % 100 = 3..10 @integer 3~10, 103~110, 1003, … @decimal 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 103.0, 1003.0, …",
        "pluralRule-count-many": "n % 100 = 11..99 @integer 11~26, 111, 1011, … @decimal 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 111.0, 1011.0, …",
        "pluralRule-count-other": " @integer 100~102, 200~202, 300~302, 400~402, 500~502, 600, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "as": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "asa": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ast": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "az": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "be": {
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 71.0, 81.0, 101.0, 1001.0, …",
        "pluralRule-count-few": "n % 10 = 2..4 and n % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 2.0, 3.0, 4.0, 22.0, 23.0, 24.0, 32.0, 33.0, 102.0, 1002.0, …",
        "pluralRule-count-many": "n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": "   @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.1, 1000.1, …"
      },
      "bem": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bez": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bg": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bh": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bm": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bn": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "br": {
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11,71,91 @integer 1, 21, 31, 41, 51, 61, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 81.0, 101.0, 1001.0, …",
        "pluralRule-count-two": "n % 10 = 2 and n % 100 != 12,72,92 @integer 2, 22, 32, 42, 52, 62, 82, 102, 1002, … @decimal 2.0, 22.0, 32.0, 42.0, 52.0, 62.0, 82.0, 102.0, 1002.0, …",
        "pluralRule-count-few": "n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99 @integer 3, 4, 9, 23, 24, 29, 33, 34, 39, 43, 44, 49, 103, 1003, … @decimal 3.0, 4.0, 9.0, 23.0, 24.0, 29.0, 33.0, 34.0, 103.0, 1003.0, …",
        "pluralRule-count-many": "n != 0 and n % 1000000 = 0 @integer 1000000, … @decimal 1000000.0, 1000000.00, 1000000.000, …",
        "pluralRule-count-other": " @integer 0, 5~8, 10~20, 100, 1000, 10000, 100000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, …"
      },
      "brx": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "bs": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ca": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ce": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "cgg": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "chr": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ckb": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "cs": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-few": "i = 2..4 and v = 0 @integer 2~4",
        "pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "cy": {
        "pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-few": "n = 3 @integer 3 @decimal 3.0, 3.00, 3.000, 3.0000",
        "pluralRule-count-many": "n = 6 @integer 6 @decimal 6.0, 6.00, 6.000, 6.0000",
        "pluralRule-count-other": " @integer 4, 5, 7~20, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "da": {
        "pluralRule-count-one": "n = 1 or t != 0 and i = 0,1 @integer 1 @decimal 0.1~1.6",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 2.0~3.4, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "de": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "dsb": {
        "pluralRule-count-one": "v = 0 and i % 100 = 1 or f % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-two": "v = 0 and i % 100 = 2 or f % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, … @decimal 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-few": "v = 0 and i % 100 = 3..4 or f % 100 = 3..4 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.3, 0.4, 1.3, 1.4, 2.3, 2.4, 3.3, 3.4, 4.3, 4.4, 5.3, 5.4, 6.3, 6.4, 7.3, 7.4, 10.3, 100.3, 1000.3, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "dv": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "dz": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ee": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "el": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "en": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "eo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "es": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "et": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "eu": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fa": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ff": {
        "pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fi": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fil": {
        "pluralRule-count-one": "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9 @integer 0~3, 5, 7, 8, 10~13, 15, 17, 18, 20, 21, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.3, 0.5, 0.7, 0.8, 1.0~1.3, 1.5, 1.7, 1.8, 2.0, 2.1, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 4, 6, 9, 14, 16, 19, 24, 26, 104, 1004, … @decimal 0.4, 0.6, 0.9, 1.4, 1.6, 1.9, 2.4, 2.6, 10.4, 100.4, 1000.4, …"
      },
      "fo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fr": {
        "pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fur": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "fy": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ga": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-few": "n = 3..6 @integer 3~6 @decimal 3.0, 4.0, 5.0, 6.0, 3.00, 4.00, 5.00, 6.00, 3.000, 4.000, 5.000, 6.000, 3.0000, 4.0000, 5.0000, 6.0000",
        "pluralRule-count-many": "n = 7..10 @integer 7~10 @decimal 7.0, 8.0, 9.0, 10.0, 7.00, 8.00, 9.00, 10.00, 7.000, 8.000, 9.000, 10.000, 7.0000, 8.0000, 9.0000, 10.0000",
        "pluralRule-count-other": " @integer 0, 11~25, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "gd": {
        "pluralRule-count-one": "n = 1,11 @integer 1, 11 @decimal 1.0, 11.0, 1.00, 11.00, 1.000, 11.000, 1.0000",
        "pluralRule-count-two": "n = 2,12 @integer 2, 12 @decimal 2.0, 12.0, 2.00, 12.00, 2.000, 12.000, 2.0000",
        "pluralRule-count-few": "n = 3..10,13..19 @integer 3~10, 13~19 @decimal 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 3.00",
        "pluralRule-count-other": " @integer 0, 20~34, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "gl": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "gsw": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "gu": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "guw": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "gv": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 @integer 1, 11, 21, 31, 41, 51, 61, 71, 101, 1001, …",
        "pluralRule-count-two": "v = 0 and i % 10 = 2 @integer 2, 12, 22, 32, 42, 52, 62, 72, 102, 1002, …",
        "pluralRule-count-few": "v = 0 and i % 100 = 0,20,40,60,80 @integer 0, 20, 40, 60, 80, 100, 120, 140, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 3~10, 13~19, 23, 103, 1003, …"
      },
      "ha": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "haw": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "he": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-two": "i = 2 and v = 0 @integer 2",
        "pluralRule-count-many": "v = 0 and n != 0..10 and n % 10 = 0 @integer 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": " @integer 0, 3~17, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "hi": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "hr": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "hsb": {
        "pluralRule-count-one": "v = 0 and i % 100 = 1 or f % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-two": "v = 0 and i % 100 = 2 or f % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, … @decimal 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-few": "v = 0 and i % 100 = 3..4 or f % 100 = 3..4 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.3, 0.4, 1.3, 1.4, 2.3, 2.4, 3.3, 3.4, 4.3, 4.4, 5.3, 5.4, 6.3, 6.4, 7.3, 7.4, 10.3, 100.3, 1000.3, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "hu": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "hy": {
        "pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "id": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ig": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ii": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "in": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "is": {
        "pluralRule-count-one": "t = 0 and i % 10 = 1 and i % 100 != 11 or t != 0 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1~1.6, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "it": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "iu": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "iw": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-two": "i = 2 and v = 0 @integer 2",
        "pluralRule-count-many": "v = 0 and n != 0..10 and n % 10 = 0 @integer 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": " @integer 0, 3~17, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ja": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "jbo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "jgo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ji": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "jmc": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "jv": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "jw": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ka": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kab": {
        "pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kaj": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kcg": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kde": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kea": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kk": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kkj": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kl": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "km": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kn": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ko": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ks": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ksb": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ksh": {
        "pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ku": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "kw": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ky": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lag": {
        "pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
        "pluralRule-count-one": "i = 0,1 and n != 0 @integer 1 @decimal 0.1~1.6",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lb": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lg": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lkt": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ln": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lt": {
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11..19 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 71.0, 81.0, 101.0, 1001.0, …",
        "pluralRule-count-few": "n % 10 = 2..9 and n % 100 != 11..19 @integer 2~9, 22~29, 102, 1002, … @decimal 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 22.0, 102.0, 1002.0, …",
        "pluralRule-count-many": "f != 0   @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-other": " @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "lv": {
        "pluralRule-count-zero": "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19 @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.0, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-other": " @integer 2~9, 22~29, 102, 1002, … @decimal 0.2~0.9, 1.2~1.9, 10.2, 100.2, 1000.2, …"
      },
      "mas": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mg": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mgo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mk": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 or f % 10 = 1 @integer 1, 11, 21, 31, 41, 51, 61, 71, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-other": " @integer 0, 2~10, 12~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.2~1.0, 1.2~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ml": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mo": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-few": "v != 0 or n = 0 or n != 1 and n % 100 = 1..19 @integer 0, 2~16, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, …"
      },
      "mr": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ms": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "mt": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-few": "n = 0 or n % 100 = 2..10 @integer 0, 2~10, 102~107, 1002, … @decimal 0.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 10.0, 102.0, 1002.0, …",
        "pluralRule-count-many": "n % 100 = 11..19 @integer 11~19, 111~117, 1011, … @decimal 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 111.0, 1011.0, …",
        "pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "my": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nah": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "naq": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nb": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nd": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ne": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nl": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nnh": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "no": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nqo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nr": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nso": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ny": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "nyn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "om": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "or": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "os": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "pa": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "pap": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "pl": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
        "pluralRule-count-many": "v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "prg": {
        "pluralRule-count-zero": "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19 @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.0, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-other": " @integer 2~9, 22~29, 102, 1002, … @decimal 0.2~0.9, 1.2~1.9, 10.2, 100.2, 1000.2, …"
      },
      "ps": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "pt": {
        "pluralRule-count-one": "n = 0..2 and n != 2 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "pt-PT": {
        "pluralRule-count-one": "n = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "rm": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ro": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-few": "v != 0 or n = 0 or n != 1 and n % 100 = 1..19 @integer 0, 2~16, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, …"
      },
      "rof": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "root": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ru": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
        "pluralRule-count-many": "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "rwk": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sah": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "saq": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "se": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "seh": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ses": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sg": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sh": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "shi": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-few": "n = 2..10 @integer 2~10 @decimal 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00",
        "pluralRule-count-other": " @integer 11~26, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~1.9, 2.1~2.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "si": {
        "pluralRule-count-one": "n = 0,1 or i = 0 and f = 1 @integer 0, 1 @decimal 0.0, 0.1, 1.0, 0.00, 0.01, 1.00, 0.000, 0.001, 1.000, 0.0000, 0.0001, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.2~0.9, 1.1~1.8, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sk": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-few": "i = 2..4 and v = 0 @integer 2~4",
        "pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sl": {
        "pluralRule-count-one": "v = 0 and i % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, …",
        "pluralRule-count-two": "v = 0 and i % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, …",
        "pluralRule-count-few": "v = 0 and i % 100 = 3..4 or v != 0 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
      },
      "sma": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "smi": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "smj": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "smn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sms": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
        "pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "so": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sq": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sr": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
        "pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ss": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ssy": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "st": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sv": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "sw": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "syr": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ta": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "te": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "teo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "th": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ti": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "tig": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "tk": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "tl": {
        "pluralRule-count-one": "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9 @integer 0~3, 5, 7, 8, 10~13, 15, 17, 18, 20, 21, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.3, 0.5, 0.7, 0.8, 1.0~1.3, 1.5, 1.7, 1.8, 2.0, 2.1, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
        "pluralRule-count-other": " @integer 4, 6, 9, 14, 16, 19, 24, 26, 104, 1004, … @decimal 0.4, 0.6, 0.9, 1.4, 1.6, 1.9, 2.4, 2.6, 10.4, 100.4, 1000.4, …"
      },
      "tn": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "to": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "tr": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ts": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "tzm": {
        "pluralRule-count-one": "n = 0..1 or n = 11..99 @integer 0, 1, 11~24 @decimal 0.0, 1.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0",
        "pluralRule-count-other": " @integer 2~10, 100~106, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ug": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "uk": {
        "pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
        "pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
        "pluralRule-count-many": "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
        "pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ur": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "uz": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "ve": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "vi": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "vo": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "vun": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "wa": {
        "pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "wae": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "wo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "xh": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "xog": {
        "pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "yi": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "yo": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "zh": {
        "pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      },
      "zu": {
        "pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
        "pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
      }
    }
  }
}

},{}],3:[function(require,module,exports){
"use strict";

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * make-plural.js -- https://github.com/eemeli/make-plural.js/
 * Copyright (c) 2014-2015 by Eemeli Aro <eemeli@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * The software is provided "as is" and the author disclaims all warranties
 * with regard to this software including all implied warranties of
 * merchantability and fitness. In no event shall the author be liable for
 * any special, direct, indirect, or consequential damages or any damages
 * whatsoever resulting from loss of use, data or profits, whether in an
 * action of contract, negligence or other tortious action, arising out of
 * or in connection with the use or performance of this software.
 */

var Parser = (function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, {
        parse: {
            value: function parse(cond) {
                var _this = this;

                if (cond === "i = 0 or n = 1") {
                    return "n >= 0 && n <= 1";
                }if (cond === "i = 0,1") {
                    return "n >= 0 && n < 2";
                }if (cond === "i = 1 and v = 0") {
                    this.v0 = 1;
                    return "n == 1 && v0";
                }
                return cond.replace(/([tv]) (!?)= 0/g, function (m, sym, noteq) {
                    var sn = sym + "0";
                    _this[sn] = 1;
                    return noteq ? "!" + sn : sn;
                }).replace(/\b[fintv]\b/g, function (m) {
                    _this[m] = 1;
                    return m;
                }).replace(/([fin]) % (10+)/g, function (m, sym, num) {
                    var sn = sym + num;
                    _this[sn] = 1;
                    return sn;
                }).replace(/n10+ = 0/g, "t0 && $&").replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g, function (m, se, noteq, x) {
                    if (m === "n = 0,1") return "(n == 0 || n == 1)";
                    if (noteq) return se + x.split(",").join(" && " + se);
                    return "(" + se + x.split(",").join(" || " + se) + ")";
                }).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g, function (m, sym, noteq, x0, x1) {
                    if (Number(x0) + 1 === Number(x1)) {
                        if (noteq) return "" + sym + " != " + x0 + " && " + sym + " != " + x1;
                        return "(" + sym + " == " + x0 + " || " + sym + " == " + x1 + ")";
                    }
                    if (noteq) return "(" + sym + " < " + x0 + " || " + sym + " > " + x1 + ")";
                    if (sym === "n") {
                        _this.t0 = 1;return "(t0 && n >= " + x0 + " && n <= " + x1 + ")";
                    }
                    return "(" + sym + " >= " + x0 + " && " + sym + " <= " + x1 + ")";
                }).replace(/ and /g, " && ").replace(/ or /g, " || ").replace(/ = /g, " == ");
            }
        },
        vars: {
            value: function vars() {
                var vars = [];
                if (this.i) vars.push("i = s[0]");
                if (this.f || this.v) vars.push("f = s[1] || ''");
                if (this.t) vars.push("t = (s[1] || '').replace(/0+$/, '')");
                if (this.v) vars.push("v = f.length");
                if (this.v0) vars.push("v0 = !s[1]");
                if (this.t0 || this.n10 || this.n100) vars.push("t0 = Number(s[0]) == n");
                for (var k in this) {
                    if (/^.10+$/.test(k)) {
                        var k0 = k[0] === "n" ? "t0 && s[0]" : k[0];
                        vars.push("" + k + " = " + k0 + ".slice(-" + k.substr(2).length + ")");
                    }
                }if (!vars.length) {
                    return "";
                }return "var " + ["s = String(n).split('.')"].concat(vars).join(", ");
            }
        }
    });

    return Parser;
})();

var Rules = (function () {
    function Rules() {
        _classCallCheck(this, Rules);

        this.data = {};
        this.rootPath = "./data/";
    }

    _createClass(Rules, {
        loadData: {
            value: function loadData(cldr) {
                var data = cldr && cldr.supplemental || {};
                this.data = {
                    cardinal: data["plurals-type-cardinal"] || this.data.cardinal,
                    ordinal: data["plurals-type-ordinal"] || this.data.ordinal
                };
                return this.data;
            }
        },
        loadPath: {
            value: function loadPath(path) {
                if (path.indexOf("/") === -1) path = this.rootPath + path;
                return this.loadData(require(path));
            }
        },
        cardinal: {
            get: function () {
                return this.data.cardinal || this.loadPath("plurals.json").cardinal;
            }
        },
        ordinal: {
            get: function () {
                return this.data.ordinal || this.loadPath("ordinals.json").ordinal;
            }
        }
    });

    return Rules;
})();

var Tests = (function () {
    function Tests(obj) {
        _classCallCheck(this, Tests);

        this.obj = obj;
        this.ordinal = {};
        this.cardinal = {};
    }

    _createClass(Tests, {
        add: {
            value: function add(type, cat, examples) {
                this[type][cat] = examples.join(" ").replace(/^[ ,]+|[ ,…]+$/g, "").replace(/(0\.[0-9])~(1\.[1-9])/g, "$1 1.0 $2").split(/[ ,~…]+/);
            }
        },
        testCond: {
            value: function testCond(n, type, expResult) {
                try {
                    var r = this.obj.fn(n, type === "ordinal");
                } catch (e) {
                    r = e.toString();
                }
                if (r !== expResult) {
                    throw new Error("Locale " + JSON.stringify(this.obj.lc) + type + " rule self-test failed for v = " + JSON.stringify(n) + " (was " + JSON.stringify(r) + ", expected " + JSON.stringify(expResult) + ")");
                }
                return true;
            }
        },
        testCat: {
            value: function testCat(type, cat) {
                var _this = this;

                this[type][cat].forEach(function (n) {
                    _this.testCond(n, type, cat);
                    if (!/\.0+$/.test(n)) _this.testCond(Number(n), type, cat);
                });
                return true;
            }
        },
        testAll: {
            value: function testAll() {
                for (var cat in this.cardinal) {
                    this.testCat("cardinal", cat);
                }for (var cat in this.ordinal) {
                    this.testCat("ordinal", cat);
                }return true;
            }
        }
    });

    return Tests;
})();

var MakePlural = (function () {
    function MakePlural(lc) {
        var opt = arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, MakePlural);

        if (typeof lc == "object") {
            opt = lc;
            lc = opt.lc;
        }
        this.lc = lc || MakePlural.lc;
        this.cardinals = opt.cardinals || MakePlural.cardinals;
        this.ordinals = opt.ordinals || MakePlural.ordinals;
        if (!this.ordinals && !this.cardinals) throw new Error("At least one type of plural is required");
        this.parser = new Parser();
        this.tests = new Tests(this);
        this.fn = this.buildFunction();
        this.fn.obj = this;
        this.fn.test = (function () {
            return this.tests.testAll() && this.fn;
        }).bind(this);
        this.fn.toString = this.fnToString.bind(this);
        return this.fn;
    }

    _createClass(MakePlural, {
        compile: {
            value: function compile(type, req) {
                var cases = [];
                var rules = MakePlural.rules[type][this.lc];
                if (!rules) {
                    if (req) throw new Error("Locale \"" + this.lc + "\" " + type + " rules not found");
                    return "'other'";
                }
                for (var r in rules) {
                    var _rules$r$trim$split = rules[r].trim().split(/\s*@\w*/);

                    var _rules$r$trim$split2 = _toArray(_rules$r$trim$split);

                    var cond = _rules$r$trim$split2[0];
                    var examples = _rules$r$trim$split2.slice(1);
                    var cat = r.replace("pluralRule-count-", "");
                    if (cond) cases.push([this.parser.parse(cond), cat]);
                    this.tests.add(type, cat, examples);
                }
                if (cases.length === 1) {
                    return "(" + cases[0][0] + ") ? '" + cases[0][1] + "' : 'other'";
                } else {
                    return [].concat(_toConsumableArray(cases.map(function (c) {
                        return "(" + c[0] + ") ? '" + c[1] + "'";
                    })), ["'other'"]).join("\n      : ");
                }
            }
        },
        buildFunction: {
            value: function buildFunction() {
                var _this = this;

                var compile = function (c) {
                    var _ref;

                    return c ? (c[1] ? "return " : "if (ord) return ") + (_ref = _this).compile.apply(_ref, _toConsumableArray(c)) : "";
                },
                    fold = { vars: function (str) {
                        return ("  " + str + ";").replace(/(.{1,78})(,|$) ?/g, "$1$2\n      ");
                    },
                    cond: function (str) {
                        return ("  " + str + ";").replace(/(.{1,78}) (\|\| |$) ?/gm, "$1\n          $2");
                    } },
                    cond = [this.ordinals && ["ordinal", !this.cardinals], this.cardinals && ["cardinal", true]].map(compile).map(fold.cond),
                    body = [fold.vars(this.parser.vars())].concat(_toConsumableArray(cond)).join("\n").replace(/\s+$/gm, "").replace(/^[\s;]*[\r\n]+/gm, ""),
                    args = this.ordinals && this.cardinals ? "n, ord" : "n";
                return new Function(args, body);
            }
        },
        fnToString: {
            value: function fnToString(name) {
                return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/, name ? "function " + name : "function").replace("\n/**/", "");
            }
        }
    }, {
        load: {
            value: function load() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                args.forEach(function (arg) {
                    if (typeof arg == "string") MakePlural.rules.loadPath(arg);else MakePlural.rules.loadData(arg);
                });
                return MakePlural;
            }
        }
    });

    return MakePlural;
})();

module.exports = MakePlural;

MakePlural.cardinals = true;
MakePlural.ordinals = false;
MakePlural.rules = new Rules();

},{}],4:[function(require,module,exports){
window.MakePlural = require('../make-plural.js').load(
    require('../data/plurals.json'),
    require('../data/ordinals.json')
);

},{"../data/ordinals.json":1,"../data/plurals.json":2,"../make-plural.js":3}]},{},[4]);