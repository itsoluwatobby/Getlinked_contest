import Main from "../components/home/Main";
import Guidelines from "../components/home/Guidelines";
import Introduction from "../components/home/Introduction";
import Criteria from "../components/home/Criteria";
import FAQs from "../components/home/FAQs";
import Timeline from "../components/home/Timeline";
import Prizes from "../components/home/Prizes";
import PartnersAndSponsors from "../components/home/Partners";
import PrivacyPolicy from "../components/home/PrivacyPolicy";
import Contact from "../components/home/Contact";

type HomeProp = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ setOpenModal }: HomeProp) {
  
  return (
    <main 
      onClick={() => setOpenModal(false)}
      className="hidebars bg-blend-hard-light w-full h-full flex flex-col overflow-y-scroll">

      <Main />

      <Introduction />

      <Guidelines />

      <Criteria />

      <FAQs />

      <Timeline />

      <Prizes />

      <PartnersAndSponsors />

      <PrivacyPolicy />

      <Contact />
    
    </main>
  )
}