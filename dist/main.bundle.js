"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addDeleteTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addDeleteTask.js */ \"./src/modules/addDeleteTask.js\");\n/* harmony import */ var _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task-obj.js */ \"./src/modules/task-obj.js\");\n// import './style.css';\n\n\n\n// Declare function to add tasks to the task-object\nconst addItem = document.getElementById('add_task');\naddItem.addEventListener('keypress', () => {\n  if (window.event.keyCode === 13) {\n    if (addItem.value === '') {\n      const task = {\n        index: _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length + 1,\n        description: '\"Do Task\"',\n        completed: false,\n      };\n      _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(task);\n      (0,_modules_addDeleteTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n    } else {\n      const task = {\n        index: _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length + 1,\n        description: addItem.value,\n        completed: false,\n      };\n      _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(task);\n      (0,_modules_addDeleteTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n    }\n    localStorage.setItem('tasks', JSON.stringify(_modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  }\n});\n\nwindow.addEventListener('click', (event) => {\n  if (!event.target.matches('.dots_icon')) {\n    const dotDiv = document.getElementsByClassName('dot_div');\n    for (let i = 0; i < dotDiv.length; i += 1) {\n      dotDiv[i].style.display = 'none';\n    }\n  }\n});\n\nwindow.addEventListener('load', () => {\n  _modules_task_obj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((task) => {\n    (0,_modules_addDeleteTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n  });\n});\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addDeleteTask.js":
/*!**************************************!*\
  !*** ./src/modules/addDeleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _three_dots_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three-dots.js */ \"./src/modules/three-dots.js\");\n/* harmony import */ var _edit_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-task.js */ \"./src/modules/edit-task.js\");\n/* harmony import */ var _task_obj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-obj.js */ \"./src/modules/task-obj.js\");\n\n\n\n\n// Declare function to add & delete tasks in the list\nconst addTask = (task) => {\n  const list = document.querySelector('.todo_list');\n\n  const temp = ` <li class=\"list_item common_styles\">\n        <div class=\"task_container\">\n            <input type=\"checkbox\" id=\"${task.id}\">\n            <label>${task.description}</label>\n        </div>   \n           <div class=\"dot_div\" id=\"${task.id}\">\n           <ul class=\"dot_ul\">\n               <li class=\"dot_li\">\n                     <button class=\"dot_btn edit_btn\" id=\"\">\n                     <img src=\"./images/edit.png\" alt=\"edit\" class=\"edit_icon\"></img>\n                      Edit ask\n                     </button>\n               </li>\n                <hr>\n               <li class=\"dot_li\">\n                     <button class=\"dot_btn trash_btn\" id=\"${task.index}\">\n                     <img src=\"./images/trash.png\" alt=\"trash\" class=\"trash_icon\"></img>\n                     Delete task\n                     </button>\n               </li>\n           </ul>\n         </div>\n         <img src=\"./images/dots.png\" alt=\"dots\" class=\"dots_icon\" id=\"${task.id}\"</img>  \n    </li>`;\n\n  list.innerHTML += temp;\n\n  (0,_three_dots_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  (0,_edit_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const deleteTask = () => {\n    const trashbtn = document.querySelectorAll('.trash_btn');\n    const listItem = document.querySelectorAll('.list_item');\n\n    for (let i = 0; i < trashbtn.length; i += 1) {\n      trashbtn[i].addEventListener('click', () => {\n        listItem[i].remove();\n        _task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].filter((task) => {\n          if (task.index === parseInt(trashbtn[i].id, 10)) {\n            _task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].splice(_task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].indexOf(task), 1);\n            localStorage.setItem('tasks', JSON.stringify(_task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n          }\n          return _task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        });\n        const list = document.querySelector('.todo_list');\n        list.innerHTML = '';\n        _task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((task) => {\n          addTask(task);\n          task.index = (_task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].indexOf(task)) + 1;\n          localStorage.setItem('tasks', JSON.stringify(_task_obj_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n        });\n      });\n    }\n  };\n\n  deleteTask();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list-app/./src/modules/addDeleteTask.js?");

/***/ }),

/***/ "./src/modules/edit-task.js":
/*!**********************************!*\
  !*** ./src/modules/edit-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function to edit task's description\nconst editTask = () => {\n  const editbtn = document.getElementsByClassName('edit_btn');\n  const label = document.getElementsByTagName('label');\n\n  for (let i = 0; i < editbtn.length; i += 1) {\n    editbtn[i].addEventListener('click', () => {\n      label[i].contentEditable = true;\n      label[i].focus();\n      label[i].addEventListener('keydown', (event) => {\n        if (event.keyCode === 13) {\n          label[i].contentEditable = false;\n        }\n      });\n    });\n  }\n\n  for (let i = 0; i < label.length; i += 1) {\n    label[i].addEventListener('click', () => {\n      label[i].contentEditable = true;\n      label[i].focus();\n      label[i].addEventListener('keydown', (event) => {\n        if (event.keyCode === 13) {\n          label[i].contentEditable = false;\n        }\n      });\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://todo-list-app/./src/modules/edit-task.js?");

/***/ }),

/***/ "./src/modules/task-obj.js":
/*!*********************************!*\
  !*** ./src/modules/task-obj.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Declare array of objects\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-list-app/./src/modules/task-obj.js?");

/***/ }),

/***/ "./src/modules/three-dots.js":
/*!***********************************!*\
  !*** ./src/modules/three-dots.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Implement the functionality of the three dots menu.\nconst threeDots = () => {\n  const dotsIcon = document.querySelectorAll('.dots_icon');\n  const dotDiv = document.querySelectorAll('.dot_div');\n\n  for (let i = 0; i < dotsIcon.length; i += 1) {\n    dotDiv[i].style.display = 'none';\n    dotsIcon[i].addEventListener('click', () => {\n      if (dotDiv[i].style.display === 'none') {\n        dotDiv[i].style.display = 'block';\n      } else {\n        dotDiv[i].style.display = 'none';\n      }\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (threeDots);\n\n//# sourceURL=webpack://todo-list-app/./src/modules/three-dots.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);