document.getElementById('length').addEventListener('input', function () {
    const length = document.getElementById('length').value;
    const splCharsSlider = document.getElementById('splchars');
    const splCharsSliderValue = document.getElementById('splcharsval');
    const numsSlider = document.getElementById('nums');
    const numsSliderValue = document.getElementById('numsval');

    if (length >= 6) {
        splCharsSlider.max = length;
        splCharsSlider.disabled = false;
        numsSlider.max = length;
        numsSlider.disabled = false;
    } else {
        splCharsSlider.disabled = true;
        splCharsSliderValue.textContent = 0;
        numsSlider.disabled = true;
        numsSliderValue.textContent = 0;
    }
});

document.getElementById('splchars').addEventListener('input', function () {
    console.log("hello from splcharsslider")
    const splCharsSliderValue = document.getElementById('splcharsval');
    splCharsSliderValue.textContent = this.value;
    const numsSlider = document.getElementById('nums');
    const numsSliderValue = document.getElementById('numsval');
    const length = document.getElementById('length').value;


    console.log(this.value)
    console.log(numsSlider.value)
    console.log(length)

    if (Number(this.value) + Number(numsSlider.value) > Number(length)) {
        console.log("going in spl if")
        var updatedValue = length - this.value
        numsSlider.value = updatedValue
        numsSliderValue.textContent = updatedValue
    }
});

document.getElementById('nums').addEventListener('input', function () {
    console.log("hello from numsslider")
    const numsSliderValue = document.getElementById('numsval');
    numsSliderValue.textContent = this.value;
    const splCharsSlider = document.getElementById('splchars');
    const splCharsSliderValue = document.getElementById('splcharsval');
    const length = document.getElementById('length').value;
    console.log(this.value)
    console.log(splCharsSlider.value)
    console.log(length)
    if (Number(this.value) + Number(splCharsSlider.value) > Number(length)) {
        console.log("going in nums if")
        var updatedValue = length - this.value
        splCharsSlider.value = updatedValue
        splCharsSliderValue.textContent = updatedValue
    }
});

document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const length = document.getElementById('length').value;
    const splchars = document.getElementById('splchars').value;
    const nums = document.getElementById('nums').value;
    fetch('/generate-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ length, splchars, nums })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('passwordResult').textContent = `Generated Password: ${data.password}`;
        });
});