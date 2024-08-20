export const CardSponsor = ({ images }) => {
  return (
    <div className="h-48 w-full bg-slate-100 p-5 cursor-pointer flex items-center justify-center hover:bg-slate-200 gap-2 mb-1">
      <img src={images} alt="Stackblitz" className="" />
    </div>
  );
};
