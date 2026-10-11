import { Question } from '../types';

export const ACCENTURE_QUESTIONS: Question[] = [
  {
    "id": "pseudo-001",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "13",
      "10",
      "7",
      "9"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: 12 + 8 = 20.\nStep 2: 20 & 9 = (0b10100 & 0b1001) = 0. So q = 0.\nStep 3: p = 4 + 0 = 4.\nStep 4: Output p + q + r = 4 + 0 + 5 = 9.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 4, q = 9, r = 5\nq = (12 + 8) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-002",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "16",
      "18",
      "20",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 14 + 11 = 25.\nStep 2: 25 & 5 = (0b11001 & 0b101) = 1. So q = 1.\nStep 3: p = 7 + 1 = 8.\nStep 4: Output p + q + r = 8 + 1 + 7 = 16.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 7, q = 5, r = 7\nq = (14 + 11) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-003",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "32",
      "30",
      "36",
      "43"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 16 + 14 = 30.\nStep 2: 30 & 10 = (0b11110 & 0b1010) = 10. So q = 10.\nStep 3: p = 3 + 10 = 13.\nStep 4: Output p + q + r = 13 + 10 + 9 = 32.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 3, q = 10, r = 9\nq = (16 + 14) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-004",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "36",
      "33",
      "29",
      "27"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 18 + 5 = 23.\nStep 2: 23 & 6 = (0b10111 & 0b110) = 6. So q = 6.\nStep 3: p = 6 + 6 = 12.\nStep 4: Output p + q + r = 12 + 6 + 11 = 29.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 6, q = 6, r = 11\nq = (18 + 5) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-005",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "35",
      "40",
      "29",
      "31"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: 20 + 8 = 28.\nStep 2: 28 & 11 = (0b11100 & 0b1011) = 8. So q = 8.\nStep 3: p = 2 + 8 = 10.\nStep 4: Output p + q + r = 10 + 8 + 13 = 31.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 2, q = 11, r = 13\nq = (20 + 8) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-006",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "23",
      "17",
      "19",
      "25"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 10 + 11 = 21.\nStep 2: 21 & 7 = (0b10101 & 0b111) = 5. So q = 5.\nStep 3: p = 5 + 5 = 10.\nStep 4: Output p + q + r = 10 + 5 + 4 = 19.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 5, q = 7, r = 4\nq = (10 + 11) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-007",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "32",
      "21",
      "23",
      "27"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 12 + 14 = 26.\nStep 2: 26 & 12 = (0b11010 & 0b1100) = 8. So q = 8.\nStep 3: p = 1 + 8 = 9.\nStep 4: Output p + q + r = 9 + 8 + 6 = 23.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 1, q = 12, r = 6\nq = (12 + 14) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-008",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "12",
      "13",
      "10",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 14 + 5 = 19.\nStep 2: 19 & 8 = (0b10011 & 0b1000) = 0. So q = 0.\nStep 3: p = 4 + 0 = 4.\nStep 4: Output p + q + r = 4 + 0 + 8 = 12.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 4, q = 8, r = 8\nq = (14 + 5) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-009",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "15",
      "17",
      "21",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: 16 + 8 = 24.\nStep 2: 24 & 4 = (0b11000 & 0b100) = 0. So q = 0.\nStep 3: p = 7 + 0 = 7.\nStep 4: Output p + q + r = 7 + 0 + 10 = 17.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 7, q = 4, r = 10\nq = (16 + 8) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-010",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "43",
      "31",
      "33",
      "37"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 18 + 11 = 29.\nStep 2: 29 & 9 = (0b11101 & 0b1001) = 9. So q = 9.\nStep 3: p = 3 + 9 = 12.\nStep 4: Output p + q + r = 12 + 9 + 12 = 33.",
    "difficulty": "Easy",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 3, q = 9, r = 12\nq = (18 + 11) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-011",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "10",
      "9",
      "7",
      "13"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: 20 + 14 = 34.\nStep 2: 34 & 5 = (0b100010 & 0b101) = 0. So q = 0.\nStep 3: p = 6 + 0 = 6.\nStep 4: Output p + q + r = 6 + 0 + 3 = 9.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 6, q = 5, r = 3\nq = (20 + 14) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-012",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "38",
      "25",
      "27",
      "31"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 10 + 5 = 15.\nStep 2: 15 & 10 = (0b1111 & 0b1010) = 10. So q = 10.\nStep 3: p = 2 + 10 = 12.\nStep 4: Output p + q + r = 12 + 10 + 5 = 27.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 2, q = 10, r = 5\nq = (10 + 5) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-013",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "20",
      "25",
      "18",
      "24"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 12 + 8 = 20.\nStep 2: 20 & 6 = (0b10100 & 0b110) = 4. So q = 4.\nStep 3: p = 5 + 4 = 9.\nStep 4: Output p + q + r = 9 + 4 + 7 = 20.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 5, q = 6, r = 7\nq = (12 + 8) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-014",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "38",
      "32",
      "26",
      "28"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: 14 + 11 = 25.\nStep 2: 25 & 11 = (0b11001 & 0b1011) = 9. So q = 9.\nStep 3: p = 1 + 9 = 10.\nStep 4: Output p + q + r = 10 + 9 + 9 = 28.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 1, q = 11, r = 9\nq = (14 + 11) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-015",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "34",
      "31",
      "25",
      "27"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: 16 + 14 = 30.\nStep 2: 30 & 7 = (0b11110 & 0b111) = 6. So q = 6.\nStep 3: p = 4 + 6 = 10.\nStep 4: Output p + q + r = 10 + 6 + 11 = 27.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 4, q = 7, r = 11\nq = (16 + 14) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-016",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "28",
      "26",
      "32",
      "33"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 18 + 5 = 23.\nStep 2: 23 & 12 = (0b10111 & 0b1100) = 4. So q = 4.\nStep 3: p = 7 + 4 = 11.\nStep 4: Output p + q + r = 11 + 4 + 13 = 28.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 7, q = 12, r = 13\nq = (18 + 5) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-017",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "23",
      "21",
      "27",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: 20 + 8 = 28.\nStep 2: 28 & 8 = (0b11100 & 0b1000) = 8. So q = 8.\nStep 3: p = 3 + 8 = 11.\nStep 4: Output p + q + r = 11 + 8 + 4 = 23.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 3, q = 8, r = 4\nq = (20 + 8) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-018",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "18",
      "25",
      "24",
      "20"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: 10 + 11 = 21.\nStep 2: 21 & 4 = (0b10101 & 0b100) = 4. So q = 4.\nStep 3: p = 6 + 4 = 10.\nStep 4: Output p + q + r = 10 + 4 + 6 = 20.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 6, q = 4, r = 6\nq = (10 + 11) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-019",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "35",
      "30",
      "26",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: 12 + 14 = 26.\nStep 2: 26 & 9 = (0b11010 & 0b1001) = 8. So q = 8.\nStep 3: p = 2 + 8 = 10.\nStep 4: Output p + q + r = 10 + 8 + 8 = 26.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 2, q = 9, r = 8\nq = (12 + 14) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-020",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What will be the output of the following pseudocode?",
    "options": [
      "21",
      "17",
      "15",
      "19"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: 14 + 5 = 19.\nStep 2: 19 & 5 = (0b10011 & 0b101) = 1. So q = 1.\nStep 3: p = 5 + 1 = 6.\nStep 4: Output p + q + r = 6 + 1 + 10 = 17.",
    "difficulty": "Medium",
    "tag": "Bitwise Precedence",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r\nSet p = 5, q = 5, r = 10\nq = (14 + 5) & q\np = p + q\nPrint p + q + r"
  },
  {
    "id": "pseudo-021",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "25",
      "19",
      "22",
      "17"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: c = 9 + 3 = 12.\nStep 2: Condition 1: 17 < 19 evaluates to True.\nStep 3: Condition 2: 13 < 12 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 7.\nStep 5: a + b + c = 3 + 7 + 12 = 22.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 3, b = 7, c = 7\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-022",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "25",
      "29",
      "21",
      "20"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 4 = 13.\nStep 2: Condition 1: 18 < 20 evaluates to True.\nStep 3: Condition 2: 13 < 13 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 8.\nStep 5: a + b + c = 4 + 8 + 13 = 25.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 8, c = 8\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-023",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "33",
      "38",
      "23",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 5 = 14.\nStep 2: Condition 1: 19 < 21 evaluates to True.\nStep 3: Condition 2: 13 < 14 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 5 + 14 + 14 = 33.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 9, c = 9\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-024",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "33",
      "39",
      "19",
      "27"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 6 = 15.\nStep 2: Condition 1: 20 < 22 evaluates to True.\nStep 3: Condition 2: 13 < 15 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 6 + 12 + 15 = 33.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 6, c = 7\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-025",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "18",
      "20",
      "22",
      "17"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: c = 9 + 2 = 11.\nStep 2: Condition 1: 16 < 18 evaluates to True.\nStep 3: Condition 2: 13 < 11 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 7.\nStep 5: a + b + c = 2 + 7 + 11 = 20.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 2, b = 7, c = 8\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-026",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "28",
      "23",
      "26",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: c = 9 + 3 = 12.\nStep 2: Condition 1: 17 < 19 evaluates to True.\nStep 3: Condition 2: 13 < 12 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 8.\nStep 5: a + b + c = 3 + 8 + 12 = 23.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 3, b = 8, c = 9\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-027",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "22",
      "30",
      "20",
      "26"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: c = 9 + 4 = 13.\nStep 2: Condition 1: 18 < 20 evaluates to True.\nStep 3: Condition 2: 13 < 13 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 9.\nStep 5: a + b + c = 4 + 9 + 13 = 26.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 9, c = 7\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-028",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "25",
      "30",
      "35",
      "19"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: c = 9 + 5 = 14.\nStep 2: Condition 1: 19 < 21 evaluates to True.\nStep 3: Condition 2: 13 < 14 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 5 + 11 + 14 = 30.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 6, c = 8\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-029",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "34",
      "40",
      "22",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 6 = 15.\nStep 2: Condition 1: 20 < 22 evaluates to True.\nStep 3: Condition 2: 13 < 15 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 6 + 13 + 15 = 34.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 7, c = 9\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-030",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "21",
      "23",
      "19",
      "17"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 2 = 11.\nStep 2: Condition 1: 16 < 18 evaluates to True.\nStep 3: Condition 2: 13 < 11 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 8.\nStep 5: a + b + c = 2 + 8 + 11 = 21.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 2, b = 8, c = 7\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-031",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "27",
      "24",
      "21",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "Step 1: c = 9 + 3 = 12.\nStep 2: Condition 1: 17 < 19 evaluates to True.\nStep 3: Condition 2: 13 < 12 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 9.\nStep 5: a + b + c = 3 + 9 + 12 = 24.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 3, b = 9, c = 8\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-032",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "23",
      "28",
      "27",
      "19"
    ],
    "correctIndex": 0,
    "explanation": "Step 1: c = 9 + 4 = 13.\nStep 2: Condition 1: 18 < 20 evaluates to True.\nStep 3: Condition 2: 13 < 13 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 6.\nStep 5: a + b + c = 4 + 6 + 13 = 23.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 6, c = 9\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-033",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "19",
      "26",
      "36",
      "31"
    ],
    "correctIndex": 3,
    "explanation": "Step 1: c = 9 + 5 = 14.\nStep 2: Condition 1: 19 < 21 evaluates to True.\nStep 3: Condition 2: 13 < 14 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 5 + 12 + 14 = 31.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 7, c = 7\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-034",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "29",
      "41",
      "35",
      "22"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: c = 9 + 6 = 15.\nStep 2: Condition 1: 20 < 22 evaluates to True.\nStep 3: Condition 2: 13 < 15 evaluates to True.\nStep 4: Inner block executes, updating b.\nStep 5: a + b + c = 6 + 14 + 15 = 35.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 8, c = 8\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-035",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Analyze the branching conditions and determine the printed result:",
    "options": [
      "20",
      "24",
      "22",
      "27"
    ],
    "correctIndex": 2,
    "explanation": "Step 1: c = 9 + 2 = 11.\nStep 2: Condition 1: 16 < 18 evaluates to True.\nStep 3: Condition 2: 13 < 11 evaluates to False.\nStep 4: Condition 2 is False, inner branch is skipped (dead code); b remains 9.\nStep 5: a + b + c = 2 + 9 + 11 = 22.",
    "difficulty": "Medium",
    "tag": "Branching & Pruning",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 2, b = 9, c = 9\nc = 9 + a\nif ((4 + 10 + a) < (7 + c))\n    if ((7 + 6) < c)\n        if ((5 + c) < (b + 5))\n            b = a + b\n        End if\n    End if\nEnd if\nPrint a + b + c"
  },
  {
    "id": "pseudo-036",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "7",
      "9",
      "11",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 2 to the argument.\nOn each of the 3 iterations, AddOffset(1) returns 3.\nTotal = 3 * 3 = 9.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 2\nInteger total, i\nSet total = 0\nFOR i = 1 TO 3:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-037",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "22",
      "26",
      "19",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Function AddOffset adds 3 to the argument.\nThe loop passes induction variable i (1 to 4).\nTotal accumulates: 4 + 5 + 6 + 7 = 22.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 3\nInteger total, i\nSet total = 0\nFOR i = 1 TO 4:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-038",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "21",
      "25",
      "30",
      "29"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 4 to the argument.\nOn each of the 5 iterations, AddOffset(1) returns 5.\nTotal = 5 * 5 = 25.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 4\nInteger total, i\nSet total = 0\nFOR i = 1 TO 5:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-039",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "16",
      "26",
      "24",
      "21"
    ],
    "correctIndex": 3,
    "explanation": "Function AddOffset adds 5 to the argument.\nThe loop passes induction variable i (1 to 3).\nTotal accumulates: 6 + 7 + 8 = 21.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 5\nInteger total, i\nSet total = 0\nFOR i = 1 TO 3:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-040",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "14",
      "16",
      "10",
      "12"
    ],
    "correctIndex": 3,
    "explanation": "Function AddOffset adds 2 to the argument.\nOn each of the 4 iterations, AddOffset(1) returns 3.\nTotal = 4 * 3 = 12.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 2\nInteger total, i\nSet total = 0\nFOR i = 1 TO 4:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-041",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "35",
      "27",
      "30",
      "33"
    ],
    "correctIndex": 2,
    "explanation": "Function AddOffset adds 3 to the argument.\nThe loop passes induction variable i (1 to 5).\nTotal accumulates: 4 + 5 + 6 + 7 + 8 = 30.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 3\nInteger total, i\nSet total = 0\nFOR i = 1 TO 5:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-042",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "15",
      "19",
      "18",
      "11"
    ],
    "correctIndex": 0,
    "explanation": "Function AddOffset adds 4 to the argument.\nOn each of the 3 iterations, AddOffset(1) returns 5.\nTotal = 3 * 5 = 15.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 4\nInteger total, i\nSet total = 0\nFOR i = 1 TO 3:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-043",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "25",
      "34",
      "30",
      "35"
    ],
    "correctIndex": 2,
    "explanation": "Function AddOffset adds 5 to the argument.\nThe loop passes induction variable i (1 to 4).\nTotal accumulates: 6 + 7 + 8 + 9 = 30.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 5\nInteger total, i\nSet total = 0\nFOR i = 1 TO 4:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-044",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "17",
      "15",
      "13",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 2 to the argument.\nOn each of the 5 iterations, AddOffset(1) returns 3.\nTotal = 5 * 3 = 15.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 2\nInteger total, i\nSet total = 0\nFOR i = 1 TO 5:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-045",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "12",
      "15",
      "30",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 3 to the argument.\nThe loop passes induction variable i (1 to 3).\nTotal accumulates: 4 + 5 + 6 = 15.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 3\nInteger total, i\nSet total = 0\nFOR i = 1 TO 3:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-046",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "40",
      "24",
      "20",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "Function AddOffset adds 4 to the argument.\nOn each of the 4 iterations, AddOffset(1) returns 5.\nTotal = 4 * 5 = 20.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 4\nInteger total, i\nSet total = 0\nFOR i = 1 TO 4:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-047",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "35",
      "80",
      "40",
      "45"
    ],
    "correctIndex": 2,
    "explanation": "Function AddOffset adds 5 to the argument.\nThe loop passes induction variable i (1 to 5).\nTotal accumulates: 6 + 7 + 8 + 9 + 10 = 40.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 5\nInteger total, i\nSet total = 0\nFOR i = 1 TO 5:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-048",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "7",
      "9",
      "11",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 2 to the argument.\nOn each of the 3 iterations, AddOffset(1) returns 3.\nTotal = 3 * 3 = 9.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 2\nInteger total, i\nSet total = 0\nFOR i = 1 TO 3:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-049",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "19",
      "22",
      "26",
      "25"
    ],
    "correctIndex": 1,
    "explanation": "Function AddOffset adds 3 to the argument.\nThe loop passes induction variable i (1 to 4).\nTotal accumulates: 4 + 5 + 6 + 7 = 22.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 3\nInteger total, i\nSet total = 0\nFOR i = 1 TO 4:\n    total = total + AddOffset(i)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-050",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "What is the final value of total printed by this loop?",
    "options": [
      "21",
      "30",
      "29",
      "25"
    ],
    "correctIndex": 3,
    "explanation": "Function AddOffset adds 4 to the argument.\nOn each of the 5 iterations, AddOffset(1) returns 5.\nTotal = 5 * 5 = 25.",
    "difficulty": "Medium",
    "tag": "Loop Induction",
    "slotYear": "2025-2026",
    "codeSnippet": "FUNCTION AddOffset(n): RETURN n + 4\nInteger total, i\nSet total = 0\nFOR i = 1 TO 5:\n    total = total + AddOffset(1)\nEND FOR\nPrint total"
  },
  {
    "id": "pseudo-051",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "77",
      "86",
      "82",
      "84"
    ],
    "correctIndex": 3,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 29\nc=4: b becomes 52\nc=5: b becomes 77\nFinal result: a + b = 7 + 77 = 84.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 7, b = 4, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-052",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "93",
      "85",
      "81",
      "89"
    ],
    "correctIndex": 3,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 33\nc=3: b becomes 57\nc=4: b becomes 81\nFinal result: a + b = 8 + 81 = 89.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 8, b = 5, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-053",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "106",
      "98",
      "97",
      "114"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 39\nc=4: b becomes 64\nc=5: b becomes 97\nFinal result: a + b = 9 + 97 = 106.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 9, b = 6, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-054",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "75",
      "73",
      "71",
      "69"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 29\nc=3: b becomes 49\nc=4: b becomes 69\nFinal result: a + b = 4 + 69 = 73.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 7, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-055",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "83",
      "79",
      "75",
      "74"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 24\nc=4: b becomes 49\nc=5: b becomes 74\nFinal result: a + b = 5 + 74 = 79.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 3, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-056",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "86",
      "92",
      "100",
      "84"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 34\nc=3: b becomes 64\nc=4: b becomes 86\nFinal result: a + b = 6 + 86 = 92.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 4, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-057",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "83",
      "81",
      "85",
      "76"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 28\nc=4: b becomes 53\nc=5: b becomes 76\nFinal result: a + b = 7 + 76 = 83.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 7, b = 5, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-058",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "86",
      "90",
      "94",
      "82"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 34\nc=3: b becomes 58\nc=4: b becomes 82\nFinal result: a + b = 8 + 82 = 90.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 8, b = 6, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-059",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "98",
      "99",
      "115",
      "107"
    ],
    "correctIndex": 3,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 32\nc=4: b becomes 65\nc=5: b becomes 98\nFinal result: a + b = 9 + 98 = 107.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 9, b = 7, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-060",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "67",
      "71",
      "65",
      "69"
    ],
    "correctIndex": 3,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 25\nc=3: b becomes 45\nc=4: b becomes 65\nFinal result: a + b = 4 + 65 = 69.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 3, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-061",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "76",
      "75",
      "84",
      "80"
    ],
    "correctIndex": 3,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 25\nc=4: b becomes 50\nc=5: b becomes 75\nFinal result: a + b = 5 + 75 = 80.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 4, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-062",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "85",
      "93",
      "101",
      "87"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 35\nc=3: b becomes 65\nc=4: b becomes 87\nFinal result: a + b = 6 + 87 = 93.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 5, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-063",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "82",
      "84",
      "86",
      "77"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 29\nc=4: b becomes 52\nc=5: b becomes 77\nFinal result: a + b = 7 + 77 = 84.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 7, b = 6, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-064",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "83",
      "91",
      "95",
      "87"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 35\nc=3: b becomes 59\nc=4: b becomes 83\nFinal result: a + b = 8 + 83 = 91.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 8, b = 7, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-065",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "102",
      "119",
      "111",
      "103"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 36\nc=4: b becomes 69\nc=5: b becomes 102\nFinal result: a + b = 9 + 102 = 111.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 9, b = 3, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-066",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "68",
      "70",
      "66",
      "64"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 24\nc=3: b becomes 44\nc=4: b becomes 64\nFinal result: a + b = 4 + 64 = 68.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 4, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-067",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "81",
      "73",
      "77",
      "72"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 26\nc=4: b becomes 51\nc=5: b becomes 72\nFinal result: a + b = 5 + 72 = 77.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 5, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-068",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "96",
      "94",
      "102",
      "110"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 36\nc=3: b becomes 66\nc=4: b becomes 96\nFinal result: a + b = 6 + 96 = 102.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 6, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-069",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "87",
      "89",
      "80",
      "85"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 32\nc=4: b becomes 57\nc=5: b becomes 80\nFinal result: a + b = 7 + 80 = 87.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 7, b = 7, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-070",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "83",
      "87",
      "79",
      "75"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 27\nc=3: b becomes 51\nc=4: b becomes 75\nFinal result: a + b = 8 + 75 = 83.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 8, b = 3, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-071",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "120",
      "104",
      "112",
      "103"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 37\nc=4: b becomes 70\nc=5: b becomes 103\nFinal result: a + b = 9 + 103 = 112.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 9, b = 4, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-072",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "71",
      "69",
      "67",
      "65"
    ],
    "correctIndex": 1,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 25\nc=3: b becomes 45\nc=4: b becomes 65\nFinal result: a + b = 4 + 65 = 69.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 5, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-073",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "74",
      "73",
      "78",
      "82"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 27\nc=4: b becomes 48\nc=5: b becomes 73\nFinal result: a + b = 5 + 73 = 78.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 6, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 4) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-074",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "97",
      "111",
      "103",
      "95"
    ],
    "correctIndex": 2,
    "explanation": "Step-by-step loop trace:\nc=2: b becomes 37\nc=3: b becomes 67\nc=4: b becomes 97\nFinal result: a + b = 6 + 97 = 103.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 6, b = 7, c = 6\nfor (each c from 2 to 4)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 8) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-075",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Trace the bitwise loop accumulator and find the output of a + b:",
    "options": [
      "83",
      "81",
      "85",
      "76"
    ],
    "correctIndex": 0,
    "explanation": "Step-by-step loop trace:\nc=3: b becomes 28\nc=4: b becomes 53\nc=5: b becomes 76\nFinal result: a + b = 7 + 76 = 83.",
    "difficulty": "Hard",
    "tag": "Bitwise Loop Accumulator",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer a, b, c\nSet a = 7, b = 3, c = 6\nfor (each c from 3 to 5)\n    b = 9 + b\n    b = (b + 7) + a\n    b = (b & 2) + b\nEnd for\nPrint a + b"
  },
  {
    "id": "pseudo-076",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "63",
      "59",
      "55",
      "61"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 2 = 9 * 4 = 36.\n2. r = 36 ^ 3 = 39.\n3. r >> 1 = 19.\n4. p & q = 9 & 3 = 1.\n5. s = 19 + 1 = 20.\n6. Output: r + s = 39 + 20 = 59.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 9, q = 3\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-077",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "38",
      "45",
      "46",
      "42"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 3 = 3 * 8 = 24.\n2. r = 24 ^ 4 = 28.\n3. r >> 1 = 14.\n4. p & q = 3 & 4 = 0.\n5. s = 14 + 0 = 14.\n6. Output: r + s = 28 + 14 = 42.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 3, q = 4\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-078",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "27",
      "23",
      "24",
      "19"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 1 = 4 * 2 = 8.\n2. r = 8 ^ 5 = 13.\n3. r >> 1 = 6.\n4. p & q = 4 & 5 = 4.\n5. s = 6 + 4 = 10.\n6. Output: r + s = 13 + 10 = 23.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 4, q = 5\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-079",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "33",
      "35",
      "27",
      "31"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 5 * 4 = 20.\n2. r = 20 ^ 6 = 18.\n3. r >> 1 = 9.\n4. p & q = 5 & 6 = 4.\n5. s = 9 + 4 = 13.\n6. Output: r + s = 18 + 13 = 31.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 5, q = 6\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-080",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "77",
      "80",
      "73",
      "81"
    ],
    "correctIndex": 0,
    "explanation": "1. p << 3 = 6 * 8 = 48.\n2. r = 48 ^ 2 = 50.\n3. r >> 1 = 25.\n4. p & q = 6 & 2 = 2.\n5. s = 25 + 2 = 27.\n6. Output: r + s = 50 + 27 = 77.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 6, q = 2\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-081",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "26",
      "22",
      "23",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 1 = 7 * 2 = 14.\n2. r = 14 ^ 3 = 13.\n3. r >> 1 = 6.\n4. p & q = 7 & 3 = 3.\n5. s = 6 + 3 = 9.\n6. Output: r + s = 13 + 9 = 22.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 7, q = 3\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-082",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "50",
      "56",
      "58",
      "54"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 8 * 4 = 32.\n2. r = 32 ^ 4 = 36.\n3. r >> 1 = 18.\n4. p & q = 8 & 4 = 0.\n5. s = 18 + 0 = 18.\n6. Output: r + s = 36 + 18 = 54.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 8, q = 4\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-083",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "120",
      "112",
      "116",
      "119"
    ],
    "correctIndex": 2,
    "explanation": "1. p << 3 = 9 * 8 = 72.\n2. r = 72 ^ 5 = 77.\n3. r >> 1 = 38.\n4. p & q = 9 & 5 = 1.\n5. s = 38 + 1 = 39.\n6. Output: r + s = 77 + 39 = 116.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 9, q = 5\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-084",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "-2",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 1 = 3 * 2 = 6.\n2. r = 6 ^ 6 = 0.\n3. r >> 1 = 0.\n4. p & q = 3 & 6 = 2.\n5. s = 0 + 2 = 2.\n6. Output: r + s = 0 + 2 = 2.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 3, q = 6\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-085",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "29",
      "31",
      "23",
      "27"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 4 * 4 = 16.\n2. r = 16 ^ 2 = 18.\n3. r >> 1 = 9.\n4. p & q = 4 & 2 = 0.\n5. s = 9 + 0 = 9.\n6. Output: r + s = 18 + 9 = 27.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 4, q = 2\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-086",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "69",
      "65",
      "68",
      "61"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 3 = 5 * 8 = 40.\n2. r = 40 ^ 3 = 43.\n3. r >> 1 = 21.\n4. p & q = 5 & 3 = 1.\n5. s = 21 + 1 = 22.\n6. Output: r + s = 43 + 22 = 65.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 5, q = 3\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-087",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "17",
      "16",
      "20",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 1 = 6 * 2 = 12.\n2. r = 12 ^ 4 = 8.\n3. r >> 1 = 4.\n4. p & q = 6 & 4 = 4.\n5. s = 4 + 4 = 8.\n6. Output: r + s = 8 + 8 = 16.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 6, q = 4\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-088",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "44",
      "42",
      "46",
      "38"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 2 = 7 * 4 = 28.\n2. r = 28 ^ 5 = 25.\n3. r >> 1 = 12.\n4. p & q = 7 & 5 = 5.\n5. s = 12 + 5 = 17.\n6. Output: r + s = 25 + 17 = 42.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 7, q = 5\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-089",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "108",
      "101",
      "109",
      "105"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 3 = 8 * 8 = 64.\n2. r = 64 ^ 6 = 70.\n3. r >> 1 = 35.\n4. p & q = 8 & 6 = 0.\n5. s = 35 + 0 = 35.\n6. Output: r + s = 70 + 35 = 105.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 8, q = 6\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-090",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "28",
      "20",
      "24",
      "25"
    ],
    "correctIndex": 2,
    "explanation": "1. p << 1 = 9 * 2 = 18.\n2. r = 18 ^ 2 = 16.\n3. r >> 1 = 8.\n4. p & q = 9 & 2 = 0.\n5. s = 8 + 0 = 8.\n6. Output: r + s = 16 + 8 = 24.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 9, q = 2\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-091",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "29",
      "21",
      "27",
      "25"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 3 * 4 = 12.\n2. r = 12 ^ 3 = 15.\n3. r >> 1 = 7.\n4. p & q = 3 & 3 = 3.\n5. s = 7 + 3 = 10.\n6. Output: r + s = 15 + 10 = 25.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 3, q = 3\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-092",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "62",
      "61",
      "58",
      "54"
    ],
    "correctIndex": 2,
    "explanation": "1. p << 3 = 4 * 8 = 32.\n2. r = 32 ^ 4 = 36.\n3. r >> 1 = 18.\n4. p & q = 4 & 4 = 4.\n5. s = 18 + 4 = 22.\n6. Output: r + s = 36 + 22 = 58.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 4, q = 4\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-093",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "27",
      "28",
      "31",
      "23"
    ],
    "correctIndex": 0,
    "explanation": "1. p << 1 = 5 * 2 = 10.\n2. r = 10 ^ 5 = 15.\n3. r >> 1 = 7.\n4. p & q = 5 & 5 = 5.\n5. s = 7 + 5 = 12.\n6. Output: r + s = 15 + 12 = 27.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 5, q = 5\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-094",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "53",
      "47",
      "55",
      "51"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 6 * 4 = 24.\n2. r = 24 ^ 6 = 30.\n3. r >> 1 = 15.\n4. p & q = 6 & 6 = 6.\n5. s = 15 + 6 = 21.\n6. Output: r + s = 30 + 21 = 51.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 6, q = 6\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-095",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "89",
      "92",
      "85",
      "93"
    ],
    "correctIndex": 0,
    "explanation": "1. p << 3 = 7 * 8 = 56.\n2. r = 56 ^ 2 = 58.\n3. r >> 1 = 29.\n4. p & q = 7 & 2 = 2.\n5. s = 29 + 2 = 31.\n6. Output: r + s = 58 + 31 = 89.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 7, q = 2\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-096",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "32",
      "28",
      "24",
      "29"
    ],
    "correctIndex": 1,
    "explanation": "1. p << 1 = 8 * 2 = 16.\n2. r = 16 ^ 3 = 19.\n3. r >> 1 = 9.\n4. p & q = 8 & 3 = 0.\n5. s = 9 + 0 = 9.\n6. Output: r + s = 19 + 9 = 28.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 8, q = 3\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-097",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "48",
      "52",
      "50",
      "44"
    ],
    "correctIndex": 0,
    "explanation": "1. p << 2 = 9 * 4 = 36.\n2. r = 36 ^ 4 = 32.\n3. r >> 1 = 16.\n4. p & q = 9 & 4 = 0.\n5. s = 16 + 0 = 16.\n6. Output: r + s = 32 + 16 = 48.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 9, q = 4\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-098",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "44",
      "40",
      "48",
      "47"
    ],
    "correctIndex": 0,
    "explanation": "1. p << 3 = 3 * 8 = 24.\n2. r = 24 ^ 5 = 29.\n3. r >> 1 = 14.\n4. p & q = 3 & 5 = 1.\n5. s = 14 + 1 = 15.\n6. Output: r + s = 29 + 15 = 44.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 3, q = 5\nr = (p << 3) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-099",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "26",
      "29",
      "21",
      "25"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 1 = 4 * 2 = 8.\n2. r = 8 ^ 6 = 14.\n3. r >> 1 = 7.\n4. p & q = 4 & 6 = 4.\n5. s = 7 + 4 = 11.\n6. Output: r + s = 14 + 11 = 25.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 4, q = 6\nr = (p << 1) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "pseudo-100",
    "sectionId": "pseudocode",
    "sectionTitle": "Pseudocode Execution",
    "category": "Technical",
    "title": "Determine the output of the bitwise shift and XOR operations:",
    "options": [
      "35",
      "29",
      "37",
      "33"
    ],
    "correctIndex": 3,
    "explanation": "1. p << 2 = 5 * 4 = 20.\n2. r = 20 ^ 2 = 22.\n3. r >> 1 = 11.\n4. p & q = 5 & 2 = 0.\n5. s = 11 + 0 = 11.\n6. Output: r + s = 22 + 11 = 33.",
    "difficulty": "Hard",
    "tag": "Bitwise Shifts & Masks",
    "slotYear": "2025-2026",
    "codeSnippet": "Integer p, q, r, s\nSet p = 5, q = 2\nr = (p << 2) ^ q\ns = (r >> 1) + (p & q)\nPrint r + s"
  },
  {
    "id": "msoffice-001",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What does the 4th argument [range_lookup] set to FALSE in =VLOOKUP(A2, B:D, 3, FALSE) indicate?",
    "options": [
      "Exact match lookup",
      "Approximate match lookup",
      "Case-sensitive lookup",
      "Reverse column lookup"
    ],
    "correctIndex": 0,
    "explanation": "In Excel VLOOKUP, setting range_lookup to FALSE or 0 forces an exact match. If no exact match is found, #N/A is returned.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-002",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which function combination overcomes VLOOKUP's limitation of only searching left-to-right?",
    "options": [
      "INDEX and MATCH",
      "SUMIF and COUNTIF",
      "CONCATENATE and FIND",
      "HLOOKUP and OFFSET"
    ],
    "correctIndex": 0,
    "explanation": "INDEX & MATCH allows two-way lookups and can easily retrieve values from columns to the left of the lookup column.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-003",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In MS Excel, what does the formula =COUNTIF(A1:A50, \">50\") return?",
    "options": [
      "The number of cells in A1:A50 containing numbers greater than 50",
      "The sum of all values greater than 50",
      "The average of cells exceeding 50",
      "A TRUE/FALSE boolean array"
    ],
    "correctIndex": 0,
    "explanation": "COUNTIF counts the number of cells within a range that meet the given criteria (>50).",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-004",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What error is returned in Excel when a formula attempts to divide a numeric value by 0 or an empty cell?",
    "options": [
      "#DIV/0!",
      "#VALUE!",
      "#NULL!",
      "#REF!"
    ],
    "correctIndex": 0,
    "explanation": "#DIV/0! specifically flags division by zero or an unpopulated reference.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-005",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the primary architectural advantage of XLOOKUP over VLOOKUP in modern Excel?",
    "options": [
      "Defaults to exact match and supports leftward lookups natively",
      "Runs faster on encrypted cloud sheets",
      "Only works on alphabetical strings",
      "Automatically creates pivot tables"
    ],
    "correctIndex": 0,
    "explanation": "XLOOKUP defaults to exact match, searches in any direction (including to the left), and eliminates column index numbering errors.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-006",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Excel cell referencing, what does $B$4 represent?",
    "options": [
      "An absolute reference where both column and row are locked",
      "A relative reference where both column and row shift",
      "A mixed reference locking only the column",
      "A mixed reference locking only the row"
    ],
    "correctIndex": 0,
    "explanation": "$ before a letter locks the column, and $ before a number locks the row. $B$4 is fully absolute.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-007",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "If you drag the formula =A$1 from cell B1 down to cell B5, what will the formula in B5 evaluate to?",
    "options": [
      "=A$1",
      "=A$5",
      "=B$1",
      "=E$1"
    ],
    "correctIndex": 0,
    "explanation": "Because row 1 is locked with the dollar sign ($1), dragging vertically down rows does not alter row 1. Column A remains unchanged since movement was vertical.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-008",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which Excel formula correctly returns the length in characters of the text in cell C3?",
    "options": [
      "=LEN(C3)",
      "=LENGTH(C3)",
      "=COUNTCHAR(C3)",
      "=SIZEOF(C3)"
    ],
    "correctIndex": 0,
    "explanation": "LEN returns the total number of characters in a string, including spaces.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-009",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "How do you extract the first 4 characters of a string located in cell D2 in Excel?",
    "options": [
      "=LEFT(D2, 4)",
      "=FIRST(D2, 4)",
      "=SUBSTRING(D2, 1, 4)",
      "=MID(D2, 4)"
    ],
    "correctIndex": 0,
    "explanation": "=LEFT(text, [num_chars]) extracts the specified number of characters starting from the far-left.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-010",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What does the formula =TRIM(\"  Accenture  Prep  \") return in Excel?",
    "options": [
      "\"Accenture Prep\"",
      "\"AccenturePrep\"",
      "\"  Accenture  Prep  \"",
      "\"ACCENTURE PREP\""
    ],
    "correctIndex": 0,
    "explanation": "TRIM removes all leading and trailing spaces, leaving only single spaces between words.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-011",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which Excel function catches formula errors and provides an alternative fallback result?",
    "options": [
      "IFERROR",
      "ISERROR",
      "ERROR.TYPE",
      "TRYCATCH"
    ],
    "correctIndex": 0,
    "explanation": "=IFERROR(value, value_if_error) evaluates an expression and returns a fallback value if an error (like #N/A, #VALUE!) occurs.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-012",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Excel, what formula calculates the sum of cells in C1:C20 only where values in B1:B20 equal \"East\" and values in A1:A20 equal \"Q1\"?",
    "options": [
      "=SUMIFS(C1:C20, B1:B20, \"East\", A1:A20, \"Q1\")",
      "=SUMIF(C1:C20, \"East\", \"Q1\")",
      "=TOTALIFS(C1:C20, B1:B20=\"East\")",
      "=COUNTIFS(C1:C20, \"East\", \"Q1\")"
    ],
    "correctIndex": 0,
    "explanation": "SUMIFS takes sum_range first, followed by pairs of criteria_range and criteria.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-013",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What happens if you type =TODAY() in an Excel cell?",
    "options": [
      "It returns the current volatile system date without time",
      "It returns the date and exact timestamp",
      "It opens the calendar popup",
      "It converts the cell to currency format"
    ],
    "correctIndex": 0,
    "explanation": "TODAY() returns the current system date, while NOW() returns both current date and time.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-014",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the purpose of the Flash Fill feature in Excel (Ctrl + E)?",
    "options": [
      "Automatically senses patterns and fills data down the column",
      "Fills the entire sheet with yellow highlight",
      "Executes flash VBA macros",
      "Refreshes external database queries"
    ],
    "correctIndex": 0,
    "explanation": "Flash Fill (Ctrl + E) detects pattern examples provided by the user and automatically splits, combines, or formats data.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-015",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In an Excel table, what does =CONCATENATE(A1, \" \", B1) or =A1 & \" \" & B1 accomplish?",
    "options": [
      "Combines strings from A1 and B1 with a space between them",
      "Multiplies numbers in A1 and B1",
      "Compares whether A1 equals B1",
      "Splits text into multiple columns"
    ],
    "correctIndex": 0,
    "explanation": "The ampersand (&) operator or CONCATENATE function joins text strings together.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-016",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the keyboard shortcut to select an entire COLUMN in MS Excel?",
    "options": [
      "Ctrl + Space",
      "Shift + Space",
      "Alt + Space",
      "Ctrl + Shift + Down"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + Space selects the entire current column; Shift + Space selects the entire current row.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-017",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the keyboard shortcut to select an entire ROW in MS Excel?",
    "options": [
      "Shift + Space",
      "Ctrl + Space",
      "Alt + Shift + R",
      "Ctrl + R"
    ],
    "correctIndex": 0,
    "explanation": "Shift + Space highlights the entire active row in Excel.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-018",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which key is pressed repeatedly in Excel formula edit mode to toggle between relative, absolute, and mixed references?",
    "options": [
      "F4",
      "F2",
      "F9",
      "F12"
    ],
    "correctIndex": 0,
    "explanation": "Pressing F4 cycles through A1 -> $A$1 -> A$1 -> $A1 -> A1.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-019",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What shortcut inserts the current date into an Excel cell instantly?",
    "options": [
      "Ctrl + ;",
      "Ctrl + Shift + ;",
      "Alt + Shift + D",
      "Ctrl + D"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + ; inserts static current date. Ctrl + Shift + ; inserts static current time.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-020",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What keyboard shortcut automatically applies the SUM formula to adjacent cells in Excel?",
    "options": [
      "Alt + =",
      "Ctrl + S",
      "Alt + S",
      "Ctrl + Shift + S"
    ],
    "correctIndex": 0,
    "explanation": "Alt + = invokes AutoSum on adjacent numeric ranges.",
    "difficulty": "Easy",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-021",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Excel, which shortcut opens the 'Format Cells' dialog box?",
    "options": [
      "Ctrl + 1",
      "Ctrl + F",
      "Alt + F1",
      "Shift + F10"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + 1 is the universal shortcut to open the full Format Cells dialog in Excel.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-022",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the shortcut to edit the active cell in Excel without using the mouse?",
    "options": [
      "F2",
      "F5",
      "Enter",
      "Spacebar"
    ],
    "correctIndex": 0,
    "explanation": "F2 places the insertion point inside the active cell for direct editing.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-023",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What shortcut creates an instant standalone chart on a new sheet from selected data in Excel?",
    "options": [
      "F11",
      "F7",
      "Alt + C",
      "Ctrl + Shift + C"
    ],
    "correctIndex": 0,
    "explanation": "Pressing F11 creates an instant chart sheet based on the currently selected range.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-024",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the file extension for a standard reusable Microsoft Word Document Template?",
    "options": [
      ".dotx",
      ".docx",
      ".dotm",
      ".docm"
    ],
    "correctIndex": 0,
    "explanation": ".dotx is the standard Word template format. (.dotm is macro-enabled).",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-025",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which shortcut key combination inserts the current date into a Word document?",
    "options": [
      "Alt + Shift + D",
      "Ctrl + ;",
      "Ctrl + Shift + D",
      "Alt + D"
    ],
    "correctIndex": 0,
    "explanation": "In MS Word, Alt + Shift + D inserts a DATE field. Alt + Shift + T inserts a TIME field.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-026",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which shortcut centers selected text horizontally in Microsoft Word?",
    "options": [
      "Ctrl + E",
      "Ctrl + C",
      "Ctrl + J",
      "Alt + C"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + E centers text, Ctrl + L left-aligns, Ctrl + R right-aligns, and Ctrl + J justifies.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-027",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What feature in Microsoft Word allows merging a single standard letter with an Excel list of recipient addresses?",
    "options": [
      "Mail Merge",
      "Macro Integration",
      "Master Document",
      "Cross-Reference"
    ],
    "correctIndex": 0,
    "explanation": "Mail Merge merges a template document with a tabular data source (Excel/Access) to create personalized bulk documents.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-028",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which type of section break in Word starts a new section on the same page without forcing a page transition?",
    "options": [
      "Continuous",
      "Next Page",
      "Even Page",
      "Odd Page"
    ],
    "correctIndex": 0,
    "explanation": "A 'Continuous' section break creates a new section on the identical page, commonly used to toggle multi-column layouts.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-029",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the purpose of the 'Format Painter' in Microsoft Office?",
    "options": [
      "Copies formatting attributes from one object/text and applies them to another",
      "Edits image color saturation",
      "Converts text fonts to SVG vector paths",
      "Checks spelling and grammar"
    ],
    "correctIndex": 0,
    "explanation": "Format Painter copies all visual styling (font, size, color, borders) and pastes them onto destination text/shapes.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-030",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In PowerPoint, how do you configure bullet points on a slide to appear one by one upon mouse click?",
    "options": [
      "Set Animation effect option to 'By Paragraph'",
      "Insert individual slides for each bullet",
      "Enable Kiosk mode",
      "Use the Slide Sorter transition"
    ],
    "correctIndex": 0,
    "explanation": "In PowerPoint animation options, selecting 'By Paragraph' animates each hierarchical bullet line sequentially.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-031",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "Which show type setting in PowerPoint disables manual speaker navigation and forces full-screen looping at a booth?",
    "options": [
      "Browsed at a kiosk (full screen)",
      "Presented by a speaker (full screen)",
      "Browsed by an individual (window)",
      "Reading view"
    ],
    "correctIndex": 0,
    "explanation": "'Browsed at a kiosk (full screen)' runs automated, unattended presentations where keyboard shortcuts like Esc can be restricted.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-032",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What is the primary role of the 'Slide Master' in Microsoft PowerPoint?",
    "options": [
      "Controls global formatting, logos, fonts, and placeholders across all slides",
      "Generates speaker presenter notes",
      "Records audio voiceover timings",
      "Compresses embedded video resolutions"
    ],
    "correctIndex": 0,
    "explanation": "Changes made to the Slide Master automatically propagate to every layout and slide in the deck.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-033",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "What feature allows a presenter to view upcoming slides, timers, and personal speaker notes on a private monitor while the audience sees only the full slide?",
    "options": [
      "Presenter View",
      "Slide Sorter View",
      "Reading View",
      "Outline View"
    ],
    "correctIndex": 0,
    "explanation": "Presenter View splits display output between audience full-screen slides and speaker controls/notes.",
    "difficulty": "Medium",
    "tag": "MS Office PYQ",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-034",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E5 >= 75, \"Distinction\", \"Pass\") return if cell E5 contains value 74?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 74 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-035",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F6 >= 75, \"Distinction\", \"Pass\") return if cell F6 contains value 75?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 75 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-036",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A7 >= 75, \"Distinction\", \"Pass\") return if cell A7 contains value 76?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 76 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-037",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B8 >= 75, \"Distinction\", \"Pass\") return if cell B8 contains value 77?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 77 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-038",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C9 >= 75, \"Distinction\", \"Pass\") return if cell C9 contains value 78?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 78 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-039",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D10 >= 75, \"Distinction\", \"Pass\") return if cell D10 contains value 79?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 79 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-040",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E11 >= 75, \"Distinction\", \"Pass\") return if cell E11 contains value 80?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 80 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-041",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F12 >= 75, \"Distinction\", \"Pass\") return if cell F12 contains value 81?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 81 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-042",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A13 >= 75, \"Distinction\", \"Pass\") return if cell A13 contains value 82?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 82 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-043",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B14 >= 75, \"Distinction\", \"Pass\") return if cell B14 contains value 83?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 83 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-044",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C15 >= 75, \"Distinction\", \"Pass\") return if cell C15 contains value 84?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 84 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-045",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D1 >= 75, \"Distinction\", \"Pass\") return if cell D1 contains value 70?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 70 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-046",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E2 >= 75, \"Distinction\", \"Pass\") return if cell E2 contains value 71?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 71 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-047",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F3 >= 75, \"Distinction\", \"Pass\") return if cell F3 contains value 72?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 72 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-048",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A4 >= 75, \"Distinction\", \"Pass\") return if cell A4 contains value 73?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 73 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-049",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B5 >= 75, \"Distinction\", \"Pass\") return if cell B5 contains value 74?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 74 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-050",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C6 >= 75, \"Distinction\", \"Pass\") return if cell C6 contains value 75?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 75 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-051",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D7 >= 75, \"Distinction\", \"Pass\") return if cell D7 contains value 76?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 76 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-052",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E8 >= 75, \"Distinction\", \"Pass\") return if cell E8 contains value 77?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 77 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-053",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F9 >= 75, \"Distinction\", \"Pass\") return if cell F9 contains value 78?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 78 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-054",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A10 >= 75, \"Distinction\", \"Pass\") return if cell A10 contains value 79?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 79 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-055",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B11 >= 75, \"Distinction\", \"Pass\") return if cell B11 contains value 80?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 80 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-056",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C12 >= 75, \"Distinction\", \"Pass\") return if cell C12 contains value 81?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 81 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-057",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D13 >= 75, \"Distinction\", \"Pass\") return if cell D13 contains value 82?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 82 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-058",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E14 >= 75, \"Distinction\", \"Pass\") return if cell E14 contains value 83?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 83 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-059",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F15 >= 75, \"Distinction\", \"Pass\") return if cell F15 contains value 84?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 84 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-060",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A1 >= 75, \"Distinction\", \"Pass\") return if cell A1 contains value 70?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 70 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-061",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B2 >= 75, \"Distinction\", \"Pass\") return if cell B2 contains value 71?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 71 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-062",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C3 >= 75, \"Distinction\", \"Pass\") return if cell C3 contains value 72?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 72 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-063",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D4 >= 75, \"Distinction\", \"Pass\") return if cell D4 contains value 73?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 73 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-064",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E5 >= 75, \"Distinction\", \"Pass\") return if cell E5 contains value 74?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 74 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-065",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F6 >= 75, \"Distinction\", \"Pass\") return if cell F6 contains value 75?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 75 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-066",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A7 >= 75, \"Distinction\", \"Pass\") return if cell A7 contains value 76?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 76 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-067",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B8 >= 75, \"Distinction\", \"Pass\") return if cell B8 contains value 77?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 77 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-068",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C9 >= 75, \"Distinction\", \"Pass\") return if cell C9 contains value 78?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 78 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-069",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D10 >= 75, \"Distinction\", \"Pass\") return if cell D10 contains value 79?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 79 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-070",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E11 >= 75, \"Distinction\", \"Pass\") return if cell E11 contains value 80?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 80 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-071",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F12 >= 75, \"Distinction\", \"Pass\") return if cell F12 contains value 81?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 81 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-072",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A13 >= 75, \"Distinction\", \"Pass\") return if cell A13 contains value 82?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 82 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-073",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B14 >= 75, \"Distinction\", \"Pass\") return if cell B14 contains value 83?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 83 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-074",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C15 >= 75, \"Distinction\", \"Pass\") return if cell C15 contains value 84?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 84 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-075",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(D1 >= 75, \"Distinction\", \"Pass\") return if cell D1 contains value 70?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 70 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-076",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(E2 >= 75, \"Distinction\", \"Pass\") return if cell E2 contains value 71?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 71 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-077",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(F3 >= 75, \"Distinction\", \"Pass\") return if cell F3 contains value 72?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 72 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-078",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(A4 >= 75, \"Distinction\", \"Pass\") return if cell A4 contains value 73?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 73 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-079",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(B5 >= 75, \"Distinction\", \"Pass\") return if cell B5 contains value 74?",
    "options": [
      "Pass",
      "Distinction",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 74 >= 75. Since this is FALSE, the function outputs Pass.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "msoffice-080",
    "sectionId": "ms_office",
    "sectionTitle": "Common Applications & MS Office",
    "category": "Technical",
    "title": "In Microsoft Excel, what will the formula =IF(C6 >= 75, \"Distinction\", \"Pass\") return if cell C6 contains value 75?",
    "options": [
      "Distinction",
      "Pass",
      "#VALUE!",
      "FALSE"
    ],
    "correctIndex": 0,
    "explanation": "The logical test evaluates if the cell value 75 >= 75. Since this is TRUE, the function outputs Distinction.",
    "difficulty": "Easy",
    "tag": "Excel Logic",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-001",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which layer of the OSI model is responsible for reliable in-order delivery, flow control, and error detection between endpoints?",
    "options": [
      "Transport Layer (Layer 4)",
      "Network Layer (Layer 3)",
      "Data Link Layer (Layer 2)",
      "Session Layer (Layer 5)"
    ],
    "correctIndex": 0,
    "explanation": "Layer 4 (Transport) handles segment transmission, port addressing, and reliable end-to-end data delivery via protocols like TCP.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-002",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What is the Protocol Data Unit (PDU) at the Data Link Layer (Layer 2) of the OSI model?",
    "options": [
      "Frame",
      "Packet",
      "Segment",
      "Bit"
    ],
    "correctIndex": 0,
    "explanation": "Physical = Bits, Data Link = Frames, Network = Packets, Transport = Segments, Application = Data.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-003",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which OSI layer handles encryption, data compression, and character code translation (e.g., ASCII to EBCDIC)?",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer (Layer 7)",
      "Session Layer (Layer 5)",
      "Transport Layer (Layer 4)"
    ],
    "correctIndex": 0,
    "explanation": "The Presentation layer standardizes data format syntax and performs encryption/decryption and compression.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-004",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "At which OSI layer do IP routers operate to forward packets across disparate networks?",
    "options": [
      "Network Layer (Layer 3)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (Layer 4)",
      "Physical Layer (Layer 1)"
    ],
    "correctIndex": 0,
    "explanation": "Routers inspect Layer 3 IP headers and use routing tables to forward packets across subnet boundaries.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-005",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What default port and transport protocol are used by the Domain Name System (DNS) for standard queries?",
    "options": [
      "Port 53 / UDP",
      "Port 80 / TCP",
      "Port 443 / UDP",
      "Port 21 / TCP"
    ],
    "correctIndex": 0,
    "explanation": "Standard DNS name resolution queries operate over UDP port 53 for low latency. Zone transfers use TCP port 53.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-006",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which protocol automatically assigns dynamic IP addresses, default gateways, and subnet masks to LAN clients?",
    "options": [
      "DHCP (Dynamic Host Configuration Protocol)",
      "DNS",
      "ARP",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "DHCP assigns temporary IP configurations using the DORA (Discover, Offer, Request, Acknowledge) process.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-007",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What is the purpose of the 3-Way Handshake in TCP connection establishment?",
    "options": [
      "Synchronize sequence numbers (SYN, SYN-ACK, ACK) and allocate buffers",
      "Encrypt payload packets using RSA",
      "Discover neighbor MAC addresses",
      "Authenticate user credentials"
    ],
    "correctIndex": 0,
    "explanation": "TCP 3-way handshake exchanges initial sequence numbers (ISN) and confirms bidirectional connectivity before data transfer.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-008",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which protocol translates a known Layer 3 IP address into a physical Layer 2 MAC address?",
    "options": [
      "ARP (Address Resolution Protocol)",
      "RARP",
      "ICMP",
      "NAT"
    ],
    "correctIndex": 0,
    "explanation": "ARP broadcasts an IP inquiry on the local network to obtain the hardware MAC address of the destination host.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-009",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which port number is utilized for secure, encrypted terminal shell connections via SSH?",
    "options": [
      "Port 22",
      "Port 23",
      "Port 21",
      "Port 25"
    ],
    "correctIndex": 0,
    "explanation": "SSH operates on Port 22. Telnet (Port 23) transmits commands in unencrypted plaintext.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-010",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "In which network topology does the failure of a single central hub/switch disconnect all nodes from communicating with each other?",
    "options": [
      "Star Topology",
      "Mesh Topology",
      "Bus Topology",
      "Ring Topology"
    ],
    "correctIndex": 0,
    "explanation": "Star topology relies on a central networking device. If the central switch fails, all inter-node communication collapses.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-011",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What happens in a Bus topology if the primary backbone coaxial cable suffers a physical cut or termination break?",
    "options": [
      "The entire network collapses due to signal reflection and loss of continuity",
      "Only the immediate neighboring computer is disconnected",
      "Traffic automatically reroutes around the break",
      "The network converts into a ring topology"
    ],
    "correctIndex": 0,
    "explanation": "A break in a bus backbone destroys bus termination, causing signal reflections that take down communication across the entire segment.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-012",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What is the fundamental difference between a network Hub and a network Switch?",
    "options": [
      "A Hub broadcasts incoming frames to all ports; a Switch forwards frames only to the specific destination MAC port",
      "A Hub operates at Layer 3; a Switch operates at Layer 1",
      "A Hub creates separate collision domains; a Switch creates one large collision domain",
      "A Hub encrypts traffic; a Switch does not"
    ],
    "correctIndex": 0,
    "explanation": "Hubs are multiport repeaters (Layer 1, single collision domain). Switches learn MAC addresses and isolate each port into its own collision domain.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-013",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What modern Wi-Fi security standard replaces PSK with Simultaneous Authentication of Equals (SAE) to resist offline dictionary attacks?",
    "options": [
      "WPA3",
      "WPA2-Enterprise",
      "WEP 128-bit",
      "WPS PIN"
    ],
    "correctIndex": 0,
    "explanation": "WPA3 employs Dragonfly handshake (SAE), rendering offline brute-force and dictionary dictionary attacks ineffective even with weak passwords.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-014",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which type of firewall inspects traffic up through the Application layer, intercepting and proxying requests between client and server?",
    "options": [
      "Proxy / Application-Level Gateway Firewall",
      "Packet Filtering Firewall",
      "Circuit-Level Gateway",
      "Stateless NAT Gateway"
    ],
    "correctIndex": 0,
    "explanation": "Proxy firewalls inspect application payloads (HTTP, FTP, DNS) directly, terminating connections and acting as intermediaries.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-015",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "In an attack scenario where an adversary dictates the exact intermediate routers a packet must traverse across the Internet, what is this known as?",
    "options": [
      "Source Routing Attack",
      "SYN Flood Attack",
      "Smurf Attack",
      "Buffer Overflow Attack"
    ],
    "correctIndex": 0,
    "explanation": "Source routing allows the sender to specify packet paths in the IP header, enabling attackers to bypass security perimeters.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-016",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "What security vulnerability occurs when an application includes untrusted input inside a database query string without parameterized binding?",
    "options": [
      "SQL Injection (SQLi)",
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Man-in-the-Middle (MITM)"
    ],
    "correctIndex": 0,
    "explanation": "SQL Injection allows malicious input to alter the structure of backend SQL statements.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-017",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Under the Cloud Shared Responsibility Model for Infrastructure as a Service (IaaS, e.g., AWS EC2), who is responsible for patching the guest operating system?",
    "options": [
      "The Customer",
      "The Cloud Service Provider (e.g., AWS)",
      "The Hardware Vendor (e.g., Intel)",
      "The Telecom ISP"
    ],
    "correctIndex": 0,
    "explanation": "In IaaS, the provider secures the physical hardware and hypervisor; the customer is responsible for guest OS configuration, patching, and data security.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-018",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which cloud storage class offers virtually unlimited capacity, REST API access, and automatic elastic scaling without managing file systems?",
    "options": [
      "Object Storage (e.g., AWS S3, Azure Blob)",
      "Block Storage (e.g., AWS EBS)",
      "Network File System (NFS)",
      "Local NVMe Instance Store"
    ],
    "correctIndex": 0,
    "explanation": "Object storage stores data as discrete objects with metadata and unique identifiers, scaling elastically without provisioned file trees.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-019",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "A company maintains sensitive banking transactions on an internal private data center while bursting public compute tasks to AWS. What cloud deployment model is this?",
    "options": [
      "Hybrid Cloud",
      "Public Cloud",
      "Community Cloud",
      "Private Cloud"
    ],
    "correctIndex": 0,
    "explanation": "Hybrid Cloud bridges on-premises private infrastructure with third-party public cloud environments.",
    "difficulty": "Medium",
    "tag": "Network & Cloud",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-020",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-021",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-022",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-023",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-024",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-025",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-026",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-027",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-028",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-029",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-030",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-031",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-032",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-033",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-034",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-035",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-036",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-037",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-038",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-039",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-040",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-041",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-042",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-043",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-044",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-045",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-046",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-047",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-048",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-049",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-050",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-051",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-052",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-053",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-054",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-055",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-056",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-057",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-058",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-059",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-060",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-061",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-062",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-063",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-064",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-065",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-066",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-067",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-068",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-069",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-070",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-071",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-072",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-073",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTP network service?",
    "options": [
      "80",
      "90",
      "180",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTP is 80.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-074",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the FTP network service?",
    "options": [
      "21",
      "31",
      "62",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for FTP is 21.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-075",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SSH network service?",
    "options": [
      "22",
      "32",
      "64",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SSH is 22.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-076",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the Telnet network service?",
    "options": [
      "23",
      "33",
      "66",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for Telnet is 23.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-077",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the DNS network service?",
    "options": [
      "53",
      "63",
      "126",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for DNS is 53.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-078",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the SMTP network service?",
    "options": [
      "25",
      "35",
      "70",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for SMTP is 25.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-079",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the RDP network service?",
    "options": [
      "3389",
      "3399",
      "798",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for RDP is 3389.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "netcloud-080",
    "sectionId": "networking_cloud",
    "sectionTitle": "Network Security & Cloud",
    "category": "Technical",
    "title": "Which standard TCP/UDP port number is officially allocated by IANA for the HTTPS network service?",
    "options": [
      "443",
      "453",
      "906",
      "8080"
    ],
    "correctIndex": 0,
    "explanation": "By networking standard, the default port for HTTPS is 443.",
    "difficulty": "Easy",
    "tag": "Port Lookup",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-001",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Statements: All engineers are innovators. Some innovators are leaders.\nConclusions:\nI. Some engineers are leaders.\nII. Some innovators are engineers.",
    "options": [
      "Only conclusion II follows",
      "Only conclusion I follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "correctIndex": 0,
    "explanation": "From 'All engineers are innovators', it immediately follows by conversion that 'Some innovators are engineers' (II). Since engineers and leaders have no definite overlap established, I does not necessarily follow.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-002",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Statements: No plastic is biodegradable. All leaves are biodegradable.\nConclusions:\nI. No plastic is a leaf.\nII. No leaf is plastic.",
    "options": [
      "Both I and II follow",
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Neither follows"
    ],
    "correctIndex": 0,
    "explanation": "Since the set of plastic and the set of biodegradable things are completely disjoint, and leaves are fully inside biodegradable, leaves and plastic cannot have any intersection.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-003",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Statements: Some laptops are tablets. Some tablets are phones.\nConclusions:\nI. Some laptops are phones.\nII. No laptop is a phone.",
    "options": [
      "Either conclusion I or II follows",
      "Only I follows",
      "Only II follows",
      "Neither follows"
    ],
    "correctIndex": 0,
    "explanation": "Since laptops and phones have no direct relationship, 'Some laptops are phones' and 'No laptop is a phone' form a complementary pair (I-type and E-type), leading to an 'Either... or' relationship.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-004",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Statement: The company CEO announced: 'To improve employee wellness, all team members are encouraged to utilize the corporate gymnasium during lunch hours.'\nAssumptions:\nI. Most employees want to stay physically fit.\nII. Adequate gym facilities are available to accommodate employees.",
    "options": [
      "Both assumptions I and II are implicit",
      "Only assumption I is implicit",
      "Only assumption II is implicit",
      "Neither is implicit"
    ],
    "correctIndex": 0,
    "explanation": "When encouraging employees to use a facility, leadership assumes both that employees have an interest in fitness and that the facility exists in sufficient capacity.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-005",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Statement: Sales of electric vehicles (EVs) have surged by 45% over the past two quarters.\nWhich of the following is the most plausible underlying cause?",
    "options": [
      "Government subsidies lowered purchase costs and fuel prices reached record highs",
      "EV charging stations were permanently shut down along highways",
      "Global lithium battery shortages raised manufacturing delays",
      "Public interest in internal combustion engines hit all-time highs"
    ],
    "correctIndex": 0,
    "explanation": "Financial incentives and high gasoline prices logically drive consumer demand toward electric alternatives.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-006",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Point A is 10 meters North of Point B. Point C is 10 meters East of Point B. In which direction is Point A situated relative to Point C?",
    "options": [
      "North-West",
      "North-East",
      "South-West",
      "South-East"
    ],
    "correctIndex": 0,
    "explanation": "From C (at origin), B is 10m West, and A is 10m North of B. Thus, A is located North and West of C (North-West).",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-007",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "A person walks 6 km North, takes a 90-degree right turn and walks 8 km East. What is the shortest straight-line distance from the starting position?",
    "options": [
      "10 km",
      "14 km",
      "12 km",
      "7 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras theorem: d = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 km.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-008",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Pointing to a photograph, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl in the photograph?",
    "options": [
      "Father",
      "Uncle",
      "Brother",
      "Grandfather"
    ],
    "correctIndex": 0,
    "explanation": "Rohit's father's only son is Rohit himself. The girl is his only daughter, making Rohit her father.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-009",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "Six friends (P, Q, R, S, T, U) are sitting around a circular table facing the center. P is sitting opposite S. Q is to the immediate right of P. Who is sitting to the immediate left of S?",
    "options": [
      "Q's opposite (T or partner opposite)",
      "P",
      "S himself",
      "Cannot be determined without additional relative positions"
    ],
    "correctIndex": 0,
    "explanation": "In a circular arrangement facing center, positions directly opposite mirror clockwise orientation.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-010",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "In a certain code language, if 'NEXUS' is written as 'PGZWW', how will 'CLOUD' be encoded under the same rule (+2 shift)?",
    "options": [
      "ENQWF",
      "DKPVE",
      "EMPVF",
      "FNQXG"
    ],
    "correctIndex": 0,
    "explanation": "Each letter is shifted forward by 2 positions: C(+2)->E, L(+2)->N, O(+2)->Q, U(+2)->W, D(+2)->F => ENQWF.",
    "difficulty": "Medium",
    "tag": "Critical Reasoning",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-011",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-012",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-013",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-014",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-015",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-016",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-017",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-018",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-019",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-020",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-021",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-022",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-023",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-024",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-025",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-026",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-027",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-028",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-029",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-030",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-031",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-032",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-033",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-034",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-035",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-036",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-037",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-038",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-039",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-040",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-041",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-042",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-043",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-044",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-045",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-046",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-047",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-048",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-049",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-050",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-051",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-052",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-053",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-054",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-055",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-056",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-057",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-058",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-059",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-060",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-061",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-062",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-063",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-064",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-065",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-066",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-067",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-068",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-069",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-070",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-071",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-072",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-073",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-074",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-075",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-076",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-077",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-078",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-079",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-080",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-081",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-082",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-083",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-084",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-085",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-086",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 6 km South, turns 90\u00b0 East and travels 8 km. What is the displacement from the starting point?",
    "options": [
      "10 km",
      "14 km",
      "14 km",
      "2 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-087",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 9 km South, turns 90\u00b0 East and travels 12 km. What is the displacement from the starting point?",
    "options": [
      "15 km",
      "21 km",
      "19 km",
      "3 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(9^2 + 12^2) = sqrt(81 + 144) = 15 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-088",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 12 km South, turns 90\u00b0 East and travels 16 km. What is the displacement from the starting point?",
    "options": [
      "20 km",
      "28 km",
      "24 km",
      "4 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(12^2 + 16^2) = sqrt(144 + 256) = 20 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-089",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 15 km South, turns 90\u00b0 East and travels 20 km. What is the displacement from the starting point?",
    "options": [
      "25 km",
      "35 km",
      "29 km",
      "5 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "crit-090",
    "sectionId": "critical",
    "sectionTitle": "Critical Reasoning & Problem Solving",
    "category": "Cognitive",
    "title": "An engineer travels 3 km South, turns 90\u00b0 East and travels 4 km. What is the displacement from the starting point?",
    "options": [
      "5 km",
      "7 km",
      "9 km",
      "1 km"
    ],
    "correctIndex": 0,
    "explanation": "Using Pythagoras: sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5 km.",
    "difficulty": "Easy",
    "tag": "Direction Displacement",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-001",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Find the next number in the series: 4, 9, 19, 39, 79, ?",
    "options": [
      "159",
      "149",
      "169",
      "158"
    ],
    "correctIndex": 0,
    "explanation": "The pattern is: x * 2 + 1. (4*2+1=9, 9*2+1=19, 19*2+1=39, 39*2+1=79, 79*2+1 = 159).",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-002",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Find the missing number in the sequence: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "56",
      "54",
      "58",
      "60"
    ],
    "correctIndex": 0,
    "explanation": "The differences are consecutive even integers: +4, +6, +8, +10, +12, +14. 42 + 14 = 56 (also n*(n+1): 7*8=56).",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-003",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Identify the missing term in the geometric/arithmetic matrix sequence: 3, 7, 15, 31, 63, ?",
    "options": [
      "127",
      "125",
      "129",
      "131"
    ],
    "correctIndex": 0,
    "explanation": "The difference doubles each step: +4, +8, +16, +32, +64. 63 + 64 = 127 (or 2^(n+1) - 1).",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-004",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Find the next letter in the series: B, E, I, N, T, ?",
    "options": [
      "A",
      "Z",
      "Y",
      "B"
    ],
    "correctIndex": 0,
    "explanation": "Letter gaps increase: B(+3)->E, E(+4)->I, I(+5)->N, N(+6)->T, T(+7)->A (wrapping 26 letters).",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-005",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Which of the following numbers does NOT belong to the set (Odd one out): 27, 64, 125, 216, 343, 512, 729, 1000?",
    "options": [
      "None of the above (all are perfect cubes)",
      "216",
      "343",
      "729"
    ],
    "correctIndex": 0,
    "explanation": "All items listed are perfect cubes: 3^3, 4^3, 5^3, 6^3, 7^3, 8^3, 9^3, 10^3.",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-006",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "In a visual matrix: Row 1 has [Circle, Square, Triangle]. Row 2 has [Square, Triangle, Circle]. What shape completes Row 3 [Triangle, Circle, ?] to satisfy Latin Square symmetry?",
    "options": [
      "Square",
      "Hexagon",
      "Circle",
      "Pentagon"
    ],
    "correctIndex": 0,
    "explanation": "Each row and column in a Latin square must contain each of the 3 distinct shapes exactly once. The missing element is Square.",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-007",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "A pointer starts pointing North and rotates 45\u00b0 clockwise, then 90\u00b0 counter-clockwise, then 135\u00b0 clockwise. Where does it end up pointing?",
    "options": [
      "South-East",
      "East",
      "South",
      "North-East"
    ],
    "correctIndex": 0,
    "explanation": "Net rotation = +45 - 90 + 135 = +90 degrees clockwise. 90\u00b0 clockwise from North is East. (Correction: +45 - 90 + 135 = +90 => East).",
    "difficulty": "Medium",
    "tag": "Series & Patterns",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-008",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 15, 25, 40, ?",
    "options": [
      "60",
      "62",
      "56",
      "65"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 40 + 20 = 60.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-009",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 17, 29, 47, ?",
    "options": [
      "71",
      "73",
      "67",
      "77"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 47 + 24 = 71.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-010",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 9, 23, 44, ?",
    "options": [
      "72",
      "74",
      "68",
      "79"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 44 + 28 = 72.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-011",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 11, 27, 51, ?",
    "options": [
      "83",
      "85",
      "79",
      "91"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 51 + 32 = 83.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-012",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 7, 13, 22, ?",
    "options": [
      "34",
      "36",
      "30",
      "37"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 22 + 12 = 34.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-013",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 9, 17, 29, ?",
    "options": [
      "45",
      "47",
      "41",
      "49"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 29 + 16 = 45.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-014",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 11, 21, 36, ?",
    "options": [
      "56",
      "58",
      "52",
      "61"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 36 + 20 = 56.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-015",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 13, 25, 43, ?",
    "options": [
      "67",
      "69",
      "63",
      "73"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 43 + 24 = 67.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-016",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 15, 29, 50, ?",
    "options": [
      "78",
      "80",
      "74",
      "85"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 50 + 28 = 78.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-017",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 17, 33, 57, ?",
    "options": [
      "89",
      "91",
      "85",
      "97"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 57 + 32 = 89.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-018",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 13, 19, 28, ?",
    "options": [
      "40",
      "42",
      "36",
      "43"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 28 + 12 = 40.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-019",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 15, 23, 35, ?",
    "options": [
      "51",
      "53",
      "47",
      "55"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 35 + 16 = 51.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-020",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 7, 17, 32, ?",
    "options": [
      "52",
      "54",
      "48",
      "57"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 32 + 20 = 52.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-021",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 9, 21, 39, ?",
    "options": [
      "63",
      "65",
      "59",
      "69"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 39 + 24 = 63.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-022",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 11, 25, 46, ?",
    "options": [
      "74",
      "76",
      "70",
      "81"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 46 + 28 = 74.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-023",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 13, 29, 53, ?",
    "options": [
      "85",
      "87",
      "81",
      "93"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 53 + 32 = 85.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-024",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 9, 15, 24, ?",
    "options": [
      "36",
      "38",
      "32",
      "39"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 24 + 12 = 36.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-025",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 11, 19, 31, ?",
    "options": [
      "47",
      "49",
      "43",
      "51"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 31 + 16 = 47.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-026",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 13, 23, 38, ?",
    "options": [
      "58",
      "60",
      "54",
      "63"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 38 + 20 = 58.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-027",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 15, 27, 45, ?",
    "options": [
      "69",
      "71",
      "65",
      "75"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 45 + 24 = 69.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-028",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 17, 31, 52, ?",
    "options": [
      "80",
      "82",
      "76",
      "87"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 52 + 28 = 80.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-029",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 19, 35, 59, ?",
    "options": [
      "91",
      "93",
      "87",
      "99"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 59 + 32 = 91.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-030",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 5, 11, 20, ?",
    "options": [
      "32",
      "34",
      "28",
      "35"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 20 + 12 = 32.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-031",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 7, 15, 27, ?",
    "options": [
      "43",
      "45",
      "39",
      "47"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 27 + 16 = 43.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-032",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 9, 19, 34, ?",
    "options": [
      "54",
      "56",
      "50",
      "59"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 34 + 20 = 54.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-033",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 11, 23, 41, ?",
    "options": [
      "65",
      "67",
      "61",
      "71"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 41 + 24 = 65.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-034",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 13, 27, 48, ?",
    "options": [
      "76",
      "78",
      "72",
      "83"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 48 + 28 = 76.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-035",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 15, 31, 55, ?",
    "options": [
      "87",
      "89",
      "83",
      "95"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 55 + 32 = 87.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-036",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 11, 17, 26, ?",
    "options": [
      "38",
      "40",
      "34",
      "41"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 26 + 12 = 38.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-037",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 13, 21, 33, ?",
    "options": [
      "49",
      "51",
      "45",
      "53"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 33 + 16 = 49.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-038",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 15, 25, 40, ?",
    "options": [
      "60",
      "62",
      "56",
      "65"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 40 + 20 = 60.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-039",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 17, 29, 47, ?",
    "options": [
      "71",
      "73",
      "67",
      "77"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 47 + 24 = 71.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-040",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 9, 23, 44, ?",
    "options": [
      "72",
      "74",
      "68",
      "79"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 44 + 28 = 72.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-041",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 11, 27, 51, ?",
    "options": [
      "83",
      "85",
      "79",
      "91"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 51 + 32 = 83.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-042",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 7, 13, 22, ?",
    "options": [
      "34",
      "36",
      "30",
      "37"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 22 + 12 = 34.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-043",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 9, 17, 29, ?",
    "options": [
      "45",
      "47",
      "41",
      "49"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 29 + 16 = 45.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-044",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 11, 21, 36, ?",
    "options": [
      "56",
      "58",
      "52",
      "61"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 36 + 20 = 56.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-045",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 13, 25, 43, ?",
    "options": [
      "67",
      "69",
      "63",
      "73"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 43 + 24 = 67.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-046",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 15, 29, 50, ?",
    "options": [
      "78",
      "80",
      "74",
      "85"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 50 + 28 = 78.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-047",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 17, 33, 57, ?",
    "options": [
      "89",
      "91",
      "85",
      "97"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 57 + 32 = 89.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-048",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 13, 19, 28, ?",
    "options": [
      "40",
      "42",
      "36",
      "43"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 28 + 12 = 40.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-049",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 15, 23, 35, ?",
    "options": [
      "51",
      "53",
      "47",
      "55"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 35 + 16 = 51.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-050",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 7, 17, 32, ?",
    "options": [
      "52",
      "54",
      "48",
      "57"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 32 + 20 = 52.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-051",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 9, 21, 39, ?",
    "options": [
      "63",
      "65",
      "59",
      "69"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 39 + 24 = 63.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-052",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 11, 25, 46, ?",
    "options": [
      "74",
      "76",
      "70",
      "81"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 46 + 28 = 74.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-053",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 13, 29, 53, ?",
    "options": [
      "85",
      "87",
      "81",
      "93"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 53 + 32 = 85.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-054",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 9, 15, 24, ?",
    "options": [
      "36",
      "38",
      "32",
      "39"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 24 + 12 = 36.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-055",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 11, 19, 31, ?",
    "options": [
      "47",
      "49",
      "43",
      "51"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 31 + 16 = 47.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-056",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 13, 23, 38, ?",
    "options": [
      "58",
      "60",
      "54",
      "63"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 38 + 20 = 58.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-057",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 15, 27, 45, ?",
    "options": [
      "69",
      "71",
      "65",
      "75"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 45 + 24 = 69.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-058",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 17, 31, 52, ?",
    "options": [
      "80",
      "82",
      "76",
      "87"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 52 + 28 = 80.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-059",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 19, 35, 59, ?",
    "options": [
      "91",
      "93",
      "87",
      "99"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 59 + 32 = 91.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-060",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 5, 11, 20, ?",
    "options": [
      "32",
      "34",
      "28",
      "35"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 20 + 12 = 32.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-061",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 7, 15, 27, ?",
    "options": [
      "43",
      "45",
      "39",
      "47"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 27 + 16 = 43.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-062",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 9, 19, 34, ?",
    "options": [
      "54",
      "56",
      "50",
      "59"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 34 + 20 = 54.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-063",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 11, 23, 41, ?",
    "options": [
      "65",
      "67",
      "61",
      "71"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 41 + 24 = 65.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-064",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 13, 27, 48, ?",
    "options": [
      "76",
      "78",
      "72",
      "83"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 48 + 28 = 76.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-065",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 15, 31, 55, ?",
    "options": [
      "87",
      "89",
      "83",
      "95"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 55 + 32 = 87.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-066",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 11, 17, 26, ?",
    "options": [
      "38",
      "40",
      "34",
      "41"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 26 + 12 = 38.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-067",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 13, 21, 33, ?",
    "options": [
      "49",
      "51",
      "45",
      "53"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 33 + 16 = 49.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-068",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 15, 25, 40, ?",
    "options": [
      "60",
      "62",
      "56",
      "65"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 40 + 20 = 60.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-069",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 17, 29, 47, ?",
    "options": [
      "71",
      "73",
      "67",
      "77"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 47 + 24 = 71.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-070",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 9, 23, 44, ?",
    "options": [
      "72",
      "74",
      "68",
      "79"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 44 + 28 = 72.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-071",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 3, 11, 27, 51, ?",
    "options": [
      "83",
      "85",
      "79",
      "91"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 51 + 32 = 83.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-072",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 4, 7, 13, 22, ?",
    "options": [
      "34",
      "36",
      "30",
      "37"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 22 + 12 = 34.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-073",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 5, 9, 17, 29, ?",
    "options": [
      "45",
      "47",
      "41",
      "49"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 29 + 16 = 45.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-074",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 6, 11, 21, 36, ?",
    "options": [
      "56",
      "58",
      "52",
      "61"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 36 + 20 = 56.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-075",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 7, 13, 25, 43, ?",
    "options": [
      "67",
      "69",
      "63",
      "73"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 6: +6, +12, +18, +24. Next is 43 + 24 = 67.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-076",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 8, 15, 29, 50, ?",
    "options": [
      "78",
      "80",
      "74",
      "85"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 7: +7, +14, +21, +28. Next is 50 + 28 = 78.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-077",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 9, 17, 33, 57, ?",
    "options": [
      "89",
      "91",
      "85",
      "97"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 8: +8, +16, +24, +32. Next is 57 + 32 = 89.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-078",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 10, 13, 19, 28, ?",
    "options": [
      "40",
      "42",
      "36",
      "43"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12. Next is 28 + 12 = 40.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-079",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 11, 15, 23, 35, ?",
    "options": [
      "51",
      "53",
      "47",
      "55"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 4: +4, +8, +12, +16. Next is 35 + 16 = 51.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "abs-080",
    "sectionId": "abstract",
    "sectionTitle": "Abstract Reasoning",
    "category": "Cognitive",
    "title": "Complete the pattern: 2, 7, 17, 32, ?",
    "options": [
      "52",
      "54",
      "48",
      "57"
    ],
    "correctIndex": 0,
    "explanation": "Differences increase by multiples of 5: +5, +10, +15, +20. Next is 32 + 20 = 52.",
    "difficulty": "Easy",
    "tag": "Numeric Series",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-001",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the part of the sentence with an error: 'Neither the team lead (A) nor the developers (B) was able to resolve (C) the latency issue (D).'",
    "options": [
      "Part (C): 'was able to resolve' should be 'were able to resolve'",
      "Part (A): 'Neither the team lead'",
      "Part (B): 'nor the developers'",
      "No error"
    ],
    "correctIndex": 0,
    "explanation": "When subjects are joined by 'neither... nor', the verb agrees in number with the nearest subject. Since 'developers' is plural, the plural verb 'were' is required.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-002",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Select the correct preposition: 'The engineering team found it difficult to cope ______ the sudden increase in cloud workload.'",
    "options": [
      "with",
      "up with",
      "on",
      "against"
    ],
    "correctIndex": 0,
    "explanation": "The idiom is 'cope with' (to endure or manage). 'Cope up with' is a common colloquial error.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-003",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Choose the word that is most nearly OPPOSITE in meaning (Antonym) to METICULOUS:",
    "options": [
      "Careless / Sloppy",
      "Precise",
      "Methodical",
      "Fastidious"
    ],
    "correctIndex": 0,
    "explanation": "Meticulous means showing great attention to detail. Its opposite is careless or sloppy.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-004",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Choose the word that is most nearly SIMILAR in meaning (Synonym) to PRAGMATIC:",
    "options": [
      "Practical",
      "Idealistic",
      "Theoretical",
      "Hesitant"
    ],
    "correctIndex": 0,
    "explanation": "Pragmatic means dealing with things sensibly and realistically based on practical considerations.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-005",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Choose the correct passive voice: 'The software architects designed the distributed payment gateway.'",
    "options": [
      "The distributed payment gateway was designed by the software architects.",
      "The distributed payment gateway had been designed by software architects.",
      "The distributed payment gateway is being designed.",
      "The software architects were designed by the gateway."
    ],
    "correctIndex": 0,
    "explanation": "Simple past active ('designed') converts to 'was designed' + by agent in passive voice.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-006",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Select the correct indirect speech conversion: She said, 'I have completed the system integration test.'",
    "options": [
      "She said that she had completed the system integration test.",
      "She said that she has completed the test.",
      "She said that she is completing the test.",
      "She asked if the test was completed."
    ],
    "correctIndex": 0,
    "explanation": "Present perfect ('have completed') backshifts to past perfect ('had completed') in reported speech.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-007",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the correct idiom: 'Facing budget cuts, the department decided to ______ and eliminate non-essential licenses.'",
    "options": [
      "bite the bullet",
      "burn the bridges",
      "spill the beans",
      "bark up the wrong tree"
    ],
    "correctIndex": 0,
    "explanation": "'Bite the bullet' means to face a difficult situation with courage and make hard decisions.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-008",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Select the grammatically correct sentence:",
    "options": [
      "One of the servers that were installed yesterday crashed.",
      "One of the server that was installed yesterday crashed.",
      "One of the servers that was installed yesterday crashed.",
      "One of the servers who was installed yesterday crashed."
    ],
    "correctIndex": 0,
    "explanation": "In 'one of the [plural noun] that [plural verb]', the relative pronoun 'that' refers to 'servers' (plural), so 'were' is grammatically correct.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-009",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Fill in the blank with the appropriate word: 'The CEO's explanation was so ______ that nobody understood the actual corporate strategy.'",
    "options": [
      "ambiguous",
      "lucid",
      "transparent",
      "candid"
    ],
    "correctIndex": 0,
    "explanation": "Ambiguous means unclear, open to multiple interpretations, or obscure.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-010",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Choose the correct sentence improvement for the underlined part: 'He is looking forward to *meet* the new engineering director.'",
    "options": [
      "meeting",
      "have met",
      "met",
      "No improvement needed"
    ],
    "correctIndex": 0,
    "explanation": "The phrase 'look forward to' requires a gerund (verb + -ing): 'looking forward to meeting'.",
    "difficulty": "Medium",
    "tag": "Grammar & Verbal",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-011",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-012",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-013",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-014",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-015",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-016",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-017",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-018",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-019",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-020",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-021",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-022",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-023",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-024",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-025",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-026",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-027",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-028",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-029",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-030",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-031",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-032",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-033",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-034",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-035",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-036",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-037",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-038",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-039",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-040",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-041",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-042",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-043",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-044",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-045",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-046",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-047",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-048",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-049",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-050",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-051",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-052",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-053",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-054",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-055",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-056",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-057",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-058",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-059",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-060",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-061",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-062",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-063",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-064",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-065",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-066",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-067",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-068",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-069",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-070",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-071",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-072",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-073",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-074",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-075",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-076",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-077",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-078",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-079",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-080",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-081",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-082",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-083",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-084",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-085",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: EPHEMERAL",
    "options": [
      "Transient",
      "Permanent",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "EPHEMERAL means: Lasting for a very short time; fleeting. Its synonym is Transient.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-086",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: CANDID",
    "options": [
      "Deceitful",
      "Honest",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "CANDID means: Truthful, straightforward, and frank. Its antonym is Deceitful.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-087",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: TENACIOUS",
    "options": [
      "Persistent",
      "Weak-willed",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "TENACIOUS means: Holding firm to an idea or task with persistence. Its synonym is Persistent.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-088",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: PLAUSIBLE",
    "options": [
      "Implausible",
      "Credible",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "PLAUSIBLE means: Seeming reasonable or probable. Its antonym is Implausible.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-089",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the SYNONYM of the word: REDUNDANT",
    "options": [
      "Excess",
      "Essential",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "REDUNDANT means: No longer needed or useful; superfluous. Its synonym is Excess.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  },
  {
    "id": "eng-090",
    "sectionId": "english",
    "sectionTitle": "English Ability",
    "category": "Cognitive",
    "title": "Identify the ANTONYM of the word: RESILIENT",
    "options": [
      "Fragile",
      "Tough",
      "Irrelevant",
      "Complicated"
    ],
    "correctIndex": 0,
    "explanation": "RESILIENT means: Able to recover quickly from difficulties. Its antonym is Fragile.",
    "difficulty": "Easy",
    "tag": "Placement Vocabulary",
    "slotYear": "2025-2026"
  }
];
