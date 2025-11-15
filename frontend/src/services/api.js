const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Submit contact form data
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} API response
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit form");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Get all contact messages (Admin only)
 * @returns {Promise<Object>} API response with all contacts
 */
export const getAllContacts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch contacts");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Check API health status
 * @returns {Promise<Object>} Health check response
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Health Check Error:", error);
    throw error;
  }
};

export default {
  submitContactForm,
  getAllContacts,
  checkHealth,
};
