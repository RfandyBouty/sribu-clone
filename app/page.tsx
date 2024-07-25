import Container from "@/components/Container";
import CarouselBox from "@/components/CarouselBox";
import ClientContainer from "@/components/ClientContainer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <Hero />
      </Container>
      <ClientContainer />
      <CarouselBox />
    </main>
  );
}
