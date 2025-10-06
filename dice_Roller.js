const API_URL = 'https://your-node-server.azurewebsites.net';

async function rollDice(sides) {
  try {
    const response = await fetch(`${API_URL}/roll/${sides}`);
    const data = await response.json();
    document.getElementById('diceResult').innerText = `Rolled a d${data.sides}: ${data.result}`;
  } catch (err) {
    console.error('Error fetching dice roll:', err);
    document.getElementById('diceResult').innerText = 'Error: Could not reach server';
  }
}

function rollDice() {
  for (let i = 1; i <= 5; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Random number 1-6
    document.getElementById(`die${i}`).value = roll;
  }
}
