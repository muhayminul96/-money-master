

// input velue prossseing

function inputProsseing(id){
    inputText = document.getElementById(id).value;
        if(isNaN(inputText)){
            alert('please check ' + id + ' field , it need a number' )
        }

        else{
            inputValue = parseFloat(inputText)

            if(inputValue >= 0){
                return inputValue;
                
            }
            else{
                alert('please check ' + id + ' field , it need a positive number' + inputValue)
            }

        }
    
}


function balenceCalculator(income,expence){
    balence = income - expence

    if(balence<0){
        alert("vai apni mone hoi khoroc bashi kore felcen")
    }
    else{
        document.getElementById('expence').innerText = expence;
        document.getElementById('balance').innerText = balence;

    }
}



// using calculate exience and income

document.getElementById('calculator').addEventListener('click',function(){
    incomeValue = inputProsseing('income');
    foodValue = inputProsseing('food');
    rentValue = inputProsseing('rent');
    clothValue   = inputProsseing('cloth');

    expence = foodValue + rentValue + clothValue;


    balenceCalculator(incomeValue,expence)




    console.log(incomeValue)
})

