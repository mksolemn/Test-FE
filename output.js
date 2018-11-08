const correctAnswers = [1, -2, -1, 2, 2, 0];
let results = '';

for (let temp in temps) {
    const value = outputTemp(temps[temp]);
    const num = parseInt(temp) + 1;

    const answer = (value === correctAnswers[temp] ? '<span style="color: #090">Correct</span>' : '<span style="color: #900">Incorrect</span>');

    results += `${num} value: ${value} is ${answer}<br>`;
}

document.querySelector('.results').innerHTML = results;