import { useRouter } from "next/router";

function Detail(){
    const router = useRouter();
    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    )
}

export default Detail;