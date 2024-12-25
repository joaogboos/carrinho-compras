function opçãoEscolhida(){
    produtos = document.getElementById('produto');
    produtoSelecionado = produtos.options[produtos.selectedIndex].text;
    console.log (`${produtoSelecionado}`);
    }
    document.addEventListener('DOMContentLoaded', function(){});{
        opçãoEscolhida();
    }