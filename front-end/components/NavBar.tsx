// import Logo from "../logos/Logo";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import NavMenu from "./NavMenu";
import { Button } from "./ui/button";
import { Label } from "./ui/label";


export default function Navbar() {
  return (
    <nav className="flex w-full md:flex-row justify-between items-center px-4 md:px-6 bg-slate-100/10 dark:bg-slate-950/10 backdrop-blur-md shadow-sm">
      <section className="items-center w-full">
        <div className="h-24 w-28 md:ml-5 lg:ml-6">
            FindMeEvents
        </div>
        {/* <Logo style="h-24 w-28 md:ml-5 lg:ml-6" href="/" /> */}
      </section>

      <section className="justify-center w-full">
        <NavMenu />
      </section>
      <section className="flex justify-end items-center space-x-4 w-full">
        <div className="flex flex-col space-x-3 items-center space-y-2">
            {/* <Link href="/login">
                <Button>
                    Login
                </Button>
            </Link> */}
            <img className="rounded-full" src="https://github.com/shadcn.png" alt="Girl in a jacket" width="45" height="45"></img>
            <Label>James Henry</Label>
          <div className="md:hidden lg:hidden">
            {/* <MobileMenu /> */}
          </div> 
        </div>
      </section>
    </nav>
  );
}