export async function getUser() {
  const res = await fetch('https://api.example.com/user');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}