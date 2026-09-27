# Calculator Web App

**Short Description:**
A simple, responsive web‑based calculator built with plain HTML, CSS, and JavaScript. It supports basic arithmetic operations, keyboard shortcuts, and graceful error handling.

---

## Tech Stack
- **HTML** – Structure of the calculator UI.
- **CSS** – Styling and responsive layout for desktop and mobile devices.
- **JavaScript** – Core logic for calculations, input handling, and UI interactions.

---

## Features
- Basic arithmetic: addition, subtraction, multiplication, division.
- Clickable on‑screen buttons for numbers and operations.
- Full keyboard support:
  - Numbers `0–9`
  - Operators `+`, `-`, `*`, `/`
  - `Enter` to evaluate (`=`)
  - `Esc` to clear all input
  - `Backspace` to delete the last character (←)
- Real‑time display of the current expression and result.
- Error handling for invalid expressions (e.g., division by zero) with a user‑friendly message.
- Responsive design that adapts to various screen sizes, working smoothly on both desktop browsers and mobile devices.

---

## Setup & Run
1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari, etc.).
3. No additional build steps, package managers, or servers are required.

---

## Usage Guide
### Button Layout
- **Numbers (0‑9):** Click or press the corresponding numeric keys.
- **Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division).
- **Equals (`=`):** Click the `=` button or press **Enter**.
- **Clear:** Click the `C` button or press **Esc** to reset the calculator.
- **Backspace (←):** Click the backspace button or press **Backspace** to delete the last entered character.

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0‑9` | Input number |
| `+ - * /` | Input operator |
| `Enter` | Evaluate expression (`=`) |
| `Esc` | Clear all input |
| `Backspace` | Delete last character |

### Error Handling
- If the user attempts an invalid operation (e.g., division by zero) or enters a malformed expression, the calculator displays **"Error"** in the result area.
- The display clears automatically after the next valid input, allowing the user to continue without manual reset.

---

## Responsive Design
The UI uses flexible CSS grid and media queries to ensure that button sizes and layout adapt to different viewport widths. It works equally well on:
- Desktop monitors and laptops.
- Tablets and smartphones (touch‑friendly buttons).

---

## License
MIT License (placeholder – replace with actual license text when finalizing the project).
