interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}

function printUser(user: User): string {
  return `ID=${user.id}, Name=${user.name}, Admin=${user.isAdmin ?? false}`;
}

const button = document.getElementById("showUser") as HTMLButtonElement | null;
const result = document.getElementById("result") as HTMLParagraphElement | null;

button?.addEventListener("click", () => {
  const user: User = { id: 1, name: "우진" };
  const text = printUser(user);

  if (result) {
    result.textContent = text;
  }
});