document.write('<h1>Hello World!</h1>');
document.write(`<h2>nǐ hǎo shì jiè</h2>
<h3>Salut le Monde!</h3>
<h4>Hallo Welt!</h4>
<h5>namaste duniya</h5>`);

//Retrieving elements by ID------------------------------------------
var h1Greeting = document.getElementById('page-title');
h1Greeting.innerText = 'Greeting';
h1Greeting.style.color = 'white';
h1Greeting.style.backgroundColor = 'lightblue';

//-- Display arrays--------------------------------------------------
var scores = [80,90,100];
document.write("<h6>Scores</h6>");
document.write(scores);

//Creating dynamic lists----------------------------------------------
document.write("<ul>");
for(var i in scores){
    document.write ("<li> scores["+i+"] = " + scores[i]);
    document.write("</li>");
}
document.write("</ul>");

//Creating dynamic tables------BAD practice-----------------------------
var table = "<table>";
for(var j in scores) {
    var row = "<tr>";
    var col = "<td>";
    col += "scores["+j+"]";
    col += "</td>";
    row += col;
    col = "<td>"
    col += scores[j];
    col += "</td>";
    row += col;
    row += "</tr>";
    table += row;
}
table += "</table>";
document.write(table);

//Creating dynamic tables with Map-----------------------------
document.write(`
    <table border = "1">
        ${
            scores.map((score, idx) => `
                <tr>
                    <td>scores[${idx}]</td>
                    <td>${score}</td>
                </tr>
            `).join()
        } 
    </table>
`);

//Binding events------------------------------------------------
document.write(`<button onclick = "sayHello()">
                    say Hello
                </button>
`);

function sayHello(){
    alert("Hello!")
}

//InnerHTML---writing into HTML---------------------------------------------------
var result = document.getElementById("result");
result.innerHTML = 2 + 3;

// InnerHTML---reading from HTML
document.getElementById("motto").innerHTML = "QUI AUDET ADIPISCITUR";
document.h3.innerHTML = " ";

//value ---Reading from HTML element as string
var theElement = document.getElementById("account-id");
var theValue = theElement.value;
//alert(theValue);

//addAplusB function adds #a and #b and displays result in #c
function addAplusB(){
    var a = document.getElementById("a").value;
    a = parseInt(a);
    var b = document.getElementById("b").value;
    b = parseInt(b);
    document.getElementById("c").innerHTML = a + b;
}


