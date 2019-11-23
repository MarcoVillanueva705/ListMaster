import Items from "./Item.js";
import { generateId } from "../utils.js";

export default class List {
  constructor({ id = generateId(), title, items }) {
    this.id = id || generateId();
    this.title = title;
    this.items = items.map(i => new Items(i));
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }
  get Template() {
    return `
    <div class="col-5 mt-3 p-3 border rounded bg-info">
      <h1 class="text-center border-bottom">${this.title}</h1>
      <dl class="ml-5">
      ${this.getItemsTemplates()}
      </dl>
      <form onsubmit="app.listController.addItem(event, '${this.id}')">
        <div class="form-group">
          <label for="title"></label>
          <input type="text" class="form-control" id="task" placeholder="Enter Task Title..." />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${
          this.id
        }')">Delete List</button>
      </form>
    </div>
    `;
  }
  //NOTE this method will inject the subobject (speaker) template into the parent template
  getItemsTemplates() {
    let template = ""; //build string for all the sub document html
    this.items.forEach(item => {
      template += item.Template;
    });
    return template;
  }
}
//Be sure to add the methods needed to create the view template for this model
//For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
