import React from "react";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import CarrierBlock from "../../components/CarrierBlock/CarrierBlock";
import CertificatesBlock from "../../components/CertificatesBlock/CertificatesBlock";
import ChoiceBlock from "../../components/ChoiceBlock/ChoiceBlock";
import EquipmentBlock from "../../components/EquipmentBlock/EquipmentBlock";
import LobbyBlock from "../../components/LobbyBlock/LobbyBlock";
import MapBlock from "../../components/MapBlock/MapBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";
import '../../styles/index.css'

export default function Home() {
  return (
    <>
      {/* <LobbyBlock /> */}
      <NewsBlock />
      <AboutBlock />
      <CarrierBlock />
      <ChoiceBlock />
      <MapBlock />
      <EquipmentBlock />
      <ServicesBlock />
      <CertificatesBlock />
    </>
  );
}
