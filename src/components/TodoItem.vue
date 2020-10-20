<template>
<div>
    <div class="row my-2">
        <div class="col-md-6">
            <h3 v-if="!editing" style="float:left;">{{todo.title}}</h3>
            <b-form-input v-model="todoText" v-else></b-form-input>
        </div>
        <div class="col-md-6">
            <div>
                <b-button variant="success mx-2" @click="updateTodoI(todo)">{{editing?'Update':'Edit'}}</b-button>
                <b-button variant="danger" @click="deleteTodo(todo.id)">Delete</b-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            todotext: "",
            editing: false
        }
    },
    props: {
        todo: {}
    },
    methods: {
        ...mapActions(["deleteTodo", "updateTodo"]),
        updateTodoI(todo) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.todoText = todo.title;
                this.updateTodo(todo);
            } else {
                todo.title = this.todoText;
            }
        }
    },
}
</script>

<style scoped>

</style>
