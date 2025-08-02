---
layout: ../../layouts/BlogPost.astro
title: "Empty Strings and Zero-length Arrays: How do We Store... Nothing?"
pubDate: 2024-06-15
description: "Understand how nothing can still be something in the world of code."
author: "Biraj"
---

In high-level languages like Python and JavaScript, we are pretty used to initializing strings and arrays like this:

```javascript
let myStr = ""; // an empty string
let myArr = []; // an empty array
```

We're saying that these are empty, which implies they contain zero bytes of data. So we are storing zero-bytes of data? Huh? Tf is this paradoxical nonsense?

## Storing Nothing

An empty array or string doesn't contain any elements or characters, yet it exists. This can feel as paradoxical as carrying an invisible suitcase that weighs nothing. But how do we make sense of this? _drumrolls_ Actually, it's NOT empty.

## Strings: The C Language Perspective

To unravel this mystery, let's take a trip to the world of C programming. In C, strings are typically handled as arrays of characters ending with a _null character_ (`'\0'`). But what happens when you want an empty string?

When you create an empty string in C, you are essentially allocating a string that points to a memory location that stores the null character. This is akin to reserving a seat at a table for a ghost. The chair is there, the place is set, but nobody's coming to dinner. Reminds me of my last date.

Here's a simple representation in C:

```c
char emptyString[1] = "";
```

In this example, `emptyString` is an array with a single element (notice the `[1]` in the declaration), which is the null terminator. The length of the string is zero, but the pointer `emptyString` itself is very much real and occupies memory. It's like having an address to an empty house.

In C, the length of a string is determined by iterating through each character until the null terminator (`'\0'`) is encountered. This is exactly what the `strlen()` function does. It counts characters until it finds the null byte, excluding the terminator itself.

> The strlen() function calculates the length of the string pointed to by s, excluding the terminating null byte (`'\0'`).

So `strlen(emptyString)` will start the counter with 0 but immediately reach the null byte, resulting in a length of 0.

## Zero-Length Arrays

In C, arrays are typically fixed in size once declared. So first let's C (ok sorry, see) how we can implement a dynamic or growable array of integers using a struct:

```c
struct IntArray {
  int *data;     // pointer to the array's data
  int length;    // current number of elements in the array
  int capacity;  // maximum capacity of the array
};
```

Here, `IntArray` represents a C struct that manages an array of integers. It consists of:

1. `data`: A pointer to the array's data (which can dynamically grow).
2. `length`: The current number of elements in the array.
3. `capacity`: The maximum capacity of the array, indicating how many elements can be stored before needing to resize.

Unlike traditional fixed-size arrays, instances of `IntArray` can dynamically adjust their size as elements are added or removed, akin to how arrays work in higher-level languages like Python or JavaScript. However, in C, this flexibility comes with added responsibility. Developers must manually manage memory allocation and resizing. They need to track the array's length when pushing or popping elements.

When an `IntArray` is initialized, memory is allocated based on the `capacity` in bytes, and the address of the allocated memory is stored in the `data` pointer. The `length` field is then set to zero. This process is analogous to what higher-level languages like JavaScript do internally when you create an empty array.

## Why This Matters

Knowing that an empty string in C is just a pointer that points to `'\0'` character feels good. Curiosity is reason enough! Here's what I tweeted today:

> go underneath those abstractions anon, and you'll experience wonders.
