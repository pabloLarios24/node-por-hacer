
const descripcion = {
    alias:'d',
    demand:true,
    desc:'Descripcion de la tarea por hacer'
}

const completado = {
    alias:'c',
    default:true,
    desc:'Status de la tarea'
}

const argv = require('yargs')
            .command('crear','Crea un elemento por hacer',{
                descripcion
            })
            .command('borrar','Elimina una tarea',{
                descripcion
            })
            .command('actualizar','Borra una tarea',{
                descripcion,
                completado
            })
            .help()
            .argv

module.exports={
    argv
}