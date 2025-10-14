<template>
  <section class="header">
    <div class="logo">
        <LogoWhite/>
    </div>
    <nav class="navigation">
		<button class="menu-toggle" :class="{ 'is-open': isMenuOpen }" aria-controls="primary-menu" :aria-expanded="isMenuOpen ? 'true' : 'false'" @click="toggleMenu">
		<span class="gp-icon icon-menu-bars"><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path></svg><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path></svg></span><span class="mobile-menu">Menu</span>				</button>
			<div id="primary-menu" class="main-nav">
                <ul id="menu-menu-principal" class=" menu sf-menu" :class="{ 'is-open': isMenuOpen }">
                    <li id="menu-item-60429" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-60429"><a href="https://web.archive.org/web/20250706071420/https://www.zenavecnous.fr/a-la-une/"><svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.4 512.4"><path d="M437.3 75a256 256 0 0 0-362.2 0 256 256 0 0 0 0 362.3 256 256 0 0 0 362.2 0 256 256 0 0 0 0-362.2zm-10.7 325.8a256.8 256.8 0 0 0-38.2-28.3 412.7 412.7 0 0 0 15.4-100h75.3a221 221 0 0 1-52.5 128.3zM33.3 272.5h75.3c1.2 35.3 6.5 69.2 15.5 100a256.8 256.8 0 0 0-38.3 28.3 221.5 221.5 0 0 1-52.5-128.3zm52.5-160.9a254 254 0 0 0 38.3 28.3c-9 30.8-14.3 64.7-15.5 100H33.3c3.4-47.5 21.6-92 52.5-128.3zm154 31.7a221.8 221.8 0 0 1-76-19.3c13.8-35.6 39.4-78.4 76-89zm0 32.7v64h-98.5c1-29.8 5.3-58.5 12.3-84.6 27 11.8 56.2 18.8 86.3 20.7zm0 96.5v63.9c-30 1.9-59.1 9-86.2 20.8-7-26.2-11.2-54.9-12.3-84.7zm0 96.6v108.3c-36.6-10.6-62.2-53.4-76-89a221.8 221.8 0 0 1 76-19.3zm32.7 0a224 224 0 0 1 76.1 19.3c-13.8 35.6-39.3 78.4-76 89zm0-32.7v-63.9h98.7a384.6 384.6 0 0 1-12.4 84.7 254.4 254.4 0 0 0-86.3-20.8zm0-96.5V176a258 258 0 0 0 86.3-20.7c7 26.1 11.2 54.8 12.4 84.6zm0-96.6V35.1c36.8 10.5 62.3 53.3 76.1 89a221.8 221.8 0 0 1-76 19.2zm73.4-92a222.5 222.5 0 0 1 57.8 37c-8.3 7.3-17 14-26.2 20a245.8 245.8 0 0 0-31.6-57zm-211 57c-9.1-6-17.9-12.7-26.2-20 17.5-15.4 37-27.8 57.9-37a245.8 245.8 0 0 0-31.6 57zm0 295.9a245.8 245.8 0 0 0 31.7 56.9 222.5 222.5 0 0 1-57.9-37c8.3-7.3 17.1-14 26.3-20zm242.6 0c9.1 6 17.9 12.6 26.2 20A222.5 222.5 0 0 1 346 461c13-17.2 23.4-36.8 31.6-57zm26.3-164.3a414.3 414.3 0 0 0-15.4-100 256.8 256.8 0 0 0 38.2-28.3 221 221 0 0 1 52.5 128.3z"></path></svg><span class="menu-item-label">A la une</span></a></li>
                    <li id="menu-item-60430" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-60430"><a href="https://web.archive.org/web/20250706071420/https://www.zenavecnous.fr/actu/"><svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437 75C388.7 26.6 324.4 0 256 0S123.3 26.6 75 75C26.6 123.3 0 187.6 0 256s26.6 132.7 75 181c48.3 48.4 112.6 75 181 75s132.7-26.6 181-75c48.4-48.3 75-112.6 75-181s-26.6-132.7-75-181zm-21.2 340.8C373.1 458.5 316.4 482 256 482s-117.1-23.5-159.8-66.2C53.5 373.1 30 316.4 30 256S53.5 138.9 96.2 96.2C138.9 53.5 195.6 30 256 30s117.1 23.5 159.8 66.2S482 195.6 482 256s-23.5 117.1-66.2 159.8z"></path><path d="M256 62.7C149.4 62.7 62.7 149.4 62.7 256S149.4 449.3 256 449.3 449.3 362.6 449.3 256 362.6 62.7 256 62.7zm15 356v-20.3a15 15 0 0 0-30 0v20.3A163.6 163.6 0 0 1 93.3 271h20.3a15 15 0 0 0 0-30H93.3A163.6 163.6 0 0 1 241 93.3v20.3a15 15 0 0 0 30 0V93.3A163.6 163.6 0 0 1 418.7 241h-20.3a15 15 0 0 0 0 30h20.3A163.6 163.6 0 0 1 271 418.7z"></path><path d="M350.5 266.4h-1.2v-68c0-10-6.4-18.3-16-20.9a21.4 21.4 0 0 0-24.4 10.1L259.3 274a15 15 0 0 0 13 22.5h47v23.8a15 15 0 0 0 30 0v-23.8h1.2a15 15 0 0 0 0-30zm-31.2 0h-21l21-36.7zM230 305.2h-34.7l27.7-39.3c7.4-10.5 16.6-23.7 16.6-40.4a47 47 0 0 0-92.8-9.1 15 15 0 0 0 29.4 5.8 16.9 16.9 0 0 1 33.4 3.3c0 6.8-4.6 13.9-11.1 23.1l-44.3 62.8a15 15 0 0 0 12.2 23.6l63.4.2a15 15 0 0 0 .1-30z"></path></svg><span class="menu-item-label">Actualités</span></a></li>
                    <li id="menu-item-42116" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-42116"><a href="https://web.archive.org/web/20250706071420/https://www.zenavecnous.fr/les-news/"><svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M447 202 277.3 32.2a45 45 0 0 0-69 57l-.3 1.1a313.9 313.9 0 0 1-86.1 161L44 329.1a45 45 0 0 0 0 63.6l42.5 42.4a45 45 0 0 0 63.6 0l10.6-10.6 74.2 74.2a45 45 0 1 0 63.6-63.6l-31.8-31.8 10.6-10.6a45 45 0 0 0 0-63.6l-7.2-7.3a314 314 0 0 1 118.7-50.6l1.2-.3a45 45 0 0 0 57-69.1zM128.9 414a15 15 0 0 1-21.2 0l-42.5-42.4a15 15 0 0 1 0-21.2l74.3-74.3 63.6 63.7-74.2 74.2zm148.4 42.4a15 15 0 0 1-21.2 21.2L182 403.4l21.2-21.2 74.2 74.2zm-53-95.4c4.5-4.5 11.3-11.4 21.9-20.5l10 9.9a15 15 0 0 1 0 21.2l-10.7 10.6-21.2-21.2zm.6-41.8-64.9-65a343.4 343.4 0 0 0 73-139l131 131a343.4 343.4 0 0 0-139 73zm200.9-74.9a15 15 0 0 1-21.2 0L234.9 74.7a15 15 0 1 1 21.2-21.2L425.8 223a15 15 0 0 1 0 21.2z"></path><path d="M150 329.2a15 15 0 0 0-21.1 0l-21.2 21.2a15 15 0 0 0 21.2 21.2l21.2-21.2a15 15 0 0 0 0-21.2zM346.2 0a15 15 0 0 0-15 15v30a15 15 0 0 0 30 0V15a15 15 0 0 0-15-15zm120 120h-30a15 15 0 0 0 0 30h30a15 15 0 0 0 0-30zm-19.4-85.6a15 15 0 0 0-21.2 0l-30 30a15 15 0 0 0 21.2 21.2l30-30a15 15 0 0 0 0-21.2z"></path></svg><span class="menu-item-label">News</span></a></li>
                </ul>
            </div>
            <div class="menu-bar-items">
                <span class="menu-bar-item">
		            <a href="#" role="button" aria-label="Ouvrir la recherche" aria-haspopup="dialog" aria-controls="gp-search" data-gpmodal-trigger="gp-search"><span class="gp-icon icon-search"><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path fill-rule="evenodd" clip-rule="evenodd" d="M208 48c-88.366 0-160 71.634-160 160s71.634 160 160 160 160-71.634 160-160S296.366 48 208 48zM0 208C0 93.125 93.125 0 208 0s208 93.125 208 208c0 48.741-16.765 93.566-44.843 129.024l133.826 134.018c9.366 9.379 9.355 24.575-.025 33.941-9.379 9.366-24.575 9.355-33.941-.025L337.238 370.987C301.747 399.167 256.839 416 208 416 93.125 416 0 322.875 0 208z"></path></svg><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path></svg></span></a>
	            </span>
            </div>
        </nav>
    </section>
</template>

<script>
import LogoWhite from '@/components/logoWhite.vue';
export default {
    components: {
        LogoWhite
    },
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        margin: 0;
        background-color: var(--primary-blue);
        color : #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo{
        width: 200px;
        margin: 10px;
    }

    .menu-toggle{
        display: none;
        background: transparent;
        border: none;
        color: #ffffff;
        align-items: center;
        gap: 8px;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        padding: 0;
    }

    .navigation{
        width: 100%;
        margin: 0;
        height: 64px;
        background-color: var(--secondary-blue);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 48px;
        box-sizing: border-box;
    }

    .main-nav{
        display: flex;
        align-items: center;
    }

    .sf-menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .menu-item{
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .menu-item a{
        display: flex;
        align-items: center;
        gap: 12px;
        text-transform: uppercase;
        font-weight: 600;
        color: #ffffff;
        text-decoration: none;
    }

    .menu-item-label{
        color: #ffffff;
    }

    .menu-item-icon,
    .menu-bar-items .gp-icon svg{
        width: 22px;
        height: 22px;
        fill: #ffffff;
        stroke: #ffffff;
    }

    .menu-bar-items{
        display: flex;
        align-items: center;
        color: #ffffff;
    }

    .menu-bar-items a{
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    /* Responsive */
    @media (max-width: 900px){
        .navigation{
            flex-direction: column;
            align-items: stretch;
            height: auto;
            padding: 0 48px;
            min-height: 64px;
            position: relative;
        }

        .menu-toggle{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 64px;
            padding: 0 24px;
            gap: 12px;
            color: #ffffff;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.08em;
            border: none;
            border-radius: 0;
            box-shadow: none;
            transition: filter 0.25s ease;
        }

        .menu-toggle:hover,
        .menu-toggle:focus-visible{
            filter: brightness(1.15);
        }

        .menu-toggle.is-open{
            border: none;
        }

        .menu-toggle .mobile-menu{
            font-size: 0.85rem;
        }

        .menu-toggle .gp-icon{ flex-shrink: 0; }
        .menu-toggle .gp-icon svg:first-child{
            width: 24px;
            height: 24px;
            stroke: currentColor;
            fill: none;
        }

        .menu-toggle .gp-icon svg:last-child path { fill:#ffffff !important; stroke:#ffffff !important; }

        /* Force the hamburger (first SVG) bars to render white */
        .menu-toggle .gp-icon svg:first-child path{
            fill: #ffffff !important;
            stroke: #ffffff;
        }
        .menu-toggle .gp-icon svg:last-child{
            width: 24px;
            height: 24px;
        }

        /* Toggle icons: show menu when closed, close when open */
        .menu-toggle .gp-icon svg:first-child{ display: inline; }
        .menu-toggle.is-open .gp-icon svg:first-child{ display: none; }
        .menu-toggle .gp-icon svg:last-child{ display: none; }
        .menu-toggle.is-open .gp-icon svg:last-child{ display: inline; }

        .main-nav{
            width: 100%;
        }

        .sf-menu{
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            width: 100%;
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height 0.25s ease, opacity 0.25s ease;
            padding: 0;
            margin: 0;
        }

        .sf-menu.is-open{
            max-height: 500px;
            opacity: 1;
            padding: 8px 0 16px 0;
        }

        .menu-item{
            width: 100%;
            padding: 8px 0;
        }

        .menu-item a{
            gap: 12px;
            padding: 8px 0;
        }

        /* Keep the search icon pinned to the right within the blue bar */
        .menu-bar-items{
            align-self: flex-end;
            position: absolute;
            right: 48px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>