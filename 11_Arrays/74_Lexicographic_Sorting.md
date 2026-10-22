# Lexicographic Sorting in JavaScript

## What does lexicographic mean?

Lexicographic order compares values like words in a dictionary: it looks at the first character first, then the next character if the first ones match. JavaScript's default `Array.prototype.sort()` uses this kind of ordering. It converts array elements to strings and compares those strings by their UTF-16 code units.

This is useful for sorting text, but it can surprise you when sorting numbers.

## Default sorting and numbers

```js
let numbers = [10, 2, 15, 22];
console.log(numbers.sort());
// [10, 15, 2, 22]
```

The numbers are treated as strings: `"10"`, `"2"`, `"15"`, and `"22"`. Comparing from left to right puts `"10"` and `"15"` before `"2"`, because their first character (`1`) comes before (`2`).

Negative numbers can also look unexpected:

```js
let values = [11, -11];
console.log(values.sort());
// [-11, 11]
```

Here the strings `"-11"` and `"11"` are compared. The hyphen sorts before the digit `1`.

## Sort numbers numerically

Pass a comparison function to `sort()`. For two values `a` and `b`:

- Return a negative number when `a` should come before `b`.
- Return a positive number when `a` should come after `b`.
- Return `0` when their order does not matter.

```js
let numbers = [10, 2, 15, 22];

numbers.sort((a, b) => a - b);
console.log(numbers);
// [2, 10, 15, 22]

numbers.sort((a, b) => b - a);
console.log(numbers);
// [22, 15, 10, 2]
```

`sort()` changes the original array. To keep the original unchanged, copy it first:

```js
let numbers = [10, 2, 15, 22];
let sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers); // [2, 10, 15, 22]
console.log(numbers);       // [10, 2, 15, 22]
```

## Sorting strings

Default sorting works lexicographically for strings:

```js
let fruits = ["pear", "apple", "orange"];
console.log(fruits.sort());
// ["apple", "orange", "pear"]
```

For language-aware text ordering, use `localeCompare()`:

```js
let names = ["Zoe", "Álvaro", "Ana"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
```

The exact locale-aware order can depend on the runtime's locale. You can specify one and request case-insensitive ordering:

```js
let names = ["zoe", "Álvaro", "Ana"];
names.sort((a, b) =>
  a.localeCompare(b, "en", { sensitivity: "base" })
);
```

## Lexicographic versus natural sorting

Lexicographic sorting treats digit sequences as text, so `"item10"` sorts before `"item2"` because the character `1` comes before `2`. For a numeric-aware, often called “natural”, text order, use `Intl.Collator` with its `numeric` option:

```js
let items = ["item10", "item2", "item1"];
let collator = new Intl.Collator("en", { numeric: true });

items.sort(collator.compare);
console.log(items);
// ["item1", "item2", "item10"]
```

## Remember

- `array.sort()` without a comparator sorts by string representation, not numeric value.
- Use `(a, b) => a - b` for ascending numbers and `(a, b) => b - a` for descending numbers.
- Use `localeCompare()` for locale-aware strings.
- Use `Intl.Collator` with `{ numeric: true }` when text contains numbers that should sort numerically.
- `sort()` mutates the array it is called on.
---sir notes----------------
## What is Lexicographic?

**Lexicographic** means dictionary order. Two strings are compared one character at a time from the left, and the first character that differs decides which one comes first. That's the order `sort()` uses by default.

```js
["banana", "apple", "cherry"].sort();   // [ 'apple', 'banana', 'cherry' ]
```

`"apple"` comes before `"banana"` because `a` comes before `b`, so the rest of the word doesn't matter.

**Why numbers sort "wrong":** without a compare function, `sort()` turns numbers into strings first and then compares them as text:

```js
[10, 1, 2].sort();   // [ 1, 10, 2 ]
```

- `"10"` vs `"2"`: the first characters are `"1"` and `"2"`, and `"1"` is smaller, so `"10"` comes first. The `0` is never looked at.
- `"1"` vs `"10"`: they match on `"1"`, then `"1"` runs out of characters. The shorter one comes first, the same way "car" comes before "cart" in a dictionary.

**Characters are compared by their character codes, not the alphabet you learned:**

| Character | Code |
|:---------:|:----:|
| `"0"` to `"9"` | 48 to 57 |
| `"A"` to `"Z"` | 65 to 90 |
| `"a"` to `"z"` | 97 to 122 |

So digits come before uppercase letters, and uppercase letters come before lowercase ones:

```js
["banana", "Apple", "cherry"].sort();   // [ 'Apple', 'banana', 'cherry' ]
["b", "B", "a", "A"].sort();            // [ 'A', 'B', 'a', 'b' ]
```

**The fixes:**
- **Numbers:** `.sort((a, b) => a - b)`
- **Text, ignoring case the way people expect:** `.sort((a, b) => a.localeCompare(b))`