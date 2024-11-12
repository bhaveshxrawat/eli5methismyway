export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t dark:border-gray-800">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 ELI5 Me. Built using Next.js by{" "}
        <a
          href="https://x.com/_bhaveshrawat_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bhavesh Rawat
        </a>
      </p>
    </footer>
  );
};
