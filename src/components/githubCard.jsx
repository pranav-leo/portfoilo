import { useEffect, useState } from "react";
// import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = () => {
  const [githubProfileData, setGithubProfileData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/pranav-iitr`)
      .then((res) => res.json())
      .then((data) => setGithubProfileData(data))
      .catch((error) =>
        console.error("Error fetching GitHub profile data:", error)
      );
  }, []);

  return (
    <div className="bg-gradient-info shadow-lg rounded-lg p-6">
      <div className="flex gap-20 flex-col md:flex-row items-center">
        <div className="order-2 md:order-1 md:w-1/3  text-center md:text-left">
          <img
            src={githubProfileData?.avatar_url}
            alt="Profile"
            className="w-64 h-64 rounded-full shadow-lg hover:shadow-xl mb-4"
          />
        </div>
        <div className="max-w-[30vw] text-white">
          <h2 className="text-2xl font-bold mb-2">Reach Out to me!</h2>
          <p className="text-lg leading-relaxed mb-3">
            WANT TO COLLABORATE ON A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS
            OPEN FOR ALL
          </p>
          <p className="mb-4">{githubProfileData?.bio}</p>
          <div className="flex gap-10" >
          {/* <div className="flex items-center space-x-2 bg-white text-black w-fit rounded-lg shadow px-4 py-2 mb-4">
            <i className="ni ni-pin-3 text-black " />
            <span>{githubProfileData?.location}</span>
          </div> */}
          <div
          className="bg-white text-black w-fit rounded-lg shadow px-4 py-2 mb-4 cursor-pointer"
            onClick={() => {
              window.open(`
                    https://calendly.com/pranavleo22/30min
                `);
            }}
          >
            {" "}
            Schedule a Meet{" "}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps() {
//   const githubProfileData = await fetch(
//     `https://api.github.com/users/pranav-iitr`
//   )
//     .then((res) => {
//       console.log("g_res", res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log("g_res_data", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error fetching GitHub profile data:", error);
//       return null;
//     });

//   console.log("g_res_final", githubProfileData);

//   return {
//     props: { githubProfileData },
//   };
// }

export default GithubProfileCard;
