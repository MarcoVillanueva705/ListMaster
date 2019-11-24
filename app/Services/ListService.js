import List from "../Models/List.js";
import Items from "../Models/Item.js";
import _store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList) {
    debugger;
    let list = new List(newList);
    _store.State.lists.push(list);
    _store.saveState();
    console.log(_store.State.lists);
  }
  addItem(newItem) {
    let item = new Items(newItem);
    let list = _store.State.lists.find(l => l.id == item.listId);
    list.items.push(item);
    _store.saveState();
  }
  removeItem(listId, itemId) {
    let listToRemoveItemFrom = _store.State.lists.find(l => l.id == listId);
    let itemIndex = listToRemoveItemFrom.items.findIndex(i => i.id == itemId);
    listToRemoveItemFrom.items.splice(itemIndex, 1);
    _store.saveState();
  }
  removeList(id) {
    // let removeTheList = _store.State.lists.find(l => l.id == id);
    let listIndex = _store.State.lists.findIndex(t => t.id == id);
    _store.State.lists.splice(listIndex, 1);
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
