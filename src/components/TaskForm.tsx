import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './TaskForm.module.css'

//Interface
import { ITask } from '../interfaces/ITask';

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    handleUpdate?(id:number, title:string, dificulty:number, description:string): void;
}


const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [dificulty, setDificulty] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(handleUpdate){

            handleUpdate(id, title, dificulty, description);

        } else {

            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = {
                id,
                title,
                dificulty, 
                description
            }

            setTaskList!([...taskList, newTask]);

            setTitle('');
            setDificulty(0);
            setDescription('');
        }


    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        if(e.target.name === 'title') {
            setTitle(e.target.value);
        } else if(e.target.name === 'dificulty') {
            setDificulty(parseInt(e.target.value));
        } else{
            setDescription(e.target.value);
        }
    
    }

    useEffect(() => {

        const loadTask = () =>{

            if(task){
                setId(task.id);
                setTitle(task.title);
                setDificulty(task.dificulty);
                setDescription(task.description);
            }
        }

        loadTask();

    }, [task]);

  return (
    <>
    <form onSubmit={(e) => addTaskHandler(e)} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input onChange={(e) => handleChange(e)} type="text" name='title' placeholder='Título da tarefa' value={title} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="dificulty">Dificuldade:</label>
            <input onChange={(e) => handleChange(e)} type="dificulty" name='dificulty' placeholder='Dificuldade da tarefa' value={dificulty} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="description">Descrição:</label>
            <textarea onChange={(e) => handleChange(e)} name="description" id="description" placeholder='Descreva a sua tarefa' value={description}></textarea>
        </div>
        <input type="submit" value={btnText} />
    </form>
    </>
  )
};

export default TaskForm