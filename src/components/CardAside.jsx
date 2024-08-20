export const CardAside = ({ emogi, titulo, parrafo }) => {
  return (
    <div className="h-48 w-full bg-slate-100 rounded-lg p-5 cursor-pointer">
      <p className="h-10 w-10 bg-slate-200 flex text-2xl rounded-lg items-center justify-center">
        {emogi}
      </p>
      <p className="font-semibold text-lg text-custon-gray-black my-4">
        {titulo}
      </p>
      <p className="font-semibold text-custom-gray">{parrafo}</p>
    </div>
  );
};
