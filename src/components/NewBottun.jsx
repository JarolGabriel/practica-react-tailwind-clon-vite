import { Button } from "./Button";
export const NewBottun = () => {
  return (
    <div className="px-8 py-8 gap-2 flex flex-wrap items-center justify-center button-group sm:justify-start">
      <Button parrafo="Get Started" />
      <Button parrafo="Why Vite?" />
      <Button parrafo="View on GitHub" />
      <Button parrafo="⚡ ViteConf 24!" />
    </div>
  );
};
