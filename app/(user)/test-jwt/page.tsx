"use client";
import React, { useState } from "react";
export default function TestJWT() {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState(null);
  const [unAthorized, setUnAthorized] = useState(false);
  const dispatch = useState("dispatch");

  //handle login
  const handleLogin = async () => {
    const email = "taingey2966@gmail.com";
    const password = "ta123456?";
    fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data in jwt test: ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from logout", data);
        setAccessToken(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //handle partial update
  const handlePartialUpdate = async () => {
    const body = {
      name: "Causal Wardrobe Update"
    };
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_DJANGO_API_URL || "https://store.istad.co"
      }/api/products/${520}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      }
    );

    if (res.status === 401) {
      setUnAthorized(true);
    }
    const data = await res.json();
    console.log("Data from partial update", data);
  };

  const hanldeRefreshToken = async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/refresh", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from refresh token", data);
        setAccessToken(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="h-screen grid place-content-center gap-5">
      <h1 className="text-5xl">Test JWT</h1>
      <button
        onClick={handleLogin}
        className="p-4 bg-blue-600 rounded-xl, text-3xl text-gray-100"
      >
        Click Login
      </button>
      <button
        onClick={handlePartialUpdate}
        className="p-4 bg-pink-600 rounded-xl, text-3xl text-gray-100"
      >
        Update Partial
      </button>
      {unAthorized && (
        <button
          onClick={hanldeRefreshToken}
          className="p-4 bg-amber-400 rounded-xl, text-3xl text-gray-100"
        >
          Refresh Token
        </button>
      )}
      <button
        onClick={handleLogout}
        className="p-4 bg-pink-600 rounded-xl, text-3xl text-gray-100"
      >
        Clisk Logout
      </button>
    </main>
  );
}
