import ListService from "../Services/ListService.js";
import Items from "../Models/Item.js";
import _store from "../store.js";

function _drawLists() {
  let listsTemplate = "";
  let lists = _store.Lists;
  lists.forEach(list => {
    listsTemplate += list.Template;
  });
  document.querySelector("#lists").innerHTML = listsTemplate;
}
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value,
      items: []
    };
    ListService.addList(newList);
    formData.reset();
    console.log("i am talking to controller");
    _drawLists();
  }

  addItem(event, lId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      task: formData.task.value,
      listId: lId
    };
    ListService.addItem(newItem);
    formData.reset();
    _drawLists();
  }
  removeItem(listId, itemId) {
    ListService.removeItem(listId, itemId);
    _drawLists();
  }

  removeList(id, title) {
    ListService.removeList(id, title);
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
