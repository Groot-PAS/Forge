// Simple Calculator Logic
// Global constants & state
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator-buttons .btn');
let currentInput = '';
let lastResult = null;

// Utility functions
function updateDisplay(value) {
  display.value = value;
}

function clearAll() {
  currentInput = '';
  lastResult = null;
  updateDisplay('0');
}

function backspace() {
  // Remove the last character from the current input
  currentInput = currentInput.slice(0, -1) || '';
  updateDisplay(currentInput || '0');
}

// Expression evaluation (safe-ish)
function evaluateExpression(expr) {
  try {
    // Remove any characters that are not numbers, operators, decimal point or parentheses
    const sanitized = expr.replace(/[^0-9.+\-*/()]/g, '');
    // Evaluate the sanitized expression
    const result = Function('return ' + sanitized)();
    if (!isFinite(result)) {
      throw new Error('Math error');
    }
    return result;
  } catch (e) {
    return 'Error';
  }
}

// Helper to determine if a character is an operator
function isOperator(ch) {
  return ['+', '-', '*', '/'].includes(ch);
}

// Main input handler
function handleInput(key) {
  // Digits and decimal point
  if ((key >= '0' && key <= '9') || key === '.') {
    currentInput += key;
    updateDisplay(currentInput);
    return;
  }

  // Operators (+, -, *, /)
  if (isOperator(key)) {
    // Prevent consecutive operators
    const trimmed = currentInput.trim();
    if (trimmed.endsWith('+') || trimmed.endsWith('-') || trimmed.endsWith('*') || trimmed.endsWith('/')) {
      // Replace the last operator with the new one
      currentInput = trimmed.slice(0, -1);
    }
    // Add spacing around the operator for easier parsing
    if (currentInput === '' && key === '-') {
      // Allow unary minus at the start of an expression
      currentInput = '-';
    } else {
      currentInput = currentInput.trim() + ' ' + key + ' ';
    }
    updateDisplay(currentInput.trim());
    return;
  }

  // Equals
  if (key === '=') {
    const result = evaluateExpression(currentInput);
    lastResult = result;
    updateDisplay(result);
    // Store result as new input for further calculations
    currentInput = String(result);
    return;
  }

  // Clear
  if (key === 'C') {
    clearAll();
    return;
  }

  // Backspace
  if (key === '←') {
    backspace();
    return;
  }
}

// Attach click listeners to all buttons
buttons.forEach(button => {
  const key = button.dataset.key;
  button.addEventListener('click', () => handleInput(key));
});

// Keyboard support
document.addEventListener('keydown', e => {
  const allowed = '0123456789.+-*/EnterBackspaceEscape';
  if (allowed.includes(e.key) || e.key === 'Enter') {
    e.preventDefault();
    const keyMap = {
      'Enter': '=',
      'Escape': 'C',
      'Backspace': '←'
    };
    const mappedKey = keyMap[e.key] || e.key;
    handleInput(mappedKey);
  }
});

// Initialization
function initCalculator() {
  clearAll();
}
window.addEventListener('DOMContentLoaded', initCalculator);
