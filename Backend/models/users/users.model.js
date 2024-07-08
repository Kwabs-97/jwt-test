import { client } from "../../config/postgresDB/js";
export async function _createNewUser(
  first_name,
  last_name,
  email,
  hashed_password,
) {
  const createUserQuery = `INSERT INTO users (first_name, last_name, email, hashed_password)
VALUES($1,$2,$3,$4) RETURNING *
`;
  try {
    const result = await client.query(createUserQuery, [
      first_name,
      last_name,
      email,
      hashed_password,
    ]);
    return result.rows[0];
  } catch (error) {
    console.log("error creating user", error);
  }
}

export async function _getUserByEmail(email) {
  const getUserQuery = `SELECT * FROM users WHERE email = $1 RETURNING *`;
  try {
    const result = client.query(getUserQuery, [email]);
    return result.rows[0];
  } catch (error) {
    console.log("error finding user with this email", error);
  }
}
