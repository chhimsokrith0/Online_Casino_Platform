// import { signIn } from "next-auth/react";

// export default function SignIn() {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
//         <h1 className="text-xl font-bold">Sign In</h1>
//         <form
//           onSubmit={async (e) => {
//             e.preventDefault();
//             const username = e.target.username.value;
//             const password = e.target.password.value;

//             const result = await signIn("credentials", {
//               redirect: false,
//               username,
//               password,
//             });

//             if (result?.error) {
//               alert("Error: " + result.error);
//             } else {
//               alert("Login successful");
//             }
//           }}
//         >
//           <div>
//             <label>Username</label>
//             <input
//               name="username"
//               type="text"
//               className="border p-2 w-full"
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               name="password"
//               type="password"
//               className="border p-2 w-full"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 mt-4"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h1 className="text-xl font-bold">Sign In</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement; // Explicitly type e.target
            const username = (form.elements.namedItem("username") as HTMLInputElement).value;
            const password = (form.elements.namedItem("password") as HTMLInputElement).value;

            const result = await signIn("credentials", {
              redirect: false,
              username,
              password,
            });

            if (result?.error) {
              alert("Error: " + result.error);
            } else {
              alert("Login successful");
            }
          }}
        >
          <div className="mt-4">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
