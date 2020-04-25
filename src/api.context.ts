import React from "react";
import * as contentful from "contentful";

export const ContentApiContext = React.createContext({});

export const contentfulClient = contentful.createClient({
    space: "e1plazcjxdju",
    accessToken: "EyUuq3vhd6A0jwVMftZ8BHPaD0MtO7KNCbkDZo2kSqw"
});
