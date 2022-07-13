import { useRouter } from "next/router";
import Seo from "../../components/Seo";

function Detail(){
    const router = useRouter();
    const [title, id] = router.query.params || [];
    return (
        <div>
            <Seo title={title}/>
            <h4>{title || "Loading..."}</h4>
        </div>
    )
}

export default Detail;