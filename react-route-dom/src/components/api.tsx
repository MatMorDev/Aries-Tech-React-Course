const BASE_URL = "https://dummyjson.com/todos";

export const getToDoList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
