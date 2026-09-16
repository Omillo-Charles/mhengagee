import localFont from "next/font/local";

export const glacialIndifference = localFont({
    src: [
        { path: "../public/fonts/glacial-indifference/GlacialIndifference-Regular.otf", weight: "400", style: "normal" },
        { path: "../public/fonts/glacial-indifference/GlacialIndifference-Italic.otf", weight: "400", style: "italic" },
        { path: "../public/fonts/glacial-indifference/GlacialIndifference-Bold.otf", weight: "700", style: "normal" },
    ],
    variable: "--font-glacial-indifference",
    display: "swap",
});

export const mulish = localFont({
    src: [
        { path: "../public/fonts/mulish/Mulish-ExtraLight.ttf", weight: "200", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-Light.ttf", weight: "300", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/mulish/Mulish-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-ExtraBold.ttf", weight: "800", style: "normal" },
        { path: "../public/fonts/mulish/Mulish-Black.ttf", weight: "900", style: "normal" },
    ],
    variable: "--font-mulish",
    display: "swap",
});

export const outfit = localFont({
    src: "../public/fonts/outfit/OutfitVariableFont_wght1.ttf",
    variable: "--font-outfit",
    display: "swap",
});
