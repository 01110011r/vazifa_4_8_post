const Name = document.querySelector('.name'),
    Years = document.querySelector('#years'),
    btn = document.querySelector('button'),
    // block = document.querySelector('.block'),
    form = document.querySelector('form');

// const fragment=DocumentFragment();

const tBody = document.querySelector('tbody');


let tr = 0;



const url = 'https://reqres.in/api/user';


// fetch(url).then((Promis) => Promis.json()).then((pData) => {
//     console.log(pData);

//     pData.data.map((dataS) => {

//         const item = document.createElement('div');
//         block.appendChild(item);
//         item.classList.add('block__item');

//         const span1 = document.createElement('span');
//         item.appendChild(span1);
//         span1.textContent = 'Name: ' + dataS.name;



//         const span2 = document.createElement('span');
//         item.appendChild(span2);
//         span2.textContent = 'Year: ' + dataS.year;


//     })

// })




form.addEventListener('submit', (e) => {

    e.preventDefault();





    console.log(Name.value);


    tr = ++tr;


    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: Name.value,
            year: Years.value
        })


    }).then((resp) => resp.json()).then((data) => {
        console.log(data)

        form.reset();

        // const item = document.createElement('div');
        // block.appendChild(item);
        // item.classList.add('block__item');

        // const span1 = document.createElement('span');
        // item.appendChild(span1);
        // span1.textContent = 'Name: ' + data.name;



        // const span2 = document.createElement('span');
        // item.appendChild(span2);
        // span2.textContent = 'Year: ' + data.year;



        const series = document.createElement('tr');
        series.classList.add('series');



        const order = document.createElement('td');
        order.classList.add('order');
        series.appendChild(order);
        order.textContent = tr;

        const firstName = document.createElement('td');
        firstName.classList.add('first-name');
        series.appendChild(firstName);
        firstName.textContent = data.name;

        const age = document.createElement('td');
        age.classList.add('age');
        series.appendChild(age);
        age.textContent = data.year;


        tBody.appendChild(series);





    }).catch((error) => console.log(error))


})