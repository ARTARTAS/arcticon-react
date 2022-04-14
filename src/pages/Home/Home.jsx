import React from "react";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import CarrierBlock from "../../components/CarrierBlock/CarrierBlock";
import CertificatesBlock from "../../components/CertificatesBlock/CertificatesBlock";
import ChoiceBlock from "../../components/ChoiceBlock/ChoiceBlock";
import LobbyBlock from "../../components/LobbyBlock/LobbyBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";

export default function Home() {
  return (
    <>
      <LobbyBlock />
      <NewsBlock />
      <AboutBlock />
      <CarrierBlock />
      <ChoiceBlock />
      <ServicesBlock />
      <CertificatesBlock />
    </>
  );
}
