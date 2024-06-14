import axios from "axios";

const JSON_SERVER_HOST = "https://gigantic-troubled-clavicle.glitch.me";

export const getExpenses = async () => {
  try {
    const respone = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return respone.data;
  } catch (error) {
    alert("뭔가 잘못됨");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const respone = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return respone.data;
  } catch (error) {
    alert("뭔가 잘못됨");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const respone = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return respone.data;
  } catch (error) {
    alert("뭔가 잘못됨");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const respone = await axios.put(`${JSON_SERVER_HOST}/expenses/${id}`, rest);
    return respone.data;
  } catch (error) {
    alert("수정이 잘못됨");
  }
};

export const deleteExpense = async (id) => {
  try {
    const respone = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return respone.data;
  } catch (error) {
    alert("삭제가 잘못됨");
  }
};
