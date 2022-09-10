import React, { SetStateAction } from "react";
import { PageView } from "../Page";

export interface GlobalProps {
    setPageView: React.Dispatch<SetStateAction<PageView>>
    pageView: PageView
}
