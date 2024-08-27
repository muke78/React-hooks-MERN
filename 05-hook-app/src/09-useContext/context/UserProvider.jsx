import { useState } from "react";
import { UserContext } from "./UserContext";

export const userObject = {
    id: "09490DF",
    name: "Roberto Fernández",
    username: "rfernandez94",
    email: "roberto.fernandez@example.com",
    password: "5f4dcc3b5aa765d61d8327deb882cf99", // Hashed version of "password"
    dateOfBirth: "1994-07-15",
    address: {
        street: "1234 Elm Street",
        city: "Madrid",
        state: "Madrid",
        zipCode: "28001",
        country: "Spain"
    },
    phone: "+34 654 321 987",
    avatarUrl: "https://example.com/avatar/09490DF.jpg",
    createdAt: "2023-08-24T12:34:56Z",
    updatedAt: "2024-08-24T12:34:56Z",
    isActive: true,
    isAdmin: false,
    lastLogin: "2024-08-23T08:45:00Z",
    preferences: {
        theme: "dark",
        language: "es",
        notifications: true
    },
    socialProfiles: {
        twitter: "@roberto_f",
        linkedin: "linkedin.com/in/roberto-fernandez"
    },
    bio: "Software developer with a passion for coding and technology.",
    jobTitle: "Frontend Developer",
    company: "Tech Solutions SL",
    website: "https://roberto.dev"
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userObject);


  return (
    <UserContext.Provider value={{ user, setUser}}>{children}</UserContext.Provider>
  );
};
