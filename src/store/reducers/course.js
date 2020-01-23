const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: 'Iniciando com react',
      lessons: [
        {id: 1, title: 'Primeira aula'},
        {id: 2, title: 'Segunda aula'}
      ]
    },
    {
      id: 2,
      title: 'Iniciado com redux',
      lessons: [
        {id: 3, title: 'Terceira aula'},
        {id: 4, title: 'Quarta aula'}
      ]
    }
  ]
}

const course = (state = INITIAL_STATE, action) => {


  if(action.type === 'TOGGLE_LESSON'){
    return {...state, activeLesson: action.lesson, activeModule: action.module}
  }


  return state

}

export default course