export async function registerController(req, res) {
  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
}
