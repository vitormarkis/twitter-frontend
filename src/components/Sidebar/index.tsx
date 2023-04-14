import React, { useEffect, useState } from "react"
import List from "../List"
import FollowSuggestion from "../FollowSuggestion"
import News from "../News"
import StickyBox from "react-sticky-box"

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from "./styles"

const api_followSuggestion = [
  {
    username: "@dieegosf",
    active: true,
  },
  {
    username: "@dieegosf",
    active: false,
  },
  {
    username: "@vitormarkis998",
    active: true,
  },
  {
    username: "@dieegosf",
    active: false,
  },
]

const api_users = [
  {
    uuid: 4529138754,
    name: "Vitor Markis",
    avatar: "https://avatars.githubusercontent.com/u/121525239?v=4",
    username: "@vitormarkis998",
    banner: "https://pbs.twimg.com/profile_banners/1305056552240459776/1600905688/600x200",
    bio: "Studying Javascript, aprendendo React com o Guilherme Rodz",
    details: {
      from: "Rio Grande do Sul",
      birth: "Nascido(a) em 10 de Junho de 2002",
    },
    followage: {
      followers: 134,
      following: 384,
    },
  },
  {
    uuid: 7498234734,
    name: "Diego Fernandes",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    username: "@dieegosf",
    banner: "https://pbs.twimg.com/profile_banners/3066035968/1661990617/600x200",
    bio: "⚛ JavaScript • React • Node.js 🚀 CTO & Educator at @Rocketseat💜 Boosting devs to the next level🔥 Nothing in this world can take the place of persistence",
    details: {
      from: "Rio do Sul",
      birth: "Nascido(a) em 27 de Março de 1995",
    },
    followage: {
      followers: 31640,
      following: 231,
    },
  },
]

const Sidebar: React.FC = () => {
  const [follow, setFollow] = useState<React.ReactNode[]>([])

  console.log({ follow })

  useEffect(() => {
    async function getData() {
      const followSuggestion = api_followSuggestion.filter((follow) => follow.active)

      const fsUsers = followSuggestion.map((follow) => {
        const user = api_users.find((user) => user.username === follow.username)
        if (!user) return
        const { name, username, avatar } = user
        return { name, username, avatar }
      })

      const react_node_array = fsUsers.map((fs) => {
        return (
          fs && (
            <FollowSuggestion
              name={fs.name}
              username={fs.username}
              avatar={fs.avatar}
            />
          )
        )
      })

      setFollow(react_node_array)
    }

    getData()
  }, [])

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox offsetBottom={0}>
        <Body>
          <List
            title="Talvez você curta"
            elements={follow}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />]}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default Sidebar
