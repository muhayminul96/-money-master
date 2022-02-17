

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



// using calculate exience and income

document.getElementById('calculator').addEventListener('click',function(){
    incomeValue = inputProsseing('income');
    foodValue = inputProsseing('food');
    rentValue = inputProsseing('rent');
    clothValue   = inputProsseing('cloth');

    


    console.log(incomeValue)
})

