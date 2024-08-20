import { CardAside } from "./CardAside";

export const NewCardAside = () => {
  return (
    <div className="px-8 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-2 border-b mb-4 pb-16">
      <CardAside
        emogi="💡"
        titulo="Instant Server Start"
        parrafo="On demand file serving over native ESM, no bundling required!"
      />
      <CardAside
        emogi="⚡"
        titulo="Lightning Fast HMR"
        parrafo="Hot Module Replacement (HMR) that stays fast regardless of app size."
      />
      <CardAside
        emogi="🛠️"
        titulo="Rich Features"
        parrafo="Out-of-the-box support for TypeScript, JSX, CSS and more."
      />
      <CardAside
        emogi="📦"
        titulo="Optimized Build"
        parrafo="Pre-configured Rollup build with multi-page and library mode support."
      />
      <CardAside
        emogi="🔩"
        titulo="Universal Plugins"
        parrafo="Rollup-superset plugin interface shared between dev and build."
      />
      <CardAside
        emogi="🔑"
        titulo="Fully Typed APIs"
        parrafo="Flexible programmatic APIs with full TypeScript typing."
      />
    </div>
  );
};
