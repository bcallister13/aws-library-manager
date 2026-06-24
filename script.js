async function updateVisitorCount() {
const response = await fetch('https://hfnom4y5q3yps4gwpyj7dqn6qm0hoank.lambda-url.us-east-2.on.aws/');
const data = await response.json();
document.getElementById('visitor-count').textContent = data.count;
}
updateVisitorCount();
