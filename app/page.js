import Banner from "@/components/Home/Banner/Banner";
import Service from "@/components/Home/Service/Service";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import {pageWrapper} from "./page-wrapper"
export default function Home() {
  return (
    <>
      <pageWrapper>
      <Banner></Banner>
      <Service></Service>
      <Testimonials></Testimonials>
      </pageWrapper>
    </>
  );
}
