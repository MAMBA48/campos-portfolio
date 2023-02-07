function date() {
    let date = new Date()
    let day = date.getDay()
    let intDay = date.getDate()
    let numDay = intDay
    let month = date.getMonth()
    let year = date.getFullYear()
    let hour = date.getHours()
    let min = date.getMinutes()
    let monthAct = month
    let dayAct = day
    let yearAct = year
    let divTime = document.querySelector('#time')
        setInterval(() => {
            divTime.innerHTML = `${hour}:${min}</br>${dayAct}`
        },1000)
                
        switch (dayAct) {
            case 0: 
                dayAct = "Domingo"
            break;
            case 1: 
                dayAct = "Segunda-Feira" 
            break;
            case 2: 
                dayAct = "Terça-Feira" 
            break;
            case 3: 
                dayAct = "Quarta-Feira" 
            break;
            case 4: 
                dayAct = "Quinta-Feira" 
            break;
            case 5: 
                dayAct = "Sexta-Feira" 
            break;
            case 1: 
                dayAct = "Sábado" 
            break;
        }
        switch (monthAct) {
            case 0:
                monthAct = "Janeiro"
            break;
            case 1:
                monthAct = "Feveiro"
            break;
            case 2:
                monthAct = "Março"
            break;
            case 3:
                monthAct = "Abril"
            break;
            case 4:
                monthAct = "Maio"
            break;
            case 5:
                monthAct = "Junho"
            break;
            case 6:
                monthAct = "Julho"
            break;
            case 7:
                monthAct = "Agosto"
            break;
            case 8:
                monthAct = "Setembro"
            break;
            case 9:
                monthAct = "Outubro"
            break;
            case 10:
                monthAct = "Novembro"
            break;
            case 11:
                monthAct = "Dezembro"
            break;
        }
        
        console.log(`Hoje é dia: ${numDay}, ${dayAct}, ${monthAct} de ${yearAct}`)
    }
