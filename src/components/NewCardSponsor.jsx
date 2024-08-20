import { CardSponsor } from "./CardSponsor";
import { Footer } from "./Footer";
import { BotonesAbajo } from "./BotonesAbajo";
import StackBlitz from "../assets/stackBlitz.svg";
import labs from "../assets/labs.svg";
import astro from "../assets/astro.svg";
import storyblok from "../assets/storyblok.png";
import bit from "../assets/bit.svg";
import { PlatinumSponsor } from "./PlatinumSponsor";
import tailwind from "../assets/tailwind.svg";
import divriots from "../assets/divriots.png";
import prefect from "../assets/prefect.svg";
import jetbrains from "../assets/jetbrains.svg";
import mux from "../assets/mux.svg";
import remix from "../assets/remix.svg";
import nox from "../assets/nox.svg";
import transloadit from "../assets/transloadit.svg";
import huly from "../assets/huly.svg";
import handsontable from "../assets/handsontable.svg";
import locatchbio from "../assets/latchbio.svg";

export const NewCardSponsor = () => {
  return (
    <>
      <div className="px-8 py-1 sm:flex gap-1 sm:max-w-[900px] mx-auto sm:p-1">
        <CardSponsor images={StackBlitz} />
        <CardSponsor images={labs} />
        <CardSponsor images={astro} />
      </div>
      <div className="px-8">
        <PlatinumSponsor Sponsor="Platinum Sponsors" />
      </div>
      <div className="px-8 py-2 sm:grid sm:grid-cols-2 gap-1 sm:max-w-[900px] mx-auto">
        <CardSponsor images={storyblok} />
        <CardSponsor images={bit} />
      </div>
      <div className="px-8">
        <PlatinumSponsor Sponsor="Gold Sponsors" />
      </div>
      <div className="px-8 py-2 sm:grid sm:grid-cols-3 sm:grid-rows-4 gap-1 sm:max-w-[900px] mx-auto grid grid-cols-2 grid-rows-6">
        <CardSponsor images={tailwind} />
        <CardSponsor images={divriots} />
        <CardSponsor images={prefect} />
        <CardSponsor images={jetbrains} />
        <CardSponsor images={mux} />
        <CardSponsor images={remix} />
        <CardSponsor images={nox} />
        <CardSponsor images={transloadit} />
        <CardSponsor images={huly} />
        <CardSponsor images={handsontable} />
        <CardSponsor images={locatchbio} />
        <CardSponsor />
      </div>
      <div>
        <BotonesAbajo />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
