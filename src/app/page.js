import Banner from "../components/banner";
import CardList from "../components/cardlist/Index";
import Tabel from "../components/tabel";


const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at`,);
  const data = await response.json();
  console.log(data);

  return (
    <>
    <Banner/>
    <Tabel/>
    <CardList/>
    </>

  );
}

export default Page
