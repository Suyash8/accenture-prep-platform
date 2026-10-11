export interface SqlProblem {
  id: string;
  title: string;
  scenario: string;
  schemaDescription: string;
  solutionQuery: string;
  sampleTables: {
    name: string;
    columns: string[];
    rows: (string | number | null)[][];
  }[];
  expectedResult: {
    columns: string[];
    rows: (string | number | null)[][];
  };
  explanation: string;
  category: 'Joins' | 'Aggregation' | 'Subqueries' | 'Filtering' | 'Date/Time';
}

export const ACCENTURE_SQL_PROBLEMS: SqlProblem[] = [
  {
    id: 'sql-1',
    title: '1. Sports Registrations in 2024 with Paid Status',
    scenario: 'Retrieve players registered for sports in 2024 whose payment status is "Paid". Output first name, last name, and total count of sports registered.',
    schemaDescription: `Tables:
- player(player_id INT, first_name VARCHAR, last_name VARCHAR)
- registration(reg_id INT, player_id INT, sport_id INT, payment_status VARCHAR, reg_date DATE)`,
    solutionQuery: `SELECT
    p.first_name AS "First Name",
    p.last_name AS "Last Name",
    COUNT(r.sport_id) AS "Number of Sports Registered"
FROM player p
JOIN registration r ON p.player_id = r.player_id
WHERE r.payment_status = 'Paid'
  AND YEAR(r.reg_date) = 2024
GROUP BY p.player_id, p.first_name, p.last_name;`,
    sampleTables: [
      {
        name: 'player',
        columns: ['player_id', 'first_name', 'last_name'],
        rows: [
          [101, 'Alex', 'Morgan'],
          [102, 'David', 'Beckham'],
          [103, 'Serena', 'Williams'],
        ],
      },
      {
        name: 'registration',
        columns: ['reg_id', 'player_id', 'sport_id', 'payment_status', 'reg_date'],
        rows: [
          [1, 101, 12, 'Paid', '2024-03-15'],
          [2, 101, 14, 'Paid', '2024-05-20'],
          [3, 102, 12, 'Pending', '2024-02-10'],
          [4, 103, 19, 'Paid', '2023-11-01'],
        ],
      },
    ],
    expectedResult: {
      columns: ['First Name', 'Last Name', 'Number of Sports Registered'],
      rows: [
        ['Alex', 'Morgan', 2],
      ],
    },
    explanation: 'Joins player and registration on player_id, filters by payment_status = "Paid" and YEAR(reg_date) = 2024, and groups by player.',
    category: 'Joins',
  },
  {
    id: 'sql-2',
    title: '2. New York Customers with >1 Product Across All Orders',
    scenario: 'Find customers located in "New York" who have ordered more than 1 total quantity across all orders. Return customer name, total spending, and distinct products bought.',
    schemaDescription: `Tables:
- customers(CUSTOMER_ID INT, CUSTOMER_NAME VARCHAR, CITY VARCHAR)
- orders(ORDER_ID INT, CUSTOMER_ID INT)
- order_items(ITEM_ID INT, ORDER_ID INT, PRODUCT_NAME VARCHAR, QUANTITY INT, PRICE DECIMAL)`,
    solutionQuery: `SELECT 
    c.CUSTOMER_NAME,
    SUM(oi.QUANTITY * oi.PRICE) AS total_spending,
    COUNT(DISTINCT oi.PRODUCT_NAME) AS distinct_products_bought
FROM customers c
JOIN orders o ON c.CUSTOMER_ID = o.CUSTOMER_ID
JOIN order_items oi ON o.ORDER_ID = oi.ORDER_ID
WHERE c.CITY = 'New York'
GROUP BY c.CUSTOMER_ID, c.CUSTOMER_NAME
HAVING SUM(oi.QUANTITY) > 1;`,
    sampleTables: [
      {
        name: 'customers',
        columns: ['CUSTOMER_ID', 'CUSTOMER_NAME', 'CITY'],
        rows: [
          [1, 'Alice Smith', 'New York'],
          [2, 'Bob Jones', 'Chicago'],
          [3, 'Carol Danvers', 'New York'],
        ],
      },
      {
        name: 'order_items',
        columns: ['ORDER_ID', 'PRODUCT_NAME', 'QUANTITY', 'PRICE'],
        rows: [
          [10, 'Headphones', 2, 50.0],
          [10, 'Mouse', 1, 25.0],
          [11, 'Keyboard', 1, 40.0],
        ],
      },
    ],
    expectedResult: {
      columns: ['CUSTOMER_NAME', 'total_spending', 'distinct_products_bought'],
      rows: [
        ['Alice Smith', 125.0, 2],
      ],
    },
    explanation: 'Multi-table join (customers -> orders -> order_items), filtered by CITY="New York", grouping by customer with HAVING SUM(QUANTITY) > 1.',
    category: 'Aggregation',
  },
  {
    id: 'sql-3',
    title: '3. Highest Paid Employee in Each Department (Handles Ties)',
    scenario: 'Find all employees who earn the maximum salary in their respective department. Must handle salary ties correctly without excluding co-earners.',
    schemaDescription: `Tables:
- Employees(EMP_ID INT, NAME VARCHAR, DEPARTMENT VARCHAR, SALARY DECIMAL)`,
    solutionQuery: `SELECT 
    DEPARTMENT AS department, 
    NAME AS name, 
    SALARY AS salary
FROM Employees e
WHERE SALARY = (
    SELECT MAX(SALARY)
    FROM Employees
    WHERE DEPARTMENT = e.DEPARTMENT
);`,
    sampleTables: [
      {
        name: 'Employees',
        columns: ['EMP_ID', 'NAME', 'DEPARTMENT', 'SALARY'],
        rows: [
          [1, 'Rohan', 'Engineering', 95000],
          [2, 'Priya', 'Engineering', 95000],
          [3, 'Amit', 'Engineering', 80000],
          [4, 'Neha', 'HR', 72000],
          [5, 'Raj', 'HR', 65000],
        ],
      },
    ],
    expectedResult: {
      columns: ['department', 'name', 'salary'],
      rows: [
        ['Engineering', 'Rohan', 95000],
        ['Engineering', 'Priya', 95000],
        ['HR', 'Neha', 72000],
      ],
    },
    explanation: 'Uses a correlated subquery comparing each employee\'s salary to the MAX(SALARY) for their department. Naturally handles ties where multiple employees share the top salary.',
    category: 'Subqueries',
  },
  {
    id: 'sql-4',
    title: '4. Departments with Average Salary Exceeding Global Average',
    scenario: 'Identify department names whose average employee salary is strictly greater than the overall company-wide average salary across all departments.',
    schemaDescription: `Tables:
- Departments(DEPARTMENT_ID INT, DEPARTMENT_NAME VARCHAR)
- Employees(EMPLOYEE_ID INT, DEPARTMENT_ID INT, SALARY DECIMAL)`,
    solutionQuery: `SELECT d.DEPARTMENT_NAME
FROM Departments d
JOIN Employees e ON d.DEPARTMENT_ID = e.DEPARTMENT_ID
GROUP BY d.DEPARTMENT_ID, d.DEPARTMENT_NAME
HAVING AVG(e.SALARY) > (SELECT AVG(SALARY) FROM Employees);`,
    sampleTables: [
      {
        name: 'Departments',
        columns: ['DEPARTMENT_ID', 'DEPARTMENT_NAME'],
        rows: [
          [1, 'Cloud Architecture'],
          [2, 'Quality Assurance'],
          [3, 'Data Science'],
        ],
      },
      {
        name: 'Employees',
        columns: ['EMPLOYEE_ID', 'DEPARTMENT_ID', 'SALARY'],
        rows: [
          [10, 1, 120000],
          [11, 1, 110000],
          [12, 2, 50000],
          [13, 2, 55000],
          [14, 3, 105000],
        ],
      },
    ],
    expectedResult: {
      columns: ['DEPARTMENT_NAME'],
      rows: [
        ['Cloud Architecture'],
        ['Data Science'],
      ],
    },
    explanation: 'Uses an uncorrelated scalar subquery (SELECT AVG(SALARY) FROM Employees) in the HAVING clause of an aggregated join.',
    category: 'Aggregation',
  },
  {
    id: 'sql-5',
    title: '5. Instructors Starting Courses After 10:00 AM',
    scenario: 'List distinct instructor names whose scheduled sections start strictly after 10:00:00 AM.',
    schemaDescription: `Tables:
- instructor(instructor_id INT, first_name VARCHAR, last_name VARCHAR)
- section(section_id INT, instructor_id INT, schedule_id INT)
- schedule(schedule_id INT, starttime TIME)`,
    solutionQuery: `SELECT DISTINCT
    i.last_name AS "Instructor Last Name",
    i.first_name AS "Instructor First Name",
    s.starttime AS "Start Time"
FROM instructor i
JOIN section sec ON i.instructor_id = sec.instructor_id
JOIN schedule s ON sec.schedule_id = s.schedule_id
WHERE s.starttime > '10:00:00';`,
    sampleTables: [
      {
        name: 'instructor',
        columns: ['instructor_id', 'first_name', 'last_name'],
        rows: [
          [1, 'Alan', 'Turing'],
          [2, 'Grace', 'Hopper'],
          [3, 'Ada', 'Lovelace'],
        ],
      },
      {
        name: 'schedule',
        columns: ['schedule_id', 'starttime'],
        rows: [
          [101, '09:00:00'],
          [102, '11:15:00'],
          [103, '14:00:00'],
        ],
      },
    ],
    expectedResult: {
      columns: ['Instructor Last Name', 'Instructor First Name', 'Start Time'],
      rows: [
        ['Hopper', 'Grace', '11:15:00'],
        ['Lovelace', 'Ada', '14:00:00'],
      ],
    },
    explanation: 'Three-table join with time literal comparison s.starttime > "10:00:00" and DISTINCT deduplication.',
    category: 'Date/Time',
  },
  {
    id: 'sql-6',
    title: '6. English Language Movies and Airing Channels',
    scenario: 'Find all English-language movie titles along with the name of the channel airing them.',
    schemaDescription: `Tables:
- movie(MovieID INT, Title VARCHAR, Language VARCHAR)
- airing(AiringID INT, MovieID INT, ChannelID INT)
- channel(ChannelID INT, Name VARCHAR)`,
    solutionQuery: `SELECT
    m.Title AS "MOVIE_NAME",
    c.Name AS "CHANNEL_NAME"
FROM movie m
JOIN airing a ON m.MovieID = a.MovieID
JOIN channel c ON a.ChannelID = c.ChannelID
WHERE m.Language = 'English';`,
    sampleTables: [
      {
        name: 'movie',
        columns: ['MovieID', 'Title', 'Language'],
        rows: [
          [1, 'Inception', 'English'],
          [2, 'Parasite', 'Korean'],
          [3, 'Interstellar', 'English'],
        ],
      },
      {
        name: 'channel',
        columns: ['ChannelID', 'Name'],
        rows: [
          [10, 'HBO'],
          [20, 'Star Movies'],
        ],
      },
    ],
    expectedResult: {
      columns: ['MOVIE_NAME', 'CHANNEL_NAME'],
      rows: [
        ['Inception', 'HBO'],
        ['Interstellar', 'Star Movies'],
      ],
    },
    explanation: 'Joins movie, airing, and channel tables with WHERE filter m.Language = "English".',
    category: 'Joins',
  },
  {
    id: 'sql-7',
    title: '7. Non-Null Episode Airings After 6:00 PM (18:00:00)',
    scenario: 'Retrieve airings where EpisodeID is NOT NULL and the start time is after 18:00:00. Display AiringID, EpisodeID, and Channel Name.',
    schemaDescription: `Tables:
- airing(AiringID INT, EpisodeID INT, ChannelID INT, StartTime DATETIME)
- channel(ChannelID INT, Name VARCHAR)`,
    solutionQuery: `SELECT
    a.AiringID AS "AIRINGID",
    a.EpisodeID AS "EPISODEID",
    c.Name AS "CHANNEL_NAME"
FROM airing a
JOIN channel c ON a.ChannelID = c.ChannelID
WHERE a.EpisodeID IS NOT NULL
  AND TIME(a.StartTime) > '18:00:00';`,
    sampleTables: [
      {
        name: 'airing',
        columns: ['AiringID', 'EpisodeID', 'ChannelID', 'StartTime'],
        rows: [
          [501, 12, 10, '2024-05-01 19:30:00'],
          [502, null, 10, '2024-05-01 20:00:00'],
          [503, 14, 20, '2024-05-01 14:00:00'],
        ],
      },
      {
        name: 'channel',
        columns: ['ChannelID', 'Name'],
        rows: [
          [10, 'HBO HD'],
          [20, 'Discovery'],
        ],
      },
    ],
    expectedResult: {
      columns: ['AIRINGID', 'EPISODEID', 'CHANNEL_NAME'],
      rows: [
        [501, 12, 'HBO HD'],
      ],
    },
    explanation: 'Tests IS NOT NULL nullability checks and TIME(datetime) string comparison.',
    category: 'Date/Time',
  },
  {
    id: 'sql-8',
    title: '8. Zoo Visitors (Excluding Child Tickets & Arctic Enclosures)',
    scenario: 'Find zoo visitors who visited enclosures, filtering out all "Child" tickets and all "Arctic" enclosures.',
    schemaDescription: `Tables:
- visitor(Visitor_ID INT, Name VARCHAR, Ticket_Type VARCHAR)
- enclosure_visit_log(Log_ID INT, Visitor_ID INT, Enclosure_ID INT)
- enclosure(Enclosure_ID INT, Name VARCHAR, Type VARCHAR)`,
    solutionQuery: `SELECT
    v.Name AS "VISITOR_NAME",
    v.Ticket_Type AS "TICKET_TYPE",
    e.Name AS "ENCLOSURE_NAME",
    e.Type AS "TYPE"
FROM visitor v
JOIN enclosure_visit_log evl ON v.Visitor_ID = evl.Visitor_ID
JOIN enclosure e ON evl.Enclosure_ID = e.Enclosure_ID
WHERE v.Ticket_Type <> 'Child'
  AND e.Type <> 'Arctic';`,
    sampleTables: [
      {
        name: 'visitor',
        columns: ['Visitor_ID', 'Name', 'Ticket_Type'],
        rows: [
          [1, 'Mark', 'Adult'],
          [2, 'Sam', 'Child'],
          [3, 'Sarah', 'Senior'],
        ],
      },
      {
        name: 'enclosure',
        columns: ['Enclosure_ID', 'Name', 'Type'],
        rows: [
          [10, 'Savannah Safari', 'Savannah'],
          [20, 'Polar Bear Den', 'Arctic'],
        ],
      },
    ],
    expectedResult: {
      columns: ['VISITOR_NAME', 'TICKET_TYPE', 'ENCLOSURE_NAME', 'TYPE'],
      rows: [
        ['Mark', 'Adult', 'Savannah Safari', 'Savannah'],
      ],
    },
    explanation: 'Uses <> or != inequality operators on two joined tables.',
    category: 'Filtering',
  },
  {
    id: 'sql-9',
    title: '9. Free Movie Airing Duration in Hours (Floating Division)',
    scenario: 'Calculate the duration in hours for all movies with rights type "Free". Ensure floating point division by 60.0.',
    schemaDescription: `Tables:
- movie(MovieID INT, Title VARCHAR, DurationMin INT)
- movielicense(LicenseID INT, MovieRef INT, RightsType VARCHAR)`,
    solutionQuery: `SELECT
    m.Title AS "TITLE",
    (m.DurationMin / 60.0) AS "DURATION_HOURS"
FROM movie m
JOIN movielicense ml ON m.MovieID = ml.MovieRef
WHERE ml.RightsType = 'Free';`,
    sampleTables: [
      {
        name: 'movie',
        columns: ['MovieID', 'Title', 'DurationMin'],
        rows: [
          [1, 'Open Source Doc', 90],
          [2, 'Short Film', 45],
          [3, 'Premium Feature', 150],
        ],
      },
      {
        name: 'movielicense',
        columns: ['LicenseID', 'MovieRef', 'RightsType'],
        rows: [
          [100, 1, 'Free'],
          [101, 2, 'Free'],
          [102, 3, 'Paid'],
        ],
      },
    ],
    expectedResult: {
      columns: ['TITLE', 'DURATION_HOURS'],
      rows: [
        ['Open Source Doc', 1.5],
        ['Short Film', 0.75],
      ],
    },
    explanation: 'Divides integer DurationMin by 60.0 to prevent integer truncation in SQL engines.',
    category: 'Filtering',
  },
];
