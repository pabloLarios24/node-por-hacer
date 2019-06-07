const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json',data,(err) => {
        if (err) throw new Error("No se pudo crear el archivo")
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(eror){
        listadoPorHacer = Array();
    }

}

const getListado = () =>{

    cargarDB();

    return listadoPorHacer
}

const actualizar = ( descripcion , completado ) =>{

    cargarDB()
    let index = listadoPorHacer.findIndex( ( item)  =>{
        return item.descripcion === descripcion
    })
    if(index >= 0){
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }else{
        return false
    }
}

const crear = (descripcion) =>{
    
    cargarDB();

    let porHacer={
        descripcion,
        completado:false
    }
    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer;
}

const borrar = (descripcion) =>{
    cargarDB()
    let nuevoListado = listadoPorHacer.filter( item =>{
        return item.descripcion !== descripcion
    })
    if(listadoPorHacer.length != nuevoListado.length){
        listadoPorHacer = nuevoListado
        guardarDB()
        return true
    }else{
        return false
    }
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}