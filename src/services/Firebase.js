import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEL3J2T3fMBP9QURRRVYC3Uw_WtLL3rMk",
  authDomain: "simovie-e4619.firebaseapp.com",
  projectId: "simovie-e4619",
  storageBucket: "simovie-e4619.appspot.com",
  messagingSenderId: "818205219185",
  appId: "1:818205219185:web:53982c770ead40760afed0",
  measurementId: "G-F2JC814L8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
