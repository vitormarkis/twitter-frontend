import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from "./styles"
import Feed from "../Feed"

const userdata = {
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

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner banner={userdata?.banner}>
        <Avatar avatar={userdata?.avatar} />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>{userdata?.name}</h1>
        <h2>{userdata?.username}</h2>

        <p>{userdata?.bio}</p>

        <ul>
          <li>
            <LocationIcon />
            {userdata?.details.from}
          </li>
          <li>
            <CakeIcon />
            {userdata?.details.birth}
          </li>
        </ul>

        <Followage>
          <span>
            <strong>{userdata?.followage.following}</strong> seguindo
          </span>
          <span>
            <strong>{userdata?.followage.followers}</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
