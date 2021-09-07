const GQL_URL = 'http://localhost:4000/graphql';

const p = document.querySelector('p');

const fetchGreeting = async () => {
    const response = await fetch(GQL_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    })
    const { data } = await response.json(); 
    return data;
}

fetchGreeting().then(({greeting}) => {
    const p = document.querySelector('p');
    p.textContent = greeting;
})