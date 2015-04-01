    $(document).ready(function () {
    $('.calendario').datepicker({ dateFormat: 'dd/mm/yy', showAnim: "drop"});
    $('.valor').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
    $button = $('#button');
    
    $button.click(function () {
    var toAddData = $('input[name=data]').val();
    var toAddValor = $('input[name=valor]').val();
    var toAddProduto = $('#bandeiras').val();
        
    $('.list').append('<div class="item">' + 'Data: ' + toAddData + ' Valor: ' + toAddValor + ' Número da Bandeira: ' + toAddProduto + '</div>'); });
    
    
    
});