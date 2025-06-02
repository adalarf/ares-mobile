import axios from "axios";
import useStore from "../store";
import NavigationService from "../navigationService";

export const BASE_URL = "http://51.250.36.219:8000";

export const authService = {
  async login(email, password) {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );
      let save = await saveToken(response);
      if (save.success) {
        return { success: true };
      }
      return { success: false, error: "Токен не получен от сервера" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async register(email, password) {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      let save = await saveToken(response);
      if (save.success) {
        return { success: true };
      }
      return { success: false, error: "Токен не получен от сервера" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async refresh_tokens() {
    try {
      const refreshToken = useStore.getState().refreshToken;
      if (!refreshToken) {
        return { success: false, error: "Refresh token not found" };
      }
      const response = await axios.post(`${BASE_URL}/auth/refresh`, null, {
        params: { refresh_token: refreshToken },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let save = await saveToken(response);
      if (save.success) {
        return { success: true };
      }
      return { success: false, error: "Не удалось обновить токены" };
    } catch (error) {
      console.log("Error refreshing tokens:");
      if (
        (error.response && error.response.status === 500) ||
        error.response.status === 401
      ) {
        console.log("Refresh token expired");
        useStore.setState({ authToken: "", refreshToken: "" });
        NavigationService.reset("authorization", 0);
        return { success: false, error: "Refresh token expired" };
      }
      return { success: false, error: error.message };
    }
  },

  async get_token() {
    try {
      const token = useStore.getState().authToken;
      if (!token) {
        console.log("Token not found");
        NavigationService.reset("authorization", 0);
        return null;
      }
      const payload = token.split(".")[1];
      const decoded = JSON.parse(
        atob(payload.replace(/-/g, "+").replace(/_/g, "/")),
      );
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp && decoded.exp > now) {
        return token;
      } else {
        const refreshResult = await authService.refresh_tokens();
        if (refreshResult.success) {
          return useStore.getState().authToken;
        } else {
          return null;
        }
      }
    } catch (e) {
      return null;
    }
  },
};

const saveToken = async (response) => {
  if (response.status === 200) {
    const authToken = response.data.token || response.data.access_token;
    const refreshToken = response.data.refresh_token;
    if (authToken) {
      useStore.setState({ authToken });
    }
    if (refreshToken) {
      useStore.setState({ refreshToken });
    }
    if (authToken && refreshToken) {
      return { success: true };
    }
  }
};