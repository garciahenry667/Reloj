setInterval(() => {
    let fecha = new Date();
    let element = document.querySelector('.screen');
    let hour = fecha.getHours();
    element.innerHTML = `
    <p>
        ${hour}: 
        ${fecha.getMinutes()}: 
        ${fecha.getSeconds()} 
        ${(hour > 12)? "PM" : "AM"}
    </p> 
    `
}, 1000);





    