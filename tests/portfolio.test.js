// @ts-check
const { test, expect } = require('@playwright/test');

const homepageURL = 'http://localhost:5500/index.html';
const skillsURL = 'http://localhost:5500/sections/skills/skills.html';
const experienceURL = 'http://localhost:5500/sections/experience/experience.html';
const projectsURL = 'http://localhost:5500/sections/projects/projects.html';
const journeyURL = 'http://localhost:5500/sections/journey/journey.html';

// Function to test link navigation
async function testLinkNavigation(page, linkText, sourceURL, targetURL) {
  await page.goto(sourceURL);
  const link = await page.locator(`a:has-text("${linkText}")`);
  await link.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(targetURL);
}

/* Homepage tests */
test('Xavier Garay always links to homepage', async ({ page }) => {
  await testLinkNavigation(page, "Xavier Garay", homepageURL, homepageURL);
});

test("Homepage has Xavier's Portfolio Title", async ({ page }) => {
  await page.goto(homepageURL);
  const title = await page.title();
  await expect(title).toBe("Xavier's Portfolio");
});

test('My Journey links to Journey page', async ({ page }) => {
  await page.goto(homepageURL);
  const myJourneyLink = await page.locator('a:has-text("my journey")');
  await myJourneyLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience links to Experience page', async ({ page }) => {
  await page.goto(homepageURL);
  const experienceLink = await page.locator('a:has-text("Experience")');
  await experienceLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects links to Projects page', async ({ page }) => {
  await page.goto(homepageURL);
  const projectsLink = await page.locator('a:has-text("Projects")');
  await projectsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills links to Skills page', async ({ page }) => {
  await page.goto(homepageURL);
  const skillsLink = await page.locator('a:has-text("Skills")');
  await skillsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

test('My Journey bubble links to Journey page', async ({ page }) => {
  await page.goto(homepageURL);
  const myJourneyBubble = await page.locator('#journey');
  await myJourneyBubble.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience bubble links to Experience page', async ({ page }) => {
  await page.goto(homepageURL);
  const experienceBubble = await page.locator('#experience');
  await experienceBubble.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects bubble links to Projects page', async ({ page }) => {
  await page.goto(homepageURL);
  const projectsBubble = await page.locator('#projects');
  await projectsBubble.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills bubble links to Skills page', async ({ page }) => {
  await page.goto(homepageURL);
  const skillsBubble = await page.locator('#skills');
  await skillsBubble.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

test('All links have aria-labels', async ({ page }) => {
  await page.goto(homepageURL);

  // Locate all <a> elements within the <body> element.
  const links = await page.$$('body a');

  // Iterate through each <a> element and check for the presence of aria-label attribute.
  for (const link of links) {
    const ariaLabel = await link.getAttribute('aria-label');
    await expect(ariaLabel).not.toBe('');
  }
});

/* Journey page tests */
test("My Journey page has Xavier's Journey title", async ({ page }) => {
  await page.goto(journeyURL);
  const journeyTitle = await page.locator('h1:has-text("Xavier\'s Journey")');
  await expect(journeyTitle).toBeTruthy();
});

test('Xavier Garay always links to homepage from Journey', async ({ page }) => {
  await page.goto(journeyURL);
  const xavierGarayLink = await page.locator('a:has-text("Xavier Garay")');
  await xavierGarayLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(homepageURL);
});

test('My Journey links to Journey page from Journey', async ({ page }) => {
  await page.goto(journeyURL);
  const myJourneyLink = await page.locator('a:has-text("my journey")');
  await myJourneyLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience links to Experience page from Journey', async ({ page }) => {
  await page.goto(journeyURL);
  const experienceLink = await page.locator('a:has-text("Experience")');
  await experienceLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects links to Projects page from Journey', async ({ page }) => {
  await page.goto(journeyURL);
  const projectsLink = await page.locator('a:has-text("Projects")');
  await projectsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills links to Skills page from Journey', async ({ page }) => {
  await page.goto(journeyURL);
  const skillsLink = await page.locator('a:has-text("Skills")');
  await skillsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

/* Experience page tests */
test("Experience page has Xavier's Experience title", async ({ page }) => {
  await page.goto(experienceURL);
  const ExperienceTitle = await page.locator('h1:has-text("Xavier\'s Experience")');
  await expect(ExperienceTitle).toBeTruthy();
});

test('Xavier Garay always links to homepage from Experience', async ({ page }) => {
  await page.goto(experienceURL);
  const xavierGarayLink = await page.locator('a:has-text("Xavier Garay")');
  await xavierGarayLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(homepageURL);
});

test('My Journey links to Journey page from Experience', async ({ page }) => {
  await page.goto(experienceURL);
  const myJourneyLink = await page.locator('a:has-text("my journey")');
  await myJourneyLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience links to Experience page from Experience', async ({ page }) => {
  await page.goto(experienceURL);
  const experienceLink = await page.locator('a:has-text("Experience")');
  await experienceLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects links to Projects page from Experience', async ({ page }) => {
  await page.goto(experienceURL);
  const projectsLink = await page.locator('a:has-text("Projects")');
  await projectsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills links to Skills page from Experience', async ({ page }) => {
  await page.goto(experienceURL);
  const skillsLink = await page.locator('a:has-text("Skills")');
  await skillsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

/* Projects page tests */
test("Projects page has Xavier's Projects title", async ({ page }) => {
  await page.goto(projectsURL);
  const ProjectsTitle = await page.locator('h1:has-text("Xavier\'s Projects")');
  await expect(ProjectsTitle).toBeTruthy();
});

test('Xavier Garay always links to homepage from Projects', async ({ page }) => {
  await page.goto(projectsURL);
  const xavierGarayLink = await page.locator('a:has-text("Xavier Garay")');
  await xavierGarayLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(homepageURL);
});

test('My Journey links to Journey page from Projects', async ({ page }) => {
  await page.goto(projectsURL);
  const myJourneyLink = await page.locator('a:has-text("my journey")');
  await myJourneyLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience links to Experience page from Projects', async ({ page }) => {
  await page.goto(projectsURL);
  const experienceLink = await page.locator('a:has-text("Experience")');
  await experienceLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects links to Projects page from Projects', async ({ page }) => {
  await page.goto(projectsURL);
  const projectsLink = await page.locator('a:has-text("Projects")');
  await projectsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills links to Skills page from Projects', async ({ page }) => {
  await page.goto(projectsURL);
  const skillsLink = await page.locator('a:has-text("Skills")');
  await skillsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

/* Skills page tests */
test("Skills page has Xavier's Skills title", async ({ page }) => {
  await page.goto(skillsURL);
  const SkillsTitle = await page.locator('h1:has-text("Xavier\'s Skills")');
  await expect(SkillsTitle).toBeTruthy();
});

test('Xavier Garay always links to homepage from Skills', async ({ page }) => {
  await page.goto(skillsURL);
  const xavierGarayLink = await page.locator('a:has-text("Xavier Garay")');
  await xavierGarayLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(homepageURL);
});

test('My Journey links to Journey page from Skills', async ({ page }) => {
  await page.goto(skillsURL);
  const myJourneyLink = await page.locator('a:has-text("my journey")');
  await myJourneyLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(journeyURL);
});

test('Experience links to Experience page from Skills', async ({ page }) => {
  await page.goto(skillsURL);
  const experienceLink = await page.locator('a:has-text("Experience")');
  await experienceLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(experienceURL);
});

test('Projects links to Projects page from Skills', async ({ page }) => {
  await page.goto(skillsURL);
  const projectsLink = await page.locator('a:has-text("Projects")');
  await projectsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(projectsURL);
});

test('Skills links to Skills page from Skills', async ({ page }) => {
  await page.goto(skillsURL);
  const skillsLink = await page.locator('a:has-text("Skills")');
  await skillsLink.click();
  const currentURL = page.url();
  await expect(currentURL).toBe(skillsURL);
});

test('Check meta keywords and description', async ({ page }) => {
  await page.goto(homepageURL);

  // Check the content of the meta keywords tag
  const keywords = await page.$eval('meta[name="keywords"]', (meta) => meta.getAttribute('content'));
  await expect(keywords).not.toBe(null);

  // Check the content of the meta description tag
  const description = await page.$eval('meta[name="description"]', (meta) => meta.getAttribute('content'));
  await expect(description).not.toBe(null);
});