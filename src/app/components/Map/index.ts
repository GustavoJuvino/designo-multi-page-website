import dynamic from "next/dynamic";

const Location = dynamic(() => import("./Map"), {
    ssr: false
});

export default Location;