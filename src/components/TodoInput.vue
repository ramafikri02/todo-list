<template>
<div>
    <div class="row">
        <h3>Input Here</h3>
        <b-input-group class="mt-3 mb-5">
            <b-form-input v-model="todoText"></b-form-input>
            <b-input-group-append>
                <b-button variant="info" @click="addTodoI">Add Item</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    v1
} from "uuid";
export default {
    data() {
        return {
            todoText: ""
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        addTodoI() {
            this.addTodo({
                id: v1(),
                title: this.todoText
            });
        }
    }
};
</script>

<style lang="stylus" scoped></style>
