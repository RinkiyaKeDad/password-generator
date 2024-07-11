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
    splchars = int(data['splchars'])
    nums = int(data['nums'])

    characters = string.ascii_letters 
    spls = string.punctuation
    numbers =  string.digits 

    print(characters)
    password = ''

    while splchars > 0:
        password += random.choice(spls)
        splchars -= 1
        length -=1 

    while nums > 0:
        password += random.choice(numbers)
        nums -= 1
        length -=1 
    
    while length > 0:
        password += random.choice(characters)
        length -= 1

    # randomize the password
    password = ''.join(random.sample(password,len(password)))

    return jsonify(password=password)

if __name__ == '__main__':
    app.run(debug=True)
