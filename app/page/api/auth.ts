// import { NextApiRequest, NextApiResponse } from "next";
// import sqlite3 from "sqlite3";
// // import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Store in environment variable for production

// const db = new sqlite3.Database("./database.sql", (err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err.message);
//   } else {
//     console.log("Connected to SQLite database.");
//   }
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { username, password, action } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: "Username and password are required" });
//   }

//   try {
//     if (action === "register") {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       db.run(
//         "INSERT INTO users (username, password) VALUES (?, ?)",
//         [username, hashedPassword],
//         (err) => {
//           if (err) {
//             if (err.message.includes("UNIQUE")) {
//               return res.status(409).json({ message: "Username already exists" });
//             }
//             return res.status(500).json({ message: "Database error", error: err.message });
//           }
//           return res.status(201).json({ message: "User registered successfully" });
//         }
//       );
//     } else if (action === "login") {
//       db.get("SELECT * FROM users WHERE username = ?", [username], async (err, user) => {
//         if (err) {
//           return res.status(500).json({ message: "Database error", error: err.message });
//         }

//         if (!user) {
//           return res.status(404).json({ message: "User not found" });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//           return res.status(401).json({ message: "Invalid username or password" });
//         }

//         const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
//           expiresIn: "1h",
//         });

//         return res.status(200).json({ token });
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid action" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ message: "Internal server error", error: error.message });
//   }
// }
