import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "100": "#f5f8fa",
            "200": "#DADADA",
            "300": "#999999",
            "400": "#47585B",
        },

        yellow: "#FFBA08"
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    },
    styles: {
        global: {
            body: {
                bg: ""
            },
        },
    },
});