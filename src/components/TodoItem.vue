<template>
<div>
    <div class="row my-2 todo-item">
        <div class="col-md-6">
            <h4 v-if="!editing" style="float:left;">{{todo.title}}</h4>
            <b-form-input v-model="todoText" v-else></b-form-input>
        </div>
        <div class="col-md-6">
            <div style="float:right;">
                <b-button variant="success mx-2" @click="updateTodoI(todo)">
                    <font-awesome-icon icon="edit" v-if="!editing" />
                    <font-awesome-icon icon="save" v-else />
                </b-button>
                <b-button variant="danger" @click="deleteTodo(todo.id)">
                    <font-awesome-icon icon="eraser" />
                </b-button>
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
