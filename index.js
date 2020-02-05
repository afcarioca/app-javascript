const $ = document;
var tTable = $.getElementById("importacoes");
var tTh = $.getElementsByTagName("th");
var tBody = $.createElement("tbody");
tBody.setAttribute("id", "negociacoes");
tTable.appendChild(tBody);

var inputData = $.getElementById("input-data");
var inputQuantidade = $.getElementById("input-quantidade");
var inputValor = $.getElementById("input-valor");

$.getElementById("incluir").addEventListener("click", function(event){
    event.preventDefault();
 
    var tRow = $.createElement("tr");

    var tDate = $.createElement("td");
    tDate.textContent = inputData.value; 
    tRow.appendChild(tDate);

    var tDate = $.createElement("td");
    tDate.textContent = inputQuantidade.value; 
    tRow.appendChild(tDate);


    var tDate = $.createElement("td");
    tDate.textContent = inputValor.value; 
    tRow.appendChild(tDate);

    var tDate = $.createElement("td");
    tDate.textContent = (parseInt(inputQuantidade.value) * parseFloat(inputValor.value)).toFixed(2) ; 
    tRow.appendChild(tDate);

    tBody.appendChild(tRow); 

        
    
});

$.getElementById("apagar").addEventListener("click", function(event){
    event.preventDefault();
    
    inputData.value ="";
    inputQuantidade.value =0;
    inputValor.value =0.0;
});

$.getElementById("apaga-ultima").addEventListener("click", function(event){
    event.preventDefault();
    tBody.removeChild(tBody.childNodes[0]);
});

$.getElementById("apaga-tudo").addEventListener("click", function(event){
    event.preventDefault();

    var tBody = $.getElementById("negociacoes");
    
    while(tBody.childNodes.length){
        tBody.removeChild(tBody.childNodes[0]);
        console.log("Aqui")
    }
        
    
    
        
    
});