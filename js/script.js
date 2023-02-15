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
                    date: dayjs().format("DD/MM/YY")
                },
                {
                    text:  "Fare la Spesa",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YY")
                },
                {
                    text: "Fare il bucato",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YY")
                },
                {
                    text: "Portare la macchina dal meccanico",
                    visible: true,
                    isDone: false,
                    date: dayjs().format("DD/MM/YY")
                }
            ],
        },
        methods: {
            addNewTodo() {
                let userInput = this.userNewTodo.trim();
                if (userInput.length > 0 ) {
                    this.todos.push({
                        text: this.userNewTodo,
                        visible: true,
                        isDone: false,
                        date: dayjs().format("DD/MM/YY")
                    });
                    this.userNewTodo = "";
                }else{
                    this.userNewTodo = "";
                    alert("Il campo 'Cose da fare' non può essere vuoto");
                }

            },
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            filterTodos(){
                this.todos.forEach((element) =>{
                    if(element.text.toLowerCase().includes(this.userFilter.toLowerCase())){
                        element.visible= true;
                    } else {
                        element.visible= false;
                    }
                })
            },
            changeText(index){
                this.todos[index].isDone = !this.todos[index].isDone;
            }

        }
    });


