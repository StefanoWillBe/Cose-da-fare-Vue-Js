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
                    date: "11/04/22"
                },
                {
                    text:  "Fare la Spesa",
                    visible: true,
                    isDone: false,
                    date: "21/05/22"
                },
                {
                    text: "Fare il bucato",
                    visible: true,
                    isDone: false,
                    date: "28/05/22"
                },
                {
                    text: "Portare la macchina dal meccanico",
                    visible: true,
                    isDone: false,
                    date: "12/06/22"
                },
                {
                    text: "Portare la Nonna dal Dottore",
                    visible: true,
                    isDone: false,
                    date: "12/06/22"
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
                        date: dayjs().format("DD/MM/YY HH:mm:ss")
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


