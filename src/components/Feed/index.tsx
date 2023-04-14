import Tweet from "../Tweet"

import { Container, Tab, Tweets } from "./styles"

const posts = [
  {
    id: 1,
    username: "@vitormarkis998",
    text: "kkkkk",
    media_url: "https://fastly.picsum.photos/id/974/600/600.jpg?hmac=3uc-RdHqWrmLdAHOHextU7-LaljxKszlzasvUHHumMQ",
    date: "06 de Jan",
    post_data: {
      views: "2,9mi",
      comments: 12,
      retweets: 2,
      likes: 23,
    },
    your_interaction: {
      like: false,
      retweet: false,
    },
    avatar: "https://avatars.githubusercontent.com/u/121525239?v=4",
    name: "Vitor Markis",
  },
  {
    id: 2,
    username: "@dieegosf",
    text: "Estamos vivendo um momento interessante no mercado de startups. Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first.Tudo começa com um projeto open source/free 👀",
    media_url: "",
    date: "09 de Jan",
    post_data: {
      views: "305",
      comments: 5,
      retweets: 6,
      likes: 48,
    },
    your_interaction: {
      like: false,
      retweet: false,
    },
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    name: "Diego Fernandes",
  },
  {
    id: 3,
    username: "@dieegosf",
    text: "Alô Tweeters! O que tá rolando por aqui? Faz tempo que não venho.. qual a boa da sua, da minha, da nossa bolha ?",
    media_url: "",
    date: "12 de Jan",
    post_data: {
      views: "1.302",
      comments: 12,
      retweets: 58,
      likes: 307,
    },
    your_interaction: {
      like: false,
      retweet: false,
    },
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    name: "Diego Fernandes",
  },
  {
    id: 4,
    username: "@dieegosf",
    media_url: "https://pbs.twimg.com/media/FiMtQhVXEBs6Ucg?format=jpg&name=small",
    date: "20 de Jan",
    post_data: {
      views: "205",
      comments: 1,
      retweets: null,
      likes: 32,
    },
    your_interaction: {
      like: false,
      retweet: true,
    },
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    name: "Diego Fernandes",
  },
]

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        {posts &&
          posts.map(
            (post) =>
              post && (
                <Tweet
                  key={post.id}
                  {...post}
                />
              )
          )}
      </Tweets>
    </Container>
  )
}

export default Feed
