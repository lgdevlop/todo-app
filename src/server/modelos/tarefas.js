const moongoose = require('mongoose')

const esquema = moongoose.Schema({
  nome: String,
  estado: {
    type: String,
    enum: ['ativo', 'completado']
  }
})

moongoose.model('tarefas', esquema)
