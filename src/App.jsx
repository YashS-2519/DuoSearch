import { useState, useEffect } from "react";
import { Body } from "./components";
import { useSearchResult } from "./hooks";
import { getAiRespnse } from "./AiModel/method";

function App() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("India");
  const [engine, setEngine] = useState("google");
  const [browserSearchResult, setBrowserSearchResult] = useState({});
  const [aISearchResult, setAISearchResult] = useState();
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  const showResponse = () => {
    getAiRespnse(inputText).then((res) => {
      setAISearchResult(res);
    });
  };

  const searchResult = useSearchResult(query, location, engine);

  useEffect(() => {
    if (query) {
      setLoading(true);
      try {
        if (searchResult && "serpapi_pagination" in searchResult) {
          setBrowserSearchResult(searchResult);
        } else {
          setBrowserSearchResult({});
        }
      } catch (error) {
        console.error("Error fetching search result:", error);
        setBrowserSearchResult({});
      } finally {
        setLoading(false);
      }
    }
  }, [searchResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputText);
    showResponse();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container h-screen w-screen">
        <header className="header w-screen h-1/6 flex items-center bg-gray-800 p-4">
          <div className="logo w-1/6 flex justify-start">
            <h3 className="text-3xl">DuoSearch.</h3>
          </div>
          <form
            className="searchBar w-4/6 flex justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-3/4 p-2 rounded-md border border-gray-400"
              value={inputText}
              onChange={handleInputChange}
            />
          </form>
          <div className="menu w-1/6 flex justify-end">
            <a
              href="https://www.linkedin.com/in/yash-singh-422931246/"
              target="_blank"
            >
              <h6 className="mx-5">By- Yash Singh</h6>
            </a>
          </div>
        </header>
        <div className="App w-screen">
          <Body
            browserSearchResult={browserSearchResult}
            aISearchResult={aISearchResult}
          />
        </div>
      </div>
    </>
  );
}

export default App;
