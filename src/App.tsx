import { useState } from 'react';
import styles from './App.module.css';
import { FcTodoList } from 'react-icons/fc';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Interface
import { ITask } from './interfaces/ITask';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  const [showModal, setShowModal] = useState(false);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const editTask = (task: ITask): void => {
    setTaskToUpdate(task);
    setShowModal(true); 
  };

  const updateTask = (id: number, title: string, dificulty: number, description: string) => {
    const updatedTask: ITask = { id, title, dificulty, description };

    const updatedItems = taskList.map((task) => {
      if (task.id === id) {
        return updatedTask;
      }
      return task;
    });

    setTaskList(updatedItems);
    setShowModal(false); 
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <TaskForm btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />
        </Modal>
      )}
      <Header />
      <main className={styles.main}>
        <div className={styles.title_task}>
          <FcTodoList />
          <h2>Faça o cronograma das suas atividades</h2>
        </div>
        <TaskForm btnText="Cadastrar" taskList={taskList} setTaskList={setTaskList} />
        <div className={styles.task_list}>
          <h2>Tarefas Adicionadas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
