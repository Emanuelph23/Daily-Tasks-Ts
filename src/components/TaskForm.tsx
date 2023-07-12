import React from 'react'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <>
    <form>
        <div>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='Título da tarefa' />
        </div>
        <div>
            <label htmlFor="dificulty">Dificuldade:</label>
            <input type="dificulty" name='dificulty' placeholder='Dificuldade da tarefa' />
        </div>
        <div>
            <label htmlFor="description">Descrição:</label>
            <textarea name="description" id="description"></textarea>
        </div>
        <input type="submit" value={btnText} />
    </form>
    </>
  )
};

export default TaskForm