* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0f172a;
    color: #f8fafc;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.card {
    background: #1e293b;
    padding: 35px;
    border-radius: 16px;
    border: 1px solid #334155;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    text-align: center;
}

.badge {
    background: #2563eb;
    color: #fff;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
}

h2 {
    margin: 15px 0 8px;
    color: #38bdf8;
}

p {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: #0f172a;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 15px;
    outline: none;
}

input:focus {
    border-color: #38bdf8;
}

button {
    width: 100%;
    padding: 14px;
    background: #0284c7;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #0369a1;
}

.result-box {
    margin-top: 20px;
    padding: 15px;
    background: #0f172a;
    border-radius: 8px;
    border: 1px solid #38bdf8;
    text-align: left;
    font-size: 0.9rem;
    white-space: pre-line;
}

.result-box h3 {
    color: #38bdf8;
    margin-bottom: 8px;
}
