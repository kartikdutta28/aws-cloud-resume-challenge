async function updateCounter() {
    const response = await fetch('https://5e4hezs4pggubt7kwptosrjaly0bqkqx.lambda-url.ap-south-1.on.aws/');
    console.log('Calling API');
    let counterDOMElement = document.querySelector('.counter-number');
    const data = await response.json();
    console.log(data);
    counterDOMElement.innerHTML = `Total Views so far are ${data}`;
}

updateCounter();