<template>
<div>
    <div class="row">
        <b-input-group class="mt-3 mb-3 mx-3">
            <b-form-input v-model="todoText" placeholder="Type here..."></b-form-input>
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
