import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
    lang: 'en-US',
    title: 'Virtiz',
    head: [['link', { rel: 'icon', href: '/assets/img/favicon.png' }]],
    theme: defaultTheme({
        repo: 'virtiz-app/virtiz-docs',
        docsDir: 'docs',
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
                    '/accounts/source-control.md'
                ]
            },
            {
                text: 'Servers',
                children: [
                    '/servers/server-provider.md',
                    '/servers/php.md',
                    '/servers/daemons.md',
                    '/servers/schedulers.md',
                    '/servers/network.md',
                    '/servers/ssh-keys.md',
                ]
            },
        ],
    }),
    plugins: [
        searchPlugin({}),
    ],
})