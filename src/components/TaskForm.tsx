import styles from './TaskForm.module.css'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <>
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='Título da tarefa' />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="dificulty">Dificuldade:</label>
            <input type="dificulty" name='dificulty' placeholder='Dificuldade da tarefa' />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="description">Descrição:</label>
            <textarea name="description" id="description" placeholder='Descreva a sua tarefa'></textarea>
        </div>
        <input type="submit" value={btnText} />
    </form>
    </>
  )
};

export default TaskForm