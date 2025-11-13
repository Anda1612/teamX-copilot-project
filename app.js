// Minimal client-side to manage a small in-memory to-do list
const form = document.getElementById('new-item-form');
const input = document.getElementById('new-item');
const list = document.getElementById('list');

const state = { items: [] };

function render() {
  list.innerHTML = '';
  state.items.forEach((it, idx) => {
    const li = document.createElement('li');
    li.textContent = it.text;
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
      state.items.splice(idx, 1);
      render();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const v = input.value && input.value.trim();
  if (!v) return;
  state.items.push({ text: v });
  input.value = '';
  render();
});

// initial render
render();
