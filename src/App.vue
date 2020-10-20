<template>
<div id="app" class="container">
    <div class="row">
        <div class="col-md-4 offset-4 todo">
            <div class="row">
                <div class="col-md-12" style="background-color: #8E44AD; color: #fff;">
                    <h4 class="mt-2">Todo List</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <TodoInput />
                    <TodoList />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

@Component({
    name: 'App',
    components: {
        TodoInput,
        TodoList
    }
})
export default class App extends Vue {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.todo {
    padding: 0 15px;
    box-shadow: 1px 1px 10px #8E44AD;
}
</style>
