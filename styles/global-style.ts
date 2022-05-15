import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    @font-face {
        font-family: 'NEXON Lv1 Gothic OTF';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv1 Gothic OTF Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'CookieRunOTF-Black';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Black00.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSansLight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSansBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    html{
        font-size: 12px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        overflow-x: hidden;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }
    body{
        margin: 0px;
        padding: 0px;
        width: 100%;
        max-width: 1400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    body #__next{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;ge height auto
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    /* 스크롤바 설정*/
    html::-webkit-scrollbar{
        width: 4px;
    }
    /* 스크롤바 막대 설정*/
    html::-webkit-scrollbar-thumb{
        height: 17%;
        background-color: #343434;
        border-radius: 2px;  
    }
    /* 스크롤바 뒷 배경 설정*/
    html::-webkit-scrollbar-track{
        background-color: #D2E8F7;
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    .imageItem{
        width: 100%;
        height: 100%;
        position: relative !important;
    }
`;