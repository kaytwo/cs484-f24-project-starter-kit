// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import clerk from '@clerk/astro'

import db from '@astrojs/db';

export default defineConfig({
    integrations: [clerk(), db()],

    output: 'server',
    adapter: node({
        mode: 'standalone'
    })
});