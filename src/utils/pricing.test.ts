import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCustomEstimate, formatWhatsAppQuoteMessage, PRICING_PLANS } from './pricing.ts';

test('calculateCustomEstimate returns default base price when no addons selected', () => {
  const result = calculateCustomEstimate('flagship', []);
  assert.equal(result.totalPrice, 7500);
  assert.equal(result.totalWeeks, 5);
  assert.equal(result.addonsList.length, 0);
  assert.equal(result.selectedPlan.name, 'Flagship Digital Product');
});

test('calculateCustomEstimate adds selected addons correctly', () => {
  const result = calculateCustomEstimate('mvp', ['ai_engine', 'realtime_sync']);
  // MVP is 3500, ai_engine is 1800, realtime_sync is 1200 => 3500 + 1800 + 1200 = 6500
  assert.equal(result.totalPrice, 6500);
  // Base 3 + 1 + 1 = 5 weeks
  assert.equal(result.totalWeeks, 5);
  assert.equal(result.addonsList.length, 2);
});

test('calculateCustomEstimate handles fallback gracefully for invalid plan', () => {
  const result = calculateCustomEstimate('unknown_plan', []);
  assert.equal(result.selectedPlan.id, 'flagship');
  assert.equal(result.totalPrice, 7500);
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
  assert.ok(decoded.includes('Strategic MVP ($5,300)'));
  assert.ok(decoded.includes('Proprietary AI / LLM Workflows'));
  assert.ok(decoded.includes('Need prototype for seed pitch'));
});
