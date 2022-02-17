

// input velue prossseing

function inputProsseing(id){
    const inputText = document.getElementById(id).value;
        if(isNaN(inputText)){
            alert('please check ' + id + ' field , it need a number' );
        }

        else{
            inputValue = parseFloat(inputText);

            if(inputValue >= 0){
               
                return inputValue;
                
            }
            else{
                alert('please check ' + id + ' field , it need a positive number')
            }

        }
    
}

//  this is balenceCalculator that deploy balence and expence

function balenceCalculator(income,expence){
    const balence = income - expence ;

    if(balence < 0){
        alert("vai apni khoroc bashi kore felcen, tai income baran")
    }
    else{
        if(isNaN(balence)){

        }
        else{
            document.getElementById('expence').innerText = expence;
            document.getElementById('balance').innerText = balence;
        }
        

    }
}



// using calculate exience and income

document.getElementById('calculator-btn').addEventListener('click',function(){
    const incomeValue = inputProsseing('income');
    const foodValue = inputProsseing('food');
    const rentValue = inputProsseing('rent');
    const clothValue   = inputProsseing('cloth');

    const expence = foodValue + rentValue + clothValue;

    balenceCalculator(incomeValue,expence)
    
})


function savingsCalculator(income,parsentage){
    const savings = income * parsentage / 100

    balence = parseFloat(document.getElementById('balance').innerText)

    if(balence < savings){
        alert('sir you can not save ' + savings + ' taka. your balance is low')
    }

    else{
        document.getElementById('savings-amount').innerText = savings;
        document.getElementById('remaining-balence').innerText = balence - savings   ;
    }

    console.log(balence)


}


// this is time to savaing part

document.getElementById('save-btn').addEventListener('click',function(){
    incomeValue = inputProsseing('income');
    saveParsentence = inputProsseing('savings');

    savingsCalculator(incomeValue,saveParsentence)

    
})





