<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <meigen />
    <b-container>
      <b-input-group class="m-2">
        <b-form-input type="text" v-model="newTodoName" />
        <b-button variant="primary" @click="addTodo()">追加</b-button>
      </b-input-group>
    </b-container>
    <b-container>
      <b-row v-for="(todo, key) in todos" :key="key" class="mt-2">
        <b-col cols="8" :class="{line: todo.isComplete}">
          <h5> {{ todo.name }}</h5>
        </b-col>
        <b-col cols="4">
          <b-button
            v-model="todo.isComplete"
            @click="updateTodo(todo, key)"
            :variant="todo.isComplete ? '' : 'success'">
            完了
          </b-button>
          <b-button variant="danger" @click="removeTodo(key)">削除</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase';
import meigen from '@/components/meigen.vue';

export default {
  name: 'App',
  components: { meigen },
  data() {
    return {
      db: null,
      todosRef: null,
      newTodoName: '',
      todos: {},
    };
  },
  created() {
    this.db = firebase.firestore();
    this.todosRef = this.db.collection('todos');
    this.todosRef.onSnapshot((querySnapshot) => {
      const obj = {};
      querySnapshot.forEach((doc) => {
        obj[doc.id] = doc.data();
      });
      this.todos = obj;
    });
  },
  methods: {
    addTodo() {
      if (this.newTodoName === '') {
        return;
      }
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      });
      this.newTodoName = '';
    },
    updateTodo(todo, key) {
      todo.isComplete = !todo.isComplete; // eslint-disable-line
      this.todosRef.doc(key).update(todo);
    },
    removeTodo(key) {
      this.todosRef.doc(key).delete();
    },
  },
};
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
.line {
  text-decoration: line-through;
}
</style>
