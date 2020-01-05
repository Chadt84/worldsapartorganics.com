import React from "react";
import * as contentful from "contentful";

export const ContentApiContext = React.createContext({});

export const contentfulClient = contentful.createClient({
    space: "1zu4vi5fst65",
    accessToken: "TnQpurv1MCI2-pQHaoF4t575B1vQTeXn5QkTRXPpSp8"
});
