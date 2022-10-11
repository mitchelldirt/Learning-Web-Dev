# Markdown Reference

# Text Decoration

Hello there - _welcome_ to **mastering markdown**!

I'm **super excited** to have you 

~~along for the ride~~

# Code Snippet

```
const age = 10
const name = 'Mitchell'
```

# Headings in markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6 

# Links

[My GitHub Account](https://www.github.com/mitchelldirt)

Make sure you check out [my blog][1] on [hashnode][hashnode]


# Images


![This is an alt text](https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg "This is a title")

![Puppy!][pup]

Link to larger image
[![alt](http://unsplash.it/50/50?image=1012)](http://unsplash.it/500/500?image=1012)

Alternative Syntax
[<img src="http://unsplash.it/50/50?image=1012">](http://unsplash.it/500/500?image=1012)



[1]: https://mitchellmudd.hashnode.dev/

[hashnode]: https://hashnode.com/

[pup]: http://unsplash.it/500/500?image=1012

# Lists

## Unordered (ingredients)

- Salt
- Pepper
- Sugar
- Oat Milk

## Ordered (Steps)

1. Combine ingredients
    * Sift sugar

        This is under the nested list

        ![](http://unsplash.it/500/300?random)
      * Sift oat milk
2. Jump on the table
3. Gently Stir Together
4. Bake at 350 for 20 Minutes

# Line Breaks, Horizontal Rules, and Block Quotes

## Line Breaks

Mitchell is awesome<br>
He is

Regular space

## Horizontal Rules

Use 3 - or = for horizontal rules there are three of them below

---

---

===

## Block Quotes

> Use a **greater than sign** for _block quotes_
> Hello

# Code Blocks

## Block

```js
const x = 3;
const y = 4;
  function add(x, y) {
    return x + y;
  }
// Returns 7
``` 
## Inline

Hey did you try `const x = y`

## Diff

```diff
const x = 100;
- const y = 200;
+ const y = 150;
```

# Tables

Changing the colons around in the table changes the text justification 

There's markdown table generators if need be. The syntax is quite odd

| Dog's Name | Dog's Age |
|:-----------:|---------:|
|Winston|2|

# Checklist (github specific)

* [x] Item 1
* [ ] Item 2
* [ ] Item 3
