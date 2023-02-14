var app = new Vue(
    {
        el: '#app',
        data: {
            userFilter: "",
            userNewTodo: "",
            todos: [
                {
                    text: "Fare i compiti",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss")
                },
                {
                    text:  "Fare la Spesa",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss")
                },
                {
                    text: "Fare il bucato",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss")
                },
                {
                    text: "Portare la macchina dal meccanico",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss")
                }
            ],
        },
        methods: {
            addNewTodo() {
                if (this.userNewTodo.length > 0) {
                    this.todos.push({
                        text: this.userNewTodo,
                        visible: true,
                        isDone: false,
                        date: dayjs().format("DD/MM/YYYY  HH:mm:ss")
                    });
                    this.userNewTodo = "";
                }

            },
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            filterTodos(){
                this.todos.forEach((element) =>{
                    if(element.text.toLocaleLowerCase().includes(this.userFilter.toLowerCase())){
                        element.visible= true;
                    } else {
                        element.visible= false;
                    }
                })
            },
            changeText(index){
                this.todos[index].isDone= !this.todos[index].isDone;
            }

        }
    });


