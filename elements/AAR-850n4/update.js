function(instance, properties, context) {

let dados = properties.dados;
let contar = dados.get(properties.lista).length();
    
    instance.data.dados = dados;
    instance.data.lista = dados.get(properties.lista).get(0,contar);

}