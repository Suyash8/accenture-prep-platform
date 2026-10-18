import { CodingProblem } from '../types';

export const ACCENTURE_CODING_PROBLEMS: CodingProblem[] = [
  {
    "id": "code-1",
    "title": "Problem 1: Sentence Containment",
    "difficulty": "Medium",
    "timeMinutes": 25,
    "description": "Given two sentences S1 and S2:\nReturn the sentence whose words all appear as substrings in the other sentence.\n- If mutually contained (each sentence's words appear in the other), return the shorter sentence (if equal lengths, return S1).\n- If neither sentence's words are contained in the other, return \"NONE\".",
    "inputFormat": "Line 1: Sentence 1 (s1)\nLine 2: Sentence 2 (s2)",
    "outputFormat": "Single string: s1, s2, or \"NONE\"",
    "constraints": "1 <= len(s1), len(s2) <= 1000\nWords are space-separated alphanumeric characters.",
    "sampleInput": "the cat\nthe caterpillar",
    "sampleOutput": "the cat",
    "explanation": "Words of s1: [\"the\", \"cat\"]. Both appear as substrings of words in s2 (\"the\" in \"the\", \"cat\" in \"caterpillar\"). Output is s1.",
    "starterCode": {
      "python": "import sys\n\ndef solve(s1: str, s2: str) -> str:\n    def is_contained(sub_str: str, full_str: str) -> bool:\n        w_sub = sub_str.split()\n        w_full = full_str.split()\n        return all(any(ws in wf for wf in w_full) for ws in w_sub)\n    c1 = is_contained(s1, s2)\n    c2 = is_contained(s2, s1)\n    if c1 and c2: return s1 if len(s1) <= len(s2) else s2\n    if c1: return s1\n    if c2: return s2\n    return \"NONE\"\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(solve(lines[0].strip(), lines[1].strip()))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    private static boolean isContained(String subStr, String fullStr) {\n        String[] wSub = subStr.split(\"\\\\s+\");\n        String[] wFull = fullStr.split(\"\\\\s+\");\n        for (String ws : wSub) {\n            boolean matched = false;\n            for (String wf : wFull) {\n                if (wf.contains(ws)) { matched = true; break; }\n            }\n            if (!matched) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s1 = sc.nextLine().trim();\n            String s2 = sc.hasNextLine() ? sc.nextLine().trim() : \"\";\n            boolean c1 = isContained(s1, s2);\n            boolean c2 = isContained(s2, s1);\n            if (c1 && c2) System.out.println(s1.length() <= s2.length() ? s1 : s2);\n            else if (c1) System.out.println(s1);\n            else if (c2) System.out.println(s2);\n            else System.out.println(\"NONE\");\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s1 = Console.ReadLine()?.Trim() ?? \"\";\n        string s2 = Console.ReadLine()?.Trim() ?? \"\";\n        var w1 = s1.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        var w2 = s2.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        bool c1 = w1.All(ws => w2.Any(wf => wf.Contains(ws)));\n        bool c2 = w2.All(ws => w1.Any(wf => wf.Contains(ws)));\n        if (c1 && c2) Console.WriteLine(s1.Length <= s2.Length ? s1 : s2);\n        else if (c1) Console.WriteLine(s1);\n        else if (c2) Console.WriteLine(s2);\n        else Console.WriteLine(\"NONE\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\nusing namespace std;\n\nbool isContained(const string& subStr, const string& fullStr) {\n    stringstream ss1(subStr), ss2(fullStr);\n    string w;\n    vector<string> wSub, wFull;\n    while(ss1 >> w) wSub.push_back(w);\n    while(ss2 >> w) wFull.push_back(w);\n    for(const auto& ws : wSub) {\n        bool found = false;\n        for(const auto& wf : wFull) {\n            if(wf.find(ws) != string::npos) { found = true; break; }\n        }\n        if(!found) return false;\n    }\n    return true;\n}\nint main() {\n    string s1, s2;\n    if(getline(cin, s1) && getline(cin, s2)) {\n        bool c1 = isContained(s1, s2), c2 = isContained(s2, s1);\n        if(c1 && c2) cout << (s1.length() <= s2.length() ? s1 : s2) << endl;\n        else if(c1) cout << s1 << endl;\n        else if(c2) cout << s2 << endl;\n        else cout << \"NONE\" << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "the cat\nthe caterpillar",
        "expected": "the cat"
      },
      {
        "input": "apple banana\napple",
        "expected": "apple"
      },
      {
        "input": "hello world\npython programming",
        "expected": "NONE"
      },
      {
        "input": "quick\nthe quick brown fox",
        "expected": "quick",
        "hidden": true
      },
      {
        "input": "sun moon\nearth mars",
        "expected": "NONE",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef solve(s1: str, s2: str) -> str:\n    def is_contained(sub_str: str, full_str: str) -> bool:\n        w_sub = sub_str.split()\n        w_full = full_str.split()\n        return all(any(ws in wf for wf in w_full) for ws in w_sub)\n    c1 = is_contained(s1, s2)\n    c2 = is_contained(s2, s1)\n    if c1 and c2: return s1 if len(s1) <= len(s2) else s2\n    if c1: return s1\n    if c2: return s2\n    return \"NONE\"\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(solve(lines[0].strip(), lines[1].strip()))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    private static boolean isContained(String subStr, String fullStr) {\n        String[] wSub = subStr.split(\"\\\\s+\");\n        String[] wFull = fullStr.split(\"\\\\s+\");\n        for (String ws : wSub) {\n            boolean matched = false;\n            for (String wf : wFull) {\n                if (wf.contains(ws)) { matched = true; break; }\n            }\n            if (!matched) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s1 = sc.nextLine().trim();\n            String s2 = sc.hasNextLine() ? sc.nextLine().trim() : \"\";\n            boolean c1 = isContained(s1, s2);\n            boolean c2 = isContained(s2, s1);\n            if (c1 && c2) System.out.println(s1.length() <= s2.length() ? s1 : s2);\n            else if (c1) System.out.println(s1);\n            else if (c2) System.out.println(s2);\n            else System.out.println(\"NONE\");\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s1 = Console.ReadLine()?.Trim() ?? \"\";\n        string s2 = Console.ReadLine()?.Trim() ?? \"\";\n        var w1 = s1.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        var w2 = s2.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        bool c1 = w1.All(ws => w2.Any(wf => wf.Contains(ws)));\n        bool c2 = w2.All(ws => w1.Any(wf => wf.Contains(ws)));\n        if (c1 && c2) Console.WriteLine(s1.Length <= s2.Length ? s1 : s2);\n        else if (c1) Console.WriteLine(s1);\n        else if (c2) Console.WriteLine(s2);\n        else Console.WriteLine(\"NONE\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\nusing namespace std;\n\nbool isContained(const string& subStr, const string& fullStr) {\n    stringstream ss1(subStr), ss2(fullStr);\n    string w;\n    vector<string> wSub, wFull;\n    while(ss1 >> w) wSub.push_back(w);\n    while(ss2 >> w) wFull.push_back(w);\n    for(const auto& ws : wSub) {\n        bool found = false;\n        for(const auto& wf : wFull) {\n            if(wf.find(ws) != string::npos) { found = true; break; }\n        }\n        if(!found) return false;\n    }\n    return true;\n}\nint main() {\n    string s1, s2;\n    if(getline(cin, s1) && getline(cin, s2)) {\n        bool c1 = isContained(s1, s2), c2 = isContained(s2, s1);\n        if(c1 && c2) cout << (s1.length() <= s2.length() ? s1 : s2) << endl;\n        else if(c1) cout << s1 << endl;\n        else if(c2) cout << s2 << endl;\n        else cout << \"NONE\" << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-2",
    "title": "Problem 2: Fruit Frequency Difference",
    "difficulty": "Easy",
    "timeMinutes": 20,
    "description": "Given a string of fruit names or lowercase letters, count character frequencies.\nFind: |max(odd frequencies) - min(even frequencies)|.\nIf either odd or even frequencies are absent, return 0.",
    "inputFormat": "Single line: string s",
    "outputFormat": "Single integer representing the absolute difference",
    "constraints": "1 <= len(s) <= 10^5\ns contains only lowercase letters.",
    "sampleInput": "aabbbcccc",
    "sampleOutput": "1",
    "explanation": "Frequencies: 'a': 2, 'b': 3, 'c': 4. Odd: [3] -> max=3. Even: [2, 4] -> min=2. |3 - 2| = 1.",
    "starterCode": {
      "python": "from collections import Counter\nimport sys\n\ndef fruit_frequency(s: str) -> int:\n    counts = Counter(s).values()\n    odds = [c for c in counts if c % 2 != 0]\n    evens = [c for c in counts if c % 2 == 0]\n    return abs(max(odds) - min(evens)) if (odds and evens) else 0\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(fruit_frequency(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) { System.out.println(0); return; }\n        String s = sc.next().trim();\n        Map<Character, Integer> counts = new HashMap<>();\n        for (char c : s.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);\n        int maxOdd = -1, minEven = Integer.MAX_VALUE;\n        for (int v : counts.values()) {\n            if (v % 2 != 0) maxOdd = Math.max(maxOdd, v);\n            else minEven = Math.min(minEven, v);\n        }\n        if (maxOdd != -1 && minEven != Integer.MAX_VALUE) System.out.println(Math.abs(maxOdd - minEven));\n        else System.out.println(0);\n    }\n}\n",
      "csharp": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        var counts = s.GroupBy(c => c).Select(g => g.Count()).ToList();\n        var odds = counts.Where(c => c % 2 != 0).ToList();\n        var evens = counts.Where(c => c % 2 == 0).ToList();\n        if (odds.Any() && evens.Any()) Console.WriteLine(Math.Abs(odds.Max() - evens.Min()));\n        else Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        unordered_map<char, int> m;\n        for(char c : s) m[c]++;\n        int maxOdd = -1, minEven = 1e9;\n        for(auto& p : m) {\n            if(p.second % 2 != 0) maxOdd = max(maxOdd, p.second);\n            else minEven = min(minEven, p.second);\n        }\n        if(maxOdd != -1 && minEven != 1e9) cout << abs(maxOdd - minEven) << endl;\n        else cout << 0 << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "aabbbcccc",
        "expected": "1"
      },
      {
        "input": "aaa",
        "expected": "0"
      },
      {
        "input": "aabb",
        "expected": "0"
      },
      {
        "input": "p",
        "expected": "0",
        "hidden": true
      },
      {
        "input": "aabbccc",
        "expected": "1",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "from collections import Counter\nimport sys\n\ndef fruit_frequency(s: str) -> int:\n    counts = Counter(s).values()\n    odds = [c for c in counts if c % 2 != 0]\n    evens = [c for c in counts if c % 2 == 0]\n    return abs(max(odds) - min(evens)) if (odds and evens) else 0\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(fruit_frequency(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) { System.out.println(0); return; }\n        String s = sc.next().trim();\n        Map<Character, Integer> counts = new HashMap<>();\n        for (char c : s.toCharArray()) counts.put(c, counts.getOrDefault(c, 0) + 1);\n        int maxOdd = -1, minEven = Integer.MAX_VALUE;\n        for (int v : counts.values()) {\n            if (v % 2 != 0) maxOdd = Math.max(maxOdd, v);\n            else minEven = Math.min(minEven, v);\n        }\n        if (maxOdd != -1 && minEven != Integer.MAX_VALUE) System.out.println(Math.abs(maxOdd - minEven));\n        else System.out.println(0);\n    }\n}\n",
      "csharp": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        var counts = s.GroupBy(c => c).Select(g => g.Count()).ToList();\n        var odds = counts.Where(c => c % 2 != 0).ToList();\n        var evens = counts.Where(c => c % 2 == 0).ToList();\n        if (odds.Any() && evens.Any()) Console.WriteLine(Math.Abs(odds.Max() - evens.Min()));\n        else Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        unordered_map<char, int> m;\n        for(char c : s) m[c]++;\n        int maxOdd = -1, minEven = 1e9;\n        for(auto& p : m) {\n            if(p.second % 2 != 0) maxOdd = max(maxOdd, p.second);\n            else minEven = min(minEven, p.second);\n        }\n        if(maxOdd != -1 && minEven != 1e9) cout << abs(maxOdd - minEven) << endl;\n        else cout << 0 << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-3",
    "title": "Problem 3: Asteroid Safe Zones (Armstrong Check)",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "An asteroid coordinate is safe if the number is an Armstrong number (sum of each digit raised to power of total number of digits equals the original number).\nReturn \"SAFE\" if Armstrong, else \"UNSAFE\".",
    "inputFormat": "Single integer n",
    "outputFormat": "String: \"SAFE\" or \"UNSAFE\"",
    "constraints": "1 <= n <= 10^7",
    "sampleInput": "153",
    "sampleOutput": "SAFE",
    "explanation": "153 has 3 digits: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153. Equal to original number, so SAFE.",
    "starterCode": {
      "python": "import sys\n\ndef is_armstrong(n: int) -> str:\n    s = str(n)\n    k = len(s)\n    total = sum(int(d)**k for d in s)\n    return \"SAFE\" if total == n else \"UNSAFE\"\n\nif __name__ == '__main__':\n    val = sys.stdin.read().strip()\n    if val: print(is_armstrong(int(val)))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            String s = String.valueOf(n);\n            int k = s.length();\n            long sum = 0;\n            for (char c : s.toCharArray()) sum += Math.pow(c - '0', k);\n            System.out.println(sum == n ? \"SAFE\" : \"UNSAFE\");\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (long.TryParse(s, out long n)) {\n            int k = s.Length;\n            long sum = 0;\n            foreach(char c in s) sum += (long)Math.Pow(c - '0', k);\n            Console.WriteLine(sum == n ? \"SAFE\" : \"UNSAFE\");\n        }\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        string s = to_string(n);\n        int k = s.length();\n        long long sum = 0;\n        for(char c : s) sum += pow(c - '0', k);\n        cout << (sum == n ? \"SAFE\" : \"UNSAFE\") << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "153",
        "expected": "SAFE"
      },
      {
        "input": "370",
        "expected": "SAFE"
      },
      {
        "input": "123",
        "expected": "UNSAFE"
      },
      {
        "input": "1",
        "expected": "SAFE",
        "hidden": true
      },
      {
        "input": "9474",
        "expected": "SAFE",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef is_armstrong(n: int) -> str:\n    s = str(n)\n    k = len(s)\n    total = sum(int(d)**k for d in s)\n    return \"SAFE\" if total == n else \"UNSAFE\"\n\nif __name__ == '__main__':\n    val = sys.stdin.read().strip()\n    if val: print(is_armstrong(int(val)))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            String s = String.valueOf(n);\n            int k = s.length();\n            long sum = 0;\n            for (char c : s.toCharArray()) sum += Math.pow(c - '0', k);\n            System.out.println(sum == n ? \"SAFE\" : \"UNSAFE\");\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (long.TryParse(s, out long n)) {\n            int k = s.Length;\n            long sum = 0;\n            foreach(char c in s) sum += (long)Math.Pow(c - '0', k);\n            Console.WriteLine(sum == n ? \"SAFE\" : \"UNSAFE\");\n        }\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        string s = to_string(n);\n        int k = s.length();\n        long long sum = 0;\n        for(char c : s) sum += pow(c - '0', k);\n        cout << (sum == n ? \"SAFE\" : \"UNSAFE\") << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-4",
    "title": "Problem 4: LargeSmallSum (Accenture PYQ)",
    "difficulty": "Easy",
    "timeMinutes": 20,
    "description": "Given an integer array arr of length n:\n- Find the second largest element from the numbers at even positions (0, 2, 4...).\n- Find the second smallest element from the numbers at odd positions (1, 3, 5...).\n- Return their sum.\nIf array length is <= 3, return 0.",
    "inputFormat": "Line 1: Array elements separated by space",
    "outputFormat": "Single integer: sum",
    "constraints": "Array length >= 0, elements can be positive or negative.",
    "sampleInput": "3 2 1 7 5 4",
    "sampleOutput": "7",
    "explanation": "Even position elements: arr[0]=3, arr[2]=1, arr[4]=5 -> sorted: [1, 3, 5], 2nd largest is 3.\nOdd position elements: arr[1]=2, arr[3]=7, arr[5]=4 -> sorted: [2, 4, 7], 2nd smallest is 4.\nSum = 3 + 4 = 7.",
    "starterCode": {
      "python": "import sys\n\ndef large_small_sum(arr):\n    if len(arr) <= 3: return 0\n    evens = sorted([arr[i] for i in range(0, len(arr), 2)])\n    odds = sorted([arr[i] for i in range(1, len(arr), 2)])\n    if len(evens) < 2 or len(odds) < 2: return 0\n    return evens[-2] + odds[1]\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        arr = list(map(int, line.split()))\n        print(large_small_sum(arr))\n    else:\n        print(0)\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        while (sc.hasNextInt()) list.add(sc.nextInt());\n        if (list.size() <= 3) { System.out.println(0); return; }\n        List<Integer> evens = new ArrayList<>();\n        List<Integer> odds = new ArrayList<>();\n        for (int i = 0; i < list.size(); i++) {\n            if (i % 2 == 0) evens.add(list.get(i));\n            else odds.add(list.get(i));\n        }\n        Collections.sort(evens);\n        Collections.sort(odds);\n        if (evens.size() < 2 || odds.size() < 2) System.out.println(0);\n        else System.out.println(evens.get(evens.size() - 2) + odds.get(1));\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var tokens = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        if (tokens == null || tokens.Length <= 3) { Console.WriteLine(0); return; }\n        var arr = tokens.Select(int.Parse).ToArray();\n        var evens = arr.Where((val, idx) => idx % 2 == 0).OrderBy(x => x).ToList();\n        var odds = arr.Where((val, idx) => idx % 2 != 0).OrderBy(x => x).ToList();\n        if (evens.Count < 2 || odds.Count < 2) Console.WriteLine(0);\n        else Console.WriteLine(evens[evens.Count - 2] + odds[1]);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    if(arr.size() <= 3) { cout << 0 << endl; return 0; }\n    vector<int> evens, odds;\n    for(size_t i = 0; i < arr.size(); i++) {\n        if(i % 2 == 0) evens.push_back(arr[i]);\n        else odds.push_back(arr[i]);\n    }\n    sort(evens.begin(), evens.end());\n    sort(odds.begin(), odds.end());\n    if(evens.size() < 2 || odds.size() < 2) cout << 0 << endl;\n    else cout << evens[evens.size() - 2] + odds[1] << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "3 2 1 7 5 4",
        "expected": "7"
      },
      {
        "input": "1 8 0 2 3 5 6",
        "expected": "8"
      },
      {
        "input": "1 2 3",
        "expected": "0"
      },
      {
        "input": "4 1 8 5 2 9",
        "expected": "9",
        "hidden": true
      },
      {
        "input": "10 20",
        "expected": "0",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef large_small_sum(arr):\n    if len(arr) <= 3: return 0\n    evens = sorted([arr[i] for i in range(0, len(arr), 2)])\n    odds = sorted([arr[i] for i in range(1, len(arr), 2)])\n    if len(evens) < 2 or len(odds) < 2: return 0\n    return evens[-2] + odds[1]\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        arr = list(map(int, line.split()))\n        print(large_small_sum(arr))\n    else:\n        print(0)\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        while (sc.hasNextInt()) list.add(sc.nextInt());\n        if (list.size() <= 3) { System.out.println(0); return; }\n        List<Integer> evens = new ArrayList<>();\n        List<Integer> odds = new ArrayList<>();\n        for (int i = 0; i < list.size(); i++) {\n            if (i % 2 == 0) evens.add(list.get(i));\n            else odds.add(list.get(i));\n        }\n        Collections.sort(evens);\n        Collections.sort(odds);\n        if (evens.size() < 2 || odds.size() < 2) System.out.println(0);\n        else System.out.println(evens.get(evens.size() - 2) + odds.get(1));\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var tokens = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries);\n        if (tokens == null || tokens.Length <= 3) { Console.WriteLine(0); return; }\n        var arr = tokens.Select(int.Parse).ToArray();\n        var evens = arr.Where((val, idx) => idx % 2 == 0).OrderBy(x => x).ToList();\n        var odds = arr.Where((val, idx) => idx % 2 != 0).OrderBy(x => x).ToList();\n        if (evens.Count < 2 || odds.Count < 2) Console.WriteLine(0);\n        else Console.WriteLine(evens[evens.Count - 2] + odds[1]);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    if(arr.size() <= 3) { cout << 0 << endl; return 0; }\n    vector<int> evens, odds;\n    for(size_t i = 0; i < arr.size(); i++) {\n        if(i % 2 == 0) evens.push_back(arr[i]);\n        else odds.push_back(arr[i]);\n    }\n    sort(evens.begin(), evens.end());\n    sort(odds.begin(), odds.end());\n    if(evens.size() < 2 || odds.size() < 2) cout << 0 << endl;\n    else cout << evens[evens.size() - 2] + odds[1] << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-5",
    "title": "Problem 5: Product of Smallest Pair",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given an integer sum and an array arr:\n- Check if the sum of the two smallest elements is <= sum.\n- If yes, return their product.\n- If not, or if array length < 2, return 0.",
    "inputFormat": "Line 1: sum\nLine 2: array elements separated by space",
    "outputFormat": "Single integer",
    "constraints": "Array size >= 2",
    "sampleInput": "9\n5 2 4 3 9 7 1",
    "sampleOutput": "2",
    "explanation": "Sorted array: [1, 2, 3, 4, 5, 7, 9]. Two smallest are 1 and 2. 1 + 2 = 3 <= 9. Product = 1 * 2 = 2.",
    "starterCode": {
      "python": "import sys\n\ndef solve(s, arr):\n    if len(arr) < 2: return 0\n    arr.sort()\n    if arr[0] + arr[1] <= s:\n        return arr[0] * arr[1]\n    return 0\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        s = int(lines[0].strip())\n        arr = list(map(int, lines[1].strip().split()))\n        print(solve(s, arr))\n    else:\n        print(0)\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int sum = sc.nextInt();\n            List<Integer> list = new ArrayList<>();\n            while (sc.hasNextInt()) list.add(sc.nextInt());\n            if (list.size() < 2) { System.out.println(0); return; }\n            Collections.sort(list);\n            if (list.get(0) + list.get(1) <= sum) System.out.println(list.get(0) * list.get(1));\n            else System.out.println(0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var lines = Console.In.ReadToEnd().Split(new[] { '\\r', '\\n' }, StringSplitOptions.RemoveEmptyEntries);\n        if (lines.Length >= 2) {\n            int s = int.Parse(lines[0].Trim());\n            var arr = lines[1].Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).OrderBy(x => x).ToArray();\n            if (arr.Length >= 2 && arr[0] + arr[1] <= s) Console.WriteLine(arr[0] * arr[1]);\n            else Console.WriteLine(0);\n        } else Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int s;\n    if (cin >> s) {\n        vector<int> arr;\n        int x;\n        while (cin >> x) arr.push_back(x);\n        if (arr.size() < 2) { cout << 0 << endl; return 0; }\n        sort(arr.begin(), arr.end());\n        if (arr[0] + arr[1] <= s) cout << arr[0] * arr[1] << endl;\n        else cout << 0 << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "9\n5 2 4 3 9 7 1",
        "expected": "2"
      },
      {
        "input": "4\n9 8 3 -1",
        "expected": "-3"
      },
      {
        "input": "2\n5 6 7",
        "expected": "0"
      },
      {
        "input": "10\n1 2 3",
        "expected": "2",
        "hidden": true
      },
      {
        "input": "3\n4 3 2",
        "expected": "0",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef solve(s, arr):\n    if len(arr) < 2: return 0\n    arr.sort()\n    if arr[0] + arr[1] <= s:\n        return arr[0] * arr[1]\n    return 0\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        s = int(lines[0].strip())\n        arr = list(map(int, lines[1].strip().split()))\n        print(solve(s, arr))\n    else:\n        print(0)\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int sum = sc.nextInt();\n            List<Integer> list = new ArrayList<>();\n            while (sc.hasNextInt()) list.add(sc.nextInt());\n            if (list.size() < 2) { System.out.println(0); return; }\n            Collections.sort(list);\n            if (list.get(0) + list.get(1) <= sum) System.out.println(list.get(0) * list.get(1));\n            else System.out.println(0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var lines = Console.In.ReadToEnd().Split(new[] { '\\r', '\\n' }, StringSplitOptions.RemoveEmptyEntries);\n        if (lines.Length >= 2) {\n            int s = int.Parse(lines[0].Trim());\n            var arr = lines[1].Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).OrderBy(x => x).ToArray();\n            if (arr.Length >= 2 && arr[0] + arr[1] <= s) Console.WriteLine(arr[0] * arr[1]);\n            else Console.WriteLine(0);\n        } else Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int s;\n    if (cin >> s) {\n        vector<int> arr;\n        int x;\n        while (cin >> x) arr.push_back(x);\n        if (arr.size() < 2) { cout << 0 << endl; return 0; }\n        sort(arr.begin(), arr.end());\n        if (arr[0] + arr[1] <= s) cout << arr[0] * arr[1] << endl;\n        else cout << 0 << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-6",
    "title": "Problem 6: Difference of Sum",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given integers n and m:\n- Calculate sum of all numbers from 1 to m NOT divisible by n.\n- Calculate sum of all numbers from 1 to m divisible by n.\n- Return (sum of not divisible) - (sum of divisible).",
    "inputFormat": "Line 1: n\nLine 2: m",
    "outputFormat": "Single integer",
    "constraints": "1 <= n, m <= 10^5",
    "sampleInput": "4\n20",
    "sampleOutput": "90",
    "explanation": "Numbers up to 20 divisible by 4: [4, 8, 12, 16, 20] -> sum = 60.\nNumbers not divisible: 1+2+3+5+6+7+9+10+11+13+14+15+17+18+19 = 150.\nDifference = 150 - 60 = 90.",
    "starterCode": {
      "python": "import sys\n\ndef diff_of_sum(n, m):\n    sum_div = sum(i for i in range(1, m + 1) if i % n == 0)\n    sum_not_div = sum(i for i in range(1, m + 1) if i % n != 0)\n    return sum_not_div - sum_div\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(diff_of_sum(int(lines[0]), int(lines[1])))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int m = sc.nextInt();\n            long sumDiv = 0, sumNot = 0;\n            for (int i = 1; i <= m; i++) {\n                if (i % n == 0) sumDiv += i;\n                else sumNot += i;\n            }\n            System.out.println(sumNot - sumDiv);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        int n = int.Parse(Console.ReadLine() ?? \"1\");\n        int m = int.Parse(Console.ReadLine() ?? \"1\");\n        long sumDiv = 0, sumNot = 0;\n        for (int i = 1; i <= m; i++) {\n            if (i % n == 0) sumDiv += i;\n            else sumNot += i;\n        }\n        Console.WriteLine(sumNot - sumDiv);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n, m;\n    if (cin >> n >> m) {\n        long long sumDiv = 0, sumNot = 0;\n        for (long long i = 1; i <= m; i++) {\n            if (i % n == 0) sumDiv += i;\n            else sumNot += i;\n        }\n        cout << sumNot - sumDiv << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "4\n20",
        "expected": "90"
      },
      {
        "input": "3\n10",
        "expected": "19"
      },
      {
        "input": "5\n10",
        "expected": "25",
        "hidden": true
      },
      {
        "input": "2\n6",
        "expected": "-3",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef diff_of_sum(n, m):\n    sum_div = sum(i for i in range(1, m + 1) if i % n == 0)\n    sum_not_div = sum(i for i in range(1, m + 1) if i % n != 0)\n    return sum_not_div - sum_div\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(diff_of_sum(int(lines[0]), int(lines[1])))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int m = sc.nextInt();\n            long sumDiv = 0, sumNot = 0;\n            for (int i = 1; i <= m; i++) {\n                if (i % n == 0) sumDiv += i;\n                else sumNot += i;\n            }\n            System.out.println(sumNot - sumDiv);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        int n = int.Parse(Console.ReadLine() ?? \"1\");\n        int m = int.Parse(Console.ReadLine() ?? \"1\");\n        long sumDiv = 0, sumNot = 0;\n        for (int i = 1; i <= m; i++) {\n            if (i % n == 0) sumDiv += i;\n            else sumNot += i;\n        }\n        Console.WriteLine(sumNot - sumDiv);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n, m;\n    if (cin >> n >> m) {\n        long long sumDiv = 0, sumNot = 0;\n        for (long long i = 1; i <= m; i++) {\n            if (i % n == 0) sumDiv += i;\n            else sumNot += i;\n        }\n        cout << sumNot - sumDiv << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-7",
    "title": "Problem 7: Move Hyphens to Front",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given a string s containing letters and hyphens ('-'):\nMove all hyphens to the beginning of the string while maintaining the relative order of the letters.",
    "inputFormat": "Single string s",
    "outputFormat": "Transformed string",
    "constraints": "1 <= len(s) <= 10^5",
    "sampleInput": "Move-Hyphens-to-Front",
    "sampleOutput": "---MoveHyphenstoFront",
    "explanation": "Three hyphens are moved to the front. The remaining letters preserve order.",
    "starterCode": {
      "python": "import sys\n\ndef move_hyphens(s: str) -> str:\n    hyphens = s.count('-')\n    chars = [c for c in s if c != '-']\n    return '-' * hyphens + ''.join(chars)\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(move_hyphens(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine().trim();\n            StringBuilder hyphens = new StringBuilder();\n            StringBuilder others = new StringBuilder();\n            for (char c : s.toCharArray()) {\n                if (c == '-') hyphens.append(c);\n                else others.append(c);\n            }\n            System.out.println(hyphens.toString() + others.toString());\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        int count = s.Count(c => c == '-');\n        string others = new string(s.Where(c => c != '-').ToArray());\n        Console.WriteLine(new string('-', count) + others);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (getline(cin, s)) {\n        string hyphens = \"\", others = \"\";\n        for (char c : s) {\n            if (c == '-') hyphens += c;\n            else others += c;\n        }\n        cout << hyphens + others << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "Move-Hyphens-to-Front",
        "expected": "---MoveHyphenstoFront"
      },
      {
        "input": "String-Without-Hyphen",
        "expected": "--StringWithoutHyphen"
      },
      {
        "input": "a-b-c-d",
        "expected": "---abcd",
        "hidden": true
      },
      {
        "input": "nohyphen",
        "expected": "nohyphen",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef move_hyphens(s: str) -> str:\n    hyphens = s.count('-')\n    chars = [c for c in s if c != '-']\n    return '-' * hyphens + ''.join(chars)\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(move_hyphens(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine().trim();\n            StringBuilder hyphens = new StringBuilder();\n            StringBuilder others = new StringBuilder();\n            for (char c : s.toCharArray()) {\n                if (c == '-') hyphens.append(c);\n                else others.append(c);\n            }\n            System.out.println(hyphens.toString() + others.toString());\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        int count = s.Count(c => c == '-');\n        string others = new string(s.Where(c => c != '-').ToArray());\n        Console.WriteLine(new string('-', count) + others);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (getline(cin, s)) {\n        string hyphens = \"\", others = \"\";\n        for (char c : s) {\n            if (c == '-') hyphens += c;\n            else others += c;\n        }\n        cout << hyphens + others << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-8",
    "title": "Problem 8: Number of Carries",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given two positive integers num1 and num2:\nCalculate the total number of carry operations performed when adding the two numbers column by column from right to left.",
    "inputFormat": "Line 1: num1\nLine 2: num2",
    "outputFormat": "Single integer representing total carry count",
    "constraints": "1 <= num1, num2 <= 10^9",
    "sampleInput": "451\n349",
    "sampleOutput": "2",
    "explanation": "Column 1: 1 + 9 = 10 -> carry 1.\nColumn 2: 5 + 4 + carry 1 = 10 -> carry 1.\nColumn 3: 4 + 3 + carry 1 = 8 -> no carry.\nTotal carries = 2.",
    "starterCode": {
      "python": "import sys\n\ndef count_carries(n1, n2):\n    carry = 0\n    carries = 0\n    while n1 > 0 or n2 > 0:\n        d1 = n1 % 10\n        d2 = n2 % 10\n        sum_val = d1 + d2 + carry\n        if sum_val >= 10:\n            carries += 1\n            carry = 1\n        else:\n            carry = 0\n        n1 //= 10\n        n2 //= 10\n    return carries\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(count_carries(int(lines[0]), int(lines[1])))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n1 = sc.nextLong(), n2 = sc.nextLong();\n            int carry = 0, carries = 0;\n            while (n1 > 0 || n2 > 0) {\n                long s = (n1 % 10) + (n2 % 10) + carry;\n                if (s >= 10) { carries++; carry = 1; }\n                else carry = 0;\n                n1 /= 10; n2 /= 10;\n            }\n            System.out.println(carries);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        long n1 = long.Parse(Console.ReadLine() ?? \"0\");\n        long n2 = long.Parse(Console.ReadLine() ?? \"0\");\n        int carry = 0, carries = 0;\n        while (n1 > 0 || n2 > 0) {\n            long s = (n1 % 10) + (n2 % 10) + carry;\n            if (s >= 10) { carries++; carry = 1; }\n            else carry = 0;\n            n1 /= 10; n2 /= 10;\n        }\n        Console.WriteLine(carries);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n1, n2;\n    if (cin >> n1 >> n2) {\n        int carry = 0, carries = 0;\n        while (n1 > 0 || n2 > 0) {\n            int s = (n1 % 10) + (n2 % 10) + carry;\n            if (s >= 10) { carries++; carry = 1; }\n            else carry = 0;\n            n1 /= 10; n2 /= 10;\n        }\n        cout << carries << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "451\n349",
        "expected": "2"
      },
      {
        "input": "23\n563",
        "expected": "0"
      },
      {
        "input": "999\n1",
        "expected": "3",
        "hidden": true
      },
      {
        "input": "123\n456",
        "expected": "0",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef count_carries(n1, n2):\n    carry = 0\n    carries = 0\n    while n1 > 0 or n2 > 0:\n        d1 = n1 % 10\n        d2 = n2 % 10\n        sum_val = d1 + d2 + carry\n        if sum_val >= 10:\n            carries += 1\n            carry = 1\n        else:\n            carry = 0\n        n1 //= 10\n        n2 //= 10\n    return carries\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        print(count_carries(int(lines[0]), int(lines[1])))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n1 = sc.nextLong(), n2 = sc.nextLong();\n            int carry = 0, carries = 0;\n            while (n1 > 0 || n2 > 0) {\n                long s = (n1 % 10) + (n2 % 10) + carry;\n                if (s >= 10) { carries++; carry = 1; }\n                else carry = 0;\n                n1 /= 10; n2 /= 10;\n            }\n            System.out.println(carries);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        long n1 = long.Parse(Console.ReadLine() ?? \"0\");\n        long n2 = long.Parse(Console.ReadLine() ?? \"0\");\n        int carry = 0, carries = 0;\n        while (n1 > 0 || n2 > 0) {\n            long s = (n1 % 10) + (n2 % 10) + carry;\n            if (s >= 10) { carries++; carry = 1; }\n            else carry = 0;\n            n1 /= 10; n2 /= 10;\n        }\n        Console.WriteLine(carries);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n1, n2;\n    if (cin >> n1 >> n2) {\n        int carry = 0, carries = 0;\n        while (n1 > 0 || n2 > 0) {\n            int s = (n1 % 10) + (n2 % 10) + carry;\n            if (s >= 10) { carries++; carry = 1; }\n            else carry = 0;\n            n1 /= 10; n2 /= 10;\n        }\n        cout << carries << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-9",
    "title": "Problem 9: Automorphic Number",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "A number is Automorphic if its square ends in the same digits as the number itself.\nExamples: 5^2 = 25 (ends in 5), 25^2 = 625 (ends in 25).\nReturn \"Automorphic Number\" if true, else \"Not Automorphic Number\".",
    "inputFormat": "Single integer n",
    "outputFormat": "String: \"Automorphic Number\" or \"Not Automorphic Number\"",
    "constraints": "1 <= n <= 10^7",
    "sampleInput": "25",
    "sampleOutput": "Automorphic Number",
    "explanation": "25 * 25 = 625. Last two digits are 25. Matches original number.",
    "starterCode": {
      "python": "import sys\n\ndef is_automorphic(n: int) -> str:\n    sq = str(n * n)\n    s = str(n)\n    return \"Automorphic Number\" if sq.endswith(s) else \"Not Automorphic Number\"\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(is_automorphic(int(line)))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            String sq = String.valueOf(n * n);\n            String s = String.valueOf(n);\n            System.out.println(sq.endsWith(s) ? \"Automorphic Number\" : \"Not Automorphic Number\");\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        long n = long.Parse(Console.ReadLine() ?? \"0\");\n        string sq = (n * n).ToString();\n        string s = n.ToString();\n        Console.WriteLine(sq.EndsWith(s) ? \"Automorphic Number\" : \"Not Automorphic Number\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        string sq = to_string(n * n);\n        string s = to_string(n);\n        if (sq.length() >= s.length() && sq.substr(sq.length() - s.length()) == s) {\n            cout << \"Automorphic Number\" << endl;\n        } else {\n            cout << \"Not Automorphic Number\" << endl;\n        }\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "25",
        "expected": "Automorphic Number"
      },
      {
        "input": "76",
        "expected": "Automorphic Number"
      },
      {
        "input": "16",
        "expected": "Not Automorphic Number"
      },
      {
        "input": "5",
        "expected": "Automorphic Number",
        "hidden": true
      },
      {
        "input": "10",
        "expected": "Not Automorphic Number",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef is_automorphic(n: int) -> str:\n    sq = str(n * n)\n    s = str(n)\n    return \"Automorphic Number\" if sq.endswith(s) else \"Not Automorphic Number\"\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(is_automorphic(int(line)))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            String sq = String.valueOf(n * n);\n            String s = String.valueOf(n);\n            System.out.println(sq.endsWith(s) ? \"Automorphic Number\" : \"Not Automorphic Number\");\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        long n = long.Parse(Console.ReadLine() ?? \"0\");\n        string sq = (n * n).ToString();\n        string s = n.ToString();\n        Console.WriteLine(sq.EndsWith(s) ? \"Automorphic Number\" : \"Not Automorphic Number\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        string sq = to_string(n * n);\n        string s = to_string(n);\n        if (sq.length() >= s.length() && sq.substr(sq.length() - s.length()) == s) {\n            cout << \"Automorphic Number\" << endl;\n        } else {\n            cout << \"Not Automorphic Number\" << endl;\n        }\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-10",
    "title": "Problem 10: Max Element and Index",
    "difficulty": "Easy",
    "timeMinutes": 10,
    "description": "Given an array of integers, output the maximum element and its 0-based index on two separate lines.",
    "inputFormat": "Space-separated array elements",
    "outputFormat": "Line 1: Maximum element\nLine 2: Index",
    "constraints": "Array size >= 1",
    "sampleInput": "1 5 3 9 2",
    "sampleOutput": "9\n3",
    "explanation": "Max element is 9, located at index 3.",
    "starterCode": {
      "python": "import sys\n\ndef find_max(arr):\n    max_val = max(arr)\n    idx = arr.index(max_val)\n    print(max_val)\n    print(idx)\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        find_max(list(map(int, line.split())))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int maxVal = Integer.MIN_VALUE, maxIdx = -1, i = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            if (x > maxVal) { maxVal = x; maxIdx = i; }\n            i++;\n        }\n        System.out.println(maxVal);\n        System.out.println(maxIdx);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();\n        if (arr != null && arr.Any()) {\n            int maxVal = arr.Max();\n            int idx = arr.IndexOf(maxVal);\n            Console.WriteLine(maxVal);\n            Console.WriteLine(idx);\n        }\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    int maxVal = arr[0], maxIdx = 0;\n    for(size_t i = 1; i < arr.size(); i++) {\n        if(arr[i] > maxVal) { maxVal = arr[i]; maxIdx = i; }\n    }\n    cout << maxVal << endl << maxIdx << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "1 5 3 9 2",
        "expected": "9\n3"
      },
      {
        "input": "100 20 30",
        "expected": "100\n0"
      },
      {
        "input": "42",
        "expected": "42\n0",
        "hidden": true
      },
      {
        "input": "-5 -1 -10",
        "expected": "-1\n1",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef find_max(arr):\n    max_val = max(arr)\n    idx = arr.index(max_val)\n    print(max_val)\n    print(idx)\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        find_max(list(map(int, line.split())))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int maxVal = Integer.MIN_VALUE, maxIdx = -1, i = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            if (x > maxVal) { maxVal = x; maxIdx = i; }\n            i++;\n        }\n        System.out.println(maxVal);\n        System.out.println(maxIdx);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();\n        if (arr != null && arr.Any()) {\n            int maxVal = arr.Max();\n            int idx = arr.IndexOf(maxVal);\n            Console.WriteLine(maxVal);\n            Console.WriteLine(idx);\n        }\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    int maxVal = arr[0], maxIdx = 0;\n    for(size_t i = 1; i < arr.size(); i++) {\n        if(arr[i] > maxVal) { maxVal = arr[i]; maxIdx = i; }\n    }\n    cout << maxVal << endl << maxIdx << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-11",
    "title": "Problem 11: Superior Elements (Leaders)",
    "difficulty": "Medium",
    "timeMinutes": 20,
    "description": "An element is called Superior (Leader) if it is strictly greater than all elements to its right. The rightmost element is always Superior.\nReturn the count of Superior elements in the array.",
    "inputFormat": "Space-separated array elements",
    "outputFormat": "Single integer: count of Superior elements",
    "constraints": "Array size >= 1",
    "sampleInput": "8 10 6 2 9 7",
    "sampleOutput": "3",
    "explanation": "Traverse from right: 7 is superior (max=7). 9 is > 7, superior (max=9). 2 not > 9. 6 not > 9. 10 > 9, superior (max=10). 8 not > 10. Total superior = [7, 9, 10] => count 3.",
    "starterCode": {
      "python": "import sys\n\ndef count_superior(arr):\n    count = 0\n    max_right = float('-inf')\n    for x in reversed(arr):\n        if x > max_right:\n            count += 1\n            max_right = x\n    return count\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(count_superior(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        while (sc.hasNextInt()) list.add(sc.nextInt());\n        int count = 0, maxRight = Integer.MIN_VALUE;\n        for (int i = list.size() - 1; i >= 0; i--) {\n            if (list.get(i) > maxRight) {\n                count++;\n                maxRight = list.get(i);\n            }\n        }\n        System.out.println(count);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null) { Console.WriteLine(0); return; }\n        int count = 0, maxRight = int.MinValue;\n        for (int i = arr.Length - 1; i >= 0; i--) {\n            if (arr[i] > maxRight) { count++; maxRight = arr[i]; }\n        }\n        Console.WriteLine(count);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    int count = 0, maxRight = -2e9;\n    for(int i = (int)arr.size() - 1; i >= 0; i--) {\n        if(arr[i] > maxRight) { count++; maxRight = arr[i]; }\n    }\n    cout << count << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "8 10 6 2 9 7",
        "expected": "3"
      },
      {
        "input": "1 2 3 4 5",
        "expected": "1"
      },
      {
        "input": "5 4 3 2 1",
        "expected": "5",
        "hidden": true
      },
      {
        "input": "10",
        "expected": "1",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef count_superior(arr):\n    count = 0\n    max_right = float('-inf')\n    for x in reversed(arr):\n        if x > max_right:\n            count += 1\n            max_right = x\n    return count\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(count_superior(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        while (sc.hasNextInt()) list.add(sc.nextInt());\n        int count = 0, maxRight = Integer.MIN_VALUE;\n        for (int i = list.size() - 1; i >= 0; i--) {\n            if (list.get(i) > maxRight) {\n                count++;\n                maxRight = list.get(i);\n            }\n        }\n        System.out.println(count);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null) { Console.WriteLine(0); return; }\n        int count = 0, maxRight = int.MinValue;\n        for (int i = arr.Length - 1; i >= 0; i--) {\n            if (arr[i] > maxRight) { count++; maxRight = arr[i]; }\n        }\n        Console.WriteLine(count);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr;\n    int x;\n    while(cin >> x) arr.push_back(x);\n    int count = 0, maxRight = -2e9;\n    for(int i = (int)arr.size() - 1; i >= 0; i--) {\n        if(arr[i] > maxRight) { count++; maxRight = arr[i]; }\n    }\n    cout << count << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-12",
    "title": "Problem 12: Password Checker",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "A password is valid (return 1) if:\n1. Length >= 4\n2. Contains at least 1 digit\n3. Contains at least 1 capital letter\n4. Does not contain any space or slash ('/')\n5. Starting character is NOT a digit\nOtherwise return 0.",
    "inputFormat": "Single string s",
    "outputFormat": "1 or 0",
    "constraints": "1 <= len(s) <= 100",
    "sampleInput": "aA1_67",
    "sampleOutput": "1",
    "explanation": "Length 6 >= 4, has digits (1,6,7), has uppercase 'A', does not start with digit, no spaces/slashes. Output 1.",
    "starterCode": {
      "python": "import sys\n\ndef check_password(s: str) -> int:\n    if len(s) < 4: return 0\n    if s[0].isdigit(): return 0\n    has_digit = any(c.isdigit() for c in s)\n    has_upper = any(c.isupper() for c in s)\n    has_bad = any(c in ' /' for c in s)\n    return 1 if (has_digit and has_upper and not has_bad) else 0\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(check_password(line))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine().trim();\n            if (s.length() < 4 || Character.isDigit(s.charAt(0))) { System.out.println(0); return; }\n            boolean hasDigit = false, hasUpper = false, hasBad = false;\n            for (char c : s.toCharArray()) {\n                if (Character.isDigit(c)) hasDigit = true;\n                if (Character.isUpperCase(c)) hasUpper = true;\n                if (c == ' ' || c == '/') hasBad = true;\n            }\n            System.out.println(hasDigit && hasUpper && !hasBad ? 1 : 0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (s.Length < 4 || char.IsDigit(s[0])) { Console.WriteLine(0); return; }\n        bool hasDigit = s.Any(char.IsDigit);\n        bool hasUpper = s.Any(char.IsUpper);\n        bool hasBad = s.Any(c => c == ' ' || c == '/');\n        Console.WriteLine(hasDigit && hasUpper && !hasBad ? 1 : 0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    if (getline(cin, s)) {\n        if (s.length() < 4 || isdigit(s[0])) { cout << 0 << endl; return 0; }\n        bool hasDigit = false, hasUpper = false, hasBad = false;\n        for (char c : s) {\n            if (isdigit(c)) hasDigit = true;\n            if (isupper(c)) hasUpper = true;\n            if (c == ' ' || c == '/') hasBad = true;\n        }\n        cout << (hasDigit && hasUpper && !hasBad ? 1 : 0) << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "aA1_67",
        "expected": "1"
      },
      {
        "input": "1aA_67",
        "expected": "0"
      },
      {
        "input": "a9",
        "expected": "0"
      },
      {
        "input": "a/bC12",
        "expected": "0",
        "hidden": true
      },
      {
        "input": "ValidPass1",
        "expected": "1",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef check_password(s: str) -> int:\n    if len(s) < 4: return 0\n    if s[0].isdigit(): return 0\n    has_digit = any(c.isdigit() for c in s)\n    has_upper = any(c.isupper() for c in s)\n    has_bad = any(c in ' /' for c in s)\n    return 1 if (has_digit and has_upper and not has_bad) else 0\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(check_password(line))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine().trim();\n            if (s.length() < 4 || Character.isDigit(s.charAt(0))) { System.out.println(0); return; }\n            boolean hasDigit = false, hasUpper = false, hasBad = false;\n            for (char c : s.toCharArray()) {\n                if (Character.isDigit(c)) hasDigit = true;\n                if (Character.isUpperCase(c)) hasUpper = true;\n                if (c == ' ' || c == '/') hasBad = true;\n            }\n            System.out.println(hasDigit && hasUpper && !hasBad ? 1 : 0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (s.Length < 4 || char.IsDigit(s[0])) { Console.WriteLine(0); return; }\n        bool hasDigit = s.Any(char.IsDigit);\n        bool hasUpper = s.Any(char.IsUpper);\n        bool hasBad = s.Any(c => c == ' ' || c == '/');\n        Console.WriteLine(hasDigit && hasUpper && !hasBad ? 1 : 0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    if (getline(cin, s)) {\n        if (s.length() < 4 || isdigit(s[0])) { cout << 0 << endl; return 0; }\n        bool hasDigit = false, hasUpper = false, hasBad = false;\n        for (char c : s) {\n            if (isdigit(c)) hasDigit = true;\n            if (isupper(c)) hasUpper = true;\n            if (c == ' ' || c == '/') hasBad = true;\n        }\n        cout << (hasDigit && hasUpper && !hasBad ? 1 : 0) << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-13",
    "title": "Problem 13: Single Unique Element",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given a non-empty array of integers where every element appears twice except for one unique element, find and return that unique element.",
    "inputFormat": "Space-separated integers",
    "outputFormat": "Single integer",
    "constraints": "1 <= len(arr) <= 10^5",
    "sampleInput": "4 1 2 1 2",
    "sampleOutput": "4",
    "explanation": "1 and 2 appear twice. 4 appears once.",
    "starterCode": {
      "python": "import sys\n\ndef single_number(arr):\n    res = 0\n    for x in arr: res ^= x\n    return res\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(single_number(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int res = 0;\n        while (sc.hasNextInt()) res ^= sc.nextInt();\n        System.out.println(res);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse);\n        Console.WriteLine(arr?.Aggregate(0, (acc, x) => acc ^ x) ?? 0);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int res = 0, x;\n    while(cin >> x) res ^= x;\n    cout << res << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "4 1 2 1 2",
        "expected": "4"
      },
      {
        "input": "2 2 1",
        "expected": "1"
      },
      {
        "input": "7",
        "expected": "7",
        "hidden": true
      },
      {
        "input": "9 3 9 5 5",
        "expected": "3",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef single_number(arr):\n    res = 0\n    for x in arr: res ^= x\n    return res\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(single_number(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int res = 0;\n        while (sc.hasNextInt()) res ^= sc.nextInt();\n        System.out.println(res);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse);\n        Console.WriteLine(arr?.Aggregate(0, (acc, x) => acc ^ x) ?? 0);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int res = 0, x;\n    while(cin >> x) res ^= x;\n    cout << res << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-14",
    "title": "Problem 14: Maximum Subarray Sum",
    "difficulty": "Medium",
    "timeMinutes": 20,
    "description": "Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "inputFormat": "Space-separated integers",
    "outputFormat": "Single integer",
    "constraints": "1 <= len(arr) <= 10^5",
    "sampleInput": "-2 1 -3 4 -1 2 1 -5 4",
    "sampleOutput": "6",
    "explanation": "Contiguous subarray [4, -1, 2, 1] has largest sum = 6.",
    "starterCode": {
      "python": "import sys\n\ndef max_sub_array(arr):\n    max_so_far = arr[0]\n    curr = arr[0]\n    for x in arr[1:]:\n        curr = max(x, curr + x)\n        max_so_far = max(max_so_far, curr)\n    return max_so_far\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(max_sub_array(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            int maxSoFar = x, curr = x;\n            while (sc.hasNextInt()) {\n                x = sc.nextInt();\n                curr = Math.max(x, curr + x);\n                maxSoFar = Math.max(maxSoFar, curr);\n            }\n            System.out.println(maxSoFar);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null || arr.Length == 0) return;\n        int maxSoFar = arr[0], curr = arr[0];\n        for (int i = 1; i < arr.Length; i++) {\n            curr = Math.Max(arr[i], curr + arr[i]);\n            maxSoFar = Math.Max(maxSoFar, curr);\n        }\n        Console.WriteLine(maxSoFar);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int x;\n    if (cin >> x) {\n        int maxSoFar = x, curr = x;\n        while (cin >> x) {\n            curr = max(x, curr + x);\n            maxSoFar = max(maxSoFar, curr);\n        }\n        cout << maxSoFar << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "-2 1 -3 4 -1 2 1 -5 4",
        "expected": "6"
      },
      {
        "input": "1",
        "expected": "1"
      },
      {
        "input": "5 4 -1 7 8",
        "expected": "23"
      },
      {
        "input": "-1 -2 -3",
        "expected": "-1",
        "hidden": true
      },
      {
        "input": "10 20 -5 30",
        "expected": "55",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef max_sub_array(arr):\n    max_so_far = arr[0]\n    curr = arr[0]\n    for x in arr[1:]:\n        curr = max(x, curr + x)\n        max_so_far = max(max_so_far, curr)\n    return max_so_far\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(max_sub_array(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            int maxSoFar = x, curr = x;\n            while (sc.hasNextInt()) {\n                x = sc.nextInt();\n                curr = Math.max(x, curr + x);\n                maxSoFar = Math.max(maxSoFar, curr);\n            }\n            System.out.println(maxSoFar);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null || arr.Length == 0) return;\n        int maxSoFar = arr[0], curr = arr[0];\n        for (int i = 1; i < arr.Length; i++) {\n            curr = Math.Max(arr[i], curr + arr[i]);\n            maxSoFar = Math.Max(maxSoFar, curr);\n        }\n        Console.WriteLine(maxSoFar);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int x;\n    if (cin >> x) {\n        int maxSoFar = x, curr = x;\n        while (cin >> x) {\n            curr = max(x, curr + x);\n            maxSoFar = max(maxSoFar, curr);\n        }\n        cout << maxSoFar << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-15",
    "title": "Problem 15: Majority Element",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given an array of size n, return the majority element (element that appears strictly more than n/2 times). Assume the majority element always exists.",
    "inputFormat": "Space-separated integers",
    "outputFormat": "Single integer",
    "constraints": "1 <= n <= 10^5",
    "sampleInput": "2 2 1 1 1 2 2",
    "sampleOutput": "2",
    "explanation": "2 appears 4 times in array of size 7 (4 > 7/2).",
    "starterCode": {
      "python": "import sys\n\ndef majority_element(arr):\n    count = 0\n    candidate = None\n    for x in arr:\n        if count == 0: candidate = x\n        count += (1 if x == candidate else -1)\n    return candidate\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(majority_element(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int count = 0, candidate = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            if (count == 0) candidate = x;\n            count += (x == candidate ? 1 : -1);\n        }\n        System.out.println(candidate);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null) return;\n        int count = 0, candidate = 0;\n        foreach (int x in arr) {\n            if (count == 0) candidate = x;\n            count += (x == candidate ? 1 : -1);\n        }\n        Console.WriteLine(candidate);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0, candidate = 0, x;\n    while(cin >> x) {\n        if (count == 0) candidate = x;\n        count += (x == candidate ? 1 : -1);\n    }\n    cout << candidate << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "2 2 1 1 1 2 2",
        "expected": "2"
      },
      {
        "input": "3 2 3",
        "expected": "3"
      },
      {
        "input": "5",
        "expected": "5",
        "hidden": true
      },
      {
        "input": "1 1 1 2 3 1",
        "expected": "1",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef majority_element(arr):\n    count = 0\n    candidate = None\n    for x in arr:\n        if count == 0: candidate = x\n        count += (1 if x == candidate else -1)\n    return candidate\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(majority_element(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int count = 0, candidate = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            if (count == 0) candidate = x;\n            count += (x == candidate ? 1 : -1);\n        }\n        System.out.println(candidate);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null) return;\n        int count = 0, candidate = 0;\n        foreach (int x in arr) {\n            if (count == 0) candidate = x;\n            count += (x == candidate ? 1 : -1);\n        }\n        Console.WriteLine(candidate);\n    }\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0, candidate = 0, x;\n    while(cin >> x) {\n        if (count == 0) candidate = x;\n        count += (x == candidate ? 1 : -1);\n    }\n    cout << candidate << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-16",
    "title": "Problem 16: Reverse Words in Sentence",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given an input string of words separated by spaces, reverse the order of words. Eliminate extra leading, trailing, or multiple spaces between words.",
    "inputFormat": "Single line string",
    "outputFormat": "Reversed words string",
    "constraints": "1 <= len(s) <= 10^5",
    "sampleInput": "the sky is blue",
    "sampleOutput": "blue is sky the",
    "explanation": "Words order reversed: 'blue' 'is' 'sky' 'the'.",
    "starterCode": {
      "python": "import sys\n\ndef reverse_words(s: str) -> str:\n    return ' '.join(reversed(s.split()))\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(reverse_words(line))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] words = sc.nextLine().trim().split(\"\\\\s+\");\n            List<String> list = Arrays.asList(words);\n            Collections.reverse(list);\n            System.out.println(String.join(\" \", list));\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var s = Console.ReadLine()?.Trim() ?? \"\";\n        var words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries).Reverse();\n        Console.WriteLine(string.Join(\" \", words));\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line, w;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<string> words;\n        while(ss >> w) words.push_back(w);\n        reverse(words.begin(), words.end());\n        for(size_t i = 0; i < words.size(); i++) {\n            cout << words[i] << (i + 1 == words.size() ? \"\" : \" \");\n        }\n        cout << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "the sky is blue",
        "expected": "blue is sky the"
      },
      {
        "input": "  hello world  ",
        "expected": "world hello"
      },
      {
        "input": "a",
        "expected": "a",
        "hidden": true
      },
      {
        "input": "apple   banana  cherry",
        "expected": "cherry banana apple",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef reverse_words(s: str) -> str:\n    return ' '.join(reversed(s.split()))\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(reverse_words(line))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] words = sc.nextLine().trim().split(\"\\\\s+\");\n            List<String> list = Arrays.asList(words);\n            Collections.reverse(list);\n            System.out.println(String.join(\" \", list));\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var s = Console.ReadLine()?.Trim() ?? \"\";\n        var words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries).Reverse();\n        Console.WriteLine(string.Join(\" \", words));\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line, w;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<string> words;\n        while(ss >> w) words.push_back(w);\n        reverse(words.begin(), words.end());\n        for(size_t i = 0; i < words.size(); i++) {\n            cout << words[i] << (i + 1 == words.size() ? \"\" : \" \");\n        }\n        cout << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-17",
    "title": "Problem 17: Rat Count House",
    "difficulty": "Easy",
    "timeMinutes": 20,
    "description": "Given integer r (rats), unit (food per rat), and an array of food in each house:\nReturn the minimum number of houses required to satisfy all rats (total food >= r * unit).\nIf total food across all houses is insufficient, return 0. If array is empty, return -1.",
    "inputFormat": "Line 1: r\nLine 2: unit\nLine 3: array elements separated by space",
    "outputFormat": "Single integer",
    "constraints": "r >= 1, unit >= 1",
    "sampleInput": "7\n2\n2 8 3 5 7 4 1 2",
    "sampleOutput": "4",
    "explanation": "Total food required = 7 * 2 = 14.\nHouse 1: 2\nHouse 2: 2 + 8 = 10\nHouse 3: 10 + 3 = 13\nHouse 4: 13 + 5 = 18 >= 14. 4 houses needed.",
    "starterCode": {
      "python": "import sys\n\ndef solve(r, unit, arr):\n    if not arr: return -1\n    needed = r * unit\n    curr = 0\n    for i, x in enumerate(arr):\n        curr += x\n        if curr >= needed: return i + 1\n    return 0\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 3:\n        r = int(lines[0])\n        unit = int(lines[1])\n        arr = list(map(int, lines[2].split()))\n        print(solve(r, unit, arr))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int r = sc.nextInt();\n            int unit = sc.nextInt();\n            List<Integer> arr = new ArrayList<>();\n            while (sc.hasNextInt()) arr.add(sc.nextInt());\n            if (arr.isEmpty()) { System.out.println(-1); return; }\n            int needed = r * unit, curr = 0;\n            for (int i = 0; i < arr.size(); i++) {\n                curr += arr.get(i);\n                if (curr >= needed) { System.out.println(i + 1); return; }\n            }\n            System.out.println(0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        int r = int.Parse(Console.ReadLine() ?? \"0\");\n        int unit = int.Parse(Console.ReadLine() ?? \"0\");\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null || arr.Length == 0) { Console.WriteLine(-1); return; }\n        int needed = r * unit, curr = 0;\n        for (int i = 0; i < arr.Length; i++) {\n            curr += arr[i];\n            if (curr >= needed) { Console.WriteLine(i + 1); return; }\n        }\n        Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int r, unit;\n    if (cin >> r >> unit) {\n        vector<int> arr;\n        int x;\n        while (cin >> x) arr.push_back(x);\n        if (arr.empty()) { cout << -1 << endl; return 0; }\n        int needed = r * unit, curr = 0;\n        for (size_t i = 0; i < arr.size(); i++) {\n            curr += arr[i];\n            if (curr >= needed) { cout << i + 1 << endl; return 0; }\n        }\n        cout << 0 << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "7\n2\n2 8 3 5 7 4 1 2",
        "expected": "4"
      },
      {
        "input": "10\n10\n5 5 5",
        "expected": "0"
      },
      {
        "input": "2\n5\n10",
        "expected": "1",
        "hidden": true
      },
      {
        "input": "5\n10\n1 2 3",
        "expected": "0",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef solve(r, unit, arr):\n    if not arr: return -1\n    needed = r * unit\n    curr = 0\n    for i, x in enumerate(arr):\n        curr += x\n        if curr >= needed: return i + 1\n    return 0\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 3:\n        r = int(lines[0])\n        unit = int(lines[1])\n        arr = list(map(int, lines[2].split()))\n        print(solve(r, unit, arr))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int r = sc.nextInt();\n            int unit = sc.nextInt();\n            List<Integer> arr = new ArrayList<>();\n            while (sc.hasNextInt()) arr.add(sc.nextInt());\n            if (arr.isEmpty()) { System.out.println(-1); return; }\n            int needed = r * unit, curr = 0;\n            for (int i = 0; i < arr.size(); i++) {\n                curr += arr.get(i);\n                if (curr >= needed) { System.out.println(i + 1); return; }\n            }\n            System.out.println(0);\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        int r = int.Parse(Console.ReadLine() ?? \"0\");\n        int unit = int.Parse(Console.ReadLine() ?? \"0\");\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();\n        if (arr == null || arr.Length == 0) { Console.WriteLine(-1); return; }\n        int needed = r * unit, curr = 0;\n        for (int i = 0; i < arr.Length; i++) {\n            curr += arr[i];\n            if (curr >= needed) { Console.WriteLine(i + 1); return; }\n        }\n        Console.WriteLine(0);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int r, unit;\n    if (cin >> r >> unit) {\n        vector<int> arr;\n        int x;\n        while (cin >> x) arr.push_back(x);\n        if (arr.empty()) { cout << -1 << endl; return 0; }\n        int needed = r * unit, curr = 0;\n        for (size_t i = 0; i < arr.size(); i++) {\n            curr += arr[i];\n            if (curr >= needed) { cout << i + 1 << endl; return 0; }\n        }\n        cout << 0 << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-18",
    "title": "Problem 18: Binary String Operations",
    "difficulty": "Easy",
    "timeMinutes": 20,
    "description": "Given a binary string where 'A' represents AND, 'B' represents OR, and 'C' represents XOR.\nEvaluate the expression from left to right and return the final single binary digit (1 or 0).\nExample: \"1C0C1A0B1\" -> 1 XOR 0 = 1; 1 XOR 1 = 0; 0 AND 0 = 0; 0 OR 1 = 1.",
    "inputFormat": "Single string s",
    "outputFormat": "0 or 1",
    "constraints": "Length of s is odd. Starts and ends with 0 or 1.",
    "sampleInput": "1C0C1A0B1",
    "sampleOutput": "1",
    "explanation": "Step-by-step: 1 C 0 = 1, 1 C 1 = 0, 0 A 0 = 0, 0 B 1 = 1. Result = 1.",
    "starterCode": {
      "python": "import sys\n\ndef eval_binary_str(s: str) -> int:\n    res = int(s[0])\n    i = 1\n    while i < len(s):\n        op = s[i]\n        val = int(s[i + 1])\n        if op == 'A': res &= val\n        elif op == 'B': res |= val\n        elif op == 'C': res ^= val\n        i += 2\n    return res\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(eval_binary_str(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next().trim();\n            int res = s.charAt(0) - '0';\n            for (int i = 1; i < s.length(); i += 2) {\n                char op = s.charAt(i);\n                int val = s.charAt(i + 1) - '0';\n                if (op == 'A') res &= val;\n                else if (op == 'B') res |= val;\n                else if (op == 'C') res ^= val;\n            }\n            System.out.println(res);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (string.IsNullOrEmpty(s)) return;\n        int res = s[0] - '0';\n        for (int i = 1; i < s.Length; i += 2) {\n            char op = s[i];\n            int val = s[i + 1] - '0';\n            if (op == 'A') res &= val;\n            else if (op == 'B') res |= val;\n            else if (op == 'C') res ^= val;\n        }\n        Console.WriteLine(res);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        int res = s[0] - '0';\n        for (size_t i = 1; i < s.length(); i += 2) {\n            char op = s[i];\n            int val = s[i + 1] - '0';\n            if (op == 'A') res &= val;\n            else if (op == 'B') res |= val;\n            else if (op == 'C') res ^= val;\n        }\n        cout << res << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "1C0C1A0B1",
        "expected": "1"
      },
      {
        "input": "0C1A1B1C1",
        "expected": "0"
      },
      {
        "input": "1",
        "expected": "1",
        "hidden": true
      },
      {
        "input": "1A0B1C1",
        "expected": "0",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef eval_binary_str(s: str) -> int:\n    res = int(s[0])\n    i = 1\n    while i < len(s):\n        op = s[i]\n        val = int(s[i + 1])\n        if op == 'A': res &= val\n        elif op == 'B': res |= val\n        elif op == 'C': res ^= val\n        i += 2\n    return res\n\nif __name__ == '__main__':\n    s = sys.stdin.read().strip()\n    print(eval_binary_str(s))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next().trim();\n            int res = s.charAt(0) - '0';\n            for (int i = 1; i < s.length(); i += 2) {\n                char op = s.charAt(i);\n                int val = s.charAt(i + 1) - '0';\n                if (op == 'A') res &= val;\n                else if (op == 'B') res |= val;\n                else if (op == 'C') res ^= val;\n            }\n            System.out.println(res);\n        }\n    }\n}\n",
      "csharp": "using System;\n\npublic class Solution {\n    public static void Main() {\n        string s = Console.ReadLine()?.Trim() ?? \"\";\n        if (string.IsNullOrEmpty(s)) return;\n        int res = s[0] - '0';\n        for (int i = 1; i < s.Length; i += 2) {\n            char op = s[i];\n            int val = s[i + 1] - '0';\n            if (op == 'A') res &= val;\n            else if (op == 'B') res |= val;\n            else if (op == 'C') res ^= val;\n        }\n        Console.WriteLine(res);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        int res = s[0] - '0';\n        for (size_t i = 1; i < s.length(); i += 2) {\n            char op = s[i];\n            int val = s[i + 1] - '0';\n            if (op == 'A') res &= val;\n            else if (op == 'B') res |= val;\n            else if (op == 'C') res ^= val;\n        }\n        cout << res << endl;\n    }\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-19",
    "title": "Problem 19: Equilibrium Index",
    "difficulty": "Medium",
    "timeMinutes": 20,
    "description": "An equilibrium index of an array is an index such that the sum of elements at lower indexes equals the sum of elements at higher indexes.\nReturn the lowest equilibrium index (0-based). If no such index exists, return -1.",
    "inputFormat": "Space-separated array elements",
    "outputFormat": "Single integer index",
    "constraints": "1 <= len(arr) <= 10^5",
    "sampleInput": "-7 1 5 2 -4 3 0",
    "sampleOutput": "3",
    "explanation": "arr[3] = 2. Lower sum: -7 + 1 + 5 = -1. Higher sum: -4 + 3 + 0 = -1. Equilibrium index is 3.",
    "starterCode": {
      "python": "import sys\n\ndef equilibrium_index(arr):\n    total = sum(arr)\n    left_sum = 0\n    for i, x in enumerate(arr):\n        if left_sum == total - left_sum - x:\n            return i\n        left_sum += x\n    return -1\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(equilibrium_index(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        long total = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            list.add(x);\n            total += x;\n        }\n        long leftSum = 0;\n        for (int i = 0; i < list.size(); i++) {\n            if (leftSum == total - leftSum - list.get(i)) {\n                System.out.println(i); return;\n            }\n            leftSum += list.get(i);\n        }\n        System.out.println(-1);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(long.Parse).ToArray();\n        if (arr == null) { Console.WriteLine(-1); return; }\n        long total = arr.Sum(), leftSum = 0;\n        for (int i = 0; i < arr.Length; i++) {\n            if (leftSum == total - leftSum - arr[i]) { Console.WriteLine(i); return; }\n            leftSum += arr[i];\n        }\n        Console.WriteLine(-1);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<long long> arr;\n    long long x, total = 0;\n    while(cin >> x) { arr.push_back(x); total += x; }\n    long long leftSum = 0;\n    for(size_t i = 0; i < arr.size(); i++) {\n        if(leftSum == total - leftSum - arr[i]) { cout << i << endl; return 0; }\n        leftSum += arr[i];\n    }\n    cout << -1 << endl;\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "-7 1 5 2 -4 3 0",
        "expected": "3"
      },
      {
        "input": "1 2 3",
        "expected": "-1"
      },
      {
        "input": "1",
        "expected": "0",
        "hidden": true
      },
      {
        "input": "1 2 3 4 6",
        "expected": "3",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef equilibrium_index(arr):\n    total = sum(arr)\n    left_sum = 0\n    for i, x in enumerate(arr):\n        if left_sum == total - left_sum - x:\n            return i\n        left_sum += x\n    return -1\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        print(equilibrium_index(list(map(int, line.split()))))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        long total = 0;\n        while (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            list.add(x);\n            total += x;\n        }\n        long leftSum = 0;\n        for (int i = 0; i < list.size(); i++) {\n            if (leftSum == total - leftSum - list.get(i)) {\n                System.out.println(i); return;\n            }\n            leftSum += list.get(i);\n        }\n        System.out.println(-1);\n    }\n}\n",
      "csharp": "using System;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(long.Parse).ToArray();\n        if (arr == null) { Console.WriteLine(-1); return; }\n        long total = arr.Sum(), leftSum = 0;\n        for (int i = 0; i < arr.Length; i++) {\n            if (leftSum == total - leftSum - arr[i]) { Console.WriteLine(i); return; }\n            leftSum += arr[i];\n        }\n        Console.WriteLine(-1);\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<long long> arr;\n    long long x, total = 0;\n    while(cin >> x) { arr.push_back(x); total += x; }\n    long long leftSum = 0;\n    for(size_t i = 0; i < arr.size(); i++) {\n        if(leftSum == total - leftSum - arr[i]) { cout << i << endl; return 0; }\n        leftSum += arr[i];\n    }\n    cout << -1 << endl;\n    return 0;\n}\n"
    }
  },
  {
    "id": "code-20",
    "title": "Problem 20: Two Sum Target Pair",
    "difficulty": "Easy",
    "timeMinutes": 15,
    "description": "Given a target sum S and an array of integers, return \"YES\" if there exist two distinct elements whose sum equals S, otherwise return \"NO\".",
    "inputFormat": "Line 1: Target S\nLine 2: Array elements",
    "outputFormat": "\"YES\" or \"NO\"",
    "constraints": "Array size >= 2",
    "sampleInput": "14\n2 7 11 15",
    "sampleOutput": "NO",
    "explanation": "No two elements sum to 14.",
    "starterCode": {
      "python": "import sys\n\ndef two_sum(target, arr):\n    seen = set()\n    for x in arr:\n        if target - x in seen: return \"YES\"\n        seen.add(x)\n    return \"NO\"\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        target = int(lines[0])\n        arr = list(map(int, lines[1].split()))\n        print(two_sum(target, arr))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int target = sc.nextInt();\n            Set<Integer> seen = new HashSet<>();\n            boolean found = false;\n            while (sc.hasNextInt()) {\n                int x = sc.nextInt();\n                if (seen.contains(target - x)) { found = true; break; }\n                seen.add(x);\n            }\n            System.out.println(found ? \"YES\" : \"NO\");\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        int target = int.Parse(Console.ReadLine() ?? \"0\");\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse);\n        var seen = new HashSet<int>();\n        bool found = false;\n        if (arr != null) {\n            foreach (int x in arr) {\n                if (seen.Contains(target - x)) { found = true; break; }\n                seen.Add(x);\n            }\n        }\n        Console.WriteLine(found ? \"YES\" : \"NO\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int target;\n    if (cin >> target) {\n        unordered_set<int> seen;\n        int x;\n        bool found = false;\n        while (cin >> x) {\n            if (seen.count(target - x)) { found = true; break; }\n            seen.insert(x);\n        }\n        cout << (found ? \"YES\" : \"NO\") << endl;\n    }\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "input": "9\n2 7 11 15",
        "expected": "YES"
      },
      {
        "input": "14\n2 7 11 15",
        "expected": "NO"
      },
      {
        "input": "10\n5 5 1",
        "expected": "YES",
        "hidden": true
      },
      {
        "input": "20\n1 2 3 4 5",
        "expected": "NO",
        "hidden": true
      }
    ],
    "solutionCode": {
      "python": "import sys\n\ndef two_sum(target, arr):\n    seen = set()\n    for x in arr:\n        if target - x in seen: return \"YES\"\n        seen.add(x)\n    return \"NO\"\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        target = int(lines[0])\n        arr = list(map(int, lines[1].split()))\n        print(two_sum(target, arr))\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int target = sc.nextInt();\n            Set<Integer> seen = new HashSet<>();\n            boolean found = false;\n            while (sc.hasNextInt()) {\n                int x = sc.nextInt();\n                if (seen.contains(target - x)) { found = true; break; }\n                seen.add(x);\n            }\n            System.out.println(found ? \"YES\" : \"NO\");\n        }\n    }\n}\n",
      "csharp": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Solution {\n    public static void Main() {\n        int target = int.Parse(Console.ReadLine() ?? \"0\");\n        var arr = Console.ReadLine()?.Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse);\n        var seen = new HashSet<int>();\n        bool found = false;\n        if (arr != null) {\n            foreach (int x in arr) {\n                if (seen.Contains(target - x)) { found = true; break; }\n                seen.Add(x);\n            }\n        }\n        Console.WriteLine(found ? \"YES\" : \"NO\");\n    }\n}\n",
      "cpp": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int target;\n    if (cin >> target) {\n        unordered_set<int> seen;\n        int x;\n        bool found = false;\n        while (cin >> x) {\n            if (seen.count(target - x)) { found = true; break; }\n            seen.insert(x);\n        }\n        cout << (found ? \"YES\" : \"NO\") << endl;\n    }\n    return 0;\n}\n"
    }
  }
];
