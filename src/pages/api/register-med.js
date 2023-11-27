
export default async function handler(req, res) {
  if (req.method === "POST") {

    try {
      const request = await fetch(
        "https://medbuddy-7w7q.onrender.com/api/v1/medication",
        {
          method: "POST",
          headers: { "Content-Type": "application/json",
          "Authorization" : `Bearer ${req.headers.token}`,
        },
          body: req.body
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
