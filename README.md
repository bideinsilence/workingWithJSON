# Working with JSON
MDN Web Docs JSON exercise
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

**See this live:** https://bideinsilence.github.io/workingWithJSON/


## How it's made:
HTML, CSS, JavaScript, and JSON Data


## Optimizations:
I saw an opportunity to write and implement a new loop from an array and save a
few lines of code - trying to keep it DRY:

```
    const myArticleElements = [myH2, myParagraph1,
        myParagraph2, myParagraph3, myList];
    for (const element of myArticleElements) {
        myArticle.appendChild(element);
    }
```

## Lessons Learned:
This was a fun experience in learning how to build out a web page by populating
it with data acquired from a fetch call to a JSON object.
