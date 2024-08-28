import React from "react";
import Markdown from "react-markdown";
import "./Body.css";

function Body({ browserSearchResult, aISearchResult }) {
  const { related_questions, organic_results } = browserSearchResult || {};

  return (
    <div className="body p-5">
      {/* Organic Results */}
      {organic_results && organic_results.length > 0 && (
        <div className="section flex justify-between w-full">
          <div className="w-3/4">
            {organic_results.map((result, index) => (
              <div className="result-item" key={index}>
                <h3 className="text-2xl">{result.title}</h3>
                <a href={result.link} target="_blank">
                  {result.link}
                </a>
                <p>{result.snippet}</p>
              </div>
            ))}
          </div>
          <div className="w-2/5 py-3 px-5 min-h-min">
            <div className="ai-result-item border rounded-lg h-min p-8 text-left">
              <h3 className="text-xl mb-4">AI Response</h3>
              {aISearchResult && (
                <div>
                  <Markdown>{aISearchResult}</Markdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Related Questions */}
      {related_questions && related_questions.length > 0 && (
        <div className="section">
          <h2>Related Questions</h2>
          <ul>
            {related_questions.map((question, index) => (
              <li key={index}>
                {/* <pre>{JSON.stringify(question, null, 2)}</pre> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Body;
