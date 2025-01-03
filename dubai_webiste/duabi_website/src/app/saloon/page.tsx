import GridColumns from "@/components/Saloon/GridColumns";
import SaloonEvalute from "@/components/Saloon/SaloonEvalute";
import SaloonHero from "@/components/Saloon/SaloonHero";
import SaloonShowcase from "@/components/Saloon/SaloonShowcase";

export default function Saloon() {
  return (
    <main>
      <SaloonHero />
      <GridColumns />
      <SaloonEvalute />
      <SaloonShowcase />
    </main>
  );
}
