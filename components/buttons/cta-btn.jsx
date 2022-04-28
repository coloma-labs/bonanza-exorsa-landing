function CtaButton({ onClick, children, secondary }) {
  if (secondary) {
    return (
      <button
        onClick={onClick}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-white bg-black"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {children}
      </button>
    );
  }
}

export default CtaButton;
