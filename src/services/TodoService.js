class TodoService {
  active = localStorage.getItem('active')
  completed = localStorage.getItem('completed')

  constructor () {
    if (!this.active) {
      this.initActiveList();
    }
    if (!this.completed) {
      this.initCompletedList();
    }
  }

  initAllList = () => {
    const activeList = JSON.parse(localStorage.getItem('active'));
    const completedList = JSON.parse(localStorage.getItem('completed'));

    const allArr = activeList.concat(completedList);

    const allArrObj = JSON.stringify(allArr);

    localStorage.setItem('all', allArrObj);

  }

  initActiveList = () => {
    const activeArr = [];

    const activeArrObj = JSON.stringify(activeArr);

    localStorage.setItem('active', activeArrObj);
  }

  initCompletedList = () => {
    const completedArr = [];

    const completedArrObj = JSON.stringify(completedArr);

    localStorage.setItem('completed', completedArrObj);
  }

  addCheckbox = (checkbox) => {
    const activeList = JSON.parse(localStorage.getItem('active'));

    const newActiveArr = [...activeList, checkbox];
  
    localStorage.setItem('active', JSON.stringify(newActiveArr));
  
    console.log(newActiveArr);
  }
}

export default TodoService;