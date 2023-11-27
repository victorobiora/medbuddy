
export default async function handler(req, res) {
    if (req.method === "GET") {
  
      try {
        const request = await fetch(
          "https://medbuddy-7w7q.onrender.com/api/v1/patient",
          {
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization" : `Bearer ${req.headers.token}`,
          }
          }
        );
  
        if (!request.ok) {
          console.log(request);
          throw new Error("for some reason, we can not register this med");
        }
  
        const response = await request.json();
  
        res.status(response.code).json({ data: response });
      } catch (error) {
        res.status(503).json({ error: error.message });
      }
    }
  }
  