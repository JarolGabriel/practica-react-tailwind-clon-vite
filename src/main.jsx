import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { NewContainer } from "./components/NewContainer";
import { NewBottun } from "./components/NewBottun";
import { NewCardAside } from "./components/NewCardAside";
import { NewMarcasShowcase } from "./components/NewMarcasShowcase";
import { NewSpecialSponsors } from "./components/NewSpecialSponsors";
import { NewCardSponsor } from "./components/NewCardSponsor";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <Header />
      <NewContainer />
      <NewBottun />
    </main>
    <NewCardAside />
    <NewMarcasShowcase />
    <NewSpecialSponsors />
    <NewCardSponsor />
  </StrictMode>
);
