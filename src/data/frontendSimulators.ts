export interface FrontendSimulatorProblem {
  id: string;
  title: string;
  category: 'DOM & Events' | 'State & Tables' | 'Components' | 'UI Systems';
  scenario: string;
  requirements: string[];
  initialHtml: string;
  initialCss: string;
  initialJs: string;
  solutionJs: string;
  solutionCss?: string;
  testChecks: {
    name: string;
    description: string;
    testFnString: string;
  }[];
}

export const FRONTEND_SIMULATORS: FrontendSimulatorProblem[] = [
  {
    id: 'sim-1',
    title: 'Simulator 1: Dynamic Product Search Filter',
    category: 'DOM & Events',
    scenario: 'Accenture front-end automated test runner tests real-time filtering of a product list using inputs and data attributes.',
    requirements: [
      'Add 5 items with class "product" and "data-name" attributes (banana, orange, pineapple, pomegranate, mango)',
      'Style list items with font size 25px (!important)',
      'Set initial input value to "nana"',
      'Invoke filterProducts() immediately on page load so items not matching "nana" are hidden right away',
      'Filter real-time on "input" event: compare data-name with input value (case-insensitive); hide non-matching items with display = "none"',
    ],
    initialHtml: `<div class="p-4 space-y-4 font-sans max-w-md mx-auto">
  <input type="text" id="search-input" value="nana" placeholder="Search products..." class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800" />
  <ul class="product space-y-1">
    <li class="product" data-name="banana">Banana</li>
    <li class="product" data-name="orange">Orange</li>
    <li class="product" data-name="pineapple">Pineapple</li>
    <li class="product" data-name="pomegranate">Pomegranate</li>
    <li class="product" data-name="mango">Mango</li>
  </ul>
</div>`,
    initialCss: `li.product,
.product li {
  font-size: 25px !important;
  color: #334155;
  padding: 4px 8px;
  border-bottom: 1px solid #f1f5f9;
}`,
    initialJs: `const searchInput = document.getElementById('search-input');
const productList = document.querySelectorAll('.product li, li.product');

function filterProducts() {
  const query = (searchInput.value || '').toLowerCase().trim();
  productList.forEach(item => {
    const dataName = (item.getAttribute('data-name') || '').toLowerCase();
    item.style.display = dataName.includes(query) ? "" : "none";
  });
}

// Initial invocation to apply the pre-filled "nana" query immediately
filterProducts();
searchInput.addEventListener('input', filterProducts);`,
    solutionJs: `const searchInput = document.getElementById('search-input');
const productList = document.querySelectorAll('.product li, li.product');

function filterProducts() {
  const query = (searchInput.value || '').toLowerCase().trim();
  productList.forEach(item => {
    const dataName = (item.getAttribute('data-name') || '').toLowerCase();
    item.style.display = dataName.includes(query) ? "" : "none";
  });
}

filterProducts();
searchInput.addEventListener('input', filterProducts);`,
    testChecks: [
      {
        name: 'Initial Filtering Execution',
        description: 'Verify filterProducts() ran immediately on load: "orange" and "mango" should be hidden.',
        testFnString: `(doc) => {
          const orange = doc.querySelector('[data-name="orange"]');
          const banana = doc.querySelector('[data-name="banana"]');
          return orange && orange.style.display === 'none' && banana && banana.style.display !== 'none';
        }`,
      },
      {
        name: 'Input Event Dynamic Visibility',
        description: 'Typing "pom" shows pomegranate and hides banana.',
        testFnString: `(doc) => {
          const input = doc.getElementById('search-input');
          input.value = 'pom';
          input.dispatchEvent(new Event('input'));
          const pom = doc.querySelector('[data-name="pomegranate"]');
          const banana = doc.querySelector('[data-name="banana"]');
          return pom && pom.style.display !== 'none' && banana && banana.style.display === 'none';
        }`,
      },
      {
        name: 'Computed Font Size 25px',
        description: 'Checks that .product list items have 25px font size applied.',
        testFnString: `(doc) => {
          const li = doc.querySelector('.product li, li.product');
          if (!li) return false;
          return window.getComputedStyle(li).fontSize === '25px';
        }`,
      },
    ],
  },
  {
    id: 'sim-2',
    title: 'Simulator 2: Interactive Shopping Cart',
    category: 'State & Tables',
    scenario: 'Shopping cart interface with specific button IDs and dynamic quantity counter updates.',
    requirements: [
      'Buttons must have exact IDs: "addToCartChips", "addToCartSoda", "addToCartCookies"',
      'Table, th, td borders must be styled with 2px solid #0056b3 !important and border-collapse: collapse',
      'Clicking a button increments quantity in the corresponding shopping cart row with class "cart-qty"',
    ],
    initialHtml: `<div class="p-4 space-y-4 font-sans max-w-lg mx-auto">
  <h3 class="text-sm font-bold text-slate-800">Items Available</h3>
  <table class="w-full text-xs text-left mb-4">
    <tr>
      <td>Chips ($2.50)</td>
      <td><button id="addToCartChips" class="px-2 py-1 bg-blue-600 text-white rounded text-xs" onclick="addToCart('Chips')">Add to Cart</button></td>
    </tr>
    <tr>
      <td>Soda ($1.50)</td>
      <td><button id="addToCartSoda" class="px-2 py-1 bg-blue-600 text-white rounded text-xs" onclick="addToCart('Soda')">Add to Cart</button></td>
    </tr>
    <tr>
      <td>Cookies ($3.00)</td>
      <td><button id="addToCartCookies" class="px-2 py-1 bg-blue-600 text-white rounded text-xs" onclick="addToCart('Cookies')">Add to Cart</button></td>
    </tr>
  </table>

  <h3 class="text-sm font-bold text-slate-800">Shopping Cart</h3>
  <table class="w-full text-xs text-left">
    <thead>
      <tr><th>Item</th><th>Qty</th></tr>
    </thead>
    <tbody id="cart-body">
      <tr data-item="Chips"><td>Chips</td><td class="cart-qty">0</td></tr>
      <tr data-item="Soda"><td>Soda</td><td class="cart-qty">0</td></tr>
      <tr data-item="Cookies"><td>Cookies</td><td class="cart-qty">0</td></tr>
    </tbody>
  </table>
</div>`,
    initialCss: `table, th, td {
  border: 2px solid #0056b3 !important;
  border-collapse: collapse;
  padding: 6px 10px;
}`,
    initialJs: `function addToCart(itemName) {
  const row = document.querySelector(\`#cart-body tr[data-item="\${itemName}"]\`);
  if (row) {
    const qtyCell = row.querySelector('.cart-qty');
    const currentQty = parseInt(qtyCell.textContent.trim(), 10) || 0;
    qtyCell.textContent = currentQty + 1;
  }
}`,
    solutionJs: `function addToCart(itemName) {
  const row = document.querySelector(\`#cart-body tr[data-item="\${itemName}"]\`);
  if (row) {
    const qtyCell = row.querySelector('.cart-qty');
    const currentQty = parseInt(qtyCell.textContent.trim(), 10) || 0;
    qtyCell.textContent = currentQty + 1;
  }
}`,
    testChecks: [
      {
        name: 'Required Button IDs Present',
        description: 'Verify addToCartChips, addToCartSoda, and addToCartCookies exist in DOM.',
        testFnString: `(doc) => {
          return Boolean(doc.getElementById('addToCartChips') && doc.getElementById('addToCartSoda') && doc.getElementById('addToCartCookies'));
        }`,
      },
      {
        name: 'Quantity Increment Click Behavior',
        description: 'Clicking addToCartSoda increments soda quantity from 0 to 1.',
        testFnString: `(doc) => {
          const sodaBtn = doc.getElementById('addToCartSoda');
          if (!sodaBtn) return false;
          sodaBtn.click();
          const sodaQty = doc.querySelector('#cart-body tr[data-item="Soda"] .cart-qty');
          return sodaQty && parseInt(sodaQty.textContent.trim(), 10) === 1;
        }`,
      },
    ],
  },
  {
    id: 'sim-3',
    title: 'Simulator 3: Product Star Rating Component',
    category: 'Components',
    scenario: 'Build a star rating widget that highlights selected and preceding stars.',
    requirements: [
      'Provide 5 star elements with class "star" inside container ".rating-stars"',
      'Function setRating(rating) toggles class ".filled" on stars with index < rating',
      'Style .filled with color: #ffd700 !important',
    ],
    initialHtml: `<div class="p-6 font-sans text-center max-w-sm mx-auto">
  <p class="text-sm font-bold text-slate-700 mb-2">Rate this product:</p>
  <div class="rating-stars flex justify-center gap-2 text-3xl cursor-pointer">
    <span class="star" onclick="setRating(1)">★</span>
    <span class="star" onclick="setRating(2)">★</span>
    <span class="star" onclick="setRating(3)">★</span>
    <span class="star" onclick="setRating(4)">★</span>
    <span class="star" onclick="setRating(5)">★</span>
  </div>
</div>`,
    initialCss: `.star {
  color: #cbd5e1;
  transition: color 0.15s ease;
  user-select: none;
}
.filled {
  color: #ffd700 !important;
}`,
    initialJs: `function setRating(rating) {
  document.querySelectorAll('.rating-stars .star').forEach((star, index) => {
    star.classList.toggle('filled', index < rating);
  });
}`,
    solutionJs: `function setRating(rating) {
  document.querySelectorAll('.rating-stars .star').forEach((star, index) => {
    star.classList.toggle('filled', index < rating);
  });
}`,
    testChecks: [
      {
        name: '5 Star Elements Present',
        description: 'Checks there are exactly 5 elements with class .star.',
        testFnString: `(doc) => {
          return doc.querySelectorAll('.rating-stars .star').length === 5;
        }`,
      },
      {
        name: 'setRating(3) Active State',
        description: 'Calling setRating(3) fills exactly 3 stars.',
        testFnString: `(doc) => {
          const stars = doc.querySelectorAll('.rating-stars .star');
          if (stars.length < 5) return false;
          if (stars[2]) stars[2].click();
          const filled = doc.querySelectorAll('.rating-stars .star.filled');
          return filled.length === 3;
        }`,
      },
    ],
  },
  {
    id: 'sim-4',
    title: 'Simulator 4: Chatbot & iPod Audio Controller Interfaces',
    category: 'UI Systems',
    scenario: 'Two-part simulated UI component test for Accenture front-end assessment.',
    requirements: [
      'Chatbot: user messages styled with background #cfe2ff; welcome message has class ".bot-message"; append automated bot replies on submit',
      'iPod Interface: Add a button labeled "Next" inside controls container; style background "pink"; update action display with button text on click',
    ],
    initialHtml: `<div class="p-4 space-y-6 max-w-md mx-auto font-sans">
  <!-- Part A: Chatbot -->
  <div class="border border-slate-300 rounded-xl p-3 bg-white space-y-2">
    <div class="text-xs font-bold text-slate-700">Chatbot Interface</div>
    <div id="chat-messages" class="h-32 overflow-y-auto space-y-1.5 p-2 bg-slate-50 rounded-lg text-xs">
      <div class="bot-message p-2 rounded-lg bg-slate-200">Hello! How can I assist you today?</div>
    </div>
    <div class="flex gap-2">
      <input type="text" id="chat-input" placeholder="Type a message..." class="flex-1 px-2.5 py-1.5 border rounded text-xs" />
      <button id="send-chat" class="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-semibold" onclick="sendMessage()">Send</button>
    </div>
  </div>

  <!-- Part B: iPod Controller -->
  <div class="border border-slate-300 rounded-xl p-3 bg-white space-y-2">
    <div class="text-xs font-bold text-slate-700">iPod Interface</div>
    <div id="ipod-display" class="p-2 bg-slate-100 rounded text-center text-xs font-bold text-slate-800">
      Current Action: <span id="action-text">None</span>
    </div>
    <div id="ipod-controls" class="flex justify-center gap-2">
      <button class="ipod-btn px-3 py-1.5 rounded text-xs" onclick="setAction('Prev')">Prev</button>
      <button class="ipod-btn px-3 py-1.5 rounded text-xs" onclick="setAction('Play')">Play</button>
      <button id="next-btn" class="ipod-btn px-3 py-1.5 rounded text-xs" onclick="setAction('Next')">Next</button>
    </div>
  </div>
</div>`,
    initialCss: `.user-message {
  background-color: #cfe2ff !important;
  color: #084298;
  padding: 6px 10px;
  border-radius: 8px;
  margin-left: auto;
  max-width: 80%;
}
.bot-message {
  background-color: #f1f5f9;
  color: #1e293b;
  padding: 6px 10px;
  border-radius: 8px;
  max-width: 80%;
}
#ipod-controls .ipod-btn {
  background-color: pink !important;
  color: #831843;
  font-weight: 600;
  border: 1px solid #f472b6;
}`,
    initialJs: `function sendMessage() {
  const input = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const text = (input.value || '').trim();
  if (!text) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'user-message';
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);
  input.value = '';

  setTimeout(() => {
    const botReply = document.createElement('div');
    botReply.className = 'bot-message';
    botReply.textContent = 'Accenture Bot: Received "' + text + '"';
    chatMessages.appendChild(botReply);
  }, 200);
}

function setAction(action) {
  document.getElementById('action-text').textContent = action;
}`,
    solutionJs: `function sendMessage() {
  const input = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const text = (input.value || '').trim();
  if (!text) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'user-message';
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);
  input.value = '';

  setTimeout(() => {
    const botReply = document.createElement('div');
    botReply.className = 'bot-message';
    botReply.textContent = 'Accenture Bot: Received "' + text + '"';
    chatMessages.appendChild(botReply);
  }, 200);
}

function setAction(action) {
  document.getElementById('action-text').textContent = action;
}`,
    testChecks: [
      {
        name: 'Chatbot User Message Color & Styling',
        description: 'Sending a chat message generates an element with class .user-message.',
        testFnString: `(doc) => {
          const input = doc.getElementById('chat-input');
          const btn = doc.getElementById('send-chat');
          if (!input || !btn) return false;
          input.value = 'Hello';
          btn.click();
          const userMsg = doc.querySelector('.user-message');
          return Boolean(userMsg);
        }`,
      },
      {
        name: 'iPod Next Button & Pink Background',
        description: 'Verify "Next" button exists with pink background style.',
        testFnString: `(doc) => {
          const nextBtn = doc.getElementById('next-btn') || Array.from(doc.querySelectorAll('.ipod-btn')).find(b => b.textContent.includes('Next'));
          if (!nextBtn) return false;
          nextBtn.click();
          const actionText = doc.getElementById('action-text');
          return actionText && actionText.textContent.includes('Next');
        }`,
      },
    ],
  },
];
