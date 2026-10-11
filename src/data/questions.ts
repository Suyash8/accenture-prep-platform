import { Question } from '../types';

export const ACCENTURE_QUESTIONS: Question[] = [
  // ==========================================
  // SECTION 1: PSEUDOCODE (Accenture's #1 Elimination Filter)
  // ==========================================
  {
    id: 'pseudo-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What will be the output of the following pseudocode for p = 7, q = 3, r = 2?',
    codeSnippet: `Integer p, q, r
Set p = 7, q = 3, r = 2
p = (p ^ q) + (r & p)
if((p + q + r) > 15)
    r = (p & q) ^ r
Else
    r = (p | q) + r
End if
Print p + q + r`,
    options: ['16', '18', '21', '14'],
    correctIndex: 1,
    explanation: `Step 1: Compute p ^ q. In binary: 7 = 0111_2, 3 = 0011_2. 7 ^ 3 = 0100_2 = 4.
Step 2: Compute r & p with initial p=7: 2 = 0010_2, 7 = 0111_2. 2 & 7 = 2.
Step 3: New p = 4 + 2 = 6.
Step 4: Check condition: (p + q + r) = 6 + 3 + 2 = 11. Is 11 > 15? No, jump to Else.
Step 5: Else branch: r = (p | q) + r. 
       p | q = 6 | 3 = 0110_2 | 0011_2 = 0111_2 = 7.
       r = 7 + 2 = 9.
Step 6: Print p + q + r = 6 + 3 + 9 = 18.`,
    traceSteps: [
      { step: 1, line: 3, description: 'Evaluate bitwise XOR: p ^ q (7 ^ 3) = 4', variables: { 'p^q': 4, p: 7, q: 3, r: 2 } },
      { step: 2, line: 3, description: 'Evaluate bitwise AND: r & p (2 & 7) = 2', variables: { 'r&p': 2 } },
      { step: 3, line: 3, description: 'Update p = 4 + 2 = 6', variables: { p: 6, q: 3, r: 2 } },
      { step: 4, line: 4, description: 'Evaluate (p + q + r) = 6 + 3 + 2 = 11 > 15 -> False (Jumps to Else)', variables: { condition: 'False' } },
      { step: 5, line: 7, description: 'Evaluate p | q = 6 | 3 = 7; Update r = 7 + 2 = 9', variables: { r: 9, p: 6, q: 3 } },
      { step: 6, line: 9, description: 'Final Output: p + q + r = 6 + 3 + 9 = 18', variables: { result: 18 } },
    ],
    difficulty: 'Medium',
    tag: 'Bitwise Operators & Branching',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'pseudo-2',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What will be printed when fun(4, 2) is invoked?',
    codeSnippet: `Integer fun(Integer a, Integer b)
if(b == 0)
    return 1
if(b mod 2 == 0)
    return fun(a * a, b / 2)
else
    return a * fun(a * a, (b - 1) / 2)
end function`,
    options: ['8', '16', '64', '32'],
    correctIndex: 1,
    explanation: `This is the standard binary exponentiation algorithm calculating a^b (4^2).
Call 1: fun(4, 2) -> b = 2 is even -> fun(4*4, 2/2) = fun(16, 1).
Call 2: fun(16, 1) -> b = 1 is odd -> 16 * fun(16*16, (1-1)/2) = 16 * fun(256, 0).
Call 3: fun(256, 0) -> Base condition (b == 0) returns 1.
Unwinding stack: 16 * 1 = 16.`,
    traceSteps: [
      { step: 1, line: 1, description: 'Call fun(4, 2). b=2 is even -> recursive call fun(16, 1)', variables: { a: 4, b: 2 } },
      { step: 2, line: 7, description: 'Call fun(16, 1). b=1 is odd -> calls 16 * fun(256, 0)', variables: { a: 16, b: 1 } },
      { step: 3, line: 3, description: 'Call fun(256, 0). b=0 returns 1 (Base case)', variables: { a: 256, b: 0, return: 1 } },
      { step: 4, line: 7, description: 'Unwind: 16 * 1 = 16 returned to caller', variables: { result: 16 } },
    ],
    difficulty: 'Medium',
    tag: 'Recursion & Call Stack',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'pseudo-3',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Find the final value of sum after the nested loops execute:',
    codeSnippet: `Integer i, j, sum
Set sum = 0
for(each i from 1 to 4)
    for(each j from i to 4)
        if((i + j) mod 2 == 0)
            sum = sum + (i ^ j)
        end if
    end for
end for
Print sum`,
    options: ['8', '12', '16', '6'],
    correctIndex: 0,
    explanation: `Pairs (i, j) where 1 <= i <= 4 and i <= j <= 4:
- i = 1: j=1 -> (1+1)%2==0 -> sum += (1^1)=0. j=3 -> (1+3)%2==0 -> sum += (1^3)=2.
- i = 2: j=2 -> sum += (2^2)=0. j=4 -> sum += (2^4)=6.
- i = 3: j=3 -> sum += (3^3)=0.
- i = 4: j=4 -> sum += (4^4)=0.
Total sum = 2 + 6 = 8.`,
    traceSteps: [
      { step: 1, line: 4, description: 'i=1: j=1 (1^1=0, sum=0), j=3 (1^3=2, sum=2)', variables: { i: 1, sum: 2 } },
      { step: 2, line: 4, description: 'i=2: j=2 (2^2=0, sum=2), j=4 (2^4=6, sum=8)', variables: { i: 2, sum: 8 } },
      { step: 3, line: 4, description: 'i=3, 4: j=3 (0), j=4 (0) -> no change to sum', variables: { i: 4, sum: 8 } },
    ],
    difficulty: 'Hard',
    tag: 'Nested Loops & Bitwise XOR',
    slotYear: '2025 On-Campus Slot 3',
  },
  {
    id: 'pseudo-4',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What will be printed by the following pseudocode for a = 5, b = 2?',
    codeSnippet: `Integer a, b, c
Set a = 5, b = 2
c = (a << 1) + (b >> 1)
if((c ^ a) mod 2 != 0)
    b = c & 3
Else
    b = c | 3
End if
Print a + b + c`,
    options: ['24', '26', '27', '29'],
    correctIndex: 2,
    explanation: `Step 1: (a << 1) = 5 * 2 = 10.
Step 2: (b >> 1) = 2 / 2 = 1.
Step 3: c = 10 + 1 = 11.
Step 4: Check condition: c ^ a = 11 ^ 5.
        11 = 1011_2, 5 = 0101_2 -> 11 ^ 5 = 1110_2 = 14.
        14 mod 2 = 0. Since 0 != 0 is False, jump to Else.
Step 5: Else branch: b = c | 3 = 11 | 3 = 11.
Step 6: Print a + b + c = 5 + 11 + 11 = 27.`,
    traceSteps: [
      { step: 1, line: 3, description: 'Bit shifts: (5 << 1) = 10, (2 >> 1) = 1 -> c = 11', variables: { c: 11, a: 5, b: 2 } },
      { step: 2, line: 4, description: '(11 ^ 5) = 14. 14 mod 2 != 0 is False -> Else', variables: { condition: 'False' } },
      { step: 3, line: 7, description: 'b = 11 | 3 = 11', variables: { b: 11 } },
      { step: 4, line: 9, description: 'Result = 5 + 11 + 11 = 27', variables: { result: 27 } },
    ],
    difficulty: 'Hard',
    tag: 'Bitwise Shifts & Modulo',
    slotYear: '2025 On-Campus Slot 4',
  },
  {
    id: 'pseudo-5',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What is the return value of check(18, 27)?',
    codeSnippet: `Integer check(Integer a, Integer b)
while(a != b)
    if(a > b)
        a = a - b
    else
        b = b - a
    end if
end while
return a`,
    options: ['3', '6', '9', '1'],
    correctIndex: 2,
    explanation: `This is Euclid's Subtraction Algorithm for Greatest Common Divisor (GCD) of two numbers:
Initial: a = 18, b = 27
Iteration 1: a < b -> b = 27 - 18 = 9. (a = 18, b = 9)
Iteration 2: a > b -> a = 18 - 9 = 9. (a = 9, b = 9)
Loop terminates since a == b (9 == 9).
Returns 9 (GCD of 18 and 27).`,
    traceSteps: [
      { step: 1, line: 2, description: 'Start loop with a = 18, b = 27', variables: { a: 18, b: 27 } },
      { step: 2, line: 6, description: 'b > a: b = 27 - 18 = 9', variables: { a: 18, b: 9 } },
      { step: 3, line: 4, description: 'a > b: a = 18 - 9 = 9', variables: { a: 9, b: 9 } },
      { step: 4, line: 9, description: 'a == b (9 == 9), loop exits, returns 9', variables: { return: 9 } },
    ],
    difficulty: 'Easy',
    tag: 'Euclidean GCD Algorithm',
    slotYear: '2025 On-Campus Slot 5',
  },

  // ==========================================
  // SECTION 2: COMMON APPLICATIONS & MS OFFICE
  // ==========================================
  {
    id: 'ms-1',
    sectionId: 'ms_office',
    sectionTitle: 'Common Applications & MS Office',
    category: 'Technical',
    title: 'In Microsoft Excel, what does the formula =VLOOKUP("ProductA", A2:D100, 3, FALSE) return?',
    options: [
      'The value from Column A where ProductA matches exactly',
      'The value from Column C (3rd column of the table range) corresponding to the exact match of ProductA in Column A',
      'The row index where ProductA is found in range A2:D100',
      'The approximate match from the 3rd row of range A2:D100'
    ],
    correctIndex: 1,
    explanation: `Syntax of VLOOKUP: VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]).
- lookup_value is "ProductA", searched in the first column of table_array (Column A).
- table_array is A2:D100 (where Col A = index 1, Col B = index 2, Col C = index 3).
- col_index_num = 3 instructs Excel to extract data from the 3rd column of that range (Column C).
- FALSE requires an EXACT match (returns #N/A if no exact match is found).`,
    difficulty: 'Easy',
    tag: 'Excel Formulas & VLOOKUP',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'ms-2',
    sectionId: 'ms_office',
    sectionTitle: 'Common Applications & MS Office',
    category: 'Technical',
    title: 'In Microsoft Word, what is the default shortcut to create a Hanging Indent for a bibliography or citation paragraph?',
    options: ['Ctrl + M', 'Ctrl + T', 'Ctrl + H', 'Ctrl + Shift + I'],
    correctIndex: 1,
    explanation: `In Microsoft Word:
- Ctrl + T creates a Hanging Indent (indents all lines of the paragraph except the very first line).
- Ctrl + M creates a standard Left Indent for the entire paragraph.
- Ctrl + H opens the Find and Replace dialog.
- Ctrl + Shift + T removes a hanging indent.`,
    difficulty: 'Medium',
    tag: 'Word Shortcuts',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'ms-3',
    sectionId: 'ms_office',
    sectionTitle: 'Common Applications & MS Office',
    category: 'Technical',
    title: 'Under the Cloud Computing Shared Responsibility Model in an IaaS (Infrastructure as a Service) deployment, which component is the CUSTOMER responsible for managing?',
    options: [
      'Physical data center security and power supply',
      'Hypervisor virtualization software updates',
      'Guest Operating System patching, network firewalls, and application code',
      'Physical server hardware and cabling'
    ],
    correctIndex: 2,
    explanation: `In IaaS (like AWS EC2, Azure VM):
- Cloud Provider manages: Physical facilities, hardware, cooling, and Hypervisor virtualization layer.
- Customer manages: Guest Operating System, security patches, network firewall configuration (security groups), runtime, middleware, and application code/data.`,
    difficulty: 'Medium',
    tag: 'Cloud Computing Models',
    slotYear: '2025 On-Campus Slot 3',
  },
  {
    id: 'ms-4',
    sectionId: 'ms_office',
    sectionTitle: 'Common Applications & MS Office',
    category: 'Technical',
    title: 'In Excel, which formula combination allows lookups regardless of whether the return column is to the left or right of the lookup column?',
    options: [
      'HLOOKUP and VLOOKUP',
      'INDEX and MATCH',
      'LOOKUP and CHOOSE',
      'OFFSET and COUNTIF'
    ],
    correctIndex: 1,
    explanation: `Unlike standard VLOOKUP which strictly requires the lookup key to reside in the leftmost column of the range, INDEX and MATCH separate the lookup array from the return array. 
Syntax: =INDEX(return_range, MATCH(lookup_val, lookup_range, 0)). This works seamlessly in both leftward and rightward directions and executes faster on large datasets.`,
    difficulty: 'Easy',
    tag: 'Advanced Excel Formulas',
    slotYear: '2025 On-Campus Slot 4',
  },
  {
    id: 'ms-5',
    sectionId: 'ms_office',
    sectionTitle: 'Common Applications & MS Office',
    category: 'Technical',
    title: 'In Microsoft PowerPoint, what is the shortcut key to start the slide show directly from the CURRENT slide rather than the first slide?',
    options: ['F5', 'Shift + F5', 'Ctrl + F5', 'Alt + F5'],
    correctIndex: 1,
    explanation: `In PowerPoint:
- F5 starts presentation from Slide 1 (beginning).
- Shift + F5 starts presentation from the currently selected slide.`,
    difficulty: 'Easy',
    tag: 'PowerPoint Shortcuts',
    slotYear: '2025 On-Campus Slot 5',
  },

  // ==========================================
  // SECTION 3: NETWORK SECURITY & CLOUD
  // ==========================================
  {
    id: 'net-1',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security & Cloud',
    category: 'Technical',
    title: 'Which layer of the OSI model is responsible for end-to-end reliability, segmenting data, and flow control using TCP windowing?',
    options: [
      'Network Layer (Layer 3)',
      'Transport Layer (Layer 4)',
      'Data Link Layer (Layer 2)',
      'Session Layer (Layer 5)'
    ],
    correctIndex: 1,
    explanation: `Transport Layer (Layer 4) handles end-to-end communication, segmentation and reassembly of data streams into segments, reliability via acknowledgments, and flow control (TCP sliding window protocol).
Network Layer (Layer 3) handles logical IP routing and packet forwarding.`,
    difficulty: 'Easy',
    tag: 'OSI Reference Model',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'net-2',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security & Cloud',
    category: 'Technical',
    title: 'Which cryptographic algorithm is classified as ASYMMETRIC (Public Key Cryptography) commonly used in digital signatures and TLS handshakes?',
    options: ['AES-256', 'DES', 'RSA', 'ChaCha20'],
    correctIndex: 2,
    explanation: `RSA (Rivest–Shamir–Adleman) is an asymmetric cryptographic algorithm using a public and private key pair.
AES-256, DES, and ChaCha20 are all symmetric key ciphers, meaning the same shared secret key is used for both encryption and decryption.`,
    difficulty: 'Easy',
    tag: 'Cryptography & Security',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'net-3',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security & Cloud',
    category: 'Technical',
    title: 'What protocol translates a private IP address from a home LAN (e.g., 192.168.1.50) into a routable public IP address when accessing the Internet?',
    options: ['ARP (Address Resolution Protocol)', 'NAT (Network Address Translation)', 'DHCP', 'BGP'],
    correctIndex: 1,
    explanation: `NAT (Network Address Translation) modifies network address information in IP packet headers while in transit across a traffic routing device, allowing an entire private LAN to share one or a small pool of public IP addresses.`,
    difficulty: 'Easy',
    tag: 'Network Protocols',
    slotYear: '2025 On-Campus Slot 3',
  },
  {
    id: 'net-4',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security & Cloud',
    category: 'Technical',
    title: 'Which attack involves sending forged ARP messages over a local area network to link an attacker\'s MAC address with the IP address of a legitimate default gateway?',
    options: [
      'SQL Injection',
      'ARP Cache Poisoning / Spoofing',
      'SYN Flood',
      'DNS Amplification'
    ],
    correctIndex: 1,
    explanation: `ARP Spoofing (Poisoning) takes advantage of the lack of authentication in ARP by broadcasting fake ARP replies on a LAN. The local switch/hosts update their ARP tables linking the gateway's IP address to the attacker's MAC address, facilitating Man-in-the-Middle (MitM) traffic interception.`,
    difficulty: 'Medium',
    tag: 'Cyber Attacks & LAN Security',
    slotYear: '2025 On-Campus Slot 4',
  },
  {
    id: 'net-5',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security & Cloud',
    category: 'Technical',
    title: 'Which cloud computing deployment model allows organizations to run sensitive transactional databases in an on-premise private infrastructure while bursting peak web tier traffic into AWS or Azure public cloud?',
    options: ['Community Cloud', 'Hybrid Cloud', 'Multi-tenant SaaS', 'Serverless Private Cloud'],
    correctIndex: 1,
    explanation: `A Hybrid Cloud model bridges an enterprise's private data centers with one or more public cloud providers, enabling cloud bursting and maintaining compliance for confidential databases on-premise.`,
    difficulty: 'Easy',
    tag: 'Cloud Deployment Models',
    slotYear: '2025 On-Campus Slot 5',
  },

  // ==========================================
  // SECTION 4: CRITICAL REASONING & PROBLEM SOLVING
  // ==========================================
  {
    id: 'crit-1',
    sectionId: 'critical',
    sectionTitle: 'Critical Reasoning & Problem Solving',
    category: 'Cognitive',
    title: 'Statements:\n1. All laptops are electronic gadgets.\n2. Some electronic gadgets are expensive.\nConclusions:\nI. Some laptops are expensive.\nII. All expensive items are electronic gadgets.',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Neither Conclusion I nor II follows',
      'Both Conclusion I and II follow'
    ],
    correctIndex: 2,
    explanation: `Let L = Laptops, E = Electronic gadgets, X = Expensive items.
1. L is a subset of E (All L are E).
2. Intersection between E and X is non-empty (Some E are X).
However, the intersection between E and X might not touch L at all. Therefore, Conclusion I ("Some laptops are expensive") cannot be stated with certainty.
For Conclusion II, "Some electronic gadgets are expensive" does not imply that ALL expensive items must be electronic gadgets.
Therefore, NEITHER conclusion follows logically.`,
    difficulty: 'Medium',
    tag: 'Syllogisms & Venn Logic',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'crit-2',
    sectionId: 'critical',
    sectionTitle: 'Critical Reasoning & Problem Solving',
    category: 'Cognitive',
    title: 'Six friends P, Q, R, S, T, and U are sitting in a circle facing the center. P is opposite to R. Q is to the immediate right of P and opposite to T. S is to the left of R. Who is sitting to the immediate right of U?',
    explanation: `Positions around the circle (1 to 6 clockwise):
Let P be at position 1 (top). Facing center:
- Immediate right of P is position 6 (counter-clockwise) or pos 2 depending on perspective.
Clockwise arrangement around table facing inwards:
P at 1 -> opposite is R at 4.
Immediate right of P (looking inward) is position 6 -> Q is at 6.
Opposite to Q is T -> T is at position 3.
Left of R (at pos 4, facing inward: left hand points to pos 5) -> S is at 5.
Remaining position is 2, which is occupied by U.
At pos 2 (facing center): Immediate right hand points to position 1 (P).
Therefore, the immediate right of U is P!`,
    options: ['P', 'T', 'S', 'Q'],
    correctIndex: 0,
    difficulty: 'Hard',
    tag: 'Seating Arrangement',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'crit-3',
    sectionId: 'critical',
    sectionTitle: 'Critical Reasoning & Problem Solving',
    category: 'Cognitive',
    title: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
    options: ['Brother', 'Uncle', 'Father', 'Grandfather'],
    correctIndex: 2,
    explanation: `Break it down backwards:
1. "My mother" = Suresh's mother.
2. "The only son of my mother" = Suresh himself (since Suresh is male and there is only one son).
3. "The son of [Suresh]" = Suresh's son.
Therefore, Suresh is the FATHER of the boy in the photograph.`,
    difficulty: 'Easy',
    tag: 'Blood Relations',
    slotYear: '2025 On-Campus Slot 3',
  },
  {
    id: 'crit-4',
    sectionId: 'critical',
    sectionTitle: 'Critical Reasoning & Problem Solving',
    category: 'Cognitive',
    title: 'Statement: "The city council decided to ban all heavy transport vehicles on the inner ring road during morning peak hours (8 AM - 11 AM)."\nAssumptions:\nI. Morning congestion on the inner ring road is predominantly caused by heavy commercial vehicles.\nII. Heavy vehicles have viable alternative bypass routes during peak hours.',
    options: [
      'Only Assumption I is implicit',
      'Only Assumption II is implicit',
      'Both Assumptions I and II are implicit',
      'Neither Assumption is implicit'
    ],
    correctIndex: 2,
    explanation: `When a regulatory authority imposes a restriction to ease traffic, it inherently assumes that:
1. The restricted entity (heavy vehicles) significantly contributes to the traffic bottleneck.
2. The policy is executable without causing catastrophic economic standstill, meaning plausible alternate routes or bypasses exist.
Hence, both assumptions are implicit.`,
    difficulty: 'Medium',
    tag: 'Statement & Assumptions',
    slotYear: '2025 On-Campus Slot 4',
  },

  // ==========================================
  // SECTION 5: ABSTRACT REASONING
  // ==========================================
  {
    id: 'abs-1',
    sectionId: 'abstract',
    sectionTitle: 'Abstract Reasoning',
    category: 'Cognitive',
    title: 'Identify the missing term in the sequence: AZ, CX, EV, GT, ?',
    options: ['IR', 'IS', 'HR', 'JQ'],
    correctIndex: 0,
    explanation: `The series consists of pairs of opposite letters (whose alphabetical positions sum to 27):
First letters: A (1) -> C (3) -> E (5) -> G (7) (+2 progression) -> Next is 9 = I.
Second letters: Z (26) -> X (24) -> V (22) -> T (20) (-2 progression) -> Next is 18 = R.
Therefore, the next pair is IR (9 + 18 = 27).`,
    difficulty: 'Easy',
    tag: 'Letter & Pattern Series',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'abs-2',
    sectionId: 'abstract',
    sectionTitle: 'Abstract Reasoning',
    category: 'Cognitive',
    title: 'Complete the visual analogy: 8 : 81 :: 64 : ?',
    options: ['512', '625', '729', '1024'],
    correctIndex: 1,
    explanation: `Pattern analysis:
8 = 2^3 -> 81 = (2 + 1)^4 = 3^4 = 81.
Following the same logic:
64 = 4^3.
The next term must be (4 + 1)^4 = 5^4 = 625.`,
    difficulty: 'Medium',
    tag: 'Numerical & Spatial Analogy',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'abs-3',
    sectionId: 'abstract',
    sectionTitle: 'Abstract Reasoning',
    category: 'Cognitive',
    title: 'Find the odd one out among the given alphanumeric groups: DW4, EV5, FU6, GT8',
    options: ['DW4', 'EV5', 'FU6', 'GT8'],
    correctIndex: 3,
    explanation: `Look at the letter pair and the number:
- DW: D is 4th letter, W is 23rd (opposite pair: 4+23=27), number = 4 (position of first letter).
- EV: E is 5th letter, V is 22nd (5+22=27), number = 5 (position of first letter).
- FU: F is 6th letter, U is 21st (6+21=27), number = 6 (position of first letter).
- GT: G is 7th letter, T is 20th (7+20=27), but the number given is 8 instead of 7!
Therefore, GT8 is the odd one out.`,
    difficulty: 'Easy',
    tag: 'Odd One Out Classification',
    slotYear: '2025 On-Campus Slot 3',
  },

  // ==========================================
  // SECTION 6: ENGLISH ABILITY
  // ==========================================
  {
    id: 'eng-1',
    sectionId: 'english',
    sectionTitle: 'English Ability',
    category: 'Cognitive',
    title: 'Select the option that correctly replaces the underlined phrase:\n"Neither the team members nor the project manager *were available for* the client debrief."',
    options: [
      'were available for',
      'was available for',
      'are available for',
      'have been available for'
    ],
    correctIndex: 1,
    explanation: `Rule of Proximity for 'Neither... nor': When two subjects are joined by 'neither... nor', the verb must agree in number with the subject closest to it.
Here, "the project manager" is singular and is closest to the verb. Therefore, the singular past verb "was available for" is grammatically required.`,
    difficulty: 'Medium',
    tag: 'Subject-Verb Agreement',
    slotYear: '2025 On-Campus Slot 1',
  },
  {
    id: 'eng-2',
    sectionId: 'english',
    sectionTitle: 'English Ability',
    category: 'Cognitive',
    title: 'Identify the synonym of the word "METICULOUS" as commonly tested in Accenture verbal aptitude:',
    options: ['Hasty', 'Punctilious / Thorough', 'Indifferent', 'Ambiguous'],
    correctIndex: 1,
    explanation: `"Meticulous" means showing great attention to detail, very careful, thorough, and precise. A direct synonym is "punctilious" or "scrupulous". "Hasty" and "careless" are antonyms.`,
    difficulty: 'Easy',
    tag: 'Vocabulary in Context',
    slotYear: '2025 On-Campus Slot 2',
  },
  {
    id: 'eng-3',
    sectionId: 'english',
    sectionTitle: 'English Ability',
    category: 'Cognitive',
    title: 'Choose the correct preposition to fill the blank:\n"The senior architect has been working on the migration framework _______ last October."',
    options: ['for', 'since', 'from', 'during'],
    correctIndex: 1,
    explanation: `In the Present Perfect Continuous tense ("has been working"), "since" is used with a specific point in past time (e.g., "since last October", "since 2021"), while "for" is used with a duration of time (e.g., "for five months").`,
    difficulty: 'Easy',
    tag: 'Tenses & Prepositions',
    slotYear: '2025 On-Campus Slot 3',
  },

  // ==========================================
  // SECTION 7: SECTION 3 PROMPT HIGH-YIELD QUESTIONS
  // ==========================================
  {
    id: 'pseudo-sec3-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What will be printed by the following pseudocode?',
    codeSnippet: `Integer p, q, r
Set p = 1, q = 8, r = 9
q = (11 + 9) & q
p = p + q
Print p + q + r`,
    options: ['10', '18', '28', '19'],
    correctIndex: 0,
    explanation: `Step 1: (11 + 9) = 20.
Step 2: 20 & 8 in binary:
  20 = 00010100_2
   8 = 00001000_2
  20 & 8 = 00000000_2 = 0.
So q = 0.
Step 3: p = p + q = 1 + 0 = 1.
Step 4: Print p + q + r = 1 + 0 + 9 = 10.`,
    traceSteps: [
      { step: 1, line: 3, description: 'Compute 11 + 9 = 20', variables: { temp: 20 } },
      { step: 2, line: 3, description: 'Bitwise AND: 20 & 8 = 0; Assign q = 0', variables: { q: 0, p: 1, r: 9 } },
      { step: 3, line: 4, description: 'Compute p = p + q = 1 + 0 = 1', variables: { p: 1 } },
      { step: 4, line: 5, description: 'Final Output: p + q + r = 1 + 0 + 9 = 10', variables: { result: 10 } },
    ],
    difficulty: 'Medium',
    tag: 'Bitwise AND & Arithmetic',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'pseudo-sec3-2',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'What will be printed by the following nested branch pseudocode?',
    codeSnippet: `Integer a, b, c
Set a = 2, b = 8, c = 8
c = 9 + a
if ((4 + 10 + a) < (7 + c))
    if ((7 + 6) < c)
        if ((5 + c) < (b + 5))
            b = a + b
        End if
    End if
End if
Print a + b + c`,
    options: ['21', '23', '19', '18'],
    correctIndex: 0,
    explanation: `Step 1: c = 9 + 2 = 11.
Step 2: Outer if: (4 + 10 + 2) < (7 + 11) => 16 < 18 (True).
Step 3: Second if: (7 + 6) < c => 13 < 11 (False).
Step 4: Inner statements are skipped. Variable b remains 8.
Step 5: Print a + b + c = 2 + 8 + 11 = 21.`,
    traceSteps: [
      { step: 1, line: 3, description: 'Evaluate c = 9 + 2 = 11', variables: { a: 2, b: 8, c: 11 } },
      { step: 2, line: 4, description: 'Check (16 < 18) -> True; Enter outer if', variables: { cond1: 'True' } },
      { step: 3, line: 5, description: 'Check (13 < 11) -> False; Skip nested if branches', variables: { cond2: 'False' } },
      { step: 4, line: 11, description: 'Final Output: a + b + c = 2 + 8 + 11 = 21', variables: { result: 21 } },
    ],
    difficulty: 'Medium',
    tag: 'Dead-Code Pruning & Nested Branches',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'pseudo-sec3-3',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Trace the output of this bitwise loop accumulator:',
    codeSnippet: `Integer a, b, c
Set a = 8, b = 5, c = 6
for (each c from 3 to 4)
    b = 9 + b
    b = (b + 7) + a
    b = (b & 4) + b
End for
Print a + b`,
    options: ['65', '57', '73', '49'],
    correctIndex: 0,
    explanation: `Iteration 1 (c = 3):
- b = 9 + 5 = 14
- b = (14 + 7) + 8 = 29
- 29 & 4 = (00011101_2 & 00000100_2) = 4
- b = 4 + 29 = 33

Iteration 2 (c = 4):
- b = 9 + 33 = 42
- b = (42 + 7) + 8 = 57
- 57 & 4 = (00111001_2 & 00000100_2) = 0
- b = 0 + 57 = 57

Result: a + b = 8 + 57 = 65.`,
    traceSteps: [
      { step: 1, line: 4, description: 'Loop Iteration 1 (c=3): b = 9 + 5 = 14', variables: { c: 3, b: 14 } },
      { step: 2, line: 5, description: 'b = (14 + 7) + 8 = 29', variables: { b: 29 } },
      { step: 3, line: 6, description: 'b = (29 & 4) + 29 = 4 + 29 = 33', variables: { b: 33 } },
      { step: 4, line: 4, description: 'Loop Iteration 2 (c=4): b = 9 + 33 = 42', variables: { c: 4, b: 42 } },
      { step: 5, line: 5, description: 'b = (42 + 7) + 8 = 57', variables: { b: 57 } },
      { step: 6, line: 6, description: 'b = (57 & 4) + 57 = 0 + 57 = 57', variables: { b: 57 } },
      { step: 7, line: 8, description: 'Final Output: a + b = 8 + 57 = 65', variables: { result: 65 } },
    ],
    difficulty: 'Hard',
    tag: 'Bitwise Loop Accumulator',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'pseudo-sec3-4',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Determine the output of this loop with logical OR short-circuiting:',
    codeSnippet: `Integer p, q, r
Set p = 9, q = 2, r = 10
for (each r from 3 to 4)
    p = (p + q) + p
    if ((p + r) < r || 7 > r)
        p = 12 + p
    Else
        Continue
    End if
End for
Print p + q`,
    options: ['80', '78', '66', '82'],
    correctIndex: 0,
    explanation: `Iteration 1 (r = 3):
- p = (9 + 2) + 9 = 20
- Condition: ((20 + 3) < 3 || 7 > 3) => False || True => True.
- p = 12 + 20 = 32.

Iteration 2 (r = 4):
- p = (32 + 2) + 32 = 66
- Condition: ((66 + 4) < 4 || 7 > 4) => False || True => True.
- p = 12 + 66 = 78.

Result: p + q = 78 + 2 = 80.`,
    difficulty: 'Medium',
    tag: 'Logical OR & Short-Circuiting',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'pseudo-sec3-5',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: '[Accenture Errata Alert] What will be printed by the following XOR tracing code?',
    codeSnippet: `Integer p, q, r
Set p = 4, q = 3, r = 7
if ((q ^ p ^ 9) < (8 + r + q))
    r = (r ^ 2) + q
    q = (q + r) + p
End if
r = q + p
Print p + q + r`,
    options: ['38 (Mathematically Correct)', '28 (Platform Answer Key Bug)', '32', '24'],
    correctIndex: 0,
    explanation: `Mathematical Calculation:
- Condition: (3 ^ 4 ^ 9) < (8 + 7 + 3) => 14 < 18 (True).
- r = (7 ^ 2) + 3 = 5 + 3 = 8.
- q = (3 + 8) + 4 = 15.
- r = q + p = 15 + 4 = 19.
- Output: p + q + r = 4 + 15 + 19 = 38.

Platform Answer Key Errata Note:
The test author erroneously calculated 7 ^ 2 as 0 (confusing it with 7 ^ 7), which produces 28. If 38 is present in choices, select 38. If only 28 appears in an older exam portal key, 28 is the flawed answer key.`,
    difficulty: 'Hard',
    tag: 'Bitwise XOR Tracing (Errata Aware)',
    slotYear: 'Accenture PYQ Errata',
  },
  {
    id: 'mcq-sec3-oop-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Technical Core',
    category: 'Technical',
    title: 'In Java OOP, how is method overloading in class TeaMac resolved?',
    options: [
      'Static Polymorphism (resolved at compile time)',
      'Dynamic Polymorphism (resolved at runtime via vtable)',
      'Late Binding via reflection',
      'Encapsulation override'
    ],
    correctIndex: 0,
    explanation: 'Method overloading is resolved at compile time based on method signatures and argument types, making it Static (Compile-time) Polymorphism.',
    difficulty: 'Easy',
    tag: 'Java OOP',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-oop-2',
    sectionId: 'pseudocode',
    sectionTitle: 'Technical Core',
    category: 'Technical',
    title: 'Given:\nclass Parent { void flipper() { System.out.print("Parent"); } }\nclass Children extends Parent { private final void flipper() { System.out.print("Child"); } }\nWhat happens when Parent p = new Children(); p.flipper(); is executed?',
    options: [
      'Outputs "Parent"; private superclass/subclass methods cannot be inherited or overridden polymorphically',
      'Outputs "Child"',
      'Compilation Error: Cannot reduce visibility of inherited method',
      'Runtime NullPointerException'
    ],
    correctIndex: 0,
    explanation: 'Private methods are not visible to subclasses and cannot override non-private methods; calling through the Parent reference invokes Parent.flipper(), outputting "Parent".',
    difficulty: 'Medium',
    tag: 'Java Inheritance & Visibility',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-web-1',
    sectionId: 'ms_office',
    sectionTitle: 'Web & Applications',
    category: 'Technical',
    title: 'In HTML5, which native semantic elements provide an expandable and collapsible content disclosure widget without requiring JavaScript?',
    options: [
      '<details> and <summary>',
      '<accordion> and <tab>',
      '<collapse> and <toggle>',
      '<expand> and <header>'
    ],
    correctIndex: 0,
    explanation: 'The native HTML5 <details> element creates an interactive disclosure widget that users can open or close, with <summary> defining the visible heading.',
    difficulty: 'Easy',
    tag: 'HTML5 Semantic Elements',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-web-2',
    sectionId: 'networking_cloud',
    sectionTitle: 'Web & API Architecture',
    category: 'Technical',
    title: 'When implementing breaking changes in a public REST API, what is the industry standard practice for backward compatibility?',
    options: [
      'URI path versioning (e.g., /api/v2/resource)',
      'Changing query parameters without notice',
      'Switching from JSON to XML payloads',
      'Reusing the exact same endpoint with random field removals'
    ],
    correctIndex: 0,
    explanation: 'URI path versioning (/api/v1/ vs /api/v2/) allows existing consumer integrations to function uninterrupted while new clients adopt the updated contract.',
    difficulty: 'Easy',
    tag: 'REST API Best Practices',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-os-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Operating Systems',
    category: 'Technical',
    title: 'In UNIX-like OS process management, what is the role of fork() versus exec()?',
    options: [
      'fork() duplicates the existing process to create a child; exec() loads and executes a new binary into the address space',
      'fork() terminates the process; exec() restarts it',
      'exec() creates the thread; fork() handles IPC',
      'They are completely identical syscalls'
    ],
    correctIndex: 0,
    explanation: 'fork() creates an exact clone child process. Then exec() replaces the child\'s memory image with a new executable program.',
    difficulty: 'Medium',
    tag: 'Operating Systems Syscalls',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-os-2',
    sectionId: 'pseudocode',
    sectionTitle: 'Operating Systems',
    category: 'Technical',
    title: 'During a CPU context switch, which register is critically preserved in the Process Control Block (PCB) to ensure execution resumes at the exact instruction?',
    options: [
      'Program Counter (PC)',
      'Memory Data Register (MDR)',
      'Accumulator (AC) only',
      'Instruction Register (IR) only'
    ],
    correctIndex: 0,
    explanation: 'The Program Counter (PC) stores the address of the next instruction to be fetched and executed; it is essential to restore the thread/process state seamlessly.',
    difficulty: 'Easy',
    tag: 'OS Context Switching',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-db-1',
    sectionId: 'ms_office',
    sectionTitle: 'Databases',
    category: 'Technical',
    title: 'In database concurrency control, when two concurrent transactions read the same data and update it, causing one update to overwrite the other, this anomaly is termed:',
    options: [
      'Lost Update Anomaly',
      'Dirty Read',
      'Phantom Read',
      'Non-repeatable Read'
    ],
    correctIndex: 0,
    explanation: 'A Lost Update occurs when two transactions select the same row and then update the data based on the originally selected values without locking, overwriting each other.',
    difficulty: 'Medium',
    tag: 'Database Concurrency Anomalies',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-net-1',
    sectionId: 'networking_cloud',
    sectionTitle: 'Network Security',
    category: 'Technical',
    title: 'Which Wi-Fi security standard uses Simultaneous Authentication of Equals (SAE) to eliminate offline dictionary attacks on pre-shared keys?',
    options: ['WPA3', 'WPA2-PSK', 'WEP', 'WPA-Enterprise'],
    correctIndex: 0,
    explanation: 'WPA3 replaces the 4-way handshake with SAE (Dragonfly handshake), making offline dictionary and password-guessing attacks impossible.',
    difficulty: 'Easy',
    tag: 'Wi-Fi & Wireless Security',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-net-2',
    sectionId: 'networking_cloud',
    sectionTitle: 'Networking',
    category: 'Technical',
    title: 'If a single central cable backbone fails in a local area network, causing the entire network to collapse completely, which topology is deployed?',
    options: ['Bus Topology', 'Star Topology', 'Mesh Topology', 'Tree Topology'],
    correctIndex: 0,
    explanation: 'Bus topology relies on a single shared transmission backbone. A break or terminator fault anywhere along the cable halts all communication.',
    difficulty: 'Easy',
    tag: 'Network Topologies',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-cloud-1',
    sectionId: 'networking_cloud',
    sectionTitle: 'Cloud Architecture',
    category: 'Technical',
    title: 'Under the Cloud Shared Responsibility Model, which party is responsible for application-level data encryption and access control in IaaS?',
    options: [
      'The Customer / Client',
      'The Cloud Provider exclusively',
      'The Hardware OEM',
      'The Internet Service Provider'
    ],
    correctIndex: 0,
    explanation: 'In IaaS, the cloud provider secures the underlying physical host, data center, and virtualization, while the customer is strictly responsible for guest OS, applications, and customer data.',
    difficulty: 'Easy',
    tag: 'Cloud Shared Responsibility',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-msoffice-1',
    sectionId: 'ms_office',
    sectionTitle: 'MS Office & Tools',
    category: 'Technical',
    title: 'In Microsoft Excel, what is the keyboard shortcut to select an entire Column versus an entire Row?',
    options: [
      'Column: Ctrl + Space ; Row: Shift + Space',
      'Column: Alt + Space ; Row: Ctrl + Space',
      'Column: Shift + Space ; Row: Ctrl + Space',
      'Column: Ctrl + Shift + Down ; Row: Ctrl + Right'
    ],
    correctIndex: 0,
    explanation: 'Ctrl + Space selects the entire current column, while Shift + Space selects the entire current row in Excel.',
    difficulty: 'Easy',
    tag: 'MS Excel Shortcuts',
    slotYear: 'Accenture Assessment 2025/2026',
  },
  {
    id: 'mcq-sec3-msoffice-2',
    sectionId: 'ms_office',
    sectionTitle: 'MS Office & Tools',
    category: 'Technical',
    title: 'In Microsoft Word, what keyboard shortcut instantly inserts the current date field into the document?',
    options: [
      'Alt + Shift + D (Alt + Shift + T inserts current time)',
      'Ctrl + Shift + D',
      'Ctrl + D',
      'F5 + D'
    ],
    correctIndex: 0,
    explanation: 'Alt + Shift + D inserts the current Date field into a Word document. Alt + Shift + T inserts the current Time field.',
    difficulty: 'Easy',
    tag: 'MS Word Shortcuts',
    slotYear: 'Accenture Assessment 2025/2026',
  },
];

