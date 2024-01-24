import axios from "axios";

// /api/register/
const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function registerUser(registerData) {
  try {
    const response = await client.post("/api/register/", registerData);

    return response.data;
  } catch (error) {
    console.error("Error while registering:", error);
    throw error;
  }
}

export async function login(loginData) {
  try {
    const response = await client.post("/api/login/", loginData);

    console.log(response.data);

    localStorage.setItem("authToken", response.data.user.token);

    await saveUserToDB(response.data);

    return response.data;
  } catch (error) {
    console.error("Error while login:", error);
    throw error;
  }
}

export async function saveUserToDB(data) {
  if (!data) {
    throw new Error("User");
  }

  return data;
}

export async function logout() {
  try {
    const response = await client.post("/api/logout/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function forgotPasswordApi(newData) {
  try {
    const response = await client.post("/api/reset-password/", newData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while changing password:", error);
    throw error;
  }
}

export async function changePasswordApi(newData) {
  try {
    const response = await client.post("/api/change-password/", newData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while changing password:", error);
    throw error;
  }
}

export const getCurrentUser = async (token) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/current-user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch current user");
    }

    return response.json();
  } catch (error) {
    console.error("Error while fetching current user:", error);
    throw error;
  }
};

export async function getUserById(id, token) {
  try {
    console.log(id, token);
    const response = await axios.get(`/api/get-user/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getChartData() {
  try {
  } catch (error) {
    console.error(error);
  }
}

export async function changeImage(image, token) {
  // photos/react-router.png
  const formData = new FormData();
  formData.append("image", image);

  console.log(formData);
  try {
    const response = await fetch("http://127.0.0.1:8000/api/upload-photo/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error("Image upload failed");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function financialEntry(incomeData, token) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/financial-entries/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incomeData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error submitting request:", errorData);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function expenceEntry(expenceData, token) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/expense-entries/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenceData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error submitting request:", errorData);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getYourFinances(token) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/financial-entries/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getYourExpence(token) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/expense-entries/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// financial-expense-summary/<int:period>/
export async function getBalanceSummary(period, token) {
  console.log(period);
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/financial-expense-summary/week/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
