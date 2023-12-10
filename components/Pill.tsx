const Pill = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
      {text}
    </span>
  );
};

export default Pill