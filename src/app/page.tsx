import Community from "@/components/community";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurClient from "@/components/our-client";
import Image from "next/image";
import Unlock from "@/components/unlock";
import Achievement from "@/components/archievement";
import Calendar from "@/components/calendar";
import Customer from "@/components/customer";
import CommunityUpdates from "@/components/community-update";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OurClient />
      <Community />
      <Unlock />
      <Achievement />
      <Calendar />
      <Customer />
      <CommunityUpdates />
      <Footer />
    </main>
  );
}
