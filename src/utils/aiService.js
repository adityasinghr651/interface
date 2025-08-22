// src/utils/aiService.js

const API_BASE_URL = '/api/ai'; // Replace with your actual API base URL

export async function generateAIResponse(course, userInput, conversationHistory) {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course,
        userInput,
        conversationHistory,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.aiResponse; // Assuming the AI response is in a field called 'aiResponse'
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
}