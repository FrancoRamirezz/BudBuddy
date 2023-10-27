import Link from 'next/link';
const NavBar= () =>{

return(


<>
<ul>
<li>
<Link href={"/"}> HomePage</Link>
</li>

<li>
<Link href= {"/Signup"} > Sign Up page</Link>
</li>
<li>
    <Link href={"About"}>About page</Link>
</li>
</ul>

</>
);
};
export default NavBar;