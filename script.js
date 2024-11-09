// alert("")
// let array = []
let coursecode = document.getElementById("coursecode")
let creditload = document.getElementById("creditload")
let grade = document.getElementById("grade")
let submit = document.getElementById("submit")
let inputtotal = document.getElementById("inputtotal")
let answer1 = "";
// let total = document.getElementById("total")
// let tr = document.getElementById("tr")
let table = document.getElementById("table")
// let td = document.getElementById("td")

console.log(coursecode)
console.log(creditload)
console.log(grade)
console.log(submit)
console.log(inputtotal)

// while(true){
submit.addEventListener("click", function(){
function createAnotherTr(){
    let tr = document.createElement("tr")
    table.appendChild(tr)
    tr.id ="tr"
    console.log(tr)
    function createTd(){
        let td1 = document.createElement("td")
        td1.appendChild(document.createTextNode(coursecode.value))
        tr.appendChild(td1)
        coursecode.value ="";

        let td2 = document.createElement("td")
        td2.appendChild(document.createTextNode(Number(creditload.value)))
        array.push(creditload.value)
        tr.appendChild(td2)
        // creditload.value ="";

        let td3 = document.createElement("td")
        td3.appendChild(document.createTextNode(grade.value))
        tr.appendChild(td3)
        // grade.value ="";
        console.log(grade.value)
        // creditload.value ="";

        // let array = []
        // let pushedArray = array.push("HELLO WOLRD")
        // console.log(pushedArray)

        // let answer ='';
        if(grade.value === "a"){
           let answer = ( 5 * Number(creditload.value))
        //    inputtotal.value = answer
        //    answer1 == answer
            console.log(answer)
            console.log("its an A")
            let td4 = document.createElement("td")
            td4.appendChild(document.createTextNode(answer))
            tr.appendChild(td4)
            console.log(answer1)
            
        }
        else if (grade.value === "B"){
            let answer = ( 4 * Number(creditload.value))
            inputtotal.value = answer
            console.log(answer)
            console.log("its a B")
            let td4 = document.createElement("td")
            td4.appendChild(document.createTextNode(answer))
            tr.appendChild(td4)
      

    } 
    if (grade.value === "C"){
        let answer = ( 3 * Number(creditload.value))
        console.log(answer)
        answer1 === answer
        console.log("its a C")
        let td4 = document.createElement("td")
        td4.appendChild(document.createTextNode(answer))
        tr.appendChild(td4)
    }
    

        // let td4 = document.createElement("td")
        // td4.appendChild(document.createTextNode(answer))
        // tr.appendChild(td4)


        // let totalAnswer = [];
        // totalAnswer.push(answer)
        // console.log(totalAnswer)
} 


createTd()
}  createAnotherTr()} )



// let totalAnswer = [];
// totalAnswer.push(answer)
// console.log(totalAnswer)

let array = [];
array.push(Number(creditload.value))
console.log(array)

let totalAnswer = [];
totalAnswer.push(inputtotal.value)
console.log(totalAnswer)




// }
// createAnotherTr()
// submit.addEventListener('click', function(){
//     function create(){
//         let td1 = document.createElement("td")
//         td1.appendChild(document.createTextNode(coursecode.value))
//         tr.appendChild(td1)
//         coursecode.value ="";

        // let td2 = document.createElement("td")
        // td2.appendChild(document.createTextNode(creditload.value))
        // tr.appendChild(td2)
        // creditload.value ="";

        // let td3 = document.createElement("td")
        // td3.appendChild(document.createTextNode(grade.value))
        // tr.appendChild(td3)
        // grade.value ="";
//     }
//     create()
//     function createAnotherTr(){
//         let tr = document.createElement("tr")
//         table.appendChild(tr)
//         tr.id ="tr"
//     }
//     console.log("outside", tr)
//     createAnotherTr()
// }
//     // array.push(grade.value)
//     // console.log(array)
