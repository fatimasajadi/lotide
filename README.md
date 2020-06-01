# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fatimasajadi/lotide`

**Require it:**

`const _ = require('@fatimasajadi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head(...)`: A commonly used function for arrays is to retrieve the first element from the array. 
* `function tail(...)`: A function used for arrays is to retrieve every element of the array except the head (first element) of the array.
* `function middle(...)`: The middle function returns an array with only the middle element(s) of the provided array. For arrays with one or two elements, there is no middle. Return an empty array. For arrays with odd number of elements, an array containing a single middle element should be returned.For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
