class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const input = document.getElementById("itemInput") as HTMLInputElement | null;
const button = document.getElementById("addButton") as HTMLButtonElement | null;
const list = document.getElementById("itemList") as HTMLUListElement | null;

const stringStorage = new Storage<string>();

button?.addEventListener("click", () => {
  if (input && input.value.trim() !== "") {
    stringStorage.add(input.value.trim());

    if (list) {
      list.innerHTML = "";
      stringStorage.getAll().forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }

    input.value = "";
  }
});
