document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
//
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
// Handle the back button//
function onBackKeyDown() {
    // navigator.notification.alert('Para melhor experiência, Voltar pelo botão do aplicativo','','Reformando');
    if (document.getElementById('pagemenu').style.display=="flex"){
        sairMenu()
        return false;
    }
    //Ceramica 
    if (document.getElementById('pageCeramica').style.display=="flex"){
        entrarEsquerdo('pageCard','pageCeramica');
        return false;
    }
    if (document.getElementById('pagePiso').style.display=="flex"){
        entrarEsquerdo('pageCeramica','pagePiso');
        return false;
    }
    if (document.getElementById('pageRevestimento').style.display=="flex"){
        entrarEsquerdo('pageCeramica','pageRevestimento');
        return false;
    }
    if (document.getElementById('pageRodape').style.display=="flex"){
        entrarEsquerdo('pageCeramica','pageRodape');
        return false;
    }
    if (document.getElementById('pageFaixa').style.display=="flex"){
        entrarEsquerdo('pageCeramica','pageFaixa');
        return false;
    }
    if (document.getElementById('pagePastilha').style.display=="flex"){
        entrarEsquerdo('pageCeramica','pagePastilha');
        return false;
    }
    //------------------------------------------------------------------
     //Ceramica 
    if (document.getElementById('pageParede').style.display=="flex"){
        entrarEsquerdo('pageCard','pageParede');
        return false;
    }
    if (document.getElementById('pageBlocoBarro').style.display=="flex"){
        entrarEsquerdo('pageParede','pageBlocoBarro');
        return false;
    }
    if (document.getElementById('pageBlocoConcreto').style.display=="flex"){
        entrarEsquerdo('pageParede','pageBlocoConcreto');
        return false;
    }
    if (document.getElementById('pageBlocoCeramica').style.display=="flex"){
        entrarEsquerdo('pageParede','pageBlocoCeramica');
        return false;
    }
        //------------------------------------------------------------------
     //Dercoração 
    if (document.getElementById('pageDecoracao').style.display=="flex"){
        entrarEsquerdo('pageCard','pageDecoracao');
        return false;
    }
    if (document.getElementById('pageBlocoVidro').style.display=="flex"){
        entrarEsquerdo('pageDecoracao','pageBlocoVidro');
        return false;
    }
    if (document.getElementById('pageCobogo').style.display=="flex"){
        entrarEsquerdo('pageDecoracao','pageCobogo');
        return false;
    }
    if (document.getElementById('pagePapelParede').style.display=="flex"){
        entrarEsquerdo('pageDecoracao','pagePapelParede');
        return false;
    }
        //------------------------------------------------------------------
     //concreto 
    if (document.getElementById('pageConcreto').style.display=="flex"){
        entrarEsquerdo('pageCard','pageConcreto');
        return false;
    }
    if (document.getElementById('pageChapisco').style.display=="flex"){
        entrarEsquerdo('pageConcreto','pageChapisco');
        return false;
    }
    if (document.getElementById('pageQueimado').style.display=="flex"){
        entrarEsquerdo('pageConcreto','pageQueimado');
        return false;
    }
    if (document.getElementById('pageContraPiso').style.display=="flex"){
        entrarEsquerdo('pageConcreto','pageContraPiso');
        return false;
    }
    if (document.getElementById('pageEmbolco').style.display=="flex"){
        entrarEsquerdo('pageConcreto','pageEmbolco');
        return false;
    }
    if (document.getElementById('pageReboco').style.display=="flex"){
        entrarEsquerdo('pageConcreto','pageReboco');
        return false;
    }

        //------------------------------------------------------------------
     //pintura 
    if (document.getElementById('pagePintura').style.display=="flex"){
        entrarEsquerdo('pageCard','pagePintura');
        return false;
    }
    if (document.getElementById('pagePinturaParede').style.display=="flex"){
        entrarEsquerdo('pagePintura','pagePinturaParede');
        return false;
    }
    if (document.getElementById('pagePinturaTextura').style.display=="flex"){
        entrarEsquerdo('pagePintura','pagePinturaTextura');
        return false;
    }
    if (document.getElementById('pagePinturaMadeira').style.display=="flex"){
        entrarEsquerdo('pagePintura','pagePinturaMadeira');
        return false;
    }
    if (document.getElementById('pagePinturaMetal').style.display=="flex"){
        entrarEsquerdo('pagePintura','pagePinturaMetal');
        return false;
    }
    if (document.getElementById('pagePinturaVerniz').style.display=="flex"){
        entrarEsquerdo('pagePintura','pagePinturaVerniz');
        return false;
    }
        //------------------------------------------------------------------
     //telhado 
    if (document.getElementById('pageTelhado').style.display=="flex"){
        entrarEsquerdo('pageCard','pageTelhado');
        return false;
    }
    if (document.getElementById('pageTelhadoBarro').style.display=="flex"){
        entrarEsquerdo('pageTelhado','pageTelhadoBarro');
        return false;
    }
    if (document.getElementById('pageTelhadoCimento').style.display=="flex"){
        entrarEsquerdo('pageTelhado','pageTelhadoCimento');
        return false;
    }
    if (document.getElementById('pageTelhadoPvc').style.display=="flex"){
        entrarEsquerdo('pageTelhado','pageTelhadoPvc');
        return false;
    }

    if (document.getElementById('pageInformacao').style.display=="flex"){
        entrarEsquerdo('pageCard','pageInformacao');
        return false;
    }
    if (document.getElementById('pageSobre').style.display=="flex"){
        entrarEsquerdo('pageCard','pageSobre');
        return false;
    }
    if (document.getElementById('pagePolitica').style.display=="flex"){
        entrarEsquerdo('pageCard','pagePolitica');
        return false;
    }
        //------------------------------------------------------------------
     //redultado 
    if (document.getElementById('pageResultado').style.display=="flex"){
        voltarPagina();
        return false;
    }
        //------------------------------------------------------------------
        if (document.getElementById('pageCard').style.display=="flex"){
            navigator.notification.confirm(
                'Fechar o Aplicativo?', // message
                onConfirm,            // callback to invoke with index of button pressed
               'Reformando',           // title
               'NÃO, SIM'    // buttonLabels
                );
        }
        function onConfirm(buttonIndex){
            if (buttonIndex == '2'){
                navigator.app.exitApp();
            }
        
        }

}

//funções iniciada quando  o aplicativo abrir
window.onload=function(){
    console.log(screen.orientation.lock('portrait')); // e.g. portrait
    window.setTimeout(function() {
       document.getElementById('pageCard').style.display="flex";
       document.getElementById('pageLoading').style.display="none";
    }, 1000)   
}
function facebook(){
    cordova.InAppBrowser.open('https://www.facebook.com/Reformando-1443554792444024', '_system','location=no');
}
function instagram(){
    cordova.InAppBrowser.open('https://www.instagram.com/reformando_Up', '_system','location=no');
}
function site(){
    window.open('http://www.luzup.com.br/reformando/', '_system','location=no');
}
//animação de entrada
function entrarDireito(novo,atual) {
    document.getElementById(novo).style.left=100; 
    document.getElementById(atual).style.left=0;
    document.getElementById(novo).style.display="flex";
    var pos = 100;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos ==0) {
            clearInterval(id);
            document.getElementById(atual).style.display="none";
        }else {
            pos-=5;
            document.getElementById(novo).style.left = (pos) +'%';
            document.getElementById(atual).style.left = (pos-100) +'%';
        }
    }
}
//animação de entrada
function entrarEsquerdo(novo,atual) {
    document.getElementById(novo).style.left=-100; 
    document.getElementById(atual).style.left=0;
    document.getElementById(novo).style.display="flex";
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos ==100) {
            clearInterval(id);
            document.getElementById(atual).style.display="none";
        }else {
            pos+=5;
            document.getElementById(novo).style.left = (pos-100) +'%';
            document.getElementById(atual).style.left = (pos) +'%';
            
        }
    }
}
function entrarMenu(a) {
    document.getElementById('pagemenu').style.display="flex";
    document.getElementById('pagemenu').style.left=-100; 
    document.getElementById('pagemenu').style.zIndex=2; 
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos ==100) {
            clearInterval(id);
        }else {
            pos+=5;
            document.getElementById('pagemenu').style.left = (pos-100) +'%';            
        }
    }
}
function sairMenu() {
    document.getElementById('pagemenu').style.left=100; 
    var pos = 100;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos ==0) {
            clearInterval(id);
        }else {
            pos-=5;
            document.getElementById('pagemenu').style.left = (pos-100) +'%';           
        }
    }
    document.getElementById('pagemenu').style.display="none";
}
function voltarPagina(){
    switch (pagina) {
        case "pagePiso":
            entrarEsquerdo('pagePiso','pageResultado');
            break;
        case "pageRevestimento":
            entrarEsquerdo('pageRevestimento','pageResultado');
            break;
        case "pageRodape":
            entrarEsquerdo('pageRodape','pageResultado');
            break;
        case "pageFaixa":
            entrarEsquerdo('pageFaixa','pageResultado');
            break;
        case "pagePastilha":
            entrarEsquerdo('pagePastilha','pageResultado');
            break;
        case "pageBlocoBarro":
            entrarEsquerdo('pageBlocoBarro','pageResultado');
            break;    
        case "pageBlocoConcreto":
            entrarEsquerdo('pageBlocoConcreto','pageResultado');
            break;  
        case "pageBlocoCeramica":
            entrarEsquerdo('pageBlocoCeramica','pageResultado');
            break;  
        case "pageBlocoVidro":
            entrarEsquerdo('pageBlocoVidro','pageResultado');
            break; 
        case "pageCobogo":
            entrarEsquerdo('pageCobogo','pageResultado');
            break;   
        case "pagePapelParede":
            entrarEsquerdo('pagePapelParede','pageResultado');
            break;   
        case "pageChapisco":
            entrarEsquerdo('pageChapisco','pageResultado');
            break;   
        case "pageContraPiso":
            entrarEsquerdo('pageContraPiso','pageResultado');
            break;       
        case "pageQueimado":
            entrarEsquerdo('pageQueimado','pageResultado');
            break;    
        case "pageReboco":
            entrarEsquerdo('pageReboco','pageResultado');
            break;  
        case "pageEmbolco":
            entrarEsquerdo('pageEmbolco','pageResultado');
            break; 
        case "pageTelhadoBarro":
            entrarEsquerdo('pageTelhadoBarro','pageResultado');
            break; 
        case "pageTelhadoCimento":
            entrarEsquerdo('pageTelhadoCimento','pageResultado');
            break; 
        case "pageTelhadoPvc":
            entrarEsquerdo('pageTelhadoPvc','pageResultado');
            break;
        case "pagePinturaParede":
            entrarEsquerdo('pagePinturaParede','pageResultado');
            break; 
        case "pagePinturaTextura":
            entrarEsquerdo('pagePinturaTextura','pageResultado');
            break; 
        case "pagePinturaMadeira":
            entrarEsquerdo('pagePinturaMadeira','pageResultado');
            break; 
        case "pagePinturaMetal":
            entrarEsquerdo('pagePinturaMetal','pageResultado');
            break; 
        case "pagePinturaVerniz":
            entrarEsquerdo('pagePinturaVerniz','pageResultado');
            break; 
    } 
}
//Variaveis
var largura, comprimento, metroQuadrado=0, metroCubico=0, metroLinear=0;
var metroquadradoPeca, valorTotal, cola, quantidade, galao=18, metroGalao=500;
var argamassa, argamassaPeca, rejunte, rejuntePeca, recomendadoCola, acabamento;
var larguraPeca, comrpimentoPeca, alturaPeca, valorEspacador, valorVergalhao, medidaPvc, quantidadeForro, medida;
var valorPeca, valorArgamassa, valorRejunte, valorRolo, valorCola, valorAcabamento;
var pagina, recomendadoQuadrado, recomendadoArgamassa, recomendadoRejunte, recomendadoCubico, recomendadoCimento, recomendadoAreia;
var areia, cal, cimento, massa, espacador, valorCimento, valorAreia, valorCal, espessura, traco, recomendadoCal;
var contador=0, demao;
var parede=[];
var item=[];
var quantidadeTelha=[];
var tipoTelha, inclinacao, areaInclinacao, telha, cumeeira, recomendadoTelha, recomendadoCumeeira, valorCumeeira;
var orcamento=[];
//-------------------------------------------------------------------------Cerâmica--------------------------------------------------------------------//
//---------------------------------------------Piso-----------------------//
function pisoOpcao(){
	if(document.getElementById('pisoSelect').value==0){
        document.getElementById('trPisoLargura').style.display='table-row';
        document.getElementById('pisoLargura').value="";
        document.getElementById('trPisoComprimento').style.display='table-row';
        document.getElementById('pisoComprimento').value="";
        document.getElementById('trPisoQuadrado').style.display='none';
        document.getElementById('tablePisoRodapeOpcao').style.display='table';
        document.getElementById('hrPisoRodape').style.display='flex';
        document.getElementById('selectPisoRodape').value=0;
        document.getElementById('tablePisoRodape').style.display='none';
    }else{
        document.getElementById('trPisoLargura').style.display='none';
        document.getElementById('trPisoComprimento').style.display='none';
        document.getElementById('trPisoQuadrado').style.display='table-row';
        document.getElementById('pisoQuadrado').value="";
        document.getElementById('tablePisoRodapeOpcao').style.display='none';
        document.getElementById('hrPisoRodape').style.display='none';
        document.getElementById('infoPisoErro1').style.display='none';
        document.getElementById('hrPisoRodape').style.display='none';
        document.getElementById('selectPisoRodape').value=0;
       }
    pisoRodapeOpcao();
}
function pisoRodapeOpcao(){
	if(document.getElementById('selectPisoRodape').value==0){
        document.getElementById('tablePisoRodape').style.display='none';

    }else{
        document.getElementById('tablePisoRodape').style.display='table';
    }
}
function pisoValorOpcao(){
	if(document.getElementById('selectPisoValor').value==0){
        document.getElementById('tablePisoValor').style.display='none';
    }else{
        document.getElementById('tablePisoValor').style.display='table';
    }
}
function pisoLimpar(){
    document.getElementById('infoPisoErro1').style.display='none';
    document.getElementById('infoPisoErro2').style.display='none';
    document.getElementById('infoPisoErro3').style.display='none';
    document.getElementById('pisoSelect').value=0;
    document.getElementById('trPisoLargura').style.display='table-row';
    document.getElementById('trPisoComprimento').style.display='table-row';
    document.getElementById('trPisoQuadrado').style.display='none';
    document.getElementById('tablePisoRodapeOpcao').style.display='table';
    document.getElementById('hrPisoRodape').style.display='flex';
    document.getElementById('selectPisoRodape').value=0;
    document.getElementById('selectPisoValor').value=0;
    document.getElementById('tablePisoRodape').style.display='none';
    document.getElementById('tablePisoValor').style.display='none';
    document.getElementById('pisoLargura').value="";
    document.getElementById('pisoComprimento').value="";
    document.getElementById('pisoQuadrado').value="";
    document.getElementById('pisoCeramicaAltura').value="";
    document.getElementById('pisoCeramicaLargura').value="";
    document.getElementById('pisoCeramicaComprimento').value="";
    document.getElementById('pisoValorCeramica').value="";
    document.getElementById('pisoValorArgamassa').value="";
    document.getElementById('pisoValorRejunte').value="";
    document.getElementById('selectPisoMetro').value=0;
    document.getElementById('selectPisoArgamassa').value=0;
    document.getElementById('selectPisoRejunte').value=0;
}
function pisoCalcular(){
    largura = 0, comprimento = 0, metroQuadrado = 0, metroLinear=0, metroquadradoPeca=0;
    argamassa = 0, argamassaPeca = 0, rejunte= 0 , rejuntePeca = 0, valorTotal=0;
    larguraPeca =0, comrpimentoPeca = 0, alturaPeca = 0;
    valorPeca = 0, valorArgamassa = 0, valorRejunte = 0;
    recomendadoQuadrado = 0, recomendadoArgamassa = 0, recomendadoRejunte = 0;
    largura = document.getElementById('pisoLargura').value;
    comprimento = document.getElementById('pisoComprimento').value;
    metroQuadrado = document.getElementById('pisoQuadrado').value;
    alturaPeca = document.getElementById('pisoCeramicaAltura').value;
    larguraPeca = document.getElementById('pisoCeramicaLargura').value;
    comrpimentoPeca =document.getElementById('pisoCeramicaComprimento').value;
    valorPeca = document.getElementById('pisoValorCeramica').value;
    valorArgamassa = document.getElementById('pisoValorArgamassa').value;
    valorRejunte = document.getElementById('pisoValorRejunte').value;
    //validando campos e medidas do piso
    if(document.getElementById('pisoSelect').value==0){
        if( largura==0 || comprimento==0){
            document.getElementById('infoPisoErro1').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoPisoErro1').style.display='none';
            metroQuadrado = parseFloat((largura * comprimento).toFixed(2));
            argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
            rejunte=parseFloat((metroQuadrado/3).toFixed(2))
        }
    }else{
        if( metroQuadrado==0){
            document.getElementById('infoPisoErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoPisoErro1').style.display='none';
            metroQuadrado = parseFloat(Math.ceil(metroQuadrado));
            argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
            rejunte=parseFloat((metroQuadrado/3).toFixed(2))
        }   
    }
    //validando campos e medida do Rodapé
    if(document.getElementById('selectPisoRodape').value==1){
        if (alturaPeca==0 || larguraPeca==0 || comrpimentoPeca==0 ) {
            document.getElementById('infoPisoErro2').style.display='table-row';
            return false;
        } else {
            document.getElementById('infoPisoErro2').style.display='none';
            metroLinear = Math.ceil(((largura*2) + (comprimento*2)));
            argamassaPeca=parseFloat(((metroLinear*alturaPeca/3.5)*20).toFixed(2));
            rejuntePeca=parseFloat((metroLinear*alturaPeca/3).toFixed(2))
            metroquadradoPeca= Math.ceil(metroLinear*alturaPeca)
        }  
    }
    //Validando Campos e Valores do Piso
    if(document.getElementById('selectPisoValor').value==1){
          if( valorPeca==0 || valorArgamassa==0 || valorRejunte==0){
            document.getElementById('infoPisoErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPisoErro3').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Piso (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (metroQuadrado).toFixed(2) + ' M²</td>';
        tr += '</tr>';
        if(metroLinear!=0){
            //Linha Peças
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Piso (Peças)</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado/(larguraPeca*comrpimentoPeca)) + ' Peças</td>';
            tr += '</tr>';
            //medida M² do rodape
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Rodapé ( '+ metroLinear +' Metros Linear)</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + (metroLinear*alturaPeca).toFixed(2) + ' M²</td>';
            tr += '</tr>';
            //Linha Peças
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Ropapé Peças ('+ (alturaPeca) +' X '+ (comrpimentoPeca) +')</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroLinear/comrpimentoPeca) + ' Peças</td>';
            tr += '</tr>';
        }
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (argamassa + argamassaPeca).toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (rejunte + rejuntePeca).toFixed(2) + ' KG.</td>';            tr += '</tr>';
    table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil((metroQuadrado + metroquadradoPeca)*1.05);
        recomendadoArgamassa= Math.ceil((argamassa + argamassaPeca)*1.05);
        recomendadoRejunte= Math.ceil((rejunte + rejuntePeca)*1.05);   
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Piso</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoRejunte.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPisoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            //Linha Piso//testando se é par
             //testando se é metro quadrado é par, se não for adicionar  1
             if (Math.ceil(recomendadoQuadrado % 2)!= 0){recomendadoQuadrado +=1 }
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Piso
            switch (document.getElementById('selectPisoMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Piso</td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' M²</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                orcamento[0]= "Piso";
                orcamento[1]= "M²";
                orcamento[2]= recomendadoQuadrado;
                orcamento[3]= valorPeca;
                
                break;
                case "1":
                valorPeca= (recomendadoQuadrado/2 * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Piso</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado/2 +' Caixa (2M²)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                orcamento[0]= "Piso";
                orcamento[1]= "M²";
                orcamento[2]= recomendadoQuadrado/2;
                orcamento[3]= valorPeca;
                break;
            }

            //Linha Argamassa
            switch (document.getElementById('selectPisoArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                orcamento[4]= "Argamassa";
                orcamento[5]= "PCT.(20KG.)";
                orcamento[6]= Math.ceil((recomendadoArgamassa)/20);
                orcamento[7]= valorArgamassa;
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                orcamento[4]= "Argamassa";
                orcamento[5]= "PCT.(5KG.)";
                orcamento[6]= Math.ceil((recomendadoArgamassa)/5);
                orcamento[7]= valorArgamassa;
                break;
            }

            //Linha Rejunte
            switch (document.getElementById('selectPisoRejunte').value) {
                case "0":
                valorRejunte=(Math.ceil((recomendadoRejunte)/5) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                orcamento[8]= "Rejunte";
                orcamento[9]= "PCT.(5KG.)";
                orcamento[10]= Math.ceil((recomendadoRejunte)/5);
                orcamento[11]= valorRejunte;
                break;
                case "1":
                valorRejunte=(Math.ceil((recomendadoRejunte)/1) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/1) +' PCT. (1KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                orcamento[8]= "Rejunte";
                orcamento[9]= "PCT.(1KG.)";
                orcamento[10]= Math.ceil((recomendadoRejunte)/1);
                orcamento[11]= valorRejunte;
                break;
            }

            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPisoValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorArgamassa)+parseFloat(valorRejunte)).toFixed(2);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal+ ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pagePiso";
    entrarDireito('pageResultado','pagePiso');
}
//---------------------------------------------Revestimentos---------------//
function revestimentoLimpar(){
    document.getElementById('selectRevestimento').value=0;
    document.getElementById('trRevestimentoAltura').style.display='table-row';
    document.getElementById('trRevestimentoComprimento').style.display='table-row';
    document.getElementById('trRevestimentoQuadrado').style.display='none';
    document.getElementById('trRevestimentobotao').style.display='table-row';
    document.getElementById('tablerevestinmentoMedida').style.display='table';
    document.getElementById('revestimentoAltura').value="";
    document.getElementById('revestimentoComprimento').value="";
    document.getElementById('infoRevestimentoErro1').style.display='none'; 
    document.getElementById('selectRevestimentoValor').value=0;
    document.getElementById('tableRevestimentoValor').style.display='none';
    document.getElementById('revestimentoValorCeramica').value="";
    document.getElementById('revestimentoValorArgamassa').value="";
    document.getElementById('revestimentoValorRejunte').value="";
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeRevestimento');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectRevestimentoMetro').value=0;
    document.getElementById('selectRevestimentoArgamassa').value=0;
    document.getElementById('selectRevestimentoRejunte').value=0;
}
function revestimentoOpcao(){
    if(document.getElementById('selectRevestimento').value==0){
        document.getElementById('trRevestimentoAltura').style.display='table-row';
        document.getElementById('trRevestimentoComprimento').style.display='table-row';
        document.getElementById('trRevestimentoQuadrado').style.display='none';
        document.getElementById('trRevestimentobotao').style.display='table-row';
        document.getElementById('tablerevestinmentoMedida').style.display='table';
        document.getElementById('revestimentoAltura').value="";
        document.getElementById('revestimentoComprimento').value="";
        document.getElementById('infoRevestimentoErro1').style.display='none'; 
        metroQuadrado=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trRevestimentoAltura').style.display='none';
        document.getElementById('trRevestimentoComprimento').style.display='none';
        document.getElementById('trRevestimentoQuadrado').style.display='table-row';
        document.getElementById('trRevestimentobotao').style.display='none';
        document.getElementById('tablerevestinmentoMedida').style.display='none';
        document.getElementById('revestimentoQuadrado').value="";
        document.getElementById('infoRevestimentoErro1').style.display='none'; 
        metroQuadrado=0;

        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function revestimentoValorOpcao(){
	if(document.getElementById('selectRevestimentoValor').value==0){
        document.getElementById('tableRevestimentoValor').style.display='none';
    }else{
        document.getElementById('tableRevestimentoValor').style.display='table';
    }
}
function AddRevestimento(){
    metroQuadrado=0, altura=0, comprimento=0;
    altura = document.getElementById('revestimentoAltura').value;
    comprimento = document.getElementById('revestimentoComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoRevestimentoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoRevestimentoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('revestimentoAltura').value="";
        document.getElementById('revestimentoComprimento').value="";
    }
}
function revestimentoCalcular(){
    recomendadoQuadrado = 0, recomendadoArgamassa = 0, recomendadoRejunte = 0;
    valorPeca = document.getElementById('revestimentoValorCeramica').value;
    valorArgamassa = document.getElementById('revestimentoValorArgamassa').value;
    valorRejunte = document.getElementById('revestimentoValorRejunte').value;
     //validar medidas
    if(document.getElementById('selectRevestimento').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoRevestimentoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoRevestimentoErro1').style.display='none';
            metroQuadrado = parseFloat(Math.ceil(metroQuadrado));
            argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
            rejunte=parseFloat((metroQuadrado/3).toFixed(2))
        }
    }else{
        metroQuadrado = document.getElementById('revestimentoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoRevestimentoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoRevestimentoErro1').style.display='none';
            metroQuadrado = parseFloat(Math.ceil(metroQuadrado));
            argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
            rejunte=parseFloat((metroQuadrado/3).toFixed(2))
           }
    }
    //Validar CAmpos valores
    if(document.getElementById('selectRevestimentoValor').value==1){    
        if(valorPeca==0 || valorArgamassa==0 || valorRejunte==0){
            document.getElementById('infoRevestimentoErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoRevestimentoErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha REvestimento
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Revestimento (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + argamassa.toFixed(2)+ ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + rejunte.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado*1.05);
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        recomendadoRejunte= Math.ceil(rejunte*1.05);   
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Revestimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoRejunte + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectRevestimentoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            //Linha Piso//testando se é par
             //testando se é metro quadrado é par, se não for adicionar  1
             if (Math.ceil(recomendadoQuadrado % 2)!= 0){recomendadoQuadrado +=1 }
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Piso
            switch (document.getElementById('selectRevestimentoMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Revestimento</td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' M²</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (recomendadoQuadrado/2 * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Revestimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado/2 +' Caixa (2M²)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Argamassa
            switch (document.getElementById('selectRevestimentoArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Rejunte
            switch (document.getElementById('selectRevestimentoRejunte').value) {
                case "0":
                valorRejunte=(Math.ceil((recomendadoRejunte)/5) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorRejunte=(Math.ceil((recomendadoRejunte)/1) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/1) +' PCT. (1KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectRevestimentoValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorArgamassa)+parseFloat(valorRejunte)).toFixed(2);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageRevestimento";
    entrarDireito('pageResultado','pageRevestimento');

}
//---------------------------------------------Rodapé----------------------//
function rodapeLimpar(){
    document.getElementById('infoRodapeErro1').style.display='none'; 
    document.getElementById('infoRodapeErro2').style.display='none'; 
    document.getElementById('infoRodapeErro3').style.display='none'; 
    document.getElementById('rodapeAltura').value="";
    document.getElementById('rodapeComprimento').value="";
    document.getElementById('rodapeLinear').value="";
    document.getElementById('selectRodapeValor').value=0;
    document.getElementById('tableRodapeValor').style.display='none';
    document.getElementById('rodapeValorCeramica').value="";
    document.getElementById('rodapeValorArgamassa').value="";
    document.getElementById('rodapeValorRejunte').value="";
    metroquadrado=0;
    contador=0;
    var table = document.getElementById('paredeRodape');
    var tr = '';
    table.innerHTML = tr;
    document.getElementById('selectRodapeMetro').value=0;
    document.getElementById('selectRodapeArgamassa').value=0;
    document.getElementById('selectRodapeRejunte').value=0;
}
function addRodape(){
    var comprimento = document.getElementById('rodapeLinear').value;
    if(comprimento==0){
        document.getElementById('infoRodapeErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoRodapeErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeRodape');
        var tr = '';
        //Linha REvestimento
        metroLinear=0;
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroLinear +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroLinear.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('rodapeLinear').value="";
       }

}
function rodapeValorOpcao(){
	if(document.getElementById('selectRodapeValor').value==0){
        document.getElementById('tableRodapeValor').style.display='none';
    }else{
        document.getElementById('tableRodapeValor').style.display='table';
    }
}
function rodapeCalcular(){
    alturaPeca = document.getElementById('rodapeAltura').value;
    comrpimentoPeca = document.getElementById('rodapeComprimento').value;
    valorPeca = document.getElementById('rodapeValorCeramica').value;
    valorArgamassa = document.getElementById('rodapeValorArgamassa').value;
    valorRejunte = document.getElementById('rodapeValorRejunte').value;
    recomendadoQuadrado = 0, recomendadoArgamassa = 0, recomendadoRejunte = 0;
        // Validando Medidas da area linear
    if( metroLinear==0){
        document.getElementById('infoRodapeErro1').style.display='table-row';
        return false;
    }else{
        document.getElementById('infoRodapeErro1').style.display='none';
        metroQuadrado = (metroLinear*alturaPeca);
        argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
        rejunte=parseFloat((metroQuadrado/3).toFixed(2))
    }
    //validando Medidas da Peça
    if( alturaPeca==0 || comrpimentoPeca==0){
        document.getElementById('infoRodapeErro2').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoRodapeErro2').style.display='none';
    }
    //Validando Campos e Valores do Rodapé
    if(document.getElementById('selectRodapeValor').value==1){
          if( valorPeca==0 || valorArgamassa==0 || valorRejunte==0){
            document.getElementById('infoRodapeErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoRodapeErro3').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroLinear!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha Rodape Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rodapé (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroLinear/comrpimentoPeca) + ' PÇS</td>';
        tr += '</tr>';
        //Rodapé Metros
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rodapé (Metros Linear)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroLinear.toFixed(2) + ' Metros</td>';
        tr += '</tr>';
        //Rodapé Metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rodapé (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + argamassa.toFixed(2)+ ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + rejunte.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroLinear!=0){ 
        recomendadoQuadrado= Math.ceil(metroLinear/comrpimentoPeca*1.05);
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        recomendadoRejunte= Math.ceil(rejunte*1.05);   
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Revestimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoRejunte + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }

    // Carregando terceira Tabela
    if (metroLinear!=0){
        if (document.getElementById('selectRodapeValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Rodapé
            switch (document.getElementById('selectRodapeMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Rodapé</td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' UN.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (metroLinear * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rodapé</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + metroLinear +' Metro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Argamassa
            switch (document.getElementById('selectRodapeArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Rejunte
            switch (document.getElementById('selectRodapeRejunte').value) {
                case "0":
                valorRejunte=(Math.ceil((recomendadoRejunte)/5) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorRejunte=(Math.ceil((recomendadoRejunte)/1) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/1) +' PCT. (1KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectRodapeValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorArgamassa)+parseFloat(valorRejunte)).toFixed(2);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
         var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageRodape";
    entrarDireito('pageResultado','pageRodape'); 
}
//---------------------------------------------Faixa-----------------------//
function faixaLimpar(){
    document.getElementById('infoFaixaErro1').style.display='none'; 
    document.getElementById('infoFaixaErro2').style.display='none'; 
    document.getElementById('infoFaixaErro3').style.display='none'; 
    document.getElementById('faixaAltura').value="";
    document.getElementById('faixaComprimento').value="";
    document.getElementById('faixaLinear').value="";
    document.getElementById('selectFaixaValor').value=0;
    document.getElementById('tableFaixaValor').style.display='none';
    document.getElementById('faixaValorCeramica').value="";
    document.getElementById('faixaValorArgamassa').value="";
    document.getElementById('faixaValorRejunte').value="";
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeFaixa');
    var tr = '';
    table.innerHTML = tr;
    document.getElementById('selectFaixaMetro').value=0;
    document.getElementById('selectFaixaArgamassa').value=0;
}
function addFaixa(){
    var comprimento = document.getElementById('faixaLinear').value;
    if(comprimento==0){
        document.getElementById('infoFaixaErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoFaixaErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeFaixa');
        var tr = '';
        //Linha REvestimento
        metroLinear=0;
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroLinear +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroLinear.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('faixaLinear').value="";
       }

}
function faixaValorOpcao(){
	if(document.getElementById('selectFaixaValor').value==0){
        document.getElementById('tableFaixaValor').style.display='none';
    }else{
        document.getElementById('tableFaixaValor').style.display='table';
    }
}
function faixaCalcular(){
    alturaPeca = document.getElementById('faixaAltura').value;
    comrpimentoPeca = document.getElementById('faixaComprimento').value;
    valorPeca = document.getElementById('faixaValorCeramica').value;
    valorArgamassa = document.getElementById('faixaValorArgamassa').value;
    valorRejunte = document.getElementById('faixaValorRejunte').value;
    recomendadoQuadrado = 0, recomendadoArgamassa = 0, recomendadoRejunte = 0;
        // Validando Medidas da area linear
    if( metroLinear==0){
        document.getElementById('infoFaixaErro1').style.display='table-row';
        return false;
    }else{
        document.getElementById('infoFaixaErro1').style.display='none';
        metroQuadrado = (metroLinear*alturaPeca);
        argamassa=parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
        rejunte=parseFloat((metroQuadrado/3).toFixed(2))
    }
    //validando Medidas da Peça
    if( alturaPeca==0 || comrpimentoPeca==0){
        document.getElementById('infoFaixaErro2').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoFaixaErro2').style.display='none';
    }
    //Validando Campos e Valores do Rodapé
    if(document.getElementById('selectFaixaValor').value==1){
          if( valorPeca==0 || valorArgamassa==0 || valorRejunte==0){
            document.getElementById('infoFaixaErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoFaixaErro3').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroLinear!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha Faixa Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Faixa (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroLinear/comrpimentoPeca) + ' PÇS</td>';
        tr += '</tr>';
        //Rodapé Metros
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Faixa (Metros Linear)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroLinear.toFixed(2) + ' Metros</td>';
        tr += '</tr>';
        //Rodapé Metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Faixa (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + argamassa.toFixed(2)+ ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + rejunte.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroLinear!=0){ 
        recomendadoQuadrado= Math.ceil(metroLinear/comrpimentoPeca*1.05);
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        recomendadoRejunte= Math.ceil(rejunte*1.05);   
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Faixa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';
        //Linha Rejunte
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Rejunte</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoRejunte + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroLinear!=0){
        if (document.getElementById('selectFaixaValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Rodapé
            switch (document.getElementById('selectFaixaMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Faixa</td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' UN.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (metroLinear * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Faixa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + metroLinear +' Metros</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Argamassa
            switch (document.getElementById('selectFaixaArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Rejunte
            switch (document.getElementById('selectFaixaRejunte').value) {
                case "0":
                valorRejunte=(Math.ceil((recomendadoRejunte)/5) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorRejunte=(Math.ceil((recomendadoRejunte)/1) *valorRejunte).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Rejunte</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoRejunte)/1) +' PCT. (1KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRejunte + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectFaixaValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorArgamassa)+parseFloat(valorRejunte)).toFixed(2);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal+ ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageFaixa";
    entrarDireito('pageResultado','pageFaixa'); 
}
//---------------------------------------------Pastinha---------------------//
function pastilhaValorOpcao(){
	if(document.getElementById('selectPastilhaValor').value==0){
        document.getElementById('tablePastilhaValor').style.display='none';
    }else{
        document.getElementById('tablePastilhaValor').style.display='table';
    }
}
function pastilhaLimpar(){
    document.getElementById('pastilhaComprimento').value="";
    document.getElementById('pastilhaAltura').value="";
    document.getElementById('pastilhaComprimentoPeca').value="";
    document.getElementById('pastilhaAlturaPeca').value="";
    document.getElementById('pastilhaValorCeramica').value="";
    document.getElementById('pastilhaValorArgamassa').value="";
    document.getElementById('infoPastilhaErro1').style.display='none'; 
    document.getElementById('infoPastilhaErro2').style.display='none'; 
    document.getElementById('infoPastilhaErro3').style.display='none';
    document.getElementById('selectPastilhaValor').value=0;
    document.getElementById('tablePastilhaValor').style.display='none';
    document.getElementById('selectPastilhaMetro').value=0;
    document.getElementById('selectPastilhaArgamassa').value=0;
}
function pastilhaCalcular(){
    comprimento = document.getElementById('pastilhaComprimento').value;
    altura = document.getElementById('pastilhaAltura').value;
    comrpimentoPeca = document.getElementById('pastilhaComprimentoPeca').value;
    alturaPeca = document.getElementById('pastilhaAlturaPeca').value;
    valorPeca = document.getElementById('pastilhaValorCeramica').value;
    valorArgamassa = document.getElementById('pastilhaValorArgamassa').value;  
    metroQuadrado=0;
    //validando Medidas da AreA
    if( altura==0 || comprimento==0){
        document.getElementById('infoPastilhaErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoPastilhaErro1').style.display='none';
        metroQuadrado=(altura*comprimento).toFixed(2);
        argamassa = parseFloat(((metroQuadrado/3.5)*20).toFixed(2));
    }
    //validando Medidas da Peça
    if( alturaPeca==0 || comrpimentoPeca==0){
        document.getElementById('infoPastilhaErro2').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoPastilhaErro2').style.display='none';
        metroquadradoPeca=(comrpimentoPeca*comrpimentoPeca);
    }
    //Validando Campos e Valores da Pastilha
    if(document.getElementById('selectPastilhaValor').value==1){
          if( valorPeca==0 || valorArgamassa==0 ){
            document.getElementById('infoPastilhaErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPastilhaErro3').style.display='none';
            
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha Pastilhas Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Pastilhas (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado/metroquadradoPeca) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Pastilhas Metros²  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Pastilha (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (metroQuadrado) + ' M²</td>';
        tr += '</tr>';
        //Linha Pastilhas Metros²  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Argamassa </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + argamassa.toFixed(2) + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
        // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado/metroquadradoPeca*1.05);
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Pastilha (PÇS.)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS.</td>';
        tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Pastilha (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*1.05) + ' M²</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPastilhaValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Pastilha
            switch (document.getElementById('selectPastilhaMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil(metroQuadrado*1.05) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(metroQuadrado*1.05) +' Metros</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Argamassa
            switch (document.getElementById('selectPastilhaArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCT. (5KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPastilhaValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorArgamassa));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

    pagina = "pagePastilha";
    entrarDireito('pageResultado','pagePastilha');
}
//-------------------------------------------------------------------------Concreto--------------------------------------------------------------------//
//---------------------------------------------Chapisco---------------------//
function chapiscoOpcao(){
    if(document.getElementById('selectChapisco').value==0){
        document.getElementById('trChapiscoAltura').style.display='table-row';
        document.getElementById('trChapiscoComprimento').style.display='table-row';
        document.getElementById('trChapiscoQuadrado').style.display='none';
        document.getElementById('trChapiscobotao').style.display='table-row';
        document.getElementById('tableChapiscoMedida').style.display='table';
        document.getElementById('chapiscoAltura').value="";
        document.getElementById('chapiscoComprimento').value="";
        document.getElementById('infoChapiscoErro1').style.display='none'; 
        metroQuadrado=0;
        var table = document.getElementById('paredeChapisco');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trChapiscoAltura').style.display='none';
        document.getElementById('trChapiscoComprimento').style.display='none';
        document.getElementById('trChapiscoQuadrado').style.display='table-row';
        document.getElementById('trChapiscobotao').style.display='none';
        document.getElementById('tableChapiscoMedida').style.display='none';
        document.getElementById('chapiscoQuadrado').value="";
        document.getElementById('infoChapiscoErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeChapisco');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function chapiscoValorOpcao(){
	if(document.getElementById('selectChapiscoValor').value==0){
        document.getElementById('tableChapiscoValor').style.display='none';
    }else{
        document.getElementById('tableChapiscoValor').style.display='table';
    }
}
function chapiscoLimpar(){
    document.getElementById('selectChapisco').value=0;
    document.getElementById('trChapiscoAltura').style.display='table-row';
    document.getElementById('trChapiscoComprimento').style.display='table-row';
    document.getElementById('trChapiscoQuadrado').style.display='none';
    document.getElementById('trChapiscobotao').style.display='table-row';
    document.getElementById('tableChapiscoMedida').style.display='table';
    document.getElementById('chapiscoAltura').value="";
    document.getElementById('chapiscoComprimento').value="";
    document.getElementById('infoChapiscoErro1').style.display='none'; 
    document.getElementById('infoChapiscoErro2').style.display='none'; 
    document.getElementById('selectChapiscoValor').value=0;
    document.getElementById('selectChapiscoTraco').value=0;
    document.getElementById('tableChapiscoValor').style.display='none';
    document.getElementById('chapiscoValorCimento').value="";
    document.getElementById('chapiscoValorAreia').value="";
     metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeChapisco');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectChapiscoCimento').value=0;
      document.getElementById('selectChapiscoAreia').value=0;
}
function AddChapisco(){
    metroQuadrado=0, altura=0, comprimento=0, cimento=0, areia=0;
    altura = document.getElementById('chapiscoAltura').value;
    comprimento = document.getElementById('chapiscoComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoChapiscoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoChapiscoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeChapisco');
        var tr = '';
        //Linha Chapisco
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('chapiscoAltura').value="";
        document.getElementById('chapiscoComprimento').value="";
    }
}
function chapiscoCalcular(){
    valorCimento = document.getElementById('chapiscoValorCimento').value;
    valorAreia = document.getElementById('chapiscoValorAreia').value;
   //Validar CAmpos area
    if(document.getElementById('selectChapisco').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoChapiscoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoChapiscoErro1').style.display='none';
            metroQuadrado = parseFloat(metroQuadrado);
        }
    }else{
        metroQuadrado = document.getElementById('chapiscoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoChapiscoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoChapiscoErro1').style.display='none';
            metroQuadrado = parseFloat(metroQuadrado);
           }
    }
    metroCubico = metroQuadrado*0.003;
    //Linha Traço
    switch (document.getElementById('selectChapiscoTraco').value) {
        case "0":
            traco='1:2';
            cimento = (metroCubico/3*1200);
            areia = (metroCubico/3*2*1500);
            massa=areia+cimento;
        break;
        case "1":
            traco='1:3';
            cimento = (metroCubico/4*1200);
            areia = (metroCubico/4*3*1500);
            massa=areia+cimento;
        break;
        case "2":
            traco='1:4';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
    break;
    }  
    //Validar CAmpos valores
    if(document.getElementById('selectChapiscoValor').value==1){    
            if(valorCimento==0 || valorAreia==0){
                document.getElementById('infoChapiscoErro2').style.display='table-row';
        return false;
        }else{
                document.getElementById('infoChapiscoErro2').style.display='none';
            }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
                //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Chapisco (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Chapisco(M³)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroCubico.toFixed(2) + ' M³</td>';
        tr += '</tr>';
        //Linha Traço
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + traco + '</td>';
        tr += '</tr>';
         //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa.toFixed(2) + ' KG.</td>';
         tr += '</tr>';
        //Linha cimento 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cimento.toFixed(2)  +' KG. <br> ' + (cimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Areia
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + areia.toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoCubico= (metroCubico*1.05).toFixed(2);
        recomendadoCimento= (cimento*1.05).toFixed(2);
        recomendadoAreia = (areia*1.05).toFixed(2);
        massa= parseFloat(recomendadoAreia) +parseFloat(recomendadoCimento);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Chapisco</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCubico + ' M³</td>';
        tr += '</tr>';
        //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa .toFixed(2)+ ' KG.</td>';
         tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCimento +' KG. <br> ' + (recomendadoCimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoAreia + ' KG. <br> ' + (recomendadoAreia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectChapiscoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Valor de cimento
            switch (document.getElementById('selectChapiscoCimento').value) {
                case "0":
                valorCimento = (Math.ceil((recomendadoCimento)/50) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/50) +' PCT. (50KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil((recomendadoCimento)/1) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/1) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha areia
            switch (document.getElementById('selectChapiscoAreia').value) {
                case "0":
                valorAreia = (Math.ceil((recomendadoAreia)/20) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia = (Math.ceil((recomendadoAreia)/750) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/750) +' (1/5 m³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia = (Math.ceil((recomendadoAreia)/1500) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/1500) +' m³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectChapiscoValor').value==1){
        valorTotal= (parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Valor Total
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }


    pagina = "pageChapisco";
    entrarDireito('pageResultado','pageChapisco');
}
//---------------------------------------------Cimento Queimado---------------------//
function queimadoOpcao(){
    if(document.getElementById('selectQueimado').value==0){
        document.getElementById('trQueimadoLargura').style.display='table-row';
        document.getElementById('trQueimadoComprimento').style.display='table-row';
        document.getElementById('trQueimadoQuadrado').style.display='none';
        document.getElementById('trQueimadobotao').style.display='table-row';
        document.getElementById('tableQueimadoMedida').style.display='table';
        document.getElementById('queimadoLargura').value="";
        document.getElementById('queimadoComprimento').value="";
        document.getElementById('infoQueimadoErro1').style.display='none'; 
        metroQuadrado
        var table = document.getElementById('paredeQueimado');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trQueimadoLargura').style.display='none';
        document.getElementById('trQueimadoComprimento').style.display='none';
        document.getElementById('trQueimadoQuadrado').style.display='table-row';
        document.getElementById('trQueimadobotao').style.display='none';
        document.getElementById('tableQueimadoMedida').style.display='none';
        document.getElementById('queimadoQuadrado').value="";
        document.getElementById('infoQueimadoErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeQueimado');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function queimadoValorOpcao(){
	if(document.getElementById('selectQueimadoValor').value==0){
        document.getElementById('tableQueimadoValor').style.display='none';
    }else{
        document.getElementById('tableQueimadoValor').style.display='table';
    }
}
function AddQueimado(){
    metroQuadrado=0, largura=0, comprimento=0;
    largura = document.getElementById('queimadoLargura').value;
    comprimento = document.getElementById('queimadoComprimento').value;
    if(largura==0 || comprimento==0){
        document.getElementById('infoQueimadoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoQueimadoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(largura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeQueimado');
        var tr = '';
        //Linha Queimado
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Medida do Piso</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('queimadoLargura').value="";
        document.getElementById('queimadoComprimento').value="";
    }
}
function queimadoLimpar(){
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeQueimado');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectQueimadoCimento').value=0;
    document.getElementById('selectQueimadoAreia').value=0;
    document.getElementById('selectQueimado').value=0;
    document.getElementById('selectQueimadoEspessura').value=3;
    document.getElementById('trQueimadoLargura').style.display='table-row';
    document.getElementById('trQueimadoComprimento').style.display='table-row';
    document.getElementById('trQueimadoQuadrado').style.display='none';
    document.getElementById('trQueimadobotao').style.display='table-row';
    document.getElementById('tableQueimadoMedida').style.display='table';
    document.getElementById('queimadoLargura').value="";
    document.getElementById('queimadoComprimento').value="";
    document.getElementById('infoQueimadoErro1').style.display='none'; 
    document.getElementById('infoQueimadoErro2').style.display='none'; 
    document.getElementById('selectQueimadoValor').value=0;
    document.getElementById('selectQueimadoTraco').value=0;
    document.getElementById('selectQueimadoEspessura').value=1;
    document.getElementById('tableQueimadoValor').style.display='none';
    document.getElementById('queimadoValorCimento').value="";
    document.getElementById('queimadoValorAreia').value="";
}
function queimadoCalcular(){
    valorCimento = document.getElementById('queimadoValorCimento').value;
    valorAreia = document.getElementById('queimadoValorAreia').value;
   //Validar CAmpos area
    if(document.getElementById('selectQueimado').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoQueimadoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoQueimadoErro1').style.display='none';
            metroQuadrado = parseFloat((metroQuadrado));
        }
    }else{
        metroQuadrado = document.getElementById('queimadoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoQueimadoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoQueimadoErro1').style.display='none';
            metroQuadrado = parseFloat(metroQuadrado);
           }
    }
    //Validar Espessura contra Piso
    switch (document.getElementById('selectQueimadoEspessura').value) {
        case "0":
        espessura=0.002;
        break;
        case "1":
        espessura=0.003;
        break;
        case "2":
        espessura=0.004;
        break;

    } 
    metroCubico= metroQuadrado*espessura;
    //Validar Traço contra Piso
    switch (document.getElementById('selectQueimadoTraco').value) {
        case "0":
            traco='1:1';
            cimento = (metroCubico/2*1200);
            areia = (metroCubico/2*1500);
            massa=areia+cimento;
            break;
        case "1":
            traco='1:3';
            cimento = (metroCubico/4*1200);
            areia = (metroCubico/4*3*1500);
            massa=areia+cimento;
           break;
        case "2":
            traco='1:4';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
            break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectQueimadoValor').value==1){    
        if(valorCimento==0 || valorAreia==0){
            document.getElementById('infoQueimadoErro2').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoQueimadoErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
                //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento Queimado (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento Queimado(M³)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroCubico.toFixed(2) + ' M³</td>';
        tr += '</tr>';
        //Linha Traço
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + traco + '</td>';
        tr += '</tr>';
         //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa.toFixed(2) + ' KG.</td>';
         tr += '</tr>';
        //Linha cimento 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cimento.toFixed(2)  +' KG. <br> ' + (cimento/21.6).toFixed(2)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Areia
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + areia.toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(2)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoCubico= (metroCubico*1.05).toFixed(2);
        recomendadoCimento= (cimento*1.05).toFixed(2);
        recomendadoAreia = (areia*1.05).toFixed(2);
        massa= parseFloat(recomendadoAreia) +parseFloat(recomendadoCimento);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento Queimado</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCubico + ' M³</td>';
        tr += '</tr>';
        //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa .toFixed(2)+ ' KG.</td>';
         tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCimento +' KG. <br> ' + (recomendadoCimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoAreia + ' KG. <br> ' + (recomendadoAreia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectQueimadoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Valor de cimento
            switch (document.getElementById('selectQueimadoCimento').value) {
                case "0":
                valorCimento = (Math.ceil((recomendadoCimento)/50) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/50) +' PCT. (50KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil((recomendadoCimento)/1) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/1) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha areia
            switch (document.getElementById('selectQueimadoAreia').value) {
                case "0":
                valorAreia = (Math.ceil((recomendadoAreia)/20) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/20) +' PCT. (20KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia = (Math.ceil((recomendadoAreia)/750) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/750) +' (1/5 m³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia = (Math.ceil((recomendadoAreia)/1500) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Pastilha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/1500) +' m³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectQueimadoValor').value==1){
        valorTotal= (parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Valor Total
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageQueimado";
    entrarDireito('pageResultado','pageQueimado');
}
//---------------------------------------------Contra Piso---------------------//
function contraPisoOpcao(){
    if(document.getElementById('selectContraPiso').value==0){
        document.getElementById('trContraPisoLargura').style.display='table-row';
        document.getElementById('trContraPisoComprimento').style.display='table-row';
        document.getElementById('trContraPisoQuadrado').style.display='none';
        document.getElementById('trContraPisobotao').style.display='table-row';
        document.getElementById('tableContraPisoMedida').style.display='table';
        document.getElementById('contraPisoLargura').value="";
        document.getElementById('contraPisoComprimento').value="";
        document.getElementById('infoContraPisoErro1').style.display='none'; 
        metroQuadrado
        var table = document.getElementById('paredeContraPiso');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trContraPisoLargura').style.display='none';
        document.getElementById('trContraPisoComprimento').style.display='none';
        document.getElementById('trContraPisoQuadrado').style.display='table-row';
        document.getElementById('trContraPisobotao').style.display='none';
        document.getElementById('tableContraPisoMedida').style.display='none';
        document.getElementById('contraPisoQuadrado').value="";
        document.getElementById('infoContraPisoErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeContraPiso');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function contraPisoValorOpcao(){
	if(document.getElementById('selectContraPisoValor').value==0){
        document.getElementById('tableContraPisoValor').style.display='none';
    }else{
        document.getElementById('tableContraPisoValor').style.display='table';
    }
}
function AddContraPiso(){
    metroQuadrado=0, largura=0, comprimento=0;
    largura = document.getElementById('contraPisoLargura').value;
    comprimento = document.getElementById('contraPisoComprimento').value;
    if(largura==0 || comprimento==0){
        document.getElementById('infoContraPisoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoContraPisoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(largura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeContraPiso');
        var tr = '';
        //Linha ContraPiso
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Medida do Piso</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('contraPisoLargura').value="";
        document.getElementById('contraPisoComprimento').value="";
    }
}
function contraPisoLimpar(){
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeContraPiso');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectContraPisoCimento').value=0;
    document.getElementById('selectContraPisoAreia').value=0;
    document.getElementById('selectContraPiso').value=0;
    document.getElementById('selectContraPisoEspessura').value=3;
    document.getElementById('trContraPisoLargura').style.display='table-row';
    document.getElementById('trContraPisoComprimento').style.display='table-row';
    document.getElementById('trContraPisoQuadrado').style.display='none';
    document.getElementById('trContraPisobotao').style.display='table-row';
    document.getElementById('tableContraPisoMedida').style.display='table';
    document.getElementById('contraPisoLargura').value="";
    document.getElementById('contraPisoComprimento').value="";
    document.getElementById('infoContraPisoErro1').style.display='none'; 
    document.getElementById('infoContraPisoErro2').style.display='none'; 
    document.getElementById('selectContraPisoValor').value=0;
    document.getElementById('selectContraPisoTraco').value=0;
    document.getElementById('tableContraPisoValor').style.display='none';
    document.getElementById('contraPisoValorCimento').value="";
    document.getElementById('contraPisoValorAreia').value="";
  
}
function contraPisoCalcular(){
    valorCimento = document.getElementById('contraPisoValorCimento').value;
    valorAreia = document.getElementById('contraPisoValorAreia').value;
   //Validar CAmpos area
    if(document.getElementById('selectContraPiso').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoContraPisoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoContraPisoErro1').style.display='none';
            metroQuadrado = parseFloat((metroQuadrado));
        }
    }else{
        metroQuadrado = document.getElementById('contraPisoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoContraPisoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoContraPisoErro1').style.display='none';
            metroQuadrado = parseFloat(metroQuadrado);
           }
    }
    //Validar Espessura contra Piso
    switch (document.getElementById('selectContraPisoEspessura').value) {
        case "0":
        espessura=0.02;
        break;
        case "1":
        espessura=0.03;
        break;
        case "2":
        espessura=0.04;
        break;
        case "3":
        espessura=0.05;
        break;
    }  
    metroCubico= metroQuadrado*espessura;
    //Validar Traço contra Piso
    switch (document.getElementById('selectContraPisoTraco').value) {
        case "0":
            traco='1:3';
            cimento = (metroCubico/4*1200);
            areia = (metroCubico/4*3*1500);
            massa=areia+cimento;
            break;
        case "1":
            traco='1:4';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
           break;
        case "2":
            traco='1:5';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
            break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectContraPisoValor').value==1){    
        if(valorCimento==0 || valorAreia==0){
            document.getElementById('infoContraPisoErro2').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoContraPisoErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
                //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Contra Piso (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Chapisco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Contra Piso (M³)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroCubico.toFixed(2) + ' M³</td>';
        tr += '</tr>';
        //Linha Traço
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + traco + '</td>';
        tr += '</tr>';
         //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa.toFixed(2) + ' KG.</td>';
         tr += '</tr>';
        //Linha cimento 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cimento.toFixed(2)  +' KG. <br> ' + (cimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Areia
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + areia.toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoCubico= (metroCubico*1.05).toFixed(2);
        recomendadoCimento= (cimento*1.05).toFixed(2);
        recomendadoAreia = (areia*1.05).toFixed(2);
        massa= parseFloat(recomendadoAreia) +parseFloat(recomendadoCimento);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Contra Piso</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCubico + ' M²</td>';
        tr += '</tr>';
        //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa .toFixed(2)+ ' KG.</td>';
         tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCimento +' KG. <br> ' + (recomendadoCimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoAreia + ' KG. <br> ' + (recomendadoAreia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectContraPisoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Valor de cimento
            switch (document.getElementById('selectContraPisoCimento').value) {
                case "0":
                valorCimento = (Math.ceil((recomendadoCimento)/50) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil((recomendadoCimento)/1) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/1) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha areia
            switch (document.getElementById('selectContraPisoAreia').value) {
                case "0":
                valorAreia = (Math.ceil((recomendadoAreia)/20) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Areia </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia = (Math.ceil((recomendadoAreia)/750) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia = (Math.ceil((recomendadoAreia)/1500) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/1500) +' M³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectContraPisoValor').value==1){
        valorTotal= (parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Valor Total
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageContraPiso";
    entrarDireito('pageResultado','pageContraPiso');
}
//---------------------------------------------Embolso---------------------//
function embolcoOpcao(){
    if(document.getElementById('selectEmbolco').value==0){
        document.getElementById('trEmbolcoLargura').style.display='table-row';
        document.getElementById('trEmbolcoComprimento').style.display='table-row';
        document.getElementById('trEmbolcoQuadrado').style.display='none';
        document.getElementById('trEmbolcobotao').style.display='table-row';
        document.getElementById('tableEmbolcoMedida').style.display='table';
        document.getElementById('embolcoLargura').value="";
        document.getElementById('embolcoComprimento').value="";
        document.getElementById('infoEmbolcoErro1').style.display='none'; 
        metroQuadrado
        var table = document.getElementById('paredeEmbolco');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trEmbolcoLargura').style.display='none';
        document.getElementById('trEmbolcoComprimento').style.display='none';
        document.getElementById('trEmbolcoQuadrado').style.display='table-row';
        document.getElementById('trEmbolcobotao').style.display='none';
        document.getElementById('tableEmbolcoMedida').style.display='none';
        document.getElementById('embolcoQuadrado').value="";
        document.getElementById('infoEmbolcoErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeEmbolco');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function embolcoValorOpcao(){
	if(document.getElementById('selectEmbolcoValor').value==0){
        document.getElementById('tableEmbolcoValor').style.display='none';
    }else{
        document.getElementById('tableEmbolcoValor').style.display='table';
    }
}
function AddEmbolco(){
    metroQuadrado=0, largura=0, comprimento=0;
    largura = document.getElementById('embolcoLargura').value;
    comprimento = document.getElementById('embolcoComprimento').value;
    if(largura==0 || comprimento==0){
        document.getElementById('infoEmbolcoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoEmbolcoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(largura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeEmbolco');
        var tr = '';
        //Linha Embolco
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Medida do Piso</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('embolcoLargura').value="";
        document.getElementById('embolcoComprimento').value="";
    }
}
function embolcoLimpar(){
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeEmbolco');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectEmbolcoCimento').value=0;
    document.getElementById('selectEmbolcoAreia').value=0;
    document.getElementById('selectEmbolco').value=0;
    document.getElementById('selectEmbolcoEspessura').value=3;
    document.getElementById('trEmbolcoLargura').style.display='table-row';
    document.getElementById('trEmbolcoComprimento').style.display='table-row';
    document.getElementById('trEmbolcoQuadrado').style.display='none';
    document.getElementById('trEmbolcobotao').style.display='table-row';
    document.getElementById('tableEmbolcoMedida').style.display='table';
    document.getElementById('embolcoLargura').value="";
    document.getElementById('embolcoComprimento').value="";
    document.getElementById('infoEmbolcoErro1').style.display='none'; 
    document.getElementById('infoEmbolcoErro2').style.display='none'; 
    document.getElementById('selectEmbolcoValor').value=0;
    document.getElementById('selectEmbolcoTraco').value=0;
    document.getElementById('selectEmbolcoEspessura').value=1;
    document.getElementById('tableEmbolcoValor').style.display='none';
    document.getElementById('embolcoValorCimento').value="";
    document.getElementById('embolcoValorAreia').value="";
    document.getElementById('embolcoValorCal').value="";
    document.getElementById('trEmbolcoCal').style.display='none'
}
function embolcoTracoOpcao(){
    switch (document.getElementById('selectEmbolcoTraco').value) {
        case "0":
        document.getElementById('trEmbolcoCal').style.display='none';
        break;
        case "1":
        document.getElementById('trEmbolcoCal').style.display='table-row';
        break;
        case "2":
        document.getElementById('trEmbolcoCal').style.display='table-row';
        break;
      }
}
function embolcoCalcular(){
    valorCimento = document.getElementById('embolcoValorCimento').value;
    valorAreia = document.getElementById('embolcoValorAreia').value;
    valorCal = document.getElementById('embolcoValorCal').value;
    cal=0;
   //Validar CAmpos area
    if(document.getElementById('selectEmbolco').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoEmbolcoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoEmbolcoErro1').style.display='none';
            metroQuadrado = parseFloat((metroQuadrado));
        }
    }else{
        metroQuadrado = document.getElementById('embolcoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoEmbolcoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoEmbolcoErro1').style.display='none';
            metroQuadrado = parseFloat(MmetroQuadrado);
           }
    }
    //Validar Espessura contra Piso
    switch (document.getElementById('selectEmbolcoEspessura').value) {
        case "0":
        espessura=0.015;
        break;
        case "1":
        espessura=0.02;
        break;
        case "2":
        espessura=0.025;
        break;
        case "3":
        espessura=0.03;
        break;
        case "4":
        espessura=0.035;
        break;
        case "5":
        espessura=0.04;
        break;
        case "6":
        espessura=0.045;
        break;
        case "7":
        espessura=0.05;
        break;

    }
    metroCubico= metroQuadrado*espessura;
    //Validar Traço contra Piso
    switch (document.getElementById('selectEmbolcoTraco').value) {
        case "0":
            traco='1:4';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
            valorCal=0;
            break;
        case "1":
            traco='1:2:8';
            cimento = (metroCubico/11*1200);
            cal = (metroCubico/11*2*1500);
            areia = (metroCubico/11*8*1500);
            massa=areia+cimento;
           break;
        case "2":
            traco='1:2:9';
            cimento = (metroCubico/12*1200);
            cal = (metroCubico/12*2*1500);
            areia = (metroCubico/12*9*1500);
            massa=areia+cimento;
            break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectEmbolcoValor').value==1){    
        if(valorCimento==0 || valorAreia==0){
            document.getElementById('infoEmbolcoErro2').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoEmbolcoErro2').style.display='none';
        }
        if(document.getElementById('selectEmbolcoTraco').value==2 || document.getElementById('selectEmbolcoTraco').value==1){
            if(valorCal==0){
                document.getElementById('infoEmbolcoErro2').style.display='table-row';
            return false;
            }else{
                document.getElementById('infoEmbolcoErro2').style.display='none';
            }
        }
        
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
                //Linha Embolco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Embolco (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Embolco   
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Embolco (m³)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroCubico.toFixed(2) + ' M³</td>';
        tr += '</tr>';
        //Linha Traço
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + traco + '</td>';
        tr += '</tr>';
         //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa.toFixed(2) + ' KG.</td>';
         tr += '</tr>';
        //Linha cimento 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cimento.toFixed(2)  +' KG. <br> ' + (cimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        if (cal!=0){
         tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cal</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cal.toFixed(2)  +' KG. <br> ' + (cal/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';  
        }
        //Linha Areia
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + areia.toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoCubico= (metroCubico*1.05).toFixed(2);
        recomendadoCimento= (cimento*1.05).toFixed(2);
        recomendadoAreia = (areia*1.05).toFixed(2);
        massa= parseFloat(recomendadoAreia) +parseFloat(recomendadoCimento);
        recomendadoCal = (cal*1.05).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Embolco</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCubico + ' M³</td>';
        tr += '</tr>';
        //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa .toFixed(2)+ ' KG.</td>';
         tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCimento +' KG. <br> ' + (recomendadoCimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
         //Linha cal
        if (cal!=0){
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Cal</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + cal.toFixed(2)  +' KG. <br> ' + (cal/21.6).toFixed(1)  +' Lata (18 L)</td>';
            tr += '</tr>';  
            }
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoAreia + ' KG. <br> ' + (recomendadoAreia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectEmbolcoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Valor de cimento
            switch (document.getElementById('selectEmbolcoCimento').value) {
                case "0":
                valorCimento = (Math.ceil((recomendadoCimento)/50) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil((recomendadoCimento)/1) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/1) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha cal
            if (cal!=0){
                valorCal = (Math.ceil((recomendadoCal)/20) * valorCal).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Areia </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCal)/20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCal + '</td>';
                tr += '</tr>'; 
            }
            //Linha areia
            switch (document.getElementById('selectEmbolcoAreia').value) {
                case "0":
                valorAreia = (Math.ceil((recomendadoAreia)/20) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cal </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia = (Math.ceil((recomendadoAreia)/750) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia = (Math.ceil((recomendadoAreia)/1500) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/1500) +' M³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectEmbolcoValor').value==1){
        valorTotal= (parseFloat(valorCimento)+parseFloat(valorAreia)+parseFloat(valorCal));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Valor Total
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }


    pagina = "pageEmbolco";
    entrarDireito('pageResultado','pageEmbolco');
}
//---------------------------------------------Reboco---------------------//
function rebocoOpcao(){
    if(document.getElementById('selectReboco').value==0){
        document.getElementById('trRebocoLargura').style.display='table-row';
        document.getElementById('trRebocoComprimento').style.display='table-row';
        document.getElementById('trRebocoQuadrado').style.display='none';
        document.getElementById('trRebocobotao').style.display='table-row';
        document.getElementById('tableRebocoMedida').style.display='table';
        document.getElementById('rebocoLargura').value="";
        document.getElementById('rebocoComprimento').value="";
        document.getElementById('infoRebocoErro1').style.display='none'; 
        metroQuadrado
        var table = document.getElementById('paredeReboco');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trRebocoLargura').style.display='none';
        document.getElementById('trRebocoComprimento').style.display='none';
        document.getElementById('trRebocoQuadrado').style.display='table-row';
        document.getElementById('trRebocobotao').style.display='none';
        document.getElementById('tableRebocoMedida').style.display='none';
        document.getElementById('rebocoQuadrado').value="";
        document.getElementById('infoRebocoErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeReboco');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function rebocoValorOpcao(){
	if(document.getElementById('selectRebocoValor').value==0){
        document.getElementById('tableRebocoValor').style.display='none';
    }else{
        document.getElementById('tableRebocoValor').style.display='table';
    }
}
function AddReboco(){
    metroQuadrado=0, largura=0, comprimento=0;
    largura = document.getElementById('rebocoLargura').value;
    comprimento = document.getElementById('rebocoComprimento').value;
    if(largura==0 || comprimento==0){
        document.getElementById('infoRebocoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoRebocoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(largura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeReboco');
        var tr = '';
        //Linha Reboco
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Medida do Piso</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('rebocoLargura').value="";
        document.getElementById('rebocoComprimento').value="";
    }
}
function rebocoLimpar(){
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeReboco');
    var tr = '';
    table.innerHTML = tr
    document.getElementById('selectRebocoCimento').value=0;
    document.getElementById('selectRebocoAreia').value=0;
    document.getElementById('selectReboco').value=0;
    document.getElementById('selectRebocoEspessura').value=3;
    document.getElementById('trRebocoLargura').style.display='table-row';
    document.getElementById('trRebocoComprimento').style.display='table-row';
    document.getElementById('trRebocoQuadrado').style.display='none';
    document.getElementById('trRebocobotao').style.display='table-row';
    document.getElementById('tableRebocoMedida').style.display='table';
    document.getElementById('rebocoLargura').value="";
    document.getElementById('rebocoComprimento').value="";
    document.getElementById('infoRebocoErro1').style.display='none'; 
    document.getElementById('infoRebocoErro2').style.display='none'; 
    document.getElementById('selectRebocoValor').value=0;
    document.getElementById('selectRebocoTraco').value=0;
    document.getElementById('selectRebocoEspessura').value=1;
    document.getElementById('tableRebocoValor').style.display='none';
    document.getElementById('rebocoValorCimento').value="";
    document.getElementById('rebocoValorAreia').value="";
    document.getElementById('rebocoValorCal').value="";
    document.getElementById('trRebocoCal').style.display='none'
}
function rebocoTracoOpcao(){
    switch (document.getElementById('selectRebocoTraco').value) {
        case "0":
        document.getElementById('trRebocoCal').style.display='none';
        break;
        case "1":
        document.getElementById('trRebocoCal').style.display='none';
        break;
        case "2":
        document.getElementById('trRebocoCal').style.display='table-row';
        break;
      }
}
function rebocoCalcular(){
    valorCimento = document.getElementById('rebocoValorCimento').value;
    valorAreia = document.getElementById('rebocoValorAreia').value;
    valorCal = document.getElementById('rebocoValorCal').value;
    cal=0;
   //Validar CAmpos area
    if(document.getElementById('selectReboco').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoRebocoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoRebocoErro1').style.display='none';
            metroQuadrado = parseFloat((metroQuadrado));
        }
    }else{
        metroQuadrado = document.getElementById('rebocoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoRebocoErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoRebocoErro1').style.display='none';
            metroQuadrado = parseFloat(MmetroQuadrado);
           }
    }
    //Validar Espessura contra Piso
    switch (document.getElementById('selectRebocoEspessura').value) {
        case "0":
        espessura=0.003;
        break;
        case "1":
        espessura=0.004;
        break;
        case "2":
        espessura=0.005;
        break;
    }
    metroCubico= metroQuadrado*espessura;
    //Validar Traço contra Piso
    switch (document.getElementById('selectRebocoTraco').value) {
        case "0":
            traco='1:4';
            cimento = (metroCubico/5*1200);
            areia = (metroCubico/5*4*1500);
            massa=areia+cimento;
            valorCal=0;
            break;
        case "1":
            traco='1:5';
            cimento = (metroCubico/6*1200);
            areia = (metroCubico/6*5*1500);
            massa=areia+cimento;
            valorCal=0;
           break;
        case "2":
            traco='1:2:9';
            cimento = (metroCubico/12*1200);
            cal = (metroCubico/12*2*1500);
            areia = (metroCubico/12*9*1500);
            massa=areia+cimento;
            break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectRebocoValor').value==1){    
        if(valorCimento==0 || valorAreia==0){
            document.getElementById('infoRebocoErro2').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoRebocoErro2').style.display='none';
        }
        if(document.getElementById('selectRebocoTraco').value==2){
            if(valorCal==0){
                document.getElementById('infoRebocoErro2').style.display='table-row';
            return false;
            }else{
                document.getElementById('infoRebocoErro2').style.display='none';
            }
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
                //Linha Reboco  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Reboco (M²)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha Reboco   
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Reboco (M³)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroCubico.toFixed(2) + ' M³</td>';
        tr += '</tr>';
        //Linha Traço
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + traco + '</td>';
        tr += '</tr>';
         //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa.toFixed(2) + ' KG.</td>';
         tr += '</tr>';
        //Linha cimento 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cimento.toFixed(2)  +' KG. <br> ' + (cimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        if (cal!=0){
         tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cal</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cal.toFixed(2)  +' KG. <br> ' + (cal/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';  
        }
        //Linha Areia
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + areia.toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoCubico= (metroCubico*1.05).toFixed(2);
        recomendadoCimento= (cimento*1.05).toFixed(2);
        recomendadoAreia = (areia*1.05).toFixed(2);
        massa= parseFloat(recomendadoAreia) +parseFloat(recomendadoCimento);
        recomendadoCal = (cal*1.05).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Reboco</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCubico + ' M³</td>';
        tr += '</tr>';
        //Linha Massa 
         tr += '<tr>';
         tr += '<td class="coluna1 alinha">Massa</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center;">' + massa .toFixed(2)+ ' KG.</td>';
         tr += '</tr>';
        //Linha metro²
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCimento +' KG. <br> ' + (recomendadoCimento/21.6).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
         //Linha cal
        if (cal!=0){
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Cal</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + cal.toFixed(2)  +' KG. <br> ' + (cal/21.6).toFixed(1)  +' Lata (18 L)</td>';
            tr += '</tr>';  
            }
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Areia</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoAreia + ' KG. <br> ' + (recomendadoAreia/27).toFixed(1)  +' Lata (18 L)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectRebocoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Valor de cimento
            switch (document.getElementById('selectRebocoCimento').value) {
                case "0":
                valorCimento = (Math.ceil((recomendadoCimento)/50) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil((recomendadoCimento)/1) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCimento)/1) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha cal
            if (cal!=0){
                valorCal = (Math.ceil((recomendadoCal)/20) * valorCal).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Areia </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCal)/20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCal + '</td>';
                tr += '</tr>'; 
            }
            //Linha areia
            switch (document.getElementById('selectRebocoAreia').value) {
                case "0":
                valorAreia = (Math.ceil((recomendadoAreia)/20) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cal </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia = (Math.ceil((recomendadoAreia)/750) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia = (Math.ceil((recomendadoAreia)/1500) * valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoAreia)/1500) +' M³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectRebocoValor').value==1){
        valorTotal= (parseFloat(valorCimento)+parseFloat(valorAreia)+parseFloat(valorCal));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Valor Total
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageReboco";
    entrarDireito('pageResultado','pageReboco');
}
//-------------------------------------------------------------------------Decorcação--------------------------------------------------------------------//
//---------------------------------------------Bloco de Vidro--------------//
function blocoVidroValorOpcao(){
	if(document.getElementById('selectBlocoVidroValor').value==0){
        document.getElementById('tableBlocoVidroValor').style.display='none';
    }else{
        document.getElementById('tableBlocoVidroValor').style.display='table';
    }
}
function blocoVidroLimpar(){
    document.getElementById('blocoVidroAltura').value="";
    document.getElementById('blocoVidroComprimento').value="";
    document.getElementById('blocoVidroValorPeca').value="";
    document.getElementById('blocoVidroValorVergalhao').value="";
    document.getElementById('blocoVidroValorArgamassa').value="";
    document.getElementById('blocoVidroValorEspacador').value="";
    document.getElementById('infoBlocoVidroErro1').style.display='none'; 
    document.getElementById('infoBlocoVidroErro2').style.display='none'; 
    document.getElementById('selectBlocoVidroValor').value=0;
    document.getElementById('tableBlocoVidroValor').style.display='none';
    document.getElementById('selectBlocoVidroEspacador').value=0;
    document.getElementById('selectBlocoVidroArgamassa').value=0;
}
function blocoVidroCalcular(){
    metroQuadrado=0, recomendadoQuadrado=0;
    altura = document.getElementById('blocoVidroAltura').value;
    comprimento = document.getElementById('blocoVidroComprimento').value;
    valorPeca = document.getElementById('blocoVidroValorPeca').value;
    valorEspacador = document.getElementById('blocoVidroValorEspacador').value; 
    valorVergalhao = document.getElementById('blocoVidroValorVergalhao').value;
    valorArgamassa = document.getElementById('blocoVidroValorArgamassa').value;
    //validando Medidas da aREA
    if( altura==0 || comprimento==0){
        document.getElementById('infoBlocoVidroErro1').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoBlocoVidroErro1').style.display='none';
            metroQuadrado = (altura*comprimento);
            argamassa = metroQuadrado * 18.5;
            metroquadradoPeca = (0.04);
            espacador = Math.ceil((metroQuadrado/metroquadradoPeca)*1.4);
    }
    //Validando Campos e Valores da do bloco
    if(document.getElementById('selectBlocoVidroValor').value==1){
          if( valorPeca==0 || valorEspacador==0 || valorVergalhao==0 || valorArgamassa==0){
            document.getElementById('infoBlocoVidroErro2').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoBlocoVidroErro2').style.display='none'; 
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha bloco de vidro  M²  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Bloco de Vidro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha bloco de vidro  Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Bloco de Vidro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado/0.04) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Espaçadores 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Espaçadores</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(espacador*1.04) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Vergalhão 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Vergalhão (3/16)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*8) + ' METROS</td>';
        tr += '</tr>'; 
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(argamassa)+ ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado/metroquadradoPeca*1.05);
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Bloco de Vidro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Espaçadores 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Espaçadores</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(espacador*1.05) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Vergalhão 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Vergalhão (3/16)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*8) + ' METROS</td>';
        tr += '</tr>'; 
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';

        table.innerHTML = tr; 
    }
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectBlocoVidroValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha Blodo de vidro peças
            valorPeca=(recomendadoQuadrado  * valorPeca).toFixed(2);
            tr += '<tr>';
            tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Bloco de Vidro</td>';
            tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' PÇS.</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
            tr += '</tr>';
            //Linha eSPAÇADOR
            switch (document.getElementById('selectBlocoVidroEspacador').value) {
                case "0":
                valorEspacador=(Math.ceil(espacador*1.05/1) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/1) +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorEspacador=(Math.ceil(espacador*1.05/10) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/10)  +' PÇS.(10 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorEspacador=(Math.ceil(espacador*1.05/35) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/35)  +' PÇS.(35 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "3":
                valorEspacador=(Math.ceil(espacador*1.05/100) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/100)  +' PÇS.(100 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Vergalhão
            valorVergalhao=(Math.ceil(metroQuadrado*8)  * valorVergalhao).toFixed(2);
            tr += '<tr>';
            tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Vergalhao (3/16)</td>';
            tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(metroQuadrado*8) +' METROS</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorVergalhao + '</td>';
            tr += '</tr>';
            //Linha Argamassa
            switch (document.getElementById('selectBlocoVidroArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCTS. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCTS. (5 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectBlocoVidroValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorEspacador)+parseFloat(valorVergalhao)+parseFloat(valorArgamassa));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageBlocoVidro";
    entrarDireito('pageResultado','pageBlocoVidro');
}
//---------------------------------------------cobogó--------------//
function cobogoValorOpcao(){
	if(document.getElementById('selectCobogoValor').value==0){
        document.getElementById('tableCobogoValor').style.display='none';
    }else{
        document.getElementById('tableCobogoValor').style.display='table';
    }
}
function cobogoLimpar(){
    document.getElementById('cobogoAltura').value="";
    document.getElementById('cobogoComprimento').value="";
    document.getElementById('cobogoAlturaPeca').value="";
    document.getElementById('cobogoComprimentoPeca').value="";
    document.getElementById('cobogoValorPeca').value="";
    document.getElementById('cobogoValorVergalhao').value="";
    document.getElementById('cobogoValorArgamassa').value="";
    document.getElementById('cobogoValorEspacador').value="";
    document.getElementById('infoCobogoErro1').style.display='none'; 
    document.getElementById('infoCobogoErro2').style.display='none'; 
    document.getElementById('infoCobogoErro3').style.display='none'; 
    document.getElementById('selectCobogoValor').value=0;
    document.getElementById('tableCobogoValor').style.display='none';
    document.getElementById('selectCobogoEspacador').value=0;
    document.getElementById('selectCobogoArgamassa').value=0;
}
function cobogoCalcular(){
    metroQuadrado=0;
    altura = document.getElementById('cobogoAltura').value;
    comprimento = document.getElementById('cobogoComprimento').value;
    alturaPeca = document.getElementById('cobogoAlturaPeca').value;
    comprimentoPeca = document.getElementById('cobogoComprimentoPeca').value;
    valorPeca = document.getElementById('cobogoValorPeca').value;
    valorEspacador = document.getElementById('cobogoValorEspacador').value; 
    valorVergalhao = document.getElementById('cobogoValorVergalhao').value;
    valorArgamassa = document.getElementById('cobogoValorArgamassa').value;
    //validando Medidas da aREA
    if( altura==0 || comprimento==0){
    document.getElementById('infoCobogoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoCobogoErro1').style.display='none';
        metroQuadrado =  altura * comprimento;
        argamassa = metroQuadrado * 18.5;
    }
    //validando Medidas da Peça
    if( alturaPeca==0 || comprimentoPeca==0){
        document.getElementById('infoCobogoErro2').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoCobogoErro2').style.display='none';
        alturaPeca = parseFloat( alturaPeca) + parseFloat(0.01);
        comprimentoPeca = parseFloat( comprimentoPeca) + parseFloat(0.01);
        metroQuadradoPeca = alturaPeca * comprimentoPeca;
        espacador = Math.ceil((metroQuadrado/metroQuadradoPeca)*1.4);
    }
     //Validando Campos e Valores Cobogo
    if(document.getElementById('selectCobogoValor').value==1){
          if(valorPeca==0 || valorArgamassa==0 || valorVergalhao==0 || valorEspacador==0){
            document.getElementById('infoCobogoErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoCobogoErro3').style.display='none';   
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Linha bloco de vidro  M²  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cobogó</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Linha bloco de vidro  Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cobogó</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado/metroQuadradoPeca) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Espaçadores 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Espaçadores</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(espacador*1.04) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Vergalhão 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Vergalhão (3/16)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*4) + ' METROS</td>';
        tr += '</tr>'; 
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(argamassa)+ ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr;
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
         recomendadoQuadrado= metroQuadrado/metroQuadradoPeca*1.05;
        recomendadoArgamassa= Math.ceil(argamassa*1.05);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cobogó</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(recomendadoQuadrado) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Espaçadores 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Espaçadores</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(espacador*1.10) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Vergalhão 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Vergalhão (3/16)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*4) + ' METROS</td>';
        tr += '</tr>'; 
        //Linha Argamassa
        tr += '<tr>';
        tr += '<td class="coluna1 alinha"> Argamassa</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' KG.</td>';
        tr += '</tr>';

        table.innerHTML = tr; 
    }

    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectCobogoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha cobogó peças
            valorPeca=(recomendadoQuadrado  * valorPeca).toFixed(2);
            tr += '<tr>';
            tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cobogó</td>';
            tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado) +' PÇS.</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
            tr += '</tr>';
            //Linha eSPAÇADOR
            switch (document.getElementById('selectBlocoVidroEspacador').value) {
                case "0":
                valorEspacador=(Math.ceil(espacador*1.05/1) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/1) +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorEspacador=(Math.ceil(espacador*1.05/10) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/10)  +' PÇS.(10 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorEspacador=(Math.ceil(espacador*1.05/35) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/35)  +' PÇS.(35 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
                case "3":
                valorEspacador=(Math.ceil(espacador*1.05/100) * valorEspacador).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Espaçadores</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(espacador*1.05/100)  +' PÇS.(100 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorEspacador + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Vergalhão
            valorVergalhao=(Math.ceil(metroQuadrado*8)  * valorVergalhao).toFixed(2);
            tr += '<tr>';
            tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Vergalhao (3/16)</td>';
            tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(metroQuadrado*4) +' METROS</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorVergalhao + '</td>';
            tr += '</tr>';
            //Linha Argamassa
            switch (document.getElementById('selectBlocoVidroArgamassa').value) {
                case "0":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/20) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/20) +' PCTS. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorArgamassa= (Math.ceil((recomendadoArgamassa)/5) * valorArgamassa).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Argamassa</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoArgamassa)/5) +' PCTS. (5 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorArgamassa + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectCobogoValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorEspacador)+parseFloat(valorVergalhao)+parseFloat(valorArgamassa));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';

    }
    pagina = "pageCobogo";
    entrarDireito('pageResultado','pageCobogo');
}
//---------------------------------------------Papel de Parede -------------//
function papelParedeValorOpcao(){
	if(document.getElementById('selectPapelParedeValor').value==0){
        document.getElementById('tablePapelParedeValor').style.display='none';
    }else{
        document.getElementById('tablePapelParedeValor').style.display='table';
    }
}
function papelParedeLimpar(){
    document.getElementById('papelParedeAltura').value="";
    document.getElementById('papelParedeComprimento').value="";
    document.getElementById('papelParedeValorRolo').value="";
    document.getElementById('papelParedeValorCola').value="";
    document.getElementById('infoPapelParedeErro1').style.display='none'; 
    document.getElementById('infoPapelParedeErro2').style.display='none'; 
    document.getElementById('selectPapelParedeValor').value=0;
    document.getElementById('tablePapelParedeValor').style.display='none';
    document.getElementById('selectPapelParedeRolo').value=0;
    document.getElementById('selectPapelParedeCola').value=0;
}
function papelParedeCalcular(){
    altura = document.getElementById('papelParedeAltura').value;
    comprimento = document.getElementById('papelParedeComprimento').value;
    valorRolo = document.getElementById('papelParedeValorRolo').value;
    valorCola = document.getElementById('papelParedeValorCola').value;

    //validando Medidas da aREA
    if( altura==0 || comprimento==0){
    document.getElementById('infoPapelParedeErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoPapelParedeErro1').style.display='none';
        metroQuadrado = altura * comprimento;
        //50gr de cola faz 15M²
        cola= Math.ceil(metroQuadrado*50/15);
    }

    //Validando Campos e Valores da do bloco
    if(document.getElementById('selectPapelParedeValor').value==1){
          if( valorRolo==0 || valorCola==0){
            document.getElementById('infoPapelParedeErro2').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPapelParedeErro2').style.display='none';
            
        }
    }

    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Metro²  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Papel de Parede</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado.toFixed(2) + ' M²</td>';
        tr += '</tr>';
        //Cola  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">cola</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cola.toFixed(0) + ' Gramas</td>';
        tr += '</tr>';

        table.innerHTML = tr;
    }
    // Carregando segunda Tabela
    if (metroQuadrado!=0){ 
        var recomendadoQuadrado= Math.ceil(metroQuadrado*1.05);
        var recomendadoCola= Math.ceil(cola*1.05);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Papel de Parede</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' M²</td>';
        tr += '</tr>';
        //Linha Espaçadores 
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cola</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCola.toFixed(0) + ' Gramas</td>';
        table.innerHTML = tr; 
    }

    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPapelParedeValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha papel
            switch (document.getElementById('selectPapelParedeRolo').value) {
                case "0":
                valorRolo= (Math.ceil((recomendadoQuadrado)/5) * valorRolo).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Papel de Parede  </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado/5)  +' Rolo (5 M²)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRolo + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorRolo= (Math.ceil((recomendadoQuadrado)/1) * valorRolo).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Papel de Parede </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado/1)   +' Metro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorRolo + '</td>';
                tr += '</tr>';
                break;
            }
            //Linha Cola
            switch (document.getElementById('selectPapelParedeCola').value) {
                case "0":
                valorCola= (Math.ceil((recomendadoCola)/50) * valorCola).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;"> Cola</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCola)/50) + ' PCTS. (50 GR.) </td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCola + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCola= ((Math.ceil(recomendadoCola/100))*valorCola) .toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;"> Cola</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCola)/100) + ' PCTS. (100 GR.) </td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCola + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorCola= ((Math.ceil(recomendadoCola/200))*valorCola) .toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;"> Cola</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCola)/200) + ' PCTS. (200 GR.) </td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCola + '</td>';
                tr += '</tr>';
                break;
                case "3":
                valorCola= ((Math.ceil(recomendadoCola/1000))*valorCola) .toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;" > Cola</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil((recomendadoCola)/1000) + ' PCTS. (1 KG.) </td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCola + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }

    // Carregando Quarta Tabela
    if (document.getElementById('selectPapelParedeValor').value==1){
        valorTotal= (parseFloat(valorRolo)+parseFloat(valorCola));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

    pagina = "pagePapelParede";
    entrarDireito('pageResultado','pagePapelParede');
}
//-------------------------------------------------------------------------Parede--------------------------------------------------------------------//
//---------------------------------------------bloco Barro-----------------//
function blocoBarroLimpar(){
    document.getElementById('selectBlocoBarro').value=0;
    document.getElementById('trBlocoBarroComprimento').style.display='table-row';
    document.getElementById('trBlocoBarroAltura').style.display='table-row';   
    document.getElementById('trBlocoBarroQuadrado').style.display='none';
    document.getElementById('blocoBarroComprimento').value="";
    document.getElementById('blocoBarroComprimento').value="";
    document.getElementById('blocoBarroQuadrado').value="";
    document.getElementById('selectBlocoBarroMedida').value=0;
    document.getElementById('selectBlocoBarroJunta').value=1;
    document.getElementById('selectBlocoBarroValor').value=0;
    document.getElementById('selectBlocoBarroMetro').value=0;
    document.getElementById('selectBlocoBarroCimento').value=0;
    document.getElementById('selectBlocoBarroAreia').value=0;
    document.getElementById('tableBlocoBarroValor').style.display='none';
    selectBlocoBarroValor
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeBlocoBarro');
    var tr = '';
    table.innerHTML = tr
}
function blocoBarroOpcao(){
	if(document.getElementById('selectBlocoBarro').value==0){
        document.getElementById('trBlocoBarroComprimento').style.display='table-row';
        document.getElementById('trBlocoBarroAltura').style.display='table-row';
        document.getElementById('trBlocoBarroQuadrado').style.display='none';
        document.getElementById('blocoBarroAltura').value="";
        document.getElementById('blocoBarroComprimento').value="";
        document.getElementById('infoBlocoBarroErro1').style.display='none';
        document.getElementById('trBlocoBarrobotao').style.display='table-row';
        document.getElementById('tableBlocoBarroMedida').style.display='table';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
    }else{
        document.getElementById('trBlocoBarroAltura').style.display='none';
        document.getElementById('trBlocoBarroComprimento').style.display='none';
        document.getElementById('trBlocoBarroQuadrado').style.display='table-row';
        document.getElementById('blocoBarroQuadrado').value="";
        document.getElementById('infoBlocoBarroErro1').style.display='none';
        document.getElementById('tableBlocoBarroMedida').style.display='none';
        document.getElementById('trBlocoBarrobotao').style.display='none';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
       }
}
function blocoBarroValorOpcao(){
	if(document.getElementById('selectBlocoBarroValor').value==0){
        document.getElementById('tableBlocoBarroValor').style.display='none';

    }else{
        document.getElementById('tableBlocoBarroValor').style.display='table';
    }
}
function AddBlocoBarro(){
    var altura = document.getElementById('blocoBarroAltura').value;
    var comprimento = document.getElementById('blocoBarroComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoBlocoBarroErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=0;
        document.getElementById('infoBlocoBarroErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeBlocoBarro');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('blocoBarroAltura').value="";
        document.getElementById('blocoBarroComprimento').value="";
    }
}
function blocoBarroCalcular(){
    var junta;
    
    valorPeca = document.getElementById('blocoBarroValorPeca').value; 
    valorAreia = document.getElementById('blocoBarroValorAreia').value; 
    valorCimento = document.getElementById('blocoBarroValorCimento').value; 
 
    //validando campos e medidas da parede
    if(document.getElementById('selectBlocoBarro').value==0){
        if( metroQuadrado==0){
            document.getElementById('infoBlocoBarroErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoBarroErro1').style.display='none';
        }   
    }else{
        metroQuadrado = document.getElementById('blocoBarroQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoBlocoBarroErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoBarroErro1').style.display='none';
        }   
    }
    //Medidas tijolo
    switch (document.getElementById('selectBlocoBarroMedida').value) {
        case "0":
        alturaPeca=0.055;
        larguraPeca=0.09;
        comrpimentoPeca=0.19;
        break;
        case "1":
        alturaPeca=0.05 ;
        larguraPeca=0.10;
        comrpimentoPeca=0.21;
        break;
        case "2":
        alturaPeca=0.055;
        larguraPeca=0.105;
        comrpimentoPeca=0.225;
        break;
        case "3":
        alturaPeca=0.055;
        larguraPeca=0.11;
        comrpimentoPeca=0.23;
        break;
        case "4":
        alturaPeca=0.09;
        larguraPeca=0.14;
        comrpimentoPeca=0.29;
        break;
    }
    //Junta Tijolo 
    switch (document.getElementById('selectBlocoBarroJunta').value) {
        case "0":
        junta= 0.01;
        break;
        case "1":
        junta =0.015;
        break;
        case "2":
        junta =0.02;
        break;
    }
      //Validando Campos e Valores 
    if(document.getElementById('selectBlocoBarroValor').value==1){
          if( valorPeca==0 || valorCimento==0 ||valorAreia==0 ){
            document.getElementById('infoBlocoBarroErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoBlocoBarroErro3').style.display='none';
            
        }
    }
    //calculo de quantidade de tijolos por metros quadrado
    metroquadradoPeca=(1 / ((comrpimentoPeca+junta)*(alturaPeca+junta)));
    //Calculando metro cubico argamassa 
    argamassa = (1 - (metroquadradoPeca*(comrpimentoPeca*alturaPeca)))*larguraPeca;
   // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        cimento = ((argamassa*metroQuadrado) /7*1200);
        areia=(argamassa*metroQuadrado) /7 *6*1500;
        massa =cimento+areia;
        //Linha Pastilhas Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*metroquadradoPeca) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (argamassa*metroQuadrado).toFixed(4)  + ' M³</td>';
        tr += '</tr>';
        //Linha trAÇO  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> 1 : 6 </td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado*metroquadradoPeca*1.05);
        recomendadoArgamassa = (argamassa*metroQuadrado*1.10).toFixed(4);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        massa= (massa*1.10);
        cimento= (cimento*1.10);
        areia= (areia*1.10);
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Argamassa Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' M³</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG. <br> ' + (cimento/21.6).toFixed(2)  + ' Lt (18l)</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(2)  +' Lt (18l)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }   
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
            if (document.getElementById('selectBlocoBarroValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha tijolo
            switch (document.getElementById('selectBlocoBarroMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil(recomendadoQuadrado /10)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado /10) +' PÇS. (10 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorPeca= (Math.ceil(recomendadoQuadrado /1000)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado/1000) +' Milheiro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoBarroCimento').value) {
                case "0":
                valorCimento= (Math.ceil(cimento /50)* valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento /50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil(cimento) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoBarroAreia').value) {
                case "0":
                valorAreia= (Math.ceil(areia /20)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia= (Math.ceil(areia /750)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia= (Math.ceil(areia /1500)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /1500) +' M³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    
    // Carregando Quarta Tabela
    if (document.getElementById('selectBlocoBarroValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageBlocoBarro";
    entrarDireito('pageResultado','pageBlocoBarro');

}
//---------------------------------------------Bloco Concreto--------------//
function blocoConcretoLimpar(){
    document.getElementById('selectBlocoConcreto').value=0;
    document.getElementById('trBlocoConcretoComprimento').style.display='table-row';
    document.getElementById('trBlocoConcretoAltura').style.display='table-row';   
    document.getElementById('trBlocoConcretoQuadrado').style.display='none';
    document.getElementById('blocoConcretoComprimento').value="";
    document.getElementById('blocoConcretoComprimento').value="";
    document.getElementById('blocoConcretoQuadrado').value="";
    document.getElementById('selectBlocoConcretoMedida').value=0;
    document.getElementById('selectBlocoConcretoJunta').value=1;
    document.getElementById('selectBlocoConcretoValor').value=0;
    document.getElementById('selectBlocoConcretoMetro').value=0;
    document.getElementById('selectBlocoConcretoCimento').value=0;
    document.getElementById('selectBlocoConcretoAreia').value=0;
    document.getElementById('tableBlocoConcretoValor').style.display='none';
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeBlocoConcreto');
    var tr = '';
    table.innerHTML = tr
}
function blocoConcretoOpcao(){
	if(document.getElementById('selectBlocoConcreto').value==0){
        document.getElementById('trBlocoConcretoComprimento').style.display='table-row';
        document.getElementById('trBlocoConcretoAltura').style.display='table-row';
        document.getElementById('trBlocoConcretoQuadrado').style.display='none';
        document.getElementById('blocoConcretoAltura').value="";
        document.getElementById('blocoConcretoComprimento').value="";
        document.getElementById('infoBlocoConcretoErro1').style.display='none';
        document.getElementById('trBlocoConcretobotao').style.display='table-row';
        document.getElementById('tableBlocoConcretoMedida').style.display='table';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
    }else{
        document.getElementById('trBlocoConcretoAltura').style.display='none';
        document.getElementById('trBlocoConcretoComprimento').style.display='none';
        document.getElementById('trBlocoConcretoQuadrado').style.display='table-row';
        document.getElementById('blocoConcretoQuadrado').value="";
        document.getElementById('infoBlocoConcretoErro1').style.display='none';
        document.getElementById('tableBlocoConcretoMedida').style.display='none';
        document.getElementById('trBlocoConcretobotao').style.display='none';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
       }
}
function blocoConcretoValorOpcao(){
	if(document.getElementById('selectBlocoConcretoValor').value==0){
        document.getElementById('tableBlocoConcretoValor').style.display='none';

    }else{
        document.getElementById('tableBlocoConcretoValor').style.display='table';
    }
}
function AddBlocoConcreto(){3
    var altura = document.getElementById('blocoConcretoAltura').value;
    var comprimento = document.getElementById('blocoConcretoComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoBlocoConcretoErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=0;
        document.getElementById('infoBlocoConcretoErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeBlocoConcreto');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('blocoConcretoAltura').value="";
        document.getElementById('blocoConcretoComprimento').value="";
    }
}
function blocoConcretoCalcular(){
    var junta;
        valorPeca = document.getElementById('blocoConcretoValorPeca').value; 
    valorAreia = document.getElementById('blocoConcretoValorAreia').value; 
    valorCimento = document.getElementById('blocoConcretoValorCimento').value; 
     //validando campos e medidas da parede
    if(document.getElementById('selectBlocoConcreto').value==0){
        if( metroQuadrado==0){
            document.getElementById('infoBlocoConcretoErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoConcretoErro1').style.display='none';
        }   
    }else{
        metroQuadrado = document.getElementById('blocoConcretoQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoBlocoConcretoErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoConcretoErro1').style.display='none';
        }   
    }
    //Medidas tijolo
    switch (document.getElementById('selectBlocoConcretoMedida').value) {
        case "0":
        alturaPeca=0.19;
        larguraPeca=0.09;
        comrpimentoPeca=0.39;
        break;
        case "1":
        alturaPeca=0.19 ;
        larguraPeca=0.115;
        comrpimentoPeca=0.39;
        break;
        case "2":
        alturaPeca=0.19;
        larguraPeca=0.14;
        comrpimentoPeca=0.39;
        break;
        case "3":
        alturaPeca=0.19;
        larguraPeca=0.19;
        comrpimentoPeca=0.39;
        break;
     }
    //Junta Tijolo 
    switch (document.getElementById('selectBlocoConcretoJunta').value) {
        case "0":
        junta= 0.01;
        break;
        case "1":
        junta =0.015;
        break;
        case "2":
        junta =0.02;
        break;
    }
      //Validando Campos e Valores 
    if(document.getElementById('selectBlocoConcretoValor').value==1){
          if( valorPeca==0 || valorCimento==0 ||valorAreia==0 ){
            document.getElementById('infoBlocoConcretoErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoBlocoConcretoErro3').style.display='none';
            
        }
    }
    //calculo de quantidade de tijolos por metros quadrado
    metroquadradoPeca=(1 / ((comrpimentoPeca+junta)*(alturaPeca+junta)));
    //Calculando metro cubico argamassa 
    argamassa = (1 - (metroquadradoPeca*(comrpimentoPeca*alturaPeca)))*larguraPeca;
   // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        cimento = ((argamassa*metroQuadrado) /7*1200);
        areia=(argamassa*metroQuadrado) /7 *6*1500;
        massa =cimento+areia;
        //Linha Pastilhas Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*metroquadradoPeca) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (argamassa*metroQuadrado).toFixed(4)  + ' M³</td>';
        tr += '</tr>';
        //Linha trAÇO  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> 1 : 6 </td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado*metroquadradoPeca*1.05);
        recomendadoArgamassa = (argamassa*metroQuadrado*1.10).toFixed(4);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        massa= (massa*1.10);
        cimento= (cimento*1.10);
        areia= (areia*1.10);
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Argamassa Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' M³</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG. <br> ' + (cimento/21.6).toFixed(2)  + ' Lt(18l)</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(2)  +' Lt(18l)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }   
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
            if (document.getElementById('selectBlocoConcretoValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha tijolo
            switch (document.getElementById('selectBlocoConcretoMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' Pcs.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil(recomendadoQuadrado /10)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado /10) +' PÇS. (10 UN.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorPeca= (Math.ceil(recomendadoQuadrado /1000)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado/1000) +' Milheiro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoConcretoCimento').value) {
                case "0":
                valorCimento= (Math.ceil(cimento /50)* valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento /50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil(cimento) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoConcretoAreia').value) {
                case "0":
                valorAreia= (Math.ceil(areia /20)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia= (Math.ceil(areia /750)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia= (Math.ceil(areia /1500)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /1500) +' M ³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectBlocoConcretoValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageBlocoConcreto";
    entrarDireito('pageResultado','pageBlocoConcreto');
}
//---------------------------------------------Bloco Ceramica--------------//
function blocoCeramicaLimpar(){
    document.getElementById('selectBlocoCeramica').value=0;
    document.getElementById('trBlocoCeramicaComprimento').style.display='table-row';
    document.getElementById('trBlocoCeramicaAltura').style.display='table-row';   
    document.getElementById('trBlocoCeramicaQuadrado').style.display='none';
    document.getElementById('blocoCeramicaComprimento').value="";
    document.getElementById('blocoCeramicaComprimento').value="";
    document.getElementById('blocoCeramicaQuadrado').value="";
    document.getElementById('selectBlocoCeramicaMedida').value=0;
    document.getElementById('selectBlocoCeramicaJunta').value=1;
    document.getElementById('selectlocoCeramicaValor').value=0;
    document.getElementById('selectlocoCeramicaMetro').value=0;
    document.getElementById('selectlocoCeramicaCimento').value=0;
    document.getElementById('selectlocoCeramicaAreia').value=0;
    document.getElementById('tablelocoCeramicaValor').style.display='none';
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredeBlocoCeramica');
    var tr = '';
    table.innerHTML = tr
}
function blocoCeramicaOpcao(){
	if(document.getElementById('selectBlocoCeramica').value==0){
        document.getElementById('trBlocoCeramicaComprimento').style.display='table-row';
        document.getElementById('trBlocoCeramicaAltura').style.display='table-row';
        document.getElementById('trBlocoCeramicaQuadrado').style.display='none';
        document.getElementById('blocoCeramicaAltura').value="";
        document.getElementById('blocoCeramicaComprimento').value="";
        document.getElementById('infoBlocoCeramicaErro1').style.display='none';
        document.getElementById('trBlocoCeramicabotao').style.display='table-row';
        document.getElementById('tableBlocoCeramicaMedida').style.display='table';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
    }else{
        document.getElementById('trBlocoCeramicaAltura').style.display='none';
        document.getElementById('trBlocoCeramicaComprimento').style.display='none';
        document.getElementById('trBlocoCeramicaQuadrado').style.display='table-row';
        document.getElementById('blocoCeramicaQuadrado').value="";
        document.getElementById('infoBlocoCeramicaErro1').style.display='none';
        document.getElementById('tableBlocoCeramicaMedida').style.display='none';
        document.getElementById('trBlocoCeramicabotao').style.display='none';
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredeRevestimento');
        var tr = '';
        table.innerHTML = tr; 
       }
}
function blocoCeramicaValorOpcao(){
	if(document.getElementById('selectBlocoCeramicaValor').value==0){
        document.getElementById('tableBlocoCeramicaValor').style.display='none';

    }else{
        document.getElementById('tableBlocoCeramicaValor').style.display='table';
    }
}
function AddBlocoCeramica(){
    var altura = document.getElementById('blocoCeramicaAltura').value;
    var comprimento = document.getElementById('blocoCeramicaComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoBlocoCeramicaErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=0;
        document.getElementById('infoBlocoCeramicaErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredeBlocoCeramica');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('blocoCeramicaAltura').value="";
        document.getElementById('blocoCeramicaComprimento').value="";
    }
}
function blocoCeramicaCalcular(){
    var junta;
        valorPeca = document.getElementById('blocoCeramicaValorPeca').value; 
    valorAreia = document.getElementById('blocoCeramicaValorAreia').value; 
    valorCimento = document.getElementById('blocoCeramicaValorCimento').value; 
 
    //validando campos e medidas da parede
    if(document.getElementById('selectBlocoCeramica').value==0){
        if( metroQuadrado==0){
            document.getElementById('infoBlocoCeramicaErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoCeramicaErro1').style.display='none';
        }   
    }else{
        metroQuadrado = document.getElementById('blocoCeramicaQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoBlocoCeramicaErro1').style.display='table-row';
         return false;
        }else{
            document.getElementById('infoBlocoCeramicaErro1').style.display='none';
        }   
    }
    //Medidas tijolo
    switch (document.getElementById('selectBlocoCeramicaMedida').value) {
        case "0":
        alturaPeca=0.14;
        larguraPeca=0.115;
        comrpimentoPeca=0.19;
        break;
        case "1":
        alturaPeca=0.19 ;
        larguraPeca=0.09;
        comrpimentoPeca=0.19;
        break;
        case "2":
        alturaPeca=0.19;
        larguraPeca=0.09;
        comrpimentoPeca=0.29;
        break;
        case "3":
        alturaPeca=0.19;
        larguraPeca=0.115;
        comrpimentoPeca=0.29;
        break;
        case "4":
        alturaPeca=0.19;
        larguraPeca=0.14;
        comrpimentoPeca=0.29;
        break;
    }
    //Junta Tijolo 
    switch (document.getElementById('selectBlocoCeramicaJunta').value) {
        case "0":
        junta= 0.01;
        break;
        case "1":
        junta =0.015;
        break;
        case "2":
        junta =0.02;
        break;
    }
      //Validando Campos e Valores 
    if(document.getElementById('selectBlocoCeramicaValor').value==1){
          if( valorPeca==0 || valorCimento==0 ||valorAreia==0 ){
            document.getElementById('infoBlocoCeramicaErro3').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoBlocoCeramicaErro3').style.display='none';
            
        }
    }
    //calculo de quantidade de tijolos por metros quadrado
    metroquadradoPeca=(1 / ((comrpimentoPeca+junta)*(alturaPeca+junta)));
    //Calculando metro cubico argamassa 
    argamassa = (1 - (metroquadradoPeca*(comrpimentoPeca*alturaPeca)))*larguraPeca;
   // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        cimento = ((argamassa*metroQuadrado) /7*1200);
        areia=(argamassa*metroQuadrado) /7 *6*1500;
        massa =cimento+areia;
        //Linha Pastilhas Peças  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro (Peças)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado*metroquadradoPeca) + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (argamassa*metroQuadrado).toFixed(4)  + ' M³</td>';
        tr += '</tr>';
        //Linha trAÇO  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Traço</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> 1 : 6 </td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoQuadrado= Math.ceil(metroQuadrado*metroquadradoPeca*1.05);
        recomendadoArgamassa = (argamassa*metroQuadrado*1.10).toFixed(4);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        massa= (massa*1.10);
        cimento= (cimento*1.10);
        areia= (areia*1.10);
        //Linha Peças
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Tijolo de Barro</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' PÇS.</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Argamassa Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoArgamassa + ' M³</td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Massa  Assentamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (massa).toFixed(2)  + ' KG.</td>';
        tr += '</tr>';
        //Linha Cimento  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cimento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (cimento).toFixed(2)  + ' KG. <br> ' + (cimento/21.6).toFixed(2)  + ' Lt (18l)</td>';
        tr += '</tr>';
        //Linha Areia  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areia Média </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (areia).toFixed(2)  + ' KG. <br> ' + (areia/27).toFixed(2)  +' Lt (18l)</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }   
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
            if (document.getElementById('selectBlocoCeramicaValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha tijolo
            switch (document.getElementById('selectBlocoCeramicaMetro').value) {
                case "0":
                valorPeca = (recomendadoQuadrado * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoQuadrado +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil(recomendadoQuadrado /10)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado /10) +' PÇS (10 Un.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorPeca= (Math.ceil(recomendadoQuadrado /1000)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Tijolo de Barro</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoQuadrado/1000) +' Milheiro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoCeramicaCimento').value) {
                case "0":
                valorCimento= (Math.ceil(cimento /50)* valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento /50) +' PCT. (50 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorCimento = (Math.ceil(cimento) * valorCimento).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Cimento </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(cimento) +' KG.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCimento + '</td>';
                tr += '</tr>';
                break;
            }
            switch (document.getElementById('selectBlocoCeramicaAreia').value) {
                case "0":
                valorAreia= (Math.ceil(areia /20)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /20) +' PCT. (20 KG.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorAreia= (Math.ceil(areia /750)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /750) +' (1/5 M³)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorAreia= (Math.ceil(areia /1500)* valorAreia).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Areia Media </td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(areia /1500) +' M³</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAreia + '</td>';
                tr += '</tr>';
                break;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectBlocoCeramicaValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorCimento)+parseFloat(valorAreia));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageBlocoCeramica";
    entrarDireito('pageResultado','pageBlocoCeramica');

}
//-------------------------------------------------------------------------Telhado--------------------------------------------------------------------//
//---------------------------------------------Telha de Barro--------------//
function telhadoBarroLimpar(){
    document.getElementById('telhadoBarroFrente').value="";
    document.getElementById('telhadoBarroProfundidade').value="";
    document.getElementById('selectTelhadoBarroModelo').value=2;
    document.getElementById('selectTelhadoBarroAgua').value=0;
    document.getElementById('tableCumeeira').style.display='none';
    document.getElementById('hrCumeeira').style.display='none';
    document.getElementById('tableCumeeira').style.display='none';
    document.getElementById('tableTelhadoBarroCumeeira').style.display='none';
    document.getElementById('selectTelhadoBarroCumeeira').value=0;
    document.getElementById('selectTelhadoBarroValor').value=0;
    document.getElementById('tableTelhadoBarroValor').style.display='none';
    document.getElementById('telhadoBarroValorTelha').value="";
    document.getElementById('telhadoBarroValorCumeeira').value="";
    document.getElementById('trTelhadoBarroCumeeira').style.display='none';
    document.getElementById('selectTelhadoBarroTelha').value=0;
}
function telhadoBarroCumeeira(){
    if(document.getElementById('selectTelhadoBarroCumeeira').value==0){
        document.getElementById('tableTelhadoBarroCumeeira').style.display='none';
        document.getElementById('trTelhadoBarroCumeeira').style.display='none';
    }else{
        document.getElementById('tableTelhadoBarroCumeeira').style.display='table';
        document.getElementById('trTelhadoBarroCumeeira').style.display='table-row';
    }
}
function telhadoBarroValorOpcao(){
    if(document.getElementById('selectTelhadoBarroValor').value==0){
        document.getElementById('tableTelhadoBarroValor').style.display='none';
    }else{
        document.getElementById('tableTelhadoBarroValor').style.display='table';
    }
}
function telhadoBarroAguaOpcao(){
       //Modelo das Telhas 
       switch (document.getElementById('selectTelhadoBarroAgua').value) {
        case "0":
            document.getElementById('tableCumeeira').style.display='none';
            document.getElementById('hrCumeeira').style.display='none';
            document.getElementById('tableCumeeira').style.display='none';
            document.getElementById('tableTelhadoBarroCumeeira').style.display='none';
            document.getElementById('selectTelhadoBarroCumeeira').value=0;
                break;
        case "1":
            document.getElementById('tableCumeeira').style.display='table';
            document.getElementById('hrCumeeira').style.display='flex';
        break;
        case "2":
            document.getElementById('tableCumeeira').style.display='table';
            document.getElementById('hrCumeeira').style.display='flex';
        break;
        case "3":
            document.getElementById('tableCumeeira').style.display='table';
            document.getElementById('hrCumeeira').style.display='flex';
        break;
    } 
}
function telhadoBarroCalcular(){
    largura = document.getElementById('telhadoBarroFrente').value; 
    comprimento = document.getElementById('telhadoBarroProfundidade').value;
    comrpimentoPeca=0, metroLinear = 0, valorCumeeira =0;
    comrpimentoPeca = document.getElementById('telhadoBarroComprimentoCumeeira').value;
    valorPeca=  document.getElementById('telhadoBarroValorTelha').value;
    valorCumeeira =document.getElementById('telhadoBarroValorCumeeira').value;
      //Validando Medidas
    if( largura==0 || comprimento==0){
        document.getElementById('infoTelhadoBarroErro1').style.display='table-row';
        return false;
    }else{
        metroQuadrado=(largura*comprimento).toFixed(2);
        document.getElementById('infoTelhadoBarroErro1').style.display='none';
    }
    //Modelo das Telhas 
    switch (document.getElementById('selectTelhadoBarroModelo').value) {
        case "0":
        tipoTelha='Americana';
        inclinacao= '30%';
        areaInclinacao=(metroQuadrado*1.044).toFixed(2);
        telha = Math.ceil(areaInclinacao*16);
        break;
        case "1":
        tipoTelha='Colonial';
        inclinacao= '30%';
        areaInclinacao=(metroQuadrado*1.044).toFixed(2);
        telha = Math.ceil(areaInclinacao*24);
        break;
        case "2":
        tipoTelha='Francesa';
        inclinacao= '36%';
        areaInclinacao=(metroQuadrado*1.063).toFixed(2);
        telha = Math.ceil(areaInclinacao*16);
        break;
        case "3":
        tipoTelha='Italiana';
        inclinacao= '30%';
        areaInclinacao=(metroQuadrado*1.044).toFixed(2);
        telha = Math.ceil(areaInclinacao*14);
        break;
        case "4":
        tipoTelha='Portuguesa';
        inclinacao= '30%';
        areaInclinacao=(metroQuadrado*1.044).toFixed(2);
        telha = Math.ceil(areaInclinacao*17);
        break;
        case "5":
        tipoTelha='Romana';
        inclinacao= '30%';
        areaInclinacao=(metroQuadrado*1.044).toFixed(2);
        telha = Math.ceil(areaInclinacao*16);
        break;
    }
    //Modelo do telhado (calcular metro linear da cumeeira)
    switch (document.getElementById('selectTelhadoBarroAgua').value) {
        case "0":
            metroLinear = 0;
        break;
        case "1":
            metroLinear = Math.ceil(comprimento);
        break;
        case "2":
            if (largura>comprimento){
                metroLinear = Math.ceil((largura-(comprimento/2))+(comprimento/2)*2.088) ;
            }else{
                metroLinear = Math.ceil((comprimento-(largura/2))+(largura/2)*2.088) ;
            }
         break;
        case "3":
        if (largura>comprimento){
            metroLinear = Math.ceil((largura-(comprimento/2))+(comprimento/2)*4.176) ;
        }else{
            metroLinear = Math.ceil((comprimento-(largura/2))+(largura/2)*4.176) ;
        }
        break;
    }
    //Validando Cumeeira
    if(document.getElementById('selectTelhadoBarroCumeeira').value==1){
          if( comrpimentoPeca==0){
            document.getElementById('infoTelhadoBarroErro2').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoTelhadoBarroErro2').style.display='none';
        }
    }
      //Validando Campos e Valores 
    if(document.getElementById('selectTelhadoBarroValor').value==1){
        if( valorPeca==0 ){
          document.getElementById('infoTelhadoBarroErro3').style.display='table-row';
          return false;
        }else{
          document.getElementById('infoTelhadoBarroErro3').style.display='none';
        }

        if(document.getElementById('selectTelhadoBarroCumeeira').value==1){
            if( valorCumeeira==0 ){
                document.getElementById('infoTelhadoBarroErro3').style.display='table-row';
            return false;
            }else{
                document.getElementById('infoTelhadoBarroErro3').style.display='none'; 
            }
        }
    }

   // Carregando Primeira Tabela
   if (metroQuadrado!=0){ 
    var table = document.getElementById('resultado1');
    var tr = '';
    //Tipo de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Modelo de Telha</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + tipoTelha + ' </td>';
    tr += '</tr>';
    //inclinação
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Inclinação</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + inclinacao + ' </td>';
    tr += '</tr>';
    //Linha Pastilhas Peças  
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Telhado</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroQuadrado) + ' M²</td>';
    tr += '</tr>';
    //Tipo de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Área de Inclinação</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + areaInclinacao + ' </td>';
    tr += '</tr>';
    //Tipo de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Quantidade de Telha</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + telha + ' PÇS.</td>';
    tr += '</tr>';
    //Cumeeira
    if (comrpimentoPeca!=0){
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Cumeeira</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + Math.ceil(metroLinear/comrpimentoPeca) + ' PÇS.</td>';
        tr += '</tr>';
    }
    table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        recomendadoTelha =Math.ceil(telha*1.10);
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Tipo de Telha
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Modelo de Telha</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + tipoTelha + ' </td>';
        tr += '</tr>';
        //Linha Argamassa  
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Telha</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoTelha + ' PÇS.</td>';
        tr += '</tr>';
        //Cumeeira
        if (comrpimentoPeca!=0){
            recomendadoCumeeira = Math.ceil((metroLinear/comrpimentoPeca)*1.10);
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Cumeeira</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCumeeira  + ' PÇS.</td>';
            tr += '</tr>';
        }
        table.innerHTML = tr; 
    }   
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
            if (document.getElementById('selectTelhadoBarroValor').value==1){
            document.getElementById('tableResultado1').style.display='table';
            document.getElementById('hrResultado1').style.display='flex';
            var table = document.getElementById('resultado3');
            var tr = '';
            //Linha tijolo
            switch (document.getElementById('selectTelhadoBarroTelha').value) {
                case "0":
                valorPeca = (recomendadoTelha * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td id="linha1A" class="coluna2 alinha" style="text-align: left; width: 30%;">Telha </td>';
                tr += '<td id="linha1B" class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoTelha +' PÇS.</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil(recomendadoTelha /1000)* valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Telha</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + Math.ceil(recomendadoTelha/1000) +' Milheiro</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
            if (comrpimentoPeca!=0){
                valorCumeeira = (recomendadoCumeeira * valorCumeeira).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Cumeeira</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoCumeeira +' PÇS. </td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCumeeira + '</td>';
                tr += '</tr>';
            }else{
                valorCumeeira=0;
            }
            table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectTelhadoBarroValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorCumeeira));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pageTelhadoBarro";
    entrarDireito('pageResultado','pageTelhadoBarro');
}
//---------------------------------------------Telha de Cimento--------------//
function telhadoCimentoAguaOpcao(){
       //Modelo das Telhas 
       switch (document.getElementById('selectTelhadoCimentoAgua').value) {
        case "0":
            document.getElementById('tableTelhadoCimentoCumeeira1').style.display='none';
            document.getElementById('hrCumeeiraCimento').style.display='none';
            document.getElementById('tableTelhadoCimentoCumeeira2').style.display='none';
            document.getElementById('selectTelhadoCimentoCumeeira').value=0;
        break;
        case "1":
            document.getElementById('tableTelhadoCimentoCumeeira1').style.display='none';
            document.getElementById('hrCumeeiraCimento').style.display='none';
            document.getElementById('tableTelhadoCimentoCumeeira2').style.display='none';
            document.getElementById('selectTelhadoCimentoCumeeira').value=0;
        break;
        case "2":
            document.getElementById('tableTelhadoCimentoCumeeira1').style.display='table';
            document.getElementById('hrCumeeiraCimento').style.display='flex';
        break;

    } 
}
function telhadoCimentoCumeeira(){
    if(document.getElementById('selectTelhadoCimentoCumeeira').value==0){
        document.getElementById('tableTelhadoCimentoCumeeira2').style.display='none';
        document.getElementById('trTelhadoCimentoCumeeira').style.display='none';
    }else{
        document.getElementById('tableTelhadoCimentoCumeeira2').style.display='table';
        document.getElementById('trTelhadoCimentoCumeeira').style.display='table-row';
    }
}
function telhadoCimentoValorOpcao(){
    if(document.getElementById('selectTelhadoCimentoValor').value==0){
        document.getElementById('tableTelhadoCimentoValor').style.display='none';
    }else{
        document.getElementById('tableTelhadoCimentoValor').style.display='table';
    }
}
function telhadoCimentoLimpar(){
    document.getElementById('telhadoCimentoFrente').value=""; 
    document.getElementById('telhadoCimentoProfundidade').value="";
    document.getElementById('selectTelhadoCimentoAgua').value=1;
    document.getElementById('tableTelhadoCimentoCumeeira1').style.display='none';
    document.getElementById('hrCumeeiraCimento').style.display='none';
    document.getElementById('tableTelhadoCimentoCumeeira2').style.display='none';
    document.getElementById('selectTelhadoCimentoCumeeira').value=0;
    document.getElementById('telhadoCimentoComprimentoCumeeira').value=""; 
    document.getElementById('selectTelhadoCimentoMedida').value=0;
    document.getElementById('selectTelhadoCimentoValor').value=0;
    document.getElementById('tableTelhadoCimentoValor').style.display='none';
    document.getElementById('telhadoCimentoValorTelha').value="";
    document.getElementById('telhadoCimentoValorCumeeira').value="";
    document.getElementById('trTelhadoCimentoCumeeira').style.display='none';
    document.getElementById('infoTelhadoCimentoErro1').style.display='none';
    document.getElementById('infoTelhadoCimentoErro2').style.display='none';
    document.getElementById('infoTelhadoCimentoErro3').style.display='none';
    document.getElementById('infoTelhadoCimentoErro4').style.display='none';
}
function telhadoCimentoCalcular(){
    largura = document.getElementById('telhadoCimentoFrente').value; 
    comprimento = document.getElementById('telhadoCimentoProfundidade').value;
    cumeeira = document.getElementById('telhadoCimentoComprimentoCumeeira').value;
    valorPeca= document.getElementById('telhadoCimentoValorTelha').value;
    valorCumeeira= document.getElementById('telhadoCimentoValorCumeeira').value;
    //Validando Campos e Valores 
    if( largura==0 || comprimento==0 ){
          document.getElementById('infoTelhadoCimentoErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=(largura*comprimento).toFixed(2);
        document.getElementById('infoTelhadoCimentoErro1').style.display='none';  
    }
    //Validando Cumeeira
    if(document.getElementById('selectTelhadoCimentoCumeeira').value==1){
        if( cumeeira==0){
            document.getElementById('infoTelhadoCimentoErro2').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoTelhadoCimentoErro2').style.display='none';
        }
    }
    //Validando Medida da Telha 
    if(document.getElementById('selectTelhadoCimentoMedida').value==0){
        document.getElementById('infoTelhadoCimentoErro3').style.display='table-row';
        return false;
    }else{
        //Modelo do telhado
        switch (document.getElementById('selectTelhadoCimentoMedida').value) {
            case "1":
                tipoTelha ="110CM X 122CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/1.22));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.22));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.22))*2;
                    break;
                }
            break;
            case "2":
                tipoTelha ="110CM X 153CM ";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/1.53));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.53));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.53))*2;
                    break;
                }
            break;
            case "3":
                tipoTelha ="110CM X 183CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/1.83));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.83));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/1.83))*2;
                    break;
                }
            break;
            case "4":
                tipoTelha ="110CM X 213CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/2.13));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/2.13));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/2.13))*2;
                    break;
                }
            break;
            case "5":
                tipoTelha ="110CM X 244CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/2.44));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/2.44));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/2.44))*2;
                    break;
                }
            break;
            case "6":
                tipoTelha ="110CM X 305CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/3.05));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/3.05));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/3.05))*2;
                    break;
                }
            break;
            case "7":
                tipoTelha ="110CM X 366CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/1.10))*(Math.ceil(comprimento/3.66));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/3.66));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/1.10))*(Math.ceil(largura/3.66))*2;
                    break;
                }
            break;
            case "8":
                tipoTelha ="92CM X 244CM";
                switch (document.getElementById('selectTelhadoCimentoAgua').value) {
                    case "0":
                    comprimento= (comprimento*1.04);
                    telha=(Math.ceil(largura/0.92))*(Math.ceil(comprimento/2.44));
                    break;
                    case "1":
                    largura= (largura*1.04);
                    telha=(Math.ceil(comprimento/0.92))*(Math.ceil(largura/2.44));
                    break;
                    case "2":
                    largura= ((largura/2)*1.04);
                    telha=(Math.ceil(comprimento/0.92))*(Math.ceil(largura/2.44))*2;
                    break;
                }
            break;

        }
        document.getElementById('infoTelhadoCimentoErro3').style.display='none';
    }
    //Validando Campos e Valores 
    if(document.getElementById('selectTelhadoCimentoValor').value==1){
        if( valorPeca==0 ){
          document.getElementById('infoTelhadoCimentoErro4').style.display='table-row';
          return false;
        }else{
          document.getElementById('infoTelhadoCimentoErro4').style.display='none';
        }
    }
    if(document.getElementById('selectTelhadoCimentoCumeeira').value==1){
        if( valorCumeeira==0 ){
            document.getElementById('infoTelhadoCimentoErro4').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoTelhadoCimentoErro4').style.display='none'; 
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
    var table = document.getElementById('resultado1');
    var tr = '';
    //Tipo de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Modelo de Telha</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + tipoTelha + ' </td>';
    tr += '</tr>';
    //inclinação
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Inclinação</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;"> 10 % </td>';
    tr += '</tr>';
    //Tipo de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Telhado</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
    tr += '</tr>';
    //Qunatidade de Telha
    tr += '<tr>';
    tr += '<td class="coluna1 alinha">Quantidade de Telha</td>';
    tr += '<td class="coluna2 alinha" style="text-align: center;">' + telha + ' PÇS.</td>';
    tr += '</tr>';
    //Quantidade de Cumeeira
    if(cumeeira!=0){
        cumeeira = Math.ceil((comprimento)/cumeeira);
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Quantidade de Cumeeira</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + cumeeira + ' PÇS.</td>';
        tr += '</tr>';
    }
    table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Tipo de Telha
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Modelo de Telha</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + tipoTelha + ' </td>';
        tr += '</tr>';
        //Tipo de Telha
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Quantidades de Telha</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + telha + ' PÇS.</td>';
        tr += '</tr>';
        //Cumeeira
        if (cumeeira!=0){
            recomendadoCumeeira =Math.ceil(cumeeira*1.10);
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Quantidades Cumeeira</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoCumeeira  + ' PÇS.</td>';
            tr += '</tr>';
        }
        table.innerHTML = tr; 
    }   

    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectTelhadoCimentoValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';
        var table = document.getElementById('resultado3');
        valorPeca= (telha*valorPeca).toFixed(2);
        var tr = '';
        tr += '<tr>';
        tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Telha</td>';
        tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + telha +' PÇS.</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
        tr += '</tr>';
        //Cumeeira
        if (cumeeira!=0){
            valorCumeeira =(recomendadoCumeeira*valorPeca).toFixed(2);;
            tr += '<tr>';
            tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Telha</td>';
            tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + recomendadoCumeeira +' PÇS.</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorCumeeira + '</td>';
            tr += '</tr>';
        }else{
            valorCumeeira=0
        }
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
      // Carregando Quarta Tabela
    if (document.getElementById('selectTelhadoCimentoValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorCumeeira));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

  pagina = "pageTelhadoCimento";
  entrarDireito('pageResultado','pageTelhadoCimento');
}
//---------------------------------------------Telha de Cimento--------------//
function telhadoPvcValorOpcao(){
    if(document.getElementById('selectTelhadoPvcValor').value==0){
        document.getElementById('tableTelhadoPvcValor').style.display='none';
    }else{
        document.getElementById('tableTelhadoPvcValor').style.display='table';
    }
}
function telhadoPvcMedidaOpcao(){
        //Escolher Forro
    switch (document.getElementById('selectTelhadoPvcMedida').value) {
        case "0":
            document.getElementById('SelecionarForro').innerHTML="Forro PVC (3 metros)";
        break;
        case "1":
            document.getElementById('SelecionarForro').innerHTML="Forro PVC (4 metros)";
        break;
        case "2":
            document.getElementById('SelecionarForro').innerHTML="Forro PVC (5 metros)";
        break;
        case "3":
            document.getElementById('SelecionarForro').innerHTML="Forro PVC (6 metros)";
        break;
    }
}
function telhadoPvcCalcular(){
    largura = document.getElementById('telhadoPvcLargura').value; 
    comprimento = document.getElementById('telhadoPvcComprimento').value;
    valorPeca = document.getElementById('telhadoPvcValorForro').value;
    valorAcabamento= document.getElementById('telhadoPvcValorAcabamento').value;

    //Validando Campos de medidas 
    if( largura==0 || comprimento==0 ){
        document.getElementById('infoTelhadoPvcErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=(largura*comprimento).toFixed(2);
        acabamento=  Math.ceil((largura*2)+(comprimento*2));
        document.getElementById('infoTelhadoPvcErro1').style.display='none';  
    }
    //Validando direção 
    if(document.getElementById('selectTelhadoPvcdirecao').value==0){
        //Horizontal
        largura = document.getElementById('telhadoPvcLargura').value; 
        comprimento = document.getElementById('telhadoPvcComprimento').value;
        metroLinear = Math.ceil(Math.ceil(comprimento/0.20)*largura);        
    }else{
        //Vertical
        comprimento = document.getElementById('telhadoPvcLargura').value; 
        largura = document.getElementById('telhadoPvcComprimento').value;
        metroLinear = Math.ceil(Math.ceil(comprimento/0.20)*largura);  
        }

    //Escolher Forro
    switch (document.getElementById('selectTelhadoPvcMedida').value) {
        case "0":
            if(largura>3){
                document.getElementById('infoTelhadoPvcErro2').style.display='table-row'
                return false;
            }else{
                document.getElementById('infoTelhadoPvcErro2').style.display='none'
                medidaPvc = Math.ceil(Math.ceil(comprimento/0.20) / Math.trunc(3/largura));
                quantidadeForro = "3"; 
            }
        break;
        case "1":
        if(largura>4){
            document.getElementById('infoTelhadoPvcErro2').style.display='table-row'
            return false;
        }else{
            document.getElementById('infoTelhadoPvcErro2').style.display='none'
            medidaPvc = Math.ceil(Math.ceil(comprimento/0.20) / Math.trunc(4/largura));
            quantidadeForro = "4";
        }
        break;
        case "2":
        if(largura>5){
            document.getElementById('infoTelhadoPvcErro2').style.display='table-row'
            return false;
        }else{
            document.getElementById('infoTelhadoPvcErro2').style.display='none'
            medidaPvc = Math.ceil(Math.ceil(comprimento/0.20) / Math.trunc(5/largura));
            quantidadeForro = "5";
        }
        break;
        case "3":
        if(largura>6){
            document.getElementById('infoTelhadoPvcErro2').style.display='table-row'
            return false;
        }else{
            document.getElementById('infoTelhadoPvcErro2').style.display='none'
            medidaPvc = Math.ceil(Math.ceil(comprimento/0.20) / Math.trunc(6/largura));
            quantidadeForro = "6";
        }
        break;
    }

   //Validando Campos e Valores 
    if(document.getElementById('selectTelhadoPvcValor').value==1){
        if( valorPeca==0 || valorAcabamento==0 ){
            document.getElementById('infoTelhadoPvcErro3').style.display='table-row';
        return false;
        }else{
            document.getElementById('infoTelhadoPvcErro3').style.display='none'; 
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Forro PVC</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Metro quantidade de barras
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Forro PVC  ( ' + quantidadeForro + '  metros )</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + medidaPvc + ' PÇS.</td>';
        tr += '</tr>';
        //Metro Acabamento
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Acabamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + acabamento + ' Metros</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }

    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        //Metro quantidade de barras
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Forro PVC  ( ' + quantidadeForro + '  Metros )</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + medidaPvc + ' PÇS.</td>';
        tr += '</tr>';
        //Metro Acabamento
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Acabamento</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + acabamento + ' Metros</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }   
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectTelhadoPvcValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';
        var table = document.getElementById('resultado3');
        valorPeca= (medidaPvc*valorPeca).toFixed(2);
        acabamento= Math.ceil(acabamento/6);
        valorAcabamento= (acabamento*valorAcabamento).toFixed(2);
        var tr = '';
        tr += '<tr>';
        tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Forro PVC  ( ' + quantidadeForro + '  m. )</td>';
        tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + medidaPvc +' PÇS.</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
        tr += '</tr>';
        //Acabamento
        tr += '<tr>';
        tr += '<td class="coluna2 alinha" style="text-align: left; width: 30%;">Acabamento</td>';
        tr += '<td class="colunaA alinha" style="text-align: center; width: 35%;">' + acabamento +' PÇS.</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorAcabamento + '</td>';
        tr += '</tr>';
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectTelhadoPvcValor').value==1){
        valorTotal= (parseFloat(valorPeca)+parseFloat(valorAcabamento));
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

  pagina = "pageTelhadoPvc";
  entrarDireito('pageResultado','pageTelhadoPvc');

}
function telhadoPvcLimpar(){
    document.getElementById('telhadoPvcLargura').value=''; 
    document.getElementById('telhadoPvcComprimento').value='';
    document.getElementById('selectTelhadoPvcdirecao').value=0;
    document.getElementById('selectTelhadoPvcMedida').value=3;
    document.getElementById('selectTelhadoPvcValor').value=0;
    document.getElementById('tableTelhadoPvcValor').style.display='none';
    document.getElementById('telhadoPvcValorForro').value=''; 
    document.getElementById('telhadoPvcValorAcabamento').value='';
    document.getElementById('infoTelhadoPvcErro1').style.display='none';
    document.getElementById('infoTelhadoPvcErro2').style.display='none';
    document.getElementById('infoTelhadoPvcErro3').style.display='none';
}
//-------------------------------------------------------------------------Pintura--------------------------------------------------------------------//
//---------------------------------------------Parede Latex--------------//
function pinturaParedeOpcao(){
    if(document.getElementById('selectPinturaParede').value==0){
        document.getElementById('trPinturaParedeComprimento').style.display='table-row';
        document.getElementById('trPinturaParedeAltura').style.display='table-row';
        document.getElementById('trPinturaParedeQuadrado').style.display='none';
        document.getElementById('trPinturaParedebotao').style.display='table-row';
        document.getElementById('tablePinturaParedeMedida').style.display='table';
        document.getElementById('pinturaParedeComprimento').value="";
        document.getElementById('pinturaParedeAltura').value="";
        document.getElementById('infoPinturaParedeErro1').style.display='none'; 
        metroQuadrado=0;
        var table = document.getElementById('paredePintura');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trPinturaParedeComprimento').style.display='none';
        document.getElementById('trPinturaParedeAltura').style.display='none';
        document.getElementById('trPinturaParedeQuadrado').style.display='table-row';
        document.getElementById('trPinturaParedebotao').style.display='none';
        document.getElementById('tablePinturaParedeMedida').style.display='none';
        document.getElementById('pinturaParedeQuadrado').value="";
        document.getElementById('infoPinturaParedeErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredePintura');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function AddPinturaParede(){
    var altura = document.getElementById('pinturaParedeAltura').value;
    var comprimento = document.getElementById('pinturaParedeComprimento').value;
    if(altura==0 || comprimento==0){
        document.getElementById('infoPinturaParedeErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=0;
        document.getElementById('infoPinturaParedeErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredePintura');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('pinturaParedeAltura').value="";
        document.getElementById('pinturaParedeComprimento').value="";
    }
}
function pinturaParedeLimpar(){
    document.getElementById('selectPinturaParede').value=0;
    document.getElementById('trPinturaParedeAltura').style.display='table-row';
    document.getElementById('trPinturaParedeComprimento').style.display='table-row';
    document.getElementById('trPinturaParedeQuadrado').style.display='none';
    document.getElementById('trPinturaParedebotao').style.display='table-row';
    document.getElementById('tablePinturaParedeMedida').style.display='table';
    document.getElementById('pinturaParedeAltura').value="";
    document.getElementById('pinturaParedeComprimento').value="";
    document.getElementById('infoPinturaParedeErro1').style.display='none';
    document.getElementById('selectPinturaParedeDemao').value=1;
    document.getElementById('selectPinturaParedeRendimento').value=0;
    document.getElementById('selectPinturaParedeValor').value=0;
    document.getElementById('tablePinturaParedeValor').style.display='none';
    document.getElementById('pinturaParedeValorTinta').value="";
    metroQuadrado=0;
    contador=0;
    quantidade=0;
    var table = document.getElementById('paredePintura');
    var tr = '';
    table.innerHTML = tr
}
function pinturaParedeRendimento(){
    switch (document.getElementById('selectPinturaParedeRendimento').value) {
        case "0":
        galao=18;
        metroGalao=500;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "1":
        galao=18;
        metroGalao=450;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "2":
        galao=18;
        metroGalao=400;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "3":
        galao=18;
        metroGalao=350;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "4":
        galao=18;
        metroGalao=300;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "5":
        galao=18;
        metroGalao=250;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "6":
        galao=18;
        metroGalao=200;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "7":
        galao=18;
        metroGalao=170;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "8":
        galao=18;
        metroGalao=150;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (18L)";
        break;
        case "9":
        galao=3.6;
        metroGalao=100;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (3,6L)";
        break;
        case "10":
        galao=3.6;
        metroGalao=80;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (3,6L)";
        break;
        case "11":
        galao=3.6;
        metroGalao=60;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (3,6L)";
        break;
        case "12":
        galao=3.6;
        metroGalao=50;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (3,6L)";
        break;
        case "13":
        galao=0.9;
        metroGalao=25;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (0,9L)";
        break;
        case "14":
        galao=0.9;
        metroGalao=20;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (0,9L)";
        break;
        case "15":
        galao=0.9;
        metroGalao=15;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (0,9L)";
        break;
        case "16":
        galao=0.9;
        metroGalao=10;
        document.getElementById('SelecionarPinturaParede').innerHTML="Tinta (0,9L)";
        break;
    }
}
function pinturaParedeValorOpcao(){
    if(document.getElementById('selectPinturaParedeValor').value==0){
        document.getElementById('tablePinturaParedeValor').style.display='none';
    }else{
        document.getElementById('tablePinturaParedeValor').style.display='table';
    }
}
function pinturaParedeCalcular(){
    alert('teste');
    quantidade=0;
    pinturaParedeRendimento();
    valorPeca=document.getElementById('pinturaParedeValorTinta').value;
    //validar medidas
    if(document.getElementById('selectPinturaParede').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoPinturaParedeErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaParedeErro1').style.display='none';
        }
    }else{
        metroQuadrado = document.getElementById('pinturaParedeQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoPinturaParedeErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaParedeErro1').style.display='none';
           }
    }
    //Demão
    switch (document.getElementById('selectPinturaParedeDemao').value) {
        case "0":
        demao = 'Uma';
        quantidade=1;
        break;
        case "1":
        demao = 'Duas';
        quantidade= 2;
        break;
        case "2":
        demao = 'Três';
        quantidade=3;
        break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectPinturaParedeValor').value==1){    
        if(valorPeca==0){
            document.getElementById('infoPinturaParedeErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoPinturaParedeErro2').style.display='none';
        }
    }

    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        quantidade = (Math.ceil(metroQuadrado *quantidade)*galao/metroGalao).toFixed(2);
        metroQuadrado =Math.ceil(metroQuadrado);
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área da Pintura </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + quantidade + ' Litros</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }

    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        quantidade=(quantidade*1.05).toFixed(2);
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areá da Pintura </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + quantidade + ' Litros</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }  
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPinturaParedeValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';
        switch (galao){
            case 18:
            valorPeca= (Math.ceil(quantidade/galao) * valorPeca).toFixed(2);
            metroGalao=Math.ceil(quantidade/galao);
            break;
            case 3.6:
            valorPeca= (Math.ceil(quantidade/galao) * valorPeca).toFixed(2);
            metroGalao=Math.ceil(quantidade/galao);
            break;
            case 0.9:
            valorPeca= (Math.ceil(quantidade/galao) * valorPeca).toFixed(2);
            metroGalao=Math.ceil(quantidade/galao);
            break;
        }
        var table = document.getElementById('resultado3');
        var tr = '';
        tr += '<tr>';
        tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Tinta (Latex)</td>';
        tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + metroGalao +' Lts. ( '+galao+' L.)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
        tr += '</tr>';
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }

    // Carregando Quarta Tabela
    if (document.getElementById('selectPinturaParedeValor').value==1){
        valorTotal= parseFloat(valorPeca);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pagePinturaParede";
    entrarDireito('pageResultado','pagePinturaParede')
}
//---------------------------------------------Textura-------------//
function pinturaTexturaOpcao(){
    if(document.getElementById('selectPinturaTextura').value==0){
        document.getElementById('trPinturaTexturaComprimento').style.display='table-row';
        document.getElementById('trPinturaTexturaAltura').style.display='table-row';
        document.getElementById('trPinturaTexturaQuadrado').style.display='none';
        document.getElementById('trPinturaTexturabotao').style.display='table-row';
        document.getElementById('tablePinturaTexturaMedida').style.display='table';
        document.getElementById('pinturaTexturaComprimento').value="";
        document.getElementById('pinturaTexturaAltura').value="";
        document.getElementById('infoPinturaTexturaErro1').style.display='none'; 
        metroQuadrado=0;
        var table = document.getElementById('paredePintura');
        var tr = '';
        table.innerHTML = tr; 
        contador=0;
    }else{
        document.getElementById('trPinturaTexturaComprimento').style.display='none';
        document.getElementById('trPinturaTexturaAltura').style.display='none';
        document.getElementById('trPinturaTexturaQuadrado').style.display='table-row';
        document.getElementById('trPinturaTexturabotao').style.display='none';
        document.getElementById('tablePinturaTexturaMedida').style.display='none';
        document.getElementById('pinturaTexturaQuadrado').value="";
        document.getElementById('infoPinturaTexturaErro1').style.display='none'; 
        metroQuadrado=0;
        contador=0;
        var table = document.getElementById('paredePintura');
        var tr = '';
        table.innerHTML = tr; 
    }
}
function addPinturaTextura(){
    var altura = document.getElementById('pinturaTexturaAltura').value;
    var comprimento = document.getElementById('pinturaTexturaComprimento').value;
     if(altura==0 || comprimento==0){
        document.getElementById('infoPinturaTexturaErro1').style.display='table-row';
    return false;
    }else{
        metroQuadrado=0;
        document.getElementById('infoPinturaTexturaErro1').style.display='none';  
        contador += 1;
        parede[contador] = parseFloat(altura* comprimento).toFixed(2);
        //Carregando tabela
        var table = document.getElementById('paredePinturaTextura');
        var tr = '';
        //Linha REvestimento
        for (var i = 0;  i < contador; i++) {
            tr += '<tr style="border: 1px solid blue;">';
            tr += '<td class="coluna1 alinha"> '+ (i+1) +'ª Parede</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
            tr += '</tr>'
            metroQuadrado +=  parseFloat(parede[i+1]);
         }
         tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
         tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
         tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
         tr += '</tr>';
        table.innerHTML = tr;
        document.getElementById('pinturaTexturaAltura').value="";
        document.getElementById('pinturaTexturaComprimento').value="";
    }
}
function pinturaTexturaValorOpcao(){
    if(document.getElementById('selectPinturaTexturaValor').value==0){
        document.getElementById('tablePinturaTexturaValor').style.display='none';
    }else{
        document.getElementById('tablePinturaTexturaValor').style.display='table';
    }
}
function pinturaTexturaLimpar(){
    document.getElementById('selectPinturaTextura').value=0;
    document.getElementById('trPinturaTexturaAltura').style.display='table-row';
    document.getElementById('trPinturaTexturaComprimento').style.display='table-row';
    document.getElementById('trPinturaTexturaQuadrado').style.display='none';
    document.getElementById('trPinturaTexturabotao').style.display='table-row';
    document.getElementById('tablePinturaTexturaMedida').style.display='table';
    document.getElementById('pinturaTexturaAltura').value="";
    document.getElementById('pinturaTexturaComprimento').value="";
    document.getElementById('infoPinturaTexturaErro1').style.display='none';
    document.getElementById('selectPinturaTexturaTipo').value=0;
    document.getElementById('selectPinturaTexturaValor').value=0;
    document.getElementById('tablePinturaTexturaValor').style.display='none';
    document.getElementById('pinturaTexturaValor').value="";
    document.getElementById('selectPinturaTexturaQuilo').value=0;
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredePinturaTextura');
    var tr = '';
    table.innerHTML = tr
}
function pinturaTexturaCalcular(){
    valorPeca=document.getElementById('pinturaTexturaValor').value;
        //validar medidas
    if(document.getElementById('selectPinturaTextura').value==0){
        if(metroQuadrado==0){
            document.getElementById('infoPinturaTexturaErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaTexturaErro1').style.display='none';
        }
    }else{
        metroQuadrado = document.getElementById('pinturaTexturaQuadrado').value;
        if( metroQuadrado==0){
            document.getElementById('infoPinturaTexturaErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaTexturaErro1').style.display='none';
            }
    }
    //Validar CAmpos valores
    if(document.getElementById('selectPinturaTexturaValor').value==1){    
        if(valorPeca==0){
            document.getElementById('infoPinturaTexturaErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoPinturaTexturaErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Material
        if(document.getElementById('selectPinturaTexturaTipo').value==1){    
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Material</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">Graffiato</td>';
            tr += '</tr>';
            acabamento='Graffiato';
        }else{
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Material</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">Textura Lisa</td>';
            tr += '</tr>';
            acabamento='Textura';
        }
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Medida da Área</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        recomendadoQuadrado=Math.ceil(metroQuadrado*1.05);
        //Material
        if(document.getElementById('selectPinturaTexturaTipo').value==1){    
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Material</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">Graffiato</td>';
            tr += '</tr>';
            
        }else{
            tr += '<tr>';
            tr += '<td class="coluna1 alinha">Material</td>';
            tr += '<td class="coluna2 alinha" style="text-align: center;">Textura Lisa</td>';
            tr += '</tr>';
        }
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Medida da Área</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + recomendadoQuadrado + ' M²</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }  
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPinturaTexturaValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';
        switch (document.getElementById('selectPinturaTexturaQuilo').value) {
            case "0":
                if(acabamento=="Graffiato"){
                    valorPeca= (Math.ceil((recomendadoQuadrado*4)/50) * valorPeca).toFixed(2);
                    metroGalao =Math.ceil((recomendadoQuadrado*4)/50);
                    galao= 50;
                }else{
                    valorPeca= (Math.ceil((recomendadoQuadrado*2)/50) * valorPeca).toFixed(2);
                    metroGalao =Math.ceil((recomendadoQuadrado*2)/50);
                    galao= 50;
                }
            break;
            case "1":
            if(acabamento=="Graffiato"){
                valorPeca= (Math.ceil((recomendadoQuadrado*4)/28) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*4)/28);
                galao= 28;
            }else{
                valorPeca= (Math.ceil((recomendadoQuadrado*2)/28) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*2)/28);
                galao= 28;
            }
            break;
            case "2":
            if(acabamento=="Graffiato"){
                valorPeca= (Math.ceil((recomendadoQuadrado*4)/25) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*4)/25);
                galao= 25;
            }else{
                valorPeca= (Math.ceil((recomendadoQuadrado*2)/25) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*2)/25);
                galao= 25;
            }
            break;
            case "3":
            if(acabamento=="Graffiato"){
                valorPeca= (Math.ceil((recomendadoQuadrado*4)/5.4) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*4)/5.4);
                galao= 5.4;
            }else{
                valorPeca= (Math.ceil((recomendadoQuadrado*2)/5.4) * valorPeca).toFixed(2);
                metroGalao =Math.ceil((recomendadoQuadrado*2)/5.4);
                galao= 5.4;
            }
            break;
        }

        var table = document.getElementById('resultado3');
        var tr = '';
        tr += '<tr>';
        tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">'+acabamento+'</td>';
        tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + metroGalao +' Lts. ( '+galao+' KG.)</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
        tr += '</tr>';
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPinturaTexturaValor').value==1){
        valorTotal= parseFloat(valorPeca);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pagePinturaTextura";
    entrarDireito('pageResultado','pagePinturaTextura')
}
//---------------------------------------------Madeira-------------//
function pinturaMadeiraOpcao(){
    switch (document.getElementById('selectPinturaMadeira').value) {
        case "0":
        medida="Porta"
        document.getElementById('trPinturaMadeiraComprimento').style.display='table-row';
        document.getElementById('trPinturaMadeiraAltura').style.display='table-row';
        document.getElementById('trPinturaMadeiraQuadrado').style.display='None';
        document.getElementById('pinturaMadeiraComprimento').value="";
        document.getElementById('pinturaMadeiraAltura').value="";
        document.getElementById('pinturaMadeiraQuadrado').value="";
        
        break;
        case "1":
        medida="Veneziana"
        document.getElementById('trPinturaMadeiraComprimento').style.display='table-row';
        document.getElementById('trPinturaMadeiraAltura').style.display='table-row';
        document.getElementById('trPinturaMadeiraQuadrado').style.display='None';
        document.getElementById('pinturaMadeiraComprimento').value="";
        document.getElementById('pinturaMadeiraAltura').value="";
        document.getElementById('pinturaMadeiraQuadrado').value="";
        break;
        case "2":
        medida="Vitrô"
        document.getElementById('trPinturaMadeiraComprimento').style.display='table-row';
        document.getElementById('trPinturaMadeiraAltura').style.display='table-row';
        document.getElementById('trPinturaMadeiraQuadrado').style.display='None';
        document.getElementById('pinturaMadeiraComprimento').value="";
        document.getElementById('pinturaMadeiraAltura').value="";
        document.getElementById('pinturaMadeiraQuadrado').value="";
        break;
        case "3":
        medida="M²"
        document.getElementById('trPinturaMadeiraComprimento').style.display='None';
        document.getElementById('trPinturaMadeiraAltura').style.display='None';
        document.getElementById('trPinturaMadeiraQuadrado').style.display='table-row';
        document.getElementById('pinturaMadeiraComprimento').value="";
        document.getElementById('pinturaMadeiraAltura').value="";
        document.getElementById('pinturaMadeiraQuadrado').value="";
        break;
    }
    document.getElementById('infoPinturaMadeiraErro1').style.display='none';
}
function addPinturaMadeira(){
    altura = document.getElementById('pinturaMadeiraAltura').value;
    comprimento = document.getElementById('pinturaMadeiraComprimento').value;
    metroquadradoPeca= document.getElementById('pinturaMadeiraQuadrado').value;
    metroQuadrado=0;
    
    if (document.getElementById('selectPinturaMadeira').value==3){
        if(metroquadradoPeca==0){
            document.getElementById('infoPinturaMadeiraErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaMadeiraErro1').style.display='none';
        }
    }else{
        if(altura==0 || comprimento==0){
            document.getElementById('infoPinturaMadeiraErro1').style.display='table-row';
        return false;
        }else{
            metroQuadrado=0;
            document.getElementById('infoPinturaMadeiraErro1').style.display='none';  
        }
    }
    contador += 1;
    switch (document.getElementById('selectPinturaMadeira').value) {
        case "0":
        item[contador]="Porta (Dois lados)";
        parede[contador] = parseFloat(altura* comprimento*2.40).toFixed(2);
        break;
        case "1":
        item[contador]="Veneziana (Sem grade)";
        parede[contador] = parseFloat(altura* comprimento*3.5).toFixed(2);
        break;
        case "2":
        item[contador]="Vitrô (sem grade)";
        parede[contador] = parseFloat(altura* comprimento*1.8).toFixed(2);
        break;
        case "3":
        item[contador]="Avulso(M²)";
        parede[contador] = (metroquadradoPeca*1).toFixed(2);
        break;
    }
    //Carregando tabela
    var table = document.getElementById('paredePinturaMadeira');
    var tr = '';
    //Linha REvestimento
    for (var i = 0;  i < contador; i++) {
        tr += '<tr style="border: 1px solid blue;">';
        tr += '<td class="coluna1 alinha"> '+ item[i+1] +'</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
        tr += '</tr>'
        metroQuadrado +=  parseFloat(parede[i+1]);
     }
     tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
     tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
     tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
     tr += '</tr>';
    table.innerHTML = tr;
    document.getElementById('pinturaMadeiraAltura').value="";
    document.getElementById('pinturaMadeiraComprimento').value="";
    document.getElementById('pinturaMadeiraQuadrado').value="";
}
function pinturaMadeiraValorOpcao(){
    if(document.getElementById('selectPinturaMadeiraValor').value==0){
        document.getElementById('tablePinturaMadeiraValor').style.display='none';
    }else{
        document.getElementById('tablePinturaMadeiraValor').style.display='table';
    }
}
function pinturaMadeiraCalcular(){
    valorPeca=document.getElementById('pinturaMadeiraValorTinta').value;
    //Validar Medidas
    if(metroQuadrado==0){
        document.getElementById('infoPinturaMadeiraErro1').style.display='table-row';
        return false;
    }else{
        document.getElementById('infoPinturaMadeiraErro1').style.display='none';
    }
    //Demão
    switch (document.getElementById('selectPinturaMadeiraDemao').value) {
        case "0":
        demao = 'Uma';
        quantidade=(Math.ceil(metroQuadrado*1)*45);
        break;
        case "1":
        demao = 'Duas';
        quantidade=(Math.ceil(metroQuadrado*2)*45);
        break;
        case "2":
        demao = 'Três';
        quantidade=(Math.ceil(metroQuadrado*3)*45);
        break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectPinturaMadeiraValor').value==1){    
        if(valorPeca==0){
            document.getElementById('infoPinturaMadeiraErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoPinturaMadeiraErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areá da Pintura </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        quantidade=Math.ceil(quantidade*1.05);
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }  
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPinturaMadeiraValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';            
        var table = document.getElementById('resultado3');
        var tr = '';
            //Linha Argamassa
            switch (document.getElementById('selectPinturaMadeiraQuilo').value) {
                case "0":
                valorPeca= (Math.ceil((quantidade)/3600) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/3600) +' Lt (3,6 L.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil((quantidade)/900) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/900) +' Lt (900 ml)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPinturaMadeiraValor').value==1){
        valorTotal= parseFloat(valorPeca);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

    pagina = "pagePinturaMadeira";
    entrarDireito('pageResultado','pagePinturaMadeira')
}
function pinturaMadeiraLimpar(){
    document.getElementById('selectPinturaMadeira').value=0;
    document.getElementById('trPinturaMadeiraComprimento').style.display='table-row';
    document.getElementById('trPinturaMadeiraAltura').style.display='table-row';
    document.getElementById('trPinturaMadeiraQuadrado').style.display='none';
    document.getElementById('pinturaMadeiraComprimento').value="";
    document.getElementById('pinturaMadeiraAltura').value="";
    document.getElementById('pinturaMadeiraQuadrado').value="";
    document.getElementById('selectPinturaMadeiraDemao').value=1;
    document.getElementById('selectPinturaMadeiraValor').value=0;
    document.getElementById('tablePinturaMadeiraValor').style.display='none';
    document.getElementById('selectPinturaMadeiraQuilo').value=0;
    document.getElementById('pinturaMadeiraValorTinta').value="";
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredePinturaMadeira');
    var tr = '';
    table.innerHTML = tr
}
//---------------------------------------------Metal-------------//
function pinturaMetalOpcao(){
    switch (document.getElementById('selectPinturaMetal').value) {
        case "0":
        medida="Porta"
        document.getElementById('trPinturaMetalComprimento').style.display='table-row';
        document.getElementById('trPinturaMetalAltura').style.display='table-row';
        document.getElementById('trPinturaMetalQuadrado').style.display='None';
        document.getElementById('pinturaMetalComprimento').value="";
        document.getElementById('pinturaMetalAltura').value="";
        document.getElementById('pinturaMetalQuadrado').value="";
        
        break;
        case "1":
        medida="Veneziana"
        document.getElementById('trPinturaMetalComprimento').style.display='table-row';
        document.getElementById('trPinturaMetalAltura').style.display='table-row';
        document.getElementById('trPinturaMetalQuadrado').style.display='None';
        document.getElementById('pinturaMetalComprimento').value="";
        document.getElementById('pinturaMetalAltura').value="";
        document.getElementById('pinturaMetalQuadrado').value="";
        break;
        case "2":
        medida="Vitrô"
        document.getElementById('trPinturaMetalComprimento').style.display='table-row';
        document.getElementById('trPinturaMetalAltura').style.display='table-row';
        document.getElementById('trPinturaMetalQuadrado').style.display='None';
        document.getElementById('pinturaMetalComprimento').value="";
        document.getElementById('pinturaMetalAltura').value="";
        document.getElementById('pinturaMetalQuadrado').value="";
        break;
        case "3":
        medida="M²"
        document.getElementById('trPinturaMetalComprimento').style.display='None';
        document.getElementById('trPinturaMetalAltura').style.display='None';
        document.getElementById('trPinturaMetalQuadrado').style.display='table-row';
        document.getElementById('pinturaMetalComprimento').value="";
        document.getElementById('pinturaMetalAltura').value="";
        document.getElementById('pinturaMetalQuadrado').value="";
        break;
    }
    document.getElementById('infoPinturaMetalErro1').style.display='none';
}
function addPinturaMetal(){
    altura = document.getElementById('pinturaMetalAltura').value;
    comprimento = document.getElementById('pinturaMetalComprimento').value;
    metroquadradoPeca= document.getElementById('pinturaMetalQuadrado').value;
    metroQuadrado=0;
    
    if (document.getElementById('selectPinturaMetal').value==3){
        if(metroquadradoPeca==0){
            document.getElementById('infoPinturaMetalErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaMetalErro1').style.display='none';
        }
    }else{
        if(altura==0 || comprimento==0){
            document.getElementById('infoPinturaMetalErro1').style.display='table-row';
        return false;
        }else{
            metroQuadrado=0;
            document.getElementById('infoPinturaMetalErro1').style.display='none';  
        }
    }
    contador += 1;
    switch (document.getElementById('selectPinturaMetal').value) {
        case "0":
        item[contador]="Porta (Dois lados)";
        parede[contador] = parseFloat(altura* comprimento*2.40).toFixed(2);
        break;
        case "1":
        item[contador]="Veneziana (Com grade)";
        parede[contador] = parseFloat(altura* comprimento*4.5).toFixed(2);
        break;
        case "2":
        item[contador]="Vitrô (Com grade)";
        parede[contador] = parseFloat(altura* comprimento*2.8).toFixed(2);
        break;
        case "3":
        item[contador]="Avulso(M²)";
        parede[contador] = (metroquadradoPeca*1).toFixed(2);
        break;
    }
    //Carregando tabela
    var table = document.getElementById('paredePinturaMetal');
    var tr = '';
    //Linha REvestimento
    for (var i = 0;  i < contador; i++) {
        tr += '<tr style="border: 1px solid blue;">';
        tr += '<td class="coluna1 alinha"> '+ item[i+1] +'</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
        tr += '</tr>'
        metroQuadrado +=  parseFloat(parede[i+1]);
     }
     tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
     tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
     tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
     tr += '</tr>';
    table.innerHTML = tr;
    document.getElementById('pinturaMetalAltura').value="";
    document.getElementById('pinturaMetalComprimento').value="";
    document.getElementById('pinturaMetalQuadrado').value="";





}
function pinturaMetalValorOpcao(){
    if(document.getElementById('selectPinturaMetalValor').value==0){
        document.getElementById('tablePinturaMetalValor').style.display='none';
    }else{
        document.getElementById('tablePinturaMetalValor').style.display='table';
    }
}
function pinturaMetalCalcular(){
    valorPeca=document.getElementById('pinturaMetalValorTinta').value;
    //Validar Medidas
    if(metroQuadrado==0){
        document.getElementById('infoPinturaMetalErro1').style.display='table-row';
        return false;
    }else{
        document.getElementById('infoPinturaMetalErro1').style.display='none';
    }
    //Demão
    switch (document.getElementById('selectPinturaMetalDemao').value) {
        case "0":
        demao = 'Uma';
        quantidade=(metroQuadrado*1)*45;
        break;
        case "1":
        demao = 'Duas';
        quantidade=(metroQuadrado*2)*45;
        break;
        case "2":
        demao = 'Três';
        quantidade=(metroQuadrado*3)*45;
        break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectPinturaMetalValor').value==1){    
        if(valorPeca==0){
            document.getElementById('infoPinturaMetalErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoPinturaMetalErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areá da Pintura </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        quantidade=Math.ceil(quantidade*1.05);
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }  
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPinturaMetalValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';            
        var table = document.getElementById('resultado3');
        var tr = '';
            //Linha Argamassa
            switch (document.getElementById('selectPinturaMetalQuilo').value) {
                case "0":
                valorPeca= (Math.ceil((quantidade)/3600) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/3600) +' Lt (3,6 L.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil((quantidade)/900) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/900) +' Lt (900 ml)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPinturaMetalValor').value==1){
        valorTotal= parseFloat(valorPeca);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }

    pagina = "pagePinturaMetal";
    entrarDireito('pageResultado','pagePinturaMetal')
}
function pinturaMetalLimpar(){
    document.getElementById('selectPinturaMetal').value=0;
    document.getElementById('trPinturaMetalComprimento').style.display='table-row';
    document.getElementById('trPinturaMetalAltura').style.display='table-row';
    document.getElementById('trPinturaMetalQuadrado').style.display='none';
    document.getElementById('pinturaMetalComprimento').value="";
    document.getElementById('pinturaMetalAltura').value="";
    document.getElementById('pinturaMetalQuadrado').value="";
    document.getElementById('selectPinturaMetalDemao').value=1;
    document.getElementById('selectPinturaMetalValor').value=0;
    document.getElementById('tablePinturaMetalValor').style.display='none';
    document.getElementById('selectPinturaMetalQuilo').value=0;
    document.getElementById('pinturaMetalValorTinta').value="";
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredePinturaMetal');
    var tr = '';
    table.innerHTML = tr
}
//---------------------------------------------Verniz-------------//
function pinturaVernizOpcao(){
    switch (document.getElementById('selectPinturaVerniz').value) {
        case "0":
        medida="Porta"
        document.getElementById('trPinturaVernizComprimento').style.display='table-row';
        document.getElementById('trPinturaVernizAltura').style.display='table-row';
        document.getElementById('trPinturaVernizQuadrado').style.display='None';
        document.getElementById('pinturaVernizComprimento').value="";
        document.getElementById('pinturaVernizAltura').value="";
        document.getElementById('pinturaVernizQuadrado').value="";
        
        break;
        case "1":
        medida="Veneziana"
        document.getElementById('trPinturaVernizComprimento').style.display='table-row';
        document.getElementById('trPinturaVernizAltura').style.display='table-row';
        document.getElementById('trPinturaVernizQuadrado').style.display='None';
        document.getElementById('pinturaVernizComprimento').value="";
        document.getElementById('pinturaVernizAltura').value="";
        document.getElementById('pinturaVernizQuadrado').value="";
        break;
        case "2":
        medida="Vitrô"
        document.getElementById('trPinturaVernizComprimento').style.display='table-row';
        document.getElementById('trPinturaVernizAltura').style.display='table-row';
        document.getElementById('trPinturaVernizQuadrado').style.display='None';
        document.getElementById('pinturaVernizComprimento').value="";
        document.getElementById('pinturaVernizAltura').value="";
        document.getElementById('pinturaVernizQuadrado').value="";
        break;
        case "3":
        medida="M²"
        document.getElementById('trPinturaVernizComprimento').style.display='None';
        document.getElementById('trPinturaVernizAltura').style.display='None';
        document.getElementById('trPinturaVernizQuadrado').style.display='table-row';
        document.getElementById('pinturaVernizComprimento').value="";
        document.getElementById('pinturaVernizAltura').value="";
        document.getElementById('pinturaVernizQuadrado').value="";
        break;
    }
    document.getElementById('infoPinturaVernizErro1').style.display='none';
}
function addPinturaVerniz(){
    altura = document.getElementById('pinturaVernizAltura').value;
    comprimento = document.getElementById('pinturaVernizComprimento').value;
    metroquadradoPeca= document.getElementById('pinturaVernizQuadrado').value;
    metroQuadrado=0;
    
    if (document.getElementById('selectPinturaVerniz').value==3){
        if(metroquadradoPeca==0){
            document.getElementById('infoPinturaVernizErro1').style.display='table-row';
            return false;
        }else{
            document.getElementById('infoPinturaVernizErro1').style.display='none';
        }
    }else{
        if(altura==0 || comprimento==0){
            document.getElementById('infoPinturaVernizErro1').style.display='table-row';
        return false;
        }else{
            metroQuadrado=0;
            document.getElementById('infoPinturaVernizErro1').style.display='none';  
        }
    }
    contador += 1;
    switch (document.getElementById('selectPinturaVerniz').value) {
        case "0":
        item[contador]="Porta (Dois lados)";
        parede[contador] = parseFloat(altura* comprimento*2.40).toFixed(2);
        break;
        case "1":
        item[contador]="Veneziana";
        parede[contador] = parseFloat(altura* comprimento*3.5).toFixed(2);
        break;
        case "2":
        item[contador]="Vitrô";
        parede[contador] = parseFloat(altura* comprimento*1.8).toFixed(2);
        break;
        case "3":
        item[contador]="Avulso(M²)";
        parede[contador] = (metroquadradoPeca*1).toFixed(2);
        break;
    }
    //Carregando tabela
    var table = document.getElementById('paredePinturaVerniz');
    var tr = '';
    //Linha REvestimento
    for (var i = 0;  i < contador; i++) {
        tr += '<tr style="border: 1px solid blue;">';
        tr += '<td class="coluna1 alinha"> '+ item[i+1] +'</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + parede[i+1] + ' M²</td>';
        tr += '</tr>'
        metroQuadrado +=  parseFloat(parede[i+1]);
     }
     tr += '<tr style="border: 1px solid blue; bacKG.round: #DA70D6" ><td ></td ><td ></td></tr>';
     tr += '<tr style="border: 1px solid blue; center; color:red"><td class="coluna1 alinha">Total em M²</td>';
     tr += '<td class="coluna2 alinha" style="text-align: center; color:red">' + metroQuadrado.toFixed(2) + ' M²</td>';
     tr += '</tr>';
    table.innerHTML = tr;
    document.getElementById('pinturaVernizAltura').value="";
    document.getElementById('pinturaVernizComprimento').value="";
    document.getElementById('pinturaVernizQuadrado').value="";





}
function pinturaVernizValorOpcao(){
    if(document.getElementById('selectPinturaVernizValor').value==0){
        document.getElementById('tablePinturaVernizValor').style.display='none';
    }else{
        document.getElementById('tablePinturaVernizValor').style.display='table';
    }
}
function pinturaVernizCalcular(){
    valorPeca=document.getElementById('pinturaVernizValorTinta').value;
    //Validar Medidas
    if(metroQuadrado==0){
        document.getElementById('infoPinturaVernizErro1').style.display='table-row';
        return false;
    }else{
        document.getElementById('infoPinturaVernizErro1').style.display='none';
    }
    //Demão
    switch (document.getElementById('selectPinturaVernizDemao').value) {
        case "0":
        demao = 'Uma';
        quantidade=(metroQuadrado*1)*68;
        break;
        case "1":
        demao = 'Duas';
        quantidade=(metroQuadrado*2)*68;
        break;
        case "2":
        demao = 'Três';
        quantidade=(metroQuadrado*3)*68;
        break;
    }
    //Validar CAmpos valores
    if(document.getElementById('selectPinturaVernizValor').value==1){    
        if(valorPeca==0){
            document.getElementById('infoPinturaVernizErro2').style.display='table-row';
    return false;
    }else{
            document.getElementById('infoPinturaVernizErro2').style.display='none';
        }
    }
    // Carregando Primeira Tabela
    if (metroQuadrado!=0){ 
        var table = document.getElementById('resultado1');
        var tr = '';
        //Metro Quadrado
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Areá da Pintura </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + metroQuadrado + ' M²</td>';
        tr += '</tr>';
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }
    // Carregando Segunda Tabela
    if (metroQuadrado!=0){ 
        //Carregando tabela
        var table = document.getElementById('resultado2');
        var tr = '';
        quantidade=Math.ceil(quantidade*1.05);
        //Demão
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Demão</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + demao + '</td>';
        tr += '</tr>';
        //Utilização de  Tinta
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Área a Cobrir</td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;">' + (quantidade/1000).toFixed(2) + ' Litro</td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }  
    // Carregando terceira Tabela
    if (metroQuadrado!=0){
        if (document.getElementById('selectPinturaVernizValor').value==1){
        document.getElementById('tableResultado1').style.display='table';
        document.getElementById('hrResultado1').style.display='flex';            
        var table = document.getElementById('resultado3');
        var tr = '';
            //Linha Argamassa
            switch (document.getElementById('selectPinturaVernizQuilo').value) {
                case "0":
                valorPeca= (Math.ceil((quantidade)/3600) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/3600) +' Lt (3,6 L.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "1":
                valorPeca= (Math.ceil((quantidade)/900) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/900) +' Lt (900 ml)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "2":
                valorPeca= (Math.ceil((quantidade)/7200) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/7200) +' Lt (3,6 L.)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
                case "3":
                valorPeca= (Math.ceil((quantidade)/1800) * valorPeca).toFixed(2);
                tr += '<tr>';
                tr += '<td class="coluna2 alinha" style="text-align: left; width: 35%;">Esmalte Sintético</td>';
                tr += '<td class="colunaA alinha" style="text-align: center; width: 30%;">' + Math.ceil((quantidade)/1800) +' Lt (900 ml)</td>';
                tr += '<td class="coluna2 alinha" style="text-align: center; width: 35%;">R$ ' + valorPeca + '</td>';
                tr += '</tr>';
                break;
            }
        table.innerHTML = tr
        }else{
            document.getElementById('tableResultado1').style.display='none';
            document.getElementById('hrResultado1').style.display='none';
        }
    }
    // Carregando Quarta Tabela
    if (document.getElementById('selectPinturaVernizValor').value==1){
        valorTotal= parseFloat(valorPeca);
        document.getElementById('tableResultado2').style.display='table';
        document.getElementById('hrResultado2').style.display='flex';
        var table = document.getElementById('resultado4');
        var tr = '';
        //Linha Piso
        tr += '<tr>';
        tr += '<td class="coluna1 alinha">Valor Total </td>';
        tr += '<td class="coluna2 alinha" style="text-align: center;"> R$ ' + valorTotal.toFixed(2) + ' </td>';
        tr += '</tr>';
        table.innerHTML = tr; 
    }else{
        document.getElementById('tableResultado2').style.display='none';
        document.getElementById('hrResultado2').style.display='none';
    }
    pagina = "pagePinturaVerniz";
    entrarDireito('pageResultado','pagePinturaVerniz')
}
function pinturaVernizLimpar(){
    document.getElementById('selectPinturaVerniz').value=0;
    document.getElementById('trPinturaVernizComprimento').style.display='table-row';
    document.getElementById('trPinturaVernizAltura').style.display='table-row';
    document.getElementById('trPinturaVernizQuadrado').style.display='none';
    document.getElementById('pinturaVernizComprimento').value="";
    document.getElementById('pinturaVernizAltura').value="";
    document.getElementById('pinturaVernizQuadrado').value="";
    document.getElementById('selectPinturaVernizDemao').value=1;
    document.getElementById('selectPinturaVernizValor').value=0;
    document.getElementById('tablePinturaVernizValor').style.display='none';
    document.getElementById('selectPinturaVernizQuilo').value=0;
    document.getElementById('pinturaVernizValorTinta').value="";
    metroQuadrado=0;
    contador=0;
    var table = document.getElementById('paredePinturaVerniz');
    var tr = '';
    table.innerHTML = tr

}

function EnviarSugestao(){
    var nome = document.getElementById('sugestaoNome').value;
    var telefone = document.getElementById('sugestaoTelefone').value;
    var enail = document.getElementById('sugestaoemail').value;
    var mensagem = document.getElementById('sugestaoMensagem').value;
    if(nome=="" || telefone=="" || enail=="" || mensagem==""){
        document.getElementById('infoSugestaoErro1').style.display='table-row';
    return false;
    }else{
        document.getElementById('infoSugestaoErro1').style.display='none';
    }
    $.ajax({
        url:'http://localhost/reformando/enviaEmail.php',
        dataType:'json',
        type:'POST',
        data:{email : $("#sugestaoNome").val()},
        nasc: $("#sugestaoTelefone").val(),
        celular: $("#sugestaoemail").val(),
        email: $("#sugestaoMensagem").val(),
        success:function(r){

        },
        error:function(e){
            
        }

    })
    
}

