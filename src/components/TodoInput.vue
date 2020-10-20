<template>
<div>
    <div class="row">
        <div class="col-md-12 mt-3">
            <b-alert :show="alertAdd" dismissible variant="success" @dismissed="alertAdd=0" @dismiss-count-down="countDownChanged">
                {{todoText}} sucecessfull added!
            </b-alert>
        </div>
        <div class="col-md-12">
            <b-input-group class="mt-3 mb-3">
                <b-form-input v-model="todoText" placeholder="Type here..." required></b-form-input>
                <b-input-group-append>
                    <b-button variant="info" @click="addTodoI">Add Item</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
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
            todoText: "",
            dismissSecs: 1,
            alertAdd: 0
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        addTodoI() {
            this.alertAdd = this.dismissSecs
            this.addTodo({
                id: v1(),
                title: this.todoText
            });
        },
        countDownChanged(alertAdd) {
            this.alertAdd = alertAdd
        },
    }
};
</script>

<style lang="stylus" scoped></style>
