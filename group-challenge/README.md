# Week 4 Day 2 Group Challenge - JavaScript split

Open index.html in a browser. Both examples also print their arrays to the console. The source is in split.js, ready to paste into DevTools.

## Explanation for class

The first example uses an empty separator to split abcde into five characters. The second uses a regular-expression character class to split on an exclamation mark, question mark or period. I remove the empty element left by the final period but preserve leading spaces, matching the question exactly. Both examples are linear in the input length for these simple separators.

## Expected output

`["a", "b", "c", "d", "e"]`

`["Spring Break", " Are you ready", " Will be out of town", " Looking forward to spending time on the beach"]`
