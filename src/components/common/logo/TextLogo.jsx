import { Link, animateScroll as scroll } from "react-scroll";

export default function TextLogo() {
    function scrollToTop() {
        scroll.scrollToTop();
    }

    return (
        <Link
            onClick={scrollToTop}
            to="home"
            className="text-700 text-primary font-bold font-['Integral_CF'] | pr-10 py-[10px] leading-tight | cursor-pointer"
        >
            NFTERS
        </Link>
    );
}
