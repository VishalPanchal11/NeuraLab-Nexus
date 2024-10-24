import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Generating from "./Generating";

const Videos = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10 -mt-[3rem]">
        <Heading title="" tag="Ready to get started" />
        <Generating
          text="Search Keyword..."
          className="absolute left-4 right-4 top-16 mt-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-[40rem] md:left-1/2 md:right-auto md:bottom-8 md:-translate-x-1/2 md:w-[40rem]"
        />
        <div className="relative pt-12 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[3rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                className={`md:flex md:even:translate-y-[4rem] p-0.5 rounded-[2.5rem] bg-conic-gradient`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                      className="w-full"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center pl-2 pr-6 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center mb-10 -my-10 -mx-15 ">
                      <iframe
                        src={item.imageUrl}
                        className="w-[90%] flex items-center justify-center aspect-[15/9] h-1/2 rounded-[1rem] bg-conic-gradient p-[0.2rem] "
                        frameBorder="0"
                      ></iframe>
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Gradient />
        {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="">Our roadmap</Button>
        </div> */}
      </div>
    </Section>
  );
};

export default Videos;

// import { useState } from "react";
// import Heading from "./Heading";
// import Section from "./Section";
// import { Gradient } from "./design/Roadmap";

// const Videos = () => {
//   const [query, setQuery] = useState(""); // State to store user query
//   const [videos, setVideos] = useState([]); // State to store recommended videos

//   // Function to handle search when user submits the query
//   const handleSearch = async (searchQuery) => {
//     try {
//       console.log('Sending query:', searchQuery); // Log the query being sent

//       const response = await fetch('http://127.0.0.1:5000/recommend', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query: searchQuery }), // Only send the query
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Received data:', data); // Log the received data

//       // Update your state with the received data
//       setVideos(data); // Correctly set videos
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   return (
//     <Section className="overflow-hidden" id="roadmap">
//       <div className="container md:pb-10 -mt-[3rem]">
//         <Heading title="" tag="Ready to get started" />

//         {/* Search Input and Button */}
//         <div className="search-container">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)} // Update query state
//             placeholder="Search Keyword..."
//             className="search-input"
//           />
//           <button onClick={() => handleSearch(query)} className="search-button">
//             Search
//           </button>
//         </div>

//         {/* Display Recommended Videos */}
//         <div className="relative pt-12 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[3rem]">
//           {videos.map((video, index) => (
//             <div
//               className={`md:flex md:even:translate-y-[4rem] p-0.5 rounded-[2.5rem] bg-conic-gradient`}
//               key={index}
//             >
//               <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
//                 <div className="relative z-1">
//                   <div className="flex flex-col items-center justify-center mb-10 -my-10 -mx-15">
//                     <iframe
//                       src={video.v_iframe}
//                       className="w-[90%] flex items-center justify-center aspect-[15/9] h-1/2 rounded-[1rem] bg-conic-gradient p-[0.2rem]"
//                       frameBorder="0"
//                       title={video.v_title}
//                     ></iframe>
//                   </div>
//                   <h4 className="h4 mb-4">{video.v_title}</h4>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Gradient />
//       </div>
//     </Section>
//   );
// };

// export default Videos;