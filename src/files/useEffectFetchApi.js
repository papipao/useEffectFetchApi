import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchApi = () => {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>GitHub API</h1>
      <ul className="users">
        {user.map(({ id, login, avatar_url, html_url, type }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>Name: {login}</h4>
                <h4>Type: {type}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchApi;
