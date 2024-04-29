try{
    //E executada quando nao ha erros
}catch(e){
    //E Executada quando ha erros
} finally{
    //Sempre e executado sempre
}


try{
    console.log('Abrir um arquivo');
    console.log("Manipulei o arquivo e gerou erro");
    console.log('Fechei o arquivo');
}catch(e){
    console.log('Tratando erro')
} finally{
    console.log("Eu sempre sou executado");
}


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }
    if(!data){
        data = new Date();
    }

    //Objeto
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //tratar erro
}finally{
    console.log('Tenha um bom dia');
}
