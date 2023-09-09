import { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import { Octokit } from "octokit";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const octokit = new Octokit({
    auth: API_KEY,
  });

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [theme, setTheme] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const fetchGithubUser = async (searchedUser) => {
    try {
      setIsLoading(true);
      const response = await octokit.request("GET /users/{username}", {
        username: searchedUser,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        setIsLoading(false);
        setError();

        const githubTimestamp = response.data.created_at;
        const parsedTime = new Date(githubTimestamp);
        const day = parsedTime.getDate();
        const month = parsedTime.toLocaleString("en-US", { month: "short" });
        const year = parsedTime.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        setFormattedDate(formattedDate);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchGithubUser("octocat");
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex md:items-center justify-center bg-app-light dark:bg-app-dark h-screen px-6 py-8">
      <div className="w-[90%]  md:w-[730px]">
        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Search
          setError={setError}
          error={error}
          fetchGithubUser={fetchGithubUser}
        />
        <Card isLoading={isLoading} formattedDate={formattedDate} user={user} />
      </div>
    </div>
  );
}

export default App;
