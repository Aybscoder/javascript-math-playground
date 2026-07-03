// =====================================
// JavaScript Math Playground
// =====================================

// Dark Mode
function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        button.innerHTML = "🌙";

        localStorage.setItem("theme", "light");

    }

}

// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    document.getElementById("themeBtn").innerHTML = "☀️";

}

// =====================================
// Calculate Math Functions
// =====================================

function calculateMath() {

    const number = parseFloat(

        document.getElementById("numberInput").value

    );

    if (isNaN(number)) {

        alert("Please enter a valid number.");

        return;

    }

    const results = document.getElementById("results");

    results.innerHTML = "";

    const mathFunctions = [

        {

            title: "Math.floor()",

            description: "Rounds DOWN to the nearest integer.",

            syntax: `Math.floor(${number})`,

            result: Math.floor(number)

        },

        {

            title: "Math.ceil()",

            description: "Rounds UP to the nearest integer.",

            syntax: `Math.ceil(${number})`,

            result: Math.ceil(number)

        },

        {

            title: "Math.round()",

            description: "Rounds to the nearest integer.",

            syntax: `Math.round(${number})`,

            result: Math.round(number)

        },

        {

            title: "Math.trunc()",

            description: "Removes the decimal part.",

            syntax: `Math.trunc(${number})`,

            result: Math.trunc(number)

        },

        {

            title: "Math.abs()",

            description: "Returns the absolute value.",

            syntax: `Math.abs(${number})`,

            result: Math.abs(number)

        },

        {

            title: "Math.sqrt()",

            description: "Returns the square root.",

            syntax: `Math.sqrt(${number})`,

            result: Math.sqrt(number).toFixed(4)

        },

        {

            title: "Math.cbrt()",

            description: "Returns the cube root.",

            syntax: `Math.cbrt(${number})`,

            result: Math.cbrt(number).toFixed(4)

        },

        {

            title: "Math.pow()",

            description: "Raises the number to power 2.",

            syntax: `Math.pow(${number},2)`,

            result: Math.pow(number,2)

        },

        {

            title: "Math.sign()",

            description: "Returns whether the number is positive or negative.",

            syntax: `Math.sign(${number})`,

            result: Math.sign(number)

        },

        {

            title: "Math.sin()",

            description: "Returns sine value.",

            syntax: `Math.sin(${number})`,

            result: Math.sin(number).toFixed(4)

        },

        {

            title: "Math.cos()",

            description: "Returns cosine value.",

            syntax: `Math.cos(${number})`,

            result: Math.cos(number).toFixed(4)

        },

        {

            title: "Math.tan()",

            description: "Returns tangent value.",

            syntax: `Math.tan(${number})`,

            result: Math.tan(number).toFixed(4)

        },

        {

            title: "Math.log()",

            description: "Returns natural logarithm.",

            syntax: `Math.log(${number})`,

            result: Math.log(number).toFixed(4)

        },

        {

            title: "Math.exp()",

            description: "Returns e raised to the power.",

            syntax: `Math.exp(${number})`,

            result: Math.exp(number).toFixed(4)

        },

        {

            title: "Math.PI",

            description: "Returns the value of PI.",

            syntax: "Math.PI",

            result: Math.PI

        }

    ];

    mathFunctions.forEach(item => {

        results.innerHTML += `

        <div class="math-card">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <code>${item.syntax}</code>

            <div class="result">

                Output : ${item.result}

            </div>

        </div>

        `;

    });

}

// =====================================
// Random Number
// =====================================

function generateRandom(){

    const random = Math.floor(

        Math.random()*100

    ) + 1;

    document.getElementById("randomOutput").textContent = random;

}

// =====================================
// Quiz
// =====================================

const quizzes = [

{

question:"Math.floor(15.9)",

answer:"15"

},

{

question:"Math.ceil(15.1)",

answer:"16"

},

{

question:"Math.round(7.6)",

answer:"8"

},

{

question:"Math.abs(-20)",

answer:"20"

},

{

question:"Math.pow(5,2)",

answer:"25"

}

];

let currentQuiz = 0;

document.getElementById("quizQuestion").textContent =
quizzes[currentQuiz].question;

function checkAnswer(){

const answer =
document.getElementById("quizAnswer").value.trim();

const result =
document.getElementById("quizResult");

if(answer===quizzes[currentQuiz].answer){

result.innerHTML="✅ Correct";

result.style.color="#16a34a";

}else{

result.innerHTML=`❌ Wrong. Correct Answer: ${quizzes[currentQuiz].answer}`;

result.style.color="#dc2626";

}

currentQuiz++;

if(currentQuiz>=quizzes.length){

currentQuiz=0;

}

setTimeout(()=>{

document.getElementById("quizQuestion").textContent=
quizzes[currentQuiz].question;

document.getElementById("quizAnswer").value="";

result.innerHTML="";

},2000);

}

// =====================================
// Auto Generate
// =====================================

document.getElementById("numberInput").value = 15.78;

calculateMath();