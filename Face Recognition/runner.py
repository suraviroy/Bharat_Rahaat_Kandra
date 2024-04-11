from flask import Flask, jsonify,request
import subprocess
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "hello world"

@app.route("/face-recognition")
def trigger_notification():
    try:
        subprocess.run(["python", "C:/hackathon/SIH/Face Recognition/main.py"], check=True)
        return jsonify({'message': 'Notification triggered successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route("/biometric-recognition")
def trigger_biometric():
    try:
        subprocess.run(["python", "C:/hackathon/SIH/Fingerprint/Codes/takeFingerprint.py"], check=True)
        return jsonify({'message': 'Notification triggered successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)