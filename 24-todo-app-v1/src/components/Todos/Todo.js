import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';
const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>
                {todo}
            </div>
        </div>
    )

}

export default Todo;