import * as Avatar from "@radix-ui/react-avatar";
import { useState, useEffect } from "react";

const Tooltip = ({ data }) => {
  const [userInfo, setUserInfo] = useState(null);
  const lindin = [
    {
      name: "Tito-DM",
      lindin: "https://www.linkedin.com/in/tito-muanda-065350198/",
    },
    {
       name: "ariclinis",
      lindin: "https://www.linkedin.com/in/ariclene-chimbili/",
    },
    { name: "WendiCarvalho",
      lindin: "https://www.linkedin.com/in/wendi-carvalho-80ab111b6/",}
  ];

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch(` https://api.github.com/users/${data.login}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      });
      let user_info = await res.json();
      setUserInfo(user_info);
    }
    fetchPosts();
  }, [data.login]);
  return (
    
    <div className="tooltip centered-element ">
      <div className="flex flex-col">
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src={userInfo?.avatar_url}
            alt={userInfo?.login}
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="flex align-self-start mt-2">
          <small className="font-bold">{userInfo?.login}</small>
        </div>
      </div>
      <div className="flex  flex-col text-start">
        <div className="flex gap-1">
          <p className="font-bold text-sm">BIO:</p>

          <div className="w-100">
            <p className="text-sm  text-wrap text-gray-800  leading-relaxed tracking-wide break-words whitespace-normal">
              {userInfo?.bio}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="font-bold text-sm">followers:</p>
          <p className=" text-gray-800 text-sm">{userInfo?.followers}</p>
        </div>

        <a href={userInfo?.html_url} target="_blank">
          <small>GitHub Profile</small>
        </a>
        {lindin?.map((item, index) => {
          if (item.name === userInfo?.login) {
            return (
              <a href={item?.lindin} target="_blank" key={index}>
                <small>LinkedIn Profile</small>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Tooltip;
