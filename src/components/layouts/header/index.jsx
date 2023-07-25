import { Link } from "react-scroll";
import useOffCanvas from "../../../hooks/useOffCanvas";
import Navigation from "../../common/Navigation";
import OutlinedButton from "../../common/buttons/OutlinedButton";
import TextLogo from "../../common/logo/TextLogo";
import DynamicWidthSearchBar from "../../common/searchBar/DynamicWidthSearchBar";
import NormalSearchBar from "../../common/searchBar/NormalSearchBar";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const { hamburgerToggle, isMobileMenuVisible, setIsMobileMenuVisible, hamburgerRef, sidebarRef } = useOffCanvas();

    return (
        <header
            aria-label="header"
            className="fixed top-0 left-0 z-10 | w-full | border-b border-solid border-neutral-400 | bg-neutral-100/90 backdrop-blur-3xl"
        >
            <div className="max-[1360px]:relative">
                <div className="container tablet:px-10 laptop:px-20 | py-7">
                    {/* navbar main elements */}
                    <div className="flex items-center justify-between">
                        {/* logo and navigation for larger devices */}
                        <div className="flex items-center basis-[43%]">
                            {/* logo */}
                            <TextLogo />

                            {/* navigation for larger devices */}
                            <Navigation
                                ariaLabel="header navigation"
                                navExtraClasses="pl-5 border-l border-solid border-neutral-400 | max-[900px]:hidden"
                                ulExtraClasses="flex items-center gap-3"
                            >
                                {[
                                    ['Marketplace', 'marketplace'],
                                    ['Resource', 'resource'],
                                    ['About', 'about'],
                                ].map(([navItem, url], index) => (
                                    <li key={index}>
                                        <Link
                                            activeClass="bg-primary text-neutral-100 hover:bg-primary/90"
                                            to={url}
                                            spy={true}
                                            smooth={true}
                                            // offset={-70}
                                            duration={500}
                                            className="cursor-pointer font-medium px-5 py-2 rounded-full hover:bg-neutral-300 transition-all">
                                            {navItem}
                                        </Link>
                                    </li>
                                ))}
                            </Navigation>
                        </div>

                        {/* search field for larger device and buttons */}
                        <div className="flex items-center justify-end gap-5 basis-[57%] max-[900px]:hidden">
                            {/* search field for larger device */}
                            <div className="basis-[300px] hidden min-[1360px]:block">
                                <NormalSearchBar />
                            </div>

                            {/* buttons */}
                            <OutlinedButton
                                type="button"
                                extraClasses="px-10 py-4 font-semibold bg-neutral-100 leading-[100%]"
                            >
                                Upload
                            </OutlinedButton>

                            <OutlinedButton
                                type="button"
                                extraClasses="px-5 py-4 font-semibold bg-neutral-100 leading-[100%]"
                            >
                                Connect Wallet
                            </OutlinedButton>
                        </div>

                        {/* hamburger button */}
                        <HamburgerButton
                            hamburgerRef={hamburgerRef}
                            hamburgerToggle={hamburgerToggle}
                            isMobileMenuVisible={isMobileMenuVisible}
                            buttonExtraClasses="min-[900px]:hidden"
                        />
                    </div>

                    {/* search field for smaller device */}
                    <div className="block min-[1360px]:hidden max-[900px]:hidden | max-[1360px]:absolute -bottom-7 right-1/2 translate-x-1/2">
                        <DynamicWidthSearchBar />
                    </div>
                </div>
            </div>

            {/* <MobileMenu /> */}
            <MobileMenu
                isMobileMenuVisible={isMobileMenuVisible}
                setIsMobileMenuVisible={setIsMobileMenuVisible}
                sidebarRef={sidebarRef}
                offCanvasExtraClasses="min-[900px]:hidden"
                offCanvasBackdropExtraClasses="min-[900px]:hidden"
            />
        </header>
    );
}
