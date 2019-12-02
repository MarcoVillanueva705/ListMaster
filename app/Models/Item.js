import { generateId } from "../utils.js";

export default class Items {
  constructor({ id = generateId(), listId, task }) {
    this.id = id;
    this.listId = listId;
    this.task = task;
  }
  get Template() {
    return `
    <dt>${this.task}</dt>
    <button class="btn btn-outline btn-danger btn-sm" onclick="app.listController.removeItem('${this.listId}','${this.id}')">x</button>
    `;
  }
}
