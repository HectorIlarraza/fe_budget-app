import { Link } from "react-router-dom";
import Animation from "./marioCoin.gif";

export default function GifAnimation() {
    return (
        <Link as={Link} to={"/"}>
              <img 
              src={Animation} 
              alt="" 
              width="15%"
              height="15%"
              />
        </Link>
  );
}