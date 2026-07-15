import { test, expect } from "@playwright/test";

test.describe('Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("display main components", async ({ page }) => {
        await expect(page.locator('.nav-wrapper')).toBeVisible();
    });
});