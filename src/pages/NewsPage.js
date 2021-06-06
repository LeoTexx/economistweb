import React, { useEffect, useState, useContext } from "react";
import api from "../api";
import { UserContext } from "../provider/UserProvider";
import { auth } from "../firebase";
import { css } from "styled-components/macro"; //eslint-disable-line

import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Blog from "../components/blogs/GridWithFeaturedPost.js";

export default function NewsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/");
      const size = Object.values(data).length;
      var posts = [];
      var x = 0;
      while (x < size) {
        let standardData = {
          title: Object.values(data[x][0])[0],
          description: Object.values(data[x][1])[0],
          url: Object.values(data[x][2])[0],
        };
        posts.push(standardData);

        x += 1;
      }
      console.log(posts);
      setData(posts);
    })();
  }, []);

  return (
    <AnimationRevealPage>
      <Hero />
      <Blog data={data} />
    </AnimationRevealPage>
  );
}
