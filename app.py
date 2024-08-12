from flask import Flask, render_template, request, jsonify
import random
import string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-password', methods=['POST'])
def generate_password():
    data = request.get_json()
    print(data)
    length = int(data['length'])
    nums = bool(data['nums'])
    splchars = bool(data['splchars'])

    characters = string.ascii_letters 
    spls = string.punctuation
    numbers =  string.digits 

    print(characters)
    password = ''
    letterCount = 0
    numCount = 0
    splcharCount = 0

    # fix lenghts
    if nums and splchars:
        letterCount = random.randint(1, length - 2)
        numCount = random.randint(1, length - letterCount - 1)
        splcharCount = length - letterCount - numCount

    elif nums:
        numCount = random.randint(1,length-1)
    
    elif splchars:
        splcharCount = random.randint(1,length-1)

    print(numCount)
    print(splcharCount)
    print(letterCount)
    print(length)

    # generate password
    while numCount > 0:
        password += random.choice(numbers)
        numCount -= 1
        length -=1

    while splcharCount > 0:
        password += random.choice(spls)
        splcharCount -= 1
        length -=1 
    
    while length > 0:
        password += random.choice(characters)
        length -= 1

    # randomize the password
    password = ''.join(random.sample(password,len(password)))
    print(password)

    return jsonify(password=password)

if __name__ == '__main__':
    app.run(debug=True)
