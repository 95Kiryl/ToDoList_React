import store from "./redux/store.js";
import { addCurrentTime, clearTimes } from "./redux/actionCreators.js";

const btn = document.querySelector('#btn'),
    btnClear = document.querySelector('#btnClear'),
    timesList = document.querySelector('#timesList');

btn.addEventListener('click', () => {
    store.dispatch(addCurrentTime());
})

btnClear.addEventListener('click', () => {
    store.dispatch(clearTimes())
})

store.subscribe(() => {
    timesList.innerHTML = '';
    const times = store.getState();
    times.forEach(time => {
        let li = document.createElement('li');
        li.innerText = time;
        timesList.appendChild(li);
    });
})




