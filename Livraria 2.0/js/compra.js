
        function addProduto1(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 1;

        switch(cod){
            case 1:
                var descricao = "O CORTIÇO - Aluísio Azevedo";
                var preco = "R$28,90"  
                var qtde = document.getElementById("qtde1").value;
                valorTotal += (parseInt(qtde)*28.90)
                
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         
        var valorAntes = valorTotal + document.getElementById("valorTotal").value;
        
        document.getElementById("valorTotal").value = valorAntes;
        }
         
        function addProduto2(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 2;

        switch(cod){
            case 2:
                var descricao = "MEMÓRIA PÓSTUMAS DE BRÁS CUBAS - Machado de Assis";
                var preco = "R$25,90"  
                var qtde = document.getElementById("qtde2").value;
                valorTotal += (parseInt(qtde)*25.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto3(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 3;

        switch(cod){
            case 3:
                var descricao = "IRACEMA - José de Alencar";
                var preco = "R$21,90"  
                var qtde = document.getElementById("qtde3").value;
                valorTotal += (parseInt(qtde)*21.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto4(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 4;

        switch(cod){
            case 4:
                var descricao = "O APANHADOR NO CAMPO DE CENTEIO - J. D. Salinger";
                var preco = "R$23,90"  
                var qtde = document.getElementById("qtde4").value;
                valorTotal += (parseInt(qtde)*23.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto5(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 5;

        switch(cod){
            case 5:
                var descricao = "DIÁRIO DE UM BANANA - VOL. 1 - Jeff Kinney";
                var preco = "R$28,90"  
                var qtde = document.getElementById("qtde5").value;
                valorTotal += (parseInt(qtde)*28.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto6(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 6;

        switch(cod){
            case 6:
                var descricao = "A CULPA É DAS ESTRELAS - John Green";
                var preco = "R$24,90"  
                var qtde = document.getElementById("qtde6").value;
                valorTotal += (parseInt(qtde)*24.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto7(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 7;

        switch(cod){
            case 7:
                var descricao = "CIDADES DE PAPEL - John Green ";
                var preco = "R$40,90"  
                var qtde = document.getElementById("qtde7").value;
                valorTotal += (parseInt(qtde)*40.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto8(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 8;

        switch(cod){
            case 8:
                var descricao = "DOM QUIXOTE DE LA MANCHA - Miguel de Cervantes";
                var preco = "R$19,90"  
                var qtde = document.getElementById("qtde8").value;
                valorTotal += (parseInt(qtde)*19.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto9(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 9;

        switch(cod){
            case 9:
                var descricao = "O PEQUENO PRÍNCIPE - Antoine de Saint-Exupéry";
                var preco = "R$28,90"  
                var qtde = document.getElementById("qtde9").value;
                valorTotal += (parseInt(qtde)*28.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto10(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 10;

        switch(cod){
            case 10:
                var descricao = "A DIVINA COMÉDIA - Dante Alighieri ";
                var preco = "R$36,90"  
                var qtde = document.getElementById("qtde10").value;
                valorTotal += (parseInt(qtde)*36.90)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto11(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 11;

        switch(cod){
            case 11:
                var descricao = "OS LUSÍADAS - Luís Vaz de Camões";
                var preco = "R$49,99"  
                var qtde = document.getElementById("qtde11").value;
                valorTotal += (parseInt(qtde)*49.99)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        function addProduto12(){
           var valorTotal = 0; 	
        
        var tabela = document.getElementById("tbProduto");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var tr = document.createElement("tr");

        var cod = 12;

        switch(cod){
            case 12:
                var descricao = "O ALIENISTA - Machado de Assis";
                var preco = "R$39,90"  
                var qtde = document.getElementById("qtde12").value;
                valorTotal += (parseInt(qtde)*39,99)
                break;
            
        

        }

        var descricaoNode = document.createTextNode(descricao)     
        var precoNode = document.createTextNode(preco)  
        var qtdeNode = document.createTextNode(qtde)  

        td1.appendChild(descricaoNode);
        td2.appendChild(precoNode);
        td3.appendChild(qtdeNode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabela.appendChild(tr);
         

        
        }
        
        
        
        </script>