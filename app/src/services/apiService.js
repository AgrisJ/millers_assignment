const BASE_URL = import.meta.env.VITE_APP_API_URL;

async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export default { getCategories };
