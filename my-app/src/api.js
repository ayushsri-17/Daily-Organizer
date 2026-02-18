const API = import.meta.env.VITE_API_URL;

export async function getDay(date) {
  const res = await fetch(`${API}/day/${date}`);
  return res.json();
}

export async function saveDay(date, data) {
  const res = await fetch(`${API}/day/${date}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
