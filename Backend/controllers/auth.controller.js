export async function registerController(req, res) {
  const { firstname, lastname, email, password } = req.body;
  res.json({ firstname, lastname, email, password });
  console.log(firstname, lastname, email, password);
}
