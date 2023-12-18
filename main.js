$(document).ready(function(){ // no documento faça
    $('#btn-add').click(function(){ // quando o evento "click" ocorrer, faça:
        var tarefa = $('#novatarefa').val(); // guarde a nova tarefa nesta variavel 
        var descricao = $('#descricao').val(); // guarde a descrição nesta variavel

        if(tarefa.trim() !== ''){ // validando a tarefa inserida 
            var listItem = $('<li>').text(tarefa); // se estiver ok, guarde nesta variavel
            if(descricao.trim() !== ''){ // validando descrição inserida
                listItem.append($('<span>').text(' - ' + descricao));// se estiver ok, adicione na variavel acima e faça a concatenação
            }

            listItem.click(function(){
                $(this).toggleClass('completed');
            });

            $('#formulario ul').append(listItem); // adicione no formulario 

            // Limpar os campos de entrada após adicionar a tarefa
            $('#novatarefa').val('');
            $('#descricao').val('');
        }
    });
});
