const host = "http://localhost:8000/";
const endpoint = "students";

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}