import Link from "next/link";

export default function ArticlesPage() {
    return(
        <div>
            <h3>this is Article page</h3>
            <Link href="/posts">
                <button >take me to the posts page</button>
            </Link>
        </div>

    );
}