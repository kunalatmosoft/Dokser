"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "K unal Singh's Atmosoft™";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (100ms per character)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <motion.div
      className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="https://github.com/kunalatmosoft/Dokser"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
      </motion.div>

      <motion.h1
        className="text-3xl font-bold mb-4 sm:text-7xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {displayedText}
      </motion.h1>

      <motion.p
        className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        This feature-packed documentation Content, offers a sleek and responsive
        design, perfect for all your required documentation needs.
      </motion.p>

      <motion.div
        className="flex flex-row items-center gap-5"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </motion.div>

      <motion.span
        className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code text-base font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <TerminalSquareIcon className="w-5 h-5 mr-1 mt-0.5" />
        {"@tmosoft"}
      </motion.span>
    </motion.div>
  );
}
