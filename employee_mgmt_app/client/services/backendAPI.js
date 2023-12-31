import axios from "axios";

// axios.defaults.baseURL = "https://employeeapp.luday.xyz";
axios.defaults.baseURL = "https://3d54-2-248-194-22.ngrok-free.app";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUserApi = async (userData) => {
  const { data } = await axios.post("/auth/signup", userData);
  return { ...data.user };
};
export const loginUserApi = async (userData) => {
  const { data } = await axios.post("/auth/login", userData);
  return data;
};

export const currentUserApi = async (userToken) => {
  token.set(userToken);
  const { data } = await axios.get("/auth/current");
  return data;
};

// export const logoutUserApi = async (userToken) => {
//   await axios.post("/auth/logout", userToken);
//   token.unset();
//   return null;
// };

export const updateUserApi = async (userData) => {
  const { data } = await axios.patch("/auth/updateUserInfo", userData);
  return data.user;
};

export const fetchTimesApi = async (employeeId) => {
  const { data } = await axios.get(`/gettimes/${employeeId}`);
  return data;
};

export const registerTimeApi = async (timeData) => {
  const { data } = await axios.post("/times", timeData);
  return data;
};

export const fetchDocumentsApi = async (employeeId) => {
  const { data } = await axios.get(`/upload_docs/getdocs`);
  return data;
};
