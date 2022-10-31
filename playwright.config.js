// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        baseURL: 'https://playwright.dev/', //BAD PRACTICE - should typically be an env variable or something generic e.g. localhost server
    },
};

module.exports = config;