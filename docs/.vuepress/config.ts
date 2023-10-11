import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
    lang: 'en-US',
    title: 'Virtiz',
    theme: defaultTheme({
        logo: '/assets/img/logo.svg',
        logoDark: '/assets/img/logo-dark.svg',
        sidebarDepth: 0,
        sidebar: [
            {
                text: 'Getting Started',
                children: [
                    '/index.md'
                ],
            },
            {
                text: 'Accounts',
                children: [
                    '/accounts/source-control'
                ]
            },
            {
                text: 'Servers',
                children: [
                    '/servers/server-provider',
                    '/servers/php',
                    '/servers/daemons',
                    '/servers/network',
                ]
            },
        ],
    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
})