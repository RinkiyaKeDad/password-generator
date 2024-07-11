Running the app:
```
flask run --debug
```

Testing the api:
```
curl -X POST http://127.0.0.1:5000/generate-password \
     -H "Content-Type: application/json" \
     -d '{"length": 12}'
```

---
### TODOs
- Slider resets when password length changed, if length increases the value should remain same if length dec both should dec together after a certain point
- UI is trash

---

### Notes
- The `.json()` method always returns a Promise, regardless of whether it is used inside a `.then` statement or not. This is because the `.json()` method is designed to handle the asynchronous operation of reading the response body and parsing it as JSON.
 
- Arrow functions:
    ```
    // Traditional function
    function add(a, b) {
    return a + b;
    }

    // Arrow function
    const add = (a, b) => a + b;

    // Arrow function with no parameters
    const sayHello = () => console.log("Hello!");

    // Arrow function with a single parameter
    const square = x => x * x;

    // Arrow function with a block body (requires explicit return)
    const add = (a, b) => {
    const result = a + b;
    return result;
    };
    ```
- The issue lies in the type of values you are using in your comparison. In JavaScript, values from form inputs are retrieved as strings, so when you perform the addition of this.value and numsSlider.value, you are actually concatenating strings rather than adding numbers.
To fix this, you need to convert the string values to numbers before performing the comparison:
    ```
    if (Number(this.value) + Number(numsSlider.value) > Number(length)) {
        console.log("going in spl if")
        var updatedValue = length - this.value
        numsSlider.value = updatedValue
        numsSliderValue.textContent = updatedValue
    }
    ```

