import { useState } from 'react';
import styles from './App.module.css';
import {FcTodoList} from 'react-icons/fc'

//Components
import Header from './components/Header';
import Footer from './components/Footer'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//Interface
import { ITask } from './interfaces/ITask';

 function App() {

  const [taskList , setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {return task.id !== id})
    );
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
          <div className={styles.title_task}>
              <FcTodoList/>
              <h2>Faça o cronograma das suas atividades</h2>
          </div>
          <TaskForm btnText='Cadastrar' taskList={taskList} setTaskList={setTaskList}/>
        <div className={styles.task_list}>
          <h2>Tarefas Adicionadas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
