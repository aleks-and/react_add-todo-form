(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=a(10),c=a(7),l=a(2),m=a(3),u=a(5),d=a(4),p=a(6),h=[{userId:1,id:1,title:"delectus aut autem",completed:!0},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=(a(16),a(17),a(1)),f=a.n(g),y=function(e){var t=e.user.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"User: ",t))},v=function(e){var t=e.todo,a=t.completed,n=t.title,o=t.id,s=t.user,i=f()("todo-list__item",{"todo-list__item--is-completed":a});return r.a.createElement("div",{className:"col-md-6 col-lg-4 mb-5"},r.a.createElement("div",{className:i},r.a.createElement("h2",null,n),r.a.createElement(y,{user:s}),r.a.createElement("p",null,"ID: ",o)))},E=function(e){var t=e.preparedTodos;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"todo-list row"},t.map(function(e){return r.a.createElement(v,{todo:e,key:e.id})})))},w=(a(18),function(e){var t=e.usersCount,a=e.todosCount;return r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("header",{className:"header col text-center"},r.a.createElement("h1",{className:"mb-5"},"Static list of todos"),r.a.createElement("p",null,r.a.createElement("span",null,"Todos: "),a),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),t))))}),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedUser:0,inputTodoValue:"",inputTodoError:!1,selectUserError:!1},a.onChangeSelectOfUser=function(e){var t=e.target.value;0!==t?a.setState({selectedUser:Number(t),selectUserError:!1}):a.setState({selectedUser:Number(t)})},a.onChangeInputOfTodo=function(e){var t=e.target.value;""!==t?a.setState({inputTodoValue:t,inputTodoError:!1}):a.setState({inputTodoValue:t})},a.addTodo=function(e){e.preventDefault();var t=a.state,n=t.inputTodoValue,r=t.selectedUser,o=a.props.updatedTodosList;if(n&&0!==r){var s={userId:Number(r),title:n,completed:!1};a.setState({selectedUser:0,inputTodoValue:""}),o(s)}else a.setState({selectUserError:0===r,inputTodoError:!n})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.usersList,t=this.state,a=t.selectedUser,n=t.inputTodoValue,o=t.inputTodoError,s=t.selectUserError,i=f()("form-control",{"is-invalid":o}),c=f()("form-control",{"is-invalid":s});return r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col-lg-6 mx-auto",onSubmit:this.addTodo},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"todo-text"},"Todo text:"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",value:n,onChange:this.onChangeInputOfTodo,id:"todo-text",className:i}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter the title"))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"todo-user"},"User:"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("select",{value:a,onChange:this.onChangeSelectOfUser,className:c,id:"todo-user"},r.a.createElement("option",{key:"Choose a user",value:0},"Choose a user"),e.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),r.a.createElement("div",{className:"invalid-feedback"},"Please choose a user"))),r.a.createElement("div",{className:"form-group row justify-content-end"},r.a.createElement("div",{className:"col-sm-9 text-right"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Add"))))))}}]),t}(r.a.Component);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={usersList:Object(c.a)(b),todosList:Object(c.a)(h)},a.getTodosWithUsers=function(e,t){return e.map(function(e){return N({},e,{user:t.find(function(t){return t.id===e.userId})})})},a.updatedTodosList=function(e){var t=a.state.todosList;a.setState({todosList:[].concat(Object(c.a)(t),[N({id:t.length+1},e)])})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.usersList,a=e.todosList,n=this.getTodosWithUsers(a,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{usersCount:t.length,todosCount:a.length}),r.a.createElement(O,{usersList:t,addTodo:this.addTodo,updatedTodosList:this.updatedTodosList}),r.a.createElement(E,{preparedTodos:n}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.81eed99d.chunk.js.map