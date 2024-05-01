class TodoService {
  all = localStorage.getItem('all')

  constructor () {
    if (!this.all) {
      this.initAllList();
    }
  }

  initAllList = () => {
    const allArr = [];

    const allArrObj = JSON.stringify(allArr);

    localStorage.setItem('all', allArrObj);

  }

  updateActiveList = () => {
    const allList = JSON.parse(localStorage.getItem('all'));

    const activeArr = allList.filter(item=>item.task.isActive === true)

    const activeArrObj = JSON.stringify(activeArr);

    localStorage.setItem('active', activeArrObj);
  }

  updateCompletedList = () => {
    const allList = JSON.parse(localStorage.getItem('all'));

    const completedArr = allList.filter(item=>item.task.isCompleted === true)

    const completedArrObj = JSON.stringify(completedArr);

    localStorage.setItem('completed', completedArrObj);
  }

  addTask = (value) => {
    const allList = JSON.parse(localStorage.getItem('all'));

    const checkbox = {
      id: allList.length + 1,
      task: {
        value: value,
        isActive: true,
        isCompleted: false
      }
 
    }

    const newAllListArr = [...allList, checkbox];
  
    localStorage.setItem('all', JSON.stringify(newAllListArr));
  
    this.updateActiveList()
    this.updateCompletedList()
  }

  deleteActiveCheckbox = (id) => {
    const activeList = JSON.parse(localStorage.getItem('active'));

    const filteredActiveList = activeList.filter(item=> item.id !== id)
  
    localStorage.setItem('active', JSON.stringify(filteredActiveList));
  
    console.log(filteredActiveList);
  }

  getAllList = () => {
    const allList = JSON.parse(localStorage.getItem('all'));

    return allList;
  }

  getActiveList = () => {
    const activeList = JSON.parse(localStorage.getItem('active'));

    return activeList;
  }

  getComletedList = () => {
    const completedList = JSON.parse(localStorage.getItem('completed'));

    return completedList;
  }
}

export default TodoService;