const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('New user connected');
    
    // Broadcast message to all clients when a message is received
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Send the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Notify when a user disconnects
    ws.on('close', () => {
        console.log('User disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
