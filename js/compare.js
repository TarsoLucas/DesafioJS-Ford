
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.imagem = imagem;
    }
}

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i <= Object.keys(arr[0]).length; i++){
        if(arr[0].nome  == carClass.nome){
            return 0;
        }
        else if (arr[1].nome == carClass.nome) {
            return 1;
        }
        else if (arr[2].nome == carClass.nome) {
            return 2;
        }
    }
    return -1;
}


function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            let text = el.onchange.toString();
            let objProperties = text.slice(text.indexOf("'"), text.lastIndexOf(")") - 1).replace(/'/g,"").split(", ");

            if (carArr.length <= 2) {
                carArr.push(new Car(objProperties[0], objProperties[1], objProperties[2], objProperties[3], objProperties[4], objProperties[5], objProperties[6], objProperties[7], objProperties[8], objProperties[9], objProperties[10]));
            }

        } else {
            test = GetCarArrPosition(carArr, carClass)
            if (carArr.length > 1) {
                carArr.splice(test, 1)
            } else {
                carArr.splice(test, 1)
            }

        } 
    } else {
        throw "You must set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("É necessário marcar 2 carros para apresentar a comparação");
        return;
    } else if (carArr.length > 2) {
        alert ("Selecione apenas 2 carros para comparar.");
        return;
    }

    for (var i = 0; i < carArr.length; i++) {
        UpdateCompareTable(i);
    }
    document.getElementById("compare").style.display = "block";

}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable(index) {
    console.log(carArr[index].volumeCacamba);
document.getElementById('compare_image_'+ index).innerHTML = "<img src='" + carArr[0].imagem + "' width='180'>";
document.getElementById('compare_modelo_'+ index).innerHTML = carArr[index].nome;
document.getElementById('compare_alturacacamba_'+ index).innerHTML = carArr[index].alturaCacamba;
document.getElementById('compare_alturaveiculo_'+ index).innerHTML = carArr[index].alturaVeiculo;
document.getElementById('compare_alturasolo_'+ index).innerHTML = carArr[index].alturaSolo;
document.getElementById('compare_capacidadecarga_'+ index).innerHTML = carArr[index].capacidadeCarga;
document.getElementById('compare_motor_'+ index).innerHTML = carArr[index].motor;
document.getElementById('compare_potencia_'+ index).innerHTML = carArr[index].potencia;
document.getElementById('compare_volumecacamba_' + index).innerHTML = carArr[index].volumeCacamba;
document.getElementById("compare_roda_" + index).innerHTML = carArr[index].roda;
localeParameters = {style: 'currency', currency: 'BRL'}
ptBrCurrencyLocale = new Intl.NumberFormat("pt-BR", localeParameters)
document.getElementById('compare_preco_'+ index).innerHTML = ptBrCurrencyLocale.format(parseFloat(carArr[index].preco));
}
