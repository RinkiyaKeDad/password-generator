async function getPassword () {
    const length = document.getElementById('passlen').value;
    const nums = document.getElementById('nums').checked;
    const splchars = document.getElementById('splchars').checked;
    try {
        const response = await fetch('/generate-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({length, nums, splchars})
        });
        
        if (!response.ok){
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        document.getElementById('passwordResult').textContent = `${data.password}`;
    } catch (error) {
        console.error("Failed to generate password:", error);
        throw error;
    }
}

document.getElementById('passlen').addEventListener('input', function(){
    const passSliderVal = document.getElementById('passlenval');
    passSliderVal.textContent = this.value;
})

document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    getPassword().catch(error => {
        console.log("Error generating password:", error);
    })
});

document.addEventListener("DOMContentLoaded", function(event){
    getPassword().catch(error => {
        console.log("Error generating password:", error);
    })
});

document.getElementById('copyButton').addEventListener('click', function (){
    password = document.getElementById('passwordResult')
    navigator.clipboard.writeText(password.innerText);
})

document.getElementById('regenButton').addEventListener('click', function(){
    getPassword().catch(error => {
        console.log("Error generating password:", error);
    })
})
