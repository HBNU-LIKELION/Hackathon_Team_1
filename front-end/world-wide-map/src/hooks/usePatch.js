import { useState } from "react";




const usePatch = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `http://223.130.139.67:8000/Issue/${id}/`
  
  const patchData = async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Patch request failed.");
      }
      
      return await response.json();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { isLoading, error, patchData };
};

export default usePatch;
