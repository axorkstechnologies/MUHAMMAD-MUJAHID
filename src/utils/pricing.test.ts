import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCustomEstimate, formatWhatsAppQuoteMessage, PRICING_PLANS, VISIBILITY_TIERS } from './pricing.ts';

test('calculateCustomEstimate returns default base price when no addons selected', () => {
  const result = calculateCustomEstimate('flagship', []);
  assert.equal(result.totalPrice, 1499);
  assert.equal(result.totalWeeks, 5);
  assert.equal(result.addonsList.length, 0);
  assert.equal(result.selectedPlan.name, 'Flagship Digital Product System');
});

test('calculateCustomEstimate handles entry web presence correctly', () => {
  const result = calculateCustomEstimate('entry_web', []);
  assert.equal(result.totalPrice, 199);
  assert.equal(result.totalWeeks, 1);
  assert.equal(result.selectedPlan.scopeCategory, 'entry');
});

test('calculateCustomEstimate adds selected addons correctly to MVP', () => {
  const result = calculateCustomEstimate('mvp', ['ai_engine', 'realtime_sync']);
  // MVP is 499, ai_engine is 499, realtime_sync is 350 => 499 + 499 + 350 = 1348
  assert.equal(result.totalPrice, 1348);
  // Base 3 + 1 + 1 = 5 weeks
  assert.equal(result.totalWeeks, 5);
  assert.equal(result.addonsList.length, 2);
});

test('calculateCustomEstimate handles fallback gracefully for invalid plan', () => {
  const result = calculateCustomEstimate('unknown_plan', []);
  assert.equal(result.selectedPlan.id, 'flagship');
  assert.equal(result.totalPrice, 1499);
});

test('VISIBILITY_TIERS contains foundation ($99), growth ($199), and all-in ($299)', () => {
  assert.equal(VISIBILITY_TIERS.length, 3);
  assert.equal(VISIBILITY_TIERS[0].numericPrice, 99);
  assert.equal(VISIBILITY_TIERS[1].numericPrice, 199);
  assert.equal(VISIBILITY_TIERS[2].numericPrice, 299);
});

test('formatWhatsAppQuoteMessage encodes message properly with contact data', () => {
  const encoded = formatWhatsAppQuoteMessage(
    'Alex Vance',
    'alex@innovate.com',
    'mvp',
    ['ai_engine'],
    'Need prototype for seed pitch'
  );
  const decoded = decodeURIComponent(encoded);
  assert.ok(decoded.includes('Alex Vance'));
  assert.ok(decoded.includes('alex@innovate.com'));
  assert.ok(decoded.includes('Custom Web Platform & Strategic MVP ($998)'));
  assert.ok(decoded.includes('Proprietary AI / LLM Workflows'));
  assert.ok(decoded.includes('Need prototype for seed pitch'));
});
