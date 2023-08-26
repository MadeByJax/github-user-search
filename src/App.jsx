import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import { Octokit } from "octokit";

function App() {
  const octokit = new Octokit({
    auth: "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",
  });

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
        console.log(response);
        setUser(response.data);
        setIsLoading(false);
        setError();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      console.log(user);
      setError(error);
    }
  };

  useEffect(() => {
    fetchGithubUser("Madebyjax");
  }, []);

  return (
    <div className="flex items-center justify-center md:h-screen px-6 py-8">
      <div className="w-[90%]  md:w-[730px]">
        <Header />
        <Search error={error} fetchGithubUser={fetchGithubUser} />
        <Card isLoading={isLoading} user={user} />
      </div>
    </div>
  );
}

export default App;
