import { createContext } from "react";
import { GlobalProps } from "../../interfaces/context/GlobalProps";

export const globalPropsContext = createContext<GlobalProps>({
    setPageView: () => "home",
    pageView: "home"
});
