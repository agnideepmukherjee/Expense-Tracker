
let inCome = document.getElementById("income");
let incomeText = document.getElementById("incomeId");
let eName = document.getElementById("expName");
let edate = document.getElementById("edate");
let amt = document.getElementById("amt");
let addBtn = document.getElementById("addBtn");
let tableData = document.getElementById("showTable");
let addInc = document.getElementById("addInc");
let editIncome = document.getElementById("editIncome")

let arr = [];
let arr1 = [];
let finalInc= 0;
addInc.addEventListener("click", function () {
    //incomeText.textContent = inCome.value;
     finalInc=addIncome(inCome.value);
     if(finalInc!= 0){
    incomeText.textContent = finalInc;
    editIncome.innerHTML = `<button id="edit-btn" onclick="edit();">Edit</button>`;
    incomeText.textContent = finalInc;
     }
    add(finalInc);
})

function edit(){
   
    inCome.value=finalInc;
    incomeText.textContent="";
    arr1=[];
    addIncome(inCome.value);
  
  
}

function addIncome(val) {
    
    if(incomeText.textContent==""){
        arr1=[];
    }
    arr1.push(val);
  
    let incomeSum = 0;
    for (let i = 0; i < arr1.length; i++) {

        incomeSum = incomeSum + parseInt(arr1[i]);

    }
    inCome.value="";
   
    return incomeSum;
}

addBtn.addEventListener("click", function () {

    arr.push(
        {
            name: eName.value,
            date: edate.value,
            amt: amt.value
        })
    eName.value = "";
    edate.value = "";
    amt.value = "";
    add(finalInc);
})



function add(final) {
    //arr.length=0;
    let eleList = "";
    let balance = 0;
    let totalAmt = 0;
    console.log(final)
    // incomeText.textContent = inCome.value;
    for (let i = 0; i < arr.length; i++) {
        totalAmt = totalAmt + parseInt(arr[i].amt);
       
        balance = final - totalAmt;
        eleList += `<tr><td>${arr[i].name}</td><td>${arr[i].date}</td><td>${arr[i].amt}</td><td><button id="delExp" class="bi bi-trash" onclick="delElem(${i});">Delete</button></td></tr>`;
        console.log(arr.length);
    }
    if(arr.length!=0){
        balance=balance;
    }else{ balance=final;}
    eleList += `<tr><td>Total Expenses:</td><td id="a">${totalAmt}</td></tr><tr><td>Balance:</td><td id="a">${balance}</td><tr>`;
    tableData.innerHTML = eleList;
}
function delElem(index) {

    alert(arr);
    arr.splice(index, 1);
    add(finalInc);

}