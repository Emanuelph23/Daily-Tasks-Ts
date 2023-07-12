import styles from './App.module.css';
import {FcTodoList} from 'react-icons/fc'

//Components
import Header from './components/Header';
import Footer from './components/Footer'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

 function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
          <div className={styles.title_task}>
              <FcTodoList/>
              <h2>Faça o cronograma das suas atividades</h2>
          </div>
          <TaskForm btnText='Cadastrar'/>
        <div>
          <h2>Tarefas Adicionadas:</h2>
          <TaskList/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
