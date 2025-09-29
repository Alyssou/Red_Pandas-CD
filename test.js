// Simple test suite for Red Panda Paradise
const fs = require("fs");
const path = require("path");

// Test suite
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  async run() {
    console.log("🐾 Running Red Panda Paradise Tests...\n");

    for (const test of this.tests) {
      try {
        await test.fn();
        console.log(`✅ ${test.name}`);
        this.passed++;
      } catch (error) {
        console.log(`❌ ${test.name}`);
        console.log(`   Error: ${error.message}`);
        this.failed++;
      }
    }

    console.log(`\n📊 Test Results:`);
    console.log(`   Passed: ${this.passed}`);
    console.log(`   Failed: ${this.failed}`);
    console.log(`   Total: ${this.tests.length}`);

    if (this.failed > 0) {
      process.exit(1);
    } else {
      console.log("\n🎉 All tests passed!");
    }
  }
}

const runner = new TestRunner();

// File existence tests
runner.test("index.html exists", () => {
  if (!fs.existsSync("index.html")) {
    throw new Error("index.html file not found");
  }
});

runner.test("style.css exists", () => {
  if (!fs.existsSync("style.css")) {
    throw new Error("style.css file not found");
  }
});

runner.test("script.js exists", () => {
  if (!fs.existsSync("script.js")) {
    throw new Error("script.js file not found");
  }
});

// Content validation tests
runner.test("HTML contains required sections", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const requiredSections = ["home", "about", "gallery", "facts"];

  for (const section of requiredSections) {
    if (!html.includes(`id="${section}"`)) {
      throw new Error(`Missing section: ${section}`);
    }
  }
});

runner.test("HTML contains red panda references", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const pandaTerms = ["red panda", "Red Panda", "panda"];

  const hasRedPandaContent = pandaTerms.some((term) =>
    html.toLowerCase().includes(term.toLowerCase())
  );

  if (!hasRedPandaContent) {
    throw new Error("HTML does not contain red panda content");
  }
});

runner.test("CSS contains responsive design", () => {
  const css = fs.readFileSync("style.css", "utf8");

  if (!css.includes("@media")) {
    throw new Error("CSS does not include media queries for responsive design");
  }
});

runner.test("JavaScript has basic functionality", () => {
  const js = fs.readFileSync("script.js", "utf8");

  const requiredFeatures = [
    "addEventListener",
    "querySelector",
    "DOMContentLoaded",
  ];

  for (const feature of requiredFeatures) {
    if (!js.includes(feature)) {
      throw new Error(`JavaScript missing feature: ${feature}`);
    }
  }
});

runner.test("Package.json has required scripts", () => {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const requiredScripts = ["build", "lint", "test"];

  for (const script of requiredScripts) {
    if (!packageJson.scripts[script]) {
      throw new Error(`Missing script: ${script}`);
    }
  }
});

// Run all tests
runner.run().catch(console.error);
