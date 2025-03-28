const Pill = ({ text }: { text: string }) => {
  return (
    <li className="inline-flex items-center rounded-full bg-white px-3 py-0.5 text-sm font-medium text-black border-3 border-black">
      {text}
    </li>
  );
};

export default Pill;
