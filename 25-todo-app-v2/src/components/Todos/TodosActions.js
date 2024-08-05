import styles from './TodosActions.module.css';
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";


const TodosActions = ({ resetTodos, deleteCompletedTodos, completedTodosExist }) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button
                title='Reset Todos'
                onClick={resetTodos}><RiRefreshLine /></Button>
            <Button
                onClick={deleteCompletedTodos}
                title='Clear Completed Todos'
                disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions;