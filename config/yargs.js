const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la nueva tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', {
        description,

    })
    .command('actualizar', 'Crear una nueva tarea', {
        description,
        completado
    })
    .command('borrar', 'Eliminar una tarea', {
        description

    })
    .help()
    .argv;


module.exports = {
    argv
}