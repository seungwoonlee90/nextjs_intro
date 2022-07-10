import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar(){
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/"?"active":""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about"?"active":""}>About</a>
            </Link>
            <style jsx>{`
                nav {
                    background-color: dimgray;
                }
                a {
                    text-decoration: none;
                    color: black;
                }
                .active {
                    color: yellow;
                }

            `}</style>
        </nav>
    )
}

export default Navbar;