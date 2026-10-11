import { CodingProblem } from '../types';

export const ACCENTURE_CODING_PROBLEMS: CodingProblem[] = [
  {
    id: 'code-1',
    title: 'Problem 1: Sentence Containment',
    difficulty: 'Medium',
    timeMinutes: 25,
    description: `Given two sentences S1 and S2:
Return the sentence whose words all appear as substrings in the other sentence.
- If mutually contained (each sentence's words appear in the other), return the shorter sentence (if equal lengths, return S1).
- If neither sentence's words are contained in the other, return "NONE".

A word W from sentence A is considered contained in sentence B if there exists any word in sentence B that contains W as a substring.`,
    inputFormat: 'Line 1: Sentence 1 (s1)\nLine 2: Sentence 2 (s2)',
    outputFormat: 'Single string: s1, s2, or "NONE"',
    constraints: '1 <= len(s1), len(s2) <= 1000\nWords are space-separated alphanumeric characters.',
    sampleInput: `the cat
the caterpillar`,
    sampleOutput: 'the cat',
    explanation: `Words of s1: ["the", "cat"].
Words of s2: ["the", "caterpillar"].
- "the" is a substring of "the".
- "cat" is a substring of "caterpillar".
All words of s1 appear as substrings of words in s2.
Words of s2: "caterpillar" does not appear as a substring of any word in s1.
Hence s1 is contained in s2, but not vice versa. Output: "the cat".`,
    starterCode: {
      python: `import sys

def solve(s1: str, s2: str) -> str:
    def is_contained(sub_str: str, full_str: str) -> bool:
        w_sub = sub_str.split()
        w_full = full_str.split()
        return all(any(ws in wf for wf in w_full) for ws in w_sub)

    c1 = is_contained(s1, s2)
    c2 = is_contained(s2, s1)
    if c1 and c2:
        return s1 if len(s1) <= len(s2) else s2
    if c1: return s1
    if c2: return s2
    return "NONE"

if __name__ == "__main__":
    lines = sys.stdin.read().splitlines()
    if len(lines) >= 2:
        print(solve(lines[0].strip(), lines[1].strip()))
`,
      java: `import java.util.*;

public class SentenceContainment {
    private static boolean isContained(String subStr, String fullStr) {
        String[] wSub = subStr.split("\\\\s+");
        String[] wFull = fullStr.split("\\\\s+");
        for (String ws : wSub) {
            boolean matched = false;
            for (String wf : wFull) {
                if (wf.contains(ws)) {
                    matched = true;
                    break;
                }
            }
            if (!matched) return false;
        }
        return true;
    }

    public static String solve(String s1, String s2) {
        boolean c1 = isContained(s1, s2);
        boolean c2 = isContained(s2, s1);
        if (c1 && c2) return s1.length() <= s2.length() ? s1 : s2;
        if (c1) return s1;
        if (c2) return s2;
        return "NONE";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String s1 = sc.nextLine().trim();
            String s2 = sc.hasNextLine() ? sc.nextLine().trim() : "";
            System.out.println(solve(s1, s2));
        }
    }
}`,
      csharp: `using System;
using System.Linq;

public class Solution {
    private static bool IsContained(string subStr, string fullStr) {
        string[] wSub = subStr.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        string[] wFull = fullStr.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        return wSub.All(ws => wFull.Any(wf => wf.Contains(ws)));
    }

    public static string Solve(string s1, string s2) {
        bool c1 = IsContained(s1, s2);
        bool c2 = IsContained(s2, s1);
        if (c1 && c2) return s1.Length <= s2.Length ? s1 : s2;
        if (c1) return s1;
        if (c2) return s2;
        return "NONE";
    }

    public static void Main() {
        string s1 = Console.ReadLine()?.Trim();
        string s2 = Console.ReadLine()?.Trim();
        if (s1 != null && s2 != null) {
            Console.WriteLine(Solve(s1, s2));
        }
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

bool isContained(const string& subStr, const string& fullStr) {
    stringstream ss1(subStr), ss2(fullStr);
    vector<string> wSub, wFull;
    string w;
    while (ss1 >> w) wSub.push_back(w);
    while (ss2 >> w) wFull.push_back(w);
    for (const auto& ws : wSub) {
        bool matched = false;
        for (const auto& wf : wFull) {
            if (wf.find(ws) != string::npos) { matched = true; break; }
        }
        if (!matched) return false;
    }
    return true;
}

int main() {
    string s1, s2;
    getline(cin, s1);
    getline(cin, s2);
    bool c1 = isContained(s1, s2);
    bool c2 = isContained(s2, s1);
    if (c1 && c2) cout << (s1.length() <= s2.length() ? s1 : s2) << endl;
    else if (c1) cout << s1 << endl;
    else if (c2) cout << s2 << endl;
    else cout << "NONE" << endl;
    return 0;
}`,
    },
    testCases: [
      { input: 'the cat\nthe caterpillar', expected: 'the cat' },
      { input: 'hello world\nhey there', expected: 'NONE' },
      { input: 'sun shine\nsunshine in morning', expected: 'sun shine' },
    ],
  },
  {
    id: 'code-2',
    title: 'Problem 2: Fruit Frequency Difference',
    difficulty: 'Easy',
    timeMinutes: 20,
    description: `Given a string representing fruit items, find the frequency of each distinct character.
Separate character frequencies into:
- Odd frequencies
- Even frequencies

Calculate and return | max(odd frequencies) - min(even frequencies) |.
If either the odd frequency group or even frequency group is empty (missing), return 0.`,
    inputFormat: 'Single string s',
    outputFormat: 'Single integer representing absolute difference, or 0 if one group is empty.',
    constraints: '1 <= len(s) <= 10^5\nString consists of lowercase English alphabets.',
    sampleInput: 'aabbccc',
    sampleOutput: '1',
    explanation: `Frequencies:
'a': 2 (even)
'b': 2 (even)
'c': 3 (odd)
Odds = [3], max(odds) = 3
Evens = [2, 2], min(evens) = 2
Result = |3 - 2| = 1.`,
    starterCode: {
      python: `from collections import Counter

def fruit_frequency(s: str) -> int:
    counts = Counter(s).values()
    odds = [c for c in counts if c % 2 != 0]
    evens = [c for c in counts if c % 2 == 0]
    return abs(max(odds) - min(evens)) if (odds and evens) else 0

if __name__ == "__main__":
    s = input().strip()
    print(fruit_frequency(s))
`,
      java: `import java.util.*;

public class FruitFrequency {
    public static int solve(String s) {
        Map<Character, Integer> counts = new HashMap<>();
        for (char c : s.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);

        int maxOdd = Integer.MIN_VALUE, minEven = Integer.MAX_VALUE;
        boolean hasOdd = false, hasEven = false;

        for (int count : counts.values()) {
            if (count % 2 != 0) {
                hasOdd = true;
                if (count > maxOdd) maxOdd = count;
            } else {
                hasEven = true;
                if (count < minEven) minEven = count;
            }
        }
        return (hasOdd && hasEven) ? Math.abs(maxOdd - minEven) : 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) System.out.println(solve(sc.next().trim()));
    }
}`,
      csharp: `using System;
using System.Linq;

public class Solution {
    public static int Solve(string s) {
        var counts = s.GroupBy(c => c).Select(g => g.Count()).ToList();
        var odds = counts.Where(c => c % 2 != 0).ToList();
        var evens = counts.Where(c => c % 2 == 0).ToList();
        return (odds.Any() && evens.Any()) ? Math.Abs(odds.Max() - evens.Min()) : 0;
    }

    public static void Main() {
        string s = Console.ReadLine()?.Trim();
        if (s != null) Console.WriteLine(Solve(s));
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

int main() {
    string s;
    if (!(cin >> s)) return 0;
    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;
    vector<int> odds, evens;
    for (auto& p : freq) {
        if (p.second % 2 != 0) odds.push_back(p.second);
        else evens.push_back(p.second);
    }
    if (odds.empty() || evens.empty()) cout << 0 << endl;
    else {
        int maxOdd = *max_element(odds.begin(), odds.end());
        int minEven = *min_element(evens.begin(), evens.end());
        cout << abs(maxOdd - minEven) << endl;
    }
    return 0;
}`,
    },
    testCases: [
      { input: 'aabbccc', expected: '1' },
      { input: 'aaaa', expected: '0' },
      { input: 'abc', expected: '0' },
      { input: 'aaaabbbccccc', expected: '1' },
    ],
  },
  {
    id: 'code-3',
    title: 'Problem 3: Asteroid Safe Zones (Armstrong Number Check)',
    difficulty: 'Easy',
    timeMinutes: 15,
    description: `Determine whether a given positive integer N is an Armstrong Number.
An Armstrong number of k digits is an integer such that the sum of its digits each raised to the power of k equals the number itself.
- Return "Armstrong Number" if it satisfies the condition.
- Otherwise return "Not an Armstrong Number".`,
    inputFormat: 'Single integer string N',
    outputFormat: '"Armstrong Number" or "Not an Armstrong Number"',
    constraints: '1 <= N <= 10^9',
    sampleInput: '153',
    sampleOutput: 'Armstrong Number',
    explanation: `N = 153 has k = 3 digits.
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
Since sum == N, it is an Armstrong Number.`,
    starterCode: {
      python: `s = input().strip()
k = len(s)
n = int(s)
print("Armstrong Number" if sum(int(c)**k for c in s) == n else "Not an Armstrong Number")
`,
      java: `import java.util.Scanner;

public class Armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNext()) return;
        String s = sc.next().trim();
        int n = Integer.parseInt(s), k = s.length(), temp = n;
        long sum = 0;
        while (temp > 0) {
            sum += Math.pow(temp % 10, k);
            temp /= 10;
        }
        System.out.println(sum == n ? "Armstrong Number" : "Not an Armstrong Number");
    }
}`,
      csharp: `using System;

class Solution {
    static void Main() {
        string s = Console.ReadLine()?.Trim();
        if (string.IsNullOrEmpty(s)) return;
        int n = int.Parse(s), k = s.Length, temp = n;
        double sum = 0;
        while (temp > 0) {
            sum += Math.Pow(temp % 10, k);
            temp /= 10;
        }
        Console.WriteLine((int)sum == n ? "Armstrong Number" : "Not an Armstrong Number");
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    string s;
    if (!(cin >> s)) return 0;
    int n = stoi(s), k = s.length(), temp = n;
    long long sum = 0;
    while (temp > 0) {
        sum += pow(temp % 10, k);
        temp /= 10;
    }
    cout << (sum == n ? "Armstrong Number" : "Not an Armstrong Number") << endl;
    return 0;
}`,
    },
    testCases: [
      { input: '153', expected: 'Armstrong Number' },
      { input: '370', expected: 'Armstrong Number' },
      { input: '123', expected: 'Not an Armstrong Number' },
      { input: '9474', expected: 'Armstrong Number' },
    ],
  },
  {
    id: 'code-4',
    title: 'Problem 4: Detective Reva (Primes in Range [L, R])',
    difficulty: 'Medium',
    timeMinutes: 25,
    description: `Detective Reva is decoding hidden lock codes.
Find and print all prime numbers in the closed interval [L, R] inclusive, each on a new line.
If no prime numbers exist in the given range, print "No primes found".`,
    inputFormat: 'Two space-separated integers: L R',
    outputFormat: 'Primes printed each on a new line, or "No primes found".',
    constraints: '1 <= L <= R <= 10^6',
    sampleInput: '10 20',
    sampleOutput: `11
13
17
19`,
    explanation: `Primes between 10 and 20 are 11, 13, 17, and 19.`,
    starterCode: {
      python: `import sys

def is_prime(n):
    if n < 2: return False
    if n in (2, 3): return True
    if n % 2 == 0 or n % 3 == 0: return False
    d = 5
    while d * d <= n:
        if n % d == 0 or n % (d + 2) == 0: return False
        d += 6
    return True

nums = sys.stdin.read().split()
if nums:
    L, R = int(nums[0]), int(nums[1])
    primes = [str(x) for x in range(L, R + 1) if is_prime(x)]
    print("\\n".join(primes) if primes else "No primes found")
`,
      java: `import java.util.Scanner;

public class PrimeRange {
    private static boolean isPrime(int n) {
        if (n < 2) return false;
        if (n == 2 || n == 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int L = sc.nextInt(), R = sc.nextInt();
        boolean found = false;
        for (int i = L; i <= R; i++) {
            if (isPrime(i)) {
                System.out.println(i);
                found = true;
            }
        }
        if (!found) System.out.println("No primes found");
    }
}`,
      csharp: `using System;

class Solution {
    private static bool IsPrime(int n) {
        if (n < 2) return false;
        if (n == 2 || n == 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    static void Main() {
        string[] tokens = Console.In.ReadToEnd().Split(new[] {' ', '\\n', '\\r'}, StringSplitOptions.RemoveEmptyEntries);
        if (tokens.Length < 2) return;
        int L = int.Parse(tokens[0]), R = int.Parse(tokens[1]);
        bool found = false;
        for (int i = L; i <= R; i++) {
            if (IsPrime(i)) {
                Console.WriteLine(i);
                found = true;
            }
        }
        if (!found) Console.WriteLine("No primes found");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    int L, R;
    if (!(cin >> L >> R)) return 0;
    bool found = false;
    for (int i = L; i <= R; i++) {
        if (isPrime(i)) {
            cout << i << "\n";
            found = true;
        }
    }
    if (!found) cout << "No primes found\n";
    return 0;
}`,
    },
    testCases: [
      { input: '10 20', expected: '11\n13\n17\n19' },
      { input: '24 28', expected: 'No primes found' },
      { input: '2 5', expected: '2\n3\n5' },
    ],
  },
  {
    id: 'code-5',
    title: 'Problem 5: Spell Bee Championship (Count Vowels)',
    difficulty: 'Easy',
    timeMinutes: 10,
    description: `Given a word or string, count the total occurrences of lowercase vowels ('a', 'e', 'i', 'o', 'u').
Case-insensitive matching (convert uppercase letters to lowercase before checking).`,
    inputFormat: 'Single string line',
    outputFormat: 'Single integer representing count of vowels.',
    constraints: '1 <= len(s) <= 1000',
    sampleInput: 'Accenture',
    sampleOutput: '4',
    explanation: `'Accenture' contains vowels A, e, u, e. Total = 4.`,
    starterCode: {
      python: `s = input().strip().lower()
print(sum(1 for c in s if c in "aeiou"))
`,
      java: `import java.util.Scanner;

public class VowelCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim().toLowerCase();
        int count = 0;
        for (char c : s.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) count++;
        }
        System.out.println(count);
    }
}`,
      csharp: `using System;
using System.Linq;

class Solution {
    static void Main() {
        string s = Console.ReadLine()?.Trim().ToLower();
        if (s != null) {
            Console.WriteLine(s.Count(c => "aeiou".Contains(c)));
        }
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    if (!getline(cin, s)) return 0;
    int count = 0;
    for (char c : s) {
        char lower = tolower(c);
        if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') count++;
    }
    cout << count << endl;
    return 0;
}`,
    },
    testCases: [
      { input: 'Accenture', expected: '4' },
      { input: 'rhythm', expected: '0' },
      { input: 'Programming Language', expected: '7' },
    ],
  },
  {
    id: 'code-6',
    title: 'Rat Count House (Accenture Favorite Slot PYQ)',
    difficulty: 'Easy',
    timeMinutes: 20,
    description: `A food supply unit needs to provide enough food for rats distributed in houses. 
You are given:
- 'r': Number of rats present in an area.
- 'unit': Amount of food each rat consumes.
- 'n': Number of houses in the array.
- 'arr': An array where arr[i] represents the amount of food available in house i.

Determine the minimum number of houses required (from the beginning of the array, index 0 upwards) such that the total food gathered is greater than or equal to the total food needed (r * unit). 

Return -1 if the total food available across all houses in the array is insufficient to feed all rats, or 0 if the array is empty.`,
    inputFormat: 'r (integer)\nunit (integer)\nn (size of array)\narr (space-separated integers)',
    outputFormat: 'Single integer indicating minimum house count, -1 if insufficient, or 0 if array is null/empty.',
    constraints: '1 <= r, unit <= 1000\n0 <= n <= 1000\n0 <= arr[i] <= 1000',
    sampleInput: `7
2
8
2 8 3 5 7 4 1 2`,
    sampleOutput: '4',
    explanation: `Total food required = r * unit = 7 * 2 = 14.
Accumulated food:
House 0: 2 (total 2)
House 1: 8 (total 10)
House 2: 3 (total 13)
House 3: 5 (total 18 >= 14).
Minimum 4 houses are required to gather >= 14 food.`,
    starterCode: {
      python: `def solve(r, unit, arr):
    if not arr:
        return 0
    total_required = r * unit
    current_food = 0
    for i, food in enumerate(arr):
        current_food += food
        if current_food >= total_required:
            return i + 1
    return -1

# Sample Test
r = 7
unit = 2
arr = [2, 8, 3, 5, 7, 4, 1, 2]
print(solve(r, unit, arr))
`,
      java: `import java.util.*;

public class Main {
    public static int solve(int r, int unit, int[] arr) {
        if (arr == null || arr.length == 0) return 0;
        int totalRequired = r * unit;
        int current = 0;
        for (int i = 0; i < arr.length; i++) {
            current += arr[i];
            if (current >= totalRequired) return i + 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {2, 8, 3, 5, 7, 4, 1, 2};
        System.out.println(solve(7, 2, arr));
    }
}`,
      csharp: `using System;

public class Solution {
    public static int Solve(int r, int unit, int[] arr) {
        if (arr == null || arr.Length == 0) return 0;
        int totalRequired = r * unit;
        int current = 0;
        for (int i = 0; i < arr.Length; i++) {
            current += arr[i];
            if (current >= totalRequired) return i + 1;
        }
        return -1;
    }

    public static void Main() {
        int[] arr = {2, 8, 3, 5, 7, 4, 1, 2};
        Console.WriteLine(Solve(7, 2, arr));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int solve(int r, int unit, const vector<int>& arr) {
    if (arr.empty()) return 0;
    int totalRequired = r * unit;
    int current = 0;
    for (int i = 0; i < (int)arr.size(); i++) {
        current += arr[i];
        if (current >= totalRequired) return i + 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {2, 8, 3, 5, 7, 4, 1, 2};
    cout << solve(7, 2, arr) << endl;
    return 0;
}`,
    },
    testCases: [
      { input: 'r=7, unit=2, arr=[2, 8, 3, 5, 7, 4, 1, 2]', expected: '4' },
      { input: 'r=10, unit=10, arr=[5, 10, 15]', expected: '-1' },
      { input: 'r=3, unit=3, arr=[10]', expected: '1' },
    ],
  },
  {
    id: 'code-7',
    title: 'Binary String Operations (A, B, C Logic)',
    difficulty: 'Medium',
    timeMinutes: 25,
    description: `Given a string representing a valid boolean expression containing single digit binary numbers (0 or 1) separated by alphabetical operation characters:
- 'A' represents bitwise AND
- 'B' represents bitwise OR
- 'C' represents bitwise XOR

The expression evaluates from left to right strictly. Calculate and return the final single digit result (0 or 1). Return -1 if string is null or empty.`,
    inputFormat: 'Single string S (e.g., "1C0C1A0B1")',
    outputFormat: 'Single integer (0 or 1)',
    constraints: 'Length of string S is odd. 1 <= len(S) <= 1000',
    sampleInput: '1C0C1A0B1',
    sampleOutput: '1',
    explanation: `Start with 1.
1 C 0 -> 1 XOR 0 = 1.
1 C 1 -> 1 XOR 1 = 0.
0 A 0 -> 0 AND 0 = 0.
0 B 1 -> 0 OR 1 = 1.
Final result is 1.`,
    starterCode: {
      python: `def evaluate_binary_str(s):
    if not s:
        return -1
    res = int(s[0])
    i = 1
    while i < len(s):
        op = s[i]
        val = int(s[i + 1])
        if op == 'A':
            res = res & val
        elif op == 'B':
            res = res | val
        elif op == 'C':
            res = res ^ val
        i += 2
    return res

# Sample Test
print(evaluate_binary_str("1C0C1A0B1"))
`,
      java: `public class Main {
    public static int evaluateBinaryStr(String s) {
        if (s == null || s.length() == 0) return -1;
        int res = s.charAt(0) - '0';
        for (int i = 1; i < s.length(); i += 2) {
            char op = s.charAt(i);
            int val = s.charAt(i + 1) - '0';
            if (op == 'A') res &= val;
            else if (op == 'B') res |= val;
            else if (op == 'C') res ^= val;
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(evaluateBinaryStr("1C0C1A0B1"));
    }
}`,
      csharp: `using System;

public class Solution {
    public static int EvaluateBinaryStr(string s) {
        if (string.IsNullOrEmpty(s)) return -1;
        int res = s[0] - '0';
        for (int i = 1; i < s.Length; i += 2) {
            char op = s[i];
            int val = s[i + 1] - '0';
            if (op == 'A') res &= val;
            else if (op == 'B') res |= val;
            else if (op == 'C') res ^= val;
        }
        return res;
    }

    public static void Main() {
        Console.WriteLine(EvaluateBinaryStr("1C0C1A0B1"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int evaluateBinaryStr(const string& s) {
    if (s.empty()) return -1;
    int res = s[0] - '0';
    for (size_t i = 1; i < s.length(); i += 2) {
        char op = s[i];
        int val = s[i + 1] - '0';
        if (op == 'A') res &= val;
        else if (op == 'B') res |= val;
        else if (op == 'C') res ^= val;
    }
    return res;
}

int main() {
    cout << evaluateBinaryStr("1C0C1A0B1") << endl;
    return 0;
}`,
    },
    testCases: [
      { input: '1C0C1A0B1', expected: '1' },
      { input: '0C1A1B1C1', expected: '0' },
      { input: '1A0B1', expected: '1' },
    ],
  },
];
