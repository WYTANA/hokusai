import { getJsonData } from "../utils/tools"
import Carousel from "../components/ui/carousel"

const Home = ({ data }) => {
  return (
    <>
      <Carousel data={data.carousel} />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getJsonData()
  return {
    props: {
      data: data,
    },
  }
}

export default Home
