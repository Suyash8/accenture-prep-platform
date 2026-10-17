export interface Rational {
  num: bigint;
  den: bigint;
}

export function makeRational(num: number | bigint, den: number | bigint = BigInt(1)): Rational {
  let n = BigInt(num);
  let d = BigInt(den);
  if (d < BigInt(0)) {
    n = -n;
    d = -d;
  }
  if (d === BigInt(0)) throw new Error('Denominator cannot be zero');
  const g = gcd(n < BigInt(0) ? -n : n, d);
  return { num: n / g, den: d / g };
}

function gcd(a: bigint, b: bigint): bigint {
  while (b !== BigInt(0)) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function compareRationals(a: Rational, b: Rational): number {
  const diff = a.num * b.den - b.num * a.den;
  if (diff < BigInt(0)) return -1;
  if (diff > BigInt(0)) return 1;
  return 0;
}

export function areRationalsEqual(a: Rational, b: Rational): boolean {
  return a.num * b.den === b.num * a.den;
}

export interface MathOrderQuestion {
  id: number;
  bubbles: string[];
  values: Rational[];
}

export type MathQuestion = MathOrderQuestion;

export function evaluateExpressionRational(expr: string): Rational {
  const clean = expr.trim();

  // Exponent: a^b
  const expMatch = clean.match(/^(\d+)\^(\d+)$/);
  if (expMatch) {
    const base = BigInt(expMatch[1]);
    const exp = Number(expMatch[2]);
    return makeRational(base ** BigInt(exp), BigInt(1));
  }

  // Multiplication: a×b or a*b
  const mulMatch = clean.match(/^(\d+)[\s*×](\d+)$/);
  if (mulMatch) {
    return makeRational(BigInt(mulMatch[1]) * BigInt(mulMatch[2]), BigInt(1));
  }

  // Division / Fraction: a÷b or a/b
  const divMatch = clean.match(/^(\d+)[\s/÷](\d+)$/);
  if (divMatch) {
    const den = BigInt(divMatch[2]);
    if (den === BigInt(0)) return makeRational(BigInt(0), BigInt(1));
    return makeRational(BigInt(divMatch[1]), den);
  }

  // Addition: a+b
  const addMatch = clean.match(/^(\d+)\+(\d+)$/);
  if (addMatch) {
    return makeRational(BigInt(addMatch[1]) + BigInt(addMatch[2]), BigInt(1));
  }

  // Subtraction: a-b
  const subMatch = clean.match(/^(\d+)[-−](\d+)$/);
  if (subMatch) {
    return makeRational(BigInt(subMatch[1]) - BigInt(subMatch[2]), BigInt(1));
  }

  // Pure integer
  const intMatch = clean.match(/^(\d+)$/);
  if (intMatch) {
    return makeRational(BigInt(intMatch[1]), BigInt(1));
  }

  return makeRational(BigInt(0), BigInt(1));
}

export function generateMathQuestion(id: number, rng: () => number = Math.random): MathOrderQuestion {
  const operations: (() => { expr: string; val: Rational })[] = [
    // Simple Addition / Subtraction
    () => {
      const a = Math.floor(rng() * 15) + 2;
      const b = Math.floor(rng() * 12) + 1;
      if (rng() > 0.5) {
        return { expr: `${a}+${b}`, val: makeRational(a + b) };
      }
      return { expr: `${a + b}-${b}`, val: makeRational(a) };
    },
    // Multiplication
    () => {
      const a = Math.floor(rng() * 9) + 2;
      const b = Math.floor(rng() * 8) + 2;
      return { expr: `${a}×${b}`, val: makeRational(a * b) };
    },
    // Exact integer division
    () => {
      const divisor = Math.floor(rng() * 8) + 2;
      const quotient = Math.floor(rng() * 12) + 2;
      return { expr: `${divisor * quotient}÷${divisor}`, val: makeRational(quotient) };
    },
    // Fraction division (exact cross-multiplied value)
    () => {
      const num = Math.floor(rng() * 19) + 3;
      const den = Math.floor(rng() * 6) + 2;
      return { expr: `${num}÷${den}`, val: makeRational(num, den) };
    },
    // Exponent
    () => {
      const base = Math.floor(rng() * 4) + 2; // 2, 3, 4, 5
      const exp = base <= 3 ? Math.floor(rng() * 2) + 2 : 2; // 2^2, 2^3, 3^2, 3^3, etc.
      return { expr: `${base}^${exp}`, val: makeRational(Math.pow(base, exp)) };
    },
    // Single number
    () => {
      const n = Math.floor(rng() * 30) + 2;
      return { expr: `${n}`, val: makeRational(n) };
    },
  ];

  const expressions: string[] = [];
  const values: Rational[] = [];

  let safetyAttempts = 0;
  while (expressions.length < 3 && safetyAttempts < 100) {
    safetyAttempts++;
    const op = operations[Math.floor(rng() * operations.length)];
    const { expr, val } = op();

    // Guarantee that no two bubbles share identical numerical values
    const isDuplicate = values.some((existing) => areRationalsEqual(existing, val));
    if (!isDuplicate) {
      expressions.push(expr);
      values.push(val);
    }
  }

  // Fallback if loop exceeded
  if (expressions.length < 3) {
    return {
      id,
      bubbles: ['5+3', '3×4', '20-2'],
      values: [makeRational(8), makeRational(12), makeRational(18)],
    };
  }

  return {
    id,
    bubbles: expressions,
    values,
  };
}

export function isOrderLowestToHighest(v1: Rational, v2: Rational, v3: Rational): boolean {
  return compareRationals(v1, v2) <= 0 && compareRationals(v2, v3) <= 0;
}
