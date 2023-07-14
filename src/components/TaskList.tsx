//CSS
import styles from './TaskList.module.css';
import { GrEdit, GrFormTrash } from "react-icons/gr";

//Interfaces
import {ITask} from '../interfaces/ITask';


type Props = {
    taskList: ITask[];
    handleDelete(id: number) : void;
    handleEdit(task: ITask) : void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.dificulty}</p>
                        <p>Descrição: {task.description}</p>
                    </div>
                    <div className={styles.actions}>
                        <GrEdit onClick={() => handleEdit(task)}/>
                        <GrFormTrash onClick={() => handleDelete(task.id)}/>
                    </div>
                </div>
            ))
        ) : (
            <p>Nenhuma tarefa adicionada</p>
        )}
    </>
  )
}

export default TaskList