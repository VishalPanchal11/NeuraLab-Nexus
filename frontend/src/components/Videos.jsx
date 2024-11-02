import { useState, useEffect } from "react";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";

const Videos = () => {
  const [query, setQuery] = useState(""); // State for user query
  const [videos, setVideos] = useState([]); // State for recommended videos

  // Function to handle video search
  const handleSearch = async (searchQuery) => {
    try {
        const response = await fetch("http://127.0.0.1:5011/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: searchQuery }),
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setVideos(data);
    } catch (error) {
        console.error("Error fetching videos:", error);
    }
};

  // Initial load: fetch top 10 Web Development videos
  useEffect(() => {
    handleSearch("Web Development");
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10 -mt-[3rem]">
        <Heading title="" tag="Ready to get started" />
        
        {/* Search Input and Button */}
        <div className="search-container -mt-[3rem] w-full flex justify-center items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Keyword..."
            className="search-input text-[#fff] rounded-full h-12 w-1/2 p-4"
          />
          <button onClick={() => handleSearch(query)} className="search-button text-white font-bold border-white border-[3px] p-2 rounded-lg mx-8">
            Search
          </button>
        </div>

        {/* Display Recommended Videos */}
        <div className="relative pt-12 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[3rem]">
          {videos.map((video, index) => (
            <div
              className={`md:flex max-h-[64rem]  md:even:translate-y-[4rem] p-0.5 rounded-[2.5rem] bg-conic-gradient`}
              key={index}
            >
              <div className="relative p-8 w-full bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex flex-col items-center justify-center mb-10 -my-10 -mx-15">
                    <iframe
                      src={video.v_iframe}
                      className="w-[90%] flex items-center justify-center aspect-[15/9] h-1/2 rounded-[1rem] bg-conic-gradient p-[0.2rem]"
                      frameBorder="0"
                      title={video.v_title}
                    ></iframe>
                  </div>
                  <h4 className="h5 text-justify mb-4">{video.v_title}</h4>
                  <div className="flex mt-16   w-full items-center justify-around">
                  <p className="tagline text-[0.9rem]">Date<br/>[{video.v_date || ""}]</p>
                  <p className="tagline text-center text-[0.9rem]">Views<br/>[{video.viewCount || ""}]</p>
                  <p className="tagline text-center text-[0.9rem]">Likes<br/>[{video.likeCount || ""}]</p></div>

                </div>
              </div>
            </div>
          ))}
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Videos;
