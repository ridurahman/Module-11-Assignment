"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./navmenu.module.css";

const NavMenu = () => {
  const currentRoute = usePathname();
  return (
    <div className="m-4">
      <ul className="flex items-center justify-center">
        <li>
          <Link
            className={
              currentRoute === "/" ? styles.activeLink : styles.pendingLink
            }
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === "/blog" ? styles.activeLink : styles.pendingLink
            }
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
