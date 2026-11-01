import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCustomEstimate, formatWhatsAppQuoteMessage, PRICING_PLANS, VISIBILITY_TIERS } from './pricing.ts';

test('calculateCustomEstimate returns default base price when no addons selected', () => {
  const result = calculateCustomEstimate('flagship', []);
  assert.equal(result.totalPrice, 7500);
  assert.equal(result.totalWeeks, 5);
  assert.equal(result.addonsList.length, 0);
  assert.equal(result.selectedPlan.name, 'Flagship Digital Product & Business System');
});

test('calculateCustomEstimate handles entry web presence correctly', () => {
  const result = calculateCustomEstimate('entry_web', []);
  assert.equal(result.totalPrice, 450);
  assert.equal(result.totalWeeks, 2);
  assert.equal(result.selectedPlan.scopeCategory, 'entry');
});

test('calculateCustomEstimate adds selected addons correctly to MVP', () => {
  const result = calculateCustomEstimate('mvp', ['ai_engine', 'realtime_sync']);
  // MVP is 1800, ai_engine is 1800, realtime_sync is 1200 => 1800 + 1800 + 1200 = 4800
  assert.equal(result.totalPrice, 4800);
  // Base 3.5 + 1 + 1 = 5.5 => Math.ceil = 6 weeks
  assert.equal(result.totalWeeks, 6);
  assert.equal(result.addonsList.length, 2);
});

test('calculateCustomEstimate handles fallback gracefully for invalid plan', () => {
  const result = calculateCustomEstimate('unknown_plan', []);
  assert.equal(result.selectedPlan.id, 'flagship');
  assert.equal(result.totalPrice, 7500);
});

test('VISIBILITY_TIERS contains foundation ($300 / $99), growth ($450), and all-in ($950)', () => {
  assert.equal(VISIBILITY_TIERS.length, 3);
  assert.equal(VISIBILITY_TIERS[0].numericPrice, 300);
  assert.equal(VISIBILITY_TIERS[1].numericPrice, 450);
  assert.equal(VISIBILITY_TIERS[2].numericPrice, 950);
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
  assert.ok(decoded.includes('Custom Web Platform & Strategic MVP ($3,600)'));
  assert.ok(decoded.includes('Proprietary AI / LLM Workflows'));
  assert.ok(decoded.includes('Need prototype for seed pitch'));
});
