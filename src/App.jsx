import Card from "./components/Card";
import "./App.css";

const App = () => {
  const jobOpenings = [
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/google.svg",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8ambll_L5-YV4PTuRhSwTlRXhbK1jQCs0n6VKkYRKA&s",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazon.svg",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apple.svg",
      company: "Apple",
      datePosted: "3 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/meta.svg",
      company: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "London, UK",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nvidia.svg",
      company: "NVIDIA",
      datePosted: "2 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$62/hour",
      location: "Austin, USA",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/netflix.svg",
      company: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Los Angeles, USA",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adobe.svg",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "UI Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Noida, India",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/salesforce.svg",
      company: "Salesforce",
      datePosted: "1 week ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$44/hour",
      location: "San Francisco, USA",
    },
    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFC8b4Y36NgmC8OJbWDlVXFenH3_h2bPBQI1wL0yfQw&s=10",
      company: "IBM",
      datePosted: "10 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent flex">
      {jobOpenings.map((jobOpening) => {
        return (
          <Card
            datePosted={jobOpening.datePosted}
            post={jobOpening.post}
            company={jobOpening.company}
            logo={jobOpening.brandlogo}
            tag1={jobOpening.tag1}
            tag2={jobOpening.tag2}
            pay={jobOpening.pay}
            location={jobOpening.location}
          />
        );
      })}
    </div>
  );
};

export default App;
