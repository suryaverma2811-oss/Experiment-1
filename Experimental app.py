from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows your HTML frontend to talk to this Python server

@app.route('/')
def home():
    return "Backend Server is Running!"

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.json
    user_input = data.get('input', '')
    
    # Custom backend response logic
    response_payload = {
        "status": "success",
        "message": f"Successfully analyzed query: '{user_input}'",
        "score": "88/100 (High Urgency)",
        "recommendation": "Automate resource allocation using smart scheduling."
    }
    
    return jsonify(response_payload)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
