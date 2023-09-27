const BASE_URL: string = import.meta.env.VITE_APP_API_URL;

async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
async function getStyles() {
  const response = await fetch(`${BASE_URL}/styles`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
async function getStyle(id: string) {
  const response = await fetch(`${BASE_URL}/categories/${id}/styles`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export default { getCategories, getStyles, getStyle };
