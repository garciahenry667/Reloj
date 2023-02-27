setInterval(() => {
    let fecha = new Date();
    let element = document.querySelector('.screen')
    element.innerHTML = `
    <p>${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()} </p> 
    `
}, 1000);





    