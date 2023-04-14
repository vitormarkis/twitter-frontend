import LoggedUser from "../LoggedUser"
import MenuButton from "../MenuButton"
import { Container, Top, LogoWrapper, Logo, TweetButton, TweetIcon } from "./styles"

const user = {
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
}

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Top>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <MenuButton icon="home">Página Incial</MenuButton>
        <MenuButton icon="explore">Explorar</MenuButton>
        <MenuButton icon="bell">Notificações</MenuButton>
        <MenuButton icon="email">Mensagens</MenuButton>
        <MenuButton icon="saved">Salvos</MenuButton>
        <MenuButton icon="list">Listas</MenuButton>
        <MenuButton
          icon="perfil"
          className="active"
        >
          Perfil
        </MenuButton>
        <MenuButton icon="more">Ver mais...</MenuButton>

        <TweetButton className="tweet-button">
          <TweetIcon />
          <span>Tweetar</span>
        </TweetButton>
      </Top>

      <LoggedUser {...user} />
    </Container>
  )
}

export default MenuBar
