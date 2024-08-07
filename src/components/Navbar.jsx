import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between relative">
      {/* Left */}
      <div className="font-bold text-xl text-blue-600 md:hidden lg:block w-[20%]">
        <Link href="/">SANTOSMEDIA</Link>
      </div>
      {/* Center*/}
      <div className="hidden md:flex w-[50%] text-sm  items-center justify-between">
        {/* Links */}
        <div className="flex gap-6 items-center text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16} />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="Homepage" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Homepage" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none px-1"
          />
          <Image
            className="cursor-pointer"
            src="/search.png"
            alt="search"
            width={16}
            height={16}
          />
        </div>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <div className="hidden md:flex  items-center justify-end gap-4 xl:gap-8">
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" alt="sign in" width={22} height={22} />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  alt="messages"
                  width={22}
                  height={22}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  alt="notifications"
                  width={22}
                  height={22}
                />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2">
                <Image src="/login.png" alt="login" width={20} height={20} />
                <Link
                  href="/sign-in"
                  className="font-medium text-gray-600 text-sm"
                >
                  Login/Register
                </Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
