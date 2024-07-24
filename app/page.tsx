import Container from "@/components/container";
import Header from "@/components/ui/Header/Header";
import Hero from "@/components/ui/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Container>
        <Hero />
      </Container>
      Test
    </main>
  );
}
