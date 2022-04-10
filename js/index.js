let form = document.getElementById('main-form');
let equation = document.getElementById('equation');
let minX = document.getElementById('min-x');
let maxX = document.getElementById('max-x');
let minY = document.getElementById('min-y');
let maxY = document.getElementById('max-y');
let submitBtn = document.getElementById('submitBtn');
let errorMsg = document.getElementById('error-msg');
let clear = document.getElementById('clear');

console.log("hi");

equation.addEventListener('change',(e)=>{
    let regex = /[0-9]$|[\x\X]$|[\-\+\/\*\^]$/;
    let str = e.target.value;
    let result = regex.test(str)
    // console.log(result)
    if(!result){
        errorMsg.innerHTML = "";
        submitBtn.disabled = true;
        errorMsg.innerHTML += "please just use x and number and this Oprations signs (+-*/^)"
    }else{
        errorMsg = "";
        submitBtn.disabled = false;
    }
});

clear.addEventListener('click',(e)=>{
    localStorage.clear();
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    errorMsg.innerHTML = "";
    let equationToStorage = equation.value;
    let minXToStorage = minX.value;
    let maxXToStorage = maxX.value;
    let minYToStorage = minY.value;
    let maxYToStorage = maxY.value;

    if(Number(minXToStorage)>Number(maxXToStorage)){
        errorMsg.innerHTML += 'Min X should not be greater than Max X';
    }else if(Number(minYToStorage)>Number(maxYToStorage)){
        errorMsg.innerHTML += 'Min Y should not be greater than Max Y';
    }else{
        localStorage.setItem('equation',equationToStorage);
        localStorage.setItem('min-x',minXToStorage);
        localStorage.setItem('max-x',maxXToStorage);
        localStorage.setItem('min-y',minYToStorage);
        localStorage.setItem('max-y',maxYToStorage);
    
        location.href = "/graph.html"
    }

});
