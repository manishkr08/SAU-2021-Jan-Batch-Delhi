(this["webpackJsonpclass-work"]=this["webpackJsonpclass-work"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(1),d=o.n(a),s=o(4),c=o.n(s),i=(o(14),function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,d=e.getLCP,s=e.getTTFB;o(t),n(t),a(t),d(t),s(t)}))}),r=o(2),l=o(5),u=o(6),h=o(8),j=o(7);function k(t){var e=t.value,o=t.onChange,a=t.placeHolder;return Object(n.jsx)("input",{className:"add-todo",type:"text",placeholder:a,onChange:o,value:e})}o(15);function b(t){return Object(n.jsxs)("div",{style:t.todo.show?{}:{display:"none"},className:"list-item",children:[Object(n.jsx)("input",{type:"checkbox",checked:t.todo.marked,onChange:function(){return t.markTask(t.index)},name:"check"}),Object(n.jsx)("label",{htmlFor:"check",style:t.todo.marked?{textDecoration:"line-through"}:{},children:t.todo.todo}),Object(n.jsxs)("div",{className:"right-buttons",children:[Object(n.jsx)("button",{onClick:function(){t.duplicateTodo(t.index)},className:"duplicate-bu",children:"+"}),Object(n.jsx)("button",{onClick:function(){t.deleteTodo(t.index)},className:"delete-bu",children:"X"})]})]},t.index)}function p(t){return Object(n.jsx)("div",{className:"list",children:t.todos.map((function(e,o){return Object(n.jsx)(b,{deleteTodo:t.deleteTodo,duplicateTodo:t.duplicateTodo,markTask:t.markTask,todo:e,index:o},o)}))})}var m=function(t){Object(h.a)(o,t);var e=Object(j.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{todo:"Todo 1",marked:!0,show:!0},{todo:"Todo 2",marked:!1,show:!0},{todo:"Todo 3",marked:!0,show:!0}],title:"My tasks",todo:""},t.handleChange=function(e){t.setState({todo:e.target.value})},t.addTodos=function(){var e=t.state,o=e.todos,n=e.todo;if(""!==n){var a=Object(r.a)(o),d={todo:n,marked:!1,show:!0};a.push(d),t.setState({todos:a}),t.setState({todo:""})}},t.markTask=function(e){var o=Object(r.a)(t.state.todos);o[e].marked=!o[e].marked,t.setState({todos:o}),console.log("Toogling task ".concat(!t.state.todos[e].marked," to ").concat(t.state.todos[e].marked))},t.deleteTodo=function(e){console.log("deleting todo at index ".concat(e));var o=Object(r.a)(t.state.todos);o=o.filter((function(t,o){return o!==e})),t.setState({todos:o})},t.duplicateTodo=function(e){console.log("making duplicate of todo at index ".concat(e));var o=Object(r.a)(t.state.todos),n=JSON.parse(JSON.stringify(o[e]));n.marked=!1,o.push(n),t.setState({todos:o})},t.applyFiler=function(e){var o=Object(r.a)(t.state.todos).map((function(t){return t.show="completed"===e?t.marked:"pending"!==e||!t.marked,t}));t.setState({todos:o})},t}return Object(u.a)(o,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"todo-container",children:[Object(n.jsx)("h1",{className:"header",children:"Todo App"}),Object(n.jsx)(k,{placeHolder:"Add new task",value:this.state.todo,onChange:this.handleChange}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{onClick:this.addTodos,children:"Add task"}),Object(n.jsx)("button",{onClick:function(){return t.applyFiler("all")},children:"All tasks"}),Object(n.jsx)("button",{onClick:function(){t.applyFiler("pending")},children:"Pending"}),Object(n.jsx)("button",{onClick:function(){t.applyFiler("completed")},children:"Completed"})]}),Object(n.jsx)(p,{deleteTodo:this.deleteTodo,todos:this.state.todos,markTask:this.markTask,duplicateTodo:this.duplicateTodo})]})}}]),o}(d.a.Component);var f=function(){return Object(n.jsx)(m,{})};c.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.6e0963ab.chunk.js.map