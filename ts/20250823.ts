function add(a: number, b: number) {
  return a + b;
}

if (typeof globalThis.document !== "undefined") {
  const button = document.getElementById("calc") as HTMLButtonElement | null;
  const result = document.getElementById("result") as HTMLParagraphElement | null;

  button?.addEventListener("click", () => {
    const sum = add(10, 20);
    if (result) result.textContent = `10 + 20 = ${sum}`;
  });
} else {
  // Node 환경일때 실행됨
  console.log("10 + 20 =", add(10, 20));
}
